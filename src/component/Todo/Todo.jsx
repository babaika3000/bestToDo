import React, {useState} from 'react';

import './todo.scss'
import Backlog from "./Backlog/Backlog";
import Input from "./Input/Input";
import Buttons from "../Buttons/Buttons";

const Todo = () => {
    const [newValue, setNewValue] = useState("")
    const [list, setList] = useState([])
    const [filter, setFilter] = useState("All")

    const handleClickAdd = () => {
        if (filter === 'Complete') {
            const newList = [{
                text: newValue, id: 'id' + (new Date()).getTime(),
                checked: true
            }, ...list]
            setList(newList)
        } else {
            const newList = [{
                text: newValue, id: 'id' + (new Date()).getTime(),
                checked: false
            }, ...list]
            setList(newList)
        }
        setNewValue('')
    }

    const handleDeleteBacklog = (id) => {
        const newList = list.filter(item => item.id !== id);
        setList(newList);

    }
    const handleChangeCheckboxItem = (checked, id) => {


        const newList = list.map(item => {
            if (item.id === id) {
                return {...item, checked: checked}
            }
            return item
        })
        setList(newList)
    }

    const getListTodo = () => {
        if (filter === 'All') {
            return list
        } else if (filter === 'Complete') {
            return list.filter(item =>
                item.checked
            )
        } else if (filter === 'NotComplete') {
            return list.filter(item =>
                !item.checked)
        }

    }
    const handleCompleteBacklog = () => {
        setFilter('Complete')
    }

    const handleNotCompleteBacklog = () => {
        setFilter('NotComplete')
    }

    const handleAllBacklog = () => {
        setFilter('All')

    }

    const handleValueChange = (e) => {
        setNewValue(e.target.value)
    }
    console.log(filter)

    const isDisabled = !newValue

    return (
        <div className='todo'>
            <div>
                <h2> Что ты сделал сегодня?</h2>
            </div>
            <div className="todo__button">
                <Input
                    newValue={newValue}
                    onValueChange={handleValueChange}

                />
                <Buttons
                    onClickAdd={handleClickAdd}
                    disabled={isDisabled}>
                    Add
                </Buttons>
            </div>
            <div className="todo__list">
                {getListTodo().map((item) => <Backlog key={item.id}
                                                      item={item}
                                                      onDelete={handleDeleteBacklog}
                                                      onChangeCheckboxItem={handleChangeCheckboxItem}
                />)}
            </div>
            <div className='todo__button-list'>
                <Buttons
                    onClickAdd={handleCompleteBacklog}>
                    Выпоненые
                </Buttons>
                <Buttons
                    onClickAdd={handleAllBacklog}>
                    Все
                </Buttons>
                <Buttons
                    onClickAdd={handleNotCompleteBacklog}>
                    Не выполеные
                </Buttons>
            </div>
        </div>
    );
};

export default Todo;