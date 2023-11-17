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
              className="border border-gray-300 p-3 rounded-none shadow-md"
              type="text"
              name="name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="py-2 font-medium">Phone</label>
            <input
              className="border border-gray-300 p-3 rounded-none shadow-md"
              type="text"
              name="phone"
            />
          </div>
        </div>
        <div className="flex flex-col pb-2">
          <label className="py-2 font-medium">Email</label>
          <input
            className="border border-gray-300 p-3 rounded-none shadow-md"
            type="email"
            name="email"
            required
          />
        </div>
        <div className="flex flex-col pb-2">
          <label className="py-2 font-medium">Subject</label>
          <input
            className="border border-gray-300 p-3 rounded-none shadow-md"
            type="text"
            name="subject"
            required
          />
        </div>
        <div className="flex flex-col pb-2">
          <label className="py-2 font-medium">Message</label>
          <textarea
            className="border border-gray-300 p-3 h-24 md:h-36 rounded-none shadow-md"
            name="message"
            rows="10"
            required
          ></textarea>
        </div>
        <button className="bg-customOlive/90 text-white w-full mt-4 p-4 rounded-xl hover:shadow-xl hover:scale-105 duration-300 shadow-md">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
