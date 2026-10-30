import React from "react";
import { Eye, Users, Store, TrendingUp } from "lucide-react";

// Import Sponsor Images
import etrainindia from "../assets/Sponsors/etrainindia.jpeg";
import onebigbit from "../assets/Sponsors/onebigbit.jpeg";
import sipher from "../assets/Sponsors/sipher.jpeg";
import softpro from "../assets/Sponsors/softpro.jpeg";

const sponsorsData = [
  {
    category: "Title Sponsor",
    accentColor: "bg-red-500",
    sponsors: [
      { id: 1, logo: softpro, alt: "Softpro" },
      { id: 2, logo: onebigbit, alt: "OneBigBit" },
    ],
  },
  {
    category: "Gold Sponsor",
    accentColor: "bg-amber-500",
    sponsors: [
      { id: 3, logo: sipher, alt: "Sipher Web Academy" },
      { id: 4, logo: etrainindia, alt: "EtrainIndia" },
    ],
  },
];

// Packages Configuration
const packages = [
  { title: "Title Package", price: "₹ 100000" },
  { title: "Platinum Package", price: "₹ 75000" },
  { title: "Gold Package", price: "₹ 40000" },
  { title: "Silver Package", price: "₹ 25000" },
  { title: "Bronze Package", price: "₹ 10000" },
  { title: "Well Wisher", price: "" },
];

// Benefits Configuration
const benefits = [
  {
    icon: Eye,
    title: "Brand Visibility",
    description: "Logo placement on conference materials, website, and banners",
    accent: "bg-blue-50 text-blue-600 border-blue-200",
  },
  {
    icon: Users,
    title: "Networking Opportunities",
    description: "Access to delegates, researchers, and industry professionals",
    accent: "bg-emerald-50 text-emerald-600 border-emerald-200",
  },
  {
    icon: Store,
    title: "Exhibition Space",
    description: "Dedicated space for product/service showcase",
    accent: "bg-amber-50 text-amber-600 border-amber-200",
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description: "Platform to promote your products",
    accent: "bg-purple-50 text-purple-600 border-purple-200",
  },
];

function Sponsorships() {
  const sponsorshipUrl = "https://apps.iul.ac.in/Register/icacect-sponsorship";

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Page Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
          Sponsorships
        </h1>
        <div className="w-16 h-1 bg-red-500 rounded-full mx-auto mt-3"></div>
      </div>

      {/* Our Sponsors (Only images displayed) */}
      <div className="mb-14">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
          Our Sponsors
        </h2>

        {sponsorsData.map((categoryGroup, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  categoryGroup.accentColor || "bg-blue-600"
                }`}
              ></span>
              {categoryGroup.category}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryGroup.sponsors.map((sponsor) => (
                <div
                  key={sponsor.id}
                  className="bg-white border border-slate-200 rounded-xl p-6 flex items-center justify-center hover:shadow-md transition h-32 sm:h-36"
                >
                  {sponsor.logo ? (
                    <img
                      src={sponsor.logo}
                      alt={sponsor.alt || "Sponsor"}
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <span className="text-gray-400 font-medium text-sm">
                      Logo
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Sponsorship Packages */}
      <div className="mb-14">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
          Sponsorship Packages
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {pkg.title}
                </h3>
                {pkg.price && (
                  <p className="text-2xl font-extrabold text-blue-600 mb-4">
                    {pkg.price}
                  </p>
                )}
              </div>

              <div className="mt-6">
                <a
                  href={sponsorshipUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-slate-900 hover:bg-blue-600 text-white font-medium py-2.5 px-4 rounded-lg transition duration-200"
                >
                  Become a Sponsor
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sponsorship Benefits */}
      <div className="mb-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 border-b pb-3">
          Sponsorship Benefits
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {benefits.map((benefit, idx) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-7 sm:p-8 hover:shadow-lg transition duration-200 flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center border mb-5 ${benefit.accent}`}
                  >
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug mb-2">
                    {benefit.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Sponsorships;
