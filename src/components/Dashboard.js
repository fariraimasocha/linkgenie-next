import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faProjectDiagram, faCog } from '@fortawesome/free-solid-svg-icons';

function Dashboard() {
    return (
        <div className='bg-gray-100 min-h-screen flex'>
            <div className='w-1/5 min-h-screen bg-white border-r border-gray-300 shadow-md'>
                <div className='py-5 border-b'>
                    <h1 className='text-gray-900 text-2xl text-center font-semibold'>LinkeGenie Dashboard</h1>
                </div>

                <nav className='mt-8'>
                    <ul className='flex flex-col space-y-3 px-8 font-sans text-gray-600'>
                        <li className='flex items-center p-2 rounded-md transition-colors duration-200 hover:bg-blue-100 cursor-pointer'>
                            <FontAwesomeIcon icon={faHome} className="mr-3 w-6 h-6 text-gray-500" />
                            <span className="text-gray-500">All Posts</span>
                        </li>
                        <li className='flex items-center p-2 rounded-md transition-colors duration-200 hover:bg-blue-100 cursor-pointer'>
                            <FontAwesomeIcon icon={faUsers} className="mr-3 w-6 h-6 text-gray-500" />
                            <span className="text-gray-500">Users List</span>
                        </li>
                        <li className='flex items-center p-2 rounded-md transition-colors duration-200 hover:bg-blue-100 cursor-pointer'>
                            <FontAwesomeIcon icon={faProjectDiagram} className="mr-3 w-6 h-6 text-gray-500" />
                            <span className="text-gray-500">Projects</span>
                        </li>
                    </ul>
                </nav>

                <div className="flex justify-center px-4 py-6 mt-14">
                    <div className="relative flex flex-col items-center rounded-lg border border-gray-300 px-3 py-4 shadow-sm">
                        <img
                            width="54"
                            height="30"
                            className="w-[54px] mb-4"
                            src="https://horizon-ui.com/shadcn-nextjs-boilerplate/_next/static/media/SidebarBadge.d6d6c919.png"
                            alt="Sidebar Badge"
                        />
                        <div className="mb-3 flex w-full flex-col text-center">
                            <p className="mb-2.5 text-lg font-bold text-gray-800">Go unlimited with PRO</p>
                            <p className="text-sm font-medium text-gray-600">
                                Get your AI Saas Project to another level and start doing more with Horizon AI Boilerplate PRO!
                            </p>
                        </div>
                        <a target="_blank" rel="noopener noreferrer" href="https://horizon-ui.com/shadcn-ui#pricing">
                            <button
                                className="whitespace-nowrap transition-colors focus:outline-none focus:ring focus:ring-blue-300 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 mt-auto flex h-[40px] w-full items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium">
                                Get started with PRO
                            </button>
                        </a>
                    </div>
                </div>

                <div className="flex justify-center items-center mt-14">
                    <div className="mt-auto flex w-10/12 items-center rounded-lg border border-gray-200 p-4 bg-gray-50">
                        <a href="/shadcn-nextjs-boilerplate/dashboard/dashboard/settings">
                            <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                                <img
                                    className="aspect-square h-full w-full"
                                    src="https://lh3.googleusercontent.com/a/ACg8ocKGiB3SX_PVR817Y_l-Dy2ybR5Z9KcT4Nm-Ek5fZeG3WS3wEFg=s96-c"
                                    alt="User Avatar"
                                />
                            </span>
                        </a>
                        <a href="/shadcn-nextjs-boilerplate/dashboard/settings">
                            <p className="ml-2 mr-3 flex items-center text-sm font-semibold leading-none text-gray-800">Horizon</p>
                        </a>
                        <form className="ml-auto">
                            <input type="hidden" value="/shadcn-nextjs-boilerplate/dashboard/ai-chat" name="pathName" />
                            <button
                                className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                                type="submit">
                                <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24"
                                    aria-hidden="true" className="h-4 w-4 stroke-gray-800" width="1em"
                                    height="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0 -2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25 -2.25V15m3 0l3 -3m0 0 -3 -3m3 3H9" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>

            </div>

            <div className='w-3/4 min-h-screen bg-blueGray-50 p-6'>
                <h2 className='text-xl font-bold mb-4'>Welcome to Your Dashboard!</h2>
                <div className='flex space-x-3'>
                    {/* Projects Card */}
                    <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 p-6">
                        <div class="flex items-center mb-4">
                            {/* Icon for Projects */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-slate-600">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5V6a2 2 0 012-2h14a2 2 0 012 2v1.5M5 10h14M5 14h14M5 18h14M9 6v12" />
                            </svg>
                            <h5 class="ml-3 text-slate-800 text-xl font-semibold">
                                Total Projects
                            </h5>
                        </div>
                        <p class="block text-slate-600 leading-normal font-light mb-4 text-2xl">
                            100 Projects
                        </p>
                        <div>
                            <a href="/projects" class="text-slate-800 font-semibold text-sm hover:underline flex items-center">
                                View Projects
                                <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Users Card */}
                    <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 p-6">
                        <div class="flex items-center mb-4">
                            {/* Icon for Users */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-slate-600">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 9.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0zM18 19a6 6 0 0 0-12 0" />
                            </svg>
                            <h5 class="ml-3 text-slate-800 text-xl font-semibold">
                                Total Users
                            </h5>
                        </div>
                        <p class="block text-slate-600 leading-normal font-light mb-4 text-2xl">
                            61 Users
                        </p>
                        <div>
                            <a href="/users-list" class="text-slate-800 font-semibold text-sm hover:underline flex items-center">
                                View Users
                                <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Posts Card */}
                    <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 p-6">
                        <div class="flex items-center mb-4">
                            {/* Icon for Posts */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-slate-600">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5h18M9 3v4m6-4v4M5 9h14M5 13h14m-14 4h14" />
                            </svg>
                            <h5 class="ml-3 text-slate-800 text-xl font-semibold">
                                Total Posts
                            </h5>
                        </div>
                        <p class="block text-slate-600 leading-normal font-light mb-4 text-2xl">
                            123 Posts
                        </p>
                        <div>
                            <a href="/posts" class="text-slate-800 font-semibold text-sm hover:underline flex items-center">
                                View Posts
                                <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>


                <div class="relative overflow-x-auto">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Username
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Account
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Credits
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Meek
                                </th>
                                <td class="px-6 py-4">
                                    meek@gmail.cpm
                                </td>
                                <td class="px-6 py-4">
                                    Premium
                                </td>
                                <td class="px-6 py-4">
                                    11
                                </td>
                            </tr>
                            <tr class="bg-white border-b">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    John
                                </th>
                                <td class="px-6 py-4">
                                    john@gmail.com
                                </td>
                                <td class="px-6 py-4">
                                    Free
                                </td>
                                <td class="px-6 py-4">
                                    5
                                </td>
                            </tr>
                            <tr class="bg-white border-b">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Ronald77
                                </th>
                                <td class="px-6 py-4">
                                    ronaldo@gmail.com
                                </td>
                                <td class="px-6 py-4">
                                    Free
                                </td>
                                <td class="px-6 py-4">
                                    13
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>


            </div>

        </div>
    );
}

export default Dashboard;