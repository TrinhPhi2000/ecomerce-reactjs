import { useEffect, useState } from 'react';
import useScrollHandling from '@/hooks/useScrollHandling';

const useTranslateXImage = () => {
    const { scrollDriction, scrollPosition } = useScrollHandling();

    const [translateXPosition, setTranslateXPosition] = useState(80);

    const handleTranslateX = () => {
        if (scrollDriction === 'down' && scrollPosition >= 1700) {
            setTranslateXPosition(translateXPosition <= 0 ? 0 : translateXPosition - 1);
        } else if (scrollDriction === 'up') {
            setTranslateXPosition(translateXPosition >= 80 ? 80 : translateXPosition + 1);
        }
    };

    useEffect(() => {
        handleTranslateX();
    }, [scrollPosition]);

    return {
        translateXPosition
    };
};
export default useTranslateXImage;
