import React from "react";
import { TiDelete } from "react-icons/ti";

const ExpenseItem = (props) => {
    return (
        <li>
            {props.name}
            <div className='list-group-item d-flex justify-content-between align-items-center'>
                <span className='badge badge-primary badge-pill mr-3'>
                    ${props.cost}
                </span>
                <TiDelete size="1.5em"></TiDelete>
            </div>
        </li>
    );
}

export default ExpenseItem;