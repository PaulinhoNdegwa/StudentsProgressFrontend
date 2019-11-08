import React from 'react';
import './App.css';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SplashPage from './components/SplashPage/SplashPage';
import StudentDetails from './components/StudentDetails/StudentDetails';

toast.configure({
  autoClose: 8000,
  draggable: false,
  position: toast.POSITION.TOP_CENTER
});

function App() {
  return (
    <div className="App">
      <SplashPage />
      <StudentDetails />
    </div>
  );
}

export default App;
