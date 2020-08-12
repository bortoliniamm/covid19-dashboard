import React from 'react'
import '../../node_modules/react-vis/dist/style.css'
import {FlexibleXYPlot, XAxis, YAxis, LineSeries, VerticalGridLines, HorizontalGridLines} from 'react-vis'

export default function TotalCasesCurve({data}) {

    let plotDataArr = []
    let dayCount = 0;
    data.forEach((entrie) => {
        plotDataArr.push({x:dayCount, y:Number(entrie.cases)})
        dayCount++;
    })

    const lastDay = plotDataArr[plotDataArr.length - 1]

    return (
        <div className="center">
            <h5>Total accumulated cases</h5>
            <FlexibleXYPlot height={250} xDomain={[0, lastDay.x]} yDomain={[0, lastDay.y]}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis title="Days" />
                <YAxis title="Cases (x 10^3)" tickFormat={v => v/1000}/>
                <LineSeries data={plotDataArr} />
            </FlexibleXYPlot>

        </div>
    )
}
