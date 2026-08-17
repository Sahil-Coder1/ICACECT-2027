import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  User,
  Mail,
  Phone,
  Search,
  Sparkles,
  ArrowRight,
  Copy,
  Check,
} from "lucide-react";

const specialTracksData = [
  {
    id: "SS01",
    code: "SS01",
    title: "Application of Artificial Intelligence in Smart Healthcare (AI-SHC)",
    badgeBg: "bg-blue-600",
    badgeGradient: "from-blue-600 to-blue-700",
    titleColor: "text-blue-600",
    organizers: [
      {
        name: "Dr. Nadeem Akhtar",
        designation:
          "Deputy Coordinator, Interdisciplinary Center of Artificial Intelligence, AMU.",
      },
      {
        name: "Prof. Rashid Ali",
        designation:
          "Coordinator, Interdisciplinary Center of Artificial Intelligence, AMU.",
      },
      {
        name: "Dr. Tamim Ahmad",
        designation:
          "Deputy Coordinator, Interdisciplinary Center of Artificial Intelligence, AMU.",
      },
    ],
    contacts: [
      {
        email: "nadeemakhtar@zhcet.ac.in",
        phone: "+91 9450658150",
      },
    ],
  },
  {
    id: "SS02",
    code: "SS02",
    title: "Intelligence at the Edge: Converging Next-Gen VLSI, IoT, and AI",
    badgeBg: "bg-red-600",
    badgeGradient: "from-red-600 to-red-700",
    titleColor: "text-red-600",
    organizers: [
      {
        name: "Prof. Ruqaiya Khanam",
        designation: "Sharda University, India",
      },
      {
        name: "Dr. Noor Ain Kamsani",
        designation: "Universiti Putra Malaysia, Malaysia",
      },
      {
        name: "Dr. Anubha Manju Kalra",
        designation: "Auckland University of Technology, New Zealand",
      },
    ],
    contacts: [
      {
        email: "dr.kruqaiya@gmail.com",
        phone: "+91 85859 05898",
      },
    ],
  },
  {
    id: "SS03",
    code: "SS03",
    title:
      "Emerging Trends in Machine Learning, IoT, Quantum Computing and Signal Processing",
    badgeBg: "bg-indigo-600",
    badgeGradient: "from-indigo-600 to-indigo-700",
    titleColor: "text-indigo-600",
    organizers: [
      {
        name: "Dr. Kamlesh Kumar Singh",
        designation:
          "Department of Electronics & Comm. Engineering Amity University Uttar Pradesh",
      },
      {
        name: "Dr. Atul Srivastava",
        designation:
          "Department of Computer Science and Engineering, Amity University Uttar Pradesh, Lucknow Campus",
      },
    ],
    contacts: [
      {
        email: "kksingh@lko.amity.edu",
        phone: "+91-9415397255",
      },
      {
        email: "asrivastava5@lko.amity.edu",
        phone: "+91-98390 70345",
      },
    ],
  },
  {
    id: "SS04",
    code: "SS04",
    title:
      "Artificial Intelligence, Learning Analytics, and Emerging Technologies for Transforming Education",
    badgeBg: "bg-emerald-600",
    badgeGradient: "from-emerald-600 to-emerald-700",
    titleColor: "text-emerald-600",
    organizers: [
      {
        name: "Dr. Mohd Anas Wajid",
        designation:
          "Catedra Professor & Researcher (Data Science), Institute for the Future of Education, Tecnológico de Monterrey, Mexico",
      },
    ],
    contacts: [
      {
        email: "anas_wajid@tec.mx",
        phone: "",
      },
    ],
  },
  {
    id: "SS05",
    code: "SS05",
    title:
      "Computational Linguistic and Predictive Analytics using Machine Learning",
    badgeBg: "bg-amber-600",
    badgeGradient: "from-amber-600 to-amber-700",
    titleColor: "text-amber-600",
    organizers: [
      {
        name: "Dr. Pankaj kumar",
        designation:
          "Professor & Head, Department of CSE, Sri Ramswaroop College of Engineering and Management, Lucknow",
      },
      {
        name: "Dr. Sadhna Rana",
        designation:
          "Associate Professor, Department of CSE, Sri Ramswaroop College of Engineering and Management, Lucknow",
      },
      {
        name: "Ratan Rajan Srivastava",
        designation:
          "Department of CSE, Sri Ramswaroop College of Engineering and Management, Lucknow",
      },
    ],
    contacts: [
      {
        email: "pk79jan@gmail.com",
        phone: "9839137506",
      },
      {
        email: "sadhana.cs@srmcem.ac.in",
        phone: "",
      },
      {
        email: "ratanrajan@gmail.com",
        phone: "",
      },
    ],
  },
  {
    id: "SS06",
    code: "SS06",
    title: "Emerging and Sustainable Technologies",
    badgeBg: "bg-teal-600",
    badgeGradient: "from-teal-600 to-teal-700",
    titleColor: "text-teal-600",
    organizers: [
      {
        name: "Prof. Pawan Kumar Chaurasia",
        designation:
          "Professor, Department of Information Technology, School of Information Science & Technology, BBAU LUCKNOW",
      },
      {
        name: "Dr. Vipin Kumar",
        designation:
          "Associate Professor & Head, Department of Computer Science, Haryana Central University, Haryana, India",
      },
      {
        name: "Dr. Vandna Rani Verma",
        designation:
          "Associate Professor, Computer Science & Engineering Department, Galgotias College of Engineering & Technology, Greater Noida, UP, India",
      },
    ],
    contacts: [
      {
        email: "pkc.gkp@gmail.com",
        phone: "+91-9451393566",
      },
      {
        email: "vipinkumar@cuh.ac.in",
        phone: "",
      },
      {
        email: "vandna.mtech@gmail.com",
        phone: "",
      },
    ],
  },
  {
    id: "SS07",
    code: "SS07",
    title:
      "AI Ethics, E-Governance, Cybersecurity & Responsible AI Practices.",
    badgeBg: "bg-purple-600",
    badgeGradient: "from-purple-600 to-purple-700",
    titleColor: "text-purple-600",
    organizers: [
      {
        name: "Dr. Md. Iqbal",
        designation:
          "Professor, Department of Computer Science & Engineering, Quantum School of Technology, Quantum University, Roorkee-Dehradun Highway, Mandawar, Roorkee-247662 (U.K.)",
      },
      {
        name: "Dr. Ahmad Talha Siddiqui",
        designation:
          "Associate Professor, Department of Computer Science and Engineering & IT, Maulana Azad National Urdu University, (A Central University), Hyderabad, India",
      },
    ],
    contacts: [
      {
        email: "iqbal.hodcse@gmail.com",
        phone: "9634075167",
      },
      {
        email: "ahmadtalha2007@gmail.com",
        phone: "+91 78930 35687",
      },
    ],
  },
  {
    id: "SS08",
    code: "SS08",
    title:
      "AI and Machine Learning for Smart, Sustainable and Inclusive Development.",
    badgeBg: "bg-rose-600",
    badgeGradient: "from-rose-600 to-rose-700",
    titleColor: "text-rose-600",
    organizers: [
      {
        name: "Prof. Vinita Jindal",
        designation:
          "Professor, Department of Computer Science, Keshav Mahavidyalaya, University of Delhi, New Delhi",
      },
      {
        name: "Dr. Sunil",
        designation:
          "Associate Professor, Computer Engineering, University Polytechnic, Jamia Millia Islamia (A Central University), New Delhi",
      },
    ],
    contacts: [
      {
        email: "vjindal@keshav.du.ac.in",
        phone: "9810100377",
      },
      {
        email: "sunil@jmi.ac.in",
        phone: "991 0371407",
      },
    ],
  },
  {
    id: "SS09",
    code: "SS09",
    title:
      "AI-Enabled Intelligent Systems: Convergence of Computer Vision, Digital Twins, and Society 5.0",
    badgeBg: "bg-blue-700",
    badgeGradient: "from-blue-700 to-cyan-700",
    titleColor: "text-blue-700",
    organizers: [
      {
        name: "Dr. Zeeshan Ali Siddiqui",
        designation:
          "Department of Computer Science and Engineering, Lucknow University",
      },
      {
        name: "Dr. Rohit Srivastava",
        designation:
          "Department of Computer Science and Engineering, Lucknow University",
      },
    ],
    contacts: [
      {
        email: "zeealis@gmail.com",
      },{
        email:"siddiqui_zeeshan@lkouniv.ac.in",
        phone: "9810513463",
      },
      {
        email: "srivastava_rohit@lkouniv.ac.in",
        phone: "",
      },
    ],
  },
];

function SpecialTracks() {
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(null);

  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  const filteredTracks = specialTracksData.filter((track) => {
    const query = searchTerm.toLowerCase();
    const matchesTitle = track.title.toLowerCase().includes(query);
    const matchesCode = track.code.toLowerCase().includes(query);
    const matchesOrganizer = track.organizers.some(
      (org) =>
        org.name.toLowerCase().includes(query) ||
        (org.designation && org.designation.toLowerCase().includes(query))
    );
    const matchesContact = track.contacts.some(
      (c) =>
        (c.email && c.email.toLowerCase().includes(query)) ||
        (c.phone && c.phone.toLowerCase().includes(query))
    );
    return matchesTitle || matchesCode || matchesOrganizer || matchesContact;
  });

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6">
      {/* IEEE Announcement Banner */}
       <p className="text-sm text-left sm:text-base lg:text-base font-bold text-red-500 mb-4">
        All accepted, registered and presented papers will be submitted for
        inclusion into IEEE Xplore subject to meeting IEEE Xplore's scope and
        quality requirements.
      </p>

      {/* Header */}
      <div className="text-center relative pb-6 mb-8">
        {/* <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs sm:text-sm font-semibold mb-3">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>Special Tracks</span>
        </div> */}

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
          Accepted Special Sessions
        </h1>

        <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Explore the accepted special sessions for ICACECT-2027 and contact the
          organizers for more details.
        </p>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-20 h-1 bg-red-500 rounded-full"></div>
      </div>

      {/* Search & Actions Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        {/* Search Input */}
        <div className="relative w-full sm:w-80 md:w-96">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search session title, organizer, email..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm shadow-sm transition"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600"
            >
              Clear
            </button>
          )}
        </div>

        {/* Propose a Session Link Button */}
        <Link
          to="/special-session"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
        >
          <span>Propose a Special Session</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Special Tracks List */}
      <div className="space-y-6 sm:space-y-8">
        {filteredTracks.length > 0 ? (
          filteredTracks.map((track) => (
            <div
              key={track.id}
              className="group bg-white rounded-2xl border border-gray-200/80 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row"
            >
              {/* Left Badge Strip */}
              <div
                className={`w-full md:w-32 lg:w-36 ${track.badgeBg} bg-gradient-to-br ${track.badgeGradient} flex items-center justify-center py-4 md:py-8 px-4 flex-shrink-0 text-white font-extrabold text-xl sm:text-2xl tracking-wider shadow-inner`}
              >
                <div className="flex md:flex-col items-center gap-2">
                  <span>{track.code}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex-1 p-5 sm:p-6 md:p-8 flex flex-col justify-between">
                {/* Title */}
                <div>
                  <h2
                    className={`text-lg sm:text-xl md:text-2xl font-bold ${track.titleColor} leading-snug tracking-tight`}
                  >
                    {track.title}
                  </h2>

                  <div className="w-full h-px bg-gray-200 my-4"></div>
                </div>

                {/* Organizers List */}
                <div className="space-y-3 mb-5">
                  {track.organizers.map((organizer, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <User className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-bold text-gray-900 text-sm sm:text-base">
                          {organizer.name}
                        </span>
                        {organizer.designation && (
                          <span className="text-gray-600 text-xs sm:text-sm ml-1.5 leading-relaxed">
                            – {organizer.designation}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Contact Information */}
                {track.contacts && track.contacts.length > 0 && (
                  <div className="pt-4 border-t border-dashed border-gray-200 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm">
                    {track.contacts.map((contact, cIdx) => (
                      <div
                        key={cIdx}
                        className="flex flex-wrap items-center gap-x-4 gap-y-1"
                      >
                        {contact.email && (
                          <div className="flex items-center gap-1.5">
                            <Mail className="w-4 h-4 text-gray-500 flex-shrink-0" />
                            {contact.email.includes("/") ? (
                              <span className="text-blue-600 font-medium break-all">
                                {contact.email}
                              </span>
                            ) : (
                              <a
                                href={`mailto:${contact.email}`}
                                className="text-blue-600 hover:text-blue-800 hover:underline font-medium break-all"
                              >
                                {contact.email}
                              </a>
                            )}
                            <button
                              onClick={() => handleCopyEmail(contact.email)}
                              title="Copy email"
                              className="p-1 text-gray-400 hover:text-gray-700 transition"
                            >
                              {copiedEmail === contact.email ? (
                                <Check className="w-3.5 h-3.5 text-green-600" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </button>
                          </div>
                        )}

                        {contact.phone && (
                          <div className="flex items-center gap-1.5">
                            <Phone className="w-4 h-4 text-gray-500 flex-shrink-0" />
                            <a
                              href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`}
                              className="text-gray-700 hover:text-blue-600 font-medium transition"
                            >
                              {contact.phone}
                            </a>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
            <p className="text-gray-600 font-medium">
              No special sessions found matching &ldquo;{searchTerm}&rdquo;
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="mt-3 text-sm text-blue-600 hover:underline font-semibold"
            >
              Clear search filter
            </button>
          </div>
        )}
      </div>

      {/* Bottom CTA Box */}
      {/* <div className="mt-12 bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold">
              Want to organize a Special Session?
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
              We invite researchers and industry experts to submit proposals for
              theme-based special sessions. Proposers will lead their session and
              drive focused discussions.
            </p>
          </div>
          <Link
            to="/special-session"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-xl text-sm transition-all duration-200 shadow-md hover:shadow-red-500/20"
          >
            <span>View Proposal Guidelines</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div> */}
    </div>
  );
}

export default SpecialTracks;
