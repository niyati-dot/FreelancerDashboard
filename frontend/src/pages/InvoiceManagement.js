import React,{Component} from 'react';
import PageHeader from "../components/PageHeader";
import {Button,Col,Row} from "react-bootstrap";
import Datatable from "../components/Datatable";
import { withRouter } from 'react-router-dom';
import "../components/DashboardNavbar.scss";
import "./InvoiceManagement.scss"
export class InvoiceManagement extends Component{
    
    constructor(props) {
        super(props)
        this.state={
        checkbox : 'false',
        columns : [
            { Header: 'Invoice Number', accessor: 'invoicename'},
            { Header: 'Generated Date', accessor: 'generateddate'},
            { Header: 'Due Date', accessor: 'duedate'},
            { Header: 'Client Name', accessor: 'clientname'},
            { Header: 'Project Name', accessor: 'projectname'},
            { Header: 'Payment Status', accessor: 'paymentstatus'},
            { Header: 'Action', accessor: 'button1',
<<<<<<< HEAD:src/pages/InvoiceManagement.js
                Cell: ({button1}) => (<div><Button  className="secondary-button">Edit</Button> | <Button  className="delete-button">Delete</Button></div>)},
=======
                Cell: ({button1}) => (<div><Button  className="secondary-button">Edit</Button><Button  className="delete-button">Delete</Button></div>)},
>>>>>>> e22009a81dd79ddbb4229deef6f3a2e905171e85:frontend/src/pages/InvoiceManagement.js
        ],

       data:[{    
        invoicename: "1EDJJHE",
        generateddate: "03-02-2021",
        duedate: "03-03-2021",
        clientname:"Bob Marker",
        projectname:"Project Management",
        paymentstatus:"Unpaid"
      },
      {
        invoicename: "2XFDSFW",
        generateddate: "03-02-2021",
        duedate: "03-03-2021",
        clientname:"Mark Velly",
        projectname:"Tic-Toe",
        paymentstatus:"Paid"
      },
      {
        invoicename: "3ECERCC",
        generateddate: "03-02-2021",
        duedate: "03-03-2021",
        clientname:"Lelly Vince",
        projectname:"Invoice Generator",
        paymentstatus:"Unpaid"
      },
      {
        invoicename: "4ERDFTH",
        generateddate: "03-02-2021",
        duedate: "03-03-2021",
        clientname:"Chrissy MAcdonalds",
        projectname:"Client Management",
        paymentstatus:"Unpaid"
      }]
        }
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
            <Row>
                <Col>
<<<<<<< HEAD:src/pages/InvoiceManagement.js
                <input className="text-style" type="text" placeholder="Filter Option" name="textforfiletr" />
=======
                <input  type="text" placeholder="Filter" name="textforfiletr" />
>>>>>>> e22009a81dd79ddbb4229deef6f3a2e905171e85:frontend/src/pages/InvoiceManagement.js
                </Col>
                
            </Row>
            <Datatable columns={this.state.columns} data={this.state.data} allowCSV="false" allowSearch="false"/>
        </div>
    </div>
)
        }
}
export default withRouter(InvoiceManagement)