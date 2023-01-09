import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { Box, Button, TextField } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'

const Login = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [usernameErrText, setUsernameErrText] = useState('')
  const [passwordErrText, setPasswordErrText] = useState('')

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
    setUsernameErrText('')
    setPasswordErrText('')

    let err = false

    if (username === '') {
      err = true
      setUsernameErrText('Please fill out this field')
    }
    if (password === '') {
      err = true
      setPasswordErrText('Please fill out this field')
    }

    if (err) return

    setLoading(true)

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
    <>
    <Box
      component='form'
      sx={{ mt: 1 }}
      onSubmit={onSubmitHandler}
      noValidate
    >
      <TextField
        margin='normal'
        required
        fullWidth
        id='username'
        label='Username'
        name='username'
        disabled={loading}
        error={usernameErrText !== ''}
        helperText={usernameErrText}
        onChange={onChangeHandler}
      />
      <TextField
        margin='normal'
        required
        fullWidth
        id='password'
        label='Password'
        name='password'
        type='password'
        disabled={loading}
        error={passwordErrText !== ''}
        helperText={passwordErrText}
        onChange={onChangeHandler}
      />
      <LoadingButton
        sx={{ mt: 3, mb: 2 }}
        variant='outlined'
        fullWidth
        color='success'
        type='submit'
        loading={loading}
      >
        Login
      </LoadingButton>
    </Box>
    <Button
      component={Link}
      to='/register'
      sx={{ textTransform: 'none' }}
    >
      Don't have an account? Signup
    </Button>
  </>

    
  );
};

export default Login;
