import React from 'react';
import { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import registerServices from '../../services/registerServices';
import emailjs from 'emailjs-com';


export default function Login(){

    let history = useHistory();

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const [loginErrors, setLoginErrors] = useState({
        emailError: "",
        passwordError: ""
    });

    const handleChange = (e) => {
        let newLogin = {...loginData, [e.target.name]: e.target.value};
        setLoginData(newLogin);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let valid = true;

        setLoginErrors({
            emailError: "",
            passwordError: ""
        })

        let newLoginError = {...loginErrors};

        if(loginData.email === ""){
            newLoginError.emailError = "Please enter email!!";
            setLoginErrors(newLoginError);
            valid = false;
        }
        else{
            newLoginError.emailError = "";
            setLoginErrors(newLoginError);
        }

        if(loginData.password === ""){
            newLoginError.passwordError = "Please enter Password!!";
            setLoginErrors(newLoginError);
            valid = false;
        }
        else{
            newLoginError.passwordError = "";
            setLoginErrors(newLoginError);
        }
        console.log(loginErrors);

        if(valid === true){
            registerServices.fatchUser(loginData).then((response) => {
                if(response){
                    if(loginData.email === response.Email && loginData.password === response.Password){
                        localStorage.setItem('user_id', response._id);
                        alert("Login Successful!!");
                        history.push("/dashboard");
                    }else{
                        alert("Invalid Password!!"); 
                    }
                }
            }).catch((error) => {
                alert("Login Failed!!");
                console.log("Eroor:",error)
            })
        }
      };

      const handleMail = async (e) =>{
        var email = prompt("Enter Your Email:");
        loginData.email = email;
        registerServices.fatchUser(loginData).then((res) => {
            console.log(res)

            if(res){

            // Mailing details
            var mailParams = {
                                
                //Mail Sender Details
                freelancerName: 'Freelancer',
                freelancerMail: 'deepatel1607@gmail.com',

                //Mail Reciver Details
                clientName: 'Client',
                clientMail: email,

                //Attachment Messages
                message: "Here is Your Password: "+res.Password,
            };

            // calling emailJS functionality with emailJS Credentials
            emailjs.send('testimonial_request', 'template_fmwc5oo', mailParams, 'user_INB1ILGAt4GVje2eeyj2V')
                .then(function (response) {
                    alert("Email Sent");
                    console.log('SUCCESS!', response.status, response.text);

                }, function (error) {
                    alert("Error: " + error);
                    console.log('FAILED...', error);
                });
            }
        }).catch((error) => {
            alert("Login Failed!!");
            console.log("Eroor:",error)
        })
      }

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
                        <Form.Label className="required">Email</Form.Label>
                            <input 
                                type="email" 
                                className="form-control" 
                                placeholder="Please enter email "
                                id = "email"
                                name = "email"
                                onChange={(e) => handleChange(e)} 
                            />
                        </div>
                        <p className="text-danger">{loginErrors.emailError}</p>

                        <div className="form-group">
                        <Form.Label className="required">Password</Form.Label>
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="Please enter password"
                                id = "password"
                                name = "password"
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <p className="text-danger">{loginErrors.passwordError}</p>

                        <div className="form-group">
                            <div>
                            </div>
                        </div>

                        <Button type="submit" className="btn-block">Sign in</Button>
                        <p className="forgot-password text-right">
                             <div><a href="#"> <p onClick={handleMail}>Forgot password?</p></a></div>
                        </p>
                    </form>
                </div>    
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}
