import React from 'react'
import './styles.css'

import { Nav, NavItem, NavLink } from 'reactstrap';
import CountryTextInput from './CountryTextInput';

export default function Sidebar({allCountriesSummary, newCurrCountry}) {
    
    const [filteredCountries, setFilteredCountries] = React.useState(allCountriesSummary)

    const handleCountryClick = (event) => {

        const chosenCountryName = event.target.innerText
        const newCountry = allCountriesSummary.find((country) => {
            return country.title === chosenCountryName
        });

        newCurrCountry(newCountry)
    }

    const handleFilterInput = (filter) => {

        if(filter==='') {
            setFilteredCountries(allCountriesSummary)
        }else{
            const auxFilteredCountries = allCountriesSummary.filter((country) => {
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
            <div className='outer-sidebar'>
                <div style={{padding: '5px'}}><CountryTextInput filter={handleFilterInput}/></div>
                    <div className='inner-sidebar'>
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
        </div>
      )
}
