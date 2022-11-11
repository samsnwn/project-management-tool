import React, { useState } from "react";
import axios from "axios"

const Register = () => {
  const [userInput, setUserInput]  = useState();

  const onChangeHandler = (e) => {
    const inputValue = e.target.value;
    setUserInput((prev) => {
      return {
        ...prev,
        [e.target.name]: inputValue.trim(),
      };
    });
  };

  const onSubmitHandler = async(e) => {
    e.preventDefault();

    try {
      const data = await axios.post('http://localhost:4000/authentication/register', userInput)
      console.log(data);
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="login__container">
      <form className="login__form" onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            required
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            required
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            required
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password: </label>
          <input
            type="password"
            name="confirmPassword"
            required
            onChange={onChangeHandler}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
