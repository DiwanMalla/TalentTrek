import React from "react";

// import HighlightedEvent from "./HomeScreen/HighlightedEvent";
// import Internships from "./HomeScreen/Internship/Internship";
// import NewInternship from "./HomeScreen/Internship/NewInternship/NewInternship";
// import Testimonials from "./HomeScreen/Testimonials/Testimonials";
// import SearchBar from "./HomeScreen/SearchBar/SearchBar";
// import PromotionBanner from "./HomeScreen/PromotionBanner/PromotionBanner";
// import PartnersAndSocial from "./HomeScreen/PartnersAndSocial/PartnersAndSocial";

import Header from "./Home/Header/Header";
import HighlightedEvent from "./Home/HighlightedEvent/HighlightedEvent";
import Internships from "./Home/Internship/Internship";
import NewInternship from "./Home/Internship/New Internship/NewIntership";
import Testimonials from "./Home/Testinomials/Testinomials";
import PartnersAndSocial from "./Home/Partner&Social/Partner&Social";
import PromotionBanner from "./Home/Promotion Banner/PromotionBanner";

const HomeScreen: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen px-">
      <Header />
      <HighlightedEvent
        title="Career Conference"
        subtitle="Treat yourself with knowledge"
        imageUrl="/Event/1.png"
      />
      <Internships />
      <NewInternship />
      <Testimonials />
      <PartnersAndSocial />
      <PromotionBanner />
    </div>
  );
};

export default HomeScreen;
