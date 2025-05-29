import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoachCapabilities from './components/CoachCapabilities';
import AthleteCapabilities from './components/AthleteCapabilities';
import CoachDashboardDemo from './components/CoachDashboardDemo';
import AthleteDashboardDemo from './components/AthleteDashboardDemo';
import Resources from './components/Resources';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import Features from './components/Features';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <CoachCapabilities />
              <AthleteCapabilities />
            </>
          } />
          <Route path="/register" element={<Register />} />
          <Route path="/features" element={<Features />} />
          <Route path="/coach-dashboard" element={<CoachDashboardDemo />} />
          <Route path="/athlete-dashboard" element={<AthleteDashboardDemo />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;