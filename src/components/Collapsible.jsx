import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Collapsible = (props) => {
    const {
        title = 'click me',
        children
    } = props

    const [isVisible, setVisible] = useState(true)

    const handleVisibility = () => setVisible(!isVisible)

    return (
        <>
            <div
                onClick={handleVisibility}
                style={{
                    backgroundColor: '#ddd',
                    width: 300,
                    padding: '0.8rem 1.2rem',
                    margin: '1rem'
                }}
            >
                {title}
            </div>
            <AnimatePresence initial={false}>
                {
                    isVisible && (
                        <motion.div
                            initial={{height: 0, opacity: 0}}
                            animate={{height: 'auto', opacity: 1}}
                            exit={{height: 0, opacity: 0}}
                            style={{overflow: 'hidden'}}
                            // transition={{duration: 1}}
                        >
                            <div
                                style={{padding: '0.8rem 1.2rem', width: 400, border: '1px solid #ddd', borderRadius: 10}}
                            >
                                {children}
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </>
    )
}

export default Collapsible