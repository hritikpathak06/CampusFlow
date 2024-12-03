import React from 'react'

const announcements = [
    {
      id: 1,
      title: "Event 1: Business Summit",
      time: "10:00AM - 12:00PM",
      description: "An insightful summit for business enthusiasts.",
    },
    {
      id: 2,
      title: "Event 2: Coding Bootcamp",
      time: "2:00PM - 5:00PM",
      description: "A hands-on bootcamp for aspiring developers.",
    },
    {
      id: 3,
      title: "Event 3: Art Workshop",
      time: "1:00PM - 3:00PM",
      description: "Explore your creativity in this art workshop.",
    },

  ];

const Announcements = () => {
  return (
    <div className=' bg-white p-4 rounded-md'>

        <div className=' flex items-center justify-between'>
            <h1 className=' text-xl font-semibold'>Announcemnets</h1>
            <span className=' text-xs text-gray-400 '>view all</span>
        </div>

        <div className="flex flex-col gap-4">
        {announcements.map((event, idx) => {
          return (
            <div
              className="p-5 rounded-md border-2 border-gray-300 border-t-4 odd:border-t-blue-300 even:border-t-green-500"
              key={idx}
            >
              <div className="flex items-center justify-between">
                <h1 className=" font-semibold text-gray-600">{event.title}</h1>
                <span className="text-gray-500 text-xs">{event.time}</span>
              </div>
              <p className=" mt-2 text-gray-600 text-sm">{event.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Announcements