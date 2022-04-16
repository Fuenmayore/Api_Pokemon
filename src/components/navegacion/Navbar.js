import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import {Link} from 'react-router-dom'
import { LoginButton } from '../login/Login'
import { Profile } from '../login/Profile'
import {LogoutButton} from '../login/Login'
const navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
<img src='logo.png' alt='pokemon' width='9%' height="10%"/>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
        {/*   <li className="nav-item">
            <Link className="nav-link active" to='inicio' >Home</Link>
          </li> */}
          <li className="nav-item">
          <Link className="nav-link active" to='/' >Home</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link active" to='app' >Pokemones</Link>
          </li>
          <li className="nav-item">
          <LoginButton/>
          </li>
          <li className="nav-item">
          <LogoutButton/>
            </li>
            <li className="nav-item">
          <Profile/>
            </li>
         
          
        </ul>
      </div>
    </div>
  </nav>
  </div>
  )
}

export default navbar