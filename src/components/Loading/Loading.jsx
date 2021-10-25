import React from 'react';

const Loading = () => {
    return (
        <div className="d-flex align-items-center justify-content-center" style={{ height: "70vh" }}>
            <div className="spinner-border" role="status" style={{ width: '6em', height: '6em' }}>
                <span className="sr-only"></span>
            </div>
        </div>
    )
}

export default Loading;