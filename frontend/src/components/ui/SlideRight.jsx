import React from 'react';
import { motion,useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function SlideRight({ children, delay = 0 ,direction = "right"}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const isLeftDirection = direction === "left" ? -40 : 40;

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: isLeftDirection },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 1, delay }}
    >
      {children}
    </motion.div>
  );
}

export default SlideRight;
