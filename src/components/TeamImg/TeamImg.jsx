import React from 'react'

export const TeamImg = ({teamName, teamDesc, img}) => { //destructuring
  return (
    <div className="teamImg">
      {/* conditional rendering */}
      {img && <img src={img} alt="" />}
      <h1>{teamName}</h1>
      <p>{teamDesc}</p>
    </div>
  )
}
