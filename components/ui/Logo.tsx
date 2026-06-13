export function GoFlyLogo({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="pinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF8C00" />
          <stop offset="50%" stopColor="#FF4500" />
          <stop offset="100%" stopColor="#FF1493" />
        </linearGradient>
      </defs>
      {/* Map pin shape */}
      <path
        d="M50 5C32 5 18 19 18 37C18 55 50 90 50 90C50 90 82 55 82 37C82 19 68 5 50 5Z"
        fill="url(#pinGrad)"
      />
      {/* Inner circle cutout (black) */}
      <circle cx="50" cy="36" r="18" fill="#050505" />
      {/* Airplane icon */}
      <path
        d="M58 28L42 36L46 40L40 46L44 46L50 40L54 44L62 30L58 28Z"
        fill="white"
        transform="rotate(-35, 50, 37)"
      />
    </svg>
  );
}

export function GoFlyWordmark({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <GoFlyLogo size={36} />
      <div className="flex flex-col leading-none">
        <span className="text-xl font-bold tracking-tight">
          <span className="text-white">Go</span>
          <span style={{
            background: 'linear-gradient(135deg, #FF8C00, #FF1493)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>Fly</span>
        </span>
        <span className="text-[7px] tracking-[0.2em] uppercase" style={{ color: '#FF8C00' }}>
          Fly More. Pay Less.
        </span>
      </div>
    </div>
  );
}
