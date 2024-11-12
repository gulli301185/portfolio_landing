const About = () => {
  return (
    <div name="about" className="w-full h-screen about text-gray-300 px-8">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl border-b-4 border-teal-600 font-bold inline">
              About
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full sm:grid-cols-2 grid gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. {`I'm`} Guldana Aitbaeva. Nice to meet you. Please, take a
              look around.
            </p>
          </div>
          <div>
            <p className="text-xl">
              Guldana Aitbaeva is a front-end developer and self-confessed gamer
              girl. She has a keen, problem-solving mind and a passion for
              building creative and innovative software. If you want to learn
              how to create and implement unique designs, Judit is one to watch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
