import React,{Component} from 'react';
import PageHeader from "../components/PageHeader";
import {Button,Col,Row} from "react-bootstrap";
import Datatable from "../components/Datatable";
import { withRouter } from 'react-router-dom';
import "../components/DashboardNavbar.scss";
import "./InvoiceManagement.scss"
import axios from 'axios'

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

    getAllInvoices() {
        axios.get('http://localhost:3000/getProject/fetchinvoices').then((response) => {
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
    
    editInvoice=(row)=>{
        this.props.history.push({ pathname:'/editinvoice' }, {
            state: row.original.invoicename
          })
    }
    viewInvoice=(row)=>{
       
        console.log("enterd");
        this.props.history.push({ pathname:'/invoice-generation' }, {
            state: row.original.invoicename
          })
    }
    deleteInvoice = (row) => {
        console.log(row.original)
        axios.post('http://localhost:3000/getProject/deleteinvoice',row.original).then((response) => {
            if(response){
                this.setState({delete:'true'})
                alert("Invoice Deleted")
                this.getAllInvoices()
            }
        }).catch((error) => {
            console.log("Eroor")
       })
    }
    
    handleClick=(e)=>{
        this.setState({checkbox:'true'})
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