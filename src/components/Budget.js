import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { FiEdit } from 'react-icons/fi';


const Budget = () => {
    const { budget } = useContext(AppContext);

    return (
        <div className="alert alert-secondary d-flex justify-content-between align-items-center">
            <span>Budget: ${budget}</span>
            <FiEdit size="1.5em"></FiEdit>
        </div>
    );
};

export default Budget;