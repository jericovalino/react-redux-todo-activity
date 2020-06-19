import React from 'react';
import style from './style.module.css';
import { useDispatch } from 'react-redux';

const Item = (props) => {

    const dispatch = useDispatch();

    const deleteTodoHandler = () => {
        console.log(props.id)
        dispatch({
            type: 'DELETE_TODO',
            id: props.id
        })
    }

    const editTodoHandler = () => {
        dispatch({
            type: 'EDIT_TODO',
            id: props.id
        })
    }

    return (
        <div className={style.item}>
            <span>{props.children}</span>
            <div>
                <button className={style.editBtn} 
                    onClick={editTodoHandler}>edit</button>
                <button className={style.deleteBtn} 
                    onClick={deleteTodoHandler}>delete</button>
            </div>
        </div>
    )
}

export default Item;