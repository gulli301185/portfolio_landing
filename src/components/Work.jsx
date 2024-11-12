import work2 from "../assets/pngimg.com - iphone_PNG5741.png";

const Work = () => {
  return (
    <div name="work" className="work w-full h-full  text-teal-500">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full  h-full">
        <div className=" pb-8">
          <h1 className="text-4xl font-bold inline border-b-4  border-teal-600">
            Work
          </h1>
          <p className="text-lg py-6 font-serif font-bold">
            Please, check out some of my recent work!
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          <div
            style={{
              backgroundImage: `url(${"https://t3.ftcdn.net/jpg/08/53/51/04/360_F_853510429_A01zTSwKTkjZe86xgwYGYsvdxRhB3RDA.jpg"})`,
            }}
            className=" shadow-black shadow-lg rounded-full group container flex justify-center items-center mx-auto content-div duration-500 hover:scale-110"
          >
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="font-bold text-white tracking-wider uppercase">
                UI Insparation
              </span>
              <div className="text-center pt-6">
                <a href="/">
                  <button className="bg-slate-500 rounded-full px-6 py-2 hover:scale-110 duration-500 opacity-70 text-teal-400 text-center">
                    Wireframes
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${work2})` }}
            className="shadow-black shadow-lg rounded-full group container flex justify-center items-center mx-auto content-div duration-500 hover:scale-110"
          >
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="font-bold text-white tracking-wider uppercase">
                UI Insparation
              </span>
              <div className="text-center pt-6">
                <a href="/">
                  <button className="bg-slate-500 rounded-full px-6 py-2 hover:scale-110 duration-500 opacity-70 text-teal-400 text-center">
                    Wireframes
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${"https://agilquest.com/wp-content/uploads/2022/04/teamwork-hands-in.jpg"})`,
            }}
            className="shadow-black shadow-lg rounded-full group container flex justify-center items-center mx-auto content-div duration-500 hover:scale-110"
          >
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="font-bold text-white tracking-wider uppercase">
                UI Insparation
              </span>
              <div className="text-center pt-6">
                <a href="/">
                  <button className="bg-slate-500 rounded-full px-6 py-2 hover:scale-110 duration-500 opacity-70 text-teal-400 text-center">
                    Wireframes
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${"https://media.licdn.com/dms/image/D5612AQGkZnuqjOFsLA/article-cover_image-shrink_720_1280/0/1661287237628?e=2147483647&v=beta&t=JIr7it-QAv4iATlL8Pjyu8-eFgkPz0PP2fh-GUCePX8"})`,
            }}
            className="shadow-black shadow-lg rounded-full group container flex justify-center items-center mx-auto content-div duration-500 hover:scale-110"
          >
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="font-bold text-white tracking-wider uppercase">
                UI Insparation
              </span>
              <div className="text-center pt-6">
                <a href="/">
                  <button className="bg-slate-500 rounded-full px-6 py-2 hover:scale-110 duration-500 opacity-70 text-teal-400 text-center">
                    Wireframes
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${"https://images.stockcake.com/public/2/7/e/27ea1034-f5a0-43e2-9613-0f9b1a36ed7c_large/office-team-working-stockcake.jpg"})`,
            }}
            className="shadow-black shadow-lg rounded-full group container flex justify-center items-center mx-auto content-div duration-500 hover:scale-110"
          >
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="font-bold text-white tracking-wider uppercase">
                UI Insparation
              </span>
              <div className="text-center pt-6">
                <a href="/">
                  <button className="bg-slate-500 rounded-full px-6 py-2 hover:scale-110 duration-500 opacity-70 text-teal-400 text-center">
                    Wireframes
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${"https://content.gallup.com/origin/gallupinc/GallupSpaces/Production/Cms/CSFCMSEN/4jwkequnrueuc3zsuky8jw.jpg"})`,
            }}
            className="shadow-black shadow-lg rounded-full group container flex justify-center items-center mx-auto content-div duration-500 hover:scale-110"
          >
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="font-bold text-white tracking-wider uppercase">
                UI Insparation
              </span>
              <div className="text-center pt-6">
                <a href="/">
                  <button className="bg-slate-500 rounded-full px-6 py-2 hover:scale-110 duration-500 opacity-70 text-teal-400 text-center">
                    Wireframes
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
