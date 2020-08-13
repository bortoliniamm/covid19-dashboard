import React from 'react';
import '../node_modules/react-vis/dist/style.css'

import SelectCountry from './components/SelectCountry'
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'
import {Spinner} from 'reactstrap'
import SetPeriodButtons from './components/SetPeriodButtons';

import helpers from './helpers/mainAppHelpers'

export default function App() {

  const [allCountriesSummary, setAllCountriesSummary] = React.useState([])
  const [allCountriesTimelineData, setAllCountriesTimelineData] = React.useState([])
  const [currCountry, setCurrCountry] = React.useState()
  const [showDashboard, setShowDashboard] = React.useState(false)
  const [showSpinner, setShowSpinner] = React.useState(true)
  
  const [periodToCheck, setPeriodToCheck] = React.useState(0)

  async function initialLoad () {
    const auxAllCountriesSummary = await helpers.fetchSummaryData()
    setAllCountriesSummary(auxAllCountriesSummary)

    const auxAllCountriesTimelineData = await helpers.fetchTimelineData()
    setAllCountriesTimelineData(auxAllCountriesTimelineData)
  }
  
  const handleCountryChange = (country) => {
    setCurrCountry(country)
  }

  const handlePeriodChange = (newPeriod) => {
    setPeriodToCheck(newPeriod)
  }

  React.useEffect(() => {
      initialLoad();
  }, [])

  React.useEffect(() => {
    const initialCountry = allCountriesSummary.find(((country) => country.title === 'USA'))
    setCurrCountry(initialCountry)
  }, [allCountriesSummary])

  React.useEffect(() => {
    if(allCountriesSummary.length>0 && allCountriesTimelineData.length>0){
      setShowDashboard(true)
      setShowSpinner(false)
    }
  }, [allCountriesSummary, allCountriesTimelineData])

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
                        <div style={{marginTop: '25px'}}>
                          <div className='two-cols' style={{justifyContent: 'space-between'}}>
                            <div>
                              <SelectCountry data={allCountriesSummary} currCountry={handleCountryChange}/>
                            </div>
                            <div>
                              <SetPeriodButtons newPeriod={handlePeriodChange}/>
                            </div>
                          </div>
                            <Dashboard timelineData={allCountriesTimelineData} currCountry={currCountry} period={periodToCheck}/>
                        </div>
                    </div>
                </div>

                }
        </div>


      </div>
  )
}
