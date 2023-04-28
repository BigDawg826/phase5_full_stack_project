import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


function Form({newAlbum}) {
  const [artists, setArtist] = useState([])
  const [formData, setFormData] = useState({
    artist_id:"",
    image: "",
    label: "",
    release_year: "",
    title: ""
  })
  //console.log(formData)
  // fetch all artists for dropdown
  useEffect(()=> {
    fetch("/artists") 
    .then(resp => resp.json())
    .then(setArtist)
  }, [])
  //console.log(artists)
  const history = useHistory()
  function handleChange(e){
    setFormData(prev => ({...prev, [e.target.name]:e.target.value}))
  }
  function handleSubmit(e){
    e.preventDefault()
    fetch("/albums",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then(resp => resp.json())
    .then((data)=> {
      newAlbum(data)
      history.push("/albums")
    })
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Artist
          <select onChange={handleChange} name = "artist_id" value={formData.artist_id}>
            <option>Select an artist</option>
            {artists.map((artist) =>{
           return  <option key={artist.id} value={artist.id}>
              {artist.name}
            </option>
            })}
          </select>
          </label>
        <label>Album Title<input type="text" name = "title" value={formData.title} onChange={handleChange}/></label>
        <label>Label<input type="text" name = "label" value={formData.label} onChange={handleChange}/></label>
        <label>Release Year<input type="integer" name = "release_year" value={formData.release_year} onChange={handleChange}/></label>
        <label>Image<input type="text" name = "image" value={formData.image} onChange={handleChange}/></label>
        <input type = "submit" />
      </form>
    </div>
  )
}

export default Form