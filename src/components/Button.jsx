import React from "react"
import { motion } from "framer-motion"

const Button = (props) => {
    const {
        text,
        handleClick = Function.prototype,
        isSelected,
    } = props

       return (
        <motion.button
            layout
            onClick={handleClick}
            style={btnStyle}
            whileHover={{
                backgroundColor: '#ddd'
            }}
            whileTap={{
                backgroundColor: '#ccc'
            }}
        >
            {isSelected && <BgSelected />}
            <motion.span
                animate={{color: isSelected ? '#fff' : '#000'}}
                style={{position: 'relative'}}
            >
                {text}
            </motion.span>
        </motion.button>
    )
}


export default Button

const btnStyle = {
    border: 'none',
    outline: 'none',
    padding: '12px 16px',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    position: 'relative'
}

const BgSelected = () => {
    return (
        <motion.div
            layoutId="activeMenuItem"
            style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                backgroundColor: 'blue',
                zIndex: 0
            }}
        />
    )
}