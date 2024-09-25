import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'

function Header() {

    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        // {title:'Home',path:'/'},
        {title:'Book',path:'/books'},
        {title:'Character',path:'/characters'},
        {title:'House',path:'/houses'},
    ]

    

  return (
    <Navbar data-bs-theme="light">
        <Container>
          <Navbar.Brand ><span style={{color:'var(--frost-blue)'}}>Ice</span> & <span style={{color:'var(--fire-red)'}}>Fire</span></Navbar.Brand>
          <Nav className="me-auto">
            {navItems?.map((item,i)=>(
            <Nav.Link key={item?.title}
             onClick={()=>navigate(item?.path)} 
             className={`${location.pathname.includes(item?.path)?'active':''}`}
            >{item?.title}</Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Header