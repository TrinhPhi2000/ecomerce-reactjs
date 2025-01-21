import { useEffect, useRef, useState } from 'react';

const useTranslateXImage = () => {
    const [scrollDriction, setScrollDriction] = useState(null);
    const prevScrollPosition = useRef(0);

    const [translateXPosition, setTranslateXPosition] = useState(80);
    const [scrollPositon, setScrollPositon] = useState(0);

    const scrollTracking = () => {
        const currentScrollPosition = window.pageYOffset;

        if (currentScrollPosition > prevScrollPosition.current) {
            setScrollDriction('down');
        } else if (currentScrollPosition < prevScrollPosition.current) {
            setScrollDriction('up');
        }
        prevScrollPosition.current = currentScrollPosition <= 0 ? 0 : currentScrollPosition;
        setScrollPositon(currentScrollPosition);
    };
    const handleTranslateX = () => {
        if (scrollDriction === 'down' && scrollPositon >= 1700) {
            setTranslateXPosition(translateXPosition <= 0 ? 0 : translateXPosition - 1);
        } else if (scrollDriction === 'up') {
            setTranslateXPosition(translateXPosition >= 80 ? 80 : translateXPosition + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollTracking);

        return () => window.removeEventListener('scroll', scrollTracking);
    }, []);

    useEffect(() => {
        handleTranslateX();
    }, [scrollPositon]);

    return {
        translateXPosition
    };
};

export default useTranslateXImage;
