import { Link } from "react-router-dom";
import displayImage from "../assets/integral_solar2.jpeg";

function Hero() {
  return (
    <div className="p-4 md:p-10 lg:px-4 lg:pb-0 lg:pt-4 mx-auto">
      <div className="relative">
        {/* Background Image */}
        <img
          src={displayImage}
          alt="Integral University"
          className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-3xl shadow-lg"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/60 hover:bg-black/70 transition-colors duration-500 rounded-3xl flex flex-col items-center justify-center text-center px-4">
          {/* Subtitle */}
          <h2 className="text-white text-lg md:text-2xl font-medium tracking-wide opacity-0 animate-[fadeUp_0.8s_ease-out_forwards]">
            Welcome To Integral University
          </h2>

          {/* Main Title */}
          <h1 className="text-white text-3xl md:text-5xl lg:text-8xl font-extrabold my-2 opacity-0 animate-[fadeUp_0.8s_ease-out_0.3s_forwards]">
            <span className="text-red-500 ">ICACECT</span>-2027
          </h1>

          {/* Description */}
          <p className="text-gray-200 text-xs md:text-sm lg:text-base max-w-3xl leading-relaxed mb-6 opacity-0 animate-[fadeUp_0.8s_ease-out_0.6s_forwards]">
            IEEE Technically Sponsored International Conference on Advancement
            in Computer Engineering and Communication Technology ICACECT-2027
          </p>

          {/* Button (RED THEME FIX) */}
          <Link to="/registration">
            <button className="relative overflow-hidden cursor-pointer px-6 py-2 md:px-8 md:py-3 border-2 border-red-500 text-red-500 rounded-full font-semibold shadow-lg group transition-all duration-300 opacity-0 animate-[fadeUp_0.8s_ease-out_0.9s_forwards]">
              {/* Hover Fill */}
              <span className="absolute inset-0 w-0 bg-red-500 transition-all duration-500 ease-in-out group-hover:w-full"></span>

              {/* Text */}
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                Register Now
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
