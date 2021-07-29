import "../styles/DashboardNavbar.scss";
import {Accordion, Container,  CustomToggle, Card, Dropdown, Modal, Nav, Navbar} from "react-bootstrap";
import React,  {Component} from 'react';
import NotificationService from "../services/notificationService"
import moment from 'moment';
import { withRouter } from "react-router";

class Notification extends Component
{
    constructor(props) {
        super(props)


        this.state = {
            value: [],
            lgshow: false
        }

        this.userId = localStorage.getItem("user_id")
    }

    // Similar to componentDidMount and componentDidUpdate:
    componentDidMount() {
        console.log("always");
        console.log("Here I am");
        NotificationService.getAllNotifications(this.userId).then((response) => {
            console.log('response',response.data);
            let notification = [];
            response.data.forEach(element => {
                let item = {};
                item.eventName = element.eventName;
                item.category = element.category;
                notification.push(item)
            });
            this.setState({
                value: notification
            })
        }).catch((error) => {
            console.log("Error")
        })
    }

    openNotification = (value) => {
        console.log('Here I am in viewInDetail function');
        console.log( 'value one',this.state.value  );
        this.props.history.push({ pathname: '/openNotification',
            notification: value });
    };

    render() {

        return (
            <div>
                <Dropdown>
                    <Dropdown.Toggle title="Notification" id="bellIcon">
                        <i className="fas fa-bell"/>
                    </Dropdown.Toggle>

                    <Dropdown.Menu id="notificationPanel">
                        {this.state.value.map((value,index) => {
                            return <Dropdown.Item className="border-bottom" onClick = { () => this.openNotification(value)} value={value.eventName}>{value.category}</Dropdown.Item>
                        })}
                    </Dropdown.Menu>
                </Dropdown>
            </div>

        )
    }
}

export default withRouter(Notification)
