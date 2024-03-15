import React from 'react'
import { useParams } from 'react-router'
function User() {
  const params=useParams();
  return (
    <div>User {params.username}</div>
  )
}

export default User