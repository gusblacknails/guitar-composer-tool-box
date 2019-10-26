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

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/" className="logo">
          {/* <h1 className="mainTitle">The Guitar Composers ToolBox</h1> */}
          <img src={require("./images/logo_shadow.png")} className="logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/guitar-harmonizer/">Scale Harmonizer</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Chord Finder
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  {" "}
                  <Link
                    style={{ fontFamily: "sans-serif", color: "black" }}
                    to="/guitar-chord-finder/"
                  >
                    Guitar Chord Finder
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  {" "}
                  <Link
                    style={{ fontFamily: "sans-serif", color: "black" }}
                    to="/ukelele-chord-finder/"
                  >
                    Ukelele Chord Finder
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Articles
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  {" "}
                  <Link
                    style={{ fontFamily: "sans-serif", color: "black" }}
                    to="/triads_1/"
                  >
                    Triads, why are they so important?
                  </Link>
                </DropdownItem>
                <DropdownItem></DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link
                    style={{ fontFamily: "sans-serif", color: "black" }}
                    to="/privacyPolicy/"
                  >
                    Privacy Policy
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Interesting Sites
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="https://beat-it-music-machine.herokuapp.com/">
                  {" "}
                  Beat it! Music Machine
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
