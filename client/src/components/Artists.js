import React from 'react'
import ArtistCard from './ArtistCard'
import { Link } from 'react-router-dom'

function Artists({artists}) {
   //console.log(artists)
    const eachArtist = artists.map(a => <ArtistCard key={a.id} a={a}/>)
  return (
    <div>
    <br></br>
    <div>{eachArtist}</div>
    <br></br>
    </div>
  )
}

export default Artists