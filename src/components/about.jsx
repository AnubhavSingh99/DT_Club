'use client'

import React, { useState } from 'react'
import CardComponent from './developers'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import s2 from '../assets/s2.jpeg'
import a2 from '../assets/a2.png'
import priyanshi from "../assets/images/priyanshi.JPG"
import Akash from "../assets/images/aakash.JPG"
import Sanat from "../assets/images/Sanat.JPG"
import Ankush from "../assets/images/abhay2.JPG"
import rishita from "../assets/images/rishita2.JPG"
import anubhav from "../assets/images/anubhav (2).JPG"
import Palak from "../assets/images/palak (2).JPG"
import swati from "../assets/images/swati.JPG"
import divya from "../assets/images/divya.JPG"
import abhinav from "../assets/images/abhinav (2).JPG"
import siddhi from "../assets/images/siddhi.JPG"
import shakti from "../assets/images/shakti.JPG"
import Palaks from "../assets/images/palaks.JPG"
import nandani from "../assets/images/nandani.JPG"
import saksham from "../assets/images/saksham (2).JPG"
import abhay from "../assets/images/Abhay.JPG"
import mahi from "../assets/images/mahi.png"
import madhvendra from "../assets/images/Madhvendra.JPG"
import ansh from "../assets/images/ansh.jpg"
import { Link } from 'react-router-dom'

const locations = [
  {
    title: 'Cultivate Design Thinking',
    timings: 'We provide a nurturing environment for members to develop their design thinking skills, from ideation to prototyping and testing.',
    address: '',
  },
  {
    title: 'Promote Social Impact',
    timings: 'Our projects aim to address pressing societal issues, leveraging design thinking to drive meaningful and sustainable change.',
    address: '',
  },
  {
    title: 'Foster Community Engagement',
    timings: 'We actively collaborate with local organizations, businesses, and community members to create shared value and foster a spirit of collective problem-solving.',
    address: '',
  },
]

const teamMembers = [
  // Presidents
  {
    name: 'Madhvendra',
    image: madhvendra,
    position: 'President',
    category: 'president',
    quote: "Leading with design thinking to create impactful solutions",
    linkedin: "#",
    github: "#",
    website: "#"
  },
  {
    name: 'Mahi',
    image: mahi,
    position: 'Vice President',
    category: 'president',
    quote: "Innovation through collaboration and creativity",
    linkedin: "#",
    github: "#",
    website: "#"
  },
  {
    name: 'Priyanshi',
    image: priyanshi,
    position: 'Vice President',
    category: 'president',
    quote: "Designing solutions that matter",
    linkedin: "#",
    github: "#",
    website: "#"
  },
  
  // Leads
  {
    name: 'Abhay Singh',
    image: abhay,
    position: 'Lead',
    category: 'leads',
    quote: "Transforming ideas into reality",
    linkedin: "#",
    github: "#",
    website: "#"
  },
  {
    name: 'Aakash',
    image: Akash,
    position: 'Lead',
    category: 'leads',
    quote: "Engineering better experiences",
    linkedin: "#",
    github: "#",
    website: "#"
  },
  {
    name: 'Abhay Trivedi',
    image: Ankush,
    position: 'Lead',
    category: 'leads',
    quote: "Creating user-centered designs",
    linkedin: "#",
    github: "#",
    website: "#"
  },
  
  // Co-leads
  {
    name: 'Rishita Rai',
    image: rishita,
    position: 'Event Management Co-lead',
    category: 'co-leads',
    quote: "Organizing memorable experiences",
    linkedin: "#",
    github: "#",
    website: "#"
  },
  {
    name: 'Anubhav Singh',
    image: anubhav,
    position: 'Technical Co-lead',
    category: 'co-leads',
    quote: "Building technical solutions with design thinking",
    linkedin: "#",
    github: "#",
    website: "#"
  },
  {
    name: 'Palak Bhatnagar',
    image: Palak,
    position: 'Technical Co-lead',
    category: 'co-leads',
    quote: "Coding with creativity",
    linkedin: "#",
    github: "#",
    website: "#"
  },
  {
    name: 'Swati Jha',
    image: swati,
    position: 'Marketing Co-lead',
    category: 'co-leads',
    quote: "Communicating value through design",
    linkedin: "#",
    github: "#",
    website: "#"
  },
  {
    name: 'Divya Pratap',
    image: divya,
    position: 'Marketing Co-lead',
    category: 'co-leads',
    quote: "Creating compelling narratives",
    linkedin: "#",
    github: "#",
    website: "#"
  },
  {
    name: 'Abhinav',
    image: abhinav,
    position: 'Marketing Co-lead',
    category: 'co-leads',
    quote: "Designing impactful marketing strategies",
    linkedin: "#",
    github: "#",
    website: "#"
  },
  {
    name: 'Siddhi Arora',
    image: siddhi,
    position: 'Research Co-lead',
    category: 'co-leads',
    quote: "Exploring insights through research",
    linkedin: "#",
    github: "#",
    website: "#"
  },
  {
    name: 'Shakti Singh',
    image: shakti,
    position: 'Research Co-lead',
    category: 'co-leads',
    quote: "Data-driven design solutions",
    linkedin: "#",
    github: "#",
    website: "#"
  },
  {
    name: 'Palak Srivastava',
    image: Palaks,
    position: 'Social-media Co-lead',
    category: 'co-leads',
    quote: "Engaging communities through social media",
    linkedin: "#",
    github: "#",
    website: "#"
  },
  {
    name: 'Nandani',
    image: nandani,
    position: 'Social-media Co-lead',
    category: 'co-leads',
    quote: "Creating digital connections",
    linkedin: "#",
    github: "#",
    website: "#"
  },
  {
    name: 'Saksham Patel',
    image: saksham,
    position: 'Event Capturing Team',
    category: 'co-leads',
    quote: "Capturing moments that matter",
    linkedin: "#",
    github: "#",
    website: "#"
  },
  {
    name: 'Ansh',
    image: ansh,
    position: 'Event Capturing Team',
    category: 'co-leads',
    quote: "Visual storytelling through photography",
    linkedin: "#",
    github: "#",
    website: "#"
  },
].filter(member => member.image);

export function AboutPageOne() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredMembers = teamMembers.filter(member => 
    activeCategory === 'all' || member.category === activeCategory
  );

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === filteredMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? filteredMembers.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <div className="mx-auto max-w-7xl px-4">
        {/* Hero Section */}
        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
          <div className="max-w-max rounded-full border bg-red-300 p-1 px-3">
            <p className="text-xs font-semibold leading-normal md:text-sm">About the Club</p>
          </div>
          <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
            <span className='text-red-600'>Welcome</span> to the Design Thinking Club
          </p>
          <p className="max-w-4xl text-base text-gray-600 md:text-xl">
            The Design Thinking Club is a vibrant community of innovators, problem-solvers, and visionaries who come together to apply design thinking principles to tackle real-world challenges. Through our collaborative approach, we strive to create positive change and empower our local community.
          </p>
        </div>
        
        {/* Banner Image */}
        <div className="w-full space-y-4">
          <img
            className="h-[100px] w-full rounded-xl object-contain md:h-full"
            src={s2}
            alt="Design Thinking Club Banner"
          />
        </div>
        
        {/* Vision and Mission */}
        <div className="max-w-max rounded-full border bg-red-300 p-1 px-3 my-5">
          <p className="text-xs font-semibold leading-normal md:text-sm">OUR VISION AND MISSION</p>
        </div>
        <div className="my-8 flex flex-col gap-y-6 md:flex-row lg:justify-around">
          {locations.map((location) => (
            <div key={location.title} className="flex flex-col space-y-3 md:w-2/4 lg:w-1/5">
              <p className="w-full text-xl font-semibold text-red-600">{location.title}</p>
              <p className="w-full text-base text-gray-700">{location.timings}</p>
            </div>
          ))}
        </div>
        
        <hr className="mt-20" />
        
        {/* Team Introduction */}
        <div className="mt-16 flex items-center">
          <div className="space-y-6 md:w-3/4">
            <div className="max-w-max rounded-full border bg-red-300 p-1 px-3">
              <p className="text-xs font-semibold leading-normal md:text-sm">Join Us &rarr;</p>
            </div>
            <p className="text-3xl font-bold text-gray-900 md:text-4xl">
              <span className='text-red-600'>Meet</span> our team
            </p>
            <p className="max-w-4xl text-base text-gray-700 md:text-xl">
              Our philosophy is simple—bring together a diverse group of creative thinkers and cultivate a collaborative environment where innovative ideas thrive.
            </p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 my-8">
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

        {/* Team Carousel - Vertical Layout */}
        {filteredMembers.length > 0 && (
          <div className="relative my-12">
            <div className="flex items-center justify-center">
              <button 
                onClick={prevSlide}
                className="absolute left-0 z-10 p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="w-full max-w-md mx-auto overflow-hidden">
                <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                  {filteredMembers.map((member, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-2">
                      <div className="group relative rounded-lg border bg-white shadow-md h-[600px] w-[280px] mx-auto overflow-hidden transition-all duration-300 hover:shadow-xl">
                        {/* Main Content */}
                        <div className="h-full w-full flex flex-col">
                          <div className="h-[65%] w-full flex items-center justify-center p-2 bg-gray-100">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="h-full w-full object-contain"
                            />
                          </div>
                          <div className="p-4 h-[35%] flex flex-col justify-center">
                            <p className="text-xl font-bold text-gray-900 text-center">{member.name}</p>
                            <p className="text-md font-semibold text-red-600 text-center">
                              {member.position}
                            </p>
                          </div>
                        </div>
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                          <p className="text-lg italic text-center mb-4">
                            "{member.quote}"
                          </p>
                          <div className="flex space-x-4">
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors">
                              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                              </svg>
                            </a>
                            <a href={member.github} target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors">
                              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                              </svg>
                            </a>
                            <a href={member.website} target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors">
                              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
                              </svg>
                            </a>
                          </div>
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

            {/* Indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {filteredMembers.map((_, index) => (
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

        {/* Technical Team Section */}
        <p className="my-8 text-3xl font-bold text-gray-900 md:text-4xl">
          <span className='text-red-600'>Technical</span> Team
        </p>
        <CardComponent/>
        
        {/* Upcoming Events Banner */}
        <div className="flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row">
          <div className="space-y-6">
            <p className="text-sm font-semibold md:text-base text-red-600">UPCOMING EVENTS</p>
            <p className="text-3xl font-bold md:text-4xl">
              <span className='text-red-600'>Explore the World of Computer Science:</span>
              Join Our Interactive Workshop on Diverse Domains
            </p>
            <p className="text-base text-gray-600 md:text-lg">
              Discover the exciting world of computer science through our engaging workshop designed just for you! Dive into various domains such as Web Development, Artificial Intelligence, Cybersecurity, and more. This is your chance to explore different fields, understand what sparks your interest, and find the path that best suits your passion and skills. Don't miss out on this opportunity to gain valuable insights and set the stage for your future career in tech!
            </p>
            <Link to="https://uc64l098ghp.typeform.com/to/shvofxtd">
              <button
                type="button"
                className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-colors"
              >
                Join Now
              </button>
            </Link>
          </div>
          <div className="md:mt-o mt-10 w-full object-contain">
            <img
              src={a2}
              alt="Upcoming Workshop"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <hr className="mt-6" />
    </div>
  )
}
