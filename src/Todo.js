import React, { useState } from "react";

function Todo({ task = "default todo", id = "1", remove, update }) {
  let [editTask, setEditTask] = useState(task);
  let [isEditing, setIsEditing] = useState(false);

  let toggleEdit = () => {
    setIsEditing(edit => !edit);
  };

  let handleChange = evt => {
    setEditTask(evt.target.value);
  };

  let handleDelete = () => remove(id);

  let handleUpdate = evt => {
    evt.preventDefault();
    update(id, editTask);
    setIsEditing(false);
  };

  // default todo view
  let jsx = (
    <div>
      <li>{task}</li>
      <button onClick={toggleEdit}>Edit</button>
      <button onClick={handleDelete}>X</button>
    </div>
  );

  // todo view when editing
  if (isEditing) {
    jsx = (
      <div>
        <form onSubmit={handleUpdate}>
          <input type="text" value={editTask} onChange={handleChange} />
          <button>Update!</button>
        </form>
      </div>
    );
  }

  return jsx;
}

export default Todo;
