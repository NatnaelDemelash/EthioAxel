import analytics from "../assets/analytics.png";

const Analytics = () => {
  return (
    <div className="w-full bg-[#EFF1E4] py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid gap-8 md:grid-cols-2">
        <img
          src={analytics}
          alt="anlytics image"
          className="rounded-xl shadow-2xl"
        />
        <div className="flex flex-col text-center md:text-justify">
          <p className="text-[#3498DB] md:text-[30px] text-[22px] font-bold py-4">
            Data Analytics Dashboard
          </p>
          <p className="text-sm md:text-lg md:leading-8 py-2 px-4 md:px-0 ">
            We are passionate about leveraging the power of data science to fuel
            innovation and empower businesses in the era of data-driven
            decision-making. With a team of highly skilled data scientists,
            analysts, and engineers, we provide cutting-edge solutions that
            enable organizations to unlock the true potential of their data.
          </p>

          <button className="mx-auto text-white bg-[#3498DB] w-[200px] my-6 md:mx-0 py-4 font-medium text-xl rounded-lg shadow-2xl cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
