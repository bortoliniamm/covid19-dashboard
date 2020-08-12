import React from 'react';
import '../node_modules/react-vis/dist/style.css'

import SelectCountry from './components/SelectCountry'
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'
import {Spinner} from 'reactstrap'

export default function App() {

  const [summaryData, setSummaryData] = React.useState([])
  const [timelineData, setTimelineData] = React.useState([])
  const [currCountry, setCurrCountry] = React.useState()
  const [showDashboard, setShowDashboard] = React.useState(false)
  const [showSpinner, setShowSpinner] = React.useState(true)
  
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
  // }

  React.useEffect(() => {
    fetchSummaryData()
    fetchTimelineData()
  }, [])

  React.useEffect(() => {
    const initialCountry = summaryData.find(((country) => country.title === 'USA'))
    setCurrCountry(initialCountry)
  }, [summaryData])

  React.useEffect(() => {
    if(summaryData.length>0 && timelineData.length>0){
      setShowDashboard(true)
      setShowSpinner(false)
    }
  }, [summaryData, timelineData])

  return (
      <div className='container'>

        <div className='center'>
            
            {showSpinner &&
              <div style={{marginTop: '300px'}}>
                  <Spinner animation="border" variant="primary" role="status">
                      <span className="sr-only">Loading...</span>
                  </Spinner>
              </div>
            }            
            {showDashboard && 
                <div>
                    <h1>COVID-19 in {currCountry.title}</h1>
                    <div>
                    {/* <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{marginRight: '100px'}}>
                            <Sidebar countries={summaryData} currCountry={handleCountryChange}/>
                        </div> */}
                        <div style={{marginTop: '25px'}}>
                          <div className='two-cols'>
                            <SelectCountry data={summaryData} currCountry={handleCountryChange}/>
                          </div>
                            <Dashboard summaryData={summaryData} timelineData={timelineData} currCountry={currCountry} />
                        </div>
                    </div>
                </div>

                }
        </div>


      </div>
  )
}
