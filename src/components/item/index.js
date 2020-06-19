import React from 'react';
import style from './style.module.css';

const Item = () => {
    return (
        <div className={style.item}>
            <span> a quick brown fox jumps over... </span>
            <div>
                <button className={style.editBtn}>edit</button>
                <button className={style.deleteBtn}>delete</button>
            </div>
        </div>
    )
}

export default Item;