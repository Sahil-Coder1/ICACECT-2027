import React from "react";

function Submit() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="w-full text-center">
        <h1 className="text-3xl font-extrabold my-4">PAPER SUBMISSION</h1>
      </div>
      <div className="px-4">
        <h2 className="text-2xl font-bold mb-4 leading-relaxed text-center">
          PAPER PRESENTATION AND PUBLICATION GUIDELINES
        </h2>
        <p className="font-semibold">
          All registered and submitted papers can be presented. After review,
          the selected paper will be considered for publication as outlined
          below
        </p>
      </div>
      <div className="px-4">
        <ol type="1" className="list-decimal list-inside my-2 text-justify">
          <li>
            All papers registered and presented at ICCTAC 2026 will undergo a
            meticulous double-blind peer-review process. Following acceptance,
            these papers will be published in the IEEE Xplore ,Please note that
            additional publication charges apply.
          </li>
        </ol>
        <h3 className="text-lg font-semibold mb-2">FEE PARTICULARS</h3>
        <table className="min-w-full border-collapse border border-gray-300 mt-4">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Particulars</th>
            <th className="border border-gray-300 px-4 py-2">
              Indian Delegates
            </th>
            <th className="border border-gray-300 px-4 py-2">
              Indian Delegates - IEEE members
            </th>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">
              Registration : Delegates from Academia and Industry, Research
              Scholars
            </td>
            <td className="border border-gray-300 px-4 py-2">Rs.1500/-</td>
            <td className="border border-gray-300 px-4 py-2">Rs.1200/-</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">
              Publication: Delegates from Academia and Industry, Research
              Scholars
            </td>
            <td className="border border-gray-300 px-4 py-2">Rs.9500/-</td>
            <td className="border border-gray-300 px-4 py-2">Rs.7600/-</td>
          </tr>
        </table>
        <table className="min-w-full border-collapse border border-gray-300 mt-8">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Particulars</th>
            <th className="border border-gray-300 px-4 py-2">
              Foreign Delegates
            </th>
            <th className="border border-gray-300 px-4 py-2">
              Foreign Delegates - IEEE members
            </th>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">
              Registration : Delegates from Academia and Industry, Research
              Scholars
            </td>
            <td className="border border-gray-300 px-4 py-2">$250</td>
            <td className="border border-gray-300 px-4 py-2">$200</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">
              Publication: Delegates from Academia and Industry, Research
              Scholars
            </td>
            <td className="border border-gray-300 px-4 py-2">$200</td>
            <td className="border border-gray-300 px-4 py-2">$160</td>
          </tr>
        </table>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 leading-relaxed mt-4">
            PAPER SUBMISSION GUIDELINES
          </h2>
          <ul className="list-disc list-inside my-2 text-justify">
            <li>
              The paper should be based on original research work which is not
              yet published
            </li>
            <li>
              The submitted paper must not be currently under consideration for
              publication elsewhere
            </li>
            <li>
              Paper should be submitted in IEEE Format and the Template is
              available for download on the ICCTAC 2026 website:{" "}
              <a
                href="https://www.ieee.org/conferences/publishing/templates"
                className="text-blue-500 underline"
              >
                click here
              </a>
            </li>
            <li>
              Submit the completed registration form by paying the Registration
              Fee via the registration Link:{" "}
              <a href="#" className="text-blue-500 underline">
                Registration Link
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Submit;
