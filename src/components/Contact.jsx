const Contact = () => {
  return (
    <div
      name="contact"
      className="contact w-full h-screen flex justify-center items-center p-4 text-gray-300"
    >
      <form action="" className="flex flex-col max-w-[500px] w-full space-y-4">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-teal-600">
            Contact
          </p>
          <p className="py-4">Please, feel free to touch with me!</p>
        </div>
        <input
          placeholder="Name"
          type="text"
          className="rounded-full bg-gray-700 focus:border-blue-500 focus:bg-gray-800 focus:outline-none px-4 py-2"
        />
        <input
          placeholder="Email"
          type="text"
          className="rounded-full bg-gray-700 focus:border-blue-500 focus:bg-gray-800 focus:outline-none px-4 py-2"
        />
        <textarea
          name=""
          placeholder="Message"
          id=""
          rows="10"
          className=" resize-none h-44 rounded-3xl  focus:border-blue-500 focus:bg-gray-800 focus:outline-none  bg-slate-700 px-4 py-2"
        ></textarea>
        <button className="rounded-full bg-gray-700 border-gray-200 border-2 px-4 py-3 flex justify-center items-center mx-auto hover:bg-teal-900 text-gray-300 hover:scale-110 duration-500 hover:border-teal-600">
          Contact me
        </button>
      </form>
    </div>
  );
};

export default Contact;
