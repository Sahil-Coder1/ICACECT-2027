import React from "react";
import ImpDate from "../components/ImpDate";

function Registration() {
  return (
    <section className=" mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="w-full lg:w-[70%]">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
            Registration
          </h1>

          <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
            Persons willing to participate should register themselves online
            using the link below. The following registration fee is applicable:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-xl overflow-hidden text-xs sm:text-sm md:text-base">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-3 sm:px-4 py-2 sm:py-3 text-left">
                    Registration Type
                  </th>
                  <th className="px-3 sm:px-4 py-2 sm:py-3 text-left">
                    Country
                  </th>
                  <th className="px-3 sm:px-4 py-2 sm:py-3 text-left">
                    IEEE Member
                  </th>
                  <th className="px-3 sm:px-4 py-2 sm:py-3 text-left">
                    Non-IEEE Member
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white text-gray-700">
                <tr className="border-t">
                  <td className="px-3 sm:px-4 py-2 sm:py-3">
                    Regular / Industry
                  </td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3">
                    Indian / Foreigner
                  </td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3">₹7000 / $225</td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3">₹8000 / $250</td>
                </tr>

                <tr className="border-t bg-gray-50">
                  <td className="px-3 sm:px-4 py-2 sm:py-3">Student Author</td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3">
                    Indian / Foreigner
                  </td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3">₹5000 / $200</td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3">₹6000 / $225</td>
                </tr>

                <tr className="border-t">
                  <td className="px-3 sm:px-4 py-2 sm:py-3">Attendee</td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3">
                    Indian / Foreigner
                  </td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3">₹1000 / $12</td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3">₹2000 / $15</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* <p className="text-xs sm:text-sm text-gray-600 mt-4 leading-relaxed">
            *Only one accompanying person is allowed with a participant. The
            participant must provide the details of the accompanying person via
            email after completing the registration process.
          </p> */}

          <div className="mt-8 p-5 bg-gray-50 rounded-xl border">
            <h2 className="text-base sm:text-lg font-semibold mb-2 text-gray-800">
              Contact for Registration Queries
            </h2>

            <p className="text-sm text-gray-700">
              <strong>Dr. Shish Ahmad</strong>
              <br />
              (HOD) Integral University, Lucknow – 226026 (U.P.), India
            </p>
          </div>

          <div className="mt-6">
            <a
              href="#"
              className="inline-block bg-blue-600 text-white px-5 sm:px-6 py-2 rounded-lg hover:bg-blue-700 transition text-sm sm:text-base"
            >
              Register Now
            </a>
          </div>
        </div>

        <div className="w-full lg:w-[30%]">
          <ImpDate />
        </div>
      </div>
    </section>
  );
}

export default Registration;
