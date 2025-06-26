import React from 'react';
import HeroSlider from '../components/HeroSlider';
import OffersRow from '../components/OffersRow';
import IntroText from '../components/IntroText';

export default function Home() {
  return (
    <div className="container py-5">
      <HeroSlider />
      <OffersRow />
      <IntroText />
    </div>
  );
}
