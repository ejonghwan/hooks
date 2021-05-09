import React, { useState, useEffect } from 'react';

const UseTitle = () => {

    const useTitle = (initial) => {
        const [title, setTitle] = useState(initial)
        const documentTitle = document.querySelector('title')
        useEffect(() => {
            console.log(documentTitle)
            documentTitle.innerHTML = title
        }, [title])

        return setTitle
    }


    
    const updateTitle = useTitle('...loading') //함수실행안해도 됨 

    
    setTimeout(() => {
        updateTitle('home')
    }, 2000)
    return (
        <div>
            <div>useTitle</div>
        </div>
    );
};

export default UseTitle;