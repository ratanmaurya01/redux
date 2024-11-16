import React, { useState, FC } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { setLogindData } from '../redux/feature/authSlice';
import LogininPanel from '../assests/LoginPanel.jpg'

interface LoginDialogProps {
  isDialogOpen: boolean;
  onClose: () => void;
  onSubmit: (credentials: { username: string; password: string }) => void;
}

const LoginDialog: FC<LoginDialogProps> = ({ isDialogOpen, onClose, onSubmit }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setLogindData({ username, password }));
    onSubmit({ username, password });
    setPassword('');
    setUsername('');

  };

  return (
    isDialogOpen && (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col sm:flex-row w-11/12 sm:w-3/5 lg:w-1/2 xl:w-2/5">
          <div className="hidden sm:block sm:w-2/5">
            <img src={LogininPanel} alt="Login" className="object-cover h-full w-full rounded-l-lg" />
          </div>
          <div className="w-full sm:w-3/5 p-6">
            <div className='flex justify-between text-center'>
            <p className="text-gray-800 mb-4 text-2xl">Login</p>
            <p>Don't have account yet <span className='text-black-600 m-3 text-center'>Signin</span></p> 
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  className="mt-1 p-2 border rounded w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="mt-1 p-2 border rounded w-full"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="mr-2 bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default LoginDialog;
