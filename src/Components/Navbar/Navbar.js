import React,{useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import infoidollogo from '../../Assets/infoidollogo.png'
import { connect } from 'react-redux'
import './Navbar.css'
import { hitzartekfoodAPI } from '../../Redux/zartek/zartekActions';
const NavBar = (props) => {
    console.log('xfcgbj,.',props)

    useEffect(() => {
        props.hitzartekfoodAPI()
    }, [])
    return (
        <section>
            <Navbar variant="dark" expand="lg">
                <Container className="navbar-container">
                <section className="navbar-main-container">
                    <div className="logoBlock">
                    <Navbar.Brand href="#home" className="navbar-logo">
                    <img
                        src={infoidollogo}
                        width="100"
                        height="49"
                        className="d-inline-block align-top navbar-img"
                        alt="React Bootstrap logo"
                    />
                    </Navbar.Brand>
                    </div>
                    <div className="nav-lists">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-Toggle"/>
                    <Navbar.Collapse id="basic-navbar-nav" className="navbar-Collapse">
                    <Nav className="me-auto navbar-all-items">
                        <Nav.Link href="#home" className="navbar-elems navbar-Link1">Home</Nav.Link>
                        <Nav.Link href="#link" className="navbar-elems navbar-Link2">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="navbar-elems navbar-Dropdown">
                        <NavDropdown.Item href="#action/3.1" className="navbar-Item1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2" className="navbar-Item2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3" className="navbar-Item3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4" className="navbar-Item4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                    </div>
                </section>
                </Container>
            </Navbar>
        </section>
    )
}

const mapStateToProps = (state) => {
    // console.log('stateeeeeec internship details', state.InternshipSubjects.internshipSubjectsGetApi.internshipSubjects);
  return{
    InternshipRegisterationApi :state
  }
  }
  const mapDispatchToProps = dispatch => {
  return {
    hitzartekfoodAPI : () => dispatch(hitzartekfoodAPI()),
  }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
  
