import React from 'react';
import { useState, useEffect } from 'react';
import PageHeader from "../components/PageHeader";
import { Modal, Form, Button } from 'react-bootstrap';
import Datatable from '../components/Datatable';
import emailjs from 'emailjs-com';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../styles/Testimonials.scss"
const Testimonials = () => {

    const columns = [
        { Header: '#', accessor: 'no' },
        { Header: 'Project', accessor: 'project' },
        { Header: 'Status', accessor: 'status' },
        { Header: 'Requested on', accessor: 'requestedOn' },
        {
            Header: 'Actions', accessor: 'row',
            Cell: ({ row }) => (
                <div className="row">
                    <div className="col-md-3">
                        <button className="secondary-button" onClick={() => setLgShow(true)}>Re-Request</button>
                        {/* <a href="#">Re-Request</a> */}
                    </div>

                    <div className="col-md-3">
                        <button className="delete-button" onClick={deleteTask} >Delete</button>
                        {/* <a href="#">Delete</a> */}
                    </div>
                </div>
            )
        }
    ];


    function sendEmail(e) {
        e.preventDefault();

        // console.log(e.target.data);
        var mailParams = {
            //Mail Sender Details
            freelancerName: 'Freelancer_Deep',
            freelancerMail: 'deepatel1607@gmail.com',

            //Mail Reciver Details
            clientName: 'Client_Deep',
            clientMail: 'dee16798ppatel@gmail.com',

            //Attachment Messages
            message: 'Success!!'
        };

        emailjs.send('testimonial_request', 'template_fmwc5oo', mailParams, 'user_INB1ILGAt4GVje2eeyj2V')
            .then(function (response) {
                alert("Email Sent");
                console.log('SUCCESS!', response.status, response.text);

            }, function (error) {
                alert("Error: " + error);
                console.log('FAILED...', error);
            });
    }

    const [data, setData] = useState([]);
    useEffect(() => {
        setData([
            {
                no: "1",
                project: "S-A-M",
                client: "Deep Patel",
                requestedOn: "20-06-2021",
                status: "Pending"
            },
            {
                no: "2",
                project: "S-A-M",
                client: "Deep Patel",
                requestedOn: "20-06-2021",
                status: "Pending"
            },
            {
                no: "3",
                project: "S-A-M",
                client: "Deep Patel",
                requestedOn: "20-06-2021",
                status: "Pending"
            },
            {
                no: "4",
                project: "S-A-M",
                client: "Deep Patel",
                requestedOn: "20-06-2021",
                status: "Pending"
            },
            {
                no: "5",
                project: "S-A-M",
                client: "Deep Patel",
                requestedOn: "20-06-2021",
                status: "Pending"
            },
            {
                no: "6",
                project: "S-A-M",
                client: "Deep Patel",
                requestedOn: "20-06-2021",
                status: "Pending"
            },
            {
                no: "7",
                project: "S-A-M",
                client: "Deep Patel",
                requestedOn: "20-06-2021",
                status: "Pending"
            },
            {
                no: "8",
                project: "S-A-M",
                client: "Deep Patel",
                requestedOn: "20-06-2021",
                status: "Pending"
            },
            {
                no: "9",
                project: "S-A-M",
                client: "Deep Patel",
                requestedOn: "20-06-2021",
                status: "Pending"
            },
            {
                no: "10",
                project: "S-A-M",
                client: "Deep Patel",
                requestedOn: "20-06-2021",
                status: "Pending"
            },
            {
                no: "11",
                project: "S-A-M",
                client: "Deep Patel",
                requestedOn: "20-06-2021",
                status: "Pending"
            },
            {
                no: "12",
                project: "S-A-M",
                client: "Deep Patel",
                requestedOn: "20-06-2021",
                status: "Pending"
            },
            {
                no: "13",
                project: "S-A-M",
                client: "Deep Patel",
                requestedOn: "20-06-2021",
                status: "Pending"
            }
        ])
    }, []);

    const [testimonial, setTestimonial] = useState({
        no: "",
        project: "",
        client: "",
        requestedOn: "",
        status: ""
    });

    const deleteTask = (task) => {
        if (window.confirm("Are you sure?")) {
            let newData = [...data];
            newData.splice(testimonial.index, 1);
            console.log(newData);
            setData(newData);
        }
    };

    const [lgShow, setLgShow] = useState(false);

    return (
        <div className="page-container add-testimonial-container">
            <div className="page-header-container">
                <PageHeader title="Testimonials" />
            </div>
            <div className="page-content-container">
                <div className="page-content">
                    <Row>
                        <Col xs={12}>
                            <div className="col-md-2 button-container">
                                <div className="row my-add-btn">
                                    <div className="col-md-5"></div>
                                    <div className="col-md-7">
                                        <div className="add-testimonial-container">
                                            <div className="generate-button-container">
                                                <button className="primary-button" type="button" align="right" onClick={() => setLgShow(true)}> Request</button>
                                            </div>
                                        </div>
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
                                                        <Form.Label>Project</Form.Label>
                                                        <Form.Control as="select">
                                                            <option>Project 1</option>
                                                            <option>Project 2</option>
                                                            <option>Project 3</option>
                                                            <option>Project 4</option>
                                                            <option>Project 5</option>
                                                        </Form.Control>
                                                    </Form.Group>

                                                    <Form.Group>
                                                        <Form.Label>Client</Form.Label>
                                                        <Form.Control as="select">
                                                            <option>Client 1</option>
                                                            <option>Client 2</option>
                                                            <option>Client 3</option>
                                                            <option>Clientv 4</option>
                                                            <option>Clientv 5</option>
                                                        </Form.Control>
                                                    </Form.Group>

                                                    <Form.Group>
                                                        <Form.Label>Request Message</Form.Label>
                                                        <Form.Control as="textarea" name="message" rows={3} id="message" />
                                                    </Form.Group>

                                                    <Button variant="primary" type="submit" id="button" value="Send" onClick={sendEmail}>
                                                        Send
                                                    </Button>
                                                </Form>
                                            </Modal.Body>
                                        </Modal>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12}>
                            <Datatable columns={columns} data={data} />
                        </Col>
                    </Row>
                </div>
            </div>
        </div>

    )
}

export default Testimonials
