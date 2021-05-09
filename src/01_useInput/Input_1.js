import React, { useCallback, useState } from 'react';

const UseInput1 = () => {


    //useInput 1
    const useInput = (initial) => {
        const [changeValue, setValue] = useState(initial)
        const handler = e => {
            const { value, name } = e.target
            setValue(value)
        }
        return [changeValue, handler]
    }

    const [email, onChangeEmail] = useInput('')
    const [password, onChangePassword] = useInput('')


    // default 
    // const [email, setEmail] = useState(''); 
    // const [password, setPassword] = useState(''); 

    // const onChange = useCallback(e => {
    //     const { value, name } = e.target;
    //     if(name === 'email') { setEmail(value) }
    //     if(name === 'password') { setPassword(value) } 
    // }, [])

    return (
        <div>
            <input name="email" value={email} onChange={onChangeEmail} /> <br />
            <input name="password" value={password} onChange={onChangePassword} /> <br />
        </div>
    );
};

export default UseInput1;