import { useScroll, useTransform, } from 'framer-motion';
import { useRef } from 'react';

const useScrollAnimation = () => {
    const container = useRef(null);
    const { scrollXProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"],
    });

    const x = useTransform(scrollXProgress, [0, 1], [0, 250]);

    const xi = useTransform(scrollXProgress, [0, 1], [300, 0]);


    return { container, x, xi };
};

export default useScrollAnimation;