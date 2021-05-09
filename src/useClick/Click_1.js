import React, { useEffect, useRef } from 'react';

const UseClick = () => {

    const useClick = (clickEvent) => {

        // if(typeof clickEvent !== 'function') { 
        //     return null;
        // };

        const element = useRef();
        useEffect(() => { //didmount didupdate 때 호출
            if(!element.current) return null;
            element.current.addEventListener('click', clickEvent)

            return () => { //return 되는 것은 unmount 때 호출
                if(!element.current) return null;
                element.current.removeEventListener('click', clickEvent)
            }
        }, [])
        
        return element;
    }
    const title = useClick(() => console.log('pp'))


    // const ref1 = useRef()
    // useEffect(() => {
    //     console.log(ref1)
    //     ref1.current.focus()
    // }, [])
    return (
        <div>
            <h3 ref={title}>hoho</h3>
            {/* <input ref={ref1}/> */}
        </div>
    );
};

export default UseClick;