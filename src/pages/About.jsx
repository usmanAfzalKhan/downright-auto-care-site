// src/pages/About.jsx
import React from 'react';

import AboutInfo from '../components/AboutInfo';
import WhyChoose from '../components/WhyChoose';
import BeforeAfterGallery from '../components/BeforeAfterGallery';
import Owner from '../components/Owner';

export default function About() {
  return (
    <>
      <AboutInfo />
      <WhyChoose />
      <Owner />
      <BeforeAfterGallery />
    </>
  );
}
