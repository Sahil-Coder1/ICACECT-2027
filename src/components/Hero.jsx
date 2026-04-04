import displayImage from "../assets/integral_solar2.jpeg";

function Hero() {
  return (
    <div className="p-4 md:p-10 lg:px-16 max-w-7xl mx-auto">
      <img
        src={displayImage}
        alt="Integral University"
        className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-3xl shadow-lg"
      />
    </div>
  );
}

export default Hero;
