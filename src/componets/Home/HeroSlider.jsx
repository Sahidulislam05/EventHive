import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSlider = () => {
    const slides = [
        {
            id: 1,
            image: "/hero-1.jpg",
            title: "Discover Amazing Events",
            description: "Join the community of event enthusiasts and experience the best events in your city.",
            buttonText: "Explore Events",
            buttonLink: "/events",
            buttonClass: "btn-secondary hover:bg-primary hover:text-secondary hover:border-primary"
        },
        {
            id: 2,
            image: "/hero-2.jpg",
            title: "Host Your Own Event",
            description: "Bring your ideas to life and reach a wider audience with our platform.",
            buttonText: "Get Started",
            buttonLink: "/register",
            buttonClass: "btn-secondary hover:bg-primary hover:text-secondary hover:border-primary"
        },
        {
            id: 3,
            image: "/hero-3.jpg",
            title: "Connect with Organizers",
            description: "Follow top organizers and never miss out on their latest events.",
            buttonText: "See Organizers",
            buttonLink: "#organizers",
            buttonStyle: "anchor", 
            buttonClass: "btn-secondary hover:bg-primary hover:text-secondary hover:border-primary"
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); 

        return () => clearInterval(slideInterval);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div className="relative w-full bg-base-100 pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Text Section - Centered and Clean */}
                <div className="text-center mb-16 relative h-48"> 
                    <AnimatePresence mode="wait">
                        <div key={currentSlide} className="absolute inset-0 flex flex-col items-center justify-center">
                            <motion.h1 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-5xl md:text-7xl font-bold tracking-tighter text-secondary mb-6"
                            >
                                {slides[currentSlide].title}
                            </motion.h1>
                            <motion.p 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-xl text-base-content-secondary max-w-2xl mx-auto mb-8"
                            >
                                {slides[currentSlide].description}
                            </motion.p>
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                            >
                                {slides[currentSlide].buttonStyle === 'anchor' ? (
                                    <a href={slides[currentSlide].buttonLink} className={`btn ${slides[currentSlide].buttonClass} btn-lg rounded-full px-10 text-lg`}>{slides[currentSlide].buttonText}</a>
                                ) : (
                                    <Link to={slides[currentSlide].buttonLink} className={`btn ${slides[currentSlide].buttonClass} btn-lg rounded-full px-10 text-lg`}>{slides[currentSlide].buttonText}</Link>
                                )}
                            </motion.div>
                        </div>
                    </AnimatePresence>
                </div>

                {/* Image Section - Rounded Container below Text */}
                <div className="mt-8 relative w-full aspect-[16/7] rounded-[3rem] overflow-hidden shadow-2xl border border-base-300">
                    <AnimatePresence mode="wait">
                        <motion.img 
                            key={currentSlide}
                            src={slides[currentSlide].image} 
                            alt={slides[currentSlide].title}
                            initial={{ scale: 1.1, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.7 }}
                            className="absolute top-0 left-0 w-full h-full object-cover"
                        />
                    </AnimatePresence>
                    
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-8 right-8 top-1/2 z-20">
                        <button onClick={prevSlide} className="btn btn-circle bg-black/50 backdrop-blur-md border-none text-white hover:bg-primary hover:text-secondary">❮</button>
                        <button onClick={nextSlide} className="btn btn-circle bg-black/50 backdrop-blur-md border-none text-white hover:bg-primary hover:text-secondary">❯</button>
                    </div>

                    {/* Pagination Dots */}
                    <div className="absolute bottom-6 left-0 w-full flex justify-center gap-3 z-20">
                        {slides.map((_, index) => (
                            <button 
                                key={index} 
                                onClick={() => setCurrentSlide(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white w-8' : 'bg-white/40 w-2'}`}
                            ></button>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HeroSlider;
