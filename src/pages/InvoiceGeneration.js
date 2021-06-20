import React, { Component } from 'react';
import PageHeader from "../components/PageHeader";
import Datatable from "../components/Datatable";
import { withRouter } from 'react-router-dom';
import "./InvoiceGeneration.scss";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export class InvoiceGeneration extends Component {

    constructor(props) {
        super(props)

        this.state = {
            client: "",
            clientError: "",
            startDate: "",
            startDateError: "",
            endDate: "",
            endDateError: "",
            hourlyRate: "",
            hourlyRateError: "",
            project: "",
            projectError: ""
        }

        this.columns = [
            { Header: 'Description', accessor: 'description' },
            { Header: 'Time (hours)', accessor: 'hours' },
            { Header: 'Total', accessor: 'total' }
        ];

        this.dummyData = [];
    }

    setDummyData() {
        this.dummyData = [
            {
                description: 'Dashboard',
                hours: 5,
                total: this.state.hourlyRate * 5
            },
            {
                description: 'Clients',
                hours: 2,
                total: this.state.hourlyRate * 2
            },
            {
                description: 'Projects',
                hours: 3,
                total: this.state.hourlyRate * 3
            },
            {
                description: 'Invoices',
                hours: 4,
                total: this.state.hourlyRate * 4
            },
            {
                description: 'Invoice Generation',
                hours: 0.5,
                total: this.state.hourlyRate * 0.5
            }
        ]
    }

    onValueChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    validateClient = (event) => {
        let isValid = true;
        if (!this.state.client) {
            this.setState({ clientError: "Client is required" })
            isValid = false;
        }
        return isValid;
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
        if (!this.validateClient()) {
            isValid = false;
        }
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
        if (this.validateForm()) {
            this.setDummyData();
        }
    }

    render() {
        return (
            <div className="page-container">
                <div className="page-header-container">
                    <PageHeader title="Invoice Geneation" subtitle="" />
                </div>
                <div className="page-content-container">
                    <div className="page-content">
                        <Row>
                            <Col>
                                <Form>
                                    <Row>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label className="required">Client</Form.Label>
                                                <Form.Control as="select" name="client" value={this.state.client} onChange={this.onValueChange}
                                                    onBlur={this.validateClient}
                                                    isInvalid={this.state.clientError}>
                                                    <option>Select Client</option>
                                                    <option value="1">Freelancer dashboard</option>
                                                    <option value="2">SIS</option>
                                                    <option value="3">VM</option>
                                                </Form.Control>
                                                <Form.Control.Feedback type="invalid">
                                                    {this.state.clientError}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label className="required">Project</Form.Label>
                                                <Form.Control as="select" name="project" value={this.state.project} onChange={this.onValueChange}
                                                    onBlur={this.validateProject}
                                                    isInvalid={this.state.projectError}>
                                                    <option>Select Project</option>
                                                    <option value="1">Freelancer dashboard</option>
                                                    <option value="2">SIS</option>
                                                    <option value="3">VM</option>
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
                                                    <Form.Control type="date" className="start-date" name="startDate" placeholder="Start Date" value={this.state.startDate} onChange={this.onValueChange}
                                                        onBlur={this.validateDate}
                                                        isInvalid={this.state.startDateError} />


                                                    <Form.Control type="date" name="endDate" placeholder="End Date" value={this.state.endDate} onChange={this.onValueChange}
                                                        onBlur={this.validateDate}
                                                        isInvalid={this.state.endDateError} />

                                                </div>
                                                <div>
                                                    <Form.Control.Feedback type="invalid">
                                                        {this.state.startDateError}
                                                    </Form.Control.Feedback>
                                                    <Form.Control.Feedback type="invalid">
                                                        {this.state.endDateError}
                                                    </Form.Control.Feedback>
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
                                    <Row className="generate-button-container">
                                        <Button className="primary-button" onClick={this.generateInvoice}>
                                            Generate Invoice
                                        </Button>
                                    </Row>
                                </Form>
                            </Col>
                        </Row>
                        <Row className="data-table-container">
                            <Col>
                                <Datatable columns={this.columns} data={this.dummyData} allowCSV="false" allowSearch="false"/>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(InvoiceGeneration);