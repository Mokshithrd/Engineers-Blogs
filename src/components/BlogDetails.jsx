import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className='w-[300px] xs:w-full h-full text-textColor transition-all ease-in-out duration-700'>
        {/* USing namvlink to redirect to the given link by clicking on the title */}
       <NavLink to={`/blog/${post.id}`}>
            <span className='font-bold text-[15px] xs:text-lg hover:underline'>
                {post.title}
            </span>
       </NavLink>

       <p className='xs:text-sm text-xs'>
            By {'  '}
            <span className='italic mt-1'>{post.author}</span>
            {'  '} on {'  '}
            <NavLink to={`/categories/${post.category}`}>
                <span className='underline font-semibold'>{post.category.replaceAll('-',' ')}</span>
            </NavLink>
       </p>

       <p className='text-sm mt-1'>
            Posted on <span>{post.date}</span>
       </p>

       <p className='text-md text-justify mt-2'>
            {post.content}
       </p>

       <div className='flex gap-x-3 mt-2'>
            {
                post.tags.map((tag, index) => (
                    <NavLink key={index} to={`/tags/${tag.replaceAll(' ','-')}`}>
                        <span className='text-blue-700 underline font-bold text-[9px] xs:text-xs'>
                            {`#${tag}`}
                        </span>
                    </NavLink>
                ))
            }
       </div>


    </div>
  )
}

export default BlogDetails