import React from "react"
import { motion } from "framer-motion"

const Button = (props) => {
    const {
        text,
        handleClick = Function.prototype
    } = props

       return (
        <motion.button
            onClick={handleClick}
            style={btnStyle}
            whileHover={{
                backgroundColor: '#ddd'
            }}
            whileTap={{
                backgroundColor: '#ccc'
            }}
        >
            {text}
        </motion.button>
    )
}

const btnStyle = {
    border: 'none',
    outline: 'none',
    padding: '12px 16px',
    backgroundColor: '#f1f1f1',
    cursor: 'pointer'
}

export default Button