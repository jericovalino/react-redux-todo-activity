import React, { useState } from 'react';
import style from './style.module.css';
import { useDispatch } from 'react-redux';

const Item = (props) => {

    const [showEdit, setShowEdit] = useState(false);
    const [editValue, setEditValue] = useState(props.children);
    const dispatch = useDispatch();

    const deleteTodoHandler = () => {
        if(showEdit) setShowEdit(false);
        dispatch({
            type: 'DELETE_TODO',
            id: props.id
        })
    }

    const editTodoHandler = () => {
        if (!showEdit) {
            setShowEdit(!showEdit);
        } else {
            dispatch({
                type: 'EDIT_TODO',
                id: props.id,
                data: editValue
            });
            setShowEdit(false);
        }
    }

    const editInputHandler = (e) => {
        setEditValue(e.target.value);
    }

    return (
        <div className={style.item}>
            <span>
                {showEdit ? (<input value={editValue} onChange={editInputHandler} />) : props.children}
                {props.id}
            </span>
            <div>
                <button className={style.editBtn}
                    onClick={editTodoHandler}>{showEdit ? 'save' : 'edit'}</button>
                <button className={style.deleteBtn}
                    onClick={deleteTodoHandler}>delete</button>
            </div>
        </div>
    )
}

export default Item;