import React from "react";
import chancellor from "../assets/Members/Patron/chancellor_sir.png";
import nadeem from "../assets/Members/Patron/Nadeem_Sir.jpg";
import fauzan from "../assets/Members/Patron/FauzanSir.png";
import adnan from "../assets/Members/Patron/AdnanSir.png";
import nida from "../assets/Members/Patron/Nida.png";
import furqan from "../assets/Members/Patron/Furqan.png";
import haris from "../assets/Members/Patron/Registrar.png";
import sri from "../assets/Members/Patron/Prof.Sri-Niwas-Singh.jpg";
import abdur from "../assets/Members/Co-Patrons/coe-abdurrahman.jpeg";
import sunil from "../assets/Members/Co-Patrons/ProfSunil.jpg";
import wahaj from "../assets/Members/Co-Patrons/wahajulhaq.jpeg";
import aqeelahmad from "../assets/Members/Co-Patrons/aqeelahmad.jpeg";
import atif from "../assets/Members/Co-Patrons/atif.jpeg";
import sufiyan from "../assets/Members/Co-Patrons/sufiyanabbassi.jpeg";
import yogesh from "../assets/Members/Co-Patrons/yogesh.jpg";
import AKS from "../assets/Members/Co-Patrons/AKS_pic.jpg";
import shish from "../assets/Members/Convenor/Shish.jpg";
import hasan from "../assets/Members/Convenor/hasanSaeed.jpg";
import imran from "../assets/Members/GeneralChair/imranullah.jpg";
import halima from "../assets/Members/GeneralChair/halimasadia.jpg";
import satish from "../assets/Members/GeneralChair/satish.png";
import archana from "../assets/Members/OrganizingSecretary/archana.jpg";
import faiyaz from "../assets/Members/OrganizingSecretary/Faiyaz.jpg";
import manish from "../assets/Members/OrganizingSecretary/Manish.jpg";
import Dimitrios_A_Karras from "../assets/Members/KeynoteSpeakers/Dimitrios_A_Karras.jpg";
import treasurer from "../assets/Members/Co-Patrons/treasurer.jpeg";
import naseem from "../assets/Members/Co-Patrons/naseem.jpg";
import mohammadFaisal from "../assets/Members/Co-Patrons/mohammadFaisal.jpg";
import MohammadRihan from "../assets/Members/Co-Patrons/MohammadRihan.jpeg";
import anchitScaled from "../assets/Members/Co-Patrons/anchit-scaled.jpg";

function MembersImages() {
  const members = {
    chiefPatron: [
      {
        name: "Prof. S.W. Akhtar",
        designation: "Founder and Hon’ble Chancellor",
        institute: "IU Lucknow",
        image: chancellor,
      },
    ],
    patrons: [
      {
        name: "Dr. Syed Nadeem Akhtar IU",
        designation: "Pro-Chancellor",
        institute: "Lucknow",
        image: nadeem,
      },
      {
        name: "Dr. Syed Mohammad Fauzan Akhtar",
        designation: "Additional Pro Chancellor (IIMSR)",
        institute: "IU, Lucknow",
        image: fauzan,
      },
      {
        name: "Mr. Syed Adnan Akhtar",
        designation: "Additional Pro Chancellor – IIPSR",
        institute: "IU, Lucknow",
        image: adnan,
      },
      {
        name: "Dr. Nida Fatima",
        designation: "Additional Pro Chancellor – ISF-CIED",
        institute: "IU, Lucknow",
        image: nida,
      },
      {
        name: "Prof. Furqan Qamar",
        designation: "Vice Chancellor",
        institute: "IU, Lucknow",
        image: furqan,
      },
      {
        name: "Prof. Mohd. Haris Siddiqui",
        designation: "Registrar",
        institute: "IU, Lucknow",
        image: haris,
      },
      {
        name: "Prof. Sri Niwas Singh",
        designation: "Director ABV-IIIT",
        institute: "Gwalior",
        image: sri,
      },
    ],
    copatron: [
      {
        name: "Prof. Abdul Rahman Khan",
        designation: "COE",
        institute: " IU, Lucknow",
        image: abdur,
      },
      {
        name: "Prof. Sunil Kumar",
        designation: "(Dean Faculty of Engineering & IT)",
        institute: "IU, Lucknow",
        image: sunil,
      },
      {
        name: "Prof. Wahajul Haq",
        designation: "Dean (Doctoral Studies)",
        institute: "IU, Lucknow",
        image: wahaj,
      },
      {
        name: "Prof. Syed Aqeel Ahmad",
        designation: "Director HRDC",
        institute: "IU, Lucknow",
        image: aqeelahmad,
      },
      {
        name: "Mr. Ahmad Raza",
        designation: "Treasurer",
        institute: "IU, Lucknow",
        image: treasurer,
      },
      {
        name: "Dr. Atif Siddiqui",
        designation: "Dy. Director Academics & Admission",
        institute: "IU, Lucknow",
        image: atif,
      },
      {
        name: "Prof. (Dr.) Mohammad Faisal",
        designation: "Provost and HoD Deptt. of Computer Application",
        institute: "IU, Lucknow",
        image: mohammadFaisal,
      },
      {
        name: "Prof. (Dr.) Naseem Ahmed Jafri",
        designation: "Chief Proctor & Dean of the Faculty of Law",
        institute: "IU, Lucknow",
        image: naseem,
      },
      {
        name: "Er. Mohd Sufiyan Abbasi",
        designation: "Director of Procurement",
        institute: "Integral University",
        image: sufiyan,
      },
      {
        name: "Prof. (Dr.) Yogesh Chauhan",
        designation: "IIT Kanpur",
        institute: "Chairman IEEE UP Section",
        image: yogesh,
      },
      {
        name: "Prof. (Dr.) Asheesh Kumar Singh",
        designation: "Ex-Chairman",
        institute: "IEEE UP Section",
        image: AKS,
      },
      {
        name: "Prof. Mohammad Rihan",
        designation: "Chair Elect, IEEE UP Section, AMU, Aligarh",
        institute: "IEEE UP Section",
        image: MohammadRihan,
      },
    ],
    convener: [
      {
        name: "Prof. (Dr.) Shish Ahmad",
        designation: "HOD Deptt. of CSE",
        institute: "IU, Lucknow",
        image: shish,
      },
      {
        name: "Prof. Syed Hasan Saeed",
        designation: "HOD Deptt. of ECE",
        institute: "IU, Lucknow",
        image: hasan,
      },
    ],
    GeneralChair: [
      {
        name: "Dr. Imran Ullah Khan",
        designation: "Deptt. of ECE",
        institute: "IU, Lucknow",
        image: imran,
      },
      {
        name: "Dr. Halima Sadia",
        designation: "Deptt. of CSE",
        institute: "IU, Lucknow",
        image: halima,
      },
      {
        name: "Dr. Satish Kumar Singh",
        designation: "Ex-Chairman",
        institute: "IEEE UP Section",
        image: satish,
      },
    ],
    OrganizingSecretary: [
      {
        name: "Dr. Faiyaz Ahmad",
        designation: "Deptt. of CSE",
        institute: "IU, Lucknow",
        image: faiyaz,
      },
      {
        name: "Dr. Manish Madhav Tripathi",
        designation: "Deptt. of CSE",
        institute: "IU, Lucknow",
        image: manish,
      },
      {
        name: "Dr. Archana Yadav",
        designation: "Deptt. of ECE",
        institute: "IU, Lucknow",
        image: archana,
      },
    ],
    speaker: [
      {
        name: "Dr. Dimitrios A. Karras",
        designation: "General Department / School of Science",
        institute: "National and Kapodistrian University of Athens, Greece",
        image: Dimitrios_A_Karras,
      },
      {
        name: "Assoc. Prof. Anchit Bijalwan",
        designation: "School of Computing & Innovative Technologies",
        institute: "British University Vietnam (BUV)",
        image: anchitScaled,
      },
    ],
  };

  return (
    <section className="mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gradient-to-b from-white to-gray-100">
      <div>
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800">
            Chief Patrons
          </h1>

          <div className="w-16 h-1 bg-red-500 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Members */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-12">
          {members.chiefPatron.map((member, index) => (
            <div key={index} className="text-center">
              {/* Image */}
              <div className="flex justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="
                  w-64 h-64
                  md:w-80 md:h-80
                  rounded-full
                  object-cover
                  object-top
                  border-4 border-white
                  shadow-md"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Details */}
              <div className="mt-7">
                <h2 className="text-lg sm:text-xl font-extrabold text-gray-800">
                  {member.name}
                </h2>

                <p className="text-blue-600 font-medium mt-1">
                  {member.designation}
                </p>

                <p className="text-gray-600 text-sm mt-2">{member.institute}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800">
            Patrons
          </h1>

          <div className="w-16 h-1 bg-red-500 rounded-full mx-auto mt-4"></div>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {members.patrons.map((member, index) => (
            <div key={index} className="text-center">
              {/* Image */}
              <div className="flex justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="
                  w-64 h-64
                  md:w-80 md:h-80
                  rounded-full
                  object-cover
                  object-top
                  border-4 border-white
                  shadow-md"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Details */}
              <div className="mt-7">
                <h2 className="text-lg sm:text-xl font-extrabold text-gray-800">
                  {member.name}
                </h2>

                <p className="text-blue-600 font-medium mt-1">
                  {member.designation}
                </p>

                <p className="text-gray-600 text-sm mt-2">{member.institute}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800">
            Co - Patrons
          </h1>

          <div className="w-16 h-1 bg-red-500 rounded-full mx-auto mt-4"></div>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {members.copatron.map((member, index) => (
            <div key={index} className="text-center">
              {/* Image */}
              <div className="flex justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="
                  w-64 h-64
                  md:w-80 md:h-80
                  rounded-full
                  object-cover
                  object-top
                  border-4 border-white
                  shadow-md"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Details */}
              <div className="mt-7">
                <h2 className="text-lg sm:text-xl font-extrabold text-gray-800">
                  {member.name}
                </h2>

                <p className="text-blue-600 font-medium mt-1">
                  {member.designation}
                </p>

                <p className="text-gray-600 text-sm mt-2">{member.institute}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800">
            Convener(s)
          </h1>

          <div className="w-16 h-1 bg-red-500 rounded-full mx-auto mt-4"></div>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {members.convener.map((member, index) => (
            <div key={index} className="text-center">
              {/* Image */}
              <div className="flex justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="
                  w-64 h-64
                  md:w-80 md:h-80
                  rounded-full
                  object-cover
                  object-top
                  border-4 border-white
                  shadow-md
                "
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Details */}
              <div className="mt-7">
                <h2 className="text-lg sm:text-xl font-extrabold text-gray-800">
                  {member.name}
                </h2>

                <p className="text-blue-600 font-medium mt-1">
                  {member.designation}
                </p>

                <p className="text-gray-600 text-sm mt-2">{member.institute}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800">
            Conference General Chair
          </h1>

          <div className="w-16 h-1 bg-red-500 rounded-full mx-auto mt-4"></div>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {members.GeneralChair.map((member, index) => (
            <div key={index} className="text-center">
              {/* Image */}
              <div className="flex justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="
                  w-64 h-64
                  md:w-80 md:h-80
                  rounded-full
                  object-cover
                  object-top
                  border-4 border-white
                  shadow-md
                "
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Details */}
              <div className="mt-7">
                <h2 className="text-lg sm:text-xl font-extrabold text-gray-800">
                  {member.name}
                </h2>

                <p className="text-blue-600 font-medium mt-1">
                  {member.designation}
                </p>

                <p className="text-gray-600 text-sm mt-2">{member.institute}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800">
            Organizing Secretary
          </h1>

          <div className="w-16 h-1 bg-red-500 rounded-full mx-auto mt-4"></div>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {members.OrganizingSecretary.map((member, index) => (
            <div key={index} className="text-center">
              {/* Image */}
              <div className="flex justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="
                  w-64 h-64
                  md:w-80 md:h-80
                  rounded-full
                  object-cover
                  object-top
                  border-4 border-white
                  shadow-md
                "
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Details */}
              <div className="mt-7">
                <h2 className="text-lg sm:text-xl font-extrabold text-gray-800">
                  {member.name}
                </h2>

                <p className="text-blue-600 font-medium mt-1">
                  {member.designation}
                </p>

                <p className="text-gray-600 text-sm mt-2">{member.institute}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800">
            Keynote Speaker
          </h1>

          <div className="w-16 h-1 bg-red-500 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Members */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {members.speaker.map((member, index) => (
            <div key={index} className="text-center">
              {/* Image */}
              <div className="flex justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="
                  w-64 h-64
                  md:w-80 md:h-80
                  rounded-full
                  object-cover
                  object-top
                  border-4 border-white
                  shadow-md
                "
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Details */}
              <div className="mt-7">
                <h2 className="text-lg sm:text-xl font-extrabold text-gray-800">
                  {member.name}
                </h2>

                <p className="text-blue-600 font-medium mt-1">
                  {member.designation}
                </p>

                <p className="text-gray-600 text-sm mt-2">{member.institute}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MembersImages;
