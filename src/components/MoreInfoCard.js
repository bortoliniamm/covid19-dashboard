import React from 'react'

export default function MoreInfoCard({country}) {

    return (
        <div className="card">
            <div>
                <h3>More info</h3>
            </div>

            <div style={{marginTop: '20px'}}>
                
                <div>
                    <div>Total critical </div>
                    <div className='values'>{country.total_serious_cases}</div>
                </div>
                <div>
                    <div>Active </div>
                    <div className='values'>{country.total_active_cases}</div>
                </div>
            </div>    

        </div>
    )
}
