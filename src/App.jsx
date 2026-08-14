import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ConceptSection from './components/ConceptSection';
import MenuSection from './components/MenuSection';
import SommelierExperience from './components/SommelierExperience';
import SpacesGallery from './components/SpacesGallery';
import MembershipSection from './components/MembershipSection';
import ReviewsAndPress from './components/ReviewsAndPress';
import LocationAndContact from './components/LocationAndContact';
import ReservationModal from './components/ReservationModal';
import MembershipModal from './components/MembershipModal';
import LightboxModal from './components/LightboxModal';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [lang, setLang] = useState('es');
  const [currency, setCurrency] = useState('EUR');
  
  // Reservation Modal state
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [reservationInitialData, setReservationInitialData] = useState({});

  // Membership Modal state
  const [isMembershipOpen, setIsMembershipOpen] = useState(false);
  const [selectedMembershipTier, setSelectedMembershipTier] = useState('amber-vip');

  // Lightbox Modal state
  const [lightboxData, setLightboxData] = useState({ isOpen: false, image: '', title: '' });

  const handleOpenReservation = (data = {}) => {
    setReservationInitialData(data);
    setIsReservationOpen(true);
  };

  const handleOpenMembership = (tier = 'amber-vip') => {
    setSelectedMembershipTier(tier);
    setIsMembershipOpen(true);
  };

  const handleOpenLightbox = (image, title) => {
    setLightboxData({ isOpen: true, image, title });
  };

  const handleCloseLightbox = () => {
    setLightboxData({ isOpen: false, image: '', title: '' });
  };

  return (
    <div className="site-wrapper">
      {/* Top Fixed Luxury Navigation */}
      <Navbar 
        lang={lang}
        setLang={setLang}
        currency={currency}
        setCurrency={setCurrency}
        onOpenReservation={() => handleOpenReservation()}
        onOpenMembership={() => handleOpenMembership()}
      />

      {/* Main Page Content */}
      <main>
        {/* 1. Cinematic Hero with Instant Booking Widget */}
        <HeroSection 
          lang={lang}
          onOpenReservation={handleOpenReservation}
          onOpenMembership={() => handleOpenMembership()}
        />

        {/* 2. Philosophy & The 4 Pillars */}
        <ConceptSection 
          lang={lang}
          onOpenReservation={handleOpenReservation}
          onOpenMembership={() => handleOpenMembership()}
        />

        {/* 3. Menus, 8-Step Symphony & Grand Cellar */}
        <MenuSection 
          lang={lang}
          currency={currency}
          onOpenReservation={handleOpenReservation}
        />

        {/* 4. Sommelier Flight Interactive Engine */}
        <SommelierExperience 
          lang={lang}
          onOpenReservation={handleOpenReservation}
        />

        {/* 5. Architectural Spaces Showcase */}
        <SpacesGallery 
          lang={lang}
          onOpenReservation={handleOpenReservation}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 6. Private Members Club & Privileges */}
        <MembershipSection 
          lang={lang}
          onOpenMembership={handleOpenMembership}
        />

        {/* 7. Michelin Accolades & Press Reviews */}
        <ReviewsAndPress 
          lang={lang}
        />

        {/* 8. Location, Valet, Dress Code & Concierge */}
        <LocationAndContact 
          lang={lang}
          onOpenReservation={handleOpenReservation}
        />
      </main>

      {/* Footer */}
      <Footer 
        lang={lang}
        onOpenReservation={() => handleOpenReservation()}
        onOpenMembership={() => handleOpenMembership()}
      />

      {/* Multi-Step Reservation Modal */}
      <ReservationModal 
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        lang={lang}
        currency={currency}
        initialData={reservationInitialData}
      />

      {/* Private Membership Admission Modal */}
      <MembershipModal 
        isOpen={isMembershipOpen}
        onClose={() => setIsMembershipOpen(false)}
        lang={lang}
        initialTier={selectedMembershipTier}
      />

      {/* Fullscreen Lightbox */}
      <LightboxModal 
        isOpen={lightboxData.isOpen}
        onClose={handleCloseLightbox}
        image={lightboxData.image}
        title={lightboxData.title}
      />
    </div>
  );
}
