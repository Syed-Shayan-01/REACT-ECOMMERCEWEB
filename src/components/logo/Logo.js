import React from 'react'

const Logo = ({ text }) => {
    return (
        <div className='text-blue-400 capitalize  font-bold lg:text-[2rem]'>
            {text}
        </div>
    )
}

export default Logo