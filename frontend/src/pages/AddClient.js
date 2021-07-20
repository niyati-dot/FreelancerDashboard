import React, { Component } from 'react';
import PageHeader from "../components/PageHeader";
import { withRouter } from 'react-router-dom';
import "../styles/AddClient.scss";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {curl_init} from 'react';
import {curl_getinfo} from 'react';
import {CURLINFO_HTTP_CODE} from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

export class AddClient extends Component {

    constructor(props) {
        super(props)

        this.state = {
            clientName: "",
            clientNameError: "",
            organizationName: "",
            organizationNameError: "",
            contactNo: "",
            contactNoError: "",
            websiteName: "",
            websiteNameError: "",
            emailId: "",
            emailIdError: "",
            street: "",
            streetError: "",
            businessDescription: "",
            postalCode: "",
            PostalCodeError: "",
            meetingPlatform: "",
            meetingPlatformError: "",
            country: "",
            region: ""
        }       
    }

    onValueChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    selectCountry (val) {
      this.setState({ country: val });
    }
  
    selectRegion (val) {
      this.setState({ region: val });
    }

    validateClient = (event) => {
        let isValid = true;
        if (!this.state.client) {
            this.setState({ clientNameError: "Client Name is required" })
            isValid = false;
        }
        return isValid;
    }

    validateOrganization = (event) => {
      let isValid = true;
      if (!this.state.organizationName) {
          this.setState({ organizationNameError: "Organization Name is required" })
          isValid = false;
      }
      return isValid;
    }

    validateContactNo = (event) => {
        let isValid = true;
        if (!this.state.contactNo) {
            this.setState({ contactNoError: "Contact No is required" })
            isValid = false;
        }
        var pattern = new RegExp(/^[0-9\b]+$/);
        const result = pattern.test(this.state.contactNo);
        if(result===false){
          this.setState({
            isValid:false,
            contactNoError: "Contact No is invalid: can contain Number and contry code only"
          })
        }
        return isValid;
    }

    validateWebsiteName = (event) => {
      let isValid = true;
      const pattern = /^(?:(?:(?:[a-zA-z\-]+)\:\/{1,3})?(?:[a-zA-Z0-9])(?:[a-zA-Z0-9\-\.]){1,61}(?:\.[a-zA-Z]{2,})+|\[(?:(?:(?:[a-fA-F0-9]){1,4})(?::(?:[a-fA-F0-9]){1,4}){7}|::1|::)\]|(?:(?:[0-9]{1,3})(?:\.[0-9]{1,3}){3}))(?:\:[0-9]{1,5})?$/g;
      const result = pattern.test(this.state.websiteName);
      if(result===false){
        this.setState({
          isValid:false,
          websiteNameError: "Provided website is invalid"
        })
      }
      return isValid;
    }

    validateEmailId = (event) => {
      let isValid = true;
      if (!this.state.emailId) {
          this.setState({ emailIdError: "Email Id is required" })
          isValid = false;
      }
      const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
      const result = pattern.test(this.state.emailId);
      if(result===false){
        this.setState({
          isValid:false,
          emailIdError: "Provided email Id is invalid"    
        })
      } 
      return isValid;
    }

    validateLinkedInProfile = (event) => 
    {
        let isValid = true;
        const pattern = /(ftp|http|https):\/\/?(?:www\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/g;
        const result = pattern.test(this.state.linkedInProfile);
        if(result===false){
          this.setState({
            isValid:false,
            linkedInProfileError: "LinkedIn Profile is not valid"
          })
        }
        /*const profileurl = this.state.linkedInProfile;
        const fp = curl_init(profileurl);
        const response_code = curl_getinfo(fp, CURLINFO_HTTP_CODE);
  
        if(response_code===200){
          this.setState({
            isValid:false,
            linkedInProfileError: "Provided Linkedin profile is invalid"    
          })
        }*/
    }

    validateStreet = (event) => {
      let isValid = true;
      const pattern = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g;
      const result = pattern.test(this.state.street);
      if(result===false){
        this.setState({
          isValid:false,
          streetError: "Street should not contain special characters"
        })
      }
      return isValid;
    }

    validatePostalcode = (event) => {
      let isValid = true;
      const pattern = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g;
      const result = pattern.test(this.state.postalCode);
      if(result===false){
        this.setState({
          isValid:false,
          PostalCodeError: "Postal code should not contain special characters"
        })
      }
      return isValid;
    }

    validateMeetingPlatform = (event) => {
      let isValid = true;
      if (!this.state.meetingPlatform) {
          this.setState({ meetingPlatformError: "Meeting Platform is required" })
          isValid = false;
      }
      return isValid;
    }

    validateForm = (event) => {
      let isValid = true
      if (!this.validateClient()) {
          isValid = false;
      }
      if (!this.validateOrganization()) {
          isValid = false;
      }
      if (!this.validateContactNo()) {
          isValid = false;
      }
      if (!this.validateWebsiteName()) {
          isValid = false;
      }
      if (!this.validateEmailId()) {
        isValid = false;
      }
      if (!this.validateLinkedInProfile()) {
        isValid = false;
      }
      if (!this.validateStreet()) {
        isValid = false;
      }
      if (!this.validatePostalcode()) {
        isValid = false;
      }
      if (!this.validateMeetingPlatform()) {
        isValid = false;
      }
      return isValid;
    }

    onSubmit = (event) => {
        event.preventDefault();
        if (this.validateForm()) {
            alert("Details Successfully Saved!!");
        }
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
                                                <Form.Control type="name" name="clientName" placeholder="Enter Client Name" value={this.state.clientName} onChange={this.onValueChange}
                                                    onBlur={this.validateClientName}
                                                    isInvalid = {this.state.clientNameError}/>
                                                <Form.Control.Feedback type="invalid">
                                                    {this.state.clientNameError}
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label className="required">Organization</Form.Label>
                                                <Form.Control type="name" name="organizationName" placeholder="Enter Organization Name" value={this.state.organizationName} onChange={this.onValueChange}
                                                    onBlur={this.validateOrganization}
                                                    isInvalid = {this.state.organizationNameError} />
                                                <Form.Control.Feedback type="invalid">
                                                    {this.state.organizationNameError}
                                                </Form.Control.Feedback>        
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label className="required">Contact No</Form.Label>
                                                <Form.Control type="name" name="contactNo" placeholder="Enter Contact No" value={this.state.contactNo} onChange={this.onValueChange}
                                                    onBlur={this.validateContactNo}
                                                    isInvalid={this.state.contactNoError} />
                                                <Form.Control.Feedback type="invalid">
                                                    {this.state.contactNoError}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>

                                        <Col>
                                            <Form.Group>
                                                <Form.Label>Website</Form.Label>
                                                <Form.Control type="name" name="websiteName" placeholder="Enter Website Name" value={this.state.websiteName} onChange={this.onValueChange}
                                                    onBlur={this.validateWebsiteName}
                                                    isInvalid={this.state.websiteNameError} />
                                                <Form.Control.Feedback type="invalid">
                                                    {this.state.websiteNameError}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                      
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label className="required">Email</Form.Label>
                                                <Form.Control type="name" name="emailId" placeholder="Enter Email Id" value={this.state.emailId} onChange={this.onValueChange}
                                                    onBlur={this.validateEmailId}
                                                    isInvalid={this.state.emailIdError} />
                                                <Form.Control.Feedback type="invalid">
                                                    {this.state.emailIdError}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>

                                        <Col>
                                            <Form.Group>
                                                <Form.Label>LinkedIn Profile</Form.Label>
                                                <Form.Control type="name" name="LinkedInProfile" placeholder="Enter Clienet Name" value={this.state.linkedInProfile} onChange={this.onValueChange}
                                                    onBlur={this.validateLinkedInProfile}
                                                    isInvalid={this.state.linkedInProfileError} />
                                                <Form.Control.Feedback type="invalid">
                                                    {this.state.linkedInProfileError}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                      
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label>Street</Form.Label>
                                                <Form.Control type="name" name="street" placeholder="Enter Street Name" value={this.state.street} onChange={this.onValueChange}
                                                    onBlur={this.validateStreet}
                                                    isInvalid={this.state.streetError} />
                                                <Form.Control.Feedback type="invalid">
                                                    {this.state.streetError}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>

                                        <Col>
                                            <Form.Group>
                                                <Form.Label>Business Description</Form.Label>
                                                <Form.Control type="name" name="businessDescription" placeholder="Enter Business Description" value={this.state.businessDescription} onChange={this.onValueChange}
                                                    onBlur={this.validatebusinessDescription}
                                                     />
                                               
                                            </Form.Group>
                                        </Col>
                                      
                                    </Row>

                                    <Row>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label>Postal Code</Form.Label>
                                                <Form.Control type="name" name="postalCode" placeholder="Enter Postal code" value={this.state.postalCode} onChange={this.onValueChange}
                                                    onBlur={this.validatePostalcode}
                                                    isInvalid={this.state.PostalCodeError} />
                                                <Form.Control.Feedback type="invalid">
                                                    {this.state.PostalCodeError}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label className="required">Meeting Platform</Form.Label>
                                                <Form.Control as="select" name="meetingPlatform" placeholder="Enter meeting platform" value={this.state.meetingPlatform} onChange={this.onValueChange}
                                                    onBlur={this.validateMeetingPlatform}
                                                    isInvalid={this.state.meetingPlatformError}>
                                                      <option>Select Project</option>
                                                    <option value="1">Google Meet</option>
                                                    <option value="2">Skype</option>
                                                    <option value="3">Zoom</option>
                                                    <option value="4">In person</option>
                                                  </Form.Control>
                                                <Form.Control.Feedback type="invalid">
                                                    {this.state.meetingPlatformError}
                                                </Form.Control.Feedback>
                                              

                                            </Form.Group>
                                        </Col>

                                    </Row>
                                    <Row>
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
                                    </Row>
                                    
                                    <Row className="generate-button-container">
                                        <Button className="primary-button" onClick={this.onSubmit}>
                                            Submit
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

export default withRouter(AddClient);