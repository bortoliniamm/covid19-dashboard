import React from 'react'
import './styles.css'

import { Button, ButtonGroup } from 'reactstrap'

export default function SetPeriodButtons({newPeriod}) {

    const handleClick = (event) => {
        newPeriod(Number(event.target.value))
    }

    return (
      <div>
        <ButtonGroup>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <div style={{margin:'2px'}}><Button onClick={handleClick} value={0}>ALL TIME</Button></div>
                <div style={{margin:'2px'}}><Button onClick={handleClick} value={60}>LAST TWO MONTHS</Button></div>
                <div style={{margin:'2px'}}><Button onClick={handleClick} value={30}>LAST MONTH</Button></div>
                <div style={{margin:'2px'}}><Button onClick={handleClick} value={15}>LAST TWO WEEKS</Button></div>
                <div style={{margin:'2px'}}><Button onClick={handleClick} value={7}>LAST WEEK</Button></div>
            </div>
        </ButtonGroup>
      </div>
    )
}
