import { Switch, Route, Link} from 'react-router-dom'
import AlbumContainer from './AlbumContainer';
import Login from './Login';
import AddAlbum from './AddAlbum';
import React, { useEffect, useState } from 'react';
import AlbumDetails from './AlbumDetails';
import Home from './Home';
import SignUp from './SignUp';
import NavBar from './NavBar';
import Artists from './Artists';

function App() {
const [albums, setAlbums]= useState([])
const [user, setUser] = useState(null)
const [artists, setArtist] = useState([])
//NOTE: do a thing
useEffect(()=> {
  fetch("/albums") 
  .then(resp => resp.json())
  .then(setAlbums)
}, [])
console.log(albums)

useEffect(()=> {
  fetch("/artists") 
  .then(resp => resp.json())
  .then(setArtist)
}, [])
//console.log(artists)

  function handleAddAlbum(x){
    setAlbums(prev => [...prev, x])
}

  function handleAlbumDelete(del){
    setAlbums(prev => prev.filter(d => d.id !== del))
  }

  function handleAddAlbumComment(comment){
    setAlbums(prev => prev.map(album =>{
      if(album.id === comment.album_id) {
        return {...album, user_comments: [...album.user_comments, comment]}
      } else {
        return album
      }
    }))
  }

    useEffect(() => {
      // auto-login
      fetch("/me").then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user));
        }
      });
    }, []);
if (!albums.length) return <h1>Loading...</h1>

  return (
    <>
      <NavBar user={user} setUser={setUser} />
    
      <main>
        { user? (
          <>
          <Route path="/">
            <Home user={user}/>
          </Route>
          <br></br>
          <Link to="/artists"><button>click for a list of artists</button></Link>
          <Link to="/albums"><button>click for a list of albums</button></Link>
          {/* <Link to="/albums"><button>click for a list of songs</button></Link> */}
        <Switch>
          <Route path="/albums/new">
            <AddAlbum newAlbum={handleAddAlbum} artists={artists}/>
          </Route>
          <Route path="/albums/:id">
            <AlbumDetails albums={albums} user={user} handleAlbumDelete={handleAlbumDelete}
            handleAddAlbumComment={handleAddAlbumComment}/>
          </Route>
          <Route path="/albums">
            <AlbumContainer albums={albums}/>
          </Route>
          <Route path="/artists">
            <Artists artists={artists}/>
          </Route>
        </Switch>
        </>
          ) : (
        <Switch>
          <Route path="/signup">
            <SignUp setUser={setUser} />
          </Route>
          <Route path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
         ) } 
        </main>
    </>
  );
}

export default App;
