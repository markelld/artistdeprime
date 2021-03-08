import "./Header.css";
import Navbar from 'react-bootstrap/Navbar';  
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';  
import { Link } from 'react-router-dom';
// user props must be passed to show username 
// signout function with onclick
const Header = (props) => { 
  const { currentUser, handleLogout } = props;
  return (
    <Navbar collapseOnSelect bg="light" expand="lg" className='header'> 
      <LinkContainer to="/main">
        <Navbar.Brand>ARTISTEDEPRIMES</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">  
          {
            currentUser ? 
              <> 
                <Nav.Link>{currentUser.username }</Nav.Link>  
              </> 
              : 
              <Link to="/"></Link>
          } 
          <hr /> 
          {  
            currentUser &&
            <>
              <LinkContainer to="/post">
                <Nav.Link>Post</Nav.Link>
              </LinkContainer>          
              <LinkContainer to="/">
                <Nav.Link>Sign Out</Nav.Link>
              </LinkContainer> 
            </>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  
  )
} 

export default Header;