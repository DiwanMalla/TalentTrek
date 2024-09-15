import React from "react";

// Partner logos
const partnerLogos = [
  { id: 1, imageUrl: "/Google.png" },
  { id: 2, imageUrl: "/facebook.png" },
  { id: 3, imageUrl: "/netflix.png" },
  { id: 4, imageUrl: "/amazonprime.png" },
  { id: 5, imageUrl: "/vu.png" },
];

// Social media links
const socialLinks = [
  { id: 1, name: "Facebook", url: "https://facebook.com", color: "#4267B2" },
  { id: 2, name: "Pinterest", url: "https://pinterest.com", color: "#E60023" },
  { id: 3, name: "Twitter", url: "https://twitter.com", color: "#1DA1F2" },
];

const PartnersAndSocial: React.FC = () => {
  return (
    <div className="bg-white py-8 px-4 text-center">
      <h2 className="text-2xl font-bold mb-6">Our Partners</h2>
      <div className="relative overflow-hidden mb-6">
        <div className="flex space-x-10 animate-marquee">
          {/* Duplicate the logos for smooth looping */}
          {[...partnerLogos, ...partnerLogos].map((partner) => (
            <div key={partner.id} className="flex-shrink-0">
              <img
                src={partner.imageUrl}
                alt="Partner Logo"
                className="w-32 h-32 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-4">Follow Us on Social Networks</h3>
      <div className="flex justify-around">
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md mx-2"
            style={{ backgroundColor: link.color }}
          >
            <span className="text-white font-medium">{link.name}</span>
          </a>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
};

export default PartnersAndSocial;
