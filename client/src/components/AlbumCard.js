import React from 'react'
import { Link } from 'react-router-dom'

function AlbumCard({a}) {
  //console.log(a)
  return (
    <div>{a.title} <Link to={`/albums/${a.id}`} ><button>Album info</button></Link></div>
  )
}

export default AlbumCard