import {Container, Nav, Navbar} from "react-bootstrap";
import "./DashboardNavbar.scss";

export default function DashboardNavbar(){
    return (
        <Navbar className="nav-bar-container">
            <Container>
                <Navbar.Brand className="nav-bar-text" href="/">Freelance Dashboard</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link title="Notification" className="nav-bar-link" href="#notification">
                        <i class="fas fa-bell"></i>
                    </Nav.Link>
                    <Nav.Link title="Profile" className="nav-bar-link" href="#profile">
                        <i class="fas fa-user"></i>
                    </Nav.Link>
                    <Nav.Link title="Log Out" className="nav-bar-link" href="/">
                        <i class="fas fa-sign-out-alt"></i>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}