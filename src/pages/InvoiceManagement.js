import React,{Component} from 'react';
import PageHeader from "../components/PageHeader";
import {Button,Col,Row} from "react-bootstrap";
import Datatable from "../components/Datatable";
import { withRouter } from 'react-router-dom';
import "../components/DashboardNavbar.scss";

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
            { Header: ' ', accessor: 'button1',
                Cell: ({button1}) => (<Button><span><i class="fas fa-edit"></i></span></Button>)},
            { Header: ' ', accessor: 'button2',
                Cell: ({button2}) => (<Button><span><i class="fas fa-trash"></i></span></Button>)}
        ],

       data:[{    
        invoicename: "1",
        generateddate: "03-02-2021",
        duedate: "03-03-2021",
        clientname:"DadADD Bob",
        projectname:"Invoice generator",
        paymentstatus:"Unpaid"
      },
      {
        invoicename: "2",
        generateddate: "03-02-2021",
        duedate: "03-03-2021",
        clientname:"DadADD Bob",
        projectname:"Invoice generator",
        paymentstatus:"Paid"
      },
      {
        invoicename: "3",
        generateddate: "03-02-2021",
        duedate: "03-03-2021",
        clientname:"DadADD Bob",
        projectname:"Invoice generator",
        paymentstatus:"Unpaid"
      },
      {
        invoicename: "4",
        generateddate: "03-02-2021",
        duedate: "03-03-2021",
        clientname:"DadADD Bob",
        projectname:"Invoice generator",
        paymentstatus:"Unpaid"
      }]
        }
    }
    handleClick=(e)=>{
        this.setState({checkbox:'true'})
    }

render() {
    return (

    <div className="page-container">
        <div className="page-header-container">
            <PageHeader title="Invoice Management" subtitle="" />
        </div>
        <div className="page-content-container">
            <div className="page-content"></div>
            <Button onclick={this.handleClick} className="filter__button">
                <span><i class="fas fa-filter">
                </i></span></Button>
                <Row>
                {this.state.checkbox ? (<Col md={{ span: 2 }}>
                    <select id="dropdown-basic">
                                        <option value="clientname">Cleint Name</option>
                                        <option value="paymentstatus">Payment Status</option>
                                        <option value="Project Name">Project Name</option>
                    </select> 
                </Col>) : (<div></div>)
                }</Row>
            <Datatable columns={this.state.columns} data={this.state.data} allowCSV="false" allowSearch="false"/>
        </div>
    </div>
)
        }
}
export default withRouter(InvoiceManagement)