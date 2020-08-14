import React from 'react'
import './styles.css'
import Card from './Card'
import ClosedCasesPieChart from './ClosedCasesPieChart'

export default function PieAndCardsGrid({country, percentages}) {
    return (
        <div>
            <div className='card-grid'>
                <div>
                    <Card 
                        country={country} 
                        percentages={percentages} 
                        cardType={1}
                    />
                </div>
                <div>
                    <Card 
                        country={country} 
                        percentages={percentages} 
                        cardType={2}
                    />
                </div>
                <div>
                    <Card 
                        country={country} 
                        percentages={percentages} 
                        cardType={3}
                    />
                </div>
                <div>
                    <Card 
                        country={country} 
                        percentages={percentages} 
                        cardType={4}
                    />
                </div>
            </div>
            <div className='pie-card'>
                <ClosedCasesPieChart percentages={percentages} country={country}/>
            </div>
        </div>
    )
}
