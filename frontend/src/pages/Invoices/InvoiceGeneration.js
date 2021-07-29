
/**
 * Author: Tejaswi Chaudhary.
 * Created On: 2021-06-07
 * Invoice Generation component.
 */
import React, { PureComponent } from 'react';
import PageHeader from "../../components/PageHeader";
import Datatable from "../../components/Datatable";
import { withRouter } from 'react-router-dom';
import "../../styles/InvoiceGeneration.scss";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import invoiceServices from "../../services/invoiceServices";
import jsPDF from 'jspdf'
import Moment from 'moment';
import emailjs from 'emailjs-com';

export class InvoiceGeneration extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            projectId: props && props.history && props.history.location&&props.history.location.state &&props.history.location.state.state?props.history.location.state.state:0,
            readonly: props && props.history && props.history.location&&props.history.location.state &&props.history.location.state.state? true:false,
            user: localStorage.getItem("user_id"),
            dueDateError: "",
            startAt:"",
            startAtError:"",
            endDate: "",
            endDateError: "",
            hourlyRate: "",
            hourlyRateError: "",
            project: "",
            projectError: "",
            client:"",
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
            invoiceDetails:[],
            generate :false,
            save :false

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

    pageContent(){
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
                    this.setState({invoiceNumber:response.data._id})
                    this.setState({paymentStatus:response.data.paymentStatus})
                    this.setState({startAt:response.data.startDate})
                    this.setState({endAt:response.data.taskendDate})
                    let invoiceDetails=[]
                    response.data.tags.forEach(row => {
                                          
                        let data = {} 
                        data.id = row.tagId;                      
                        data.description = row.description
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
            invoiceServices.getAllProject(this.state).then((response) => {
            if (response.status == 200) {
                this.setState({ projects: response.data})          
            }
        }).catch((error) => {
            console.log(error)
        })
        }
        
    }
    componentDidMount() {
        this.pageContent()
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
        
        if (!this.validatestartDate()) {
            isValid = false;
        }
        if (!this.validateEndDate()) {
            isValid = false;
        }
        if (!this.validateDueDate()) {
            isValid = false;
        }
        return isValid;
    }

    validateDueDate = (event) => {
        let isValid = true;
        if (this.state.dueDate) {
           
            const selectedDate = new Date(this.state.dueDate)
            const endDate = new Date(this.state.endDate)
            const today = new Date()
            if (selectedDate <today) {
                this.setState({ dueDateError: "Due Date cannot be past date or Generated Date" })
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
    validatestartDate = (event) => {
        let isValid = true;
        if (this.state.startAt) {
           
            const selectedDate = new Date(this.state.startAt)
            const endDate = new Date(this.state.endDate)
            const today = new Date()
            if (selectedDate > today) {
                this.setState({ startAtError: "Start Date cannot be furture datee" })
                isValid = false;
            }else if(endDate < selectedDate) {
                this.setState({ startAtError: "Start Date must be less than End date" })
                isValid = false;
            }
            else {
                this.setState({ startAtError: "" })
            }
        } else {
            this.setState({ startAtError: "Start Date is required" })
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
                      
                        var seconds = Math.round(((enddate) - (startdate))/1000).toFixed(3);
                        
                        var minutes = Math.round(seconds/60).toFixed(3);
                        var hour = Math.round(minutes/60).toFixed(3);
                        if(hour != "NaN" && hour) {
                            data.id = row._id;
                            data.description = row.task
                            data.hours = hour
                            data.total = this.state.hourlyRate * hour
                            totalCost = totalCost + data.total
                            invoiceDetails.push(data)
                        }
                  
                    })
                    //store tags, hours worked on that tags and total cost for performing that task
                    if(invoiceDetails.length !=0 ){
                        this.setState({invoiceDetails: this.state.invoiceDetails.concat(invoiceDetails),generate:true})
                        this.setState({totalcost:totalCost})
                          
                    }
                    if(this.state.invoiceDetails.length == 0){
                        alert("No task are pending to generate invoice. Please select again.")                   
                    }
                
                }
            }).catch((error) => {
                console.log(error)
            })
            
        }
        
        
    }
    
    //this function store generated invoices in database
    saveInvoice =(event)=>{
        if(this.state.generate){
            if(this.validateForm()){
            
                invoiceServices.addInvoice(this.state).then((response) =>{
                    console.log(response)
                    if (response.status == 200){
                        console.log(response)
                        this.setState({save:true})
                        alert("Ïnvoice Added")
                    }else if(response.status == 400){
                        alert("Invoice is already generated")
                    }
                }).catch((error) => {
                    console.log(error)
                })
            }
        }else{
            alert("Invoice is not generated. Please generate Invoice first.")
        }
    }
    downloadInvoice =(event)=>{
        if(this.state.save){
            var client =""
            var project = ""
            var doc = new jsPDF('p','pt');
            this.state.projects.forEach(result =>{
                if(result._id == this.state.project){
                    client = result.client
                    project=result.title
                }
                
            })
            const date = Moment(Date.now()).format('YYYY-MM-DD')
            doc.text(250,20,"Invoice")
            doc.text(20,50,"Project Name :"+project)
            doc.text(20,70,"Client Name :"+client)
            doc.text(20,90,"From Date :"+this.state.startAt)
            doc.text(200,90,"To date :"+this.state.endDate)
            doc.text(20,110,"Invoice Genrated :"+date)
            doc.text(20,130,"Payment Due Date :"+this.state.dueDate)
            doc.text(20,150,"Hourly Rate :"+this.state.hourlyRate+ "CAD")
            doc.text(20,170,"Total Amount :"+this.state.totalcost+ "CAD")
            doc.text(20,190,"  ")
            doc.text(20,210,"Task details")
            var i = 230
            this.state.invoiceDetails.forEach(result =>{
                
                doc.text(20,i,"Task :"+result.description)
                i = i+20
                doc.text(20,i,"Hours :"+result.hours)
                i = i+20
                doc.text(20,i,"Total :"+result.total)
                i = i+20
                doc.text(20,i,"  ")
                i = i+20

            })
            doc.setFont('normal')
            doc.save("generated.pdf")
       
        }else{
            alert("Please save Invoice before downloading")
        }
        
    }

    sendemail =(e) =>{
        var fromEmail = ""
        var freelancerName = ""
        var clientName=""
        var toEmail = ""
        var projectNAme= ""
        const date = Moment(Date.now()).format('YYYY-MM-DD')
        this.state.projects.forEach(result =>{
            if(result._id == this.state.project){
                projectNAme=result.title
            }
            
        })
        
        invoiceServices.getUserEmail(this.state).then((response) =>{
            var freelancerdata = response.data[0]
            fromEmail = freelancerdata.Email
            freelancerName = freelancerdata.Name
            invoiceServices.getClentEmail(this.state).then(result =>{
                var clientdata = result.data[0]
                toEmail = clientdata.Email
                clientName=clientdata.ClientName
                
            })
            
        })
        var mailParams = {
            //Mail Sender Details
            from_name: freelancerName,
            from_mail: fromEmail,
         
            //Mail Reciver DetailstoEmail
            to_name: clientName,
            to_mail: "chaudharytejaswi17@gmail.com",

            //Attachment Messages
            message: "Hello \nPlease find attached below invoice \nProject Name  :"+projectNAme+"\nFrom Date  :"+this.state.startAt+
            "\nTo Date  :"+this.state.endDate+"\nDue Date  :"+this.state.dueDate+"\nGenerated Date  :"+date+"\nHourly Rate  :"+this.state.hourlyRate+"\nTotal :"+this.state.totalcost
            
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

    //called when component is called in read-only mode. This function redirect to invoicemanagement page
    closeInvoice = (e) =>{
        this.props.history.push('/invoices')
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
                                                            <div>From date:{Moment(this.state.startAt).format('YYYY-MM-DD HH:MM:SS')}</div>
                                                            <div>To date:{Moment(this.state.endAt).format('YYYY-MM-DD HH:MM:SS')}</div>
                                                            <div>Invoice Genrated : {Moment(this.state.generatedDate).format('YYYY-MM-DD HH:MM:SS')}</div>
                                                            <div>Payment Due Date :{Moment(this.state.dueDate).format('YYYY-MM-DD HH:MM:SS')}</div>
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
                                                                <Form.Label className="required">Start Date</Form.Label>
                                                            </div>
                                                            <Form.Control type="date" className="start-date" name="startAt" placeholder="start Date" value={this.state.startAt} onChange={this.onValueChange}
                                                                onBlur={this.validateDate}
                                                                isInvalid={this.state.startAtError} />
                                                            <Form.Control.Feedback type="invalid">
                                                                {this.state.startAtError}
                                                            </Form.Control.Feedback>
                                                        </div>
                                                        <div className="end-date-control">
                                                            <div>
                                                                <Form.Label className="required">End Date</Form.Label>
                                                            </div>
                                                            <Form.Control type="date" name="endDate" placeholder="End Date" value={this.state.endDate} onChange={this.onValueChange}
                                                                onBlur={this.validateDate}
                                                                isInvalid={this.state.endDateError} />
                                                            <Form.Control.Feedback type="invalid">
                                                                {this.state.endDateError}
                                                            </Form.Control.Feedback>
                                                        </div>
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
                                        (
                                        <div>
                                        {!this.state.save?(
                                            <Row className="generate-button-container">
                                            <Button className="primary-button" onClick={this.generateInvoice}>
                                                Generate Invoice
                                            </Button>
                                            <Button className="secondary-button" onClick={this.saveInvoice}>
                                                Save
                                            </Button>
                                            </Row>
                                        
                                        ):(
                                            <div>
                                            <Row className="generate-button-container">
                                            <Button className="secondary-button" onClick={this.downloadInvoice}>
                                                Download
                                            </Button>
                                            <Button className="secondary-button" onClick={this.sendemail}>
                                                Send
                                            </Button>
                                            </Row>
                                            </div>
                                        )}
                                        </div>
                                        )}
                                        
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