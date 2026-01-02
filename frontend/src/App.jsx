import React from 'react'
import { Outlet } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <div className='App'>
      <ToastContainer position='bottom-right'/>
      <Outlet />
    </div>
  )
}

export default App
