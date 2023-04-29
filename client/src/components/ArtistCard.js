import React from 'react'
import { Link } from 'react-router-dom'


function ArtistCard({a}) {
  return (
    <div className='artists'>
    <img src={a.image} style={{width: "200px"}}/>
    <h4>{a.name}</h4>
    <br></br>
    </div>
  )
}

export default ArtistCard