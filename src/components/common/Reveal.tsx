import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  width = '100%',
  delay = 0,
  direction = 'up',
  duration = 0.5,
  className
}) => {
  const shouldReduceMotion = useReducedMotion();

  const getVariants = () => {
    if (shouldReduceMotion || direction === 'none') {
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      };
    }

    const distance = 30;
    const directionOffset = {
      up: { y: distance },
      down: { y: -distance },
      left: { x: distance },
      right: { x: -distance }
    };

    return {
      hidden: { opacity: 0, ...directionOffset[direction] },
      visible: { opacity: 1, x: 0, y: 0 }
    };
  };

  return (
    <div style={{ width }} className={className}>
      <motion.div
        variants={getVariants()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration, delay, ease: [0.215, 0.61, 0.355, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
};
