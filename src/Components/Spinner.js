import React from 'react'
import "./Spinner.css"

const Spinner = () => {
    return (
        <div className='flex flex-col gap-5 justify-center items-center h-[100vh]'>
            <span class="loader "></span>
           <p className='text-xl'> Loading...</p>
        </div>
    )
}

export default Spinner
