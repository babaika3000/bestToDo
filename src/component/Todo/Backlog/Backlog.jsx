import React from 'react';
import {ReactComponent as TrashСan} from '../../../assets/Img/trashСan.svg';
import './Backlog.scss'
import CheckBox from "../../CheckBox/CheckBox";

const Backlog = ({item, onDelete, onChangeCheckboxItem}) => {

    const handleClick = () => {
        onDelete(item.id)
    }
    const handleChangeCheckbox = (e) => {
        onChangeCheckboxItem(e.target.checked, item.id)
    }


    return (
        <div className='list'>
            <CheckBox checked={item.checked} onChange={handleChangeCheckbox}/>
            <div className='list__item'>
                {item.text}
            </div>
            <div className='list__close' onClick={handleClick}>
                <TrashСan/>
            </div>
        </div>

    );
};

export default Backlog;