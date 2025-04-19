import React from "react";
import { ExampleNavbarThree } from "../components/navbar";
import { HeroOne } from "../components/hero";
import { SignInOne } from "../components/signin";
import { FeatureTwo } from "../components/design_cores";
import { TeamSection } from "../components/TeamSection";
import { TestimonialOne } from "../components/testimonial";
import { BlogPageTwo } from "../components/main_event";
import { FaqFour } from "../components/faqs";
import { FooterThree } from "../components/footer";
import CardComponent from "../components/developers";
import { Link } from 'react-router-dom';
import a2 from '../assets/a2.png';
import { teamMembers } from "../components/about"; // Import teamMembers from about.jsx

function Home() {
  return (
    <div className="bg-[#F9FAFB]">
      <ExampleNavbarThree />
      <HeroOne />
      <FeatureTwo />
      <SignInOne />
      
      {/* Team Section with carousel layout */}
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-16 flex items-center">
          <div className="space-y-6 md:w-3/4">
            <div className="max-w-max rounded-full border bg-red-300 p-1 px-3">
              <p className="text-xs font-semibold leading-normal md:text-sm">Join Us →</p>
            </div>
            <p className="text-3xl font-bold text-gray-900 md:text-4xl">
              <span className='text-red-600'>Meet</span> our team
            </p>
            <p className="max-w-4xl text-base text-gray-700 md:text-xl">
              Our philosophy is simple—bring together a diverse group of creative thinkers and cultivate a collaborative environment where innovative ideas thrive.
            </p>
          </div>
        </div>
        
        <TeamSection members={teamMembers} layout="carousel" />

        {/* Technical Team Section */}
        <p className="my-8 text-3xl font-bold text-gray-900 md:text-4xl">
          <span className='text-red-600'>Technical</span> Team
        </p>
        <CardComponent />
        
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
          <div className="md:mt-0 mt-10 w-full object-contain">
            <img
              src={a2}
              alt="Upcoming Workshop"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      
      <TestimonialOne />
      <BlogPageTwo />
      <FaqFour />
      <FooterThree />
    </div>
  );
}

export default Home;
