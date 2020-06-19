import React from 'react';
import style from './style.module.css'

import Item from '../item';

const TodoItems = () => {
    return (
        <div className={style.todoItems}>
            <Item />
            <Item />
            <Item />
        </div>
    )
}

export default TodoItems;