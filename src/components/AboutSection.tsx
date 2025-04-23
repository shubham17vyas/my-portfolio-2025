import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section id="about" ref={sectionRef} className="py-20">
      <div className="section-container">
        <h2 className={cn(
          "section-title transition-all duration-700 opacity-0 translate-y-6",
          isVisible && "opacity-100 translate-y-0"
        )}>
          <span className="text-cyberpunk-neon">01.</span> About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={cn(
            "space-y-6 transition-all duration-700 delay-100 opacity-0 translate-y-6",
            isVisible && "opacity-100 translate-y-0"
          )}>
            <p className="text-lg text-white/80">
              I'm a passionate Software Developer with expertise in algorithms, RF engineering, trading strategies, and 
              full-stack development. My journey in tech began with a curiosity about how things work, and it has evolved 
              into a career building elegant solutions to complex problems.
            </p>
            
            <p className="text-lg text-white/80">
              I believe that good software is a blend of technical excellence and creative problem-solving. 
              My experience spans across various domains, allowing me to approach challenges from multiple perspectives.
            </p>
            
            <p className="text-lg text-white/80">
              When I'm not coding, I enjoy exploring new technologies, optimizing trading algorithms, and 
              diving deeper into RF engineering principles. I'm always looking to expand my knowledge and skills.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-bold mb-3">Education</h3>
              <div className="glass-card p-4 rounded-lg">
                <p className="font-semibold">Bachelor of Engineering in Electronics and Communication</p>
                <p className="text-white/70">Government Engineering College, Gandhinagar</p>
                <p className="text-sm text-white/60">2017 - 2021</p>
              </div>
            </div>
          </div>
          
          <div className={cn(
            "transition-all duration-700 delay-200 opacity-0 translate-y-6",
            isVisible && "opacity-100 translate-y-0"
          )}>
            <div className="relative">
              <div className="glass-card rounded-2xl overflow-hidden border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Code on screen" 
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyberpunk-dark/80 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex flex-wrap gap-2">
                    {['Software Development', 'Algorithms', 'RF Engineering', 'Trading', 'Problem Solving'].map((tag) => (
                      <span key={tag} className="inline-block bg-white/10 backdrop-blur-sm px-3 py-1 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Stats cards */}
              <div className="absolute -bottom-10 -right-5 glass-card rounded-lg p-4 border border-white/10 shadow-lg w-48">
                <div className="text-sm text-white/70">Years Experience</div>
                <div className="text-3xl font-bold text-cyberpunk-neon">5+</div>
              </div>
              
              <div className="absolute -top-6 -left-6 glass-card rounded-lg p-4 border border-white/10 shadow-lg w-48">
                <div className="text-sm text-white/70">Projects Completed</div>
                <div className="text-3xl font-bold text-cyberpunk-neon">20+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
