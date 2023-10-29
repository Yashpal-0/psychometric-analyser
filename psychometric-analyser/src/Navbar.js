import react, {useState} from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBCollapse
  } from 'mdb-react-ui-kit';
  // import { NavLink } from 'react-router-dom';



const Navbar = () => {
    const [showNavColor, setShowNavColor] = useState(false);
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  const [showNavColorThird, setShowNavColorThird] = useState(false);

    return (
      <>
      <div className="site-mobile-menu">
      <div className="site-mobile-menu-header">
      <div className="site-mobile-menu-close mt-3">
      <span className="icon-close2 js-menu-toggle"></span>
      </div>
      </div>
      <div className="site-mobile-menu-body"><ul className="site-nav-wrap">
      <li className="active"><a href="index.html"><span>Home</span></a></li>
      <li className="has-children"><span className="arrow-collapse collapsed" data-toggle="collapse" data-target="#collapseItem0"></span>
      <a href="about.html"><span>Dropdown</span></a>
      <ul className="collapse" id="collapseItem0">
      <li><a href="#">Menu One</a></li>
      <li><a href="#">Menu Two</a></li>
      <li><a href="#">Menu Three</a></li>
      <li className="has-children"><span className="arrow-collapse collapsed" data-toggle="collapse" data-target="#collapseItem1"></span>
      <a href="#">Dropdown</a>
      <ul className="collapse" id="collapseItem1">
      <li><a href="#">Menu One</a></li>
      <li><a href="#">Menu Two</a></li>
      <li><a href="#">Menu Three</a></li>
      <li><a href="#">Menu Four</a></li>
      </ul>
      </li>
      </ul>
      </li>
      <li><a href="listings.html"><span>Listings</span></a></li>
      <li><a href="about.html"><span>About</span></a></li>
      <li><a href="blog.html"><span>Blog</span></a></li>
      <li><a href="contact.html"><span>Contact</span></a></li>
      </ul></div>
      </div>
      <header className="site-navbar" role="banner">
      <div className="container">
      <div className="row align-items-center">
      <div className="col-11 col-xl-2"> 

      {/* <NavLink exact to='/'> */}
      <h1 className="mb-0 site-logo"><a href="index.html" className="text-white mb-0">Talent Insight Accelerator </a></h1>
      {/* </NavLink> */}
      </div>
      <div className="col-12 col-md-10 d-none d-xl-block">
      <nav className="site-navigation position-relative text-right" role="navigation">
      <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block">
      <li className="active"><a href="index.html"><span>Home</span></a></li>
      <li className="has-children">
      <a href="about.html"><span>Dropdown</span></a>
      <ul className="dropdown arrow-top">
      <li><a href="#">Menu One</a></li>
      <li><a href="#">Menu Two</a></li>
      <li><a href="#">Menu Three</a></li>
      <li className="has-children">
      <a href="#">Dropdown</a>
      <ul className="dropdown">
      <li><a href="#">Menu One</a></li>
      <li><a href="#">Menu Two</a></li>
      <li><a href="#">Menu Three</a></li>
      <li><a href="#">Menu Four</a></li>
      </ul>
      </li>
      </ul>
      </li>
      <li><a href="listings.html"><span>Listings</span></a></li>
      <li><a href="about.html"><span>About</span></a></li>
      <li><a href="blog.html"><span>Blog</span></a></li>
      <li><a href="contact.html"><span>Contact</span></a></li>
      </ul>
      </nav>
      </div>
      <div className="d-inline-block d-xl-none ml-md-0 mr-auto py-3" style={{"position": "relative", "top": "3px;"}}><a href="#" className="site-menu-toggle js-menu-toggle text-white"><span className="icon-menu h3"></span></a></div>
      </div>
      </div>
      
      </header>

        {/* <MDBNavbar expand='lg' dark bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>TALENT INSIGHT ACCELERATOR</MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColorSecond(!showNavColorSecond)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02'>
            <MDBNavbarNav classNameName='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem classNameName='active'>
                <MDBNavbarLink aria-current='page' href='#'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Features</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>About</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar> */}
      </>
    );
}

export default Navbar;

