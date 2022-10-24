import React, {useState} from "react"
import {motion, AnimateSharedLayout} from 'framer-motion'

const menuData = ['Short', 'Very Loooooooooooooooong item', 'Normal item']

const Menu = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div
            style={{
                display: 'flex',
                backgroundColor: '#eee',
                padding: '1rem',
                borderRadius: '25px'
            }}
        >
            <AnimateSharedLayout>
                {
                    menuData.map( (item, ind) => (
                        <MenuItem
                            key={item}
                            item={item}
                            isSelected={ activeIndex === ind }
                            handleClick={() => setActiveIndex(ind)}
                        />
                    ))
                }
            </AnimateSharedLayout>
        </div>
    )
}

export default Menu

function MenuItem(props) {
    const {
        item,
        isSelected,
        handleClick = Function.prototype
    } = props

    return (
        <motion.div
            onClick={handleClick}
            style={{
                margin: '0 0.5rem',
                fontWeight: 900,
                position: 'relative'
            }}
            initial={{color: '#000'}}
            animate={{color: isSelected ? 'rgba(255, 0, 0)' : '#000'}}
        >
            {isSelected && <ActiveLine />}
            {item}
        </motion.div>
    )
}

function ActiveLine() {
    return (
        <motion.div
            layoutId="activeItem"
            style={{
                width: '100%',
                height: '4px',
                position: 'absolute',
                bottom: '-0.45rem',
                backgroundColor: 'rgba(255, 0, 0)'
            }}
        />
    )
}