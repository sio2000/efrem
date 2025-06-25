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
import Inspiration from './components/Inspiration';
import AthletePage from './components/AthletePage';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Inspiration />
              <div className="flex justify-center my-8">
                <Link to="/athlete" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-bold rounded-xl shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 focus:ring-4 focus:ring-blue-300 focus:outline-none">
                  View Athlete Profile
                </Link>
              </div>
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
          <Route path="/athlete" element={<AthletePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;