import React from 'react';

import './imput.scss'

const Input = ({newValue,onValueChange}) => {
    return (
            <input type="text"
                   value={newValue}
                   onChange={onValueChange}
            />
    );
};

export default Input;