import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function TeamSection({ members, layout = 'grid' }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerSlide = 3;

  const filteredMembers = members.filter(member => 
    activeCategory === 'all' || member.category === activeCategory
  );

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= Math.ceil(filteredMembers.length / cardsPerSlide) ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? Math.ceil(filteredMembers.length / cardsPerSlide) - 1 : prevIndex - 1
    );
  };

  if (layout === 'carousel') {
    return (
      <div className="my-12">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={() => {
              setActiveCategory('all');
              setCurrentIndex(0);
            }}
            className={`px-4 py-2 rounded-full transition-colors ${activeCategory === 'all' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            All Members
          </button>
          <button
            onClick={() => {
              setActiveCategory('president');
              setCurrentIndex(0);
            }}
            className={`px-4 py-2 rounded-full transition-colors ${activeCategory === 'president' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            President
          </button>
          <button
            onClick={() => {
              setActiveCategory('leads');
              setCurrentIndex(0);
            }}
            className={`px-4 py-2 rounded-full transition-colors ${activeCategory === 'leads' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            Leads
          </button>
          <button
            onClick={() => {
              setActiveCategory('co-leads');
              setCurrentIndex(0);
            }}
            className={`px-4 py-2 rounded-full transition-colors ${activeCategory === 'co-leads' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            Co-leads
          </button>
        </div>

        {/* Carousel */}
        {filteredMembers.length > 0 && (
          <div className="relative">
            <div className="flex items-center justify-center">
              <button 
                onClick={prevSlide}
                className="absolute left-0 z-10 p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="w-full overflow-hidden">
                <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * (100 / cardsPerSlide)}%)` }}>
                  {filteredMembers.map((member, index) => (
                    <div key={index} className="w-1/3 flex-shrink-0 px-2">
                      <div className="group relative rounded-lg border bg-white shadow-md w-full h-[400px] mx-auto overflow-hidden transition-all duration-300 hover:shadow-xl">
                        <div className="w-full h-[65%] flex items-center justify-center p-2 bg-gray-100">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="p-4 text-center">
                          <p className="text-xl font-bold text-gray-900">{member.name}</p>
                          <p className="text-md font-semibold text-red-600">{member.position}</p>
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                          <p className="text-sm text-center mb-2">{`Student at NIET | ${member.position} | Freelancer | Front-end Developer | Graphic Designer | Editor`}</p>
                          <a href="#" className="text-sm font-semibold text-blue-300 hover:text-blue-400 transition-colors">
                            View Profile →
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button 
                onClick={nextSlide}
                className="absolute right-0 z-10 p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="flex justify-center mt-4 space-x-2">
              {Array.from({ length: Math.ceil(filteredMembers.length / cardsPerSlide) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-red-600' : 'bg-gray-300'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Default grid layout
  return (
    <div className="grid grid-cols-1 gap-4 gap-y-6 border-b border-gray-300 py-12 pb-20 md:grid-cols-2 lg:grid-cols-4">
      {members.map((user) => (
        <div className="rounded-md border" key={user.name}>
          <img
            src={user.image}
            alt={user.name}
            className="h-[300px] w-full rounded-lg object-cover"
          />
          <p className="mt-6 w-full px-2 text-xl font-semibold text-gray-900">{user.name}</p>
          <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
            {user.position}
          </p>
        </div>
      ))}
    </div>
  );
}   
