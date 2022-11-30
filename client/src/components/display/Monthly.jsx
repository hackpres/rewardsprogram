import React from 'react'
import { getPoints } from '../../utils/getPoints'

function Monthly(props) {
    const points = [];
    const getPointData = (array) => {
        points.push(getPoints(array))
        return getPoints(array)
    }
    const getPointTotal = (array) => {
        console.log(array[0])
        if(array[0] || array[0] === 0) {
           return <p>Total points earned = {array.reduce((accum, curr) => accum + curr)}</p> 
        } 
    }
  return (
      <>
        <div>
            {props.quarter.map((month, i) => {
                let data = Object.entries(month)
                return (
                <p key={i}>{data[0][0]}: {getPointData(data[0][1])}</p>
            )})
            }
        </div>
        {getPointTotal(points)}
      </>

  )
}

export default Monthly