import React from 'react'
import AlbumCard from './AlbumCard'
import {Link} from "react-router-dom"

function AlbumContainer({albums}) {
  console.log(albums)
  const eachAlbum = albums.map(a => <AlbumCard key={a.id} a={a}/>)
  return (
    <div>
    <br></br>
    <div>{eachAlbum}</div>
    <br></br>
    <Link to="/albums/new">Add an album to our database!</Link>
    </div>
  )
}

export default AlbumContainer

