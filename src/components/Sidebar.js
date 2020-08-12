import React from 'react'
import { Button, Nav, NavItem, NavLink, Collapse, Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';

export default function Sidebar({countries, currCountry}) {

    const [isOpen, setIsOpen] = React.useState(false)

    const toggle = () => setIsOpen(!isOpen)

    const handleCountrySelect = (event) => {

        const chosenCountry = event.target.innerText
        const newCountry = countries.find((country) => {
            return country.title === chosenCountry
        });
        currCountry(newCountry)
    }

    const [collapsed, setCollapsed] = React.useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>

        <div>
            <Navbar light>
                <NavbarBrand href="/" className="mr-auto">List of countries   </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                    {countries.map((country) => {
                        return (
                            <NavItem>
                                <NavLink onClick={handleCountrySelect}>{country.title}</NavLink>
                            </NavItem>
                        )
                    })}
                </Nav>
                </Collapse>
            </Navbar>
        </div>

          {/* <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>COUNTRY</Button>
          <Collapse isOpen={isOpen}>
            <Nav vertical>
                {countries.map((country) => {
                    return (
                        <NavItem>
                            <NavLink onClick={handleCountrySelect}>{country.title}</NavLink>
                        </NavItem>
                    )
                })}
            </Nav>
          </Collapse> */}
        </div>
      )
}
