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
 import testimonialServices from '../services/testimonialServices.js';
 var dateFormat = require("dateformat");
 
 const OpenNotification = () => {

     
     
     // Model display constant to display model when true
     const [lgShow, setLgShow] = useState(true);
 
     return (
        
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Request Testimonial
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form id="contact-form">

                        <input type="hidden" name="freelancerName" id="freelancerName" value="Freelancer_Deep" />
                        <input type="hidden" name="freelancerMail" id="freelancerMail" value="deepatel1607@gmail.com" />
                        <input type="hidden" name="clientName" id="clientName" value="Client_Deep" />
                        <input type="hidden" name="clientMail" id="clientMail" value="dee16798ppatel@gmail.com" />
                        <input type="hidden" name="message" id="message" value="From hidden" />

                        <Form.Group>
                            <Form.Label className="required form-label">Project</Form.Label>
                            
                        </Form.Group>

                       
                        
                    </Form>
                </Modal.Body>
            </Modal>
                                    
     )
 }
 
 export default OpenNotification
 