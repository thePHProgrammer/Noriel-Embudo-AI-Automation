export function CircuitBackground({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={className}
      style={{
        maskImage:
          "radial-gradient(ellipse 70% 60% at 50% 30%, black 40%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 70% 60% at 50% 30%, black 40%, transparent 100%)",
      }}
      width="100%"
      height="100%"
    >
      <defs>
        <pattern
          id="circuit-grid"
          width="64"
          height="64"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 32H64M32 0V64"
            stroke="rgba(139,150,255,0.16)"
            strokeWidth="1"
          />
          <circle cx="32" cy="32" r="2" fill="rgba(155,93,255,0.35)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit-grid)" />
    </svg>
  );
}
