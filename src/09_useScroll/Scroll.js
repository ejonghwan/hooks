import React, {useEffect, useState} from 'react'

const useScroll = () => {
    const [state, setState] = useState({
        x: 0,
        y: 0,
    });

    const onScroll = (e) => {
        setState({y: window.pageYOffset, x: window.scrollX})
        // console.log(window.scrollX)
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        return () => window.addEventListener('scroll', onScroll)
    }, [])
    return state
}


const Scroll = () => {

    const { y } = useScroll()

    return (
        <div>
            <h1 style={{ position: "fixed", top:0,  color: y > 200 ? "red" : "blue"}}> use scroll </h1>
            asdasd
        </div>
    )
}

export default Scroll;