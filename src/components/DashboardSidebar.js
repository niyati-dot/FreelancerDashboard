import '../style.scss';
import React, { useState } from 'react';
import {
    Collapse
} from 'react-bootstrap';
import { Drawer, } from 'react-bootstrap-drawer';
import './DashboardSidebar.scss';

export default function Sidebar(props) {
    let index = 0;
    const [open, setOpen] = useState(false);

    const handleToggle = () => setOpen(!open);

    const setActiveItem = (index) => {
        console.log(index)
        this.index = index;
    }
    return (
        <Drawer { ...props }>
            <Drawer.Toggle onClick={ handleToggle } />

            <Collapse in={ open }>
                <Drawer.Overflow>
                    <Drawer.ToC>
                        <Drawer.Header href="/">Dashboard</Drawer.Header>

                        <Drawer.Nav>
                            <Drawer.Item className={`${index === 0 ? 'nav-item-active' : ''}`} href="#" onClick={() => setActiveItem(0)}>Clients</Drawer.Item>
                            <Drawer.Item className={`${index === 1 ? 'nav-item-active' : ''}`} href="#" onClick={() => setActiveItem(1)}>Projects</Drawer.Item>
                            <Drawer.Item className={`${index === 2 ? 'nav-item-active' : ''}`} href="#" onClick={() => setActiveItem(2)}>Time Logs</Drawer.Item>
                            <Drawer.Item className={`${index === 3 ? 'nav-item-active' : ''}`} href="#" onClick={() => setActiveItem(3)}>Invoices</Drawer.Item>
                            <Drawer.Item className={`${index === 4 ? 'nav-item-active' : ''}`} href="/invoice-generation" onClick={() => setActiveItem(4)}>Invoice Generation</Drawer.Item>
                            <Drawer.Item className={`${index === 5 ? 'nav-item-active' : ''}`} href="#" onClick={() => setActiveItem(5)}>Testimonials</Drawer.Item>
                            <span className="horizontal-break"></span>
                            <Drawer.Item className={`${index === 6 ? 'nav-item-active' : ''}`} href="#" onClick={() => setActiveItem(6)}>ToDo</Drawer.Item>
                            <Drawer.Item className={`${index === 7 ? 'nav-item-active' : ''}`} href="#" onClick={() => setActiveItem(7)}>Calendar</Drawer.Item>
                            <Drawer.Item className={`${index === 8 ? 'nav-item-active' : ''}`} href="#" onClick={() => setActiveItem(8)}>Notes</Drawer.Item>
                        </Drawer.Nav>
                    </Drawer.ToC>
                </Drawer.Overflow>
            </Collapse>
        </Drawer>
    );
};