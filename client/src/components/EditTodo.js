import React, { Fragment } from 'react'

const EditTodo = ({ todo }) => {
  return (
    <>
<button 
type="button" 
className="btn btn-warning" 
data-bs-toggle="modal" 
data-bs-target="#myModal">
  Edit
</button>
<div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Edit Todo</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <div class="modal-body">
        <input type="text" className="form-control" />
      </div>

      <div class="modal-footer">
      <button type="button" class="btn btn-warning" data-bs-dismiss="modal">
      Edit
      </button>
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
        Close
        </button>
      </div>

    </div>
  </div>
</div>
    </>
  )
};

export default EditTodo
