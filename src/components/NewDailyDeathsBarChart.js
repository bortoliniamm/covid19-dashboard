import React from 'react'
import '../../node_modules/react-vis/dist/style.css'
import { FlexibleXYPlot, VerticalBarSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines} from 'react-vis'

export default function NewDailyDeathsBarChart({data, period}) {
    
    let plotDataArr = []
    let dayCount = 0
    let dayDeaths = 0
    let accumulatedDeaths = 0
    let maxCases = 0

    data.forEach((entrie) => {
        dayDeaths = Number(entrie.deaths) - accumulatedDeaths;

        accumulatedDeaths = accumulatedDeaths + dayDeaths
        plotDataArr.push({x:dayCount, y:Number(dayDeaths)})
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
            <h5>Daily deaths</h5>
            <FlexibleXYPlot height={250} yDomain={[0, 1.1*maxCases]}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <VerticalBarSeries data={mostRecentPlotDataArr}/>
                <XAxis title="Days"/>
                <YAxis title="New Deaths" />
            </FlexibleXYPlot>   
        </div>
    )
}
