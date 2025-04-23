import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://<your-project>.supabase.co/functions/v1/send-telegram-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitSuccess(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" ref={sectionRef} className="py-20 relative">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full bg-tech-pattern opacity-5 -z-10"></div>
      
      <div className="section-container">
        <h2 
          className={cn(
            "section-title transition-all duration-700 opacity-0 translate-y-6",
            isVisible && "opacity-100 translate-y-0"
          )}
        >
          <span className="text-cyberpunk-neon">05.</span> Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div 
            className={cn(
              "transition-all duration-700 delay-100 opacity-0 translate-y-6",
              isVisible && "opacity-100 translate-y-0"
            )}
          >
            <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
            <p className="text-white/80 mb-8">
              Whether you have a project in mind, job opportunity, or just want to say hello,
              I'm always open to discussing new ideas and opportunities.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mr-4">
                  <Mail size={24} className="text-cyberpunk-neon" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a 
                    href="mailto:shubham17vyas@gmail.com" 
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    shubham17vyas@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mr-4">
                  <Github size={24} className="text-cyberpunk-neon" />
                </div>
                <div>
                  <h4 className="font-semibold">GitHub</h4>
                  <a 
                    href="https://github.com/shubham17vyas" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    github.com/shubham17vyas
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mr-4">
                  <Linkedin size={24} className="text-cyberpunk-neon" />
                </div>
                <div>
                  <h4 className="font-semibold">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/shubham-vyas-0812a6133/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    linkedin.com/in/shubham-vyas-0812a6133
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className={cn(
              "transition-all duration-700 delay-300 opacity-0 translate-y-6",
              isVisible && "opacity-100 translate-y-0"
            )}
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 rounded-xl border border-white/10">
              {submitSuccess ? (
                <div className="bg-cyberpunk-neon/20 border border-cyberpunk-neon text-white p-4 rounded-lg mb-4">
                  <h4 className="font-bold mb-1">Message Sent!</h4>
                  <p>Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyberpunk-neon/50 transition-all"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyberpunk-neon/50 transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyberpunk-neon/50 transition-all"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyberpunk-neon/50 transition-all"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={cn(
                      "w-full bg-cyberpunk-neon text-cyberpunk-dark font-medium py-3 rounded-lg flex items-center justify-center gap-2",
                      isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-cyberpunk-neon/90 transition-all"
                    )}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-cyberpunk-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
