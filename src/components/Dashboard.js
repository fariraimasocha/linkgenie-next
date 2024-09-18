import React from 'react'

function Dashboard() {
    return (
        <div className='bg-gray-200 min-h-screen flex gap-2'>
            <div className='w-2/12 min-h-screen bg-white border-2 border-black'>
                <div>
                    <div className='py-5 border-b-2'>
                        {/* <h1>Icon</h1> */}
                        <h1 className='text-gray-900 text-2xl mt-5 px-3 text-center font-semibold'>LinkeGenie Dashboard</h1>
                    </div>
                </div>
                <div>
                    <ul className='flex flex-col mt-10 space-y-4 px-8 text-xl font-semibold'>
                        <li>All Posts</li>
                        <li>Users List</li>
                        <li>Projects</li>
                        <li>Settings</li>
                    </ul>

                </div>

            </div>
            <div className='w-10/12 min-h-screen bg-blue-500 border-black border-2'>

            </div>

        </div>
    )
}

export default Dashboard