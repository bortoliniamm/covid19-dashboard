import React from 'react'
import '../../node_modules/react-vis/dist/style.css'
import {FlexibleXYPlot, XAxis, YAxis, LineSeries, VerticalGridLines, HorizontalGridLines} from 'react-vis'

export default function TotalDeathsCurve({data, period}) {

    let plotDataArr = []
    let dayCount = 0
    let maxCases = 0

    data.forEach((entrie) => {
        plotDataArr.push({x:dayCount, y:Number(entrie.deaths)})
        dayCount++;
    })

    const mostRecentPlotDataArr = plotDataArr.slice(-period)

    mostRecentPlotDataArr.forEach((entrie) => {
        if (entrie.y > maxCases){
            maxCases=entrie.y
        }
    })

    const firstDayOfPeriod = mostRecentPlotDataArr[0]
    const lastDayOfPeriod = mostRecentPlotDataArr[mostRecentPlotDataArr.length - 1]

    return (
        <div className="center">
            <h5>Total accumulated deaths</h5>
            <FlexibleXYPlot height={250} xDomain={[firstDayOfPeriod.x, lastDayOfPeriod.x]} yDomain={[firstDayOfPeriod.y, lastDayOfPeriod.y]}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis title="Days" />
                <YAxis title="Deaths (x 10^3)" tickFormat={v => v/1000}/>
                <LineSeries data={mostRecentPlotDataArr} />
            </FlexibleXYPlot>

        </div>
    )
}
