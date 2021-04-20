import React from 'react';
import './SubmitButton.css';

function SubmitButton({ children, type }) {
    return (
        <div className="button-block">
            <button className="button" type={type}>
                {children}
            </button>
        </div>
    )
}

export default SubmitButton;
