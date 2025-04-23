
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      setIsScrolled(window.scrollY > 20);
      
      // Determine active section
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];
  
  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#home" 
          className="text-2xl font-bold text-white relative z-10 group"
        >
          <span className="relative z-10">Shubham Vyas</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyberpunk-neon group-hover:w-full transition-all duration-300"></span>
        </a>
        
        <div className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 relative",
                activeSection === item.id 
                  ? "text-cyberpunk-neon" 
                  : "text-white/70 hover:text-white"
              )}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyberpunk-neon animate-pulse-glow rounded-full"></span>
              )}
            </a>
          ))}
        </div>
        
        <a 
          href="#contact" 
          className="hidden md:inline-block btn-outline text-sm"
        >
          Let's Connect
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => {
            const menu = document.getElementById('mobile-menu');
            if (menu) {
              menu.classList.toggle('hidden');
            }
          }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Mobile menu */}
      <div 
        id="mobile-menu" 
        className="hidden md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-lg p-4 border-t border-white/10"
      >
        <div className="flex flex-col space-y-2">
          {navItems.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`}
              className={cn(
                "px-4 py-3 rounded-md text-sm font-medium transition-all duration-300",
                activeSection === item.id 
                  ? "bg-cyberpunk-dark text-cyberpunk-neon" 
                  : "text-white/70 hover:text-white hover:bg-white/5"
              )}
              onClick={() => {
                const menu = document.getElementById('mobile-menu');
                if (menu) {
                  menu.classList.add('hidden');
                }
              }}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className="btn-outline text-sm text-center mt-2"
            onClick={() => {
              const menu = document.getElementById('mobile-menu');
              if (menu) {
                menu.classList.add('hidden');
              }
            }}
          >
            Let's Connect
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
