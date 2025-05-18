import React from 'react'

const Employee = () => {
  return (
      <>
            <div className=''>
                <h2 className="text-3xl font-semibold mb-6">Employee</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-white shadow rounded-lg">
                        <h3 className="text-lg font-medium text-gray-600">Total Employees</h3>
                        <p className="text-3xl font-bold text-blue-600 mt-2">120</p>
                    </div>
                    <div className="p-6 bg-white shadow rounded-lg">
                        <h3 className="text-lg font-medium text-gray-600">Active Employees</h3>
                        <p className="text-3xl font-bold text-green-600 mt-2">100</p>
                    </div>
                    <div className="p-6 bg-white shadow rounded-lg">
                        <h3 className="text-lg font-medium text-gray-600">On Leave</h3>
                        <p className="text-3xl font-bold text-red-600 mt-2">20</p>
                    </div>
                </div>
          </div>
                   
            <div className="mt-6">
                <h2 className="text-3xl font-semibold mb-6">Employee List</h2>
                <div className="bg-white shadow rounded-lg p-6">
                    <ul className="space-y-4">
                        <li className="flex items-center justify-between">
                            <span className="text-gray-600">John Doe</span>
                            <span className="text-sm text-gray-400">Active</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text-gray-600">Jane Smith</span>
                            <span className="text-sm text-gray-400">On Leave</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text-gray-600">Michael Brown</span>
                            <span className="text-sm text-gray-400">Active</span>
                        </li>
                    </ul>
                </div>
          </div>
            <div className="mt-6">
                <h2 className="text-3xl font-semibold mb-6">Employee Details</h2>
                <div className="bg-white shadow rounded-lg p-6">
                    <ul className="space-y-4">
                        <li className="flex items-center justify-between">
                            <span className="text-gray-600">John Doe</span>
                            <span className="text-sm text-gray-400">Position: Software Engineer</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text-gray-600">Jane Smith</span>
                            <span className="text-sm text-gray-400">Position: Project Manager</span>
                        </li>
                    </ul>
                </div>
          </div>
          
            <div className="mt-6">
                <h2 className="text-3xl font-semibold mb-6">Employee Tasks</h2>
                <div className="bg-white shadow rounded-lg p-6">
                    <ul className="space-y-4">
                        <li className="flex items-center justify-between">
                            <span className="text-gray-600">Task 1</span>
                            <span className="text-sm text-gray-400">Due: 2023-10-15</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text-gray-600">Task 2</span>
                            <span className="text-sm text-gray-400">Due: 2023-10-17</span>
                        </li>
                    </ul>
              </div>  
            </div>
      </>
  )
}

export default Employee