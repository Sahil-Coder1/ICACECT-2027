import React from "react";

function Speakers() {
  const speakers = [
    {
      name: "Dr. John Doe",
      role: "Professor, MIT",
      topic: "AI & Future Computing",
      img: "https://placehold.co/150?text=150x150&font=roboto",
    },
    {
      name: "Dr. Jane Smith",
      role: "Research Scientist, Google",
      topic: "Machine Learning Trends",
      img: "https://placehold.co/150?text=150x150&font=roboto",
    },
    {
      name: "Prof. Alan Walker",
      role: "IEEE Fellow",
      topic: "High Performance Computing",
      img: "https://placehold.co/150?text=150x150&font=roboto",
    },
    {
      name: "Dr. Emily Clark",
      role: "Data Scientist, Microsoft",
      topic: "Big Data & Analytics",
      img: "https://placehold.co/150?text=150x150&font=roboto",
    },
  ];

  return (
    <section className=" mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          Keynote Speakers
        </h1>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Meet our distinguished speakers from academia and industry
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl shadow-sm hover:shadow-lg transition p-5 text-center"
          >
            <img
              src={speaker.img}
              alt={speaker.name}
              className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
            />

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
