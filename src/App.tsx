import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, HashRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { LeftSidebar } from './components/LeftSidebar';
import { ProgressBar } from './components/ProgressBar';
import { ControversePage } from './components/pages/ControversePage';
import { ExpertPage } from './components/pages/ExpertPage';
import { SourcesPage } from './components/pages/SourcesPage';
import { ResumePage } from './components/pages/ResumePage';

function AppContent() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setScrollProgress(0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      <ProgressBar progress={scrollProgress} />
      
      <div className="flex">
        <LeftSidebar />
        
        <main className="flex-1 lg:ml-64 mt-[180px] pt-12">
          <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12 py-12 pb-96">
            <Routes>
              <Route path="/" element={<ControversePage />} />
              <Route path="/controverse" element={<ControversePage />} />
              <Route path="/expert" element={<ExpertPage />} />
              <Route path="/sources" element={<SourcesPage />} />
              <Route path="/resume" element={<ResumePage />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}