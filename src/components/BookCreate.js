import React, { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

const BookCreate = () => {
  const { createBook } = useBooksContext();
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(title);
    setTitle("");
  };
  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Title</label>
        <input value={title} type="text" onChange={handleChange} />
        <button className="button">Create</button>
      </form>
    </div>
  );
};

export default BookCreate;
