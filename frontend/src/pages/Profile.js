/**
 * Author: Deep Patel.
 * Created On: 2021-07-20
 * Frontend Page for Testimonials.
 */

 import React from 'react';
 import { useState, useEffect } from 'react';
 import PageHeader from "../components/PageHeader";
 import { Modal, Form, Button } from 'react-bootstrap';
 import Datatable from '../components/Datatable';
 import emailjs from 'emailjs-com';
 import Row from 'react-bootstrap/Row';
 import Col from 'react-bootstrap/Col';
 import "../styles/Testimonials.scss";
 import projectServices from '../services/projectsServices.js';
 import clientServices from '../services/clientService.js';
 import testimonialServices from '../services/testimonialServices.js';
 var dateFormat = require("dateformat");

const Profile = () => {
    return (
        <div>
            <div className="page-header-container">
                <PageHeader title="Profile" />
            </div>
            <div className="page-content-container">

            </div>
        </div>
    )
}

export default Profile
