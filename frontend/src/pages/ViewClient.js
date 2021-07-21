import React, { Component } from 'react';
import PageHeader from "../components/PageHeader";
import { withRouter } from 'react-router-dom';
import "./AddClient.scss";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export class ViewClient extends Component {
 
  
    constructor(props) {
        super(props)

        console.log(props);
        this.new = props.history;
        console.log(props.history.location.state.state.LinkedInProfile);
        this.state = {
            ClientId: props.history.location.state.state.ClientId,
            clientName: props.history.location.state.state.ClientName,
            organizationName: props.history.location.state.state.Organization,
            contactNo: props.history.location.state.state.ContactNo,
            websiteName: props.history.location.state.state.Website,
            linkedInProfile: props.history.location.state.state.LinkedInProfile,
            emailId: props.history.location.state.state.Email,
            street: props.history.location.state.state.ClientName,
            businessDescription: props.history.location.state.state.ClientName,
            postalCode: props.history.location.state.state.PostalCode,
            meetingPlatform: props.history.location.state.state.MeetingPlatform,
            country: props.history.location.state.state.Country,
            region: props.history.location.state.state.Region
        }       
    }

    selectCountry (name, val) {
      this.setState({  name: val });
    }
  
    selectRegion (val) {
      this.setState({ name: val });
    }
    
    onClickBack = (event) => {
        event.preventDefault();
        this.props.history.push({ pathname: '/clients' });
    }

    render() {
        return (
            <div className="page-container add-client-container">
                <div className="page-header-container">
                   <PageHeader title="View Client" subtitle="" />
                </div>
                <div className="page-content-container">
                    <div className="page-content">
                        <Row className="add-client-content">
                            <Col>
                                <Form>
                                    <Row>
                                        <Col xs={3}>
                                            
                                        </Col>
                                        <Col xs={3}>
                                            <Form.Group>
                                                <Form.Label>Client Name: </Form.Label>
                                            </Form.Group>
                                        </Col>
                                        <Col xs={3}>
                                            <Form.Group>
                                                <Form.Label type="name" name="clientName"> {this.state.clientName} </Form.Label>
                                            </Form.Group>
                                        </Col>
                                        <Col xs={3}>
                                            
                                        </Col>
                                        
                                    </Row>
                                    <Row>
                                            <Col xs={3}>
                                            
                                            </Col>
                                            <Col xs={3}>
                                                <Form.Group>
                                                    <Form.Label>Contact No: </Form.Label>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={3}>
                                                <Form.Group>
                                                    <Form.Label type="name" name="contactNo"> {this.state.contactNo} </Form.Label>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={3}>
                                                
                                            </Col>
                                    </Row>
                                    
                                    <Row>
                                            <Col xs={3}>
                                            
                                            </Col>
                                            <Col xs={3}>
                                                <Form.Group>
                                                    <Form.Label>Email: </Form.Label>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={3}>
                                                <Form.Group>
                                                    <Form.Label type="name" name="emailId">{this.state.emailId}</Form.Label>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={3}>
                                                
                                            </Col>
                                    </Row>
                                    <Row>
                                            <Col xs={3}>
                                            
                                            </Col>
                                            <Col xs={3}>
                                                <Form.Group>
                                                    <Form.Label>Street: </Form.Label>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={3}>
                                                <Form.Group>
                                                    <Form.Label type="name" name="street"> {this.state.street} </Form.Label>    
                                                </Form.Group>
                                            </Col>
                                            <Col xs={3}>
                                                
                                            </Col>
                                    </Row>
                                    <Row>
                                            <Col xs={3}>
                                            
                                            </Col>
                                            <Col xs={3}>
                                                <Form.Group>
                                                    <Form.Label>Postal Code: </Form.Label>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={3}>
                                                <Form.Group>
                                                    <Form.Label type="name" name="postalCode" > {this.state.postalCode} </Form.Label>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={3}>
                                                
                                            </Col>
                                    </Row>
                                    <Row>
                                            <Col xs={3}>
                                            
                                            </Col>
                                            <Col xs={3}>
                                                <Form.Group>
                                                    <Form.Label>Region: </Form.Label>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={3}>
                                                <Form.Group>
                                                    <Form.Label type="name" name="region" > {this.state.region} </Form.Label>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={3}>
                                                
                                            </Col>
                                    </Row>
                                    <Row>
                                            <Col xs={3}>
                                            
                                            </Col>
                                            <Col xs={3}>
                                                <Form.Group>
                                                    <Form.Label>Country: </Form.Label>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={3}>
                                                <Form.Group>
                                                    <Form.Label> {this.state.country} </Form.Label>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={3}>
                                                
                                            </Col>
                                    </Row>
                                    
                                    <Row>
                                            <Col xs={3}>
                                            
                                            </Col>
                                            <Col xs={3}>
                                                <Form.Group>
                                                    <Form.Label>Organization: </Form.Label>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={3}>
                                                <Form.Group>
                                                    <Form.Label >{this.state.organizationName}</Form.Label>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={3}>
                                                
                                            </Col>                                     
                                    </Row>
                                    <Row>
                                            <Col xs={3}>
                                            
                                            </Col>
                                            <Col xs={3}>
                                                <Form.Group>
                                                    <Form.Label>Website: </Form.Label>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={3}>
                                                <Form.Group>
                                                    <Form.Label type="name" name="websiteName">{this.state.websiteName}</Form.Label>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={3}>
                                                
                                            </Col>
                                    </Row>
                                    <Row>
                                            <Col xs={3}>
                                            
                                            </Col>
                                            <Col xs={3}>
                                                <Form.Group>
                                                    <Form.Label>LinkedIn Profile: </Form.Label>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={3}>
                                                <Form.Group>
                                                    <Form.Label >{this.state.linkedInProfile}</Form.Label>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={3}>
                                                
                                            </Col>    
                                    </Row>
                                    <Row>
                                            <Col xs={3}>
                                            
                                            </Col>
                                            <Col xs={3}>
                                                <Form.Group>
                                                    <Form.Label>Business Description: </Form.Label>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={3}>
                                                <Form.Group>
                                                    <Form.Label >{this.state.businessDescription}</Form.Label>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={3}>
                                                
                                            </Col>    
                                    </Row>
                                   
                                    <Row>
                                            <Col xs={3}>
                                            
                                            </Col>
                                            <Col xs={3}>
                                                <Form.Group>
                                                    <Form.Label>Meeting Platform: </Form.Label>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={3}>
                                                <Form.Group>
                                                    <Form.Label >{this.state.meetingPlatform}</Form.Label>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={3} className="generate-button-container">
                                            <Button className="primary-button" onClick={this.onClickBack}>
                                              Back
                                            </Button>  
                                            </Col>
                                              
                                    </Row>
                                   
                                    
                                    <Row >
                                        
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