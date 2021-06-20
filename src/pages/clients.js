import React, {useEffect, useMemo, useState} from 'react';
import moment from 'moment'
import PageHeader from "../components/PageHeader";
import Datatable from "../components/Datatable";
import {Button, Card, Col, Container, Form, Modal, Row} from "react-bootstrap";
import "./clients.css";
export default function clients(){
const columns = [
  { Header: 'Client Name', accessor: 'project'},
  { Header: 'Organization', accessor: 'client'},
  { Header: 'Contact No', accessor: 'task'},
  { Header: 'Email', accessor: 'startAt'},
  { Header: 'Action', accessor: 'row',
  }
];

var data = [{ "when": "2 minutes ago",
              "who": "Jill Dupre",
              "description": "Created new account"
            },
            {
              "when": "1 hour ago",
              "who": "Lose White",
              "description": "Added fist chapter"
            },
            {
              "when": "2 hours ago",
              "who": "Jordan Whash",
              "description": "Created new account"
            }];

return (
  <div>
      <PageHeader title="Clients" subtitle=""/>
      <Row className="justify-content-center">
          <Col md={5}>
              <Button className = "clients" type="button" align="right" onclick="handleNewClient" >Add New</Button>
          </Col>
      </Row>
      
      <Datatable columns={columns} data={data} />
  </div>
)
}