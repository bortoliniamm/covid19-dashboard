import React from 'react'
import CurveChart from './CurveChart'
import BarChart from './BarChart'
import './styles.css'

export default function ChartGrid({countryTimeLineData, period}) {
    return (
        <div className='chart-grid'>

            <div className='charts'>
                <CurveChart 
                    countryTimelineData={countryTimeLineData} 
                    period={period} 
                    curveType={1}/>
            </div>

            <div className='charts'>
                <BarChart 
                    countryTimelineData={countryTimeLineData} 
                    period={period} 
                    barChartType={1}/>
            </div>

            <div className='charts'>
                <CurveChart 
                    countryTimelineData={countryTimeLineData} 
                    period={period} 
                    curveType={2}/>
            </div>

            <div className='charts'>
                <BarChart 
                    countryTimelineData={countryTimeLineData} 
                    period={period} 
                    barChartType={2}/>
            </div>

            
        </div>
    )
}
