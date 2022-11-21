import { NavLink } from 'react-router-dom';
import LoggedIn from '../Loggedin/Loggedin';
import LoggedOut from '../LoggedOut/LoggedOut';
import { useSelector } from 'react-redux';
import { selectToken } from '../../store/user/selectors';
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import logo from "../../images/logo.jpeg"

export default function NavBar() {
    const token = useSelector(selectToken);

    const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;
    return (
        <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
            <Container>
               
                <Navbar.Brand as={NavLink} to='/'>
                    <img src={logo} alt="brand logo"/>
                </Navbar.Brand>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='me-auto' style={{ width: '100%' }} fill>
                        <Nav.Link as={NavLink} to='/' >
                            Home
                        </Nav.Link>
                        {/* {token && (
                            <Nav.Link as={NavLink} to='/manager'>
                                Manager
                            </Nav.Link>
                        )} */}

                        {loginLogoutControls}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}