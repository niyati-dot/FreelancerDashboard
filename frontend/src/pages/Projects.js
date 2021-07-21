import React from 'react';
import { useState, useEffect } from 'react';
import PageHeader from "../components/PageHeader";
import AddProject from './AddProject';
import Datatable from "../components/Datatable";
import '../style.scss';
import { Button, Card, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { Redirect, useHistory } from 'react-router-dom';
import "./Projects.scss";
import projectsServices from '../services/projectsServices.js'

export default function Projects() {

    const columns = [
        { Header: 'Project Title', accessor: 'title' },
        { Header: 'Description', accessor: 'description' },
        { Header: 'Client Name', accessor: 'client' },
        { Header: 'Status', accessor: 'status' },
        {
            Header: 'Actions', accessor: 'row',
            Cell: ({ row }) => (<div className="data-table-button"><a title="Edit Project" onClick={() => editProject(row.id)} className="secondary-button">Edit</a><a title="Delete Project" onClick={() => { deleteTask(row) }} className="delete-button">Delete</a></div>)
        }
    ];

    const [data, setData] = useState([]);
    useEffect(() => {
        projectsServices.list().then(res => setData(res.data));
    },[]);

    const [project, setProject] = useState({
        title: "",
        client: "",
        description: "",
        rate: "",
        invoice: "",
        status: ""
    });


    const deleteTask = (project) => {
        if (window.confirm("Are you sure?")) {
            let newData = [...data];
            newData.splice(project.index, 1);
            console.log(newData);
            setData(newData);
        }
    };

    const [checkForm, setCheckForm] = useState(true);

    const validate = () => {
        setCheckForm(false);
    }

    const history = useHistory();

    async function editProject(id) {
        let url = "/projects/edit/" + id;
        history.push(url);
    }

    return (
        <div className="page-container projects-container">
            <div className="page-header-container">
                <PageHeader title="Projects" />
            </div>
            <div className="page-content-container">
            <div className="page-content">

                <Row className="button-container">
                    <Col>
                        <a href="/projects/add" title="Add Project" className="primary-button">Add Project</a>
                    </Col>
                </Row>
                <Row className="data-table-container">
                    <Col>
                        <Datatable columns={columns} data={data} />
                    </Col>
                </Row>
                </div>
            </div>
        </div>
    )
}