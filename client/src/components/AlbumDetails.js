import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'

function AlbumDetails({albums, user}) {
    console.log(user)
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
    <hr/>
    <main>
      { user.admin? <button>Delete Album</button> : null
  }
    </main>
    <br></br>
    <img src={currentAlbum.image} alt={currentAlbum.title}/>
    <div>Artist: {currentAlbum.artist_name}</div>
    <div>Title: {currentAlbum.title}</div>
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