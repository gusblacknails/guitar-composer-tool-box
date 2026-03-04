import React, { useState } from "react"
import { Link } from "gatsby"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import './css/navBar.scss'
import logo from "./images/logo_shadow.png"

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className="">
      <Navbar  expand="md">
        <NavbarBrand href="/" className="logo">
          {/* <h1 className="mainTitle">The Guitar Composers ToolBox</h1> */}
          <img src={logo} alt="Guitar Composers Toolbox – home" className="logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} aria-label="Abrir o cerrar menú de navegación" />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/guitar-harmonizer">Scale Harmonizer</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret id="dropdown-chords" aria-haspopup="true">
                Chords Finder
              </DropdownToggle>
              <DropdownMenu right aria-labelledby="dropdown-chords" role="menu">
                <DropdownItem tag="div" role="none">
                  <Link
                    style={{ fontFamily: "sans-serif", color: "black" }}
                    to="/guitar-chord-finder"
                    role="menuitem"
                  >
                    Guitar Chords Finder
                  </Link>
                </DropdownItem>
                <DropdownItem tag="div" role="none">
                  <Link
                    style={{ fontFamily: "sans-serif", color: "black" }}
                    to="/ukulele-chord-finder"
                    role="menuitem"
                  >
                    Ukulele Chords Finder
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret id="dropdown-articles" aria-haspopup="true">
                Articles
              </DropdownToggle>
              <DropdownMenu right aria-labelledby="dropdown-articles" role="menu">
                <DropdownItem tag="div" role="none">
                  <Link
                    style={{ fontFamily: "sans-serif", color: "black" }}
                    to="/triads-why-are-important"
                    role="menuitem"
                  >
                    Triads, why are they so important?
                  </Link>
                </DropdownItem>
                <DropdownItem tag="div" role="none">
                  <Link
                    style={{ fontFamily: "sans-serif", color: "black" }}
                    to="/what-is-this-about"
                    role="menuitem"
                  >
                    What is this site about?
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem tag="div" role="none">
                  <Link
                    style={{ fontFamily: "sans-serif", color: "black" }}
                    to="/privacyPolicy"
                    role="menuitem"
                  >
                    Privacy Policy
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret id="dropdown-sites" aria-haspopup="true">
                Interesting Sites
              </DropdownToggle>
              <DropdownMenu right aria-labelledby="dropdown-sites" role="menu">
                <DropdownItem tag="div" role="none">
                  <a href="https://beat-it-music-machine.herokuapp.com/" target="_blank" rel="noopener noreferrer" role="menuitem" style={{ fontFamily: "sans-serif", color: "black" }}>
                  {" "}
                  Beat it! Music Machine
                  </a>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar
