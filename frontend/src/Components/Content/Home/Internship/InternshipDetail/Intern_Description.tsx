import React from "react";

interface DescriptionProps {
  job_highlight?: {
    Benefits?: string[];
    Responsibilities?: string[];
    Qualifications?: string[];
  };
}

const Description: React.FC<DescriptionProps> = ({ job_highlight }) => {
  const {
    Benefits = [],
    Responsibilities = [],
    Qualifications = [],
  } = job_highlight || {};

  return (
    <div className="space-y-6 mb-6">
      <Card title="Requirements" items={Qualifications} />
      <Card title="Benefits" items={Benefits} />
      <Card title="Responsibilities" items={Responsibilities} />
    </div>
  );
};

interface CardProps {
  title: string;
  items: string[];
}

const Card: React.FC<CardProps> = ({ title, items }) => (
  <div className="bg-blue-50 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
    <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
    {items.length > 0 ? (
      items.map((item, index) => (
        <p key={index} className="text-gray-700 mb-2">
          • {item}
        </p>
      ))
    ) : (
      <p className="text-gray-700">No {title.toLowerCase()} listed.</p>
    )}
  </div>
);

export default Description;
