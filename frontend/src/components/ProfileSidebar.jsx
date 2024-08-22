import React from 'react'

const ProfileSidebar = ({setactive}) => {
  return (
    <div className='w-[20%] h-full max-1000px:hidden  max-1200px:text-[90%]  bg-slate-700 text-[140%] flex flex-col pl-6 pt-4 pr-6 gap-5'>
        <div onClick={()=>setactive(1)} className='flex shadow-2xl shadow-slate-900 hover:bg-slate-800 cursor-pointer rounded-xl p-2'>
              <p className='text-white font-semibold '>Profile</p>
        </div>
        <div onClick={()=>setactive(2)} className='flex shadow-2xl shadow-slate-900 hover:bg-slate-800 cursor-pointer rounded-xl p-2'>
              <p className='text-white font-semibold '>Orders</p>
        </div>
        <div onClick={()=>setactive(3)} className='flex shadow-2xl shadow-slate-900 hover:bg-slate-800 cursor-pointer rounded-xl p-2'>
              <p className='text-white font-semibold '>Users</p>
        </div>
        <div onClick={()=>setactive(4)} className='flex shadow-2xl shadow-slate-900 hover:bg-slate-800 cursor-pointer rounded-xl p-2'>
              <p className='text-white font-semibold '>Products</p>
        </div>
        <div onClick={()=>setactive(5)} className='flex shadow-2xl shadow-slate-900 hover:bg-slate-800 cursor-pointer rounded-xl p-2'>
              <p className='text-white font-semibold '>Settings</p>
        </div>

    </div>
  )
}

export default ProfileSidebar