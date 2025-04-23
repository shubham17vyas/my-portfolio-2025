
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: string;
  delay: number;
  isVisible: boolean;
}

const SkillCard = ({ title, skills, icon, delay, isVisible }: SkillCardProps) => {
  return (
    <div 
      className={cn(
        "glass-card rounded-xl p-6 border border-white/10 transition-all duration-700 transform opacity-0 translate-y-6",
        isVisible && `opacity-100 translate-y-0 transition-delay-${delay}`,
        "group hover:border-cyberpunk-neon/50 hover:shadow-[0_0_10px_0px_rgba(10,255,146,0.3)]"
      )}
      style={{ transitionDelay: `${delay * 100}ms` }}
    >
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 mr-4 group-hover:bg-cyberpunk-neon/10 transition-all duration-300">
          <span className="text-2xl" role="img" aria-label={title}>
            {icon}
          </span>
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-cyberpunk-neon mr-2"></span>
            <span className="text-white/80">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SkillsSection = () => {
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
        threshold: 0.1,
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
  
  const skillCategories = [
    {
      title: "Programming",
      icon: "💻",
      skills: ["JavaScript/TypeScript", "Python", "C++", "Java", "Go"]
    },
    {
      title: "Web Development",
      icon: "🌐",
      skills: ["React.js", "Node.js", "Express", "HTML/CSS", "Next.js"]
    },
    {
      title: "RF Engineering",
      icon: "📡",
      skills: ["Signal Processing", "RF Circuit Design", "Antenna Theory", "Wireless Protocols"]
    },
    {
      title: "Data & Algorithms",
      icon: "📊",
      skills: ["Data Structures", "Algorithmic Design", "Optimization", "Machine Learning"]
    },
    {
      title: "Trading",
      icon: "📈",
      skills: ["Algorithmic Trading", "Market Analysis", "Risk Management", "Quantitative Strategies"]
    },
    {
      title: "Tools & Platforms",
      icon: "🔧",
      skills: ["Git", "Docker", "AWS", "Google Cloud", "CI/CD"]
    }
  ];
  
  return (
    <section id="skills" ref={sectionRef} className="py-20 relative">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-cyberpunk-purple/10 blur-[150px] -z-10"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-cyberpunk-blue/10 blur-[120px] -z-10"></div>
      
      <div className="section-container">
        <h2 
          className={cn(
            "section-title transition-all duration-700 opacity-0 translate-y-6",
            isVisible && "opacity-100 translate-y-0"
          )}
        >
          <span className="text-cyberpunk-neon">02.</span> Skills & Expertise
        </h2>
        
        <p 
          className={cn(
            "text-lg text-white/80 max-w-2xl mb-12 transition-all duration-700 delay-100 opacity-0 translate-y-6",
            isVisible && "opacity-100 translate-y-0"
          )}
        >
          My technical toolkit has been crafted over years of experience across multiple domains. 
          Here's what I bring to the table:
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard 
              key={category.title}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
              delay={index + 2}
              isVisible={isVisible}
            />
          ))}
        </div>
        
        <div 
          className={cn(
            "mt-16 glass-card p-8 rounded-xl border border-white/10 transition-all duration-700 delay-800 opacity-0 translate-y-6",
            isVisible && "opacity-100 translate-y-0"
          )}
        >
          <h3 className="text-2xl font-bold mb-6">Proficiency Levels</h3>
          
          <div className="space-y-6">
            {[
              { name: "Frontend Development", percentage: 90 },
              { name: "Algorithm Design", percentage: 85 },
              { name: "RF Engineering", percentage: 80 },
              { name: "Trading Strategies", percentage: 75 },
              { name: "Backend Development", percentage: 85 },
            ].map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span>{skill.name}</span>
                  <span className="text-cyberpunk-neon">{skill.percentage}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-cyberpunk-blue to-cyberpunk-neon rounded-full"
                    style={{ 
                      width: `${skill.percentage}%`,
                      transition: "width 1s ease-in-out",
                      boxShadow: "0 0 10px rgba(10, 255, 146, 0.5)"
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
