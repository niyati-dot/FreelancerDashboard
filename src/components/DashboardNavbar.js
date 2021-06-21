import {Container, Nav, Navbar} from "react-bootstrap";

export default function DashboardNavbar(){
    return (
        <Navbar className="nav-bar-container" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Freelance Dashboard</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="#notification">Notification</Nav.Link>
                    <Nav.Link href="#profile">Profile</Nav.Link>
                    <Nav.Link href="/">Logout</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}