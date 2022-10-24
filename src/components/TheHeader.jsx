import React from "react"
import {motion, useTransform} from 'framer-motion'

const TheHeader = ({offsetY, scrollY}) => {
    const heightSizes = [250, 50]
    const imageSize = [100, 35]
    const fontSizes = ['40px', '20px']

    const height = useTransform(scrollY, offsetY, heightSizes)
    const imgWidth = useTransform(scrollY, offsetY, imageSize)
    const fontSize = useTransform(scrollY, offsetY, fontSizes)
    const pOpacity = useTransform(scrollY, [20, 150], [1, 0])
    const btnOpacity = useTransform(scrollY, [145, 300], [0, 1])

    return (
        <motion.header
            className="header"
            style={{
                height
            }}
        >
            <div className="flex">
                <motion.img src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="logo" style={{width: imgWidth}} />
                <motion.h2
                    style={{
                        fontSize
                    }}
                >
                    Hello Coders!
                </motion.h2>
                <motion.button
                    style={{
                        marginLeft: 'auto',
                        padding: '0.5rem 1rem',
                        opacity: btnOpacity,
                    }}
                >
                    Click me!
                </motion.button>
            </div>
            <motion.p
                style={{
                    fontSize: 18,
                    marginTop: '15px',
                    opacity: pOpacity
                }}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quae, voluptatum ipsa vel magni aliquam inventore deleniti accusantium.
                <button
                    style={{
                        display: 'block',
                        margin: '1rem 0 0',
                        padding: '0.5rem 1rem',
                    }}
                >
                    Click me!
                </button>
            </motion.p>
        </motion.header>
    )
}

export default TheHeader