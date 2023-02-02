import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export const NewPost = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const url = "http://localhost:4000/articles";
  const navigate = useNavigate();

  async function handleSubmit() {
    if (!title || !author || !content) {
      alert("Please fill out every field");
    } else {
      try {
        const send = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: Math.floor(Math.random() * 10000000000),
            title: title,
            author: author,
            content: content,
          }),
        });
        const json = await send.json();

        setTitle("");
        setAuthor("");
        setContent("");
        alert("Your article has been submitted.");
        navigate("/");
      } catch (e) {
        console.log(e);
      }
    }
  }
  return (
    <div className="newPostContainer">
      <h1>Create a new article</h1>
      <form
        action="post"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Title"
            className="input"
          />
        </div>
        <div>
          <input
            type="text"
            name="author"
            id="author"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
            placeholder="Author"
            className="input"
          />
        </div>
        <div>
          <textarea
            name="content"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
            placeholder="Your Text"
            className="input"
            rows="20"
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
