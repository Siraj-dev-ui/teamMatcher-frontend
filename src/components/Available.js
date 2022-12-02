import React, { useState } from 'react'

const Available = () => {
    const [available, setAvailable] = useState(true)
  return (
    <div className='text-white mr-3 flex items-center'> 
        <span className='mr-2'>Available</span>
        <input type='checkbox' className='accent-emerald-500/25 w-5 h-5' checked={available} onChange={() => setAvailable(!available)}/>
        </div>
  )
}

export default Available