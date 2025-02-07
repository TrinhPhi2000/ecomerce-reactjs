// import { useEffect, useRef, useState } from 'react';

// const useTranslateXImage = () => {
//     const [translateXPosition, setTranslateXPosition] = useState(80);

//     const handleTranslateX = () => {
//         if (scrollDriction === 'down' && scrollPositon >= 1700) {
//             setTranslateXPosition(translateXPosition <= 0 ? 0 : translateXPosition - 1);
//         } else if (scrollDriction === 'up') {
//             setTranslateXPosition(translateXPosition >= 80 ? 80 : translateXPosition + 1);
//         }
//     };

//     useEffect(() => {
//         handleTranslateX();
//     }, [scrollPositon]);

//     return {
//         translateXPosition
//     };
// };

// export default useTranslateXImage;
