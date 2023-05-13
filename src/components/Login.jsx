import React from 'react'

const Login = () => {
  return (
    <div className="flex justify-center items-center my-32">
    <div className="bg-[#50A9E3] rounded-xl py-36 pl-16 w-[981px] ">
        <div className="flex flex-col justify-end items-end gap-16 w-[824px]">
            <input type="email" className='text-[#50A9E3] bg-white rounded-full  p-6 text-2xl w-full ' placeholder='Email' />
            <input type="password" className='text-[#50A9E3] bg-white rounded-full  p-6 text-2xl w-full ' placeholder='password' />
        </div>
        </div>
    </div>
  )
}

export default Login