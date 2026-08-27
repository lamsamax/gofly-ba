const { createServer } = require('http');
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');
const next = require('next');

const dir = __dirname;
const dev = process.env.NODE_ENV !== 'production';

// cPanel/Passenger's automated "npm install" sometimes runs the
// postinstall build from a different working directory than the app
// root, which makes `next build` fail to find the app/ folder even
// though the files are in the right place. `dir` above is always
// correct (it's where this file physically lives), so use it to
// build here as a guaranteed fallback if no production build exists.
//
// Passenger can also kill this process mid-build if it takes longer
// than its startup timeout, leaving a partial/corrupt .next folder
// behind. Check for more than just BUILD_ID, and if the build itself
// throws, wipe .next so the next spawn attempt starts a clean build
// instead of repeatedly crashing against broken build output.
function hasCompleteBuild() {
  return ['BUILD_ID', 'routes-manifest.json', 'prerender-manifest.json']
    .every((f) => fs.existsSync(path.join(dir, '.next', f)));
}

function clearBuild(nextDir) {
  try {
    fs.rmSync(nextDir, { recursive: true, force: true });
  } catch (err) {
    console.warn('Could not clear .next before rebuilding:', err.message);
  }
}

if (!dev && !hasCompleteBuild()) {
  console.log('No complete production build found — running next build...');
  const nextDir = path.join(dir, '.next');
  clearBuild(nextDir);
  try {
    execSync('npx next build', {
      cwd: dir,
      stdio: 'inherit',
      // Keep the build's own thread usage minimal too, on top of
      // experimental.cpus:1 in next.config.js — shared hosting can
      // hit its process/thread cap (pthread_create: Resource
      // temporarily unavailable) otherwise.
      env: { ...process.env, UV_THREADPOOL_SIZE: '1' },
    });
  } catch (err) {
    clearBuild(nextDir);
    throw err;
  }
}

const app = next({ dev, dir });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res);
  }).listen(process.env.PORT || 3000, (err) => {
    if (err) throw err;
    console.log('Ready on port', process.env.PORT || 3000);
  });
});
