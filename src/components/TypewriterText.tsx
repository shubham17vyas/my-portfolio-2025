
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

const TypewriterText = ({ text, delay = 50, className, onComplete }: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    
    const typeNextCharacter = () => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        onComplete?.();
      }
    };

    const typingInterval = setInterval(typeNextCharacter, delay);
    const cursorInterval = setInterval(() => setShowCursor(prev => !prev), 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [text, delay, onComplete]);

  return (
    <span className={cn("inline-block", className)}>
      {displayText}
      <span 
        className={cn(
          "inline-block w-0.5 h-5 bg-cyberpunk-neon ml-1 -mb-0.5",
          showCursor ? "opacity-100" : "opacity-0"
        )}
      />
    </span>
  );
};

export default TypewriterText;
