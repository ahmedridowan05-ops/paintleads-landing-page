import { useScrolled } from '../hooks/useScrolled';

export function Navbar() {
  const scrolled = useScrolled(50);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 px-margin-mobile md:px-margin-desktop ${scrolled ? 'py-4 bg-[#160F0F] border-b border-[#C9A24B]/10' : 'py-6 bg-transparent'} max-w-container-max mx-auto left-0 right-0`}>
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-2">
          <span className="font-headline-lg text-headline-lg font-bold text-[#F5EEE8]">PL</span>
        </div>
        <div>
          <a className="bg-[#E0BE6A] text-[#160F0F] font-bold font-label-sm text-sm md:text-base uppercase px-6 py-2.5 md:px-8 md:py-3 rounded-full hover:bg-[#E0BE6A]/90 hover:scale-105 active:scale-95 transition-all duration-300 tracking-widest inline-block" href="#apply">Apply Now</a>
        </div>
      </div>
    </nav>
  );
}
