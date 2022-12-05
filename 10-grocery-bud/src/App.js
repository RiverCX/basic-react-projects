import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  return list ? JSON.parse(list) : [];
};

function App() {
  const [title, setTitle] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setEditing] = useState(false);
  const [editId, setEditId] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const showAlert = (show = false, message = "", type = "") =>
    setAlert({ show, message, type });

  const deleteItem = (id) => {
    setList(list.filter((item) => item.id !== id));
    showAlert(true, "item deleted", "danger");
  };

  const editItem = (id, title) => {
    setEditing(true);
    setEditId(id);
    setTitle(title);
  };

  const clearList = () => {
    setList([]);
    showAlert(true, "item cleared", "danger");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      showAlert(true, "please enter value", "danger");
    } else if (title && isEditing) {
      const newItem = { id: editId, title };
      setList(
        list.map((item) => {
          return item.id === editId ? newItem : item;
        })
      );
      setTitle("");
      setEditing(false);
      setEditId(null);
      showAlert(true, "item edited", "success");
    } else {
      const newItem = { id: new Date().getTime().toString(), title };
      setList([...list, newItem]);
      setTitle("");
      showAlert(true, "item added", "success");
    }
  };

  return (
    <section className="section-center">
      <form onSubmit={handleSubmit} className="grocery-form">
        {alert.show && <Alert {...alert} showAlert={showAlert} list={list} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            name="title"
            value={title}
            placeholder="e.g. eggs"
            onChange={(e) => setTitle(e.target.value)}
            className="grocery"
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="section-container">
          <List items={list} editItem={editItem} deleteItem={deleteItem} />
          <button className="clear-btn" onClick={clearList}>
            clear all
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
