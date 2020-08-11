import React from 'react'

export default function SelectCountry({ data, currCountry }) {

    const handleChange = (event) => {
        const newCountry = data.find((country) => {
            return country.title === event.target.value
        });
        currCountry(newCountry)
    }

    return (
        <div>
            <select className="browser-default" onChange={handleChange}>
            <option value="" disabled selected hidden>Choose a country</option>
                {data.map((country) => {
                    return <option key={country.ourid}>{country.title}</option>
                })}
            </select>
        </div>
    )
}
