import React, { useState } from 'react';
import style from './style.module.css'
import randomID from '../../utils/randomId';
import { useDispatch } from 'react-redux';

import Todos from '../../components/todos';

const Todo = () => {
    const [inputValue, setInputvalue] = useState("");
    const addTodo = useDispatch();

    const inputHandler = (e) => {
        setInputvalue(e.target.value);
    }

    const addTodoHandler = () => {
        addTodo({ type: 'ADD_TODO', data: inputValue, id: randomID()});
        setInputvalue("");
    }

    return (
        <div className={style.todo}>
            <header>
                <h1>TODO-APP</h1>
            </header>

            <Todos />

            <div className={style.add}>
                <input placeholder=" add todo" value={inputValue} onChange={inputHandler} />
                <button
                    className={style.addBtn}
                    onClick={addTodoHandler}>
                    ADD
                </button>
            </div>
        </div>
    )
}

export default Todo;