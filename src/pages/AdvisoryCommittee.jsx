import React from "react";

const advisoryData = [
  {
    category: "International Advisory Committee",
    members: [
      "Prof. Eiko Takaoka – Sophia University, Tokyo, Japan",
      "Dr. Ambika Paranthaman – Sparkbox, Greater London, U.K.",
      "Mr. Karthikeyan Ranganathan – Infosys, USA",
      "Mr. Daniel Raja Singh – Infosys Ltd., Ottawa, Canada",
    ],
  },
  {
    category: "National Advisory Committee",
    members: [
      "Dr. Santhosh Baboo – DG Vaishnav College, Chennai",
      "Dr. R Sridaran – Marwadi University, Gujarat",
      "Dr. S. Manikandan – K. Ramakrishnan College of Engineering, Trichy",
      "Dr. L. Arockiam – St. Joseph's College, Trichy",
      "Dr. E. George Prakash – Bharathidasan University, Trichy",
      "Dr. A. Marimuthu – Government Arts College, Coimbatore",
      "Dr. M. Venkatesan – NIT Karaikal, Puducherry",
      "Dr. E. Karthikeyan – Government Arts College, Udumelpet",
      "Dr. Kathirvalavakumar – VHNSN College, Virudhunagar",
      "Dr. V. Ganesh Babu – Govt First Grade College, Bangalore",
      "Dr. P. Balamurugan – Government Arts College, Coimbatore",
      "Dr. S.P. Victor – St. Xavier's College, Tirunelveli",
    ],
  },
];

function AdvisoryCommittee() {
  return (
    <section className=" mx-auto px-4 py-10">
      {/* 🔹 Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-extrabold">Advisory Committee</h1>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-slate-300 rounded-lg">
          {/* Header */}
          <thead className="bg-slate-200">
            <tr>
              <th className="text-left p-3 font-semibold w-1/4">Category</th>
              <th className="text-left p-3 font-semibold">Members</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {advisoryData.map((section, index) => (
              <tr key={index} className="border-t">
                {/* Category */}
                <td className="p-3 font-bold text-blue-600 align-top">
                  {section.category}
                </td>

                {/* Members */}
                <td className="p-3">
                  <ul className="space-y-1 text-sm text-gray-700">
                    {section.members.map((member, i) => (
                      <li key={i}>• {member}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default AdvisoryCommittee;
