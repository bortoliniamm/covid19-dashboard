import React from 'react'
import '../../node_modules/react-vis/dist/style.css'
import './styles.css'

import {FlexibleXYPlot, XAxis, YAxis, LineSeries, VerticalGridLines, HorizontalGridLines} from 'react-vis'

import curveHelper from '../helpers/curveHelpers'

export default function CurveChart({countryTimelineData, period, curveType}) {
    
    const chartParameters = curveHelper.getCurveParameters(countryTimelineData, period, curveType)
    
    function formatTicks(tick) {

        const entrieToChangeTick = chartParameters.mostRecentPlotDataArr.find((entrie) => {
            return entrie.x === tick
        })

        const newTick = entrieToChangeTick.tickDate
        
        return newTick
    }
    

    return (
        <div className="center">
            <h5>{chartParameters.title}</h5>
            <FlexibleXYPlot height={250} xDomain={[chartParameters.firstDayOfPeriod.x, chartParameters.lastDayOfPeriod.x]} yDomain={[chartParameters.firstDayOfPeriod.y, chartParameters.lastDayOfPeriod.y]}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis title={chartParameters.xLabel} tickFormat={formatTicks}  />
                <YAxis title={chartParameters.yLabel} tickFormat={v => v/1000}/>
                <LineSeries data={chartParameters.mostRecentPlotDataArr} />
            </FlexibleXYPlot>

        </div>
    )
}
