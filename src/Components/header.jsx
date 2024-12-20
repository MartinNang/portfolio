import React from 'react';
import { Link, useLocation } from 'react-router';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = ({ name }) => {
    const location = useLocation();

    return (
      <header>
        <Navbar sticky='top' collapseOnSelect expand="lg" className="navigation">
          <Container>
            <Navbar.Brand href="/" id='logo'>Martin Nang'ole</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto" activeKey={location.pathname}>
                <Nav.Link href="/">home</Nav.Link>
                <Nav.Link href="/experience">experience</Nav.Link>
                <NavDropdown title="projects" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="/games">games</NavDropdown.Item>
                  <NavDropdown.Item href="/music">music</NavDropdown.Item>
                  <NavDropdown.Item href="/repositories">repositories</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/projects">all</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav activeKey={location.pathname}>
                <Nav.Link href="/contact">contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
          <div class="bg-rect header-rect">
            </div>
       </Navbar>
      </header>
    // <header>
    //   <nav class="navbar sticky-top navbar-expand-lg navbar-light navigation">
    //     <div class="container-fluid">
    //       <a id="logo" class="navbar-brand" href="index.html">Martin Nang'ole</a>
    //       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation" onClick={()=> setToggle(!toggle)}>
    //         <span class="navbar-toggler-icon"></span>
    //       </button>
    //       <div class="collapse navbar-collapse" id="navbarScroll">
    //         <ul collapseOnSelect class="navbar-nav ms-auto my-5 m-3 p-2 my-lg-0 navbar-nav-scroll navigation-list">
    //           <li class="nav-item">
    //             <Link to={'/'} class="nav-link" onClick={()=> setToggle(!toggle)}>
    //               home
    //             </Link>
    //           </li>
    //           <li class="nav-item">
    //             <Link to={'/experience'} class="nav-link">
    //               experience
    //             </Link>
    //           </li>
    //           <li class="nav-item dropdown">   
    //             <Link to={'#'} class="nav-link dropdown-toggle" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    //               projects
    //             </Link>                                
    //             <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
    //               <li class="mt-0">
    //                 <Link to={'/projects'} class="dropdown-item">
    //                   all
    //                 </Link>
    //               </li>
    //               <li>
    //                 <Link to={'/games'} class="dropdown-item">
    //                   games
    //                 </Link>
    //               </li>
    //               <li>
    //                 <Link to={'/music'} class="dropdown-item">
    //                   music
    //                 </Link>
    //               </li>
    //               <li>
    //                 <Link to={'/repositories'} class="dropdown-item">
    //                   repositories
    //                 </Link>
    //               </li>
    //             </ul>
    //           </li>
    //           <li class="nav-item">
    //             <Link to={'/contact'} class="nav-link">
    //               contact
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //     <div class="bg-rect header-rect">
    //     </div>
    //   </nav>
    // </header>
    );
};

export default Header;