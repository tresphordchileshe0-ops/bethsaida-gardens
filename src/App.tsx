import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { PlaceholderProvider } from './contexts/PlaceholderContext';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Events } from './pages/Events';
import { Gallery } from './pages/Gallery';
import { Packages } from './pages/Packages';
import { Contact } from './pages/Contact';

interface AppProps {
  /** Show dashed markers on unconfirmed placeholder content and sample photos. */
  showPlaceholderMarkers?: boolean;
}

export function App({ showPlaceholderMarkers = true }: AppProps) {
  return (
    <MotionConfig reducedMotion="user">
      <PlaceholderProvider show={showPlaceholderMarkers}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/events" element={<Events />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PlaceholderProvider>
    </MotionConfig>);

}