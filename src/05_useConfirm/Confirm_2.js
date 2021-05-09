import React from 'react';

const Confirm_2 = () => {

    const usePreventLeave = () => {
        const listner = e => {
            e.preventDefault();
            e.returnValue = '';
        }

        const enablePrevent = () => { window.addEventListener('beforeunload', listner) }
        const disablePrevent = () => { window.addEventListener('beforeunload', listner) }

        return { enablePrevent, disablePrevent }
    }


    const { enablePrevent, disablePrevent } = usePreventLeave()

    return (
        <div>
            <button onClick={enablePrevent}>enablePrevent</button>
            <button onClick={disablePrevent}>disablePrevent</button>
        </div>
    );


        
};

export default Confirm_2;