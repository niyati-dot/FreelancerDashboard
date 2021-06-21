import React from 'react';
import { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function Login(){

    let history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState();

    const handleSubmit = async e => {
        e.preventDefault();

        if(email === "admin@gmail.com" && password === "admin@123"){
            history.push("/dashboard",email);
        }
      };

    return (
        <div>
            <div className="row" > <br /> </div>

            <div className="row" > 
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <br />
                        <br />
                        <h3>Log in</h3>

                        <div className="form-group">
                            <label>Email</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                placeholder="Enter email"
                                id = "email"
                                name = "email"
                                value={email}
                                onChange={({ target }) => setEmail(target.value)} 
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="Enter password"
                                id = "password"
                                name = "password"
                                value={password}
                                onChange={({ target }) => setPassword(target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label">Remember me</label>
                            </div>
                        </div>

                        <Button variant="primary" type="submit" className="btn-block">Sign in</Button>
                        <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p>
                    </form>
                </div>    
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}
