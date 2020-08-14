import React from 'react'
import Card from './Card'
import './styles.css'
import ClosedCasesPieChart from './ClosedCasesPieChart'

export default function CardGrid({country, percentages}) {
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
