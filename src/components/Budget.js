import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { FiEdit } from 'react-icons/fi';


const Budget = () => {
    const { budget } = useContext(AppContext);
    const [allowEdit, setEditable] = useState("false");

    const handleBudgetEdit = () => {
        setEditable(!allowEdit);
    };

    return (
        <div>
            <div className="alert alert-secondary d-flex justify-content-between align-items-center">
                <span>Budget: ${budget}</span>
                <FiEdit size="1.5em" onClick={handleBudgetEdit}></FiEdit>
            </div>
            <form className={allowEdit ? "d-flex" : "d-none"}>
                <div className="row">
                    <div className="col-sm">
                        <input type="text" className="form-control" id="budget"></input>
                    </div>
                    <div className="col-sm">
                        <button type="submit" className="btn btn-primary">Save</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Budget;