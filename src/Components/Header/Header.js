
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'


function Header(props) {
    return (
        // <div className='flex shopping-card'>
        //     <div onClick={() => props.handleShow(false)} >Shopping Cart App</div>
        //     <div onClick={() => props.handleShow(true)}> Cart
        //         <sup> {props.count} </sup>
        //     </div>
        // </div>
         <Navbar className='mb-2 navbar' expand="lg">
         <Container fluid>
           <Navbar.Brand className=' text-light' href="#home" onClick={() => props.handleShow(false)} >Anas shopy</Navbar.Brand>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
            <Nav.Link className='me-5 text-light  link' href="#link" onClick={() => props.handleShow(false)}>Home</Nav.Link>  
              <Nav.Link className='me-5 text-light  link' href="#link">About</Nav.Link>
               <Nav.Link  className='me-5 text-light  link' href="#link" onClick={() => props.handleShow(true)}> <i className="fa-solid fa-cart-shopping ms-2"></i> <sup> {props.count} </sup></Nav.Link>
             </Nav>
           </Navbar.Collapse>
         </Container>
       </Navbar>
    );
}

export default Header;
