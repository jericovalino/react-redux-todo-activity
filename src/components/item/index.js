import React from 'react';
import style from './style.module.css';

const Item = (props) => {
    return (
        <div className={style.item}>
            <span>{props.children}</span>
            <div>
                <button className={style.editBtn}>edit</button>
                <button className={style.deleteBtn}>delete</button>
            </div>
        </div>
    )
}

export default Item;