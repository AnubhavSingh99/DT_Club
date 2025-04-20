import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Masonry from 'react-masonry-css';
import imagesLoaded from 'imagesloaded';
import {
  Award,
  Calendar,
  Download,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Play,
  Twitter,
  Youtube,
} from "lucide-react";

SwiperCore.use([Pagination]);

export function HackathonLandingPage() {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isGalleryVisible, setIsGalleryVisible] = useState(false);
  const galleryRef = useRef(null);
  const [showMasonry, setShowMasonry] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);



  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleChange = (e) => setIsMobile(e.matches);
    
    // Set initial value
    setIsMobile(mediaQuery.matches);
    
    // Add listener
    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const toggleAccordion = (itemId) => {
    if (activeAccordion === itemId) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(itemId);
    }
  };

   // Observer for gallery
   useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsGalleryVisible(entry.isIntersecting),
      { root: null, threshold: 0.3 }
    );
    const el = galleryRef.current;

    if (showMasonry && galleryRef.current) {
      imagesLoaded(galleryRef.current, () => {
        window.dispatchEvent(new Event('resize'));
      });
    }
  }, [showMasonry, selectedImage]);

  

  // Masonry breakpoints
  const breakpointColumnsObj = {
    default: 3,   
    1024: 3,
    768: 2,      
    480: 2
  };
//for red border on hover
  const boxShadowStyles = {
    default: '0 0 4px rgba(255, 0, 0, 0)',
    hover: 'inset 0 0 5px rgba(255, 0, 0, 0.6), 0 0 10px rgba(255, 0, 0, 0.4)',
  };
  
  const applyBoxShadow = (e, shadow) => {
    e.currentTarget.style.boxShadow = shadow;
  };
  
  const transitionStyle = {
    boxShadow: '0.3s ease-in-out',
  };
  
  // Reusable Components for winner cards and 75+project cards
  const Card = ({ title, subtitle, icon }) => (
    <div
      className="rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105"
      style={{
        boxShadow: boxShadowStyles.default,
        transition: transitionStyle.boxShadow,
      }}
      onMouseEnter={(e) => applyBoxShadow(e, boxShadowStyles.hover)}
      onMouseLeave={(e) => applyBoxShadow(e, boxShadowStyles.default)}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{subtitle}</p>
    </div>
  );
  const WinnerCard = ({ position, team, project, gradientFrom, icon, prizeColor, link }) => (
    <div
      className={`flex flex-col items-center rounded-lg bg-gradient-to-b ${gradientFrom} to-white p-8 shadow-lg transition-transform hover:scale-105`}
      style={{
        boxShadow: boxShadowStyles.default,
        transition: transitionStyle.boxShadow,
      }}
      onMouseEnter={(e) => applyBoxShadow(e, boxShadowStyles.hover)}
      onMouseLeave={(e) => applyBoxShadow(e, boxShadowStyles.default)}
    >
      <div className="mb-4 flex items-center justify-center rounded-full" style={{ backgroundColor: `${prizeColor}20`, height: '5rem', width: '5rem' }}>
        {icon}
      </div>
      <h3 className="mb-2 text-2xl font-bold text-gray-900">{position}</h3>
      <p className={`mb-4 text-center text-xl font-bold ${prizeColor}`}>{team}</p>
      <p className="mb-6 text-center text-gray-700">{project}</p>
      
      <a
  href={link}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none"
>
        View Project
      </a>
    </div>
  );
  

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/placeholder.svg"
              alt="Calculas of Innovation Logo"
              width={40}
              height={40}
              className="rounded"
            />
            <span className="text-lg font-bold text-red-600">Calculus of Innovation</span>
          </div>

          {isMobile ? (
            <div className="flex items-center">
              <button 
                className="inline-flex items-center justify-center rounded-md text-sm font-medium p-2 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </button>

              {mobileMenuOpen && (
                <div className="fixed inset-0 top-16 z-50 bg-white p-4 shadow-md">
                  <nav className="flex h-[calc(100vh-4rem)] flex-col space-y-4 overflow-y-auto">
                  <a 
                href="#home" 
                className="text-gray-600 hover:text-red-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-gray-600 hover:text-red-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#highlights" 
                className="text-gray-600 hover:text-red-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Highlights
              </a>
              <a 
                href="#winners" 
                className="text-gray-600 hover:text-red-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Winners
              </a>
              <a 
                href="#gallery" 
                className="text-gray-600 hover:text-red-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </a>
              <a 
                href="#faq" 
                className="text-gray-600 hover:text-red-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <a 
                href="#recap" 
                className="inline-flex items-center justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none"
                onClick={() => setMobileMenuOpen(false)}
              >
                Event Recap
              </a>
                  </nav>
                </div>
              )}
            </div>
          ) : (
            <nav className="flex items-center space-x-6">
              <a 
                href="#home" 
                className="text-gray-600 hover:text-red-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-gray-600 hover:text-red-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#highlights" 
                className="text-gray-600 hover:text-red-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Highlights
              </a>
              <a 
                href="#winners" 
                className="text-gray-600 hover:text-red-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Winners
              </a>
              <a 
                href="#gallery" 
                className="text-gray-600 hover:text-red-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </a>
              <a 
                href="#faq" 
                className="text-gray-600 hover:text-red-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <a 
                href="#recap" 
                className="inline-flex items-center justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none"
                onClick={() => setMobileMenuOpen(false)}
              >
                Event Recap
              </a>
            </nav>
          )}
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative overflow-hidden bg-gradient-to-r from-red-700 to-red-500 py-20 text-white">
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-10"></div>
          <div className="container relative z-10 mx-auto px-4 py-12 text-center md:py-24">
            <div className="inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-medium mb-4">
              Event Completed Successfully
            </div>
            <h1 className="animate-fade-in-up mb-6 font-extrabold tracking-tight text-[clamp(2rem,5vw,3.5rem)]">
              Calculus of Innovation 3.0
            </h1>
            <p className="animate-fade-in-up animation-delay-200 mx-auto mb-8 max-w-3xl text-[clamp(1rem,2vw,1.5rem)] text-white/90">
              Thank you to all participants, speakers, and sponsors who made this event a huge success!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animation-delay-400">
              <Link 
                to="#winners" 
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-medium text-red-600 hover:bg-gray-100 focus:outline-none"
              >
                View Winners
              </Link>
              <Link 
                to="#gallery" 
                className="inline-flex items-center justify-center rounded-md border border-white bg-transparent px-8 py-3 text-base font-medium text-white hover:bg-white/10 focus:outline-none"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Highlights
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">About The Event</h2>
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div className="flex flex-col justify-center">
                <p className="mb-4 text-lg text-gray-700">
                  Calculus of Innovation 3.0 was a premier design thinking hackathon that brought together creative
                  minds, innovators, and problem-solvers from NIET. This year's edition focused on
                  leveraging technology to address real-world challenges through collaborative innovation.
                </p>
                <p className="mb-4 text-lg text-gray-700">
                  Over the course of 48 hours, participants worked in teams to ideate, design, and prototype solutions
                  that have the potential to create meaningful impact. With mentorship from industry experts and access
                  to cutting-edge resources, this was an opportunity to turn ideas into reality.
                </p>
                <p className="text-lg text-gray-700">
                  The event was held on March 21-22, 2025 and featured over 500 participants, making
                  it our most diverse and impactful hackathon yet.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/src/assets/coi/calofinnovation.jpg"
                  alt="Innovation Illustration"
                  width={500}
                  height={400}
                  className="w-full max-w-[500px] rounded-lg shadow-lg"
                  loading="lazy"
                  style={{
                    boxShadow: '0 0 0 4px rgba(255, 0, 0, 0)', // Initial transparent outline
                    transition: 'box-shadow 0.3s ease-in-out', // Smooth transition for the outline
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.boxShadow = 'inset 0 0 8px rgba(255, 0, 0, 0.6), 0 0 10px rgba(255, 0, 0, 0.4)'; // Red inset and blur on hover
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.boxShadow = '0 0 0 6px rgba(255, 0, 0, 0)'; // Revert to transparent outline
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Event Highlights Section */}
        <section id="highlights" className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">Event Highlights</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <Card
                title="750+ registrations (150+ teams)"
                subtitle="From NIET came together to collaborate and innovate"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-users"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                }
              />

              <Card
                title="75 Projects"
                subtitle="Innovative solutions across 6 different tracks"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-lightbulb"
                  >
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
                  </svg>
                }
              />

              <Card
                title="11 prototypes (each from finale round)"
                subtitle="Awarded to the most innovative and impactful solutions"
                icon={<Award className="h-6 w-6" />}
              />

              <Card
                title="48 hrs+ mentoring (by 15 mentors)"
                subtitle="On design thinking, innovation, and technical skills"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-presentation"
                  >
                    <path d="M2 3h20" />
                    <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
                    <path d="m7 21 5-5 5 5" />
                    </svg>
                }
              />
            </div>
          </div>
        </section>

        {/* Winners Section */}
        <section id="winners" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">Winning Projects</h2>
            <div className="grid gap-8 md:grid-cols-3">
                <WinnerCard
            position="First Prize"
            team="Creative Bytes"
            project="Emergency Vehicle Lane Clearance"
            gradientFrom="from-red-50"
            prizeColor="text-red-600"
            icon={<Award className="h-10 w-10 text-red-600" />}
            link="https://web-esahara.vercel.app"
          />
          <WinnerCard
            position="Second Prize"
            team="Brutecoders"
            project="Addressing loneliness among elderly individuals"
            gradientFrom="from-gray-50"
            prizeColor="text-gray-600"
            icon={<Award className="h-8 w-8 text-gray-600" />}
              link="https://web-esahara.vercel.app"
          />
          <WinnerCard
            position="Third Prize"
            team="Tech Monarch"
            project="Impact of excessive machinery use on food nutrition"
            gradientFrom="from-orange-50"
            prizeColor="text-orange-600"
            icon={<Award className="h-7 w-7 text-orange-600" />}
            link="https://web-esahara.vercel.app"
          />
              </div>

            <div className="mt-12 rounded-lg bg-red-50 p-6">
              <h3 className="mb-4 text-center text-xl font-bold text-gray-900">Special Category Winners</h3>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                <div className="rounded-lg bg-white p-4 text-center shadow">
                  <h4 className="mb-2 font-semibold text-gray-900">Best UI/UX Design</h4>
                  <p className="text-red-600">Team DesignMasters</p>
                </div>
                <div className="rounded-lg bg-white p-4 text-center shadow">
                  <h4 className="mb-2 font-semibold text-gray-900">Most Innovative Solution</h4>
                  <p className="text-red-600">Team FutureTech</p>
                </div>
                <div className="rounded-lg bg-white p-4 text-center shadow">
                  <h4 className="mb-2 font-semibold text-gray-900">Best Social Impact</h4>
                  <p className="text-red-600">Team Changemakers</p>
                </div>
                <div className="rounded-lg bg-white p-4 text-center shadow">
                  <h4 className="mb-2 font-semibold text-gray-900">People's Choice Award</h4>
                  <p className="text-red-600">Team Visionaries</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link 
                to="#" 
                className="inline-flex items-center justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Full Results
              </Link>
            </div>
          </div>
        </section>

              {/* Gallery Section */}
      <section id="gallery" className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Event Gallery
          </h2>

          {/* Highlights Video */}
          <div className="mb-12">
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <Link
                  to="#"
                  className="inline-flex items-center justify-center rounded-md bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-red-700"
                >
                  <Play className="mr-2 h-5 w-5" /> Watch Event Highlights
                </Link>
              </div>
              <video
                src="/src/assets/coi/eventhighlight.mp4"
                className="h-full w-full object-cover rounded-xl"
                controls
                autoPlay
                muted
                loop
              />
            </div>
          </div>

          {/* Carousel */}
          <Swiper
              loop
              centeredSlides
              spaceBetween={30}
              slidesPerView={1.2}
              autoplay={{ delay: 1800, disableOnInteraction: false }}
              pagination={{ clickable: true, el: '.gallery-pagination' }}
              modules={[Pagination, Autoplay]}
              breakpoints={{
                640: { slidesPerView: 1.2 },
                768: { slidesPerView: 2.2 },
                1024: { slidesPerView: 3.2 },
              }}
              className="overflow-hidden rounded-lg"
            >
              {Array.from({ length: 8 }).map((_, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="rounded-xl overflow-hidden"
                    style={{ boxShadow: boxShadowStyles.default, transition: transitionStyle.boxShadow }}
                    onMouseEnter={(e) => applyBoxShadow(e, boxShadowStyles.hover)}
                    onMouseLeave={(e) => applyBoxShadow(e, boxShadowStyles.default)}
                  >
                    <img
                      src={`/src/assets/coi/${index + 1}.jpg`}
                      alt={`Event photo ${index + 1}`}
                      className="h-[300px] w-full object-cover transition-transform duration-300"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

          <div className="gallery-pagination mt-4 flex justify-center" />

          {/* Button to toggle full gallery */}
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowMasonry((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              {showMasonry ? 'Hide Full Gallery' : 'View Full Gallery'}
            </button>
          </div>

          {/* Masonry Grid on click */}
          {showMasonry && (
            <div className="mt-8">
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex -ml-4 w-auto"
                columnClassName="pl-4 bg-clip-padding"
              >
                {Array.from({ length: 20 }).map((_, idx) => (
                  <div key={idx} className="mb-4">
                    <img
                      onClick={() => setSelectedImage(`/src/assets/coi/${idx + 1}.jpg`)}
                      src={`/src/assets/coi/gallery/${idx + 1}.jpg`} // Directly use idx + 1 for 1-20
                      alt={`Gallery ${idx + 1}`}
                      width={400}
                      height={300}
                      className="w-full rounded-lg object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </div>
                ))}
              </Masonry>
            </div>
          )}
          {selectedImage && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div
                className="relative max-w-3xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-0 right-0 m-2 text-white text-3xl font-bold hover:text-red-500"
                >
                  &times;
                </button>
                <img
                  src={selectedImage}
                  alt="Preview"
                  className="rounded-lg w-full max-h-[90vh] object-contain mx-auto"
                />
              </div>
            </div>
          )}


        </div>
      </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
              Frequently Asked Questions
            </h2>
            <div className="mx-auto max-w-3xl">
              <div className="rounded-md border divide-y">
                {[
                  {
                    id: "item-1",
                    question: "When will the next Calculas of Innovation hackathon take place?",
                    answer: "We're planning Calculas of Innovation 4.0 for Spring 2026. Sign up for our newsletter to be the first to know when registration opens."
                  },
                  {
                    id: "item-2",
                    question: "How can I access recordings of the event sessions?",
                    answer: "All keynote speeches, workshops, and final presentations were recorded and are available on our YouTube channel. Participants can also access them through the event portal using their registration credentials."
                  },
                  {
                    id: "item-3",
                    question: "Can I still view the projects that were submitted?",
                    answer: "Yes, all submitted projects are available in our project gallery. You can browse by track, team, or award category. Some teams have also provided additional documentation and code repositories."
                  },
                  {
                    id: "item-4",
                    question: "How can I get involved in the next hackathon?",
                    answer: "There are many ways to get involved! You can participate as a hacker, volunteer as a mentor, become a sponsor, or join our organizing committee. Sign up for our newsletter to stay informed about upcoming opportunities."
                  },
                  {
                    id: "item-5",
                    question: "Are the presentation slides available?",
                    answer: "Yes, presentation slides from keynote speakers and workshop facilitators are available for download on our resources page. Some speakers may have opted not to share their materials publicly, but most have made them available."
                  },
                  {
                    id: "item-6",
                    question: "How can I contact the winning teams?",
                    answer: "If you're interested in connecting with any of the teams that participated, please use the contact form on our website. We'll forward your inquiry to the team members, who can then decide if they'd like to get in touch with you directly."
                  },
                  {
                    id: "item-7",
                    question: "Will there be follow-up events for the winning projects?",
                    answer: "Yes, we're organizing a series of follow-up events and incubation opportunities for the winning teams. These include mentorship sessions, investor pitches, and development workshops to help teams take their projects to the next level."
                  },
                  {
                    id: "item-8",
                    question: "How can I provide feedback about the event?",
                    answer: "We value your feedback! Please complete our post-event survey, which was sent to all participants via email. If you didn't receive it, you can access the survey through your participant dashboard or contact our support team."
                  }
                ].map(item => (
                  <div key={item.id} className="border-b border-gray-200 last:border-0">
                    <button
                      className="flex w-full items-center justify-between px-4 py-4 text-left text-lg font-medium focus:outline-none"
                      onClick={() => toggleAccordion(item.id)}
                    >
                      {item.question}
                      <svg
                        className={`h-5 w-5 transition-transform ${activeAccordion === item.id ? "rotate-180" : ""}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-200 ${
                        activeAccordion === item.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="p-4 pt-0 text-gray-600">{item.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Event Recap Section */}
        <section id="recap" className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">Event Recap</h2>

            <div className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-lg">
              <div className="mb-8 flex items-center justify-between border-b border-gray-200 pb-4">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-red-600" />
                  <span className="font-medium">April 12-14, 2025</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-red-600" />
                  <span className="font-medium">Innovation Center, San Francisco</span>
                </div>
              </div>

              <div className="prose max-w-none">
                <p>
                  The third edition of Calculas of Innovation has concluded with tremendous success, bringing together
                  over 750 participants from NIET for an unforgettable weekend of innovation, collaboration, and
                  impact.
                </p>

                <p>
                  The event kicked off with an inspiring keynote from Sarah Johnson, Innovation Director at TechCorp,
                  who challenged participants to think beyond conventional solutions and embrace design thinking as a
                  framework for tackling complex problems........I need to change this.....
                </p>

                <p>
                  Over the course of 48 hours, 150 teams worked tirelessly to develop prototypes across six tracks:
                  HealthTech, FinTech, EdTech, Sustainability, Smart Cities, and Open Innovation. The energy and
                  creativity in the venue were palpable as teams collaborated, iterated, and refined their ideas with
                  support from our dedicated mentors.....chnage this too...
                </p>

                <p>
                  The final day featured impressive project presentations, with Team Innovate's MediConnect solution
                  taking the top prize for its innovative approach to connecting patients in remote areas with
                  specialized healthcare providers. The judges were particularly impressed by the solution's technical
                  implementation, scalability, and potential for real-world impact.
                </p>

                <p>
                  Beyond the competition, participants benefited from 25 workshops on various aspects of design
                  thinking, technical skills, and entrepreneurship. The networking opportunities were invaluable, with
                  many participants forming connections that will extend well beyond the hackathon.
                </p>

                <p>
                  We extend our heartfelt thanks to all participants, mentors, judges, speakers, volunteers, and
                  sponsors who made this event possible. Your contributions have helped create a platform for innovation
                  that continues to grow and evolve with each edition.
                </p>

                <p>
                  As we look ahead to Calculas of Innovation 4.0, we're excited to build on this success and create even
                  more opportunities for collaboration and impact. Stay tuned for announcements about follow-up events
                  and the next hackathon!
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="#" 
                  className="inline-flex items-center justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Event Report
                </Link>
                <Link 
                  to="#" 
                  className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none"
                >
                  View Photo Gallery
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl rounded-lg bg-red-50 p-8 text-center">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">Stay Updated</h2>
              <p className="mb-6 text-gray-700">
                Subscribe to our newsletter for updates on future events, follow-up activities, and innovation resources
              </p>
              <form className="mx-auto flex max-w-md flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                />
                <button 
                  type="submit" 
                  className="inline-flex items-center justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none sm:w-auto"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-4 text-xs text-gray-500">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </section>

        {/* Next Event Teaser */}
        <section className="bg-gradient-to-r from-red-700 to-red-500 py-16 text-white md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Calculas of Innovation 4.0</h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl">
              Planning is already underway for our next hackathon. Mark your calendars and get ready for an even bigger
              and better experience!
            </p>
            <div className="mb-8 inline-block rounded-lg bg-white/10 px-6 py-3 text-2xl font-bold">Spring 2026</div>
            <Link 
              to="#" 
              className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-medium text-red-600 hover:bg-gray-100 focus:outline-none"
            >
              Get Notified
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="mb-4 flex items-center">
                <img
                  src="/placeholder.svg"
                  alt="Calculas of Innovation Logo"
                  width={40}
                  height={40}
                  className="mr-2 rounded bg-white"
                />
                <span className="text-lg font-bold text-white">Calculus of Innovation</span>
              </div>
              <p className="mb-4 text-gray-400">
                Empowering the next generation of innovators through collaborative problem-solving and design thinking.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
              <nav className="grid gap-2">
                <Link to="#" className="text-gray-400 hover:text-white">
                  Home
                </Link>
                <Link to="#about" className="text-gray-400 hover:text-white">
                  About
                </Link>
                <Link to="#winners" className="text-gray-400 hover:text-white">
                  Winners
                </Link>
                <Link to="#gallery" className="text-gray-400 hover:text-white">
                  Gallery
                </Link>
                <Link to="#speakers" className="text-gray-400 hover:text-white">
                  Speakers
                </Link>
                <Link to="#recap" className="text-gray-400 hover:text-white">
                  Event Recap
                </Link>
              </nav>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Mail className="mr-2 h-5 w-5 text-red-500" />
                  <span className="text-gray-400">dtclub@niet.co.in</span>
                </div>
                <div className="flex items-start">
                  <Phone className="mr-2 h-5 w-5 text-red-500" />
                  <span className="text-gray-400">+91 9412013756</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="mr-2 h-5 w-5 text-red-500" />
                  <span className="text-gray-400">
                  sfs lab , plot 19 , niet greater Noida
                    <br />
                    Greater Noida, Uttar Pradesh 201306
                  </span>
                </div>
                <div className="flex space-x-4 pt-2">
                  <a href="#" className="text-gray-400 hover:text-red-500">
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-red-500">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-red-500">
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-red-500">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-800 pt-8 text-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Calculus of Innovation. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
