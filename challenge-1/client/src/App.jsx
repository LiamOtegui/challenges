import './App.css'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CiApple } from "react-icons/ci";

function App() {

  return (
    <div className="flex h-screen">
      <nav className="w-[10rem] bg-white p-4 flex justify-center text-[3rem] pt-8">
        <CiApple />
      </nav>

      <main className="flex-1 p-4">
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path='/home/:recommendationId' element={<HomePage />} />
        </Routes>
      </main>

      <ToastContainer />
    </div>
  )
}

export default App
