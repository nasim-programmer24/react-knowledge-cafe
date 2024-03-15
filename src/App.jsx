import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleAddToBookmarks = blog => {
      // console.log(blog);
      const newBookmarks = [...bookmarks, blog];
      setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = time => {
    const newReadingTime = parseInt(readingTime) + parseInt(time);
    setReadingTime(newReadingTime);
  }

  return (
    <div className='w-[80%] mx-auto'>
      
      <Header></Header>
      <div className='md:flex'>
      <Blogs handleAddToBookmarks={handleAddToBookmarks} handleMarkAsRead={handleMarkAsRead} ></Blogs>
      <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </div>
  )
}

export default App
