import React from "react";
import { TiDelete } from "react-icons/ti";

const ExpenseItem = (props) => {
    return (
        <li>
            {props.name}
            <div>
                <span>
                    ${props.cost}
                </span>
                <TiDelete size="1.5em"></TiDelete>
            </div>
        </li>
    );
}

export default ExpenseItem;