export function Logo() {
  return (
    <div className="flex flex-col items-center sm:items-start">
      <svg
        className="h-8 w-24 text-bosporus-gold sm:h-10 sm:w-28"
        viewBox="0 0 120 40"
        fill="currentColor"
        aria-hidden
      >
        {/* Bosphorus bridge + minarets silhouette */}
        <path d="M8 28 L20 20 L40 22 L60 20 L80 22 L100 20 L112 28 L112 32 L8 32 Z" opacity="0.9" />
        <rect x="18" y="12" width="4" height="20" rx="1" />
        <rect x="98" y="12" width="4" height="20" rx="1" />
      </svg>
      <span className="font-display text-2xl font-bold tracking-tight text-bosporus-gold sm:text-3xl">
        BOSPORUS
      </span>
      <span className="font-script text-base text-white/95 sm:text-lg">Lahmacun & Pide Salonu</span>
    </div>
  );
}
