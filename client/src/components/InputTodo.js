import React, { Fragment, useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  //submit our form to be able to send data to our backend
    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { description };
            //proxy is only used in development so it will be ignored in production
            //so if there is no http://localhost:5000 then by default it is going to use Render domain
            //remember this Render app is just our server serving the build static content and also holding restful api



            const response = await fetch("/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            window.location = "/";
            
        } catch (err) {
            console.error(err.message);
        }
    };
    

  return (
    <>
      <h1 className="text-center mt-5">Pern Todo List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </>
  );
};

export default InputTodo;
