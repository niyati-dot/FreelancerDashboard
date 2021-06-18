import React from 'react';
import PageHeader from "../components/PageHeader";

export default function Projects(){
    return (
        <div>
            <PageHeader title="Add Project" subtitle="Welcome to Projects!"/>
            
            <div class="col-md-2">
            </div>
            <div class="col-md-10">

              <h3 class="leftAlign1">Add Project</h3>

              <form><center>
                  <h1>Registration</h1>
                  <label>Project Title: <input placeholder="Enter Project Title" class="margin1" type="text" name="first name" id="title"/></label><br></br>

                  <label>Description: <input placeholder="Enter Description" class="margin2" type="text" name="last name" id="client"/></label><br></br>

                  <label>Client Name: <input placeholder="Enter Client Name" class="margin2" type="text" name="email" id="client"/></label><br></br>

                  <label>Project Status: 
                      <select class="margin3">
                          <option>In Progress</option>
                          <option>Pending</option>
                          <option>Completed</option>
                      </select>
                    </label><br></br>

                  <label>Expected Start Date: <input class="margin5" type="date" name="confirm password" id="startdate"/></label><br></br>

                  <label>Expected End Date: <input class="margin5" type="date" name="confirm password" id="enddate"/></label><br></br>

                  <label>Estimated Cost: <input placeholder="Enter Estimated Cost" class="margin1" type="cost" name="email" id="email"/></label><br></br>

                  <button type="button" class="btn btn-info">Submit</button>
              </center></form>
            </div>
        </div>
    )
}