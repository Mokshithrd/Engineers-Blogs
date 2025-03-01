import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';
import { useLocation } from 'react-router-dom';

const Posts = () => {

    const {loading, posts} = useContext(AppContext);
    const location = useLocation();
    const len = posts.length <= 2 ? ('[100vh]') : ('full');

    return (
        <div className={location.pathname === '/' ? 
        (`w-10/12 max-w-[670px] h-${len} py-8 flex flex-col items-center gap-y-7 my-16`) :
        (`w-10/12 max-w-[670px] h-${len} py-8 flex flex-col items-center gap-y-7 mb-16`)}>
            {/* In this component I have to either show loading screeen or the posts 
            If loading is true then show the Spinner component elase show the posts*/}
            {
                loading ? (<Spinner/>) :
                (//first we check the length of post, if it is zero we show the below text else we show post
                    posts.length === 0 ? 
                    (
                        <div className='my-auto'>
                            <p>No Post Found</p>
                        </div>
                    ) :
                    (posts.map( (post) => (
                        <BlogDetails key={post.id} post={post}/>
                    )))
                )
            }
        </div>
    )
}

export default Posts