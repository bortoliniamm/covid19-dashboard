import React from 'react'
import './styles.css'

import { Nav, NavItem, NavLink } from 'reactstrap';
import CountryTextInput from './CountryTextInput';

export default function Sidebar({countries, currCountry}) {
    
    const [filteredCountries, setFilteredCountries] = React.useState(countries)

    const handleCountryClick = (event) => {

        const chosenCountry = event.target.innerText
        const newCountry = countries.find((country) => {
            return country.title === chosenCountry
        });

        currCountry(newCountry)
    }

    const handleFilterInput = (filter) => {
        if(filter==='') {
            setFilteredCountries(countries)
        }else{
            let auxFilteredCountries = countries.filter((country) => {
                if(country.title !== undefined){
                    const lcFilter = filter.toLowerCase()
                    const lcCountryTitle = country.title.toLowerCase()
                    return lcCountryTitle.includes(lcFilter) === true
                }
            })

            setFilteredCountries(auxFilteredCountries)
        }
    }

    return (
        <div>
            <h4>COUNTRIES</h4>
            <div className='inner-sidebar'>
                <div style={{padding: '5px'}}><CountryTextInput filter={handleFilterInput}/></div>
                <Nav vertical>
                        {filteredCountries.map((country) => {
                                return(
                                    <NavItem>
                                        <NavLink href="#" onClick={handleCountryClick}>{country.title}</NavLink>
                                    </NavItem>
                                )
                            })
                        }
                </Nav>
            </div>
        </div>
      )
}
