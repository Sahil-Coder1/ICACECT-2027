import React from "react";
import ImpDate from "../components/ImpDate";

function CallForPaper() {
  return (
    <div className="mx-auto px-2 sm:px-6 lg:px-8 py-6">
      <div className="text-center">
        <p className="text-sm text-left sm:text-base lg:text-base font-bold text-red-500 mb-4">
          All accepted, registered and presented papers will be submitted for
          inclusion into IEEE Xplore subject to meeting IEEE Xplore's scope and
          quality requirements.
        </p>
        <div className="text-center mb-6">
          <h1 className="inline-block relative text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 pb-3">
            PAPER SUBMISSION
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-16 h-1 bg-red-500 rounded-full"></span>
          </h1>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="w-full lg:w-[70%]">
          <div className="mb-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-center">
              PAPER PRESENTATION AND PUBLICATION GUIDELINES
            </h2>

            {/* <p className="text-sm sm:text-base font-semibold text-gray-700">
              All registered and submitted papers can be presented. After
              review, selected papers will be considered for publication in IEEE
              Xplore (additional charges may apply).
            </p> */}
          </div>

          {/* <ol className="text-sm sm:text-base text-gray-700 space-y-2 text-justify">
            <li>
              All papers will undergo a double-blind peer-review process.
              Accepted papers may be published in IEEE Xplore.
            </li>
          </ol> */}

          <div className="mt-4">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">
              AUTHOR'S GUIDELINES
            </h2>

            <p className="text-sm sm:text-base text-gray-700 text-justify">
              Authors are invited to submit original, high-quality, and
              previously unpublished research articles. Submissions must not be
              under review by any other publication or conference. All
              manuscripts should be submitted electronically via Microsoft CMT
              in strict adherence to the IEEE standard two-column conference
              template, which can be accessed through the provided link. Each
              manuscript is limited to a maximum of six (6) pages, including
              figures, tables, and references. Additional pages may be
              accommodated with a nominal fee.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-base sm:text-lg mb-2">
              CMT ACKNOWLEDGMENT
            </h3>
            <p className="text-sm sm:text-base text-gray-700 text-justify">
              The Microsoft CMT service was used for managing the peer-reviewing
              process for this conference. This service was provided for free by
              Microsoft and they bore all expenses, including costs for Azure
              cloud services as well as for software development and support.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">
              PAPER FORMATTING GUIDELINES
            </h2>

            <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 space-y-2 text-justify">
              <li>Paper Size: US Letter (8.5" × 11").</li>
              <li>Max 6 pages (2 extra allowed with charges).</li>
              <li>Double-column, single-spaced, 10pt Times New Roman.</li>
              <li>Margins: 1" top (title page), 0.75" elsewhere.</li>
              <li>PDF format, max size 5MB, fonts embedded.</li>
              <li>No page numbers allowed.</li>
              <li>
                Use IEEE Template:{" "}
                <a
                  href="https://www.ieee.org/conferences/publishing/templates"
                  className="text-blue-600 hover:underline"
                >
                  Template Link
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">
              GENERAL INSTRUCTIONS
            </h2>

            <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 space-y-2 text-justify">
              <li>Papers violating formatting rules may be rejected.</li>
              <li>Must be original and unpublished.</li>
              <li>No simultaneous submissions allowed.</li>
              <li>All papers must be in English (PDF format).</li>
              <li>Strict IEEE 2-column format required.</li>
              <li>Max 6 pages (extra pages chargeable).</li>
              <li>Figures, tables, references must fit within page limit.</li>
              <li>Review based on originality, quality, clarity.</li>
              <li>Final decision by Technical Program Committee.</li>
              <li>Accepted papers must address reviewer comments.</li>
              <li>Non-presented papers may be excluded.</li>
              <li>Submission via Microsoft CMT only.</li>
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">
              IEEE SIMILARITY & PLAGIARISM POLICY
            </h2>

            <p className="text-sm sm:text-base text-gray-700 text-justify">
              All submissions must comply with IEEE plagiarism and similarity
              policies. Papers must maintain academic integrity and originality.
            </p>
          </div>

          <div className="mt-8 mb-10">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">
              FINAL SUBMISSION & PRESENTATION
            </h2>

            <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 space-y-2 text-justify">
              <li>Accepted papers will be submitted to IEEE Xplore.</li>
              <li>At least one author must present the paper.</li>
              <li>Registration is mandatory for final submission.</li>
              <li>Failure to present → paper removed.</li>
              <li>No refunds (substitution allowed).</li>
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

export default CallForPaper;
