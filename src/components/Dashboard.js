import React from 'react'
import './styles.css'

import CardGrid from './CardGrid'
import ChartGrid from './ChartGrid'

import dashboardHelper from '../helpers/dashboardHelpers'

export default function Dashboard({ currCountryTimelineData, currCountrySummary, period }) {
    
    const countryTimeLineData = dashboardHelper.treatRawData(currCountryTimelineData)
    
    const formattedCurrCountry = dashboardHelper.formatCurrCountryArr(currCountrySummary)

    const percentages = dashboardHelper.calculatePercentages(currCountrySummary);

    return (

  
            <div className='my-dashboard' style={{alignItems: 'center'}}>

                <div className='custom-main-grid'>

                    <CardGrid country={formattedCurrCountry} percentages={percentages} />
                    <ChartGrid countryTimeLineData={countryTimeLineData} period={period} />
                    
                </div>
            </div>  

    )
}