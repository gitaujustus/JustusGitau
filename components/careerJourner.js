import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const timelineData = [
  {
    year: 2018,
    title: "Started Career",
    description: "Graduated and began as a junior developer at TechCorp."
  },
  {
    year: 2019,
    title: "First Major Project",
    description: "Led the development of a key client application, boosting efficiency by 40%."
  },
  {
    year: 2020,
    title: "Promotion to Senior Developer",
    description: "Recognized for outstanding performance and technical leadership."
  },
  {
    year: 2021,
    title: "Launched Freelance Business",
    description: "Started taking on independent projects, specializing in web applications."
  },
  {
    year: 2022,
    title: "Major Contract Secured",
    description: "Landed a significant long-term contract with a Fortune 500 company."
  }
];

const TimelineItem = ({ item }) => (
  <div className="flex flex-col items-center">
    <div className="text-3xl font-bold text-blue-600">{item.year}</div>
    <div className="text-xl font-semibold mt-2">{item.title}</div>
    <p className="text-gray-600 mt-2 text-center max-w-md">{item.description}</p>
  </div>
);

const InteractiveTimeline = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : timelineData.length - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < timelineData.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-8">My Career Journey</h2>
      <div className="flex items-center justify-center w-full">
        <button
          onClick={goToPrevious}
          className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="mx-4 w-full max-w-2xl">
          <TimelineItem item={timelineData[currentIndex]} />
        </div>
        <button
          onClick={goToNext}
          className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="flex mt-8">
        {timelineData.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full mx-1 ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default InteractiveTimeline;