import { Switch, Route, Link} from 'react-router-dom'
import AlbumContainer from './components/AlbumContainer';
import Hi from './components/Home';
import Form from './components/Form';
import { useEffect, useState } from 'react';
import AlbumDetails from './components/AlbumDetails';
import Home from './components/Home';

function App() {
const [albums, setAlbums]= useState([])
useEffect(()=> {
  fetch("/albums") 
  .then(resp => resp.json())
  .then(setAlbums)
}, [])
//console.log(albums)
  function handleAddAlbum(x){
    setAlbums(prev => [...prev, x])
  }
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/home">click for home</Link>
        <br></br>
        <Link to="/albums"><button>click for a list of artists</button></Link>
        <Link to="/albums"><button>click for a list of albums</button></Link>
        <Link to="/albums"><button>click for a list of songs</button></Link>
        
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/albums/new">
            <Form newAlbum={handleAddAlbum}/>
          </Route>
          <Route path="/albums/:id">
            <AlbumDetails albums={albums}/>
          </Route>
          <Route path="/albums">
            <AlbumContainer albums={albums}/>
          </Route>
          
        </Switch>
      </header>
    </div>
  );
}

export default App;
