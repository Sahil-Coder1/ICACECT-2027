import { ChevronsRight, Link, Mail, Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-lg font-semibold uppercase mb-4 border-b border-gray-700 pb-2">
            Site Links
          </h2>
          <ul className="space-y-2">
            {[
              { name: "Home", link: "/" },
              { name: "About", link: "/about" },
              { name: "ICACECT Conference", link: "/icacect" },
              { name: "Tracks", link: "/tracks" },
              { name: "Submission", link: "/submission" },
              { name: "About University", link: "/university" },
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-2 w-fit group transform transition-all duration-300 hover:translate-x-2"
              >
                <ChevronsRight className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-transform duration-300 group-hover:translate-x-1" />

                <a
                  href={item.link}
                  className="text-gray-300 group-hover:text-white transition-colors duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold uppercase mb-4 border-b border-gray-700 pb-2">
            Social
          </h2>
          <ul className="space-y-2">
            {[
              {
                name: "Facebook",
                link: "https://www.facebook.com/integralunilko/",
              },
              {
                name: "Twitter",
                link: "https://x.com/IntegralUnilko",
              },
              {
                name: "LinkedIn",
                link: "https://www.linkedin.com/school/integral-university-lucknow-uttar-pradesh",
              },
              {
                name: "Instagram",
                link: "https://www.instagram.com/integralunilko_official",
              },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center w-fit gap-2 group transform transition-all duration-300 hover:translate-x-2"
                >
                  <ChevronsRight className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-transform duration-300 group-hover:translate-x-1" />
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold uppercase mb-4 border-b border-gray-700 pb-2">
            Contact
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Integral University, <br />
            Dasauli, Bas-ha Kursi Road, <br />
            Lucknow – 226026
          </p>

          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gray-400" />
              <span className="text-gray-300">+91 9335177775</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gray-400" />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:info@iul.ac.in"
                className="text-gray-300 hover:text-white transition"
              >
                info@iul.ac.in
              </a>
            </div>
            <div>
              <Link className="w-4 h-4 text-gray-400 inline-block mr-2" />
              <a
                href="https://www.iul.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                iul.ac.in
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-10 pt-4 text-center text-sm text-gray-400">
        © 2024 Integral University. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
