import React from 'react'

const Upload = () => {
  return (
        <div className="flex justify-center items-center bg-blue-400 py-36">
    <div className="bg-white border-gray-400 border-2 rounded-xl py-36 pl-16 w-[981px] ">
        <h2 className='text-center my-10 text-4xl font-semibold'>Upload Files</h2>
        <div className="flex flex-col justify-center items-center gap-4 w-[432px] border-4 border-dashed border-blue-300 rounded-xl p-10">
            <input type="file" className='text-[#50A9E3] bg-white rounded-full  p-6 text-2xl w-full ' placeholder='Email' />
            <p className='text-gray-400'>Supported Files : PNG , JPG</p>
            <div className='flex self-center'>
                <button className='px-10 py-4 my-10 bg-[#50A9E3] rounded-full text-white font-semibold text-3xl'>Upload</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Upload