import React from "react";
import useEvents from "../../hooks/useEvents";
import { motion } from "framer-motion";
import { Link } from "react-router";

const FeaturedEvents = () => {
  const { events, loading, error } = useEvents();

  if (loading)
    return (
      <div className="text-center py-20">
        <span className="loading loading-dots loading-lg text-primary"></span>
      </div>
    );
  if (error)
    return <div className="text-center py-20 text-error">Error: {error}</div>;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
  };

  return (
    <div className="py-24 bg-base-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold tracking-tighter mb-4">
            Featured Events
          </h2>
          <p className="text-xl text-base-content-secondary max-w-2xl mx-auto">
            Don't miss out on these trending events happening around you.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {events.map((event) => (
            <motion.div
              key={event._id || event.id}
              variants={item}
              whileHover={{ y: -5 }}
              className="card bg-white border border-base-300 rounded-[2rem] overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              <figure className="relative h-64 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm text-secondary">
                  {new Date(event.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
              </figure>
              <div className="card-body p-8">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="card-title text-2xl font-bold tracking-tight leading-tight mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h2>
                  <div className="badge badge-lg border-none bg-base-100 font-bold text-secondary">
                    ৳{event.price}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-base-content-secondary mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {event.location}
                </div>
                <div className="card-actions mt-auto">
                  <Link
                    to={`/event/${event._id}`}
                    className="btn btn-outline btn-block rounded-full border-base-300 hover:bg-black hover:text-white hover:border-black transition-all"
                  >
                    Book Ticket
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <Link
            to="/events"
            className="btn btn-outline btn-lg rounded-full px-10 border-base-300 hover:bg-base-content hover:text-base-100 transition-colors"
          >
            View All Events
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedEvents;
