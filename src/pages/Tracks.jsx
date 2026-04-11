import React from "react";

const tracksData = [
  {
    title: "Artificial Intelligence",
    topics: [
      "Applied Machine Learning",
      "Natural Language Processing",
      "AI Applications in Social Science",
      "Chat Bots using AI",
      "Deep Learning",
      "Neural Networks",
    ],
  },
  {
    title: "Internet of Things (IoT)",
    topics: [
      "Smart Device Integration and Automation",
      "IoT Security Challenges",
      "IoT Privacy Challenges",
      "IoT in Smart Cities",
      "IoT in Infrastructure",
      "Sensor Networks and Edge Computing",
    ],
  },
  {
    title: "High-Performance Computing",
    topics: [
      "Parallel and Distributed Computing Techniques",
      "Scalable Algorithms for Big Data",
      "GPU and Quantum Computing Applications",
      "Energy-Efficient Computing Models",
      "Fog and Edge Computing",
    ],
  },
  {
    title: "Cloud Computing",
    topics: [
      "Cloud Storage and Data Management",
      "Cloud Security and Disaster Recovery",
      "Serverless Computing Paradigms",
      "Multi-Cloud and Hybrid Cloud Solutions",
      "Cloud-Native Applications and Microservices",
      "Edge Computing and IoT Cloud Integration",
    ],
  },
  {
    title: "Blockchain",
    topics: [
      "Blockchain for Cybersecurity and Privacy",
      "Decentralized Applications (DApps)",
      "Smart Contracts and Their Use Cases",
      "Blockchain in Financial and Supply Chain Systems",
      "Blockchain Interoperability and Scalability",
      "Regulatory Frameworks and Governance for Blockchain",
    ],
  },
  {
    title: "Natural Language Processing",
    topics: [
      "Text Mining",
      "Sentiment Analysis",
      "Large Language Models",
      "Information Retrieval",
      "Dialogue Systems and Conversational AI",
      "Explainable NLP and Interpretability",
    ],
  },
  {
    title: "Networking",
    topics: [
      "Beyond 5G (B5G) and 6G Systems",
      "Quality of Service (QoS) and Network Security",
      "Smart-Grid Security and Big Data Security using AI",
      "Post-Quantum Cryptography and Privacy-Preserving Technologies",
      "Embedded Systems and Distributed System Security",
    ],
  },
];

function Tracks() {
  return (
    <section className=" mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-extrabold text-red-500">
          Conference Tracks
        </h1>
        <p className="font-medium text-gray-600 mt-2">
          The topics of interest include (but are not limited to)
        </p>
      </div>

      <p className="text-center text-lg font-semibold mb-10 max-w-3xl mx-auto">
        Authors are encouraged to submit original and unpublished work in the
        following areas:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tracksData.map((track, index) => (
          <div
            key={index}
            className="p-5 bg-red-100 rounded-xl border border-red-200 
            shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold">Track {index + 1}</h3>
              <span className="text-xs bg-red-800 text-white px-2 py-1 rounded">
                {track.title}
              </span>
            </div>

            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              {track.topics.map((topic, i) => (
                <li key={i}>{topic}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tracks;
