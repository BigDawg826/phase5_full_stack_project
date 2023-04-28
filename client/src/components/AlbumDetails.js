import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'

function AlbumDetails({albums, user, handleAlbumDelete, handleAddAlbumComment}) {
  const {id} = useParams()
    //console.log(user)
    const [songs, setSongs] = useState([])
    const [comment, setComment] = useState("")
    const [showForm, setShowForm] = useState(false)
    const history = useHistory()
    const currentAlbum = albums.find(a => a.id == id)

    //console.log(currentAlbum.user_comments)
    useEffect(()=> {
        fetch(`/albums/${id}/songs`) 
        .then(resp => resp.json())
        .then(setSongs)
      }, [])
      //console.log(songs)
      // function to delete an album
      function albumDelete(){
        fetch(`/albums/${id}`,{
          method: "DELETE"
        })
        .then(()=>{
          history.push("/albums")
          handleAlbumDelete(Number(id))
        })
      }
  
  function toggleForm(){
    setShowForm((x) => !x)  
  }

  function handleChange(e){
    setComment(e.target.value)
  }
// create comment
  function handleSubmit(e) {
    e.preventDefault()
    const formData = {
      comment: comment,
      user_id: user.id,
      album_id: Number(id)
    }
    
    fetch("/user_comments",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then(resp => resp.json())
    .then((data) => {
      setShowForm(false)
      handleAddAlbumComment(data)
    })
  }

  return (
    <>
    <hr/>
    <main>
      { user.admin? <button onClick={albumDelete}>Delete Album</button> : null
  }
    </main>
    <br></br>
    {showForm ? (<form onSubmit={handleSubmit}><label>Enter comment in box below<br></br><textarea value={comment} onChange={handleChange}></textarea></label>
    <button type='submit'>Submit</button>
    </form>) : 

    <button onClick={toggleForm}>Add a comment!</button>}
    <br></br>
    <div className='comments'>
    <img src={currentAlbum.image} alt={currentAlbum.title}/>
    <ul>
    {currentAlbum.user_comments.map(said => <><li key={said.id}>{said.comment}</li>
      <h5>{said.username}</h5></>)
    } 
    </ul>
    </div>
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