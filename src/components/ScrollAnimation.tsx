import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface ScrollAnimationProps {
    children: React.ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    duration?: number;
    amount?: number; // Насколько элемент должен появиться в зоне видимости (0-1)
    className?: string;
}

export const ScrollAnimation = ({
                                    children,
                                    delay = 0,
                                    duration = 0.5,
                                    direction = "up",
                                    amount = 0.2,
                                    className,
                                }: ScrollAnimationProps) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount });

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [isInView, controls]);

    const variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
            x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: duration,
                ease: "easeInOut",
                type: "spring",
                damping: 7,
                stiffness: 50,
                delay,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{duration: 2, ease: "easeInOut", delay}}
            className={className}
        >
            {children}
        </motion.div>
    );
};