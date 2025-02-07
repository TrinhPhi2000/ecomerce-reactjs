import { useEffect, useState, useRef } from 'react';
const useScrollHandling = () => {
    const [scrollDriction, setScrollDriction] = useState(null);
    const prevScrollPosition = useRef(0);

    const [scrollPosition, setScrollPosition] = useState(0);

    const scrollTracking = () => {
        const currentScrollPosition = window.pageYOffset;

        if (currentScrollPosition > prevScrollPosition.current) {
            setScrollDriction('down');
        } else if (currentScrollPosition < prevScrollPosition.current) {
            setScrollDriction('up');
        }
        prevScrollPosition.current = currentScrollPosition <= 0 ? 0 : currentScrollPosition;
        setScrollPosition(currentScrollPosition);
    };
    const handleTranslateX = () => {
        if (scrollDriction === 'down' && scrollPosition >= 1700) {
            setTranslateXPosition(translateXPosition <= 0 ? 0 : translateXPosition - 1);
        } else if (scrollDriction === 'up') {
            setTranslateXPosition(translateXPosition >= 80 ? 80 : translateXPosition + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollTracking);

        return () => window.removeEventListener('scroll', scrollTracking);
    }, []);
    return {
        scrollDriction,
        scrollPosition
    };
};
export default useScrollHandling;
