import React from 'react';
import PageHeader from "../components/PageHeader";
import Datatable from "../components/Datatable";
import {
  withRouter
} from "react-router-dom";
import { Button, Col, Row } from "react-bootstrap";
import "./Clients.scss";
import './AddClient'
import { Component } from "react";
import axios from 'axios';

export class Clients extends Component {
  //constructor for props
  constructor(props) {
    super(props);
    this.state = {
      data : [],
      editdata: []
    }
    this.handleNewClient = this.handleNewClient.bind(this);

    this.columns = [
      { Header: 'Client Name', accessor: 'ClientName' },
      { Header: 'Organization', accessor: 'organization' },
      { Header: 'Contact No', accessor: 'ContactNo' },
      { Header: 'Email', accessor: 'Emailid' },
      {
        Header: 'Action', accessor: 'row',
        Cell: ({ row }) => (
          <div className="generate-button-container">
            <Button className="secondary-button" align="right" onClick={ () => this.viewDetails(row)} >View</Button>
            <Button className="secondary-button" align="right"  onClick={ () => this.editDetails(row)} >Edit</Button>
            <Button className="delete-button" align="right"  onClick= {() => this.deleteDetails(row)} >Delete</Button>
          </div>
        )
      }];
      
  }

  componentDidMount() {

    axios.get('http://localhost:3000/clientsRoutes/getAll').then((response) => {
        if (response.status == 200) {
            console.log(response.data)
            this.setData(response.data);
            let invoiceDetails = [];
            response.data.forEach(element => {
              let row = {}
              row.ClientName = element.ClientName;
              row.Organization = element.Organization;
              row.ContactNo = element.ContactNo;
              row.Emailid = element.Emailid;
              invoiceDetails.push(row)
            });
            this.setState({
              data: invoiceDetails
            })
        }
    }).catch((error) => {
        console.log("Eroor")
    })
  }


  viewDetails = (row) => {
    axios.post('http://localhost:3000/clientsRoutes/delete', row.original).then((response) => {
        alert("Details Successfully Saved!!");
    }).catch((error) => {
        console.log("Eroor")
    })
  }

  editDetails = (row) => {
    axios.post('http://localhost:3000/clientsRoutes/viewOne', row.original).then((response) => {                                                                                                           
        console.log(editdata);
        this.props.history.push({ pathname: '/EditClient' }, {
          state: response.data
        })
        alert("Details Successfully Saved!!");
    }).catch((error) => {
        console.log("Eroor")
    })
    this.props.history.push({ pathname: '/Editclient' });
  };

  deleteDetails = (row) => {
    axios.post('http://localhost:3000/clientsRoutes/delete', row.original).then((response) => {
        alert("Details Successfully Saved!!");
    }).catch((error) => {
        console.log("Eroor")
    })
  }
  handleNewClient = (e) => {
    e.preventDefault();
    this.props.history.push({ pathname: '/Addclient' });
  };

  render() {
    return (
      <div>
        <div className="page-container clients-container">
          <div className="page-header-container">
            <PageHeader title="Clients" subtitle="" />
          </div>
          <div className="page-content-container">
            <div className="page-content">
              <Row className="button-container">
                <Col>
                  <Button className="primary-button" type="button" align="right" onClick={this.handleNewClient} >Add New</Button>
                </Col>
              </Row>
              <Row className="data-table-container">
                <Col>
                  <Datatable columns={this.columns} data={this.state.data} />
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Clients);
