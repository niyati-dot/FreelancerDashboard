import React from 'react';
import { useState} from 'react';
import PageHeader from "../components/PageHeader";
import AddProject from './AddProject';
import '../style.css';

export default function Projects(){

    const [checkForm, setCheckForm] = useState(true);

    const validate = (event) => {
        setCheckForm(false);
    }

    return (
        <div>
            
            {
                checkForm ? 

                <div>
                    <PageHeader title="Projects" subtitle="Welcome to Projects!"/>
                    <div class="col-md-2">
                    </div>
                    <div class="col-md-10">
                        <div class="topnav alignLeft">
                        <input class="searchWidth" type="text" placeholder="Search Project"/>
                        </div>
                        <div class="topMargin inlineEle">
                        <div class="col-md-8 alignLeft">
                            <h3>Projects List</h3>
                        </div>
                        <div class="col-md-4 btnRightMargin">
                            <button type="button" onClick={validate} class="btn btn-info">Add Project</button>
                        </div>
                        </div>
                        <div>
                        <table id="mytable">
                            <tbody>
                            <tr>
                                <th class="width-20">Project Title</th>
                                <th class="width-20">Description</th>
                                <th class="width-20">Client Name</th>
                                <th class="width-20">Status</th>
                                <th class="width-20">Actions</th>
                            </tr>
                            <tr>
                                <td>Email Download</td>
                                <td>Providing this functionality will enable the access of email in PDF format.</td>
                                <td>Christ Fernandiz</td>
                                <td>In Progress</td>
                                <td><a href="#">Edit</a>     |    <a href="#">Delete</a></td>
                            </tr>
                            <tr>
                                <td>Navigation</td>
                                <td>Providing this functionality will navigate the project through navigation bar.</td>
                                <td>Shaun Bishop</td>
                                <td>Pending</td>
                                <td><a href="#">Edit</a>     |    <a href="#">Delete</a></td>
                            </tr>
                            <tr>
                                <td>Upgrade Database</td>
                                <td>Providing this service will migrate data to AWS.</td>
                                <td>Joseph Robinson</td>
                                <td>Completed</td>
                                <td><a href="#">Edit</a>     |    <a href="#">Delete</a></td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
                
                :

                (<div> <AddProject/> </div>)

            }

        </div>
    )
}