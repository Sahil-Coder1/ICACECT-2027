import React from "react";

const tracksData = [
  {
    title: "Artificial Intelligence & Machine Learning",
    topics: [
      "Generative AI, Explainable AI & Responsible AI",
      "Natural Language Processing & Speech Processing",
      "Computer Vision & Pattern Recognition",
      "Edge AI, TinyML& Autonomous Intelligence",
      "Multi-agent Systems & Cognitive Computing",
    ],
  },
  {
    title: "Data Science & Big Data Analytics",
    topics: [
      "Data Mining & Knowledge Discovery",
      "Big Data Frameworks (Hadoop, Spark)",
      "Predictive & Prescriptive Analytics",
      "Data Visualization & Business Intelligence",
      "Graph Analytics & Social Networks",
    ],
  },
  {
    title: "Cyber Security & Blockchain",
    topics: [
      "Network & Information Security",
      "Cryptography & Cryptanalysis",
      "Blockchain, Smart Contracts & Web3",
      "Digital Forensics & Cyber Law",
      "Ethical Hacking & Threat Intelligence",
    ],
  },
  {
    title: "Software Engineering & Intelligent Systems",
    topics: [
      "Software Design, Architecture & Development",
      "Agile, DevOps & CI/CD Practices",
      "Software Testing & Quality Assurance",
      "Web & Mobile Application Development",
      "Human-Computer Interaction & Intelligent Systems",
    ],
  },
  {
    title: "Emerging Intelligent & Interdisciplinary Technologies",
    topics: [
      "Robotics & Automation",
      "AR/VR & Metaverse Technologies",
      "AI-driven Sustainable Solutions",
      "Computer Vision & Multimedia Systems",
      "Smart Applications in Healthcare, Agriculture & Smart Cities",
    ],
  },
  {
    title: "Cloud Computing, IoT & Distributed Systems",
    topics: [
      "Cloud, Edge & Fog Computing",
      "Internet of Things (IoT) Architectures",
      "Distributed & Parallel Systems",
      "Microservices & Containerization",
      "IoT Security & Smart Systems",
    ],
  },
  {
    title: "Communication, Electronics & Signal Processing Systems",
    topics: [
      "5G/6G & Next-Generation Communication Technologies",
      "Wireless, Optical & Satellite Communication",
      "Network Protocols, SDN & Network Optimization",
      "Digital Signal Processing & Multimedia Transmission",
      "VLSI, Embedded Systems & Hardware Design",
    ],
  },
  {
    title: "Quantum Computing & Advanced Computing Paradigms",
    topics: [
      "Quantum Computing Algorithms & Architectures",
      "Quantum Cryptography & Secure Communication",
      "Neuromorphic Computing",
      "High Performance Computing (HPC)",
      "Parallel & Distributed Computing Models",
      "Bio-inspired Computing",
    ],
  },
  {
    title: "Green Computing & Sustainable Technologies",
    topics: [
      "Energy-efficient Computing Systems",
      "Sustainable Data Centers & Cloud Infrastructure",
      "Green Communication Technologies",
      "Smart Energy Management Systems",
      "AI for Climate Change & Environmental Monitoring",
      "Carbon-aware Computing Solutions",
    ],
  },
  {
    title: "Biomedical Engineering & Healthcare Informatics",
    topics: [
      "Medical Image Processing & Diagnostics",
      "AI in Healthcare & Precision Medicine",
      "Wearable Health Monitoring Systems",
      "Telemedicine & e-Healthcare Systems",
      "Biomedical Signal Processing",
      "Health Data Analytics & Smart Healthcare",
    ],
  },
  {
    title: "Digital Transformation & Industry 5.0",
    topics: [
      "Smart Manufacturing & Industry 5.0",
      "Human-AI Collaboration",
      "Intelligent Robotics & Autonomous Systems",
      "Industrial IoT & Cyber-Physical Systems",
      "Digital Twin Technologies",
      "AI-enabled Industrial Automation",
    ],
  },
  {
    title: "Ethical AI, Policy & Responsible Innovation",
    topics: [
      "AI Ethics & Bias Mitigation",
      "Trustworthy & Responsible AI",
      "AI Regulations & Governance",
      "Privacy-preserving Machine Learning",
      "Social Impacts of Emerging Technologies",
      "Digital Inclusion & Responsible Innovation",
    ],
  },
];

function Tracks() {
  return (
    <section className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-4">
      <p className="text-sm text-left sm:text-base lg:text-base font-bold text-red-500 mb-4">
        All accepted, registered and presented papers will be submitted for
        inclusion into IEEE Xplore subject to meeting IEEE Xplore's scope and
        quality requirements.
      </p>
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
          Conference Tracks
        </h1>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          The topics of interest include (but are not limited to)
        </p>

        <div className="w-16 h-1 bg-red-500 rounded-full mx-auto mt-4"></div>
      </div>

      {/* Subheading */}
      <p className="text-center text-lg font-semibold mb-4 max-w-3xl mx-auto">
        Authors are encouraged to submit original and unpublished work in the
        following areas:
      </p>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {tracksData.map((track, index) => (
          <div
            key={index}
            className="flex flex-col h-full p-6 bg-slate-100 rounded-xl border border-slate-200 
            shadow-sm hover:shadow-lg transition duration-300"
          >
            {/* Top Section */}
            <div className=" gap-3 mb-4">
              <h3 className="text-sm bg-slate-800 text-white w-fit px-3 py-1 mb-2 rounded-full">
                Track {index + 1}
              </h3>

              <span className="text-xl text-slate-800 font-bold text-center py-1">
                {track.title}
              </span>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-300 mb-4"></div>

            {/* Topics */}
            <ul className="space-y-2 text-sm text-gray-700 flex-1">
              {track.topics.map((topic, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-slate-600 rounded-full"></span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Tracks;
