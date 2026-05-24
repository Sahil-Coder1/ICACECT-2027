import React from "react";
import ImpDate from "../components/ImpDate";

function Contact() {
  return (
    <div className="mx-auto px-2 sm:px-6 lg:px-8 py-4">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
          CONTACT US
        </h1>
        <div className="w-16 h-1 bg-red-500 rounded-full mx-auto my-4"></div>

        <p className="text-sm text-left sm:text-base lg:text-base font-bold text-red-500 mb-4">
          For any inquiries or assistance regarding the conference, please feel
          free to reach out to us through the following contact details.
        </p>
      </div>

      {/* Layout */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-[70%]">
          {/* Faculty Contacts */}
          <div className="mt-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
              FACULTY CONTACTS
            </h2>

            <ul className="space-y-6 text-sm sm:text-base text-gray-700">
              {/* Person 1 */}
              <li className="border-b pb-4">
                <p className="font-semibold text-base sm:text-lg">
                  Dr. Faiyaz Ahamad
                </p>

                <a
                  href="mailto:faiyaz@iul.ac.in"
                  className="text-blue-600 hover:underline block"
                >
                  faiyaz@iul.ac.in
                </a>

                <div className="mt-2 space-y-1">
                  <a
                    href="tel:+919452300496"
                    className="block hover:text-blue-600"
                  >
                    +91-9452300496
                  </a>
                  <a
                    href="tel:+917985513509"
                    className="block hover:text-blue-600"
                  >
                    +91-7985513509
                  </a>
                </div>
              </li>

              {/* Person 2 */}
              <li className="border-b pb-4">
                <p className="font-semibold text-base sm:text-lg">
                  Dr. Imran Ullah Khan
                </p>

                <a
                  href="mailto:iukhan@iul.ac.in"
                  className="text-blue-600 hover:underline block"
                >
                  iukhan@iul.ac.in
                </a>

                <div className="mt-2">
                  <a
                    href="tel:+918127439699"
                    className="block hover:text-blue-600"
                  >
                    +91-8127439699
                  </a>
                </div>
              </li>
              <li>
                <p className="font-semibold text-base sm:text-lg">
                  Dr. Halima Sadia
                </p>
                <a
                  href="mailto:halima@iul.ac.in"
                  className="text-blue-600 hover:underline block"
                >
                  halima@iul.ac.in
                </a>
                <a
                  href="tel:+919838223309"
                  className="block hover:text-blue-600"
                >
                  +91-9838223309
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="w-full lg:w-[30%]">
          <div className="sticky top-20">
            <ImpDate />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
