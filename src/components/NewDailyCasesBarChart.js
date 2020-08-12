import React from 'react'
import '../../node_modules/react-vis/dist/style.css'
import { FlexibleXYPlot, VerticalBarSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines} from 'react-vis'

export default function NewDailyCasesBarChart({data}) {

    let plotDataArr = []
    let dayCount = 0
    let dayCases = 0
    let accumulatedCases=0
    let yMax=0;

    data.forEach((entrie) => {
        dayCases = Number(entrie.cases) - accumulatedCases;

        accumulatedCases = accumulatedCases + dayCases
        plotDataArr.push({x:dayCount, y:Number(dayCases)})
        dayCount++;

    })

    const mostRecentPlotDataArr = plotDataArr.slice(-30)

    mostRecentPlotDataArr.forEach((entrie) => {
        if(entrie.y>yMax){
            yMax=entrie.y
        }
    })

    return (
        <div className="center">
            <h5>New daily cases</h5>
            <FlexibleXYPlot height={250} yDomain={[0, 1.25*yMax]}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <VerticalBarSeries data={mostRecentPlotDataArr}/>
                <XAxis title="Days"/>
                <YAxis title="New Cases (x 10^3)" tickFormat={v => v/1000} />
            </FlexibleXYPlot>   
        </div>
    )
}
