import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/legal/Footer';
import { CookieConsent } from './components/legal/CookieConsent';
import { VineyardCard } from './components/vineyard/VineyardCard';
import { LoginForm } from './components/auth/LoginForm';
import { Dashboard } from './pages/admin/Dashboard';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { MapPage } from './pages/MapPage';
import { EventsPage } from './pages/EventsPage';
import { MenuPage } from './components/menu/MenuPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicy } from './pages/legal/PrivacyPolicy';
import { CookiePolicy } from './pages/legal/CookiePolicy';
import { TermsAndConditions } from './pages/legal/TermsAndConditions';
import { PrivacyCenter } from './pages/legal/PrivacyCenter';
import { NotFoundPage } from './pages/NotFoundPage';
import { Button } from './components/common/Button';
import { vineyards } from './data/vineyards';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <main className="flex-grow container mx-auto px-4 py-8">
                  <section className="mb-12">
                    <h2 className="text-3xl font-bold text-[#722F37] mb-6">
                      Discover Polish Vineyards
                    </h2>
                    <p className="text-gray-600 max-w-2xl mb-8">
                      Explore the finest vineyards across Poland, from the historic regions of Lesser Poland
                      to the sunny slopes of Lower Silesia. Experience unique wine tastings, guided tours,
                      and unforgettable views.
                    </p>
                    <div className="flex gap-4">
                      <Button href="/map" size="lg">
                        Explore Map
                      </Button>
                      <Button href="/menu" variant="outline" size="lg">
                        View Menu
                      </Button>
                    </div>
                  </section>

                  <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {vineyards.map((vineyard) => (
                      <VineyardCard key={vineyard.id} vineyard={vineyard} />
                    ))}
                  </section>
                </main>
                <Footer />
              </>
            }
          />
          <Route
            path="/menu"
            element={
              <>
                <Header />
                <MenuPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Header />
                <AboutPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Header />
                <ContactPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/map"
            element={
              <>
                <Header />
                <MapPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/events"
            element={
              <>
                <Header />
                <EventsPage />
                <Footer />
              </>
            }
          />
          <Route path="/admin/login" element={<LoginForm />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/legal/privacy-policy"
            element={
              <>
                <Header />
                <PrivacyPolicy />
                <Footer />
              </>
            }
          />
          <Route
            path="/legal/cookie-policy"
            element={
              <>
                <Header />
                <CookiePolicy />
                <Footer />
              </>
            }
          />
          <Route
            path="/legal/terms"
            element={
              <>
                <Header />
                <TermsAndConditions />
                <Footer />
              </>
            }
          />
          <Route
            path="/legal/privacy-center"
            element={
              <>
                <Header />
                <PrivacyCenter />
                <Footer />
              </>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;