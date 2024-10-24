import { useState } from 'react';

function LoginForm({
  room,
  setRoom,
  username,
  setUsername,
  language,
  setLanguage,
  joinRoom,
}) {
  // Initialize role with an empty string for default "Select Role"
  const [role, setRole] = useState('');
  const [agentCode, setAgentCode] = useState('');
  const [supervisorCode, setSupervisorCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Function to handle role change
  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
    setErrorMessage(''); // Clear any previous error messages
  };

  // Function to validate codes and attempt to join room
  const attemptJoinRoom = () => {
    if (role === 'agent' && agentCode !== 'FoundeverAgentRole') {
      setErrorMessage('Invalid code for Agent role');
    } else if (role === 'supervisor' && supervisorCode !== 'FoundeverSupRole') {
      setErrorMessage('Invalid code for Supervisor role');
    } else {
      joinRoom();
    }
  };

  return (
    <div className="flex-grow flex items-center justify-center bg-[#09092d]">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="mb-4">
          <label
            htmlFor="room"
            className="block text-sm font-medium mb-1 text-white"
          >
            Conversation Code:
          </label>
          <input
            id="room"
            type="text"
            placeholder="Enter conversation code"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium mb-1 text-white"
          >
            Your Name:
          </label>
          <input
            id="username"
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="language"
            className="block text-sm font-medium mb-1 text-white"
          >
            Language:
          </label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="it">Italian</option>
            <option value="pt-pt">Portuguese</option>
          </select>
        </div>
        {/* Role Selection */}
        <div className="mb-4">
          <label
            htmlFor="role"
            className="block text-sm font-medium mb-1 text-white"
          >
            Role:
          </label>
          <select
            id="role"
            value={role}
            onChange={(e) => handleRoleChange(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
          >
            <option value="">Select Role</option>
            <option value="user">User</option>
            <option value="agent">Agent</option>
            <option value="supervisor">Supervisor</option>
          </select>
        </div>

        {/* Conditional Inputs for Codes */}
        {role === 'agent' && (
          <>
            <label
              htmlFor="agentCode"
              className="block text-sm font-medium mb-1 text-white"
            >
              Agent Code:
            </label>
            <input
              id="agentCode"
              type="text"
              placeholder="Enter agent code"
              value={agentCode}
              onChange={(e) => setAgentCode(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white mb-4"
            />
          </>
        )}

        {role === 'supervisor' && (
          <>
            <label
              htmlFor="supervisorCode"
              className="block text-sm font-medium mb-1 text-white"
            >
              Supervisor Code:
            </label>
            <input
              id="supervisorCode"
              type="text"
              placeholder="Enter supervisor code"
              value={supervisorCode}
              onChange={(e) => setSupervisorCode(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white mb-4"
            />
          </>
        )}

        {/* Error Message Display */}
        {errorMessage && (
          <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
        )}

        {/* Join Button */}
        {role && (
          <button
            onClick={attemptJoinRoom}
            disabled={!role} // Disable button if no role is selected
            className={`w-full bg-indigo-${role ? '600' : '400'} text-white py-2 px-4 rounded-md hover:bg-indigo-${role ? '700' : '400'} focus:outline-none transition duration-${role ? '150' : ''} ease-in-out`}
          >
           Join Conversation
          </button>
        )}
      </div>
    </div>
  );
}

export default LoginForm;
