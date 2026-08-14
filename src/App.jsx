import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ConceptSection from './components/ConceptSection';
import LineupSection from './components/LineupSection';
import MenuSection from './components/MenuSection';
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
  const [selectedMembershipTier, setSelectedMembershipTier] = useState('black-key');

  // Lightbox Modal state
  const [lightboxData, setLightboxData] = useState({ isOpen: false, image: '', title: '' });

  const handleOpenReservation = (data = {}) => {
    setReservationInitialData(data);
    setIsReservationOpen(true);
  };

  const handleOpenMembership = (tier = 'black-key') => {
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
      {/* Top Fixed Navigation with Dual Soundscape Player */}
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
        {/* 1. Cinematic Hero with Interactive Level Switcher (Jazz Piano Bar vs Sub-Vault House Club) */}
        <HeroSection 
          lang={lang}
          onOpenReservation={handleOpenReservation}
          onOpenMembership={() => handleOpenMembership()}
        />

        {/* 2. The Two Levels & Dual Frequency Concept */}
        <ConceptSection 
          lang={lang}
          onOpenReservation={handleOpenReservation}
          onOpenMembership={() => handleOpenMembership()}
        />

        {/* 3. Live Weekly Lineup (Tuesday to Sunday Jazz & House Schedule) */}
        <LineupSection 
          lang={lang}
          onOpenReservation={handleOpenReservation}
        />

        {/* 4. Cocktails, Liquid Alchemy & Late Night Gourmet Bites */}
        <MenuSection 
          lang={lang}
          currency={currency}
          onOpenReservation={handleOpenReservation}
        />

        {/* 5. Architectural Spaces (Steinway Grand Piano Bar, Sub-Vault Club, Vinyl Bar, VIP Booth) */}
        <SpacesGallery 
          lang={lang}
          onOpenReservation={handleOpenReservation}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 6. Black Key Society & Private VIP Privileges */}
        <MembershipSection 
          lang={lang}
          onOpenMembership={handleOpenMembership}
        />

        {/* 7. Rolling Stone, DownBeat, Mixmag Press & Sound Accolades */}
        <ReviewsAndPress 
          lang={lang}
        />

        {/* 8. Location, Doors & Hours */}
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

      {/* Multi-Step Reservation & VIP Pass Modal */}
      <ReservationModal 
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        lang={lang}
        currency={currency}
        initialData={reservationInitialData}
      />

      {/* Black Key VIP Admission Modal */}
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
