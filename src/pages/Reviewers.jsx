import React from "react";

const reviewersData = [
  {
    title: "Editorial Team",
    members: [
      "Dr. Roshan Jahan, Deptt. of CSE, IU, Lucknow",
      "Dr Mohd Usman Khan, Deptt. of CSE, IU, Lucknow",
      "Prof. Rafik Ahmad, IEEE UP Section",
      "Dr Pushpendra Dwivedi, Deptt. of CSE, IU, Lucknow",
      "Dr. Archana Yadav, Deptt. of ECE, IU, Lucknow",
      "Dr. Mohd. Suhaib Kidwai, Deptt. of ECE, IU, Lucknow",
      "Mr.Sakir Khan, Deptt. of CSE, IU, Lucknow",
      "Mr Mohd Amir Ansari, Deptt. of ECE, IU, Lucknow",
      "Ms Shra Fatima,  Deptt. of CSE, IU, Lucknow",
      "Dr Mohd Javed Khan, Deptt. of ECE, IU, Lucknow",
      "Ms Naziya Anjum, Deptt. of CSE, IU, Lucknow",
      "Ms Zainab Khan, Deptt. of CSE, IU, Lucknow",
      "Mr Ajaj Hussain Warsi,  Deptt. of CSE, IU, Lucknow",
      "Mr Balmukund Maurya, Deptt. of CSE, IU, Lucknow",
      // "Prof. M.A. Mallick, Deptt. of EE, IU, Lucknow",
      // "Dr Anum Kamal, Deptt. of CSE, IU, Lucknow",
    ],
    chair: [
      "Dr. Roshan Jahan, Deptt. of CSE, IU, Lucknow",
      "Dr. Mohd Javed Khan, Deptt. of ECE, IU, Lucknow",
    ],
  },
];

function Reviewers() {
  return (
    <section className=" mx-auto px-2 sm:px-6 lg:px-8 py-4">
      <div className="text-center mb-4">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800">
          Editorial Members
        </h1>
        <div className="w-16 h-1 bg-red-500 rounded-full mx-auto mt-4"></div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-slate-300 rounded-lg overflow-hidden">
          <thead className="bg-slate-200">
            <tr>
              <th className="text-left p-3 font-semibold w-1/4">Role</th>
              <th className="text-left p-3 font-semibold">Members</th>
              <th className="text-left p-3 font-semibold">Chair</th>
            </tr>
          </thead>

          <tbody>
            {reviewersData.map((section, index) => (
              <tr key={index} className="border-t hover:bg-slate-50 transition">
                <td className="p-3 font-semibold text-blue-600 align-top">
                  {section.title}
                </td>

                <td className="p-3">
                  <ul className="space-y-1 text-sm text-gray-700">
                    {section.members.map((member, i) => (
                      <li key={i}>• {member}</li>
                    ))}
                  </ul>
                </td>
                <td className="p-3">
                  <ul className="space-y-1 text-sm text-gray-700">
                    {section.chair.map((chair, i) => (
                      <li key={i}>• {chair}</li>
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

export default Reviewers;
