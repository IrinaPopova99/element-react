import React from 'react';
import './ArrowUp.css';

function ArrowUp() {
    return (
        <a href="javascript:window.scrollTo(0, 0);"><div className="arrow-up">
            <i className="fas fa-chevron-up"></i>
        </div></a>
    )
}

export default ArrowUp;
