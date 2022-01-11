import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

const STYLES = ['btn--primary' , 'btn--outline'] // css classes which are automatically getting created

const SIZES = ['btn--medium','btn--large'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0]; // by default this will be used

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    
    return(
        <Link to='/sign-up' className='btn-mobile'>
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children} 
            </button>
        </Link>
    )
};

//NOTES:
// children -- inside the button tag whatever is passed in there will be automatically displayed as a component

