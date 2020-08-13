import React from 'react'
import '../../node_modules/react-vis/dist/style.css'
import { FlexibleXYPlot, VerticalBarSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines} from 'react-vis'

export default function NewDailyCasesBarChart({data, period}) {

    let plotDataArr = []
    let dayCount = 0
    let dayCases = 0
    let accumulatedCases = 0
    let maxCases = 0

    data.forEach((entrie) => {
        dayCases = Number(entrie.cases) - accumulatedCases

        accumulatedCases = accumulatedCases + dayCases
        plotDataArr.push({x:dayCount, y:Number(dayCases)})
        dayCount++;
    })

    const mostRecentPlotDataArr = plotDataArr.slice(-period)

    mostRecentPlotDataArr.forEach((entrie) => {
        if(entrie.y>maxCases){
            maxCases=entrie.y
        }
    })

    return (
        <div className="center">
            <h5>Daily cases</h5>
            <FlexibleXYPlot height={250} yDomain={[0, 1.1*maxCases]}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <VerticalBarSeries data={mostRecentPlotDataArr}/>
                <XAxis title="Days"/>
                <YAxis title="New Cases (x 10^3)" tickFormat={v => v/1000} />
            </FlexibleXYPlot>   
        </div>
    )
}
