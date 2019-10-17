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
        <NavbarBrand href="/">
          <h1 className="mainTitle">The Guitar Composers ToolBox</h1>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Chord Finder</NavLink>
            </NavItem>

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
                    Triads, why they are so important?
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
