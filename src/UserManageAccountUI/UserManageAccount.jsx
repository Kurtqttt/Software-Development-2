import React, { useState, useRef } from 'react';
import { Close as CloseIcon, Error as ErrorIcon } from '@mui/icons-material'; // Import icons from Material-UI

const UserManageAccount = () => {
  const [avatar, setAvatar] = useState(null);
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [error, setError] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isFormDisabled, setIsFormDisabled] = useState(false);

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setAvatar(URL.createObjectURL(selectedFile));
  };

  const handleSave = () => {
    if (!email.endsWith('@cit.edu')) {
      setError('Invalid email format. Please enter an email ending with "@cit.edu".');
      setIsFormDisabled(true);
      return;
    }

    if (newPassword === currentPassword) {
      setError('New password must be different from the current password.');
      setIsFormDisabled(true);
      return;
    }

    if (newPassword !== confirmNewPassword) {
      setError('New password and confirm new password must match.');
      setIsFormDisabled(true);
      return;
    }

    if (newPassword.length < 6 || !/[A-Z]/.test(newPassword) || !/\d/.test(newPassword)) {
      setError('New password must be at least 6 characters long and contain at least one capital letter and one number.');
      setIsFormDisabled(true);
      return;
    }

    if (!email || !currentPassword || !newPassword || !confirmNewPassword) {
      setError('All fields must be filled.');
      setIsFormDisabled(true);
      return;
    }

    setShowConfirmation(true);
    setIsFormDisabled(true);
  };

  const confirmSave = () => {
    // Perform save logic here
    console.log('Changes saved successfully!');

    // Reset input fields
    setEmail('');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmNewPassword('');

    // Hide confirmation box
    setShowConfirmation(false);
    // Enable form inputs
    setIsFormDisabled(false);
  };

  const handleConfirmationNo = () => {
    setShowConfirmation(false);
    setIsFormDisabled(false);
  };

  return (
    <div className="account-container w-96 rounded-lg bg-gradient-to-br from-gray-200 via-green-300 to-green-600 max-w-800 min-h-300 flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md p-20 font-roboto">
      <div className="avatar-container flex flex-col items-center">
        <h1 className="manage-account-header text-3xl text-white">Manage Account</h1>
        <div className="avatar-circle w-40 h-40 rounded-full mb-4 shadow-md" style={{ backgroundImage: `url(${avatar})` }}></div>
        <label htmlFor="fileInput" className="upload-profile-button cursor-pointer text-white underline mb-8">Update Profile</label>
        <input ref={fileInputRef} id="fileInput" type="file" onChange={handleFileChange} accept="image/*" className="hidden" />
      </div>
      <div className={`form-container ${error ? 'disabled-input' : ''} flex flex-col items-center`}>
        <input 
          type="text" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className={`w-full rounded-lg border border-gray-300 py-2 px-4 mb-4 ${error && !email.endsWith('@cit.edu') ? 'border-red-500' : ''}`} 
          disabled={isFormDisabled} />
        <input 
          type="password" 
          placeholder="Current Password" 
          value={currentPassword} 
          onChange={(e) => setCurrentPassword(e.target.value)} 
          className={`w-full rounded-lg border border-gray-300 py-2 px-4 mb-4 ${error && newPassword === currentPassword ? 'border-red-500' : ''}`} 
          disabled={isFormDisabled} />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className={`w-full rounded-lg border border-gray-300 py-2 px-4 mb-4 ${error && (newPassword !== confirmNewPassword || newPassword.length < 6 || !/[A-Z]/.test(newPassword) || !/\d/.test(newPassword)) ? 'border-red-500' : ''}`}
          disabled={isFormDisabled}
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
          className={`w-full rounded-lg border border-gray-300 py-2 px-4 mb-4 ${error && (newPassword !== confirmNewPassword || newPassword.length < 6 || !/[A-Z]/.test(newPassword) || !/\d/.test(newPassword)) ? 'border-red-500' : ''}`}
          disabled={isFormDisabled}
        />
        <button className="save-button cursor-pointer text-white rounded-lg py-2 px-8 mt-4 transition-colors duration-300 ease-in-out bg-green-500 hover:bg-green-200" onClick={handleSave} disabled={error !== '' || isFormDisabled}>
          Save
        </button>
      </div>
      {error && (
        <div className="error-container bg-red-100 p-4 rounded shadow-md fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <ErrorIcon className="error-icon text-red-600 text-4xl mb-2" />
          <CloseIcon className="close-button absolute top-2 right-2 cursor-pointer text-gray-500 hover:text-blue-700" onClick={() => { setError(''); setIsFormDisabled(false); }} />
          <div className="error-message text-center text-red-600">{error}</div>
        </div>
      )}
      {showConfirmation && (
        <div className="confirmation-container bg-white bg-opacity-90 rounded shadow-md fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 z-50">
          <div className="confirmation-box text-center">
            <p>Are you sure you want to save changes?</p>
            <button className="bg-blue-700 text-white rounded-lg py-2 px-4 mr-4" onClick={confirmSave}>Yes</button>
            <button className="bg-red-700 text-white rounded-lg py-2 px-4" onClick={handleConfirmationNo}>No</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManageAccount;
