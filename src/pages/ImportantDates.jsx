import React from "react";

function ImportantDates() {
  const dates = [
    {
      date: "1 June, 2026",
      event: "Paper Submission Starts",
    },
    {
      date: "15 September, 2026",
      event: "Paper Submission Last Date",
    },
    {
      date: "15 October, 2026",
      event: "Notification of Acceptance",
    },
    {
      date: "20 November, 2026",
      event: "Final Camera Ready Paper Submission",
    },
    {
      date: "10 December, 2026",
      event: "Registration Deadline",
    },
  ];

  return (
    <section className="mx-auto px-2 sm:px-6 lg:px-8 py-4">
      <div className="mb-6 mx-auto">
        <h1 className="inline-block relative text-2xl sm:text-3xl font-bold text-gray-800 pb-3">
          Important Dates
          <span className="absolute left-0 bottom-0 w-16 h-1 bg-red-500 rounded-full"></span>
        </h1>
      </div>

      <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
        Stay updated with all important deadlines and milestones of
        ICACECT-2027.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-xl overflow-hidden text-xs sm:text-sm md:text-base">
          <thead className="bg-slate-900 text-white">
            <tr>
              <th className="px-3 sm:px-4 py-3 text-left">Event</th>

              <th className="px-3 sm:px-4 py-3 text-left">Date</th>
            </tr>
          </thead>

          <tbody className="bg-white text-gray-700">
            {dates.map((item, index) => (
              <tr
                key={index}
                className={`border-t hover:bg-gray-50 transition
                ${index % 2 === 0 ? "" : "bg-gray-50"}`}
              >
                <td className="px-3 sm:px-4 py-4">{item.event}</td>

                <td className="px-3 sm:px-4 py-4 font-medium text-gray-700">
                  {item.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ImportantDates;
