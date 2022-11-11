import React, { useState } from 'react'

const Login = () => {


    const {email, setEmail} = useState()
    const {password, setPassword} = useState()

    const onSubmitHandler = () => {
        
    }


  return (
    <div className="login__container">
        <form className="login__form" onSubmit={onSubmitHandler}>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" required value={email} onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" name='password' required value={password} onChange={(e)=> setPassword(e.target.value)}/>
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login