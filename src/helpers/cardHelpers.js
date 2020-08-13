function selectInfo (country, cardType, percentages) {
    
    let cardInfo = {}

    switch (cardType) {
        case 1:
            cardInfo.title = 'Today'

            cardInfo.info1 = 'Cases'
            cardInfo.value1 = country.total_new_cases_today
            cardInfo.percentage1 = ''
            cardInfo.showPercentage1 = false
    
            cardInfo.info2 = 'Deaths'
            cardInfo.value2 = country.total_new_deaths_today
            cardInfo.percentage2 = ''
            cardInfo.showPercentage2 = false
            break
        case 2:
            cardInfo.title = 'Overview'

            cardInfo.info1 = 'Total cases'
            cardInfo.value1 = country.total_cases
            cardInfo.percentage1 = ''
            cardInfo.showPercentage1 = false
    
            cardInfo.info2 = 'Total deaths'
            cardInfo.value2 = country.total_deaths
            cardInfo.percentage2 = percentages.deathsToTotalCases
            cardInfo.showPercentage2 = true
            
            break
        case 3:
            cardInfo.title = 'Closed'

            cardInfo.info1 = 'Deaths'
            cardInfo.value1 = country.total_deaths
            cardInfo.percentage1 = percentages.deathsToClosedCases
            cardInfo.showPercentage1 = true
            
    
            cardInfo.info2 = 'Recovered'
            cardInfo.value2 = country.total_recovered
            cardInfo.percentage2 = percentages.recoveredToClosedCases
            cardInfo.showPercentage2 = true
            
            break
        case 4:
            cardInfo.title = 'More info'

            cardInfo.info1 = 'Total critical'
            cardInfo.value1 = country.total_serious_cases
            cardInfo.percentage1 = ''
            cardInfo.showPercentage1 = false

            cardInfo.info2 = 'Active'
            cardInfo.value2 = country.total_active_cases
            cardInfo.percentage2 = ''
            cardInfo.showPercentage2 = false
            break
        default:

      }

    return cardInfo
}

export default {selectInfo}