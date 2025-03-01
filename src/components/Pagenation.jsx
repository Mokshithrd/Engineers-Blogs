import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagenation = () => {
  //get the daat from app context
  const {pageNumber, toatalPageNumber, handlePageChange} = useContext(AppContext);

  return (
    <div className='w-full flex fixed bottom-0 bg-bgColor text-textColor shadow-footer-shadow justify-center py-2 transition-all ease-in-out duration-700 '>
      <div className='flex w-10/12 max-w-[670px] justify-between '>

        <div className='flex gap-x-4'>
          { pageNumber > 1 &&
            <button className='rounded-md border px-4 py-1 hover:border-black transition-all duration-200'
            onClick={() => handlePageChange(pageNumber-1)}>
              Previous
            </button>
          }
          { pageNumber < toatalPageNumber &&
            <button className='rounded-md border px-4 py-1 hover:border-black transition-all duration-200'
            onClick={() => handlePageChange(pageNumber+1)}>
              Next
            </button>
          }
        </div>

        <p className='font-semibold'>
          Page {pageNumber} of {toatalPageNumber}
        </p>

      </div>
    </div>
  )
}

export default Pagenation