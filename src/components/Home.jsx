import React, { useState } from 'react'
import {
    About,
    Contact,
    Experience,
    Feedbacks,
    Hero,
    Navbar,
    Tech,
    Works,
    StarsCanvas,
  } from ".";
import i18next from 'i18next';
  
const Home = () => {
  const [isRTL, setIsRTL] = useState(false);

  const changeLanguage = (lang) => {
    if (i18n.language === lang) return;

    i18next.changeLanguage(lang);
    toggleDirection();
  };
  const toggleDirection = () => {
    setIsRTL(!isRTL);
  };

  return (
    <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center pb-52">
      <Navbar changeLanguage={changeLanguage} />
      <Hero />
    </div>
    <About />
    {/* <Experience /> */}
    <Tech />
    <Works />
    {/* <Feedbacks /> */}
    <div className="relative z-0">
      <Contact />
      <StarsCanvas />
    </div>
  </div>
  )
}

export default Home
