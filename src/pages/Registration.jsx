import React from "react";
import ImpDate from "../components/ImpDate";

function Registration() {
  return (
    <section className="mx-auto px-2 sm:px-6 lg:px-8 py-4">
      <p className="text-sm text-left sm:text-base lg:text-base font-bold text-red-500 mb-4">
        All accepted, registered and presented papers will be submitted for
        inclusion into IEEE Xplore subject to meeting IEEE Xplore's scope and
        quality requirements.
      </p>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
        <div className="w-full lg:w-[70%]">
          <div className="mb-6">
            <h1 className="inline-block relative text-2xl sm:text-3xl font-bold text-gray-800 pb-3">
              Registration
              <span className="absolute left-0 bottom-0 w-16 h-1 bg-red-500 rounded-full"></span>
            </h1>
          </div>

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
                    Students (UG/PG/PhD)
                  </td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3">
                    Indian / Foreigner
                  </td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3">₹5000 / $200</td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3">₹6000 / $225</td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 sm:px-4 py-2 sm:py-3">
                    Faculty / Academia
                  </td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3">
                    Indian / Foreigner
                  </td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3">₹7000 / $225</td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3">₹8000 / $250</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-3 sm:px-4 py-2 sm:py-3">
                    Industry Participants
                  </td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3">
                    Indian / Foreigner
                  </td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3">₹10000 / $250</td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3">₹12000 / $300</td>
                </tr>

                <tr className="border-t">
                  <td className="px-3 sm:px-4 py-2 sm:py-3">Attendee</td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3">
                    Indian / Foreigner
                  </td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3">₹1000 / $15</td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3">₹2000 / $20</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* <p className="text-xs sm:text-sm text-gray-600 mt-4 leading-relaxed">
            *Only one accompanying person is allowed with a participant. The
            participant must provide the details of the accompanying person via
            email after completing the registration process.
          </p> */}

          {/* <div className="mt-8 p-5 bg-gray-50 rounded-xl border">
            <h2 className="text-base sm:text-lg font-semibold mb-2 text-gray-800">
              Contact for Registration Queries
            </h2>

            <p className="text-sm text-gray-700">
              <strong>Dr. Shish Ahmad</strong>
              <br />
              (HOD) Integral University, Lucknow – 226026 (U.P.), India
            </p>
          </div> */}

          <div className="mt-6">
            <a
              href="https://cmt3.research.microsoft.com/ICACECT2027"
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
