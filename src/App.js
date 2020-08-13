import React from 'react';
import '../node_modules/react-vis/dist/style.css'
import './components/styles.css'

import {Spinner} from 'reactstrap'

import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'
import SetPeriodButtons from './components/SetPeriodButtons';

import helpers from './helpers/mainAppHelpers'

export default function App() {

  const [allCountriesSummary, setAllCountriesSummary] = React.useState([])
  const [allCountriesTimelineData, setAllCountriesTimelineData] = React.useState([])
  const [currCountry, setCurrCountry] = React.useState()
  const [currCountryTimelineData, setCurrCountryTimelineData] = React.useState([])
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

    if(allCountriesSummary.length>0 && allCountriesTimelineData.length>0 && currCountry!==undefined){
      const initialCountryTimelineData = allCountriesTimelineData.filter((entrie) => {
          return entrie.countrycode === currCountry.code
      })

      setCurrCountryTimelineData(initialCountryTimelineData)
      setShowDashboard(true)
      setShowSpinner(false)
    }
  }, [allCountriesSummary, allCountriesTimelineData, currCountry])

  return (

      <div className='whole-page'>
          {showSpinner &&
            <div className='spinner' style={{position: 'relative'}}>
                <div className = 'center'>
                    <Spinner animation="border" variant="primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            </div>
          }  

          {showDashboard &&

                <div>
                    <div>
                        <div className='two-cols' style={{padding: '10px', justifyContent: 'space-between', width: '95%'}}>
                            <div>
                                <div><h1>COVID-19 in {currCountry.title}</h1></div>
                                <div style={{marginLeft: '15px'}}><h4>{currCountryTimelineData.length} days of pandemic</h4></div>
                            </div>
                            <div><SetPeriodButtons newPeriod={handlePeriodChange}/></div>
                        </div>
                        {/* <div className='two-cols' style={{justifyContent: 'space-between', width: '95%'}}>
                        </div> */}
                    </div>
                    <div className='main-page'>
                        <div className='container' style={{marginTop: '5px'}}>
                            <Sidebar countries={allCountriesSummary} currCountry={handleCountryChange}/>
                        </div>
                        <div className='container'>
                            <div className='center'>      
                                <Dashboard timelineData={currCountryTimelineData} currCountry={currCountry} period={periodToCheck}/>
                            </div>
                        </div>
                    </div>
                </div>

          }
      </div>
      
  )
}
