function treatPieChartData(percentages){
    
    const { deathsToClosedCases, recoveredToClosedCases, strDeathsToClosedCases, strRecoveredToClosedCases } = percentages

    const deathsAngle = (deathsToClosedCases/100)*360
    const recoveredAngle = (recoveredToClosedCases/100)*360
    
    const deathsLabel = `Deaths ${deathsToClosedCases}%`
    const recoveredLabel = `Recovered ${recoveredToClosedCases}%`

    const plotData = [{label: deathsLabel, angle: deathsAngle}, {label: recoveredLabel, angle: recoveredAngle}]

    return plotData
}

export default {treatPieChartData}