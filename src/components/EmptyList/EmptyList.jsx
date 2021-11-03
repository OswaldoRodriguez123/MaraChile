import React from 'react';
import { Link } from "react-router-dom";
import "./EmptyList.css";

const EmptyList = () => {
    return (
        <div id="emptyContainer" className="d-flex align-items-center justify-content-center">
            No hay items disponibles
            <Link to={`/`}><button className="btn btn-dark">Volver</button></Link>
        </div>
    )
}

export default EmptyList;