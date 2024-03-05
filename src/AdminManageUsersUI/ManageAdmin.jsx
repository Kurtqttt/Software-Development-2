import React, { useState } from 'react';

const ManageAdmin = () => {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [role, setRole] = useState('');
  const [showRemoveConfirmation, setShowRemoveConfirmation] = useState(false);
  const [showCreateUserConfirmation, setShowCreateUserConfirmation] = useState(false);
  const [showEditConfirmation, setShowEditConfirmation] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [invalidFields, setInvalidFields] = useState([]);

  const handleCreateUser = () => {
    if (lastName && firstName && role) {
      setShowCreateUserConfirmation(true);
      setShowErrorMessage(false); // Hide error message if all fields are filled
    } else {
      setShowErrorMessage(true);
      setInvalidFields(['lastName', 'firstName', 'role'].filter(field => !field));
    }
  };

  const handleConfirmCreateUser = () => {
    // Perform action to create user
    setLastName('');
    setFirstName('');
    setRole('');
    setShowCreateUserConfirmation(false);
    // Additional actions after confirmation
  };

  const handleCancelCreateUser = () => {
    setShowCreateUserConfirmation(false);
    // Additional actions if user cancels
  };

  const handleRemoveUser = () => {
    if (lastName && firstName && role) {
      setShowRemoveConfirmation(true);
      setShowErrorMessage(false); // Hide error message if all fields are filled
    } else {
      setShowErrorMessage(true);
      setInvalidFields(['lastName', 'firstName', 'role'].filter(field => !field));
    }
  };

  const handleConfirmRemoveUser = () => {
    // Perform action to remove user
    setShowRemoveConfirmation(false);
    setLastName('');
    setFirstName('');
    setRole('');
    // Additional actions after confirmation
  };

  const handleCancelRemoveUser = () => {
    setShowRemoveConfirmation(false);
    // Additional actions if user cancels
  };

  const handleEditUser = () => {
    if (lastName && firstName && role) {
      setShowEditConfirmation(true);
      setShowErrorMessage(false); // Hide error message if all fields are filled
    } else {
      setShowErrorMessage(true);
      setInvalidFields(['lastName', 'firstName', 'role'].filter(field => !field));
    }
  };

  const handleConfirmEditUser = () => {
    // Perform action to edit user
    setShowEditConfirmation(false);
    setLastName('');
    setFirstName('');
    setRole('');
    // Additional actions after confirmation
  };

  const handleCancelEditUser = () => {
    setShowEditConfirmation(false);
    // Additional actions if user cancels
  };

  const handleOverlayClick = (e) => {
    e.stopPropagation(); // Prevent click event from bubbling up to parent elements
  };

  return (
    <div className="flex items-center justify-center h-screen relative">
      {(showCreateUserConfirmation || showRemoveConfirmation || showEditConfirmation) && (
        <div
          className="fixed inset-0 bg-gray-900 opacity-50 z-50"
          onClick={handleOverlayClick}
        ></div>
      )}
      <div className="w-96 h-600 bg-green-100 rounded-lg p-8 relative">
        <h1 className="text-xl font-bold mb-4">Edit, Add, Remove Users</h1>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8 shadow-sm sm:text-sm border rounded-md ${
              invalidFields.includes('lastName') ? 'border-red-500' : ''
            }`}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            disabled={showCreateUserConfirmation || showRemoveConfirmation || showEditConfirmation}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8 shadow-sm sm:text-sm border rounded-md ${
              invalidFields.includes('firstName') ? 'border-red-500' : ''
            }`}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            disabled={showCreateUserConfirmation || showRemoveConfirmation || showEditConfirmation}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="role" className="block text-sm font-medium text-gray-700">
            Role
          </label>
          <input
            type="text"
            id="role"
            className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8 shadow-sm sm:text-sm border rounded-md ${
              invalidFields.includes('role') ? 'border-red-500' : ''
            }`}
            value={role}
            onChange={(e) => setRole(e.target.value)}
            disabled={showCreateUserConfirmation || showRemoveConfirmation || showEditConfirmation}
          />
        </div>
        {showErrorMessage && (
          <div className="absolute top-0 left-5 right-0 mt-3 text-center text-red-600">Please fill out all fields.</div>
        )}
        <div className="flex justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mr-2 border-transparent"
            disabled={showCreateUserConfirmation || showRemoveConfirmation || showEditConfirmation}
            onClick={handleEditUser}
          >
            Edit
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full mr-2 border-transparent"
            disabled={showCreateUserConfirmation || showRemoveConfirmation || showEditConfirmation}
            onClick={handleRemoveUser}
          >
            Remove
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full border-transparent"
            disabled={showCreateUserConfirmation || showRemoveConfirmation || showEditConfirmation}
            onClick={handleCreateUser}
          >
            Create User
          </button>
        </div>
        {showCreateUserConfirmation && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md shadow-lg z-50">
            <p>Are you sure you want to create this user?</p>
            <div className="flex justify-end mt-4">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
                onClick={handleConfirmCreateUser}
              >
                Confirm
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleCancelCreateUser}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
        {showRemoveConfirmation && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md shadow-lg z-50">
            <p>Are you sure you want to remove this user?</p>
            <div className="flex justify-end mt-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
                onClick={handleConfirmRemoveUser}
              >
                Confirm
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleCancelRemoveUser}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
        {showEditConfirmation && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md shadow-lg z-50">
            <p>Are you sure you want to edit this user?</p>
            <div className="flex justify-end mt-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
                onClick={handleConfirmEditUser}
              >
                Confirm
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleCancelEditUser}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageAdmin;

