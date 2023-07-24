import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="max-w-800 mx-auto text-center w-full h-screen mt-[-96px]  flex flex-col justify-center hero">
      <p className="text-[#3498DB] text-[18px] uppercase font-bold tracking-wide p-2">
        Growing With ➖ Data Analytics
      </p>
      <h1 className="text-4xl font-bold sm:6xl md:text-7xl md:py-6">
        Grow With Data
      </h1>
      <div className="flex justify-center items-center">
        <p className="md:text-4xl mb-4 sm:text-3xl text-xl py-4">
          Fast, flexable financing for
        </p>
        <Typed
          strings={["B2B", "SAAS", "B2C"]}
          typeSpeed={150}
          backSpeed={160}
          loop
          className="md:text-4xl mb-4 sm:text-3xl text-xl pl-2 text-[#3498DB]"
        />
      </div>
      <p className="max-w- 800 px-6 mx-auto md:text-2xl text-xl font-boldold text-gray-400">
        Monitor your data analytics to increase revenue for B2B, B2C & SAAS
        platforms
      </p>
      <button className="text-white bg-[#3498DB] w-[200px] my-12 mx-auto py-4 font-medium text-xl rounded-lg shadow-2xl cursor-pointer">
        Get Started
      </button>
    </div>
  );
};

export default Hero;
