type LogoProps = {
  /** Footer için biraz daha küçük */
  size?: 'default' | 'sm';
};

export function Logo({ size = 'default' }: LogoProps) {
  const sizeClass =
    size === 'sm'
      ? 'h-9 w-auto max-w-[180px] sm:h-10 sm:max-w-[220px] md:h-11 md:max-w-[240px]'
      : 'h-12 w-auto max-w-[240px] sm:h-14 sm:max-w-[300px] md:h-[4.25rem] md:max-w-[360px] lg:h-20 lg:max-w-[400px]'

  return (
    <div className="flex flex-col items-center sm:items-start">
      <img
        src={`${import.meta.env.BASE_URL}logo-bosporus.png`}
        alt="BOSPORUS Lahmacun & Pide Salonu"
        className={`${sizeClass} object-contain object-left`}
        decoding="async"
      />
    </div>
  );
}
