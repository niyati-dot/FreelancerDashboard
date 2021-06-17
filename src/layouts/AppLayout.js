import React from 'react';
import AppNavbar from "../components/AppNavbar";
import {Container} from "react-bootstrap";

const AppLayout =({children}) =>{
    return(
        <>
            <header>
                <AppNavbar/>
            </header>
            <main>
                <Container>
                    {children}
                </Container>
            </main>
        </>
    )
}

export default AppLayout;