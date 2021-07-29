import "../styles/DashboardNavbar.scss";
import {Accordion, Container, CustomToggle, Card, Dropdown, Modal, Nav, Navbar, Button} from "react-bootstrap";
import React,  {Component} from 'react';
import NotificationService from "../services/notificationService"
import { withRouter } from "react-router";

class Notification extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            values: [],
            value: {},
            notificationShow: false
        };
    }

    fetchNotifications(){
        NotificationService.getAllNotifications(localStorage.getItem("user_id")).then((response) => {
            console.log(response);
            let notifications = [];
            response.data.forEach(element => {
                let item = {};
                item.eventName = element.eventName;
                item.category = element.category;
                item.viewStatus = element.viewStatus;
                notifications.push(item)
            });
            this.setState({
                values: notifications
            });
            console.log(this.state.values);
        }).catch((error) => {
            console.log("Error")
        })
    }

    componentDidMount() {
        this.fetchNotifications();
    }

    handleNotificationClose(){
        this.setState({notificationShow:false});
    };
    handleNotificationShow(){
        this.setState({notificationShow:true});
    };

    openNotification = (value) => {
        this.setState({value:value});
        NotificationService.setStatus(value).then((response) => {
            console.log('stored');
        }).catch((error) => {
            console.log("Error")
        });
        this.fetchNotifications();
        this.handleNotificationShow();

    };

    render() {
        return (
            <div>
                <Dropdown>
                    <Dropdown.Toggle title="Notification" id="bellIcon">
                        <i className="fas fa-bell"/>
                    </Dropdown.Toggle>

                    <Dropdown.Menu id="notificationPanel" >
                        {this.state.values.map((value,index) => {
                            return <Dropdown.Item className="border-bottom" onClick = { () => this.openNotification(value)}>
                                <span className={ value.viewStatus?"":"text-primary"} >{value.eventName}</span>
                            </Dropdown.Item>
                        })}
                    </Dropdown.Menu>
                </Dropdown>
                <Modal show={this.state.notificationShow} onHide={() => this.handleNotificationClose()}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.value.category}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.state.value.eventName}
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default withRouter(Notification)
