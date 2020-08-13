import React from 'react'
import { Button, ButtonGroup } from 'reactstrap'

export default function SetPeriodButtons({newPeriod}) {

    const handleClick = (event) => {
        newPeriod(Number(event.target.value))
    }

    return (
      <div>
        <ButtonGroup>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Button onClick={handleClick} value={0}>ALL TIME</Button>
                <Button onClick={handleClick} value={7}>LAST WEEK</Button>
                <Button onClick={handleClick} value={15}>LAST TWO WEEKS</Button>
                <Button onClick={handleClick} value={30}>LAST MONTH</Button>
            </div>
        </ButtonGroup>
      </div>
    )
}
