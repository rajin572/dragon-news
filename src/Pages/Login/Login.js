import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthContex';

const Login = () => { 
    const [error, setError] = useState('')
    const {userLogin} = useContext(AuthProvider)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const HandleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        userLogin(email,password)
        .then(result => {
            const user = result.user
            console.log(user);
            form.reset()
            navigate(from, {replace: true})
            setError('')
        })
        .catch(error =>{
            console.error(error)
            setError(error.message)
        }
        )
    }
    return (
        <Form onSubmit={HandleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" />
        </Form.Group>
        <Form.Text className="text-danger">
            {error}
        </Form.Text>
        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
};

export default Login;