import React from 'react'
import '../../node_modules/react-vis/dist/style.css'
import {XYPlot, LineSeries} from 'react-vis'

export default function TotalCasesCurve({data, currCountry}) {

    let countryTimeLineData = data.filter((entrie) => {
        return entrie.countrycode === currCountry.code
    })

    // adjusting date format so it can be used
    countryTimeLineData.forEach((entrie) => {
        let rawDate = entrie.date
        const strArr = rawDate.split("/");
        entrie.day = strArr[1].padStart(2, '0')
        entrie.month = strArr[0].padStart(2, '0')
        entrie.year = `20${strArr[2]}`
        const newDate= `${entrie.year}${entrie.month}${entrie.day}`
        entrie.date=newDate
    })

    countryTimeLineData.sort((a,b)=>{
        return a.date-b.date
    })


    let arr = []
    let count = 0;
    countryTimeLineData.forEach((entrie) => {
        arr.push({x:count, y:entrie.cases})
        count++;
    })

    // console.log(arr)

    // const arr = [
    //     {x: 0, y: 8},
    //     {x: 1, y: 5},
    //     {x: 2, y: 4},
    //     {x: 3, y: 9},
    //     {x: 4, y: 1},
    //     {x: 5, y: 7},
    //     {x: 6, y: 6},
    //     {x: 7, y: 3},
    //     {x: 8, y: 2},
    //     {x: 9, y: 0}
    //   ];

    return (
        <div className="App">
            <XYPlot height={300} width={750}>
                <LineSeries data={arr} />
            </XYPlot>
        </div>
    )
}
