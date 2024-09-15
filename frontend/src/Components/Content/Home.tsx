import React from "react";

// import HighlightedEvent from "./HomeScreen/HighlightedEvent";
// import Internships from "./HomeScreen/Internship/Internship";
// import NewInternship from "./HomeScreen/Internship/NewInternship/NewInternship";
// import Testimonials from "./HomeScreen/Testimonials/Testimonials";
// import SearchBar from "./HomeScreen/SearchBar/SearchBar";
// import PromotionBanner from "./HomeScreen/PromotionBanner/PromotionBanner";
// import PartnersAndSocial from "./HomeScreen/PartnersAndSocial/PartnersAndSocial";

import Header from "./Home/Header/Header";

const HomeScreen: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen px-">
      <Header />
      {/* 
      <HighlightedEvent />
      <PromotionBanner />
      <Internships />
      <NewInternship />
      <Testimonials />
      <PartnersAndSocial />  */}
    </div>
  );
};

export default HomeScreen;
