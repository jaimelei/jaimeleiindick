import React from 'react';

const Navbar = () => {
  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Education', href: '#education' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Seminar', href: '#seminar' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 
                    px-4 sm:px-8 py-3 bg-white/10 backdrop-blur-lg 
                    border border-white/20 shadow-lg 
                    rounded-full flex flex-wrap justify-center gap-x-6 gap-y-2
                    md:flex-nowrap md:gap-6 items-center 
                    text-white font-montserrat font-bold text-sm md:text-md lg:text-lg
                    w-[90%] sm:w-auto">
      {links.map(({ label, href }, i) => (
        <a
          key={i}
          href={href}
          className="hover:text-[#9E6D0C] transition-colors duration-300"
        >
          {label}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;