import React from 'react'
import './styles.css'

import CurveChart from './CurveChart'
import Card from './Card'
import BarChart from './BarChart'

import dashboardHelper from '../helpers/dashboardHelpers'

export default function Dashboard({ currCountryTimelineData, currCountrySummary, period }) {
    
    const countryTimeLineData = dashboardHelper.treatRawData(currCountryTimelineData)
    
    const formattedCurrCountry = dashboardHelper.formatCurrCountryArr(currCountrySummary)

    const percentages = dashboardHelper.calculatePercentages(currCountrySummary);

    return (

        <div>
            <div style={{alignItems: 'center'}}>

                <div className='grid'>

                    <div className='card-in-grid'><Card country={formattedCurrCountry} percentages={percentages} cardType={1}/></div>
                    <div className='card-in-grid'><Card country={formattedCurrCountry} percentages={percentages} cardType={2}/></div>
                    
                    <div className='charts'><CurveChart countryTimelineData={countryTimeLineData} period={period} curveType={1}/></div>
                    <div className='charts'><BarChart countryTimelineData={countryTimeLineData} period={period} barChartType={1}/></div>
                    
                    <div className='card-in-grid'><Card country={formattedCurrCountry} percentages={percentages} cardType={3}/></div>
                    <div className='card-in-grid'><Card country={formattedCurrCountry} percentages={percentages} cardType={4}/></div>
                    
                    <div className='charts'><CurveChart countryTimelineData={countryTimeLineData} period={period} curveType={2}/></div>
                    <div className='charts'><BarChart countryTimelineData={countryTimeLineData} period={period} barChartType={2}/></div>
                
                </div>
            </div>  
        </div>
    )
}