import React from 'react'
import './styles.css'

import CurveChart from './CurveChart'
import Card from './Card'
import BarChart from './BarChart'

import dashHelpers from '../helpers/dashboardHelpers'

export default function Dashboard({ timelineData, currCountry, period }) {
    
    const countryTimeLineData = dashHelpers.treatRawData(timelineData, currCountry)
    
    const formattedCurrCountry = dashHelpers.formatCurrCountryArr(currCountry)

    const percentages = dashHelpers.calculatePercentages(currCountry);

    return (

        <div>
            <div style={{alignItems: 'center'}}>

                <div className='grid'>

                    <div className='card-in-grid'><Card country={formattedCurrCountry} cardType={1} percentages={percentages}/></div>
                    <div className='card-in-grid'><Card country={formattedCurrCountry} cardType={2} percentages={percentages}/></div>
                    
                    <div className='charts'><CurveChart timelineData={countryTimeLineData} period={period} curveType={1}/></div>
                    <div className='charts'><BarChart timelineData={countryTimeLineData} period={period} barChartType={1}/></div>
                    
                    <div className='card-in-grid'><Card country={formattedCurrCountry} cardType={3} percentages={percentages}/></div>
                    <div className='card-in-grid'><Card country={formattedCurrCountry} cardType={4} percentages={percentages}/></div>
                    
                    <div className='charts'><CurveChart timelineData={countryTimeLineData} period={period} curveType={2}/></div>
                    <div className='charts'><BarChart timelineData={countryTimeLineData} period={period} barChartType={2}/></div>
                
                </div>
            </div>  
        </div>
    )
}