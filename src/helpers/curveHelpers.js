function selectInfo(curveType, timelineData, period) {
    
    let chartInfo = {}

    let plotDataArr = []
    let dayCount = 0
    let maxCases = 0



    timelineData.forEach((entrie) => {
        let yValue = 0
        if(curveType===1){
            yValue=entrie.cases
        }else if(curveType===2){
            yValue=entrie.deaths
        }
        plotDataArr.push({x:dayCount, y:Number(yValue), tickDate: entrie.dayAndMonth})
        dayCount++;
    })
    
    const mostRecentPlotDataArr = plotDataArr.slice(-period)
    chartInfo.mostRecentPlotDataArr=mostRecentPlotDataArr

    mostRecentPlotDataArr.forEach((entrie) => {
        if (entrie.y > maxCases){
            maxCases=entrie.y
        }
    })
    chartInfo.maxCases=maxCases

    const firstDayOfPeriod = mostRecentPlotDataArr[0]
    chartInfo.firstDayOfPeriod = firstDayOfPeriod
    
    const lastDayOfPeriod = mostRecentPlotDataArr[mostRecentPlotDataArr.length - 1]
    chartInfo.lastDayOfPeriod = lastDayOfPeriod

    switch (curveType) {
        case 1:
            chartInfo.title = 'Total accumulated cases'

            chartInfo.xLabel = 'Day'
            chartInfo.yLabel = 'Cases (x10^3)'
            break
        case 2:
            chartInfo.title = 'Total accumulated deaths'
            
            chartInfo.xLabel = 'Day'
            chartInfo.yLabel = 'Deaths (x10^3)'
            break
        default:
    }

    return chartInfo
}   

export default {selectInfo}