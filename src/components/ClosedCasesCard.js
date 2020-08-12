import React from 'react'

export default function ClosedCasesCard({country, percentages}) {
    return (
        <div className="card">
            <div>
                <h3>Closed</h3>
            </div>

            <div style={{marginTop: '20px'}}>

                <div>
                    <div>Deaths </div>
                    <div className='number-plus-percentage'>
                        <div className='values'>{country.total_deaths}</div>
                        <div className='percentage'>({percentages.deathsToClosedCases})</div>
                    </div>
                </div>
                
                <div>
                    <div>Recovered </div>
                    <div className='number-plus-percentage'>
                        <div className='values'>{country.total_recovered}</div>
                        <div className='percentage'>({percentages.recoveredToClosedCases})</div>
                    </div>
                </div>
                
            </div>    

        </div>
    )
}
