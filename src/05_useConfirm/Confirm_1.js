import React from 'react';

const Confirm = () => {

    const useConfirm = (initial = "", onConfirm, onCancel) => {
        if(!onConfirm || typeof onConfirm !== 'function') {
            return;
        }

        if(onCancel && typeof onCancel !== 'function') {
            return;
        }

        const confirmAction = () => {
            if(window.confirm(initial)) {
                onConfirm();
            } else {
                onCancel();
            }
        }

        return confirmAction;
    }

    const onClickSuccess = () => console.log('success')
    const onClickFailure = () => console.log('failure')
    const con = useConfirm('are you sure?', onClickSuccess, onClickFailure)

    return (
        <div>
            <button onClick={con}>confirm</button>
        </div>
    );
};

export default Confirm;