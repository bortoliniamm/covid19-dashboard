import React from 'react'
import '../../node_modules/react-vis/dist/style.css'
import './styles.css'
import { RadialChart } from 'react-vis'
import pieChartHelper from '../helpers/pieChartHelpers'
import cardHelpers from '../helpers/cardHelpers'

export default function ClosedCasesPieChart({percentages, country}) {

    const plotData = pieChartHelper.treatPieChartData(percentages)
    const cardParameters = cardHelpers.getCardParameters(country, percentages, 3)

    const labelsStyle = {fontWeight: 'bold', fontSize: '12px', letterSpacing: 0.4}

    return (
        <div>
            <div className='custom-card-title'>
                More about closed cases
            </div>
                <div className='pie-chart'>
                    <RadialChart
                        data={plotData}
                        width={250}
                        height={250}
                        innerRadius={75}
                        radius={100}
                        showLabels={true}
                        labelsRadiusMultiplier={1.2}
                        labelsStyle={labelsStyle}                        
                    />
                </div>

        </div>
    )
}
