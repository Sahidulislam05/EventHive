import React, { useEffect } from "react";
import { motion } from "framer-motion";
import HeroSlider from "../../componets/Home/HeroSlider";
import StatsSection from "../../componets/Home/StatsSection";
import SearchBox from "../../componets/Home/SearchBox";
import FeaturedEvents from "../../componets/Home/FeaturedEvents";
import OrganizerSpotlight from "../../componets/Home/OrganizerSpotlight";
import ReviewSection from "../../componets/Home/ReviewSection";
import FAQSection from "../../componets/Home/FAQSection";
import TrustedPartners from "../../componets/Home/TrustedPartners";
import Newsletter from "../../componets/Home/Newsletter";

const Home = () => {
  // Hide scrollbar on homepage
  useEffect(() => {
    document.documentElement.classList.add("hide-scrollbar");
    document.body.classList.add("hide-scrollbar");

    // Cleanup: Remove class when leaving homepage
    return () => {
      document.documentElement.classList.remove("hide-scrollbar");
      document.body.classList.remove("hide-scrollbar");
    };
  }, []);

  // Scroll animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
      <motion.div variants={fadeInUp}>
        <HeroSlider />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <StatsSection />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <FeaturedEvents />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <OrganizerSpotlight />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <ReviewSection />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <FAQSection />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <TrustedPartners />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Newsletter />
      </motion.div>
    </motion.div>
  );
};

export default Home;
