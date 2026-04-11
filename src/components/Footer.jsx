import { ChevronsRight, Link, Mail, Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-4 pb-6 lg:px-8">
      <div className="  mx-auto px-6">
        <div>
          <p className="text-gray-300 leading-relaxed">
            Integral University, <br />
            Dasauli, Bas-ha Kursi Road, <br />
            Lucknow – 226026
          </p>

          <div className="mt-2">
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

      <div className="border-t border-gray-800 mt-4 pt-4 text-center text-sm text-gray-400">
        © 2024 Integral University. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
