import React from 'react'

const Project = () => {
  return (
      <>
            <div className=''>
                <h2 className="text-3xl font-semibold mb-6">Project</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-white shadow rounded-lg">
                        <h3 className="text-lg font-medium text-gray-600">Total Projects</h3>
                        <p className="text-3xl font-bold text-blue-600 mt-2">50</p>
                    </div>
                    <div className="p-6 bg-white shadow rounded-lg">
                        <h3 className="text-lg font-medium text-gray-600">Active Projects</h3>
                        <p className="text-3xl font-bold text-green-600 mt-2">30</p>
                    </div>
                    <div className="p-6 bg-white shadow rounded-lg">
                        <h3 className="text-lg font-medium text-gray-600">Completed Projects</h3>
                        <p className="text-3xl font-bold text-red-600 mt-2">20</p>
                    </div>
                </div>
          </div>
            <div className="mt-6">
                <h2 className="text-3xl font-semibold mb-6">Project List</h2>
                <div className="bg-white shadow rounded-lg p-6">
                    <ul className="space-y-4">
                        <li className="flex items-center justify-between">
                            <span className="text-gray-600">Project Alpha</span>
                            <span className="text-sm text-gray-400">Active</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text-gray-600">Project Beta</span>
                            <span className="text-sm text-gray-400">Completed</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text-gray-600">Project Gamma</span>
                            <span className="text-sm text-gray-400">On Hold</span>
                        </li>
                    </ul>
                </div>
          </div>
            <div className="mt-6">
                <h2 className="text-3xl font-semibold mb-6">Project Details</h2>
                <div className="bg-white shadow rounded-lg p-6">
                    <ul className="space-y-4">
                        <li className="flex items-center justify-between">
                            <span className="text-gray-600">Project Alpha</span>
                            <span className="text-sm text-gray-400">Deadline: 2023-12-01</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text-gray-600">Project Beta</span>
                            <span className="text-sm text-gray-400">Deadline: 2023-11-15</span>
                        </li>
                    </ul>
                </div>
                
          </div> 
            <div className="mt-6">
                <h2 className="text-3xl font-semibold mb-6">Project Tasks</h2>
                <div className="bg-white shadow rounded-lg p-6">
                    <ul className="space-y-4">
                        <li className="flex items-center justify-between">
                            <span className="text-gray-600">Task 1: Design UI</span>
                            <span className="text-sm text-gray-400">Due: 2023-10-20</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text-gray-600">Task 2: Develop Backend</span>
                            <span className="text-sm text-gray-400">Due: 2023-10-25</span>
                        </li>
                    </ul>
              </div>  
          </div>
            <div className="mt-6">
                <h2 className="text-3xl font-semibold mb-6">Project Team</h2>
                <div className="bg-white shadow rounded-lg p-6">
                    <ul className="space-y-4">
                        <li className="flex items-center justify-between">
                            <span className="text-gray-600">John Doe</span>
                            <span className="text-sm text-gray-400">Role: Project Manager</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text-gray-600">Jane Smith</span>
                            <span className="text-sm text-gray-400">Role: Developer</span>
                        </li>
                    </ul>
              </div>    
          </div>
            <div className="mt-6">
                <h2 className="text-3xl font-semibold mb-6">Project Updates</h2>
                <div className="bg-white shadow rounded-lg p-6">
                    <ul className="space-y-4">
                        <li className="flex items-center justify-between">
                            <span className="text-gray-600">Project Alpha: New feature added</span>
                            <span className="text-sm text-gray-400">Updated: 2023-10-10</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text-gray-600">Project Beta: Bug fixes applied</span>
                            <span className="text-sm text-gray-400">Updated: 2023-10-12</span>
                        </li>
                    </ul>
              </div>    
          </div>
          
          <div className="mt-6">
                <h2 className="text-3xl font-semibold mb-6">Project Milestones</h2>
                <div className="bg-white shadow rounded-lg p-6">
                    <ul className="space-y-4">
                        <li className="flex items-center justify-between">
                            <span className="text-gray-600">Milestone 1: Project Kickoff</span>
                            <span className="text-sm text-gray-400">Date: 2023-10-01</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text-gray-600">Milestone 2: First Prototype</span>
                            <span className="text-sm text-gray-400">Date: 2023-11-01</span>
                        </li>
                    </ul>
              </div>    
            </div>
        </>
    )
}

export default Project