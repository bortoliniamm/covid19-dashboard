function getCurveParameters(countryTimelineData, period, curveType) {
    
    let title = ''
    let xLabel = ''
    let yLabel = ''
    
    //curveType: 1 for total cases and 2 for total deaths
    switch (curveType) {
        case 1:
            title = 'Total accumulated cases'

            xLabel = 'Day'
            yLabel = 'Cases (x10^3)'
            break
        case 2:
            title = 'Total accumulated deaths'
            
            xLabel = 'Day'
            yLabel = 'Deaths (x10^3)'
            break
        default:
    }

    let auxCountryTimeLineData = []
    let day = 0
    countryTimelineData.forEach((entrie) => {
        
        let yValueAux = 0

        if(curveType === 1) {
            yValueAux = entrie.cases
        }else if(curveType === 2) {
            yValueAux = entrie.deaths
        }

        auxCountryTimeLineData.push({x:day, y:Number(yValueAux), tickDate: entrie.dayAndMonth})
        
        day++;
    })
    
    const mostRecentTimelineData = auxCountryTimeLineData.slice(-period)

    let yMax=0
    mostRecentTimelineData.forEach((entrie) => {
        if (entrie.y > yMax){
            yMax=entrie.y
        }
    })
    
    const firstDayOfPeriod = mostRecentTimelineData[0]
    
    const lastDayOfPeriod = mostRecentTimelineData[mostRecentTimelineData.length - 1]
    
    const chartParameters = {
        "title": title,
        "xLabel": xLabel,
        "yLabel": yLabel,
        "yMax": yMax,
        "mostRecentPlotDataArr": mostRecentTimelineData,
        "firstDayOfPeriod": firstDayOfPeriod,
        "lastDayOfPeriod": lastDayOfPeriod,
    }

    return chartParameters
}   

export default {getCurveParameters}