/**
 * Author: Deep Patel.
 * Created On: 2021-07-20
 * Frontend Page for Testimonials.
 */

 import React from 'react';
 import { useState, useEffect } from 'react';
 import PageHeader from "../components/PageHeader";
 import { Modal, Form, Button } from 'react-bootstrap';
 import Datatable from '../components/Datatable';
 import emailjs from 'emailjs-com';
 import Row from 'react-bootstrap/Row';
 import Col from 'react-bootstrap/Col';
 import "../styles/Testimonials.scss";
 import projectServices from '../services/projectsServices.js';
 import clientServices from '../services/clientService.js';
 import registerServices from '../services/registerServices';

const Profile = () => {

    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        mobile:'',
        linkedin:'',
        website:'',
        password: '',
    });

    useEffect(() => {
        registerServices.fatchUserById(localStorage.getItem('user_id')).then((response) => {
            console.log(response)
            if(response){
                userInfo.name = response.Name;
                userInfo.email = response.Email;
                userInfo.mobile = response.ContactNo;
                userInfo.linkedin = response.LinkedInProfile;
                userInfo.website = response.Website;
                userInfo.password = response.Password;
            }
        }).catch((error) => {
            alert("Login Failed!!");
            console.log("Eroor:",error)
        })
    },[]);



    return (
        <div>
            <div className="page-header-container">
                <PageHeader title="Profile" />
            </div>
            {/* <div className="page-content-container">
                    <div className="page-content">
                        <Row>
                            <Col className="text-right">
                                <Button className="btn primary-button" onClick={this.onClickBack}>
                                    <i className="fas fa-times"></i> Close
                                </Button>
                            </Col>
                        </Row>
                        <br/>
                        <Row className="justify-content-center">
                            <Col md="8">
                                <Table bordered hover>
                                    <tbody>
                                    <tr>
                                        <td>Client Name:</td>
                                        <td>{this.state.clientName}</td>
                                    </tr>
                                    <tr>
                                        <td>Contact No:</td>
                                        <td>{this.state.contactNo}</td>
                                    </tr>
                                    <tr>
                                        <td>Email:</td>
                                        <td>{this.state.emailId}</td>
                                    </tr>
                                    <tr>
                                        <td>Street:</td>
                                        <td>{this.state.street}</td>
                                    </tr>
                                    <tr>
                                        <td>Postal Code:</td>
                                        <td>{this.state.postalCode}</td>
                                    </tr>
                                    <tr>
                                        <td>Region:</td>
                                        <td>{this.state.region}</td>
                                    </tr>
                                    <tr>
                                        <td>Country:</td>
                                        <td>{this.state.country}</td>
                                    </tr>
                                    <tr>
                                        <td>Organization:</td>
                                        <td>{this.state.organizationName}</td>
                                    </tr>
                                    <tr>
                                        <td>Website:</td>
                                        <td>{this.state.websiteName}</td>
                                    </tr>
                                    <tr>
                                        <td>LinkedIn Profile:</td>
                                        <td>{this.state.linkedInProfile}</td>
                                    </tr>
                                    <tr>
                                        <td>Business Description:</td>
                                        <td>{this.state.businessDescription}</td>
                                    </tr>
                                    <tr>
                                        <td>Meeting Platform:</td>
                                        <td>{this.state.meetingPlatform}</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </div>
                </div> */}
        </div>
    )
}

export default Profile
