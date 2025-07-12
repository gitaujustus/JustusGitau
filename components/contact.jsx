
// 'use client'
// import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
// import { RiMapPin2Line } from "react-icons/ri";
// import { useState } from "react";
// // import { ToastContainer, toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// import toast, {Toaster} from "react-hot-toast";

// const Contacts = () => {
//   const [isloading, setisLoading]=useState(false);
//   // const [messageReceived, setMessageReceived]=useState(false);
//   const [formMessages, setFormMessages] = useState({
//     name: "",
//     email: "",
//     message: "",
//     source:"Message from Portifolio Website ",
//   });
//   const handleInputChange = (event) => {
//     setFormMessages({
//       ...formMessages,
//       [event.target.name]: event.target.value,
//     });
//   };
  


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setisLoading(true)
//     try {
//       const res = await fetch("https://nodemailer-server-rouge.vercel.app/mails", {
//         method: "POST",
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify(formMessages),
//       });
//       if (res.ok) {
//       await res.json(); // parse response as JSON
//       // console.log(responseJson);
//       setisLoading(false);
//       setFormMessages({ name: "", email: "", message: "", source:"Message from Portifolio Website " });
//         toast.success("Message Sent Successfully!", {
//           position: 'top-center',
//           autoClose: 1000,
//         });

//       } else {
//         throw new Error("Failed to add item");
//       }
//     } catch (error) {
//       // console.log(error);
//       setisLoading(false);
//       toast.error("An Error Occured !", {
//         position: 'top-center',
//         duration: 1000,
//       });
//     }
//   }


//   return (
//     <div id="contacts" className="flex  flex-col items-center justify-center py-[100px]  px-[18px]">
//       <h2 className="text-[17px] md:text-xl xl:text-2xl font-bold mb-4 text-white">GET IN TOUCH WITH ME</h2>
//       <div className="bg-[#293950]  rounded-lg shadow-lg px-3 py-4 md:p-6 w-full sm:w-3/4 md:w-2/3 xl:w-1/2">
//         <div className="flex items-center mb-4 text-[14px] md:text-[16px] lg:text-[18px]">
//           <AiOutlineMail className="text-gray-400 text-xl mr-2" />
//           <span className="font-semibold">Email:</span>
//           <a href="mailto:jgathiru02@gmail.com" className="text-blue-200 font-bold ml-2 underline">
//           info@gitaujustus
//           </a>
//         </div>
//         <div className="flex items-center mb-4 text-[14px] md:text-[16px] lg:text-[18px]">
//           <AiOutlinePhone className="text-gray-400 text-xl mr-2" />
//           <span className="font-semibold">Phone:</span>
//           <span className="ml-2">+254-729-144-533</span>
//         </div>
//         <div className="flex items-center mb-4 text-[14px] md:text-[16px] lg:text-[18px]">
//           <RiMapPin2Line className="text-gray-400 text-xl mr-2" />
//           <span className="font-semibold">Address:</span>
//           <span className="ml-2">06500, Nairobi, Kenya</span>
//         </div>
//         <form onSubmit={handleSubmit} className="text-[14px] md:text-[16px] lg:text-[18px]">
//           <div className="mb-4 flex flex-col gap-[10px] md:gap-[20px]">
//             <label htmlFor="name" className="font-semibold mb-1">
//               Name:
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               placeholder="Username"
//               className="border border-gray-300 text-gray-900 bg-gray-300 rounded-md px-3 py-2 w-full"
//               value={formMessages.name}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className="mb-4 flex flex-col gap-[10px] md:gap-[20px]">
//             <label htmlFor="email" className="font-semibold mb-1">
//               Email:
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Leave an email i can reply to..."
//               className="border border-gray-300 text-gray-900 bg-gray-300 rounded-md px-3 py-2 w-full"
//               value={formMessages.email}
//                 onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className="mb-4 flex flex-col gap-[10px] md:gap-[20px]">
//             <label htmlFor="message" className="font-semibold mb-1">
//               Message:
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               placeholder="Hi, Justus..."
//               rows="4"
//               className="border border-gray-300 text-gray-900 bg-gray-300 rounded-md px-3 py-2 w-full"
//               value={formMessages.message}
//               onChange={handleInputChange}
//               required
//             ></textarea>
//           </div>
//           <button
//           type="submit"
//           className="bg-blue-300 w-full text-black py-2 px-4 rounded-md hover:bg-blue-400 mt-10"
//           disabled={isloading}
//           style={{ cursor: isloading ? 'not-allowed' : 'pointer' }}
//       >
//           {isloading ? 'Loading...' : 'Submit'}
//       </button>

//         </form>
//       </div>
//       <Toaster/>
//     </div>
//   );
// };

// export default Contacts;


'use client'
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { RiMapPin2Line } from "react-icons/ri";
import { useState } from "react";
import toast, {Toaster} from "react-hot-toast";
import emailjs from 'emailjs-com';

const Contacts = () => {
  const [isloading, setisLoading]=useState(false);
  const [formMessages, setFormMessages] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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
    const serviceId=process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId=process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userId=process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
    const templateParams = {
      name: formMessages.name,
      email: formMessages.email,
      subject: formMessages.subject,
      message: formMessages.message,
    };

    try {
      // const res = await fetch("https://nodemailer-server-rouge.vercel.app/mails", {
      //   method: "POST",
      //   headers: { "content-type": "application/json" },
      //   body: JSON.stringify(formMessages),
      // });
      await emailjs.send(serviceId, templateId, templateParams, userId).then((res) => {
        setFormMessages({ name: "", email: "", subject: "", message: ""});
        toast.success("Message Sent Successfully!", {
          position: 'top-center',
          autoClose: 1000,
        });
      })
    } catch (error) {
      setisLoading(false);
      console.log(error);
      toast.error("An Error Occured while sending your message !", {
        position: 'top-center',
        duration: 1000,
      });
    }finally{
      setisLoading(false);
    }
  }

  return (
    <div 
      id="contacts" 
      className="relative min-h-screen flex flex-col items-center justify-center py-[100px] px-[18px]"
      style={{
        backgroundImage: `url('/photos/engineer-setup.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#1F2937] bg-opacity-60 backdrop-blur-[2px]"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full">
        <h2 className="text-[17px] md:text-xl xl:text-2xl font-bold mb-8 text-white text-center drop-shadow-lg">
          GET IN TOUCH WITH ME
        </h2>
        
        {/* Floating form container */}
        <div className="bg-[#293950] bg-opacity-95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-600 border-opacity-30 px-4 py-6 md:p-8 w-full sm:w-3/4 md:w-2/3 xl:w-1/2 2xl:w-2/5 transform  transition-all duration-300 ease-in-out">
          {/* Contact Information */}
          <div className="mb-8 space-y-4">
            <div className="flex items-center text-[14px] md:text-[16px] lg:text-[18px] text-white">
              <AiOutlineMail className="text-blue-400 text-xl mr-3 flex-shrink-0" />
              <span className="font-semibold">Email:</span>
              <a href="mailto:jgathiru02@gmail.com" className="text-blue-300 font-bold ml-2 underline hover:text-blue-200 transition-colors">
                info@gitaujustus
              </a>
            </div>
            <div className="flex items-center text-[14px] md:text-[16px] lg:text-[18px] text-white">
              <AiOutlinePhone className="text-green-400 text-xl mr-3 flex-shrink-0" />
              <span className="font-semibold">Phone:</span>
              <span className="ml-2 text-gray-200">+254-729-144-533</span>
            </div>
            <div className="flex items-center text-[14px] md:text-[16px] lg:text-[18px] text-white">
              <RiMapPin2Line className="text-red-400 text-xl mr-3 flex-shrink-0" />
              <span className="font-semibold">Address:</span>
              <span className="ml-2 text-gray-200">06500, Nairobi, Kenya</span>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-600 border-opacity-50 mb-8"></div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="text-[14px] md:text-[16px] lg:text-[18px] space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="font-semibold text-white block">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your full name"
                className="border border-gray-500 text-gray-900 bg-gray-100 bg-opacity-90 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                value={formMessages.name}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="font-semibold text-white block">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                className="border border-gray-500 text-gray-900 bg-gray-100 bg-opacity-90 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                value={formMessages.email}
                onChange={handleInputChange}
                required
              />
            </div>
            {/* subject */}
              <div className="space-y-2">
              <label htmlFor="subject" className="font-semibold text-white block">
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject of your message"
                className="border border-gray-500 text-gray-900 bg-gray-100 bg-opacity-90 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                value={formMessages.subject}
                onChange={handleInputChange}
                required
              />
              </div>

            
            <div className="space-y-2">
              <label htmlFor="message" className="font-semibold text-white block">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Hi Justus, I'd like to discuss..."
                rows="5"
                className="border border-gray-500 text-gray-900 bg-gray-100 bg-opacity-90 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 resize-none"
                value={formMessages.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#2A97A5] to-[#4FC3F7] text-white font-semibold py-3 px-6 rounded-lg hover:from-[#4FC3F7] hover:to-[#2A97A5] transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              disabled={isloading}
            >
              {isloading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Sending...
                </div>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
      
      <Toaster/>
    </div>
  );
};

export default Contacts;