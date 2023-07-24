const Newsletter = () => {
  return (
    <div className="w-full py-16 px-4 bg-[#DFD2CA]">
      <div className="max-w-[1240px] mx-auto grid items-center lg:grid-cols-3 gap-2">
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-bold sm:3xl md:text-4xl py-2 leading-8">
            Want tips & tricks to optimize your work flow ?
          </h1>
          <p className="text-[18px] py-2">
            Sign up to our newsleter and stay up to date
          </p>
        </div>

        <div>
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-lg outline-none"
              type="email"
              placeholder="Enter your email"
            />
            <button className="text-white bg-[#3498DB] w-[180px] my-6 ml-4 rounded-md py-3 px-6 text-md rounded-m cursor-pointer">
              Notify me
            </button>
          </div>
          <p className="text-center sm:text-justify">
            We care about the protection of your data. Read our <br />
            <span className="text-[#3498DB] font-bold">
              {" "}
              Privacy policy
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
