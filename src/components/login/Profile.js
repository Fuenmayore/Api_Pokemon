import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export const Profile = () => {
  const {user, isAuthenticated, isLoading} = useAuth0();


  if (isLoading){
      return <div> Loading... </div>
  }

  return (
      isAuthenticated && 
      
      <div className="all-nav">
          <li> <p>{user.name}</p></li>
          <li>
          <img src={user.picture} alt={user.name} width="50%" height=""/>
          </li>
         
         
      </div>
  )
};