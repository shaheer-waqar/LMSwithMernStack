import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function AdminGuard() {

  if(!localStorage?.getItem("token")) return <Navigate to={"/auth"}/>
  if(localStorage?.getItem("role") == "user") return <Navigate to={"/"}/>

  return <Outlet/>
}

export default AdminGuard