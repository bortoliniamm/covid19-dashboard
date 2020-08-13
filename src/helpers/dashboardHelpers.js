const numberStyle = new Intl.NumberFormat('en-US')

const treatRawData = (timelineData, currCountry) => {

    let countryTimeLineData = timelineData.filter((entrie) => {
        return entrie.countrycode === currCountry.code
    })

    
    // adjusting date format so it can be used
    countryTimeLineData.forEach((entrie) => {
        
        let rawDate = entrie.date
        const strArr = rawDate.split("/")

        entrie.day = strArr[1].padStart(2, '0')
        entrie.month = strArr[0].padStart(2, '0')
        entrie.year = `20${strArr[2]}`

        const newDate= `${entrie.year}${entrie.month}${entrie.day}`
        entrie.formattedDate=newDate

    })

    countryTimeLineData.sort((a,b)=>{
        return a.formattedDate-b.formattedDate
    })

    return countryTimeLineData
}

const formatCurrCountryArr = (currCountry) => {
    const {code, 
        ourid, 
        source, 
        title, 
        total_active_cases, 
        total_cases, 
        total_deaths, 
        total_new_cases_today, 
        total_new_deaths_today, 
        total_recovered, 
        total_serious_cases, 
        total_unresolved} = currCountry
    
    const closed_cases = total_recovered + total_deaths

    const formattedCurrCountry = {
            code,
            ourid,
            source,
            title,
            'total_active_cases': numberStyle.format(total_active_cases),
            'total_cases': numberStyle.format(total_cases),
            'total_deaths': numberStyle.format(total_deaths),
            'total_new_cases_today': numberStyle.format(total_new_cases_today),
            'total_new_deaths_today': numberStyle.format(total_new_deaths_today),
            'total_recovered': numberStyle.format(total_recovered),
            'total_serious_cases': numberStyle.format(total_serious_cases),
            'total_unresolved': numberStyle.format(total_unresolved),
            'total_closed_cases': numberStyle.format(closed_cases),
    }

    return formattedCurrCountry

}

const calculatePercentages = (currCountry) => {
    
    const {
        total_cases, 
        total_deaths, 
        total_recovered} = currCountry

    const closed_cases = total_recovered + total_deaths

    const rawPercentages = {
        deathsToTotalCases: total_deaths/total_cases,
        deathsToClosedCases: total_deaths/closed_cases,
        recoveredToClosedCases: total_recovered/closed_cases
    }

    const formattedPercentages = {
        deathsToTotalCases: (100*rawPercentages.deathsToTotalCases).toFixed(2) + "%",
        deathsToClosedCases: (100*rawPercentages.deathsToClosedCases).toFixed(2) + "%",
        recoveredToClosedCases: (100*rawPercentages.recoveredToClosedCases).toFixed(2) + "%"
    }
    
    return formattedPercentages

}

export default { treatRawData, formatCurrCountryArr, calculatePercentages}