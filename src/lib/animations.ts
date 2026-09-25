import { Variants } from "framer-motion";
import { SITE_CONFIG } from "../config/site";

export const MOTION_EASE = [0.22, 1, 0.36, 1] as const;
export const MOTION_DURATION = {
  micro: 0.14,
  fast: 0.22,
  normal: 0.36,
  smooth: 0.58,
  editorial: 0.82,
} as const;

const getIntensityConfig = () => {
  const intensity = SITE_CONFIG.animationIntensity || "normal";
  switch (intensity) {
    case "low":
      return { duration: MOTION_DURATION.fast, distance: 10, stagger: 0.05, ease: MOTION_EASE };
    case "high":
      return { duration: MOTION_DURATION.smooth, distance: 35, stagger: 0.12, ease: MOTION_EASE };
    case "normal":
    default:
      return { duration: MOTION_DURATION.normal, distance: 20, stagger: 0.08, ease: MOTION_EASE };
  }
};

const config = getIntensityConfig();

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: config.duration, ease: config.ease }
  }
};

export const slideUp: Variants = {
  hidden: { opacity: 0, y: config.distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: config.duration, ease: config.ease }
  }
};

export const slideDown: Variants = {
  hidden: { opacity: 0, y: -config.distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: config.duration, ease: config.ease }
  }
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -config.distance },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: config.duration, ease: config.ease }
  }
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: config.distance },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: config.duration, ease: config.ease }
  }
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: config.duration, ease: config.ease }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: config.stagger,
      delayChildren: 0.05
    }
  }
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: config.distance / 2 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: config.duration, ease: config.ease }
  }
};
