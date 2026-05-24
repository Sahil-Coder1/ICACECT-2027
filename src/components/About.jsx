function About() {
  const achievements = [
    {
      src: "/Achievements/Naac.jpg",
      alt: "NAAC Accreditation",
    },
    {
      src: "/Achievements/Nba.png",
      alt: "NBA Accreditation",
    },
    {
      src: "/Achievements/Nirf2024.jpg",
      alt: "NIRF 2024 Ranking",
    },
    {
      src: "/Achievements/NirfCse.jpg",
      alt: "NIRF CSE Ranking",
    },
    {
      src: "/Achievements/IIRFB.jpg",
      alt: "IRF Best Ranking Award",
    },
    {
      src: "/Achievements/IndiaToday.jpg",
      alt: "India Today Ranking",
    },
    {
      src: "/Achievements/TheWeek.jpg",
      alt: "The Week Ranking",
    },
    {
      src: "/Achievements/UiGreen.jpg",
      alt: "UI Green Metric Ranking",
    },
  ];

  return (
    <div className="mx-auto my-8 bg-white overflow-hidden">
      <div className="flex flex-col lg:flex-row px-4 sm:px-8 lg:px-12 py-8 gap-10">
        {/* Left Content */}
        <div className="w-full lg:w-[68%]">
          <div className="mb-8">
            <h2 className="inline-block relative text-2xl sm:text-3xl font-bold text-gray-800 pb-3">
              About the University
              <span className="absolute left-0 bottom-0 w-16 h-1 bg-red-500 rounded-full"></span>
            </h2>
          </div>

          <div className="space-y-5 text-gray-700 text-sm sm:text-base leading-8">
            <p className="text-justify">
              <span className="font-semibold">Integral University</span> is
              situated in <span className="font-semibold">Lucknow</span>, a city
              known for its rich culture, heritage, and role in the freedom
              struggle. It is the capital of
              <span className="font-semibold"> Uttar Pradesh</span>, the largest
              state of India, with a population of about
              <span className="font-semibold"> 4.6 million</span>. The
              university reflects this diversity through its strong values of
              <span className="font-semibold">
                {" "}
                inclusiveness, multiculturalism, and integrity
              </span>
              .
            </p>

            <p className="text-justify">
              Established under
              <span className="font-semibold"> Act No. 9 of 2004</span>, the
              university is approved by the
              <span className="font-semibold"> UGC (Sections 2(f) & 12B)</span>
              and recognized by several statutory bodies including
              <span className="font-semibold">
                {" "}
                National Medical Commission, Pharmacy Council of India, Bar
                Council of India, NCTE
              </span>{" "}
              and others. It is also a member of
              <span className="font-semibold">
                {" "}
                Association of Indian Universities (AIU)
              </span>{" "}
              and recognized as a <span className="font-semibold">SIRO</span> by
              the Government of India.
            </p>

            <p className="text-justify">
              The university emphasizes
              <span className="font-semibold">
                {" "}
                individual growth and skill development
              </span>
              , preparing students for success in the corporate and technology
              sectors. This is supported by
              <span className="font-semibold"> highly qualified faculty</span>
              and a
              <span className="font-semibold">
                {" "}
                robust academic infrastructure
              </span>
              . It has been awarded an
              <span className="font-semibold">
                {" "}
                A+ grade by NAAC (May 2023)
              </span>{" "}
              and ranked in
              <span className="font-semibold">
                {" "}
                NIRF (Pharmacy) from 2017–2024
              </span>{" "}
              consecutively.
            </p>

            {/* <p className="text-justify">
              The campus provides a
              <span className="font-semibold">
                {" "}
                disciplined and ragging-free environment
              </span>{" "}
              with modern amenities for education and sports. It offers
              <span className="font-semibold">
                {" "}
                state-of-the-art hostel facilities
              </span>{" "}
              accommodating around
              <span className="font-semibold"> 2600 students</span>, along with
              an
              <span className="font-semibold"> 800+ bedded hospital</span>{" "}
              supported by over
              <span className="font-semibold"> 200 doctors</span>. Integral
              University stands not only as an academic institution but also as
              a vision for building a
              <span className="font-semibold">
                {" "}
                progressive and prosperous nation
              </span>
              .
            </p> */}
          </div>

          <div className="mt-12">
            <div className="mb-6">
              <h2 className="inline-block relative text-2xl sm:text-3xl font-bold text-gray-800 pb-3">
                Department of Computer Science & Engineering
                <span className="absolute left-0 bottom-0 w-16 h-1 bg-red-500 rounded-full"></span>
              </h2>
            </div>

            <div className="space-y-5 text-gray-700 leading-8">
              <p className="text-justify">
                The
                <span className="font-semibold">
                  {" "}
                  Department of Computer Science & Engineering
                </span>
                is accredited by the
                <span className="font-semibold">
                  {" "}
                  National Board of Accreditation (NBA)
                </span>
                , reflecting its strong commitment to
                <span className="font-semibold"> academic excellence</span>.
                Established in
                <span className="font-semibold"> September 1998</span>, the
                department has evolved into a center of
                <span className="font-semibold">
                  {" "}
                  innovation and quality education
                </span>
                , offering
                <span className="font-semibold"> UG, PG, and PhD programs</span>
                .
              </p>

              <p className="text-justify">
                The department features state-of-the-art computer laboratories
                equipped with modern hardware and software to support effective
                learning. All laboratories, staff rooms, and offices are fully
                networked with high-speed internet, ensuring seamless access to
                resources for both students and faculty.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <div className="mb-6">
              <h2 className="inline-block relative text-2xl sm:text-3xl font-bold text-gray-800 pb-3">
                Department of Electronics & Communication
                <span className="absolute left-0 bottom-0 w-16 h-1 bg-red-500 rounded-full"></span>
              </h2>
            </div>

            <div className="space-y-5 text-gray-700 leading-8">
              <p className="text-justify">
                The
                <span className="font-semibold">
                  {" "}
                  Department of Electronics & Communication
                </span>{" "}
                is one of the oldest and most distinguished departments of the
                university, established in
                <span className="font-semibold"> 1998</span>. The department
                secured
                <span className="font-semibold">
                  {" "}
                  NBA accreditation in 2007
                </span>
                , reflecting its commitment to
                <span className="font-semibold">
                  {" "}
                  academic excellence and quality education
                </span>
                .
              </p>

              <p className="text-justify">
                The department offers
                <span className="font-semibold">
                  {" "}
                  Bachelor of Technology, Master of Technology, and Doctoral
                  programs{" "}
                </span>
                with a strong focus on both
                <span className="font-semibold">
                  {" "}
                  industry-oriented learning{" "}
                </span>
                and
                <span className="font-semibold">
                  {" "}
                  research-driven education
                </span>
                . The well-equipped laboratories form the backbone of the
                department, significantly enhancing students' practical and
                technical skills.
              </p>

              <p className="text-justify">
                Equipped with advanced laboratories and supported by a globally
                spread alumni network, the department continuously nurtures
                young minds and provides opportunities for growth and
                innovation. Apart from academics, students actively excel in
                <span className="font-semibold">
                  {" "}
                  inter-departmental cultural and sports activities
                </span>
                , contributing to their overall development.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}

        <div className="w-full lg:w-[32%]">
          <div className="sticky top-24">
            <div className="mb-6">
              <h2 className="inline-block relative text-xl font-bold text-gray-800 pb-3">
                Achievements
                <span className="absolute left-0 bottom-0 w-14 h-1 bg-red-500 rounded-full"></span>
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl border bg-white shadow-sm hover:shadow-xl transition duration-300"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* IEEE Section */}

      {/* <div className="px-4 sm:px-8 lg:px-12">
        <div className="mb-6">
          <h2 className="inline-block relative text-2xl sm:text-3xl font-bold text-gray-800 pb-3">
            IEEE
            <span className="absolute left-0 bottom-0 w-16 h-1 bg-red-500 rounded-full"></span>
          </h2>
        </div>

        <div className="space-y-5 text-gray-700 leading-8">
          <p className="text-justify">
            The{" "}
            <span className="font-semibold">
              Institute of Electrical and Electronics Engineers (IEEE)
            </span>
            is the{" "}
            <span className="font-semibold">
              world’s largest technical professional organization
            </span>
            , dedicated to advancing technology for the benefit of humanity.
            Founded in
            <span className="font-semibold"> 1963</span>, IEEE connects
            <span className="font-semibold">
              {" "}
              engineers, scientists, researchers, and students
            </span>
            worldwide to collaborate, innovate, and share knowledge.
          </p>

          <p className="text-justify">
            IEEE publishes
            <span className="font-semibold"> leading journals</span>, organizes
            <span className="font-semibold"> conferences</span>, develops
            <span className="font-semibold"> industry standards</span>, and
            provides
            <span className="font-semibold"> educational resources</span>
            to support professional growth.
          </p>

          <p className="text-justify">
            Through its global network, IEEE promotes
            <span className="font-semibold">
              {" "}
              technological innovation, ethical practices
            </span>
            , and continuous
            <span className="font-semibold"> professional development</span>,
            helping shape the future of technology.
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default About;
