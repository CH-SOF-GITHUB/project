import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { loginUser } from "../redux/actions/Actions";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //import useDispatch
    const dispatch = useDispatch();
    //import useState
    const { loading, token } = useSelector(state => state);
    ///function handleSubmit 
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser({ email, password }));
    }
    return ( 
        <div className="col-md-5 m-auto">
            <h1>LOGIN HERE</h1>
            {loading ? (<h1>loading...</h1>) : (token) ? (<Redirect to="/home" />) : (
                <div>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="text" placeholder="Enter fullname.." value={email} onChange={(e) => setEmail(e.target.value)} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password.." value={password} onChange={(e) => setPassword(e.target.value)} />
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Form>
                </div>
            )}
        </div>
    );
}

export default SignIn;
