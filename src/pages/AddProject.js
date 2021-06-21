import React from 'react';
import PageHeader from "../components/PageHeader";
import { Redirect, useHistory } from 'react-router-dom';

export default function AddProjects(){

    const history = useHistory();

    async function cancel() {
        let url = "/projects";
        history.push(url);
    }

    return (
        <div>
            <PageHeader title="New Project"/>
            
            <div className="col-md-2">
            </div>
            <div className="col-md-10">

              <form action="/projects"><center>

                <div class="form-group row">
                    <label class="col-md-2 col-form-label">Project Title: </label>
                    <div class="col-md-10">
                        <input title="Project Title" placeholder="Enter Project Title" className="form-control" type="text" name="first name" id="title"/>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-md-2 col-form-label">Client Name:</label>
                    <div class="col-md-10">
                        <select title="Cleint Name" name="clients" class="form-control">
                            <option name="client1" value="client1">Client1</option>
                            <option name="client2" value="client2">Client2</option>
                            <option name="client3" value="client3">Client3</option>
                            <option name="client4" value="client4">Client4</option>
                        </select>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-md-2 col-form-label">Description:</label>
                    <div class="col-md-10">
                        <textarea title="Project Description" placeholder="Enter Project Description" className="form-control" type="textarea" rows="5" name="last name" id="client"/>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-md-2 col-form-label">Hourly Rates:</label>
                    <div class="col-md-10">
                        <input title="Hourly Rates" placeholder="Enter Decided Hourly Rates" className="form-control" type="text" name="rate" id="rate"/>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-md-2 col-form-label">Invoice Duration:</label>
                    <div class="col-md-10">
                        <select title="Invoice Duration" className="form-control">
                            <option name="daily" value="Daily">Daily</option>
                            <option name="weekly" value="Weekly">Weekly</option>
                            <option name="monthly" value="Monthly">Monthly</option>
                        </select>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-md-2 col-form-label">Project Status:</label>
                    <div class="col-md-10">
                        <select title="Project Status" className="form-control">
                            <option name="inprogress" value="In Progress">In Progress</option>
                            <option name="pending" value="Pending">Pending</option>
                            <option name="completed" value="Completed">Completed</option>
                        </select>
                    </div>
                </div>
                    
                <div class="form-group row">
                    <div class="col-md-5"></div>
                    <div class="col-md-2">
                        <button type="submit" title="Submit" className="btn btn-primary">Submit</button>
                    </div>
                    <div class="col-md-2">
                        <button type="button" title="Cancel" onClick={cancel} className="btn btn-danger">Cancel</button>
                    </div>
                    <div class="col-md-3"></div>
                </div>
              </center></form>
            </div>
        </div>
    )
}