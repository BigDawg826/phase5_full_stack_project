import React from 'react';
import { Link, useHistory } from "react-router-dom";

function NavBar({ user, setUser}) {
  const history = useHistory()
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null)
            history.push("/");
          }
        });
      } 

  return (
    <header>
      <div>
        <Link to="/">Home</Link>
      </div>
      
        {user ? (
          <button onClick={handleLogoutClick}>Logout</button>
        ) : (
          <div className="signup">
            <Link to="/signup">Signup</Link>
            
            <Link to="/login">Login</Link>
          </div>
        )}
      
    </header>
  );
}

export default NavBar