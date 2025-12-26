import React from "react";

const OrganizerSpotlight = () => {
  const organizers = [
    {
      id: 1,
      name: "Alice Smith",
      role: "Music Events Strategy",
      description:
        "Expert in large-scale music festival coordination and artist management.",
      image: "/manager-1.jpg",
    },
    {
      id: 2,
      name: "Simon Rigby",
      role: "Tech Conferences Lead",
      description:
        "Specializing in tech summits, hackathons, and developer community events.",
      image: "/manager-2.jpg",
    },
    {
      id: 3,
      name: "Emma Brown",
      role: "Art Workshops Curator",
      description:
        "Curating immersive art experiences and educational creative workshops.",
      image: "/manager-3.jpg",
    },
    {
      id: 4,
      name: "Michael Lee",
      role: "Sports Events Director",
      description:
        "Managing logistics for marathons, tournaments, and local sports leagues.",
      image: "/manager-4.jpg",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-600 mb-6 shadow-sm">
            Organizer Spotlight
          </div>
          <h2 className="text-5xl font-medium tracking-tight text-gray-900 mb-4">
            Insights and Innovations
          </h2>
          <p className="text-gray-500 text-lg">
            Stay updated with our latest articles, tips, and industry trends
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {organizers.slice(0, 3).map((organizer, index) => (
            <div
              key={organizer.id}
              className="card bg-white border border-gray-200 rounded-[2rem] p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300 group"
            >
              <div className="h-56 w-full rounded-[1.5rem] overflow-hidden mb-6 bg-gray-100">
                <img
                  src={organizer.image}
                  alt={organizer.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <h3 className="text-xl font-medium text-gray-900 mb-2 leading-tight pr-4">
                {organizer.name}: {organizer.role}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {organizer.description}
              </p>

              <div className="mt-auto">
                <button className="btn btn-outline btn-sm h-10 px-6 rounded-full border-gray-200 text-gray-700 hover:bg-black hover:text-white hover:border-black transition-all normal-case font-medium w-full">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizerSpotlight;
