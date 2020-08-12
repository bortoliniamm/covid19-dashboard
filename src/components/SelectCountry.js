import React from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default function SelectCountry({ data, currCountry }) {

    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    
    const placeholder = "CHOOSE A COUNTRY"

    const toggle = () => setDropdownOpen(prevState => !prevState);
    
    const handleChange = (event) => {

        const chosenCountry = event.target.innerText

        if (chosenCountry !== placeholder){
            const newCountry = data.find((country) => {
                return country.title === chosenCountry
            });
            currCountry(newCountry)
        }

    }


    return (
        <div>
                <Dropdown isOpen={dropdownOpen} toggle={toggle} onClick={handleChange}>
                    <DropdownToggle caret>
                        {placeholder}
                    </DropdownToggle>
                    <DropdownMenu>
                        {data.map((country) => {
                            return <DropdownItem>{country.title}</DropdownItem>
                        })}
                    </DropdownMenu>
                </Dropdown>

        </div>
    )
}
