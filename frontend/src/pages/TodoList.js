import React, { useState }  from 'react'
import { withRouter } from "react-router";
import {Container,Col,Row,Button}  from 'react-bootstrap'
import { Card,CardBody,CardTitle} from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import PageHeader from "../components/PageHeader";
import "../styles/TodoList.scss";

export default function TodoList(){
    
        
         const incompletetask=[
            {
                id: 1,
                title: "I will cut vegetable",
            },
            {
                id: 2,
                title: "I will make batter from besan.I will make batter from besan.I will make batter from besan.I will make batter from besan.I will make batter from besan.I will make batter from besan",
            },
            {
                id: 3,
                title: "I will make batter from besan.I will make batter from besan.I will make batter from besan.I will make batter from besan.I will make batter from besan.I will make batter from besan",
            }
          ];

        const completetask=[
            {
                id: 3,
                title: "I am done with snacks",
            },
            {
                id: 2,
                title: "I will make batter from besan.I will make batter from besan.I will make batter from besan.I will make batter from besan.I will make batter from besan.I will make batter from besan",
            }
        ];
        
         // this.handleClick=this.handleClick.bind(this)
    
    const [modal, setModal] = useState(false);
    
    const toggle = () => setModal(!modal);

            return(
                <div className="page-container">
                    <div className="page-header-container">
                        <PageHeader title="Todo List" subtitle="" />
                    </div>
                    <div className="page-content-container">
                        <div className="page-content">
                            <Container>
                                <Row className="card-row">
                                    <Col>
                                    </Col>
                                    <Col className="newtask-col">
                                        <div className="alignment">
                                            <Button   onClick={toggle} className="primary-button">Add</Button>
                                        </div>
                                       
                                    </Col>
                                </Row>
                                <Row className="card-row">
                                    <Col className="card-col"> 
                                         <div>
                                            {incompletetask.map(incompletetaskRows => (
                                            <Card className="cards">
                                                <div className="card-col-intask">
                                                    <div className="checkbox-col">
                                                         <input type="checkbox" id="defaultUnchecked"></input>
                                                    </div>
                                                    <div className="text-col">
                                                        <CardBody>
                                                            <CardTitle>{incompletetaskRows.title}</CardTitle>
                                                        </CardBody>
                                                    </div>
                                                    <div className="button-col">
                                                        <Button  className="delete-button">Delete</Button>
                                                    </div>
                                                </div>
                                            </Card>
                                            ))}                              
                                         </div>
                                    </Col>
                                    <span className="vertical-break"></span>
                                    <Col className="card-col"> 
                                        <div>
                                        {completetask.map(completetaskRows => (
                                        <Card className="cards">
                                            <CardBody>
                                                <CardTitle className = "text-todo">{completetaskRows.title}</CardTitle>
                                            </CardBody>
                                        </Card>
                                        ))}                              
                                        </div>
                                    </Col>
                                </Row>
                           
                            <Modal size= "xl" isOpen={modal} toggle={toggle} className="modal">
                                <ModalHeader toggle={toggle} className="modal-header">Add Task</ModalHeader>
                                <ModalBody>
                                <input type="text" palceholder ="Add task" name="tasktag" />
                                </ModalBody>
                                <ModalFooter>
                                <Button color="primary" className="primary-button" onClick={toggle}>Save</Button>{' '}
                                </ModalFooter>
                            </Modal>
                            </Container>
                        </div>
                    </div>
                </div>
            )
}



























