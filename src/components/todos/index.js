import React from 'react';
import style from './style.module.css'
import { useSelector } from 'react-redux';

import Item from '../item';

const Todos = () => {

    const todos = useSelector(state => state)

    return (
        <div className={style.todoItems}>
            {todos.length === 0  ? 
            (<p>Hooray!!! You have nothing to do..</p>):
            todos.map((item, i) => <Item key={i} id={item.id}>{item.data}</Item>) }
        </div>
    )
}

export default Todos;