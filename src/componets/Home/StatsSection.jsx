import React from 'react';
import FuzzyText from '../Shared/FuzzyText';

const stats = [
    { label: "Active Events", value: "10K" },
    { label: "Happy Users", value: "2M" },
    { label: "Satisfaction", value: "99%" },
];

const StatsSection = () => {
    return (
        <section className="py-20 bg-white border-y border-base-200">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                     <h2 className="text-xl md:text-2xl font-light text-gray-900 tracking-wide border border-gray-300 rounded-full px-8 py-3 inline-block bg-white shadow-sm">
                        Creating moments that matter
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center justify-center p-8 border border-gray-200 rounded-[2rem] hover:border-gray-300 transition-colors duration-300 group cursor-default">
                             <div className="mb-4 transform transition-transform duration-500 group-hover:scale-110">
                                <FuzzyText 
                                    fontSize="clamp(3rem, 5vw, 4rem)" 
                                    fontWeight={900} 
                                    fontFamily="inherit" 
                                    color="#1A1A1A" 
                                    enableHover={true}
                                    baseIntensity={0.05} 
                                    hoverIntensity={0.4}
                                >
                                    {stat.value}
                                </FuzzyText>
                            </div>
                            <p className="text-gray-500 font-medium tracking-widest uppercase text-sm">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
