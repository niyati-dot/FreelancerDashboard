import React, { Component } from 'react';
import PageHeader from "../components/PageHeader";
import Datatable from "../components/Datatable";
import { withRouter } from 'react-router-dom';
import "./EditInvoice.scss";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import invoiceServices from "../services/invoiceServices";

export class EditInvoice extends Component {

    constructor(props) {
        super(props)
        this.state={
            projectId: props && props.history && props.history.location&&props.history.location.state &&props.history.location.state.state?props.history.location.state.state:0,
            paymentstatus:"",
            invoiceNumber:"",
            projects:"",
            clientName:"",
            generatedDate:"",
            dueDate:"",
            hourlyRate:"",
            Total:"",
            paymentstatus:"",
            paymentPreStatus:"",
            taskendDate:""
            
        }}

        componentDidMount() {
          
            invoiceServices.findInvoice(this.state).then((response) =>{
               
                if (response.status == 200){
                    this.setState({project: response.data.projectName})
                    this.setState({clientName:response.data.clientName})
                    this.setState({generatedDate: response.data.generatedDate})
                    this.setState({Total:response.data.totalCost})
                    this.setState({invoiceNumber:response.data.invId})
                    this.setState({hourlyRate:response.data.hourlyRate})
                    this.setState({paymentPreStatus:response.data.paymentStatus})
                    this.setState({taskendDate:response.data.paymentStatus})
                } 
            }).catch((error) => {
                console.log(error)
            })
        }

        onValueChange = (event) => {
            this.setState({
                [event.target.name]: event.target.value
            });
        }
    
        validateDueDate = (event) => {
            let isValid = true;
            if (this.state.dueDate) {
                const today = new Date()
                const selectedDate = new Date(this.state.dueDate)
                if (selectedDate < today) {
                    this.setState({ dueDateError: "Due Date cannot be past date" })
                    isValid = false;
                }
                else {
                    this.setState({ dueDateError: "" })
                }
            } 
            return isValid;
        }
    
    
        validateForm = (event) => {
            let isValid = true
            if (!this.validateDueDate()) {
                isValid = false;
            }
           
            return isValid;
        }
        update = (e) =>{
            if(this.validateForm()){
                if(!this.state.paymentstatus && !this.state.dueDate){
                    alert("Please fill the field")
                }else{
                    
                    invoiceServices.updateInvoice(this.state).then((response) => {
                    if(response){
                        alert("Updated Successfully")
                        this.cancel()
                    }
                }).catch((error) => {
                     console.log(error)
                })
                
            }
        }   
        }
        
        cancel = (e) =>{
            this.props.history.push('/invoicemanagement')
        }
       
        render() {
            return (
                <div className="page-container edit-invoice-generation-container">
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
                                                    <span>
                                                        <div>Invoice Number :{this.state.invoiceNumber}</div>
                                                        <div>Project Name :  {this.state.projects}</div>
                                                        <div>Client Name : {this.state.clientName}</div>
                                                        <div>Invoice Genrated : {this.state.generatedDate} </div>
                                                        <div>Hourly Rate :{this.state.hourlyRate} CAD </div>
                                                        <div>Total Amount :{this.state.Total} CAD </div>
                                                        
                                                    </span>
                                                    <Form.Group>
                                                        <Form.Label className="required">Payment Status</Form.Label>
                                                        <Form.Control type="text" name="paymentstatus" value={this.state.paymentstatus} onChange={this.onValueChange}>
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
                                                        </div>
                                                    </Form.Group>
                                                </Col>
            
                                            </Row>
                                        </div>
                                    </Form>
                                </Col>
                            </Row>
                            <div className="generate-buttons">         
                                <Row className="generate-button-container">
                                    <Button className="primary-button" onClick={this.update}>
                                        Update Invoice
                                    </Button>
                                    <Button className="secondary-button" onClick={this.cancel}>
                                        Cancel
                                    </Button>
                                </Row> 
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
}
export default withRouter(EditInvoice)