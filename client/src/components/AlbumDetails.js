import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'

function AlbumDetails({albums}) {
    //console.log(albums)
    const [songs, setSongs] = useState([])
    const {id} = useParams()
    const currentAlbum = albums.find(a => a.id == id)
    //console.log(currentAlbum)
    useEffect(()=> {
        fetch(`/albums/${id}/songs`) 
        .then(resp => resp.json())
        .then(setSongs)
      }, [])
      //console.log(songs)
  return (
    <>
    <div>AlbumDetails</div>
    <br></br>
    <img src={currentAlbum.image} alt={currentAlbum.title}/>
    <div>{currentAlbum.artist_name}</div>
    <div>{currentAlbum.title}</div>
    <div>Released on {currentAlbum.label} in {currentAlbum.release_year}</div>
    <p>Popular Songs!</p>
    <div>{songs.map((item, index) => (
      <div key={index}>
        <div>{item.title}</div>
      </div>
    ))}</div>
    </>
  )
}

export default AlbumDetails