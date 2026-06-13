export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/[0.04] px-8 md:px-24 py-16">
      <div className="flex flex-col gap-12">

        {/* Gornji dio */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">

          {/* Logo */}
          <div className="flex-shrink-0">
            <p className="font-[family-name:var(--font-cormorant)] text-xl font-light tracking-[0.18em] text-white/50">
              GOFLY
            </p>
            <p className="mt-1.5 text-[9px] tracking-[0.35em] uppercase text-white/20">
              Avanturistička Putovanja Širom Svijeta
            </p>
          </div>

          {/* Linkovi */}
          <div className="flex flex-wrap gap-8">
            <a href="/destinacije" className="text-[9px] tracking-[0.4em] uppercase text-white/22 hover:text-white/55 transition-colors duration-300">Destinacije</a>
            <a href="/#benefits" className="text-[9px] tracking-[0.4em] uppercase text-white/22 hover:text-white/55 transition-colors duration-300">Iskustva</a>
            <a href="/#about" className="text-[9px] tracking-[0.4em] uppercase text-white/22 hover:text-white/55 transition-colors duration-300">O Nama</a>
            <a href="/#global" className="text-[9px] tracking-[0.4em] uppercase text-white/22 hover:text-white/55 transition-colors duration-300">Blog</a>
            <a href="/politika-privatnosti" className="text-[9px] tracking-[0.4em] uppercase text-white/22 hover:text-white/55 transition-colors duration-300">Politika Privatnosti</a>
          </div>

          {/* Partneri */}
          <div className="flex-shrink-0">
            <p className="text-[9px] tracking-[0.4em] uppercase text-[#c8a96e]/50 mb-4">
              Partneri
            </p>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Victorious Travel', href: 'https://victorius.ba/' },
                { label: 'Studentski Pohodi', href: 'https://pohodi.ba/' },
                { label: 'Snow Hunters', href: 'https://snowhunters.ba/' },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-[9px] tracking-[0.3em] uppercase text-white/22 hover:text-[#c8a96e] transition-colors duration-300"
                >
                  <span className="w-3 h-px bg-white/15 group-hover:bg-[#c8a96e] group-hover:w-5 transition-all duration-300" />
                  {label}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[8px]">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Donja linija */}
        <div className="border-t border-white/[0.04] pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-[9px] tracking-[0.3em] uppercase text-white/15">
            © {year} GoFly. Sva prava zadržana.
          </p>
          <p className="text-[9px] tracking-[0.2em] uppercase text-white/10">
            Sarajevo, Bosna i Hercegovina
          </p>
        </div>

      </div>
    </footer>
  );
}