import React, { useCallback, useState } from 'react';

const UseInput2 = () => {
    //useInput 2
    const useInput = (initial, validator) => {
        const [val, setVal] = useState(initial);
        
        const onChange = e => {
            // console.log(e.target)
            const { target: { value} } = e
            let update = true;
            if(typeof validator === 'function') {
                update = validator(value)
            }

            if(update) { setVal(value) }
        }
        return { val, onChange } 
    }

    const max = function(value) { 
        if(value.length > 10) {
            alert('10글자 이내로 작성')
        } else {
            return value.length < 11
        }
    }

    const name = useInput('m...', max)
    const pass = useInput('pass...', max)


    return (
        <div>
            <input name="email" value={name.val} {...name} /> 
            <input name="password" value={pass.val} {...pass} /> <br />
            name: {name.val}<br />
            pass: {pass.val}<br />
        </div>
    );
};

export default UseInput2;