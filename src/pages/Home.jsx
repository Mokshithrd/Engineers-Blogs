import React, { useContext, useEffect } from 'react'
import Header from '../components/Header'
import Posts from '../components/Posts'
import Pagenation from '../components/Pagenation'
import { AppContext } from '../context/AppContext'
import ScrollToTop from '../components/ScrollToTop'

const Home = () => {
    // Getting data from AppContext
    const {theme} = useContext(AppContext);

  return (
    <div className='w-full h-full overflow-x-hidden flex flex-col gap-y-2 justify-center items-center bg-bgColor text-textColor' data-theme={theme}>
    <ScrollToTop/>
        <Header/>

        <Posts/>

        <Pagenation/>
    </div>
  )
}

export default Home