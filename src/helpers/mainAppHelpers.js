async function fetchSummaryData() {
    const res = await fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL');
    const json = await res.json();
    const rawData = json.countryitems[0];
    const arrData = Object.values(rawData)

    return arrData;
}
  
  async function fetchTimelineData() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = 'https://thevirustracker.com/timeline/map-data.json';
    const res = await fetch(proxyurl+url);
    const json = await res.json();
    const rawData = json.data;

    return rawData;
}

export default {fetchSummaryData, fetchTimelineData}