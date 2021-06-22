import React, { useEffect } from 'react';


const useBeforeLeave = (onBefore) => {

    // if(typeof onBefore !== 'function') {
    //     return;
    // } error

    const handler = (e) => {
        const { clientY } = e
        if(clientY <= 0) { onBefore(); }
        
    }

    useEffect(() => {
        if(typeof onBefore !== 'function') {
            return; 
        }
        document.addEventListener('mouseleave', handler)
        return () => { document.removeEventListener('mouseleave', handler) }
    }, [])

}


// const BeforeLeave = () => {

//     const begForLife = () => console.log('please dont leave')
//     useBeforeLeave(begForLife)

//     return (
//         <div>
//             asdas
//         </div>
//     );
// };

export default BeforeLeave;