import Announcements from '@/components/dashboard/Announcements'
import EventCalendar from '@/components/dashboard/EventCalendar'
import { BigCalendar } from '@/components/students/BigCalendar'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='flex p-4 gap-4 flex-col md:flex-row'>
      {/* Left */}
      <div className=" w-full lg:w-2/3 h-max  flex flex-col gap-8">
     <div className="w-full bg-white p-4 rounded-md">
      <h1 className=' text-xl font-bold'>Schedule 4A</h1>
      <BigCalendar/>
     </div>
      </div>
      {/* Right */}
      <div className=" w-full lg:w-1/3 h-max  flex flex-col gap-8">
          <EventCalendar />
          <Announcements />
        </div>
    </div>
    </>
  )
}

export default page
