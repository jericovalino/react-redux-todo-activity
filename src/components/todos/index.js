import React from 'react';
import style from './style.module.css'
import { useSelector } from 'react-redux';

import Item from '../item';

const Todos = () => {

    const todos = useSelector(state => state)

    return (
        <div className={style.todoItems}>
            {todos.map((item, i) => <Item key={i} id={i}>{item}</Item>) }
        </div>
    )
}

export default Todos;