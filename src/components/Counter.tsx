import React, {useState} from 'react';
import styles from './Counter.module.scss'

export const Counter = () => {
    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter((prev) => prev+1)
    }
    const decrement = () => {
        setCounter((prev) => prev-1)
    }
    return (
        <div className={styles.wrapper}>
            <h1>{counter}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    );
};


