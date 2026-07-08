import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_747m6dk",
        "template_ovsgj3h",
        form.current,
        "PH9qKxdEdLiWcpzf6"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-16 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-white">CONTACT</h2>
        <div className="w-30 h-1 bg-purple-500 mx-auto mt-2"></div>
        <p className="text-gray-400 mt-3 text-sm font-semibold">
          I'd love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-5 w-full lg:w-[50%] max-w-md bg-[#0d081f] p-5 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-base font-semibold text-white text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-3">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-2 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 text-sm"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-2 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 text-sm"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-2 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 text-sm"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-2 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 text-sm"
          />

          {/* Send Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-2 text-white text-sm font-semibold rounded-md hover:opacity-90 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;