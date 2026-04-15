import React from "react";

function Acknowledgment() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
          Acknowledgment
        </h1>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Recognition of support and contributions
        </p>
      </div>

      <div className="bg-white shadow-md rounded-2xl border border-gray-200 p-6 md:p-8 leading-relaxed">
        <p className="text-gray-700 text-sm md:text-base">
          The Microsoft CMT service was used for managing the peer-reviewing
          process for this conference. This service was provided for free by
          Microsoft and they bore all expenses, including costs for Azure cloud
          services as well as for software development and support.
        </p>
      </div>
    </section>
  );
}

export default Acknowledgment;
