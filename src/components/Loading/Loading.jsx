import React from 'react';
import "./Loading.css";

const Loading = () => {
    return (
        <div id="spinnerContainer" className="d-flex align-items-center justify-content-center">
            <div className="spinner-border" role="status">
                <span className="sr-only"></span>
            </div>
        </div>
    )
}

export default Loading;