import React from 'react'
import './styles.css'

export default function SummaryCard({country, percentages}) {

    return (
        <div className='card'>
         
            <div>
                <h3>Overview</h3>
            </div>
            <div style={{marginTop: '20px'}}>
                <div>
                    <div>Total cases </div>
                    <div className='values'>{country.total_cases}</div>
                </div>

                <div>
                    <div>Total deaths </div>
                    <div className='number-plus-percentage'>
                        <div className='values'>{country.total_deaths}</div>
                        <div className='percentage'>({percentages.deathsToTotalCases})</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

