import {Container, Nav, Navbar} from "react-bootstrap";
import "./AppNavbar.scss"

export default function AppNavbar(){
    return (
        <Navbar className="nav-bar-container">
            <Container>
                <Navbar.Brand href="/">Freelance Dashboard</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="login">Login</Nav.Link>
                    <Nav.Link href="register">Register</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}