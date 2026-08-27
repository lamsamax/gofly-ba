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
if (!dev) {
  const buildIdPath = path.join(dir, '.next', 'BUILD_ID');
  if (!fs.existsSync(buildIdPath)) {
    console.log('No production build found — running next build...');
    execSync('npx next build', { cwd: dir, stdio: 'inherit' });
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
