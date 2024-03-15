import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmarks = blog => {
      console.log('bookmark adding soon')
  }

  return (
    <div className='w-[80%] mx-auto'>
      
      <Header></Header>
      <div className='md:flex'>
      <Blogs handleAddToBookmarks={handleAddToBookmarks} ></Blogs>
      <Bookmarks></Bookmarks>
      </div>
    </div>
  )
}

export default App
