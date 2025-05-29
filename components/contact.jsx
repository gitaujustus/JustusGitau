
'use client'
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { RiMapPin2Line } from "react-icons/ri";
import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import toast, {Toaster} from "react-hot-toast";

const Contacts = () => {
  const [isloading, setisLoading]=useState(false);
  // const [messageReceived, setMessageReceived]=useState(false);
  const [formMessages, setFormMessages] = useState({
    name: "",
    email: "",
    message: "",
    source:"Message from Portifolio Website ",
  });
  const handleInputChange = (event) => {
    setFormMessages({
      ...formMessages,
      [event.target.name]: event.target.value,
    });
  };
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    setisLoading(true)
    try {
      const res = await fetch("https://nodemailer-server-rouge.vercel.app/mails", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formMessages),
      });
      if (res.ok) {
      await res.json(); // parse response as JSON
      // console.log(responseJson);
      setisLoading(false);
      setFormMessages({ name: "", email: "", message: "", source:"Message from Portifolio Website " });
        toast.success("Message Sent Successfully!", {
          position: 'top-center',
          autoClose: 1000,
        });

      } else {
        throw new Error("Failed to add item");
      }
    } catch (error) {
      // console.log(error);
      setisLoading(false);
      toast.error("An Error Occured !", {
        position: 'top-center',
        duration: 1000,
      });
    }
  }


  return (
    <div id="contacts" className="flex  flex-col items-center justify-center py-[100px]  px-[18px]">
      <h2 className="text-[17px] md:text-xl xl:text-2xl font-bold mb-4 text-white">GET IN TOUCH WITH ME</h2>
      <div className="bg-[#293950]  rounded-lg shadow-lg px-3 py-4 md:p-6 w-full sm:w-3/4 md:w-2/3 xl:w-1/2">
        <div className="flex items-center mb-4 text-[14px] md:text-[16px] lg:text-[18px]">
          <AiOutlineMail className="text-gray-400 text-xl mr-2" />
          <span className="font-semibold">Email:</span>
          <a href="mailto:jgathiru02@gmail.com" className="text-blue-200 font-bold ml-2 underline">
          info@gitaujustus
          </a>
        </div>
        <div className="flex items-center mb-4 text-[14px] md:text-[16px] lg:text-[18px]">
          <AiOutlinePhone className="text-gray-400 text-xl mr-2" />
          <span className="font-semibold">Phone:</span>
          <span className="ml-2">+254-729-144-533</span>
        </div>
        <div className="flex items-center mb-4 text-[14px] md:text-[16px] lg:text-[18px]">
          <RiMapPin2Line className="text-gray-400 text-xl mr-2" />
          <span className="font-semibold">Address:</span>
          <span className="ml-2">06500, Nairobi, Kenya</span>
        </div>
        <form onSubmit={handleSubmit} className="text-[14px] md:text-[16px] lg:text-[18px]">
          <div className="mb-4 flex flex-col gap-[10px] md:gap-[20px]">
            <label htmlFor="name" className="font-semibold mb-1">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Username"
              className="border border-gray-300 text-gray-900 bg-gray-300 rounded-md px-3 py-2 w-full"
              value={formMessages.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4 flex flex-col gap-[10px] md:gap-[20px]">
            <label htmlFor="email" className="font-semibold mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Leave an email i can reply to..."
              className="border border-gray-300 text-gray-900 bg-gray-300 rounded-md px-3 py-2 w-full"
              value={formMessages.email}
                onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4 flex flex-col gap-[10px] md:gap-[20px]">
            <label htmlFor="message" className="font-semibold mb-1">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Hi, Justus..."
              rows="4"
              className="border border-gray-300 text-gray-900 bg-gray-300 rounded-md px-3 py-2 w-full"
              value={formMessages.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <button
          type="submit"
          className="bg-blue-300 w-full text-black py-2 px-4 rounded-md hover:bg-blue-400 mt-10"
          disabled={isloading}
          style={{ cursor: isloading ? 'not-allowed' : 'pointer' }}
      >
          {isloading ? 'Loading...' : 'Submit'}
      </button>

        </form>
      </div>
      <Toaster/>
    </div>
  );
};

export default Contacts;