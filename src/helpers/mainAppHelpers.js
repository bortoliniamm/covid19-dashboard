import axios from 'axios'

async function fetchSummaryData() {
    
    const res = await axios.get('https://api.thevirustracker.com/free-api?countryTotals=ALL')
    const rawData = res.data.countryitems[0]
    const arrData = Object.values(rawData)

    return arrData;
}
  
  async function fetchTimelineData() {

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = 'https://thevirustracker.com/timeline/map-data.json';
    const res = await axios.get(proxyurl+url)
    const arrData = res.data.data;

    return arrData;
}

export default {fetchSummaryData, fetchTimelineData}