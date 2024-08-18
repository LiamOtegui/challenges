import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserAuth from './pages/UserAuth';


function App() {

  return (
    <div>
      <Routes>
        <Route index element={<UserAuth />} />
        <Route path='/:username' element={<HomePage />}/>
      </Routes>

      <ToastContainer />
    </div>
  )
}

export default App
