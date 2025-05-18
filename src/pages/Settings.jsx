import React from 'react'

const Settings = () => {
  return (
      <>
            <div className=''>
                <h2 className="text-3xl font-semibold mb-6">Settings</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-white shadow rounded-lg">
                        <h3 className="text-lg font-medium text-gray-600">Account Settings</h3>
                        <p className="text-3xl font-bold text-blue-600 mt-2">Manage your account settings</p>
                    </div>
                    <div className="p-6 bg-white shadow rounded-lg">
                        <h3 className="text-lg font-medium text-gray-600">Privacy Settings</h3>
                        <p className="text-3xl font-bold text-green-600 mt-2">Manage your privacy settings</p>
                    </div>
                    <div className="p-6 bg-white shadow rounded-lg">
                        <h3 className="text-lg font-medium text-gray-600">Notification Settings</h3>
                        <p className="text-3xl font-bold text-red-600 mt-2">Manage your notification settings</p>
                  </div>
                    <div className="p-6 bg-white shadow rounded-lg">
                        <h3 className="text-lg font-medium text-gray-600">Security Settings</h3>
                        <p className="text-3xl font-bold text-red-600 mt-2">Manage your security settings</p>
                  </div>
                    
                </div>
            </div>
      
      </>
  )
}

export default Settings