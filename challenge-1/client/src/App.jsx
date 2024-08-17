import './App.css'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='/home/:recommendationId' element={<HomePage />} />
      </Routes>

      <ToastContainer />
    </>
  )
}

export default App
