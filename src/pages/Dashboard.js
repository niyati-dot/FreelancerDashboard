import React from 'react';
import PageHeader from "../components/PageHeader";
import { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

export default function Dashboard(){

    const params = useParams();
    let history = useHistory();

    alert("Welcome to Freelancer Dashboard\nUser:"+history.location.state);
    // console.log(history.location.state);

    return (
        <div>
            <PageHeader title="Dashboard" subtitle="Welcome to Dashboard!"/>
            Dashboard Page
            <div className="row">
                <div className="col-md-1">
                </div>
                <div className="col-md-11"></div>
            </div>
        </div>
    )
}