import React from "react";
import ImpDate from "../components/ImpDate";

function Submit() {
  return (
    <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="w-full lg:w-[70%]">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold my-4">
              PAPER SUBMISSION
            </h1>
          </div>

          <div className="mb-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-center">
              PAPER PRESENTATION AND PUBLICATION GUIDELINES
            </h2>

            <p className="text-sm sm:text-base font-semibold text-gray-700">
              All registered and submitted papers can be presented. After
              review, the selected paper will be considered for publication.
            </p>
          </div>

          <ol className="list-decimal list-inside text-sm sm:text-base text-gray-700 space-y-2 text-justify">
            <li>
              All papers registered and presented at ICACECT 2026 will undergo a
              double-blind peer-review process. Accepted papers will be
              published in IEEE Xplore (additional charges apply).
            </li>
          </ol>

          <div className="mt-8">
            <h3 className="text-lg sm:text-xl font-semibold mb-3">
              FEE PARTICULARS
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm md:text-base border border-gray-300 rounded-lg overflow-hidden">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="px-3 py-2">Particulars</th>
                    <th className="px-3 py-2">Indian</th>
                    <th className="px-3 py-2">IEEE</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-t">
                    <td className="px-3 py-2">
                      Registration: Academia / Industry
                    </td>
                    <td className="px-3 py-2">₹1500</td>
                    <td className="px-3 py-2">₹1200</td>
                  </tr>

                  <tr className="border-t bg-gray-50">
                    <td className="px-3 py-2">Publication</td>
                    <td className="px-3 py-2">₹9500</td>
                    <td className="px-3 py-2">₹7600</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto mt-6">
              <table className="w-full text-xs sm:text-sm md:text-base border border-gray-300 rounded-lg overflow-hidden">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="px-3 py-2">Particulars</th>
                    <th className="px-3 py-2">Foreign</th>
                    <th className="px-3 py-2">IEEE</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-t">
                    <td className="px-3 py-2">Registration</td>
                    <td className="px-3 py-2">$250</td>
                    <td className="px-3 py-2">$200</td>
                  </tr>

                  <tr className="border-t bg-gray-50">
                    <td className="px-3 py-2">Publication</td>
                    <td className="px-3 py-2">$200</td>
                    <td className="px-3 py-2">$160</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 mb-10">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">
              PAPER SUBMISSION GUIDELINES
            </h2>

            <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 space-y-2 text-justify">
              <li>Original unpublished research work only.</li>
              <li>Not under review elsewhere.</li>
              <li>
                IEEE Format:{" "}
                <a
                  href="https://www.ieee.org/conferences/publishing/templates"
                  className="text-blue-600 hover:underline"
                >
                  Template Link
                </a>
              </li>
              <li>
                Submit via:{" "}
                <a
                  href="/registration"
                  className="text-blue-600 hover:underline"
                >
                  Registration Link
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full lg:w-[30%]">
          <ImpDate />
        </div>
      </div>
    </div>
  );
}

export default Submit;
