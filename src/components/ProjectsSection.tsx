
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Github, Link as LinkIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
}

const ProjectCard = ({ project, index, isVisible }: { project: Project; index: number; isVisible: boolean }) => {
  return (
    <div 
      className={cn(
        "glass-card rounded-xl overflow-hidden border border-white/10 transition-all duration-700 transform opacity-0 translate-y-8 h-full flex flex-col",
        isVisible && "opacity-100 translate-y-0",
        "hover:border-cyberpunk-neon/30 hover:shadow-[0_0_15px_0px_rgba(10,255,146,0.15)]"
      )}
      style={{ transitionDelay: `${(index % 6) * 100}ms` }}
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyberpunk-dark/90 z-10"></div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        
        <div className="absolute top-4 right-4 z-20 flex gap-2">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-background/70 backdrop-blur-sm rounded-full hover:bg-background transition-all"
            >
              <Github size={18} />
            </a>
          )}
          
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-background/70 backdrop-blur-sm rounded-full hover:bg-background transition-all"
            >
              <LinkIcon size={18} />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-white/70 mb-4 flex-grow">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs px-2 py-1 bg-white/5 rounded-full text-white/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="px-6 pb-6">
        <button 
          className="w-full py-2 border border-cyberpunk-neon/50 rounded-lg text-cyberpunk-neon text-sm font-medium hover:bg-cyberpunk-neon/10 transition-all flex items-center justify-center gap-2"
          onClick={() => window.open(project.demo || project.github, '_blank')}
        >
          View Details
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  
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
  
  const projects: Project[] = [
    {
      title: "Trading Algorithm Platform",
      description: "A sophisticated platform for algorithmic trading with real-time market data analysis and risk management.",
      tags: ["Python", "Machine Learning", "Finance", "API"],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      github: "https://github.com/shubham17vyas",
      demo: "#projects"
    },
    {
      title: "RF Signal Analyzer",
      description: "An advanced tool for analyzing RF signals, with features for spectrum analysis and signal processing.",
      tags: ["C++", "DSP", "RF Engineering", "Electronics"],
      image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      github: "https://github.com/shubham17vyas"
    },
    {
      title: "Full-Stack Web Application",
      description: "A modern web application with authentication, real-time data, and responsive design.",
      tags: ["React", "Node.js", "MongoDB", "WebSockets"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      github: "https://github.com/shubham17vyas",
      demo: "#projects"
    },
    {
      title: "Algorithmic Problem Solver",
      description: "A collection of algorithms to solve complex computational problems efficiently.",
      tags: ["Algorithms", "Java", "Data Structures", "Optimization"],
      image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80",
      github: "https://github.com/shubham17vyas"
    },
    {
      title: "Wireless Communication System",
      description: "A system for reliable wireless communication with advanced error correction.",
      tags: ["RF", "Embedded Systems", "C", "Protocols"],
      image: "https://images.unsplash.com/photo-1598228723793-52759bba239c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      github: "https://github.com/shubham17vyas"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website built with modern web technologies.",
      tags: ["React", "Tailwind CSS", "Responsive Design", "Animation"],
      image: "https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      github: "https://github.com/shubham17vyas",
      demo: "#projects"
    }
  ];
  
  const filters = ['All', 'Web', 'RF', 'Algorithm', 'Trading'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => {
        const tagsLower = project.tags.map(tag => tag.toLowerCase());
        return tagsLower.some(tag => tag.includes(activeFilter.toLowerCase()));
      });
  
  return (
    <section id="projects" ref={sectionRef} className="py-20 relative">
      <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-cyberpunk-dark/50 to-transparent -z-10"></div>
      
      <div className="section-container">
        <h2 
          className={cn(
            "section-title transition-all duration-700 opacity-0 translate-y-6",
            isVisible && "opacity-100 translate-y-0"
          )}
        >
          <span className="text-cyberpunk-neon">03.</span> Projects
        </h2>
        
        <div 
          className={cn(
            "flex justify-center mb-12 transition-all duration-700 delay-100 opacity-0 translate-y-6",
            isVisible && "opacity-100 translate-y-0"
          )}
        >
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map(filter => (
              <button
                key={filter}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  activeFilter === filter
                    ? "bg-cyberpunk-neon text-cyberpunk-dark"
                    : "bg-white/5 text-white/70 hover:bg-white/10"
                )}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index} 
              isVisible={isVisible} 
            />
          ))}
        </div>
        
        <div 
          className={cn(
            "mt-12 text-center transition-all duration-700 delay-800 opacity-0 translate-y-6",
            isVisible && "opacity-100 translate-y-0"
          )}
        >
          <a 
            href="https://github.com/shubham17vyas" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-outline"
          >
            View More on GitHub
            <Github size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
