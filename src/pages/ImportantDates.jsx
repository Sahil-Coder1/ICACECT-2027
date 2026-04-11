import React from "react";

function ImportantDates() {
  return (
    <div className=" mx-auto">
      <div className="w-full text-center">
        <h1 className="text-3xl font-extrabold my-4 mt-8">Important Dates</h1>
      </div>
      <div>
        <table className="min-w-full border-collapse border border-gray-300 mt-4">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Event</th>
              <th className="border border-gray-300 px-4 py-2">Dates</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Call for Paper
              </td>
              <td className="border border-gray-300 px-4 py-2">
                September 5, 2025
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Paper Submission & Registration Deadline (Extended)
              </td>
              <td className="border border-gray-300 px-4 py-2">
                January 11, 2025 - February 4, 2026
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Author Notification
              </td>
              <td className="border border-gray-300 px-4 py-2">
                February 21, 2026
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Camera-Ready Paper Submission
              </td>
              <td className="border border-gray-300 px-4 py-2">
                March 15, 2026
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Conference Date
              </td>
              <td className="border border-gray-300 px-4 py-2">
                May 6 & 7, 2026
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ImportantDates;
