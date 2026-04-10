import React from "react";

// ✅ Structured Data
const reviewersData = [
  {
    name: "Dr. Kalpesh Popat",
    designation: "Associate Professor",
    institution: "Marwadi University",
  },
  {
    name: "Dr. Divyakant Meva",
    designation: "Associate Professor",
    institution: "Marwadi University",
  },
  {
    name: "Dr. Suresh Kumar V",
    designation: "Professor",
    institution: "SCMS School of Engineering and Technology",
  },
  {
    name: "Ms. Indu K S",
    designation: "Assistant Professor",
    institution: "The Oxford College of Engineering",
  },
  {
    name: "Dr. Umadevi Ramamoorthy",
    designation: "Associate Professor",
    institution: "CMR University",
  },
  {
    name: "Dr. K Balaji",
    designation: "Director",
    institution: "Surana College, Bangalore",
  },
  {
    name: "Dr. S. Preetha",
    designation: "Associate Professor",
    institution: "Sri Ramakrishna College of Arts and Science for Women",
  },
  {
    name: "Dr. N Kumaresh",
    designation: "Associate Professor",
    institution: "RV Institute of Technology and Management",
  },
  {
    name: "Mr. Anindya Nag",
    designation: "Assistant Professor",
    institution: "Northern University of Business and Technology, Bangladesh",
  },
  {
    name: "Dr. B. Surendiran",
    designation: "Associate Professor",
    institution: "NIT Puducherry",
  },
  {
    name: "Dr. M Usha",
    designation: "Dean",
    institution: "KG College of Arts and Science",
  },
  {
    name: "Dr. Megha Mudholkar",
    designation: "Assistant Professor",
    institution: "Marwadi University, Rajkot",
  },
  {
    name: "Dr. S. Saradha",
    designation: "Associate Professor",
    institution: "SRM Institute of Science and Technology",
  },
  {
    name: "Mr. Manvendra Sharma",
    designation: "Embedded Software Engineer",
    institution: "Amazon Web Services",
  },
  {
    name: "Dr. Jino P J",
    designation: "Senior Data Scientist",
    institution: "UVJ Technologies",
  },
  {
    name: "Dr. Jasmine Gnanadaurai",
    designation: "Associate Professor",
    institution: "George Fox University",
  },
];

function Reviewers() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* 🔹 Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-extrabold">Reviewers</h1>
      </div>

      {/* 🔥 Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-slate-300 rounded-lg">
          {/* Header */}
          <thead className="bg-slate-200">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Designation</th>
              <th className="p-3 text-left">Institution</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {reviewersData.map((reviewer, index) => (
              <tr key={index} className="border-t hover:bg-slate-50 transition">
                <td className="p-3 font-medium">{reviewer.name}</td>
                <td className="p-3 text-sm text-gray-700">
                  {reviewer.designation}
                </td>
                <td className="p-3 text-sm text-gray-700">
                  {reviewer.institution}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Reviewers;
