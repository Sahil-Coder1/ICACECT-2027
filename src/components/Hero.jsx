import displayImage from "../assets/integral_solar2.jpeg";

function Hero() {
  return (
    <div className="p-4 md:p-10 lg:px-16 max-w-7xl mx-auto">
      <div className="relative">
        <img
          src={displayImage}
          alt="Integral University"
          className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-3xl shadow-lg"
        />
        <div className="absolute inset-0 bg-black/50 hover:bg-black/70 transition-colors duration-500 rounded-3xl flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-white text-lg md:text-2xl font-medium tracking-wide opacity-0 animate-[fadeUp_0.8s_ease-out_forwards]">
            Welcome To Integral University
          </h2>

          <h1 className="text-white text-3xl md:text-5xl lg:text-8xl font-bold my-2 opacity-0 animate-[fadeUp_0.8s_ease-out_0.3s_forwards]">
            ICACECT-2027
          </h1>

          <p className="text-white text-xs md:text-sm lg:text-base max-w-3xl leading-relaxed mb-4 opacity-0 animate-[fadeUp_0.8s_ease-out_0.6s_forwards]">
            3nd IEEE Sponsored International Conference on Advancement in
            Computer Engineering and Communication Technology ICACECT-2027
          </p>

          <button className="relative overflow-hidden cursor-pointer px-6 py-2 md:px-8 md:py-3 border-2 border-blue-600 text-blue-600 rounded-full font-semibold shadow-lg group transition-all duration-300 opacity-0 animate-[fadeUp_0.8s_ease-out_0.9s_forwards]">
            <span className="absolute inset-0 w-0 bg-blue-600 transition-all duration-500 ease-in-out group-hover:w-full"></span>

            <span className="relative z-10 group-hover:text-white transition-colors duration-500">
              Register Now
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
