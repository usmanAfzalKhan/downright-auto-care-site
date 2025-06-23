import React from 'react';
import HeroSlider from '../components/HeroSlider';
import OffersRow from '../components/OffersRow';

export default function Home() {
  return (
    <div className="container py-5">
      <HeroSlider />
      <OffersRow />
      <h1>Home</h1>
      <p>Welcome to Downright Auto Care!</p>
    </div>
  );
}
