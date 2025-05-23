
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const ExperienceSection = () => {
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
  
  const experiences: Experience[] = [
    {
      title: "Software Developer",
      company: "C Squared Systems, LLC",
      period: "April 2017 - Present",
      description: [
        "Lead development of RF engineering and wireless coverage solutions",
        "Develop and maintain SitePortal® web-based software for remote monitoring",
        "Design and implement DAS systems and Wi-Fi networks",
        "Provide technical expertise in complex multi-vendor environments",
        "Execute turnkey in-building wireless solutions with state-of-the-art analysis tools"
      ],
      technologies: ["RF Engineering", "Software Development", "DAS Systems", "Wi-Fi Networks", "Remote Monitoring"]
    },
    {
      title: "Software Developer Intern",
      company: "RentalOnMe.com",
      period: "February 2016 - May 2016",
      description: [
        "Wrote clean, well-designed code for assigned projects",
        "Produced detailed specifications and conducted thorough testing",
        "Maintained core product software and databases for optimization",
        "Contributed to all phases of the software development lifecycle",
        "Developed and deployed new features following industry best practices"
      ],
      technologies: ["Software Development", "Database Management", "Testing", "Feature Development"]
    },
    {
      title: "Junior Software Engineer",
      company: "MOBRNA SOFTWARE PRIVATE LIMITED",
      period: "January 2013 - December 2013",
      description: [
        "Designed and developed user interfaces",
        "Customized systems and tested computer programs",
        "Provided production support",
        "Worked with front-end technologies and frameworks"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "AngularJS"]
    }
  ];
  
  return (
    <section id="experience" ref={sectionRef} className="py-20">
      <div className="section-container">
        <h2 
          className={cn(
            "section-title transition-all duration-700 opacity-0 translate-y-6",
            isVisible && "opacity-100 translate-y-0"
          )}
        >
          <span className="text-cyberpunk-neon">04.</span> Experience
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyberpunk-neon/50 via-cyberpunk-blue/50 to-cyberpunk-purple/50"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={exp.company + exp.title}
              className={cn(
                "relative mb-12 transition-all duration-700 opacity-0 translate-y-6",
                isVisible && "opacity-100 translate-y-0"
              )}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={cn(
                "lg:grid lg:grid-cols-2 lg:gap-8 items-center",
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              )}>
                {/* Timeline dot */}
                <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 w-8 h-8 bg-cyberpunk-dark border-2 border-cyberpunk-neon rounded-full z-10 flex items-center justify-center">
                  <div className="w-3 h-3 bg-cyberpunk-neon rounded-full animate-pulse"></div>
                </div>
                
                {/* Content */}
                <div className={cn(
                  "ml-16 lg:ml-0 glass-card p-6 rounded-xl border border-white/10",
                  index % 2 === 0 ? "lg:text-right lg:mr-4" : "lg:ml-4",
                  "hover:border-cyberpunk-neon/30 hover:shadow-[0_0_15px_0px_rgba(10,255,146,0.15)] transition-all duration-300"
                )}>
                  <span className="inline-block text-sm font-semibold text-cyberpunk-neon mb-1">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="text-white/80">{exp.company}</p>
                </div>
                
                <div className={cn(
                  "ml-16 lg:ml-0 mt-4 lg:mt-0",
                  index % 2 === 0 ? "lg:ml-4" : "lg:mr-4 lg:text-right"
                )}>
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyberpunk-neon mt-2 mr-2"></span>
                        <span className="text-white/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs px-2 py-1 bg-white/5 rounded-full text-white/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div 
          className={cn(
            "mt-12 text-center transition-all duration-700 delay-700 opacity-0 translate-y-6",
            isVisible && "opacity-100 translate-y-0"
          )}
        >
          <a href="#contact" className="inline-flex items-center gap-2 btn-primary">
            Interested in working together?
            <ArrowRight size={18} />
          </a>
        </div>
        
        <div 
          className={cn(
            "mt-16 glass-card p-8 rounded-xl border border-white/10 transition-all duration-700 delay-800 opacity-0 translate-y-6",
            isVisible && "opacity-100 translate-y-0"
          )}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">My Resume</h3>
              <p className="text-white/70">Download my resume for a complete overview of my experience and skills.</p>
            </div>
            
            <a 
              href="#" 
              className="btn-outline flex items-center gap-2"
              onClick={(e) => {
                e.preventDefault();
                alert('Resume download would be initiated here');
              }}
            >
              Download PDF
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
