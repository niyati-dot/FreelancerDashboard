/**
 * Author: Deep Patel.
 * Created On: 2021-07-20
 *  Frontend Page for Testimonials.
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
import clientServices from '../services/clientServices.js';
import testimonialServices from '../services/testimonialServices.js';
//var dateFormat = require("dateformat");

const Testimonials = () => {

    // const columns = [
    //     { Header: '#', accessor: row => 1 },
    //     { Header: 'Project', accessor: 'project' },
    //     { Header: 'Client', accessor: 'client' },
    //     { Header: 'Feedback', accessor: 'feedback' },
    //     { Header: 'Requested on', accessor: row => dateFormat(row.requestedOn, "dd-mm-yyyy, HH:MM:ss") },
        
    //     {
    //         Header: 'Actions', accessor: 'row',
    //         Cell: ({ row }) => (
    //             <div className="action">
    //                 <div className="button-container">
    //                     <Button className="secondary-button" onClick={() => setLgShow(true)}>View</Button>
    //                     {/* <a href="#">Re-Request</a> */}
    //                     <Button className="delete-button" align="right"  onClick= {() => deleteTestimonial(row)} >Delete</Button>
    //                 </div>
    //             </div>
    //         )
    //     }
    // ];

    // // project details
    // const [project, setProjects] = useState([]);
    // useEffect(() => {
    //     projectServices.list().then(res => setProjects(res.data));
    // },[]); 

    // // client details
    // const [client, setClient] = useState([]);
    // useEffect(() => {
    //     clientServices.list().then(res => setClient(res.data));
    // },[]); 

    // // Testimonial Details
    // const [testimonial, setTestimonial] = useState([]);
    // useEffect(() => {
    //     testimonialServices.list().then(res => setTestimonial(res.data));
    // },[]);

    // // Mailing Details
    // const [mailInfo, setMailInfo] = useState({
    //     project: "",
    //     client: "",
    //     message: "",
    //     id: ""
    // });

    // const storeData = (e) => {
    //     e.preventDefault();
    //     console.log(mailInfo);
    //     testimonialServices.add(mailInfo).then(response => {
    //         mailInfo.id = response.result._id
    //     })

    //     sendEmail(testimonialServices.add(mailInfo));
    // }

    // // Send Mail Module
    // function sendEmail(data) {
    //     console.log('hello',mailInfo)
    //     console.log(mailInfo);
    //     const Form_Link = "https://csci5709-group5-s21.herokuapp.com/testimonials/requestTestimonials/" + mailInfo.id;

    //     var mailParams = {
    //         //Mail Sender Details
    //         freelancerName: 'Freelancer_Deep',
    //         freelancerMail: 'deepatel1607@gmail.com',

    //         //Mail Reciver Details
    //         clientName: 'Client_Deep',
    //         clientMail: 'dee16798ppatel@gmail.com',

            
    //         //Attachment Messages
    //         message: mailInfo.message,
    //         link: Form_Link
    //     };

    //     // calling emailJS functionality
    //     emailjs.send('testimonial_request', 'template_fmwc5oo', mailParams, 'user_INB1ILGAt4GVje2eeyj2V')
    //         .then(function (response) {
    //             alert("Email Sent");
    //             console.log('SUCCESS!', response.status, response.text);

    //         }, function (error) {
    //             alert("Error: " + error);
    //             console.log('FAILED...', error);
    //         });
    // }

    // // Delete testimonials
    // const deleteTestimonial = (task) => {
    //     if (window.confirm("Are you sure?")) {
    //         let newData = [...testimonial];
    //         newData.splice(testimonial.index, 1);
    //         console.log(newData);
    //         setTestimonial(newData);
    //     }
    // };

    // // handling changes
    // const handleChange = (e) => {
    //     let newRequest = {...mailInfo, [e.target.name]: e.target.value};
    //     setMailInfo(newRequest);
    // };

    // const [lgShow, setLgShow] = useState(false);

    // return (
    //     <div className="page-container add-testimonial-container">
    //         <div className="page-header-container">
    //             <PageHeader title="Testimonials" />
    //         </div>
    //         <div className="page-content-container">
    //             <div className="page-content">
    //                 <Row>
    //                     <Col xs={12}>
    //                         <div className="col-md-2 button-container">
    //                             <div className="row my-add-btn">
    //                                 <div className="col-md-5"></div>
    //                                 <div className="col-md-7">
    //                                     <div className="add-testimonial-container">
    //                                         <div className="generate-button-container">
    //                                             <button className="primary-button" type="button" align="right" onClick={() => setLgShow(true)}> Request</button>
    //                                         </div>
    //                                     </div>
    //                                     <Modal
    //                                         size="lg"
    //                                         show={lgShow}
    //                                         onHide={() => setLgShow(false)}
    //                                         aria-labelledby="example-modal-sizes-title-lg"
    //                                     >
    //                                         <Modal.Header closeButton>
    //                                             <Modal.Title id="example-modal-sizes-title-lg">
    //                                                 Request Testimonial
    //                                             </Modal.Title>
    //                                         </Modal.Header>
    //                                         <Modal.Body>
    //                                             <Form id="contact-form">

    //                                                 <input type="hidden" name="freelancerName" id="freelancerName" value="Freelancer_Deep" />
    //                                                 <input type="hidden" name="freelancerMail" id="freelancerMail" value="deepatel1607@gmail.com" />
    //                                                 <input type="hidden" name="clientName" id="clientName" value="Client_Deep" />
    //                                                 <input type="hidden" name="clientMail" id="clientMail" value="dee16798ppatel@gmail.com" />
    //                                                 <input type="hidden" name="message" id="message" value="From hidden" />

    //                                                 <Form.Group>
    //                                                     <Form.Label className="required form-label">Project</Form.Label>
    //                                                     <Form.Control as="select" name="project"
    //                                                         onChange={(e) => handleChange(e)} 
    //                                                     >
    //                                                         <option>Select Project</option>
    //                                                         {project.map(onlineUsersRow => (
    //                                                             <option value={onlineUsersRow.title} >
    //                                                                 {onlineUsersRow.title}
    //                                                             </option>
    //                                                         ))}
    //                                                     </Form.Control>
    //                                                 </Form.Group>

    //                                                 <Form.Group>
    //                                                     <Form.Label className="required form-label">Client</Form.Label>
    //                                                     <Form.Control as="select" name="client"
    //                                                         onChange={(e) => handleChange(e)} 
    //                                                     >
    //                                                         <option>Select Client</option>
    //                                                         {client.map(onlineUsersRow => (
    //                                                             <option value={onlineUsersRow.ClientName}>{onlineUsersRow.ClientName}</option>
    //                                                         ))}
    //                                                     </Form.Control>
    //                                                 </Form.Group>

    //                                                 <Form.Group>
    //                                                         <Form.Label className="required form-label">Description Message</Form.Label>
    //                                                         <Form.Control as="textarea" name="message" rows={3} id="message" 
    //                                                             onChange={(e) => handleChange(e)} 
    //                                                         />
    //                                                 </Form.Group>

    //                                                 {/* <Button variant="primary" type="submit" id="button" value="Send" onClick={() => sendEmail(mailInfo)}> */}
    //                                                 <Button variant="primary" type="submit" id="button" value="Send" onClick={storeData}>   
    //                                                     Send
    //                                                 </Button>
    //                                             </Form>
    //                                         </Modal.Body>
    //                                     </Modal>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </Col>
    //                     <Col xs={12}>
    //                         <Datatable columns={columns} data={testimonial} />
    //                     </Col>
    //                 </Row>
    //             </div>
    //         </div>
    //     </div>

    // )
}

export default Testimonials
