import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log("Sending email with data: ", formData);
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_TEMPLATE_ID ?? "",
        formData,
        process.env.NEXT_PUBLIC_PUBLIC_KEY ?? ""
      );

      console.log("Success sending email");
      toast.success("Message sent successfully");
      setLoading(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        message: "",
      });
    } catch (e) {
      console.log("Error sending email: ", e);
      setLoading(false);
    }
  };

  return (
    <div
      id="contact"
      className="bg-[#323946] py-4 w-[90%] lg:w-[80%] mx-auto flex justify-center flex-col px-8"
    >
      <h1 className="text-center text-white text-[24px] font-semibold font-poppins mb-4">
        Contact <span className="text-[#0ef]">Me!</span>
      </h1>

      <form
        onSubmit={handleSubmit}
        className="w-full  gap-2 flex-wrap mx-auto flex justify-center items-center"
      >
        <div className="w-full lg:w-1/3">
          <input
            className="w-full bg-black px-2 py-2 rounded-md text-[13px] font-semibold font-poppins outline-none text-white"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-full lg:w-1/3">
          <input
            className="w-full bg-black px-2 py-2 rounded-md text-[13px] font-semibold font-poppins outline-none text-white"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-full lg:w-1/3">
          <input
            className="w-full bg-black px-2 py-2 rounded-md text-[13px] font-semibold font-poppins outline-none text-white"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-full lg:w-1/3">
          <input
            className="w-full bg-black px-2 py-2 rounded-md text-[13px] font-semibold font-poppins outline-none text-white"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-full lg:w-[67%]">
          <textarea
            placeholder="Message Me"
            name="message"
            className="w-full h-[200px] bg-black px-2 py-2 rounded-md text-[13px] font-semibold font-poppins outline-none resize-none text-white"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="w-full justify-center flex">
          {" "}
          <button
            className={`bg-black text-white px-6 py-1 font-semibold font-poppins hover:bg-[#323946] rounded-md ${
              loading ? "opacity-50" : ""
            }`}
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
