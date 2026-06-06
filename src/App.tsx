import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/landing'
import AuthPage from './pages/auth'
import RiderDashboard from './pages/dashboard/rider'
import DriverDashboard from './pages/dashboard/driver'
import IntelligenceDashboard from './pages/dashboard/intelligence'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/auth/login" element={<AuthPage mode="login" />} />
        <Route path="/auth/register" element={<AuthPage mode="register" />} />
        <Route path="/dashboard/rider" element={<RiderDashboard />} />
        <Route path="/dashboard/driver" element={<DriverDashboard />} />
        <Route path="/dashboard/intelligence" element={<IntelligenceDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
