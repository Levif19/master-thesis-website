import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Motivation from './pages/Motivation'
import Methodology from './pages/Methodology'
import Results from './pages/Results'
import Discussion from './pages/Discussion'
import Conclusion from './pages/Conclusion'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Navbar />
      <main className="flex-1 px-6 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/motivation" element={<Motivation />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/results" element={<Results />} />
          <Route path="/discussion" element={<Discussion />} />
          <Route path="/conclusion" element={<Conclusion />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}