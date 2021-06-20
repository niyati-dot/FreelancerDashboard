import React, {useEffect, useMemo, useState} from 'react';
import moment from 'moment'
import PageHeader from "../components/PageHeader";
import Datatable from "../components/Datatable";
import {Button, Card, Col, Container, Form, Modal, Row} from "react-bootstrap";

export default function Timelogs(){
    const columns = [
        { Header: 'Project', accessor: 'project'},
        { Header: 'Client', accessor: 'client'},
        { Header: 'Task', accessor: 'task'},
        { Header: 'Start At', accessor: 'startAt'},
        { Header: 'End At', accessor: 'endAt'},
        { Header: 'Action', accessor: 'row',
            Cell: ({row}) => (<Button variant="danger" onClick={() => {deleteTask(row)}}>Delete</Button>)
        }
    ];

    const [data,setData] = useState([]);
    useEffect(() => {
        setData([
            {
                project: "Project I",
                client: "Giacomo Guilizzoni",
                task: "Wireframe",
                startAt: "5-06-2021 01:10:20",
                endAt: "5-06-2021 01:32:20"
            },
            {
                project: "Project H",
                client: "Marco Botton",
                task: "Registration",
                startAt: "1-06-2021 11:20:10",
                endAt: "1-06-2021 13:10:00"
            },
            {
                project: "Project G",
                client: "Mariah Guilizzoni",
                task: "Profile Management",
                startAt: "5-05-2021 04:22:00",
                endAt: "5-05-2021 05:42:00"
            },
            {
                project: "Project F",
                client: "Giacomo Guilizzoni",
                task: "PSD to HTML",
                startAt: "2-05-2021 03:00:00",
                endAt: "2-05-2021 08:00:00",
            },
            {
                project: "Project E",
                client: "Giacomo Guilizzoni",
                task: "Dashboard",
                startAt: "12-04-2021 09:00:00",
                endAt: "12-04-2021 12:00:00",
            },
            {
                project: "Project D",
                client: "Giacomo Guilizzoni",
                task: "Forgot Password",
                startAt: "10-01-2021 09:00:00",
                endAt: "10-01-2021 11:05:00"
            },
            {
                project: "Project H",
                client: "Marco Botton",
                task: "Registration",
                startAt: "1-06-2021 11:20:10",
                endAt: "1-06-2021 13:10:00"
            },
            {
                project: "Project G",
                client: "Mariah Guilizzoni",
                task: "Profile Management",
                startAt: "5-05-2021 04:22:00",
                endAt: "5-05-2021 05:42:00"
            },
            {
                project: "Project F",
                client: "Giacomo Guilizzoni",
                task: "PSD to HTML",
                startAt: "2-05-2021 03:00:00",
                endAt: "2-05-2021 08:00:00",
            },
            {
                project: "Project E",
                client: "Giacomo Guilizzoni",
                task: "Dashboard",
                startAt: "12-04-2021 09:00:00",
                endAt: "12-04-2021 12:00:00",
            },
            {
                project: "Project D",
                client: "Giacomo Guilizzoni",
                task: "Forgot Password",
                startAt: "10-01-2021 09:00:00",
                endAt: "10-01-2021 11:05:00"
            },
            {
                project: "Project H",
                client: "Marco Botton",
                task: "Registration",
                startAt: "1-06-2021 11:20:10",
                endAt: "1-06-2021 13:10:00"
            },
            {
                project: "Project G",
                client: "Mariah Guilizzoni",
                task: "Profile Management",
                startAt: "5-05-2021 04:22:00",
                endAt: "5-05-2021 05:42:00"
            },
            {
                project: "Project F",
                client: "Giacomo Guilizzoni",
                task: "PSD to HTML",
                startAt: "2-05-2021 03:00:00",
                endAt: "2-05-2021 08:00:00",
            },
            {
                project: "Project E",
                client: "Giacomo Guilizzoni",
                task: "Dashboard",
                startAt: "12-04-2021 09:00:00",
                endAt: "12-04-2021 12:00:00",
            },
            {
                project: "Project D",
                client: "Giacomo Guilizzoni",
                task: "Forgot Password",
                startAt: "10-01-2021 09:00:00",
                endAt: "10-01-2021 11:05:00"
            },
        ])
    },[]);

    const [timerState, setTimerState] = useState(0);
    const [timerStart, setTimerStart] = useState(Date.now());
    const [timerEnd, setTimerEnd] = useState(Date.now());
    const [timerString, setTimerString] = useState("00 : 00 : 00 : 00");
    const [timer, setTimer] = useState(0);
    useEffect(() => {
        let centiseconds = ("0" + (Math.floor(timer / 10) % 100)).slice(-2);
        let seconds = ("0" + (Math.floor(timer / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timer / 60000) % 60)).slice(-2);
        let hours = ("0" + Math.floor(timer / 3600000)).slice(-2);
        setTimerString(hours + " : " + minutes+ " : " + seconds+ " : " + centiseconds);
    },[timer]);
    const startTimer = () => {
        if(timerState === 0){
            setTimerStart(Date.now() - timer);
            setTimerState (
                setInterval(() => {
                    setTimer(Date.now() - timerStart)
                }, 10)
            );
        }
    };
    const stopTimer = () => {
        setTimerEnd(Date.now());
        clearInterval(timerState);
        setTimerState(0);
        setTimer(0);
    };

    const handleModalClose = () => setShowModal(false);
    const handleModalShow = () => setShowModal(true);

    const [task, setTask] = useState({
        project: "",
        client: "",
        task: "",
        startAt: "",
        endAt: ""
    });
    const [taskError, setTaskError] = useState({
        project: "",
        client: "",
        task: ""
    });
    const [showModal, setShowModal] = useState(false);
    const handleChange = (e) => {
        let newTask = {...task, [e.target.name]: e.target.value};
        setTask(newTask);
    };
    const isTaskValid = () => {
        let valid = true;
        setTaskError({
            project: "",
            client: "",
            task: ""
        });

        if(!task.project.length > 0){
            let newTaskError = {...taskError};
            newTaskError.project = "Project is required";
            setTaskError(newTaskError);
            valid = false;
        }

        if(!task.client.length > 0){
            let newTaskError = {...taskError};
            newTaskError.client = "Client is required";
            setTaskError(newTaskError);
            valid = false;
        }

        if(!task.task.length > 0){
            let newTaskError = {...taskError};
            newTaskError.task = "Task is required";
            setTaskError(newTaskError);
            valid = false;
        }
        return valid;
    };

    const startTask = (e) => {
        e.preventDefault();
        if(isTaskValid()){
            startTimer();
            task.startAt = moment(timerStart).format("DD-MM-YYYY HH:mm:ss");
            setData(data => [task, ...data]);
            handleModalClose();
        }
    };
    const stopTask = () => {
        stopTimer();
        let newData = [...data];
        newData[0].endAt = moment(timerEnd).format("DD-MM-YYYY HH:mm:ss");
        setData(newData);
        setTask({
            project: "",
            client: "",
            task: "",
            startAt: "",
            endAt: ""
        });
    };

    const deleteTask = (task) => {
        if(window.confirm("Are you sure?")){
            let newData = [...data];
            newData.splice(task.index, 1);
            console.log(newData);
            setData(newData);
        }
    };

    return (
        <div>
            <PageHeader title="Time logs" subtitle=""/>
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card>
                        <Card.Body className="text-center">
                            <Card.Title style={{fontSize:"2.5rem"}}>{timerString}</Card.Title>
                            {timer <= 0 &&
                            <Button variant="primary" onClick={handleModalShow}>Start</Button>
                            }
                            {timer > 0 &&
                            <>
                                <Card.Subtitle className="mb-2 text-muted">Task: {task.task}</Card.Subtitle>
                                <Button variant="danger" onClick={stopTask}>Stop</Button>
                            </>
                            }
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Modal show={showModal} onHide={handleModalClose}>
                <Form onSubmit={(e) => startTask(e)}>
                    <Modal.Header closeButton>
                        <Modal.Title>New Task</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="show-grid">
                        <Container>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Client</Form.Label>
                                        <Form.Control as="select" name="client"
                                                      onChange={(e) => handleChange(e)}
                                                      className={taskError.client.length > 0 ? "is-invalid" : ""}>
                                            <option value="">Select Client</option>
                                            <option value="Mark">Mark</option>
                                            <option value="Jacob">Jacob</option>
                                            <option value="Henry">Henry</option>
                                        </Form.Control>
                                        <Form.Text className="text-danger">{taskError.client}</Form.Text>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Project</Form.Label>
                                        <Form.Control as="select" name="project"
                                                      onChange={(e) => handleChange(e)}
                                                      className={taskError.project.length > 0 ? "is-invalid" : ""}>
                                            <option value="">Select Project</option>
                                            <option value="ProjectA">ProjectA</option>
                                            <option value="ProjectB">ProjectB</option>
                                            <option value="ProjectC">ProjectC</option>
                                        </Form.Control>
                                        <Form.Text className="text-danger">{taskError.project}</Form.Text>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Task</Form.Label>
                                        <Form.Control type="text" name="task" placeholder="Task Description..."
                                                      onChange={(e) => handleChange(e)}
                                                      className={taskError.task.length > 0 ? "is-invalid" : ""}/>
                                        <Form.Text className="text-danger">{taskError.task}</Form.Text>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" type="reset" onClick={handleModalClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Start
                        </Button>
                    </Modal.Footer>
                </Form>

            </Modal>
            <Datatable columns={columns} data={data} />
        </div>
    )
}


