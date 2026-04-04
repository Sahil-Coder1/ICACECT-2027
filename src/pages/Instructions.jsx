import React from "react";

function Instructions() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="w-full text-center">
        <h1 className="text-3xl font-extrabold my-4">
          Instruction for Authors
        </h1>
      </div>
      <div className="px-4">
        <h2 className="text-2xl font-bold mb-4 leading-relaxed ">
          Author Guidelines
        </h2>
        <div className="mt-4 pb-4">
          <h2 className="text-xl font-semibold mb-2">
            ICCTAC 2026 Review Process
          </h2>
          <p className="text-justify">
            The submitted papers will be checked for plagiarism and based on the
            tolerable percentage, it undergoes a double-blind peer-review
            process. Based on the reviewers' comments, papers are accepted,
            rejected or accepted with revision. By submitting a manuscript to
            ICCTAC, the authors guarantee that it has not been previously
            published/accepted/submitted for publication in any form.
          </p>
        </div>
        <div className="mt-4 pb-4">
          <h2 className="text-xl font-semibold mb-2">
            Microsoft CMT Acknowledgement
          </h2>
          <p className="text-justify">
            The Microsoft CMT service was used for managing the peer-reviewing
            process for this conference. This service was provided for free by
            Microsoft and they bore all expenses, including costs for Azure
            cloud services as well as for software development and support.
          </p>
        </div>
        <div className="mt-4 pb-4">
          <h2 className="text-xl font-semibold mb-2">Paper Format</h2>
          Paper should be submitted in IEEE Format and the Template is available
          for download on the ICCTAC 2026 website:
          <a
            href="https://www.ieee.org/conferences/publishing/templates"
            className="text-blue-500 underline"
          >
            click here
          </a>
          <table className="min-w-full border-collapse border border-gray-300 mt-4">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Abstract</th>
                <td className="border border-gray-300 px-4 py-2">
                  The Abstract should describe the main work of the article
                </td>
              </tr>
              <tr>
                <th className="border border-gray-300 px-4 py-2">
                  Index Terms
                </th>
                <td className="border border-gray-300 px-4 py-2">
                  Use 3 - 8 keywords
                </td>
              </tr>
            </thead>
          </table>
        </div>
        <div className="mt-4 pb-4">
          <h2 className="text-xl font-semibold mb-2">Official Language</h2>
          <p>
            The official language of the Conference is English. All the
            camera-ready manuscripts should be submitted in English, and
            presentations should be made in English.
          </p>
        </div>
        <div className="mt-4 pb-8">
          <h2 className="text-xl font-semibold mb-2">
            Conference Publication/ Proceedings
          </h2>
          <p>
            Manuscripts of high quality will be published in IEEE conference
            explorer. <br />
            <span className="font-semibold">
              (Publication charges are applicable as per the publisher for IEEE
              conference explorer).
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Instructions;
