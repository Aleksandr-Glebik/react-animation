import React, {useState} from "react"
import { AnimatePresence, motion } from "framer-motion"
import Button from "./Button"

const Filter = ({data}) => {
    const [cards, setCards] = useState(data.filter(el => el.category === 'cars'))

    const buttons = data.reduce( (acc, el) => {
        if (acc.includes(el.category)) return acc

        return [...acc, el.category]
    }, [])

    const handleFilter = (selector) => {
        setCards(data.filter(el => el.category === selector))
    }

    return (
        <div>
            <div>
                {
                    buttons.map( btn => (
                        <Button key={btn}
                                text={btn}
                                handleClick={() => handleFilter(btn)}
                        />

                    ))
                }
            </div>
            <div style={{overflow: 'hidden', maxWidth: 400}}>
                <AnimatePresence initial={false} exitBeforeEnter>
                {
                    cards.map( card => (
                        <motion.div
                            key={card.title}
                            style={boxStyle}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            // transition={{duration: 2}}
                        >
                            {card.title}
                        </motion.div>
                    ))
                }
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Filter

const boxStyle = {
    float: 'left',
    backgroundColor: '#2196F3',
    color: '#ffffff',
    width: '100px',
    lineHeight: '100px',
    textAlign: 'center',
    margin: '2px',
}