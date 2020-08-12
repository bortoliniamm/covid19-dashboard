import React from 'react'
import './styles.css'

export default function CountryTodaySummary({country}) {
    return (
        <div className="card">
            <div>
                <h3>Today</h3>
            </div>

            <div style={{marginTop: '20px'}}>
                <div>
                    <div>New cases </div>
                    <div className='values'>{country.total_new_cases_today}</div>
                </div>
                
                <div>
                    <div>New deaths </div>
                    <div className='values'>{country.total_new_deaths_today}</div>
                </div>
            </div>    

        </div>
    )
}