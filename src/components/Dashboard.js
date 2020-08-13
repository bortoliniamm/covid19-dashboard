import React from 'react'
import TotalCasesCurve from './TotalCasesCurve'
import NewDailyCasesBarChart from './NewDailyCasesBarChart'
import SummaryCard from './SummaryCard'
import CountryTodaySummary from './CountryTodaySummary'
import MoreInfoCard from './MoreInfoCard'
import ClosedCasesCard from './ClosedCasesCard'
import TotalDeathsCurve from './TotalDeathsCurve'
import NewDailyDeathsBarChart from './NewDailyDeathsBarChart'

import dashHelpers from '../helpers/dashboardHelpers'

export default function Dashboard({ timelineData, currCountry, period }) {
    
    const countryTimeLineData = dashHelpers.treatRawData(timelineData, currCountry)
    
    const formattedCurrCountry = dashHelpers.formatCurrCountryArr(currCountry)

    const percentages = dashHelpers.calculatePercentages(currCountry);

    return (

        <div>
            <div style={{alignItems: 'center'}}>

                <div className='grid'>
                    <div className='card-in-grid'><CountryTodaySummary country={formattedCurrCountry}/></div>
                    <div className='card-in-grid'><SummaryCard country={formattedCurrCountry} percentages={percentages}/></div>
                    <div><TotalCasesCurve data={countryTimeLineData} period={period}/></div>
                    <div><NewDailyCasesBarChart data={countryTimeLineData} period={period}/></div>
                    <div className='card-in-grid'><ClosedCasesCard country={formattedCurrCountry} percentages={percentages}/></div>
                    <div className='card-in-grid'><MoreInfoCard country={formattedCurrCountry}/></div>
                    <div><TotalDeathsCurve data={countryTimeLineData} period={period}/></div>
                    <div><NewDailyDeathsBarChart data={countryTimeLineData} period={period}/></div>
                </div>
            </div>  
        </div>
    )
}