import React, { useContext } from 'react';
import './Header.css';
import { Form, Nav, Navbar } from 'react-bootstrap';
import { Container } from '@material-ui/core';
import { Link } from "react-router-dom";
import logo from "../../Image/Logo.png";
import { UserContext } from '../../App'

const Header = (props) => {
    const [info,setInfo,loggedInUser] = useContext(UserContext);
    const {displayName, email} = loggedInUser;
    const colorChange = {
        filter: `${props.filters}`
}
    return (
        <>
        <Container style={colorChange}>
        <Navbar>
            <Navbar.Brand>
                <img src={logo} className="logo"  alt=""/>
            </Navbar.Brand>
            <Form inline >
            <input type="search" placeholder="Search your Destination..."/>
            </Form>
            <Nav className="ml-auto px-5">
                    <Link to="/news" className="linkStyle">
                        <p>
                            News
                        </p>
                    </Link>
                    <Link to="/destination" className="linkStyle">
                        <p>
                            Destination
                        </p>
                    </Link>
                    <Link to="/blog" className="linkStyle">
                        <p>
                            Blog
                        </p>
                    </Link>
                    <Link to="/contact" className="linkStyle">
                        <p>
                            Contact
                        </p>
                    </Link>
                    {
                        email? <p className='userName'>{displayName}</p>
                        :
                        <>
                            <Link to="/Login">
                        <button className="button">
                            Login
                        </button>
                    </Link>
                        </>
                    }
            </Nav>
        </Navbar>
        </Container>
        </>
    );
};

export default Header;