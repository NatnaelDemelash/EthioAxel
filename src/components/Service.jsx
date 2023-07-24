import pie from "../assets/pie.png";
import business from "../assets/business.png";
import node from "../assets/node.png";

const Service = () => {
  return (
    <div className="w-full py-[6rem] px-4">
      <div className="max-w-[1240px] mx-auto ">
        <h1 className="max-w-[700px] mb-6 text-4xl sm:text-5xl md:text-6xl md:leading-[4.5rem] ">
          Our data science and analytics{" "}
          <span className="border-b-4 border-[#3498DB]">services</span>
        </h1>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="w-full my-8  bg-[#F2F1EC] flex flex-col p-4 shadow-xl rounded-lg hover:scale-105 duration-300">
            <img className="w-15 mx-auto " src={pie} alt="images" />
            <h2 className="text-2xl py-4 text-center font-bold uppercase">
              Basic
            </h2>
            <p className="text-4xl text-center font-bold">500 ETB</p>
            <div className="text-center font-medium">
              <p className="py-2 mx-8 mt-8"> &raquo; 100GB Storage</p>
              <p className="py-2 mx-8">&raquo; 1 Granted User</p>
              <p className="py-2 mx-8">&raquo; Send up to 2GB data</p>
            </div>
            <a
              href="#"
              className="border-b-2 w-28 mx-auto border-b-[#3498DB] text-center my-8 text-[#3498DB] font-bold"
            >
              Start trial &rarr;
            </a>
          </div>

          <div className="w-full my-4  bg-[#c9d685bd] flex flex-col p-4 shadow-2xl rounded-lg hover:scale-105 duration-300">
            <img className="w-15 mx-auto " src={node} alt="images" />
            <h2 className="text-2xl py-4 text-center font-bold uppercase">
              Stndard
            </h2>
            <p className="text-4xl text-center font-bold">800 ETB</p>
            <div className="text-center font-medium">
              <p className="py-2 mx-8 mt-8"> &raquo; 500GB Storage</p>
              <p className="py-2 mx-8">&raquo; 10 Granted Users</p>
              <p className="py-2 mx-8">&raquo; Send up to 5GB data</p>
            </div>
            <a
              href="#"
              className="border-b-2 w-28 mx-auto border-b-[#3498DB] text-center my-8 text-[#3498DB] font-bold"
            >
              Start trial &rarr;
            </a>
          </div>

          <div className="w-full my-8  bg-[#F2F1EC] flex flex-col p-4 shadow-xl rounded-lg hover:scale-105 duration-300">
            <img className="w-15 mx-auto " src={business} alt="images" />
            <h2 className="text-2xl py-4 text-center font-bold uppercase">
              Premium
            </h2>
            <p className="text-4xl text-center font-bold">1500 ETB</p>
            <div className="text-center font-medium">
              <p className="py-2 mx-8 mt-8"> &raquo; 1TB Storage</p>
              <p className="py-2 mx-8">&raquo; 30 Granted Users</p>
              <p className="py-2 mx-8">&raquo; Send up to 10GB data</p>
            </div>
            <a
              href="#"
              className="border-b-2 w-28 mx-auto border-b-[#3498DB] text-center my-8 text-[#3498DB] font-bold"
            >
              Start trial &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
