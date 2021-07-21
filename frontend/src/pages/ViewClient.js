import React, { Component } from 'react';
import PageHeader from "../components/PageHeader";
import { withRouter } from 'react-router-dom';
import "./AddClient.scss";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {curl_init} from 'react';
import {curl_getinfo} from 'react';
import {CURLINFO_HTTP_CODE} from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

export class ViewClient extends Component {
 
    constructor(props) {
        super(props)

        this.state = {
            clientName: "",
            organizationName: "",
            contactNo: "",
            websiteName: "",
            emailId: "",
            street: "",
            businessDescription: "",
            postalCode: "",
            meetingPlatform: "",
            country: "",
            region: ""
        }       
    }

    componentDidMount() {

        axios.get('http://localhost:3000/clientsRoutes/viewOne').then((response) => {
            if (response.status == 200) {

                this.state.clientName = response.data.ClientName;
                this.state.organizationName = response.data.Organization;
                this.state.contactNo = response.data.ContactNo;
                this.state.websiteName = response.data.websiteName;
                this.state.street = response.data.street;
                this.state.businessDescription = response.data.businessDescription;
                this.state.postalCode = response.data.postalCode;
                this.state.meetingPlatform = response.data.meetingPlatform;
                this.state.country = response.data.country;
                this.state.region = response.data.region;
                this.state.emailId = response.data.Emailid;
               
            }
        }).catch((error) => {
            console.log("Eroor")
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/clientsRoutes/add/', this.state).then((response) => {
            if (this.validateForm()) {
                alert("Details Successfully Saved!!");
            }
        }).catch((error) => {
            console.log("Eroor")
        })
    }

    render() {
        return (
            <div className="page-container add-client-container">
                <div className="page-header-container">
                   <PageHeader title="New Client" subtitle="" />
                </div>
                <div className="page-content-container">
                    <div className="page-content">
                        <Row className="add-client-content">
                            <Col>
                                <Form>
                                    <Row>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label className="required">Client Name</Form.Label>
                                                <Form.Control type="name" name="clientName" placeholder="Enter Client Name" value={this.state.ClientName}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label className="required">Organization</Form.Label>
                                                <Form.Control type="name" name="organizationName" placeholder="Enter Organization Name" value={this.state.OrganizationName} onChange={this.onValueChange}
                                                 />      
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label className="required">Contact No</Form.Label>
                                                <Form.Control type="name" name="contactNo" placeholder="Enter Contact No" value={this.state.ContactNo} onChange={this.onValueChange}
                                                   />
                                            </Form.Group>
                                        </Col>

                                        <Col>
                                            <Form.Group>
                                                <Form.Label>Website</Form.Label>
                                                <Form.Control type="name" name="websiteName" placeholder="Enter Website Name" value={this.state.WebsiteName} onChange={this.onValueChange}
                                                   />
                                            </Form.Group>
                                        </Col>
                                      
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label className="required">Email</Form.Label>
                                                <Form.Control type="name" name="emailId" placeholder="Enter Email Id" value={this.state.EmailId} onChange={this.onValueChange}
                                                  />
                                            </Form.Group>
                                        </Col>

                                        <Col>
                                            <Form.Group>
                                                <Form.Label>LinkedIn Profile</Form.Label>
                                                <Form.Control type="name" name="LinkedInProfile" placeholder="Enter Clienet Name" value={this.state.LinkedInProfile} onChange={this.onValueChange}
                                                 />
                                            </Form.Group>
                                        </Col>
                                      
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label>Street</Form.Label>
                                                <Form.Control type="name" name="street" placeholder="Enter Street Name" value={this.state.Street} onChange={this.onValueChange}
                                                    />
                                            </Form.Group>
                                        </Col>

                                        <Col>
                                            <Form.Group>
                                                <Form.Label>Business Description</Form.Label>
                                                <Form.Control type="name" name="businessDescription" placeholder="Enter Business Description" value={this.state.BusinessDescription} onChange={this.onValueChange}
                                                   />
                                    
                                            </Form.Group>
                                        </Col>
                                      
                                    </Row>

                                    <Row>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label>Postal Code</Form.Label>
                                                <Form.Control type="name" name="postalCode" placeholder="Enter Postal code" value={this.state.PostalCode} onChange={this.onValueChange}
                                                    />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label className="required">Meeting Platform</Form.Label>
                                                <Form.Control as="select" name="meetingPlatform" placeholder="Enter meeting platform" value={this.state.MeetingPlatform} onChange={this.onValueChange}
                                                    />
                                              

                                            </Form.Group>
                                        </Col>

                                    </Row>
                                    {/* <Row>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label className="required">Country </Form.Label>
                                                <CountryDropdown as="select" name="country" defaultOptionLabel="Select country" value={this.state.country} 
                                                                 onChange={(name, value) => this.selectCountry(name, value)}
                                                />
                                            </Form.Group>
                                        
                                            <Form.Group>
                                                <Form.Label>Region </Form.Label>
                                                <RegionDropdown
                                                       country={this.state.country} blankOptionLabel="No Country Selected" defaultOptionLabel="Select region"
                                                       as="select" name="region" value={this.state.region} onChange={(name, value) => this.selectRegion(name,value)}>
                                                </RegionDropdown>                            
                                            </Form.Group>
                                        </Col>
                                    </Row> */}
                                    
                                    <Row className="generate-button-container">
                                        <Button className="primary-button" onClick={this.onSubmit}>
                                            Back
                                        </Button>
                                    </Row>
                                </Form>
                            </Col>
                        </Row>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ViewClient);