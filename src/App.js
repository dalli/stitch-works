import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Tables from './pages/Tables';
import Forms from './pages/Forms';
import Charts from './pages/Charts';
import UIElements from './pages/UIElements';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <ThemeProvider>
      <Router>
        <div className="relative flex h-auto min-h-screen w-full flex-col bg-white dark:bg-[#111318] group/design-root overflow-x-hidden transition-colors" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
          <div className="layout-container flex h-full grow flex-col">
            <div className="flex">
              {/* Sidebar */}
              <aside className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed left-0 top-0 h-screen z-40 transition-transform duration-300 ease-in-out`}>
                <Sidebar onClose={() => setSidebarOpen(false)} />
              </aside>
              
              {/* Overlay for mobile */}
              {sidebarOpen && (
                <div 
                  className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                  onClick={() => setSidebarOpen(false)}
                />
              )}
              
              {/* Main Content Area */}
              <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'lg:pl-64' : 'lg:pl-0'}`}>
                <Header onMenuClick={toggleSidebar} />
                <main className="min-h-screen">
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/tables" element={<Tables />} />
                    <Route path="/forms" element={<Forms />} />
                    <Route path="/charts" element={<Charts />} />
                    <Route path="/ui-elements" element={<UIElements />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/settings" element={<Settings />} />
                  </Routes>
                </main>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
