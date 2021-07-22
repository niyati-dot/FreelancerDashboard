
/**
 * Author: Tejaswi Chaudhary.
 * Created On: 2021-06-07
 * Invoice Generation component.
 */
import React, { Component } from 'react';
import PageHeader from "../components/PageHeader";
import Datatable from "../components/Datatable";
import { withRouter } from 'react-router-dom';
import "../styles/InvoiceGeneration.scss";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import invoiceServices from "../services/invoiceServices";


export class InvoiceGeneration extends Component {

    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            
     
            projectId: props && props.history && props.history.location&&props.history.location.state &&props.history.location.state.state?props.history.location.state.state:0,
            readonly: props && props.history && props.history.location&&props.history.location.state &&props.history.location.state.state? true:false,
            dueDate: "",
            dueDateError: "",
            endDate: "",
            endDateError: "",
            hourlyRate: "",
            hourlyRateError: "",
            project: "",
            projectError: "",
            totalcost:0,
            projects: [],
            tags:[],
            generateDate :"",
            paymentStatus:"Unpaid",
            dueDate:"",
            clientName:"",
            invoiceNumber:"",
            Total:"",
            generatedDate:"",
            invoiceDetails:[]

        }


        this.columns = [
            { Header: 'Description', accessor: 'description' },
            { Header: 'Time (hours)', accessor: 'hours' },
            { Header: 'Total', accessor: 'total' }
        ];
    }
    /**
     * when page renders it will fetch all the invoices or invoice based on read condition
     * 
     * If this component is called from invoiceManagement.js, this page will open as read-only mode. 
     * in read-only mode, it will fetch generated invoice details based on the project id.
     * 
     * If this component is called from dahsboard, it will allow a user to generate invoice.
     */
    componentDidMount() {
        //executed when called in read-only mode
        if(this.state.readonly){
            invoiceServices.findInvoice(this.state).then((response) =>{
                console.log(response)
                if (response.status == 200){
                    this.setState({ project: response.data.projectName})
                    this.setState({clientName:response.data.clientName})
                    this.setState({dueDate: response.data.dueDate})
                    this.setState({generatedDate: response.data.generatedDate})
                    this.setState({hourlyRate:response.data.hourlyRate})
                    this.setState({Total:response.data.totalCost})
                    this.setState({invoiceNumber:response.data.invId})
                    this.setState({paymentStatus:response.data.paymentStatus})
                    let invoiceDetails=[]
                    response.data.tags.forEach(row => {
                                          
                        let data = {}                       
                        data.description = row.description;
                        data.hours = row.hours
                        data.total = row.total
                        invoiceDetails.push(data)                        
                    })
                    if(invoiceDetails.length !=0 ){
                        this.setState({invoiceDetails: this.state.invoiceDetails.concat(invoiceDetails)})
                        console.log(this.state.invoiceDetails)   
                    }
                
                } 
            }).catch((error) => {
                console.log(error)
            })
        }else{
            //Executed when called from dashbord page
            invoiceServices.getAllProject().then((response) => {
            if (response.status == 200) {
                this.setState({ projects: response.data })
            }
        }).catch((error) => {
            console.log("Eroor")
        })
        }
        
    }

    
    //On value change of a control, set it in state.
    onValueChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    //validate project field
    validateProject = (event) => {
        let isValid = true;
        if (!this.state.project) {
            this.setState({ projectError: "Project is required" })
            isValid = false;
        }
        return isValid;
    }
    //validate due date and project duration date
    validateDate = (event) => {
        let isValid = true;
        if (!this.validateDueDate()) {
            isValid = false;
        }
        if (!this.validateEndDate()) {
            isValid = false;
        }
        return isValid;
    }

    validateDueDate = (event) => {
        let isValid = true;
        if (this.state.dueDate) {
            const today = new Date()
            const selectedDate = new Date(this.state.dueDate)
            const endDate = new Date(this.state.endDate)
            if (selectedDate < today) {
                this.setState({ dueDateError: "Due Date cannot be past date" })
                isValid = false;
            }else if(endDate > selectedDate) {
                this.setState({ dueDateError: "Due Date must be greater than project duration date" })
                isValid = false;
            }
            else {
                this.setState({ dueDateError: "" })
            }
        } else {
            this.setState({ dueDateError: "Due Date is required" })
            isValid = false;
        }
        return isValid;
    }

    validateEndDate = (event) => {
        let isValid = true;
        const today = new Date()
        const dueDate = new Date(this.state.dueDate)
        const endDate = new Date(this.state.endDate)
        if (dueDate && endDate) {
            if (dueDate < endDate || today < endDate) {
                this.setState({ endDateError: "End Date cannot be greater than due date or current date" })
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

    //validate horly rate field
    validateHourlyRate = (event) => {
        let isValid = true;
        if (!this.state.hourlyRate) {
            this.setState({ hourlyRateError: "Hourly Rate is required" })
            isValid = false;
        }else if(this.state.hourlyRate < 1){
            this.setState({ hourlyRateError: "Hourly Rate must be a greater than 0" })
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

    //Generate invoice by fetching all the task from the timelog collection
    generateInvoice = (event) => {
        event.preventDefault();
        this.setState({invoiceDetails:[]})
        //invoice generation date
        this.setState({generateDate:Date.now()})
        if(this.validateForm()){
            invoiceServices.getTags(this.state).then((response) => {
                if (response.status == 200) {
                    console.log(response.data)
                    this.setState({ tags: response.data })
                    let invoiceDetails = []
                    let totalCost = 0
                    response.data.forEach(row => {
                                                
                        let data = {}
                        var startdate = new Date(row.startAt);
                        
                        var enddate = new Date(row.endAt);
                      
                        var seconds = Math.floor(((enddate) - (startdate))/1000)
                        
                        var minutes = Math.floor(seconds/60)
                        var hour = Math.floor(minutes/60)
                       
                        data.description = row.task;
                        data.hours = hour
                        data.total = this.state.hourlyRate * hour
                        totalCost = totalCost + data.total
                        invoiceDetails.push(data)
                        
                        
                    })
                    //store tags, hours worked on that tags and total cost for performing that task
                    if(invoiceDetails.length !=0 ){
                        this.setState({invoiceDetails: this.state.invoiceDetails.concat(invoiceDetails)})
                        this.setState({totalcost:totalCost})
                          
                    }
                
                }
            }).catch((error) => {
                console.log(error)
            })
            
        }
        
        
    }
    
    //this function store generated invoices in database
    saveInvoice =(event)=>{
        if(this.state.invoiceDetails.length == 0){
            this.generateInvoice()
        }
        if(this.validateForm()){
           
            invoiceServices.addInvoice(this.state).then((response) =>{
                if (response.status == 200){
                    console.log(response)
                    alert("Ïnvoice Added")
                } 
            }).catch((error) => {
                console.log(error)
            })
        }
    }
    //called when component is called in read-only mode. This function redirect to invoicemanagement page
    closeInvoice = (e) =>{
        this.props.history.push('/invoicemanagement')
    }
    render() {
        return (
            <div className="page-container invoice-generation-container">
                <div className="page-header-container">
                    {this.state.readonly ? (<PageHeader title="Invoice Details" subtitle="" />)
                    :(<PageHeader title="Invoice Generation" subtitle="" />)}
                </div>
                <div className="page-content-container">
                    <div className="page-content">
                        <Row className="invoice-generation-content">
                            <Col>
                                <Form>
                                    <div className="generate-forms">
                                        <Row>
                                            <Col>
                                            {this.state.readonly ? (
                                                        <span>
                                                            <div> Invoice Number :{this.state.invoiceNumber}</div>
                                                            <div>Project Name :  {this.state.project}</div>
                                                            <div>Client Name : {this.state.clientName}</div>
                                                            <div>Invoice Genrated : {this.state.generatedDate} </div>
                                                            <div>Payment Due Date : {this.state.dueDate} </div>
                                                            <div>Hourly Rate :{this.state.hourlyRate} CAD </div>
                                                            <div>Total Amount :{this.state.Total} CAD </div>
                                                            <div>Payment Status :{this.state.paymentStatus} </div>
                                                            <div> </div>
                                                        </span>
                                                        
                                                    ) : (
                                                <Form.Group>
                                                    <Form.Label className="required">Project</Form.Label>
                                                    <Form.Control as="select" name="project" value={this.state.project} onChange={this.onValueChange}
                                                        onBlur={this.validateProject}
                                                        isInvalid={this.state.projectError}>
                                                    <option>Select Project</option>
                                                    {this.state.projects.map(project => (
                                                        <option value={project._id}>{project.title}</option>
                                                    ))}
                                                    </Form.Control>
                                                    <Form.Control.Feedback type="invalid">
                                                        {this.state.projectError}
                                                    </Form.Control.Feedback>
                                                </Form.Group>)}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                
                                                    {this.state.readonly?(<div></div>):
                                                    (
                                                    <Form.Group>
                                                    
                                                    <div className="inline-date-control">
                                                        <div className="due-date-control">
                                                            <div>
                                                                <Form.Label className="required">Invoice Duedate</Form.Label>
                                                            </div>
                                                            <Form.Control type="date" className="start-date" name="dueDate" placeholder="Due Date" value={this.state.dueDate} onChange={this.onValueChange}
                                                                onBlur={this.validateDate}
                                                                isInvalid={this.state.dueDateError} />
                                                            <Form.Control.Feedback type="invalid">
                                                                {this.state.dueDateError}
                                                            </Form.Control.Feedback>
                                                        </div>
                                                        <div className="end-date-control">
                                                            <div>
                                                                <Form.Label className="required">Project Duration</Form.Label>
                                                            </div>
                                                            <Form.Control type="date" name="endDate" placeholder="End Date" value={this.state.endDate} onChange={this.onValueChange}
                                                                onBlur={this.validateDate}
                                                                isInvalid={this.state.endDateError} />
                                                            <Form.Control.Feedback type="invalid">
                                                                {this.state.endDateError}
                                                            </Form.Control.Feedback>
                                                        </div>
                                                    </div>
                                                    </Form.Group>)}
                                            </Col>
                                            <Col>
                                            {this.state.readonly?(<div></div>):(
                                                <Form.Group>
                                                <Form.Label className="required">Hourly Rate</Form.Label>
                                                <Form.Control type="number" name="hourlyRate" placeholder="Hourly Rate" value={this.state.hourlyRate} onChange={this.onValueChange}
                                                    onBlur={this.validateHourlyRate}
                                                    isInvalid={this.state.hourlyRateError} />
                                                <Form.Control.Feedback type="invalid">
                                                    {this.state.hourlyRateError}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            )} 
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="generate-buttons">
                                        
                                        {this.state.readonly?
                                        (<Button className="secondary-button" onClick={this.closeInvoice}>
                                        Close
                                        </Button>):
                                        (<Row className="generate-button-container">
                                            <Button className="primary-button" onClick={this.generateInvoice}>
                                                Generate Invoice
                                            </Button>
                                            <Button className="secondary-button" onClick={this.saveInvoice}>
                                                Save
                                            </Button>
                                            <Button className="secondary-button">
                                                Download
                                            </Button>
                                            <Button className="secondary-button">
                                                Send
                                            </Button>
                                        </Row>)}
                                        
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                        <Row className="data-table-container">
                            <Col>
                                <Datatable columns={this.columns} data={this.state.invoiceDetails} allowCSV="false" allowSearch="false" />
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(InvoiceGeneration);