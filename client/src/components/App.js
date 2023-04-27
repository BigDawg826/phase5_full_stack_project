import { Switch, Route, Link} from 'react-router-dom'
import AlbumContainer from './AlbumContainer';
import Login from './Login';
import Form from './Form';
import React, { useEffect, useState } from 'react';
import AlbumDetails from './AlbumDetails';
import Home from './Home';
import SignUp from './SignUp';
import NavBar from './NavBar';

function App() {
const [albums, setAlbums]= useState([])
const [user, setUser] = useState(null)
//NOTE: do a thing
useEffect(()=> {
  fetch("/albums") 
  .then(resp => resp.json())
  .then(setAlbums)
}, [])
//console.log(albums)
  function handleAddAlbum(x){
    setAlbums(prev => [...prev, x])

  }

    useEffect(() => {
      // auto-login
      fetch("/me").then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user));
        }
      });
    }, []);

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
          <Link to="/albums"><button>click for a list of artists</button></Link>
          <Link to="/albums"><button>click for a list of albums</button></Link>
          <Link to="/albums"><button>click for a list of songs</button></Link>
        <Switch>
          <Route path="/albums/new">
            <Form newAlbum={handleAddAlbum}/>
          </Route>
          <Route path="/albums/:id">
            <AlbumDetails albums={albums} user={user}/>
          </Route>
          <Route path="/albums">
            <AlbumContainer albums={albums}/>
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
