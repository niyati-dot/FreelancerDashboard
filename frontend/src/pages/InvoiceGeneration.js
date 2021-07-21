import React, { Component } from 'react';
import PageHeader from "../components/PageHeader";
import Datatable from "../components/Datatable";
import { withRouter } from 'react-router-dom';
import "./InvoiceGeneration.scss";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios'

var rn = require('random-number');
var options = {
    min: 10000,
    integer: true
}

export class InvoiceGeneration extends Component {

    constructor(props) {
        super(props)

        this.state = {
            startDate: "",
            startDateError: "",
            endDate: "",
            endDateError: "",
            hourlyRate: "",
            hourlyRateError: "",
            project: "",
            projectError: "",
            projects: [],
            tags:[],
            invoiceDetails:[]
        }


        this.columns = [
            { Header: 'Description', accessor: 'description' },
            { Header: 'Time (hours)', accessor: 'hours' },
            { Header: 'Total', accessor: 'total' }
        ];

        this.dummyData = [];
    }

    componentDidMount() {
        axios.get('http://localhost:3000/getProject/getproject').then((response) => {
            if (response.status == 200) {
                this.setState({ projects: response.data })
            }
        }).catch((error) => {
            console.log("Eroor")
        })
    }

    setDummyData() {
        console.log(this.state.invoiceDetails)
        this.state.invoiceDetails.forEach(result =>
            console.log(result)
        )
        console.log("dummy2",this.dummyData)
    }

    onValueChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    validateProject = (event) => {
        let isValid = true;
        if (!this.state.project) {
            this.setState({ projectError: "Project is required" })
            isValid = false;
        }
        return isValid;
    }

    validateDate = (event) => {
        let isValid = true;
        if (!this.validateStartDate()) {
            isValid = false;
        }
        if (!this.validateEndDate()) {
            isValid = false;
        }
        return isValid;
    }

    validateStartDate = (event) => {
        let isValid = true;
        if (this.state.startDate) {
            const today = new Date()
            const selectedDate = new Date(this.state.startDate)
            if (selectedDate > today) {
                this.setState({ startDateError: "Start Date cannot be future date" })
                isValid = false;
            } else {
                this.setState({ startDateError: "" })
            }
        } else {
            this.setState({ startDateError: "Start Date is required" })
            isValid = false;
        }
        return isValid;
    }

    validateEndDate = (event) => {
        let isValid = true;
        const startDate = new Date(this.state.startDate)
        const endDate = new Date(this.state.endDate)
        if (startDate && endDate) {
            if (startDate > endDate) {
                this.setState({ endDateError: "End Date cannot be less than start date" })
                isValid = false;
            } else {
                this.setState({ endDateError: "" })
            }
        } else {
            this.setState({ endDateError: "End date is required" })
            isValid = false;
        }
        return isValid;
    }

    validateHourlyRate = (event) => {
        let isValid = true;
        if (!this.state.hourlyRate) {
            this.setState({ hourlyRateError: "Hourly Rate is required" })
            isValid = false;
        }
        return isValid;
    }

    validateForm = (event) => {
        let isValid = true

        if (!this.validateProject()) {
            isValid = false;
        }
        if (!this.validateDate()) {
            isValid = false;
        }
        if (!this.validateHourlyRate()) {
            isValid = false;
        }
        return isValid;
    }

    generateInvoice = (event) => {
        event.preventDefault();
        if(this.validateForm()){
            let url = 'http://localhost:3000/getProject/tags/'+this.state.project
            axios.get(url).then((response) => {
                if (response.status == 200) {
                    this.setState({ tags: response.data })
                    {this.state.tags.map(row => {
                        var startdate = new Date(row.startAt);
                        
                        var enddate = new Date(row.endAt);
                      
                        var seconds = Math.floor(((enddate) - (startdate))/1000)
                        
                        var minutes = Math.floor(seconds/60)
                        var hour = Math.floor(minutes/60)
                       
                        var data = {
                            description:row.task,
                            hours:hour,
                            total: this.state.hourlyRate *hour
                        }
                        this.state.invoiceDetails.push(data)
                    })}
                  

                }
            }).catch((error) => {
                console.log("Eroor")
            })
            this.setDummyData();
        }
        
    }

    render() {
        return (
            <div className="page-container invoice-generation-container">
                <div className="page-header-container">
                    <PageHeader title="Invoice Generation" subtitle="" />
                </div>
                <div className="page-content-container">
                    <div className="page-content">
                        <Row className="invoice-generation-content">
                            <Col>
                                <Form>
                                    <div className="generate-forms">
                                        <Row>
                                            <Col>
                                                <Form.Group>
                                                    <Form.Label className="required">Project</Form.Label>
                                                    <Form.Control as="select" name="project" value={this.state.project} onChange={this.onValueChange}
                                                        onBlur={this.validateProject}
                                                        isInvalid={this.state.projectError}>
                                                    <option>Select Project</option>
                                                    {this.state.projects.map(onlineUsersRow => (
                                                        <option value={onlineUsersRow.name}>{onlineUsersRow.name}</option>
                                                    ))}
                                                    </Form.Control>
                                                    <Form.Control.Feedback type="invalid">
                                                        {this.state.projectError}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group>
                                                    <div>
                                                        <Form.Label className="required">Invoice Duration</Form.Label>
                                                    </div>
                                                    <div className="inline-date-control">
                                                        <div className="start-date-control">
                                                            <Form.Control type="date" className="start-date" name="startDate" placeholder="Start Date" value={this.state.startDate} onChange={this.onValueChange}
                                                                onBlur={this.validateDate}
                                                                isInvalid={this.state.startDateError} />
                                                            <Form.Control.Feedback type="invalid">
                                                                {this.state.startDateError}
                                                            </Form.Control.Feedback>
                                                        </div>
                                                        <div className="end-date-control">
                                                            <Form.Control type="date" name="endDate" placeholder="End Date" value={this.state.endDate} onChange={this.onValueChange}
                                                                onBlur={this.validateDate}
                                                                isInvalid={this.state.endDateError} />
                                                            <Form.Control.Feedback type="invalid">
                                                                {this.state.endDateError}
                                                            </Form.Control.Feedback>
                                                        </div>
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group>
                                                    <Form.Label className="required">Hourly Rate</Form.Label>
                                                    <Form.Control type="number" name="hourlyRate" placeholder="Hourly Rate" value={this.state.hourlyRate} onChange={this.onValueChange}
                                                        onBlur={this.validateHourlyRate}
                                                        isInvalid={this.state.hourlyRateError} />
                                                    <Form.Control.Feedback type="invalid">
                                                        {this.state.hourlyRateError}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="generate-buttons">
                                        <Row className="generate-button-container">
                                            <Button className="primary-button" onClick={this.generateInvoice}>
                                                Generate Invoice
                                            </Button>
                                            <Button className="secondary-button">
                                                Save
                                            </Button>
                                            <Button className="secondary-button">
                                                Download
                                            </Button>
                                            <Button className="secondary-button">
                                                Send
                                            </Button>
                                        </Row>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                        <Row className="data-table-container">
                            <Col>
                                <Datatable columns={this.columns} data={this.dummyData} allowCSV="false" allowSearch="false" />
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(InvoiceGeneration);