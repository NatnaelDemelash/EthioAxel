import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaDribbbleSquare,
  FaInstagramSquare,
} from "react-icons/fa";
const Footter = () => {
  return (
    <div className="max-w[1240px] mx-auto bg-black text-gray-300 py-16 px-4 grid gap-8 lg:grid-cols-3">
      <div>
        <h1 className="w-full font-bold text-3xl text-[#3498DB]">
          ⚡EthioAxel⚡
        </h1>
        <p className="py-2 px-6">
          We are passionate about leveraging the power of data science to fuel
          innovation and empower businesses in the era of data-driven
          decision-making.
        </p>
        <div className="flex justify-between my-4 px-6  md:w-[75%]">
          <FaFacebookSquare size={30} />
          <FaInstagramSquare size={30} />
          <FaTwitterSquare size={30} />
          <FaDribbbleSquare size={30} />
          <FaGithubSquare size={30} />
        </div>
      </div>
      <div className="md:col-span-2 md:px-20 md:py-10 flex flex-wrap gap-6 px-2 justify-between ">
        <div>
          <h3 className="text-lg text-gray-400">Solutions</h3>
          <ul>
            <li className="py-2 text-sm">
              <a href="#"> Analytics </a>
            </li>
            <li className="py-2 text-sm">
              <a href="#"> Marketing </a>
            </li>
            <li className="py-2 text-sm">
              <a href="#"> Commerce </a>
            </li>
            <li className="py-2 text-sm">
              <a href="#"> Insights </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg text-gray-400">Supports</h3>
          <ul>
            <li className="py-2 text-sm">
              <a href="#">Pricing</a>
            </li>
            <li className="py-2 text-sm">
              <a href="#">Documentation</a>
            </li>
            <li className="py-2 text-sm">
              <a href="#">Guides</a>
            </li>
            <li className="py-2 text-sm">
              <a href="#">API Status</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg text-gray-400">Company</h3>
          <ul>
            <li className="py-2 text-sm">
              <a href="#">About</a>
            </li>
            <li className="py-2 text-sm">
              <a href="#">Blogs</a>
            </li>
            <li className="py-2 text-sm">
              <a href="#">Jobs</a>
            </li>
            <li className="py-2 text-sm">
              <a href="#">Press</a>
            </li>
            <li className="py-2 text-sm">
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg text-gray-400">Legal</h3>
          <ul>
            <li className="py-2 text-sm">
              <a href="#">Claims</a>
            </li>
            <li className="py-2 text-sm">
              <a href="#">Policy</a>
            </li>
            <li className="py-2 text-sm">
              <a href="#">Terms</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footter;
