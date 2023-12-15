import React from 'react'
import { useAuth } from '../../utils/AuthContext';

const Login = () => {

    const{ authenticated} = useAuth();

    console.log({authenticated});
  return (
    <div>Login</div>
  )
}

export default Login