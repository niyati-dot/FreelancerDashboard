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

export class Clients extends Component {
  //constructor for props
  constructor(props) {
    super(props);
    this.state = {}
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
            <Button className="secondary-button" align="right">View</Button>
            <Button className="secondary-button" align="right">Edit</Button>
            <Button className="delete-button" align="right">Delete</Button>
          </div>
        )
      }];
    this.setData();
  }

  setData = () => {
    this.data = [{
      ClientName: "2 minutes ago",
      organization: "Jill Dupre",
      ContactNo: "Created new account",
      Emailid: "JillDupre@gmail.com"
    },
    {
      ClientName: "2 minutes ago",
      organization: "Jill Dupre",
      ContactNo: "Created new account",
      Emailid: "JillDupre@gmail.com"
    },
    {
      ClientName: "2 minutes ago",
      organization: "Jill Dupre",
      ContactNo: "Created new account",
      Emailid: "JillDupre@gmail.com"
    }];
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
                  <Datatable columns={this.columns} data={this.data} />
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