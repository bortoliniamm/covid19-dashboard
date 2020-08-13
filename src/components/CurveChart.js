import React from 'react'
import './styles.css'
import '../../node_modules/react-vis/dist/style.css'
import curveHelper from '../helpers/curveHelpers'

import {FlexibleXYPlot, XAxis, YAxis, LineSeries, VerticalGridLines, HorizontalGridLines} from 'react-vis'

export default function CurveChart({timelineData, period, curveType}) {

    function formatTicks(tick) {

        const entrieToChangeTick = chartInfo.mostRecentPlotDataArr.find((entrie) => {
            return entrie.x === tick
        })

        const newTick = entrieToChangeTick.tickDate
        
        return newTick
    }
    
    const chartInfo = curveHelper.selectInfo(curveType, timelineData, period)

    return (
        <div className="center">
            <h5>{chartInfo.title}</h5>
            <FlexibleXYPlot height={250} xDomain={[chartInfo.firstDayOfPeriod.x, chartInfo.lastDayOfPeriod.x]} yDomain={[chartInfo.firstDayOfPeriod.y, chartInfo.lastDayOfPeriod.y]}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis title={chartInfo.xLabel} tickFormat={formatTicks}  />
                <YAxis title={chartInfo.yLabel} tickFormat={v => v/1000}/>
                <LineSeries data={chartInfo.mostRecentPlotDataArr} />
            </FlexibleXYPlot>

        </div>
    )
}
