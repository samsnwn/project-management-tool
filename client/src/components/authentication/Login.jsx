import React, { useContext, useState } from "react";
import axios from "axios";
import { Context } from "../../store/Context";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()

  const { user, setUser, isLoggedIn, setIsLoggedIn } = useContext(Context);

  const [userInput, setUserInput] = useState();

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
        const data = await axios.post('http://localhost:4000/authentication/login', userInput)
        setUser(data)
        setIsLoggedIn(true)
        navigate('/profile')

    } catch (err) {
        console.log(err)
    }
  };

  return (
    <div className="login__container">
      <form className="login__form" onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            required
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            required
            onChange={onChangeHandler}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
