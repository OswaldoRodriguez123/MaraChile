import React from 'react'

function Container({ children }) {
    return (
        <div className="container p-3 my-4">
            {children}
        </div>
    )
}

export default Container
