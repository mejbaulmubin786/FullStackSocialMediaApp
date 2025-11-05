import React from 'react'

const Loding = ({ height = '100vh' }) => {
    return (
        <div style={{ height }} className='flex items-center justify-center h-screen'>
            <div className='w-10 rounded-full border-3 border-purple-500 border-t-transparent animate-spin'></div>
        </div>
    )
}

export default Loding