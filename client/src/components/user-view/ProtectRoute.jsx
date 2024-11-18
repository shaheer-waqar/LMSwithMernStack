import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function UserGurard() {

    if(!localStorage?.getItem("token")) return <Navigate to={"/auth"}/>
    if(localStorage?.getItem("role") == "admin") return <Navigate to={"dashboard"}/>
    
  return <Outlet/>

}

export default UserGurard