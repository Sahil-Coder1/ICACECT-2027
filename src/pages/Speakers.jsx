import React from "react";

function Speakers() {
  const speakers = [
    {
      name: "Dr. John Doe",
      role: "Professor, MIT",
      topic: "AI & Future Computing",
      img: "https://via.placeholder.com/150",
    },
    {
      name: "Dr. Jane Smith",
      role: "Research Scientist, Google",
      topic: "Machine Learning Trends",
      img: "https://via.placeholder.com/150",
    },
    {
      name: "Prof. Alan Walker",
      role: "IEEE Fellow",
      topic: "High Performance Computing",
      img: "https://via.placeholder.com/150",
    },
    {
      name: "Dr. Emily Clark",
      role: "Data Scientist, Microsoft",
      topic: "Big Data & Analytics",
      img: "https://via.placeholder.com/150",
    },
  ];

  return (
    <section className=" mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          Keynote Speakers
        </h1>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Meet our distinguished speakers from academia and industry
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl shadow-sm hover:shadow-lg transition p-5 text-center"
          >
            {/* Image */}
            <img
              src={speaker.img}
              alt={speaker.name}
              className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
            />

            {/* Info */}
            <h3 className="font-semibold text-gray-800">{speaker.name}</h3>

            <p className="text-sm text-gray-500">{speaker.role}</p>

            <p className="text-sm text-blue-600 mt-2 font-medium">
              {speaker.topic}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Speakers;
