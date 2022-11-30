import React from 'react'

function H2(props) {
    const render = (props) => {
        if(props.name.username) {
            return <h2>{props.name.username}'s Points:</h2>
        } else return <h2>Select a user to view their accrued points!</h2>
    }
  return (
    render(props)
  )
}

export default H2