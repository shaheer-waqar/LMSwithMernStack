import React from 'react'
import { Button } from './components/ui/button';
import { Route, Routes } from 'react-router-dom';
import AuthPage from './pages/auth';
import AdminGuard from './components/admin-view/ProtectedRoute';
import Dashborad from './pages/user/Dashborad';
import UserGurard from './components/user-view/ProtectRoute';
import HomePage from './pages/admin/Home';

function App() {
  return (

   <Routes>

    <Route>
      <Route element={<UserGurard/>}>
        <Route path='/' element={<HomePage/>}/>
      </Route>
    </Route>

    <Route>
      <Route element={<AdminGuard/>}>
        <Route path='dashboard' element={<Dashborad/>}/>
      </Route>
    </Route>


    <Route path='/auth' element={<AuthPage/>}/>
   </Routes>
  )
}

export default App