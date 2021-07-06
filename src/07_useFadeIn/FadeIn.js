import React, { useEffect, useRef } from 'react';

const useFadeIn = (dur = 1, delay = 0) => {
    // if(typeof dur !== 'number' || typeof delay !== 'number') {
    //     return ;
    // }
    const element = useRef();
    useEffect(() => {
        if(element.current) {
            const {current} = element;
            current.style.opacity = 1;
            current.style.transition = `opacity ${dur}s ease-in-out ${delay}s`
        }

    }, [])
    return { ref: element, style: { opacity: 0 } }
}

const FadeIn = () => {
    const fadeInH1 = useFadeIn(2, 1)
    const fadeInP1 = useFadeIn(2, 2)
    const fadeInP2 = useFadeIn(3, 3)
    const fadeInP3 = useFadeIn(4, 4)
    const fadeInP4 = useFadeIn(5, 5)
    
    return (
        <div>
            <h1 {...fadeInH1}>asdasd</h1>
            <p {...fadeInP1}>asdasdasdasdasdasdasdasdasd</p>
            <p {...fadeInP2}>asdasdasdasdasdasdasdasdasd</p>
            <p {...fadeInP3}>asdasdasdasdasdasdasdasdasd</p>
            <p {...fadeInP4}>asdasdasdasdasdasdasdasdasd</p>
          
        </div>
    )
}



export default FadeIn;