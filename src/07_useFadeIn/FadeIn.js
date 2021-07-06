import React, { useEffect, useRef } from 'react';

const useFadeIn = () => {
    const element = useRef();
    return element
}

const FadeIn = (onBefore) => {
    const el = useFadeIn()
    useEffect(() => {
        
    }, [])
    return (
        <div>
            <h1 ref={el}>asdasd</h1>
        </div>
    )
}



export default FadeIn;