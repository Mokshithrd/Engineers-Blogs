import React, { useContext } from 'react'
import Header from '../components/Header'
import Pagenation from '../components/Pagenation'
import Posts from '../components/Posts'
import { useLocation, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TagPage = () => {

    // Getting tag from the url
    const location = useLocation();
    const tag = location.pathname.split('/').at(-1);

    // USing navigate hook to go back
    const navigate = useNavigate();

    const {theme} = useContext(AppContext);

  return (
    <div className='w-full h-full flex flex-col gap-y-2 justify-start items-center bg-bgColor text-textColor' data-theme={theme}>

        <Header/>

        <div className='w-10/12 max-w-[670px] pt-8 flex items-center gap-x-7 mt-16'>
            <button className='rounded-md border px-4 py-1 hover:border-black transition-all duration-200'
            onClick={() => navigate(-1)}>
                Back
            </button>
            <p className='text-2xl font-bold'>
                Blogs Tagged <span className='text-blue-700 underline'>{`#${tag.replaceAll('-',' ')}`}</span>
            </p>
        </div>

        <Posts/>

        <Pagenation/>

    </div>
  )
}

export default TagPage