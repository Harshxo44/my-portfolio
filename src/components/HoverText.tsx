import { useState } from 'react';
import { motion } from 'motion/react';

interface HoverTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export function HoverText({ text, className = '', as = 'span' }: HoverTextProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const Component = motion[as] as any;
  
  return (
    <Component className={className}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          className="inline-block relative"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          animate={{
            color: hoveredIndex === index ? '#DFD0B8' : 'inherit',
            scale: hoveredIndex === index ? 1.2 : 1,
            y: hoveredIndex === index ? -4 : 0,
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          style={{
            textShadow: hoveredIndex === index ? '0 0 20px rgba(223, 208, 184, 0.6)' : 'none',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </Component>
  );
}
