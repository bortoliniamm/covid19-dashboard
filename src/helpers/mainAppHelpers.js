import axios from 'axios'

async function fetchSummaryData() {
    
    const url = 'https://api.thevirustracker.com/free-api?countryTotals=ALL'
    
    const response = await axios.get(url)
    const rawData = response.data.countryitems[0]
    const arrData = Object.values(rawData)

    return arrData
}
  
  async function fetchTimelineData() {

    const url = 'https://thevirustracker.com/timeline/map-data.json';
    
    // Next url is an url to avoid cors issues
    const proxyurl = "https://cors-anywhere.herokuapp.com/"
    
    const response = await axios.get( proxyurl + url )
    const arrData = response.data.data

    return arrData
}

export default {fetchSummaryData, fetchTimelineData}