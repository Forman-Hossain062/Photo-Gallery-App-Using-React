import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavItem, Nav, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu, Collapse, NavbarToggler } from 'reactstrap';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Auth from '../Auth/Auth';
import Logout from '../Auth/Logout';
import { Route, Redirect, Switch } from 'react-router-dom';

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        token: state.dishes.token,
    }
}
class Header extends Component {
    state = {
        isNavOpen: false,
    }
    componentDidMount() {
        // console.log(this.props);
    }

    // goBack(){
    //     this.props.
    // }
    render() {
        // console.log(this.props.token);
        let links = null;
        if (this.props.token === null) {
            links = (
                <NavItem >
                    <NavLink to="/login" className="link">Login </NavLink>
                </NavItem>
            )
        }
        else {
            links = (
                <NavItem >
                    <NavLink to="/logout" className="link">Logout </NavLink>
                </NavItem>
            )
        }
        return (
            <div className="Navigation">
                <Navbar style={{
                    backgroundColor: "#C9CCD5",
                    height: "70px"
                }}>

                    <NavbarBrand href='/' className='mr-auto Brand'>
                        <span className='my-style'> Photo Gallery App</span>
                    </NavbarBrand>

                    <Nav className="mr-md-5">
                        <UncontrolledDropdown nav inNavbar style={{}}>
                            <DropdownToggle nav caret className="link"  >
                                Catagories
                            </DropdownToggle>
                            <DropdownMenu right style={{ backgroundColor: '#F7F6F2', marginTop: '', }}>
                                <DropdownItem>
                                    <NavLink to='/breakfast' className="dItem" >Breakfast</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink to='/lunch' className="dItem">Lunch </NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink to='/shakes' className="dItem">Shakes </NavLink>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <NavLink to='/' className="dItem">All </NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        {links}
                    </Nav>

                </Navbar>

            </div>
        )
    }
}
export default connect(mapStateToProps)(Header);
