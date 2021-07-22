/**
 * Author: Tejaswi Chaudhary.
 * Created On: 2021-06-07
 * Invoice Management component.
 */
import React,{Component} from 'react';
import PageHeader from "../components/PageHeader";
import {Button,Col,Row} from "react-bootstrap";
import Datatable from "../components/Datatable";
import { withRouter } from 'react-router-dom';
import "../styles/InvoiceManagement.scss";
import invoiceServices from "../services/invoiceServices";
export class InvoiceManagement extends Component{
    
    constructor(props) {
        super(props)
        this.state={
        checkbox : 'true',
        delete:'false',
        columns : [
            { Header: 'Invoice Number', accessor: 'invoicename'},
            { Header: 'Generated Date', accessor: 'generateddate'},
            { Header: 'Due Date', accessor: 'duedate'},
            { Header: 'Client Name', accessor: 'clientname'},
            { Header: 'Project Name', accessor: 'projectname'},
            { Header: 'Payment Status', accessor: 'paymentstatus'},
            { Header: 'Action', accessor: 'button1',
                Cell:({row}) =>  (
                <div>
                    <Button  className="secondary-button" onClick={() => this.editInvoice(row)}>Edit</Button>
                    <Button  className="secondary-button" onClick={() => this.viewInvoice(row)}>View</Button> 
                    <Button  className="delete-button" onClick={() => this.deleteInvoice(row)}>Delete</Button>
                </div>)},
        ],
        data:[]
        }
    }

    //fetch list of all the generated invoices
    getAllInvoices() {
        
        invoiceServices.getAllInvoices().then((response) => {
            if (response.status == 200) {
               let invoiceDetails = [];
               response.data.forEach(element => {
                            
                let row = {}
                row.invoicename = element.invId;
                row.generateddate = element.generatedDate;
                row.duedate = element.dueDate;
                row.clientname = element.clientName;
                row.projectname = element.projectName;
                row.paymentstatus = element.paymentStatus;
                
                invoiceDetails.push(row)
    
               });
               if(invoiceDetails.length !=0)
               this.setState({
                data: invoiceDetails
              })
           
            }
          }).catch((error) => {
                    console.log(error)
            })
    }
    
    componentDidMount() {
      this.getAllInvoices()
    }
    
    //Edit invoice
    editInvoice=(row)=>{
        this.props.history.push({ pathname:'/editinvoice' }, {
            state: row.original.invoicename
          })
    }
    //open InvoiceGeneration.js in read-only mode to view generated invoice details.
    viewInvoice=(row)=>{
       
        console.log("enterd");
        this.props.history.push({ pathname:'/invoice-generation' }, {
            state: row.original.invoicename
          })
    }

    //delete invoice
    deleteInvoice = (row) => {
        invoiceServices.deleteinvoice(row.original).then((response) => {
            if(response){
                this.setState({delete:'true'})
                alert("Invoice Deleted")
                this.getAllInvoices()
            }
        }).catch((error) => {
            console.log("Eroor")
       })
    }
   
render() {
    return (

    <div className="page-container-container">
        <div className="page-header-container">
           <PageHeader title="Invoice Management" subtitle="" />
        </div>
        <div className="page-content-container">
            <div className="page-content"></div>
            <Datatable columns={this.state.columns} data={this.state.data} allowCSV="false"/>
        </div>
    </div>
)
        }
}
export default withRouter(InvoiceManagement)