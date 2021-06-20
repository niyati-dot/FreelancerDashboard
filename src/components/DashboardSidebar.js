import './DashboardSidebar.css';
import React, { useState } from 'react';
import {
    Col,
    Collapse,
    Container,
    Row,
} from 'react-bootstrap';
import { Drawer, } from 'react-bootstrap-drawer';

export default function Sidebar(props) {
    const [open, setOpen] = useState(false);

    const handleToggle = () => setOpen(!open);

    return (
        <Drawer { ...props }>
            <Drawer.Toggle onClick={ handleToggle } />

            <Collapse in={ open }>
                <Drawer.Overflow>
                    <Drawer.ToC>
                        <Drawer.Header href="/">Dashboard</Drawer.Header>

                        <Drawer.Nav>
                            <Drawer.Item href="#">Clients</Drawer.Item>
                            <Drawer.Item href="#">Projects</Drawer.Item>
                            <Drawer.Item href="#">Time Logs</Drawer.Item>
                            <Drawer.Item href="#">Invoices</Drawer.Item>
                            <Drawer.Item href="/testimonials">Testimonials</Drawer.Item>
                            <hr/>
                            <Drawer.Item href="#">ToDo</Drawer.Item>
                            <Drawer.Item href="#">Calendar</Drawer.Item>
                            <Drawer.Item href="#">Notes</Drawer.Item>
                        </Drawer.Nav>
                    </Drawer.ToC>
                </Drawer.Overflow>
            </Collapse>
        </Drawer>
    );
};