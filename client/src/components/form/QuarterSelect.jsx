import React from 'react'

function QuarterSelect(props) {
    return (
        <select name='users' id='users-select' onChange={props.change}>
          <option value=''>--What quarter would you like to see--</option>
          <option value='Q1'>January-March</option>
          <option value='Q2'>April-June</option>
          <option value='Q3'>July-September</option>
          <option value='Q4'>October-December</option>
        </select>
      )
}

export default QuarterSelect