import React from 'react'
import { useParams } from 'react-router-dom'

export default function Profile() {
  const { id } = useParams();

  return (
    <div>
      <div>Profile</div>
      <p>{id}</p>
    </div>
  )
}
