import React from 'react';
import { useState, useEffect } from 'react';
import PageHeader from "../components/PageHeader";
import { Modal, Form, Button } from 'react-bootstrap';
import Datatable from '../components/Datatable';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';




const Testimonials = () => {

    const columns = [
        { Header: '#', accessor: 'no'},
        { Header: 'Project', accessor: 'project'},
        { Header: 'Status', accessor: 'status'},
        { Header: 'Requested on', accessor: 'requestedOn'},
        { Header: 'Actions', accessor: 'row',
            Cell: ({row}) => (
                <div className="row">
                    <div className="col-md-3">
                        <a href="#">Re-Request</a>
                    </div>
                    
                    <div className="col-md-3">
                        <a href="#">Delete</a>
                    </div>
                </div>
            )}
    ];

    var mailParams = {
        freelancerName: 'Freelancer Deep',
        clientMail: 'deepatel1607@gmail.com',
        clientName: 'Client Deep',
        freelancerMail: 'dee16798p@gmail.com',
        message: 'Accepted !!'
    };

    function sendEmail(e) {
        e.preventDefault();

        emailjs.send('testimonial_request', 'template_fmwc5oo', mailParams, 'user_INB1ILGAt4GVje2eeyj2V')
        .then(function(response) {
            alert("Email Sent");
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            alert("Error: "+error);
            console.log('FAILED...', error);
        });
      }

    const [data,setData] = useState([]);
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
    },[]);

    const [testimonial, setTestimonial] = useState({
        no: "",
        project: "",
        client: "",
        status: ""
    });


    const deleteTask = (task) => {
        if(window.confirm("Are you sure?")){
            let newData = [...data];
            newData.splice(testimonial.index, 1);
            console.log(newData);
            setData(newData);
        }
    };


    const [lgShow, setLgShow] = useState(false);

    return (
        <div>
            <PageHeader title="Testimonials"/>

            <div className="row">
                <div className="col-md-10">
                </div>

                <div className="col-md-2">
                    <div className="row">
                        <div className="col-md-5"></div>
                        <div className="col-md-7">
                            <button className="btn btn-primary" onClick={() => setLgShow(true)}> Request New</button>
                            
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
                                    <Form >
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
                                            <Form.Control as="textarea" name="message" rows={3} />
                                        </Form.Group>

                                        <Button variant="primary" type="submit" onSubmit={sendEmail}>
                                            Send
                                        </Button>                                
                                    </Form>
                                </Modal.Body>
                            </Modal>

                        </div>
                    </div>
                </div>
            </div>
            
            <br/>

            <br />

            <div className="row">

                <div className="col-md-12">
                    <Datatable columns={columns} data={data} />
                </div>

            </div>
        </div>

    )
}

export default Testimonials
