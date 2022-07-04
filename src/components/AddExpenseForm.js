import React from "react";

const AddExpenseForm = () => {
    return (
        <form>
            <div>
                <div>
                    <label for="name">Name</label>
                    <input
                        required="required"
                        type="text"
                    ></input>
                </div>
                <div>
                    <label for="cost">Cost</label>
                    <input required="required" type="text"></input>
                </div>
            </div>

            <div>
                <div>
                    <button type="submit">Save</button>
                </div>
            </div>
        </form>
    );
}

export default AddExpenseForm;