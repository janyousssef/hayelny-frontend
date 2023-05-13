import React from 'react'

const Result = () => {
  return (
    <div className='bg-primary h-screen'>
        <div className="flex justify-center items-center bg-primary  py-36">
    <div className="bg-white border-gray-400 border-2 rounded-xl py-36 pl-16 w-[981px] ">
        <h2 className='text-center my-10 text-4xl font-semibold text-blue-300'>Results</h2>
        <div className='flex gap-10 items-center'>
        <div className="flex flex-col justify-center items-center gap-4 w-[432px]  bg-blue-300 rounded-xl p-10">
            <img src="/src/assets/result.png" alt="result image" />
        </div>
        <div className='bg-white shadow-xl rounded-2xl h-full p-20 text-blue-400 font-semibold text-2xl'>
                <p>You have Pneumonia
You should consult
a doctor</p>
        </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Result