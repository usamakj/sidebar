import React from 'react'

const Dashboard = () => {
    return (
        <>
            <div className=''>
                <h2 className="text-3xl font-semibold mb-6">Dashboard</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-white shadow rounded-lg">
                        <h3 className="text-lg font-medium text-gray-600">Total Employees</h3>
                        <p className="text-3xl font-bold text-blue-600 mt-2">120</p>
                    </div>
                    <div className="p-6 bg-white shadow rounded-lg">
                        <h3 className="text-lg font-medium text-gray-600">Active Projects</h3>
                        <p className="text-3xl font-bold text-green-600 mt-2">8</p>
                    </div>
                    <div className="p-6 bg-white shadow rounded-lg">
                        <h3 className="text-lg font-medium text-gray-600">On Leave</h3>
                        <p className="text-3xl font-bold text-red-600 mt-2">4</p>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <h2 className="text-3xl font-semibold mb-6">Recent Activities</h2>
                <div className="bg-white shadow rounded-lg p-6">
                    <ul className="space-y-4">
                        <li className="flex items-center justify-between">
                            <span className="text-gray-600">John Doe added a new project</span>
                            <span className="text-sm text-gray-400">2 hours ago</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text-gray-600">Jane Smith updated her profile</span>
                            <span className="text-sm text-gray-400">3 hours ago</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text-gray-600">Michael Brown completed a task</span>
                            <span className="text-sm text-gray-400">5 hours ago</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-6">
                <h2 className="text-3xl font-semibold mb-6">Upcoming Deadlines</h2>
                <div className="bg-white shadow rounded-lg p-6">
                    <ul className="space-y-4">
                        <li className="flex items-center justify-between">
                            <span className="text-gray-600">Project Alpha - Due in 3 days</span>
                            <span className="text-sm text-gray-400">Due: 2023-10-15</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text-gray-600">Project Beta - Due in 5 days</span>
                            <span className="text-sm text-gray-400">Due: 2023-10-17</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Dashboard