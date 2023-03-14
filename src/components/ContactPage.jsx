import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

export const ContactPage = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userMail, setUserMail] = useState("");
  const [description, setDespription] = useState("");
  const url = "http://localhost:4000/contact/";
  const { mode } = useTheme();

  const submitHandler = async () => {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: Math.floor(Math.random() * 10000000),
          userName: userName,
          userMail: userMail,
          message: description,
        }),
      });
      if (!res.ok) {
        throw new Error(res.statusText);
      }

      alert("Your Post has been submitted!");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={`contactContainer`}>
      <h1>Contact me</h1>
      <form
        action="post"
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler();
        }}
      >
        <div>
          <input
            type="text"
            name="userName"
            id="userName "
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            placeholder="Enter your name"
            className="input"
          />
        </div>
        <div>
          <input
            type="email"
            name="userMail"
            id="userMail"
            value={userMail}
            onChange={(e) => {
              setUserMail(e.target.value);
            }}
            placeholder="Enter your email"
            className="input"
          />
        </div>
        <div>
          <textarea
            name="textarea"
            id="textarea"
            cols="30"
            rows="10"
            value={description}
            onChange={(e) => {
              setDespription(e.target.value);
            }}
            placeholder="What do you want to share?"
            className="input"
          ></textarea>
        </div>
        <button className={`button ${mode}`} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
