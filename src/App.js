import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import Events from './pages/Events';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={
              <>
                <Header />
                <main className="main-content">
                  <Home />
                </main>
                <Footer />
              </>
            } />
            <Route path="/about" element={
              <>
                <Header />
                <main className="main-content">
                  <About />
                </main>
                <Footer />
              </>
            } />
            <Route path="/services" element={
              <>
                <Header />
                <main className="main-content">
                  <Services />
                </main>
                <Footer />
              </>
            } />
            <Route path="/contact" element={
              <>
                <Header />
                <main className="main-content">
                  <Contact />
                </main>
                <Footer />
              </>
            } />
            <Route path="/donate" element={
              <>
                <Header />
                <main className="main-content">
                  <Donate />
                </main>
                <Footer />
              </>
            } />
            <Route path="/events" element={
              <>
                <Header />
                <main className="main-content">
                  <Events />
                </main>
                <Footer />
              </>
            } />
            <Route path="/admin/login" element={
              <>
                <Header />
                <main className="main-content">
                  <Login />
                </main>
                <Footer />
              </>
            } />
            <Route path="/admin/dashboard" element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
