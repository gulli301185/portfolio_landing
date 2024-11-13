import HTML from "./../assets/html5-logo-31820.png";
import CSS from "./../assets/html5-logo-31821.png";
import JavaScript from "./../assets/javascript.png";
import ReactLogo from "./../assets/react.svg";
import SASS from "./../assets/sass.png";
import GSAP from "./../assets/greensock-svgrepo-com.svg";
import TAILWIND from "./../assets/tailwind.png";
import GitHub from "./../assets/381376_github_logo_icon.png";

const Skill = () => {
  return (
    <div
      name="skills"
      className="skill  h-full lg:h-screen  w-full text-gray-200 p-20"
    >
      <div className="max-w-[1000px] w-full h-full mx-auto p-4 items-center flex flex-col">
        <div>
          <p className=" text-4xl font-bold border-b-4 inline border-teal-600 ">
            Skills
          </p>
          <p className="py-6   font-bold   text-lg">
            Your design portfolio content should showcase your best work.
            Include an interactive prototype, a micro animation, a website in a
            motion, not just static designs.
          </p>
        </div>
        <div className="w-full text-center grid grid-cols-2 sm:grid-cols-4 gap-4 py-8">
          <div className="hover:scale-150 duration-500 pb-10  ">
            <img className="w-36 mx-auto " src={HTML} alt="html" />
            <p className="py-2">HTML</p>
          </div>
          <div className="hover:scale-150 duration-500 ">
            <img className="w-16 mx-auto" src={CSS} alt="html" />
            <p className="py-2">CSS</p>
          </div>
          <div className="hover:scale-150 duration-500 ">
            <img className="w-20 mx-auto" src={JavaScript} alt="JavaScript" />
            <p className="py-2">JavaScript</p>
          </div>
          <div className="hover:scale-150 duration-500 ">
            <img className="w-20 mx-auto" src={ReactLogo} alt="ReactLogo" />
            <p className="py-3">React</p>
          </div>
          <div className="hover:scale-150 duration-500 ">
            <img
              className="w-20 mx-auto bg-white rounded-xl"
              src={GSAP}
              alt="GSAP"
            />
            <p className="py-2">GSAP</p>
          </div>
          <div className="hover:scale-150 duration-500 ">
            <img className="w-20 mx-auto " src={GitHub} alt="GitHub" />
            <p className="py-2">GitHub</p>
          </div>
          <div className="hover:scale-150 duration-500 ">
            <img className="w-20 mx-auto" src={TAILWIND} alt="TAILWIND" />
            <p className="py-2">Tailwind</p>
          </div>
          <div className="hover:scale-150 duration-500 ">
            <img className="w-20 mx-auto" src={SASS} alt="SASS" />
            <p className="py-2">SASS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
