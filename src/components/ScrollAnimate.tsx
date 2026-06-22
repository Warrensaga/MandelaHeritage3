/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export type AnimationVariantType = 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'scaleIn' | 'zoomIn';

interface ScrollAnimateProps {
  children: ReactNode;
  variant?: AnimationVariantType;
  duration?: number;
  delay?: number;
  threshold?: number;
  className?: string;
  staggerChildren?: number;
  as?: 'div' | 'section' | 'header' | 'footer';
}

export default function ScrollAnimate({
  children,
  variant = 'fadeUp',
  duration = 0.6,
  delay = 0,
  threshold = 0.15,
  className = '',
  staggerChildren,
  as = 'div'
}: ScrollAnimateProps) {
  const shouldReduceMotion = useReducedMotion();

  // Mapping variants to framer motion styles
  const variants = {
    hidden: {
      opacity: 0,
      y: variant === 'fadeUp' ? 30 : variant === 'fadeDown' ? -30 : 0,
      x: variant === 'fadeLeft' ? 30 : variant === 'fadeRight' ? -30 : 0,
      scale: variant === 'scaleIn' ? 0.95 : variant === 'zoomIn' ? 1.05 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.2 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.215, 0.61, 0.355, 1.0], // custom smooth cubic bezier
        when: "beforeChildren",
        staggerChildren: staggerChildren || undefined
      }
    }
  };

  const Component = motion[as] as any;

  return (
    <Component
      initial={shouldReduceMotion ? { opacity: 1, y: 0, x: 0, scale: 1 } : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: threshold }}
      variants={variants}
      className={className}
    >
      {children}
    </Component>
  );
}

/**
 * Animated Container for easy item-stagger cascades.
 */
interface StaggerContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  threshold?: number;
  id?: string;
}

export function StaggerContainer({
  children,
  className = '',
  stagger = 0.1,
  delay = 0,
  threshold = 0.15,
  id
}: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      id={id}
      initial={shouldReduceMotion ? { opacity: 1 } : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: threshold }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Animated Item to nest inside StaggerContainer
 */
interface StaggerItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: AnimationVariantType;
  duration?: number;
  className?: string;
  key?: any;
}

export function StaggerItem({
  children,
  variant = 'fadeUp',
  duration = 0.5,
  className = ''
}: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: variant === 'fadeUp' ? 20 : variant === 'fadeDown' ? -20 : 0,
      x: variant === 'fadeLeft' ? 20 : variant === 'fadeRight' ? -20 : 0,
      scale: variant === 'scaleIn' ? 0.98 : variant === 'zoomIn' ? 1.02 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.15 : duration,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
