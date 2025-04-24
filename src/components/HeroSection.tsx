
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import TypewriterText from './TypewriterText';

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  const [showRole, setShowRole] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showSocial, setShowSocial] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);
  
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-cyberpunk-purple/20 blur-[100px]"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-cyberpunk-blue/20 blur-[100px]"></div>
      
      <div className="section-container">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3">
            <div className="space-y-6">
              <div 
                className={cn(
                  "transition-all duration-1000 opacity-0 translate-y-10",
                  loaded && "opacity-100 translate-y-0 animate-bounce-in"
                )}
              >
                {loaded && (
                  <TypewriterText
                    text="Software Developer"
                    className="text-sm md:text-base font-semibold text-cyberpunk-neon inline-block py-1 px-4 rounded-full border border-cyberpunk-neon/50 animate-pulse-glow"
                    onComplete={() => setShowRole(true)}
                  />
                )}
              </div>
              
              <h1 
                className={cn(
                  "text-4xl md:text-6xl lg:text-7xl font-bold transition-all duration-1000 delay-100 opacity-0 translate-y-10",
                  loaded && "opacity-100 translate-y-0 animate-bounce-in"
                )}
              >
                {showRole && (
                  <>
                    <TypewriterText
                      text="I'm "
                      delay={70}
                      onComplete={() => setShowName(true)}
                    />
                    {showName && (
                      <>
                        <TypewriterText
                          text="Shubham"
                          className="text-cyberpunk-neon animate-pulse-glow"
                          delay={70}
                          onComplete={() => setShowDescription(true)}
                        />
                        <TypewriterText
                          text=" Vyas"
                          delay={70}
                        />
                      </>
                    )}
                  </>
                )}
              </h1>
              
              <p 
                className={cn(
                  "text-lg md:text-xl text-white/80 max-w-2xl transition-all duration-1000 delay-200 opacity-0 translate-y-10",
                  showDescription && "opacity-100 translate-y-0 animate-bounce-in"
                )}
              >
                {showDescription && (
                  <TypewriterText
                    text="Passionate about algorithms, RF engineering, trading strategies, and full-stack development. Building elegant solutions to complex problems."
                    delay={30}
                    onComplete={() => setShowButtons(true)}
                  />
                )}
              </p>
              
              <div 
                className={cn(
                  "flex flex-wrap gap-4 transition-all duration-1000 delay-300 opacity-0 translate-y-10",
                  showButtons && "opacity-100 translate-y-0 animate-bounce-in"
                )}
              >
                {showButtons && (
                  <>
                    <a href="#projects" className="btn-primary flex items-center gap-2 animate-pulse-glow">
                      View My Projects
                      <ArrowRight size={18} />
                    </a>
                    <a href="#about" className="btn-outline animate-pulse-glow">
                      About Me
                    </a>
                  </>
                )}
              </div>
              
              <div 
                className={cn(
                  "flex items-center gap-6 pt-4 transition-all duration-1000 delay-400 opacity-0 translate-y-10",
                  showButtons && "opacity-100 translate-y-0 animate-bounce-in"
                )}
              >
                {showButtons && (
                  <>
                    <a 
                      href="https://github.com/shubham17vyas" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-white transition-all hover:scale-110"
                    >
                      <Github size={22} />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/shubham-vyas-3b5218128/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-white transition-all hover:scale-110"
                    >
                      <Linkedin size={22} />
                    </a>
                    <a 
                      href="mailto:shubham17vyas@gmail.com" 
                      className="text-white/70 hover:text-white transition-all hover:scale-110"
                    >
                      <Mail size={22} />
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
          
          <div 
            className={cn(
              "md:col-span-2 transition-all duration-1000 delay-500 opacity-0 translate-y-10",
              loaded && "opacity-100 translate-y-0 animate-bounce-in"
            )}
          >
            <div className="relative">
              <div className="aspect-square relative z-10 overflow-hidden rounded-2xl border-2 border-white/10 glass-card animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-cyberpunk-blue/20 to-cyberpunk-purple/20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Tech background" 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-75"
                />
                <div className="p-6 flex flex-col h-full justify-end relative z-10">
                  <div className="space-y-2">
                    <div className="h-1 w-12 bg-cyberpunk-neon rounded-full"></div>
                    <p className="text-sm text-white/70">Software Development • RF Engineering</p>
                    <p className="text-sm text-white/70">Algorithms • Trading Strategies</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 -right-4 w-full h-full border-2 border-cyberpunk-neon/50 rounded-2xl"></div>
              
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-cyberpunk-pink/50 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-white/50 mb-2">Scroll</span>
        <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
