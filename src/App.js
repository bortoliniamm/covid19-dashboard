import React from 'react';
import '../node_modules/react-vis/dist/style.css'
import './components/styles.css'

import {Spinner} from 'reactstrap'

import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'
import SetPeriodButtons from './components/SetPeriodButtons';

import appHelper from './helpers/mainAppHelpers'

export default function App() {

  const [allCountriesSummary, setAllCountriesSummary] = React.useState([])
  const [allCountriesTimelineData, setAllCountriesTimelineData] = React.useState([])

  const [currCountrySummary, setCurrCountrySummary] = React.useState()
  const [currCountryTimelineData, setCurrCountryTimelineData] = React.useState([])

  const [showDashboard, setShowDashboard] = React.useState(false)
  const [showSpinner, setShowSpinner] = React.useState(true)
  
  const [periodToCheck, setPeriodToCheck] = React.useState(0)
  // 0 for all time, 7 for one week, 15 for two weeks and 30 for one month

  async function initialLoad () {
    const auxAllCountriesSummary = await appHelper.fetchSummaryData()
    setAllCountriesSummary(auxAllCountriesSummary)

    const auxAllCountriesTimelineData = await appHelper.fetchTimelineData()
    setAllCountriesTimelineData(auxAllCountriesTimelineData)
  }
  
  const handleCountryChange = (country) => {
    setCurrCountrySummary(country)
  }

  const handlePeriodChange = (newPeriod) => {
    setPeriodToCheck(newPeriod)
  }

  React.useEffect(() => {
      initialLoad();
  }, [])

  React.useEffect(() => {

    const initialCountry = allCountriesSummary.find(((country) => country.title === 'USA'))
    setCurrCountrySummary(initialCountry)

  }, [allCountriesSummary])

  React.useEffect(() => {

    if(allCountriesSummary.length>0 && allCountriesTimelineData.length>0 && currCountrySummary!==undefined){
      
      const initialCountryTimelineData = allCountriesTimelineData.filter((entrie) => {
          return entrie.countrycode === currCountrySummary.code
      })

      setCurrCountryTimelineData(initialCountryTimelineData)
      setShowDashboard(true)
      setShowSpinner(false)
    }

  }, [allCountriesSummary, allCountriesTimelineData, currCountrySummary])

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
                                <div><h1>COVID-19 in {currCountrySummary.title}</h1></div>
                                <div style={{marginLeft: '15px'}}><h4>{currCountryTimelineData.length} days of pandemic</h4></div>
                            </div>
                            <div><SetPeriodButtons newPeriod={handlePeriodChange}/></div>
                        </div>
                    </div>
                    <div className='main-page'>
                        <div className='container' style={{marginTop: '5px'}}>
                            <Sidebar allCountriesSummary={allCountriesSummary} newCurrCountry={handleCountryChange}/>
                        </div>
                        <div className='container'>
                            <div className='center'>      
                                <Dashboard currCountryTimelineData={currCountryTimelineData} currCountrySummary={currCountrySummary} period={periodToCheck}/>
                            </div>
                        </div>
                    </div>
                </div>

          }
      </div>
      
  )
}
