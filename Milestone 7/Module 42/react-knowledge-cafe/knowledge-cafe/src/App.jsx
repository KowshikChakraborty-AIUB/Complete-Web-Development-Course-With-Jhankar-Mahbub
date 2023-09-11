import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookMarks] = useState([]);

  const handleToBookMark = () => {
    console.log('bookmarks');
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto p-4 gap-6'>
        <Blogs handleToBookMark={handleToBookMark}></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
