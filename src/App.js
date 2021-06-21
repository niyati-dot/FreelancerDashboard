import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AppLayout from "./layouts/AppLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import InvoiceGeneration from "./pages/InvoiceGeneration";
import Timelogs from "./pages/Timelogs";
import Projects from "./pages/Projects";
import AddProject from "./pages/AddProject";
import EditProject from "./pages/EditProject";
import Clients from "./pages/Clients";
import AddClient from "./pages/AddClient";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <AppLayout>
                        <Home />
                    </AppLayout>
                </Route>
                <Route path="/login">
                    <AppLayout>
                        <Login />
                    </AppLayout>
                </Route>
                <Route path="/register">
                    <AppLayout>
                        <Register />
                    </AppLayout>
                </Route>
                <Route path="/dashboard">
                    <DashboardLayout>
                        <Dashboard />
                    </DashboardLayout>
                </Route>
                <Route exact path="/projects">
                    <DashboardLayout>
                        <Projects />
                    </DashboardLayout>
                </Route>
                <Route path="/projects/add">
                    <DashboardLayout>
                        <AddProject />
                    </DashboardLayout>
                </Route>
                <Route path="/projects/edit/:id">
                    <DashboardLayout>
                        <EditProject />
                    </DashboardLayout>
                </Route>

                <Route path="/timelogs">
                    <DashboardLayout>
                        <Timelogs />
                    </DashboardLayout>
                </Route>

                <Route path="/invoice-generation">
                    <DashboardLayout>
                        <InvoiceGeneration />
                    </DashboardLayout>
                </Route>

                <Route path="/clients">
                    <DashboardLayout>
                        <Clients />
                    </DashboardLayout>
                </Route>
                <Route path="/AddClient">
                    <DashboardLayout>
                        <AddClient />
                    </DashboardLayout>
                </Route>

                <Route path="/">
                    <div>404 Page not found.</div>
                </Route>
            </Switch>
        </Router>
    );
}