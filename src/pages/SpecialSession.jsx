import React from "react";
import ImpDate from "../components/ImpDate";

function SpecialSessions() {
  return (
    <div className="mx-auto px-2 sm:px-6 lg:px-8 py-6">
      {/* Header */}
      <div className="text-center relative pb-6">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-28 h-1 bg-red-500 rounded-full"></div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
          CALL FOR SPECIAL SESSIONS
        </h1>

        <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
          Propose and lead a focused, theme-based session on a cutting-edge
          topic at ICACECT-2027.
        </p>
      </div>

      {/* Main Container */}
      <div className="mt-10 space-y-10">
        {/* Invitation */}
        <section>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
            INVITATION TO PROPOSE
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-8">
            <p className="text-justify">
              The ICACECT-2027 team plans to hold special sessions on various
              areas of expertise. Special session proposals are invited related
              to the broad area of ICACECT-2027 or the theme of the conference.
            </p>
            <p className="border-l-4 border-red-500 pl-4 text-justify">
              The proposal submitter must have expertise in the proposed area.
              The proposals will be judged by the ability to bring together key
              researchers in the state-of-the-art area, further development of
              the area, and help in establishing a larger research community
              beyond the area. The organizer(s) of the special session will be
              the resource person motivating researchers to submit papers to the
              special session.
            </p>
            <p>
              All papers submitted will go through the regular process of
              submission and review. All papers are to be presented to be
              included in the proceedings subject to the conference proceeding
              publication approval from IEEE.
            </p>
          </div>
        </section>

        {/* Note */}
        <section className="bg-yellow-50 border border-yellow-300 rounded-lg p-5">
          <h3 className="font-bold text-yellow-700 mb-2">NOTE</h3>

          <p className="text-gray-700">
            TA/DA will be provided to the special session chair as per rules.
          </p>
        </section>

        {/* Submission */}
        <section>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-5">
            HOW TO SUBMIT A PROPOSAL
          </h2>

          <div className="bg-gray-50 border rounded-lg p-5 space-y-3">
            <p className="text-gray-700">
              Proposals may be sent to the conference email with all necessary
              details as per the specified format.
            </p>

            <div className="space-y-2">
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <span className="text-blue-600">conference@iul.ac.in</span>
              </p>

              <p>
                <span className="font-semibold">CC:</span>{" "}
                <span className="text-blue-600">faiyaz@iul.ac.in</span>
              </p>

              <p className="font-semibold text-red-500">
                Deadline: 10 December, 2026
              </p>
            </div>
          </div>
        </section>

        {/* Proposal Format */}
        <section>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-5">
            PROPOSAL FORMAT
          </h2>

          <div className="bg-gray-50 rounded-lg p-6 border">
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>Special Session Name:</strong> &lt;Your Session
                Title&gt;
              </li>

              <li>
                <strong>Session Organizer/Chair:</strong> &lt;Name,
                Affiliation&gt;
              </li>

              <li>
                <strong>Institutional Email:</strong> &lt;Institutional
                Email&gt;
              </li>

              <li>
                <strong>Mobile No:</strong> &lt;Mobile Number&gt;
              </li>

              <li>
                <strong>Session Details:</strong> Maximum 300 words
              </li>
            </ul>
          </div>
        </section>

        {/* Example */}
        <section>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-5">
            EXAMPLE PROPOSAL
          </h2>

          <div className="bg-gradient-to-r from-gray-50 to-white border rounded-xl p-6">
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>Special Session Name:</strong> Artificial Intelligence
                for Smart Healthcare Systems
              </p>

              <p>
                <strong>Organizer:</strong> Dr. R. Sharma, Associate Professor,
                Department of Computer Science and Engineering, National
                Institute of Technology, Jaipur, Rajasthan, India
              </p>

              <p>
                <strong>Email:</strong> rsharma.cse@nitj.ac.in
              </p>

              <p>
                <strong>Mobile:</strong> +91-98765xxxxx
              </p>

              <p className="text-justify leading-7 mt-4">
                Artificial Intelligence (AI) is transforming the healthcare
                sector by enabling intelligent systems capable of improving
                diagnosis, treatment planning, disease prediction, and patient
                monitoring. Recent developments in machine learning, deep
                learning, computer vision, and natural language processing have
                accelerated the use of AI-driven healthcare solutions. Smart
                healthcare systems aim to provide personalized, efficient, and
                cost-effective medical services while improving patient
                outcomes.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SpecialSessions;
