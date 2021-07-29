/**
 * Author: Deep Patel.
 * Created On: 2021-07-20
 * Frontend Page for Testimonials.
 */

 import React,{Component} from 'react';
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
 import { withRouter } from "react-router";
 import NotificationService from "../services/notificationService"

 
class OpenNotification extends Component
{
        
    constructor(props) {
        super(props)

        console.log(this.props.location.notification);
        this.state = {
            eventName: this.props.location.notification.eventName,
            category: this.props.location.notification.category,
            lgshow: false
        }
        
    }

    componentDidMount() {

        this.setState({lgShow: true})
        
        
    }

    toggleModal = (value) => {
        this.setState({lgShow: value})
        console.log('component did mount', this.state);
        NotificationService.setStatus(this.state).then((response) => {   
            console.log('stored');
        }).catch((error) => {
            console.log("Error")
        })
    }
     
 
    render(){
     return (
        
            <Modal
                size="lg"
                show={this.state.lgShow}
                onHide={() => this.toggleModal(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Request Testimonial
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form id="contact-form">
                        <Form.Group>
                            <Form.Label className="required form-label" >category: {this.state.category} </Form.Label>
                            <Form.Label className="required form-label" >Description: {this.state.eventName}</Form.Label>
                        </Form.Group>    
                    </Form>
                </Modal.Body>
            </Modal>
                                    
     )
    }
 }
 
 export default withRouter(OpenNotification)
 