import React from 'react';

const Buttons = ({onClickAdd, children, disabled}) => {
    return (
        <button disabled={disabled} onClick={onClickAdd}>
            {children}
        </button>
    );
};

export default Buttons;