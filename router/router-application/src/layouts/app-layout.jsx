import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const AppLayout = () => {
  return (
    <div>
        <h2>from router component</h2>
       <Header />
      {/* loading */}
      {/* pages */}
      <Outlet/>
    </div>
  )
}

export default AppLayout
