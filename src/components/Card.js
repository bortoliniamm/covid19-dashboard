import React from 'react'
import './styles.css'
import cardHelpers from '../helpers/cardHelpers'

export default function Card({country, cardType, percentages}) {

    const cardInfo = cardHelpers.selectInfo(country, cardType, percentages)

    return (
        <div className="card">
            <div>
                <h3>{cardInfo.title}</h3>
            </div>

            <div style={{marginTop: '20px'}}>
                
                <div>
                    <div>{cardInfo.info1} </div>
                    <div className='number-plus-percentage'>
                        <div className='values'>{cardInfo.value1}</div>
                        {cardInfo.showPercentage1 && 
                            <div className='percentage'>({cardInfo.percentage1})</div>
                        }
                    </div>
                </div>
                <div>
                    <div>{cardInfo.info2} </div>
                    <div className='number-plus-percentage'>
                        <div className='values'>{cardInfo.value2}</div>
                        {cardInfo.showPercentage2 && 
                            <div className='percentage'>({cardInfo.percentage2})</div>
                        }
                    </div>
                </div>
            </div>    

        </div>
    )
}
