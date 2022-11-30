import React from 'react'

function UserSelect(props) {
  return (
    <select name='users' id='users-select' onChange={props.change}>
      <option value=''>--Please select a user--</option>
      {props.name.map((fullName) => (
        <option key={fullName} value={fullName}>{fullName}</option>
      ))}
    </select>
  )
}

export default UserSelect