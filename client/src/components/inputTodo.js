import React, { Fragment, useState } from "react";

const InputTodo = () => {
    const [description, setDescription] = useState("");

    const handleChange = (event) => {
        setDescription(event.target.value);
    }

    return  (
        <Fragment>
            <h1 className="text-center mt-5">Todo List</h1>
            <form className="d-flex mt-5">
                <input type="text" className="form-control" value={description} onChange={handleChange} />
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    )


};

export default InputTodo;