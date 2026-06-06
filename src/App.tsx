import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/landing'
import AuthPage from './pages/auth'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/auth/login" element={<AuthPage mode="login" />} />
        <Route path="/auth/register" element={<AuthPage mode="register" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
