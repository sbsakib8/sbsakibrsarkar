import AboutTyping from "@/component/about/AboutTyping"
import MediaAndButton from "@/component/about/MediaAndButton"

function About() {

  return (
    <div className=" w-full h-[100%] flex flex-col md:flex-row 2xl:my-15">
       <div className="text-center md:text-start space-y-3 md:w-[50%] ">
      <h1 className=" text-[30px] md:text-[40px] text-primarys font-bold 2xl:text-7xl">About me</h1>

      <h3 className=" font-bold text-[25px] md:text-[28px] leading-[30px] 2xl:text-5xl 2xl:my-[40px] ">I am SB Sakib Sarkar
      <AboutTyping/>
      </h3>
      <p className="text-[21px] text-wrap md:pr-6 lg:mt-18 2xl:text-[45px]">I am a professional web developer.

I build responsive and performance-oriented websites and applications, specifically using the MERN stack MongoDB, Express.js, React.js, Node.js.

I can handle web design, API integration, backend development, and full-stack projects.

I strive to ensure quality, clean code, and time management in every project. I always love learning new technologies and try to write clean code. As a developer, I ensure creative design and effective functionality..</p>

      <MediaAndButton/>
     </div>

     <div className="md:w-[50%] flex flex-col justify-center items-center md:-mt-5">
           <img className=" w-[450px] 2xl:w-[50%] object-cover" src='mypic/about.png'></img>
      </div>

    </div>
    
  )
}

export default About