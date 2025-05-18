import React, { useState } from 'react'

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false)
    return (
        <>
            <button className="md:hidden m-4 p-2 bg-blue-600 text-white rounded" onClick={() => setShowSidebar(!showSidebar)} >Toggle Sidebar</button>
            <div className="flex h-screen">
                <aside id="sidebar" className={`w-64 bg-white shadow-md p-4 transition-all duration-200 ease-in-out ${showSidebar ? 'block' : 'hidden'} md:block`}>
                    <h1 className="text-2xl font-bold text-gray-800 mb-6">Admin Panel</h1>
                    <nav className="space-y-6">
                        <a href="#"
                            className="flex items-center px-4 py-2 text-gray-700 rounded-lg transition duration-200 hover:bg-blue-100 hover:text-blue-700">
                            <i data-feather="home" className="mr-2"></i>Dashboard</a>
                        <a href="#"
                            className="flex items-center px-4 py-2 text-gray-700 rounded-lg transition duration-200 hover:bg-blue-100 hover:text-blue-700">
                            <i data-feather="users" className="mr-2"></i>Employees</a>
                        <a href="#"
                            className=" flex item-center px-4 py-2 text-gray-700 rounded-lg transition duration-200 hover:bg-blue-100 hover:text-blue-700">
                            <i data-feather="briefcase" className="mr-2"></i>Projects</a>
                        <a href="#"
                            className="flex items-center px-4 py-2 text-gray-700 rounded-lg transition duration-200 hover:bg-blue-100 hover:text-blue-700">
                            <i data-feather="settings" className="mr-2"></i>Settings</a>
                    </nav>
                </aside>
                <main className="flex-1 p-6">
                    <h1 className="text-3xl font-bold text-gray-800">Welcome to HR Dashboard</h1>
                    <p className="mt-4 text-gray-600">This is Your Contact Area</p>
                </main>
            </div>
        </>
    )
}

export default Sidebar