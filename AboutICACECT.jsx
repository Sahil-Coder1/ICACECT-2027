import React from "react";
import ImpDate from "../components/ImpDate";

function AboutICACECT() {
  return (
    <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="w-full lg:w-[70%]">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">
            About ICACET-2027
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed text-justify">
            The unified efforts towards the faculty development and growth,
            encourages us to embrace constant changes in technology. Owing to
            the rapid changes in the field of Computer technology, it is
            necessary to conduct conferences to bridge the gap between the
            current and emerging technology. The International Conference on
            Current Trends in Advanced Computing (ICACECT) aims to bring
            together researchers, academicians, industry professionals, and
            students to exchange knowledge, share innovative ideas, and discuss
            recent advancements in the field of advanced computing. The
            conference serves as a platform to explore emerging trends,
            challenges, and opportunities in computing technologies and their
            applications across various domains. The Conference would provide an
            international forum for presentations and deliberation on emerging
            technologies in the field of Computer Science & Engineering and
            Electronics & Communication Engineering.
          </p>
        </div>

        <div className="w-full lg:w-[30%]">
          <div className="">
            <ImpDate />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutICACECT;
