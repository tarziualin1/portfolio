import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="max-w-[1040px] m-auto px-8 pt-8 pb-16 md:px-32 xl:px-16"
    >
      <h1 className="py-4 text-4xl font-bold text-center text-customBlue mb-10">
        Contact
      </h1>
      <form
        action={`https://getform.io/f/${import.meta.env.VITE_API_KEY}`}
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid md:grid-cols-2 gap-4 w-full pb-2">
          <div className="flex flex-col">
            <label className="py-2 font-medium">Name</label>
            <input
              className="border-2 rounded-lg p-3 border-gray-300"
              type="text"
              name="name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="py-2 font-medium">Phone</label>
            <input
              className="border-2 rounded-lg p-3 border-gray-300"
              type="text"
              name="phone"
            />
          </div>
        </div>
        <div className="flex flex-col pb-2">
          <label className="py-2 font-medium">Email</label>
          <input
            className="border-2 rounded-lg p-3 border-gray-300"
            type="email"
            name="email"
            required
          />
        </div>
        <div className="flex flex-col pb-2">
          <label className="py-2 font-medium">Subject</label>
          <input
            className="border-2 rounded-lg p-3 border-gray-300"
            type="text"
            name="subject"
            required
          />
        </div>
        <div className="flex flex-col pb-2">
          <label className=" py-2 font-medium">Message</label>
          <textarea
            className="border-2 rounded-lg p-3 border-gray-300 h-24 md:h-36"
            name="message"
            rows="10"
            required
          ></textarea>
        </div>
        <button className="bg-gradient-to-br from-gray-600 to-gray-900 text-white w-full mt-4 p-4 rounded-xl  hover:shadow-xl transition-shadow duration-300">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
