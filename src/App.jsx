import React, { useEffect } from 'react'
import Sidebar from './pages/Sidebar'
import feather from 'feather-icons' // Importing feather icons
import './App.css' // Importing custom CSS
const App = () => {
  useEffect(() => {
    feather.replace() // Replacing all elements with data-feather attribute with the corresponding icon
  }, [])
  return (
    <>
      <Sidebar />
    </>
  )
}

export default App