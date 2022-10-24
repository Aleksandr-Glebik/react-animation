import React from "react"

const TheHeader = () => {
    const height = 250
    const imgWidth = 100
    const fontSize = '40px'

    return (
        <header
            className="header"
            style={{
                height
            }}
        >
            <div className="flex">
                <img src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="logo" style={{width: imgWidth}} />
                <h2
                    style={{
                        fontSize
                    }}
                >
                    Hello Coders!
                </h2>
            </div>
            <div
                style={{
                    fontSize: 16
                }}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quae, voluptatum ipsa vel magni aliquam inventore deleniti accusantium.
            </div>
            <button
                style={{
                    margin: '1rem 0 0',
                    padding: '0.5rem 1rem',
                }}
            >
                Click me!
            </button>
        </header>
    )
}

export default TheHeader