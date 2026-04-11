import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TeleprompterPage from './pages/TeleprompterPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/teleprompter" element={<TeleprompterPage />} />
    </Routes>
  )
}

export default App
