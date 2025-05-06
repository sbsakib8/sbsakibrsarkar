
import From from "@/component/contact/From";
import { IoCall } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
function Contact() {
  return (
    <div className=" w-screen md:w-[100%] bg-background  2xl:w-[100%]  2xl:mx-40 2xl:scale-105 mt-10 md:mt-0 ">
      <h2 className=" text-[30px] md:text-[40px] 2xl:text-[80px] text-primarys font-bold text-center md:text-start ">Contact Me</h2>
      <div className=" w-[100%] flex flex-col items-center ">
        <div className="w-[100%] h-full flex flex-col items-center mt-5 2xl:mt-20">
          <h4 className=" text-primarys text-[26px] 2xl:text-[89px]">Have you any Qestions ?</h4>
          <p className=" text-[18px] 2xl:text-[40px]">I'm At your Service</p>
        </div>

        {/* media main div */}
        <div className="flex flex-col lg:flex-row  items-center gap-10 lg:gap-26 pl-10 mt-10 lg:mt-16">
          {/* call div */}
          <div>
            <IoCall className="contact_icon text-primarys text-[40px] mx-auto" />
            <h5 className="text-[20px] 2xl:text-4xl font-bold text-center">Call Us On</h5>
            <p className="2xl:text-[20px] ">Phone: +971 55 555 5555</p>
          </div>
          {/* location div */}
          <div>
            <IoLocationSharp className="contact_icon text-primarys text-[40px] mx-auto" />
            <h5 className="text-[20px] 2xl:text-4xl  font-bold text-center">Office</h5>
            <p className="2xl:text-[20px] ">1700 Street, Gazipur, Joydebpur</p>
          </div>
          {/* email div */}
          <div>
            <MdEmail className="contact_icon text-primarys text-[40px] mx-auto" />
            <h5 className="text-[20px] 2xl:text-4xl  font-bold text-center">Email</h5>
            <p className="2xl:text-[20px] ">sbsakibsarkar8@gmail.com</p>
            <p className="2xl:text-[20px] ">sakibhossain7397@gmail.com</p>
          </div>
          {/* website div */}
          <div>
            <TbWorld className="contact_icon text-primarys text-[40px] mx-auto" />
            <h5 className="text-[20px] 2xl:text-4xl  font-bold text-center">WebSite</h5>
            <p className="2xl:text-[20px] ">www.sbsakib.com</p>
          </div>

        </div>

        <div className="w-full h-full flex flex-col items-center my-10 lg:my-26">
          <h4 className=" text-primarys text-[26px]  2xl:text-[89px]">SEND ME AN EMAIL</h4>
          <p className=" text-[16px] 2xl:text-[40px]">I'M VERY RESPONSIVE TO MESSAGES</p>
        </div>

      </div>
{/* from div */}
      <div className=" w-full h-full flex flex-col items-center mb-10 lg:mb-26">
 <From/>
      </div>


    </div>
  )
}

export default Contact