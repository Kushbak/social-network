import React, { useState } from 'react';
import styles from './Paginator.module.css';

const Paginator = (props) => {
    let portionSize = 30
    let pagesCount = Math.ceil(props.totalUsersCount / props.pagesSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionNumber = portionNumber * portionSize

    return (
        <div className={styles.Paginator}>
            {portionNumber > 1 &&
                <button onClick={() => { setPortionNumber(portionNumber - 1) }}>LEFT</button>}
            <div className={styles.forChangingPages}>
                {
                    pages
                        .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                        .map(p => {
                            return <button onClick={(e) => { props.onChangeCurrentPage(p) }} className={props.currentPage === p && styles.selectedPage}> {p} </button>
                        })
                }
            </div>
            {portionCount > portionNumber && 
                <button onClick={() => {setPortionNumber(portionNumber + 1)}}>RIGHT</button>}
        </div>
    )
}

export default Paginator;

