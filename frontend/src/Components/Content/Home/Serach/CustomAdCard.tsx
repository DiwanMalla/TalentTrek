import React from "react";
import { useSpring, animated } from "react-spring";

interface CustomAdCardProps {
  imageUrl: string;
  videoUrl: string;
  title: string;
  description: string;
}

const CustomAdCard: React.FC<CustomAdCardProps> = ({
  imageUrl,
  videoUrl,
  title,
  description,
}) => {
  // Spring animation
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
  });
  const scaleUp = useSpring({
    transform: "scale(1)",
    from: { transform: "scale(0.9)" },
    config: { duration: 500 },
  });

  const handlePress = () => {
    window.open(videoUrl, "_blank");
  };

  return (
    <animated.div
      style={{
        ...fadeIn,
        ...scaleUp,
      }}
      className="bg-gray-100 rounded-lg p-4 shadow-lg m-4 max-w-xs mx-auto cursor-pointer transition-transform transform hover:scale-105"
      onClick={handlePress}
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-36 object-cover rounded-lg"
      />
      <h2 className="text-lg font-semibold mt-2">{title}</h2>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
      <button
        onClick={handlePress}
        className="bg-red-600 text-white text-center py-2 rounded-lg mt-4 w-full"
      >
        Watch Now
      </button>
    </animated.div>
  );
};

export default CustomAdCard;
