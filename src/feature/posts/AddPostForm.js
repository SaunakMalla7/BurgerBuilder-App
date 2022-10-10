import { useState } from "react";
import { useDispatch } from "react-redux";
import "./posts.css";

import { postAdded } from "./postsSlice";

import React from "react";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const onNameChanged = (e) => setName(e.target.value);
  const onReviewChanged = (e) => setContent(e.target.value);

  const onSaveClicked = () => {
    if (name && content) {
      dispatch(postAdded(name, content));
      setName("");
      setContent("");
    }
  };

  return (
    <section>
      <h2>Add Your Review</h2>
      <form>
        <label htmlFor="postname">Name:</label>
        <input
          type="text"
          id="postname"
          name="postname"
          value={name}
          onChange={onNameChanged}
        ></input>
        <label htmlFor="postContent">Review:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onReviewChanged}
        />
        <button type="button" onClick={onSaveClicked}>
          Save Review
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
