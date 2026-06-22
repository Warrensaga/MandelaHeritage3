/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface NumberCounterProps {
  value: number;
  duration?: number; // duration in seconds
  delay?: number; // delay in seconds
  prefix?: string;
  suffix?: string;
  className?: string;
}

export default function NumberCounter({
  value,
  duration = 1.5,
  delay = 0,
  prefix = '',
  suffix = '',
  className = ''
}: NumberCounterProps) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: '-50px' });
  const countRef = useRef(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    if (start === end) return;

    // Wait for delay
    const startTimeout = setTimeout(() => {
      const startTime = performance.now();
      const durationMs = duration * 1000;

      const animateCount = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / durationMs, 1);
        
        // Ease out quad formula
        const easeProgress = progress * (2 - progress);
        
        const currentVal = Math.floor(easeProgress * (end - start) + start);
        countRef.current = currentVal;
        setCount(currentVal);

        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };

      requestAnimationFrame(animateCount);
    }, delay * 1000);

    return () => clearTimeout(startTimeout);
  }, [value, duration, delay, isInView]);

  return (
    <span ref={nodeRef} className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
