
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="font-bold text-xl">Shubham Vyas</span>
            <p className="text-white/60 text-sm mt-1">Software Developer • RF Engineer</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/shubham17vyas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/shubham-vyas-3b5218128/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:shubham17vyas@gmail.com" 
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            &copy; {currentYear} Shubham Vyas. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <button 
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              }}
              className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-1"
            >
              Back to Top
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
