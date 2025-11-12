import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoadingScreen from './components/common/LoadingScreen';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const PlatformDemo = lazy(() => import('./pages/PlatformDemo'));
const Pillars = lazy(() => import('./pages/Pillars'));
const Products = lazy(() => import('./pages/Products'));
const About = lazy(() => import('./pages/About'));

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/platform-demo" element={<PlatformDemo />} />
            <Route path="/pillars" element={<Pillars />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
