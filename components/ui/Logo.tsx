export function GoFlyWordmark({ className = '' }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/logo.png"
      alt="GoFly"
      className={`h-11 w-auto object-contain ${className}`}
    />
  );
}
