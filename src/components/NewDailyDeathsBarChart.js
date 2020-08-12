import React from 'react'
import '../../node_modules/react-vis/dist/style.css'
import { FlexibleXYPlot, VerticalBarSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines} from 'react-vis'

export default function NewDailyDeathsBarChart({data}) {
    
    let plotDataArr = []
    let dayCount = 0
    let dayDeaths = 0
    let accumulatedDeaths=0
    let yMax=0;

    data.forEach((entrie) => {
        dayDeaths = Number(entrie.deaths) - accumulatedDeaths;

        accumulatedDeaths = accumulatedDeaths + dayDeaths
        plotDataArr.push({x:dayCount, y:Number(dayDeaths)})
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
            <h5>New daily deaths</h5>
            <FlexibleXYPlot height={250} yDomain={[0, 1.25*yMax]}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <VerticalBarSeries data={mostRecentPlotDataArr}/>
                <XAxis title="Days"/>
                <YAxis title="New Deaths" />
            </FlexibleXYPlot>   
        </div>
    )
}
