import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="banner w-full lg:h-screen h-full p-20">
      <div className="max-w-[1000px] h-full mx-auto px-8 flex flex-col justify-center ">
        <p className="text-gray-200">Hi, my name is </p>
        <h1 className="lg:text-7xl text-4xl  text-gray-200 font-semibold ">
          Guldana Aitbaeva
        </h1>
        <h2 className="lg:text-7xl text-4xl text-gray-200  font-semibold ">{`I'm a Front-End Devoloper`}</h2>
        <p className="max-w-[700px]  text-lg font-mono font-bold  text-gray-100  py-4">
          A front-end developer is a professional who specializes in creating
          the visual and interactive aspects of a website or web application.
        </p>
        <div>
          <button className="bg-teal-600 border-2 px-6 py-3 rounded-full text-gray-200 my-2 group flex items-center hover:bg-teal-600 hover:border-teal-800">
            View Work
            <span className="duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
