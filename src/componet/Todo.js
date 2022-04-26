import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [showModal, setModalShow] = useState(false);

  function deleteHandler() {
    setModalShow(true);
  }
  function closeModalHandler() {
    setModalShow(false);
  }
  function editHandler() {}

  return (
    <div>
      <div className="card">
        <h3>{props.title}</h3>
        <div className="actions">
          <button className="btn btn btn--alt" onClick={editHandler}>
            Edit
          </button>
          <button className="btn" onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </div>
      {showModal && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {showModal && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
}

export default Todo;
