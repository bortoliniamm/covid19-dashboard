function getBarChartData(timelineData, period, barChartType) {

    let chartInfo = {}

    let plotDataArr = []
    let dayCount = 0
    let dayCases = 0
    let accumulatedCases = 0
    let yMax = 0

    timelineData.forEach((entrie) => {
        
        if(barChartType===1){
            dayCases = Number(entrie.cases) - accumulatedCases
        }else if(barChartType===2){
            dayCases = Number(entrie.deaths) - accumulatedCases
        }

        accumulatedCases = accumulatedCases + dayCases
        plotDataArr.push({x:dayCount, y:Number(dayCases), tickDate: entrie.dayAndMonth})
        dayCount++;
    })

    const mostRecentPlotDataArr = plotDataArr.slice(-period)
    chartInfo.mostRecentPlotDataArr = mostRecentPlotDataArr

    mostRecentPlotDataArr.forEach((entrie) => {
        if(entrie.y>yMax){
            yMax=entrie.y
        }
    })
    chartInfo.yMax=yMax

    switch (barChartType) {
        case 1:
            chartInfo.title = 'Daily cases'

            chartInfo.xLabel = 'Day'
            chartInfo.yLabel = 'New Cases (x10^3)'
            break
        case 2:
            chartInfo.title = 'Daily deaths'
            
            chartInfo.xLabel = 'Day'
            chartInfo.yLabel = 'Deaths'            
            break
        default:

    }

    return chartInfo
    
}

export default {getBarChartData}