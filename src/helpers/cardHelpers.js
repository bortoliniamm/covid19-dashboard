function getCardParameters (country, percentages, cardType) {
    
    let title = ''
    
    let info1 = ''
    let value1 = ''
    let percentage1 = ''
    let showPercentage1 = false
    
    let info2 = ''
    let value2 = ''
    let percentage2 = ''
    let showPercentage2 = false
    
    //cardType: 1 for today summary, 2 for country overview
    //3 for closed cases and 4 for more info
    switch (cardType) {
        case 1:
            title = 'Today'

            info1 = 'Cases'
            value1 = country.total_new_cases_today
            percentage1 = ''
            showPercentage1 = false
    
            info2 = 'Deaths'
            value2 = country.total_new_deaths_today
            percentage2 = ''
            showPercentage2 = false
            break
        case 2:
            title = 'Overview'

            info1 = 'Total cases'
            value1 = country.total_cases
            percentage1 = ''
            showPercentage1 = false
    
            info2 = 'Total deaths'
            value2 = country.total_deaths
            percentage2 = percentages.deathsToTotalCases
            showPercentage2 = true
            
            break
        case 3:
            title = 'Closed'

            info1 = 'Deaths'
            value1 = country.total_deaths
            percentage1 = percentages.deathsToClosedCases
            showPercentage1 = true
            
    
            info2 = 'Recovered'
            value2 = country.total_recovered
            percentage2 = percentages.recoveredToClosedCases
            showPercentage2 = true
            
            break
        case 4:
            title = 'More info'

            info1 = 'Total critical'
            value1 = country.total_serious_cases
            percentage1 = ''
            showPercentage1 = false

            info2 = 'Active'
            value2 = country.total_active_cases
            percentage2 = ''
            showPercentage2 = false
            break
        default:

      }

      const cardParameters = {
        'title': title,
        'info1': info1,
        'value1': value1,
        'percentage1': percentage1,
        'showPercentage1': showPercentage1,
        'info2': info2,
        'value2': value2,
        'percentage2': percentage2,
        'showPercentage2': showPercentage2,
    }

    return cardParameters
}

export default {getCardParameters}