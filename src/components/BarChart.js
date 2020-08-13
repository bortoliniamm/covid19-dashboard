import React from 'react'
import './styles.css'
import '../../node_modules/react-vis/dist/style.css'
import barChartHelper from '../helpers/barChartHelper'

import { FlexibleXYPlot, VerticalBarSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines} from 'react-vis'

export default function BarChart({timelineData, period, barChartType}) {
    
    function formatTicks(tick) {

        const entrieToChangeTick = chartInfo.mostRecentPlotDataArr.find((entrie) => {
            return entrie.x === tick
        })

        const newTick = entrieToChangeTick.tickDate
        
        return newTick
    }   

    const chartInfo = barChartHelper.getBarChartData(timelineData, period, barChartType)

    return (
        <div className="center">
            <h5>{chartInfo.title}</h5>
            <FlexibleXYPlot height={250} yDomain={[0, 1.1*chartInfo.yMax]}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <VerticalBarSeries data={chartInfo.mostRecentPlotDataArr}/>
                <XAxis tickFormat={formatTicks} title="Days"/>
                <YAxis title="New Cases (x 10^3)" tickFormat={v => v/1000} />
            </FlexibleXYPlot>   
        </div>
    )
}
