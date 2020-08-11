import React from 'react';
import '../node_modules/react-vis/dist/style.css';
import TotalCasesCurve from './components/TotalCasesCurve';
import SelectCountry from './components/SelectCountry';

export default function App() {

  const [summaryData, setSummaryData] = React.useState([])
  const [timelineData, setTimelineData] = React.useState([])
  const [currCountry, setCurrCountry] = React.useState()
  
  async function fetchSummaryData() {
    const res = await fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL');
    const json = await res.json();
    const rawData = json.countryitems[0];
    const arrData = Object.values(rawData)
    setSummaryData(arrData);
  }
  
  async function fetchTimelineData() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = 'https://thevirustracker.com/timeline/map-data.json';
    const res = await fetch(proxyurl+url);
    const json = await res.json();
    const rawData = json.data;
    setTimelineData(rawData);
  }
  

  const handleCountryChange = (country) => {
    setCurrCountry(country);
  }

  React.useEffect(() => {
    fetchSummaryData()
    fetchTimelineData()
  }, [])

  React.useEffect(() => {
    const initialCountry = summaryData.find(((country) => country.title === 'Brazil'))
    setCurrCountry(initialCountry)
  }, [summaryData])

  return (
      <div className='container'>

        <div className='center'>
            <h1>COVID-19</h1>
              
            <SelectCountry data={summaryData} currCountry={handleCountryChange}/>
            <TotalCasesCurve data={timelineData} currCountry={currCountry}/>

            {summaryData.map((country) => {
                  return <div>{country.title}</div>
            })}
            
        </div>

      </div>
  )
}
