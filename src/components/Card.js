import React from 'react'
import './styles.css'

import cardHelpers from '../helpers/cardHelpers'

export default function Card({country, cardType, percentages}) {

    const cardParameters = cardHelpers.getCardParameters(country, percentages, cardType)

    return (
        <div className="card">

            <div className='custom-card-title'>
                {cardParameters.title}
            </div>

            <div style={{marginTop: '5px'}}>
                
                <div className='custom-card-info'>
                    {cardParameters.info1}
                </div>

                <div className='number-plus-percentage'>
                    
                    <div className='values' style={{fontSize: cardParameters.fontSize1, color: cardParameters.fontColor1}}>
                        {cardParameters.value1}
                    </div>

                    {cardParameters.showPercentage1 && 
                        <div className='percentage' style={{color: cardParameters.fontColor1}}>
                            ({cardParameters.percentage1})
                        </div>
                    }

                </div>

                <div className='custom-card-info'>
                    {cardParameters.info2}
                </div>

                <div className='number-plus-percentage'>
                    
                    <div className='values' style={{fontSize: cardParameters.fontSize2, color: cardParameters.fontColor2}}>
                        {cardParameters.value2}
                    </div>

                    {cardParameters.showPercentage2 && 
                        <div className='percentage' style={{color: cardParameters.fontColor2}}>
                            ({cardParameters.percentage2})
                        </div>
                    }

                </div>
            </div>    

        </div>
    )
}
