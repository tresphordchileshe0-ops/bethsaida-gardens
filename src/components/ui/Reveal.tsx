import React from 'react';
import { motion, Variants } from 'framer-motion';

const ease: [number, number, number, number] = [0.23, 1, 0.32, 1];

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } }
};

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

/** Fades and slides content in as it scrolls into view. */
export function Reveal({ children, className, delay = 0, y = 32 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease }}>
      
      {children}
    </motion.div>);

}

type GroupTag = 'div' | 'ul' | 'ol' | 'dl';

interface RevealGroupProps {
  children: React.ReactNode;
  className?: string;
  as?: GroupTag;
  stagger?: number;
}

const groupTags = { div: motion.div, ul: motion.ul, ol: motion.ol, dl: motion.dl };

/** Parent that staggers its RevealItem children into view. */
export function RevealGroup({ children, className, as = 'div', stagger = 0.08 }: RevealGroupProps) {
  const Comp = groupTags[as];
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}>
      
      {children}
    </Comp>);

}

interface RevealItemProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'li';
  id?: string;
}

export function RevealItem({ children, className, as = 'div', id }: RevealItemProps) {
  const Comp = as === 'li' ? motion.li : motion.div;
  return (
    <Comp className={className} variants={itemVariants} id={id}>
      {children}
    </Comp>);

}