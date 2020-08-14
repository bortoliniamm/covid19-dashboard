import React from 'react'
import './styles.css'

import cardHelpers from '../helpers/cardHelpers'

export default function Card({country, cardType, percentages}) {

    const cardParameters = cardHelpers.getCardParameters(country, percentages, cardType)

    return (
        <div className="card">
            <div>
                <h3>{cardParameters.title}</h3>
            </div>

            <div style={{marginTop: '20px'}}>
                
                <div>
                    <div>{cardParameters.info1} </div>
                    <div className='number-plus-percentage'>
                        <div className='values'>{cardParameters.value1}</div>
                        {cardParameters.showPercentage1 && 
                            <div className='percentage'>({cardParameters.percentage1})</div>
                        }
                    </div>
                </div>
                <div>
                    <div>{cardParameters.info2} </div>
                    <div className='number-plus-percentage'>
                        <div className='values'>{cardParameters.value2}</div>
                        {cardParameters.showPercentage2 && 
                            <div className='percentage'>({cardParameters.percentage2})</div>
                        }
                    </div>
                </div>
            </div>    

        </div>
    )
}
