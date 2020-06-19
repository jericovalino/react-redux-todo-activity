import React from 'react';
import style from './style.module.css'

import Todos from '../todos';

const Todo = () => {
    return (
        <div className={style.todo}>
            <header>
                <h1>TODO-APP</h1>
            </header>

            <Todos />

            <div className={style.add}>
                <input />
                <button className={style.addBtn}>ADD</button>
            </div>
        </div>
    )
}

export default Todo;