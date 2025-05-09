import ModalService from "@/component/service/ModalService";
import { FaLaptopCode } from "react-icons/fa";



const Service = [
  {
    id: 1,
    icon: <FaLaptopCode />,
    title: 'MREN Development',
    description: 'A MERN Stack Developer is a full-stack web developer who can develop both the frontend and backend of a website or web application.',
    description2:"Looking for an experienced MERN Stack Developer proficient in Reactjs, Next js, Node js, and Express js?Meet SB Sakib , your dedicated MERN Stack Web Developer. With extensive 2+ years of expertise in the MERN STACK Development, I'll supports you with MERN STACK web apps, project enhancements, or expert guidance as a MERN Stack Developer.",
    // what i can do
    can1:'Crafting and beautifying web app designs.'  ,
    can2:'Coding projects using the MERN Stack.'  ,
    can3:'Client-based revisions.'  ,
    can4:'Understanding client requirements.' ,
    can5:'Deploying projects live.' , 
    can6:' Post-implementation support.'  ,
    // my service 
    myservice1:'Scalable and better performance MERN Website',
    myservice2:'Fully Responsive customized website design',
    myservice3:'Pixel-perfect conversion from PSD/Figma to HTML, ReactJS, NextJS',
    myservice4:'Front-end development with React/Next.js',
    myservice5:'API Integration and API Development / OpenAI API Integration',
    myservice6:'Optimized back-end with Node/Express.js',
    myservice7:'Secure Database with MongoDB/',

    price: '$3530'
  },
  {
    id: 2,
    icon: <FaLaptopCode />,
    title: 'Web Designer',
    description: 'I design modern and mobile-friendly websites for your business or personal brand. I use HTML5, CSS3, Tailwind CSS, React.js, and next.js.',
    description2:'I have more than 2+ years of experience in PSD **to HTML, and Figma to HTML/file converting** work. I complete these tasks using HTML5, CSS3, Bootstrap 5, tailwindcss, JavaScript,typescript , Rext js, Next js, WordPress, Elementor, and Photoshop. I am highly expert in converting PSD to HTML, XD to HTML, Sketch to HTML, PDF to HTML, and any kind of image into HTML. If you think that I am perfect for your job/project or if you need this kind of work, you can feel free to contact with me',
    // what i can do
    can1:'PSD to HTML, CSS, BOOTSTRAP , tailwindcss'  ,
    can2:'Figma to HTML, CSS, BOOTSTRAP , tailwindcss'  ,
    can3:'XD to HTML, CSS, BOOTSTRAP , tailwindcss, rext.js , next.js ,' ,
    can4:'Figma to Rext.js, Next.js ,tailwindcss' ,
    can5:'Figma to Rext.js, Next.js , BOOTSTRAP' , 
    can6:' And any kind of images to HTML'  ,
    // my service 
    myservice1:'High-Quality design',
    myservice2:'Full Rext/Next.js and tailwindcss markup',
    myservice3:'CSS3/tailwindcss style and animation',
    myservice4:'SEO Friendly Code & Responsive Design',
    myservice5:'100% hand-coded design',
    myservice6:'Supper first delivery',
    myservice7:'100% satisfaction guarantee',

    price: '$200'
  },
  {
    id: 3,
    icon: <FaLaptopCode />,
    title: 'Frontend Development',
    description: 'We create dynamic and user-friendly frontends using React and Next.js. We create interactive web pages according to your design..',
    description2:"Are you looking for a professional front-end web developer to help you create a responsive, clean-coded, attractive website with your design. Here I am , I am an experienced front-end developer with 3 years of expertise and a deep understanding of using HTML, CSS, Bootstrap, Tailwind CSS, React JS, and Next JS. I will convert your PSD or Figma design as per your requirement, which will be completely mobile-friendly and functional.I believe in delivering quality code, real-time updates, pixel-perfect design, and optimization of websites.",
    // what i can do
    can1:'PSD to Rext.js, Tailwind, BOOTSTRAP'  ,
    can2:'Figma to Rext.js, Tailwind, BOOTSTRAP'  ,
    can3:'XD to Rext.js, Tailwind, BOOTSTRAP'  ,
    can4:'Figma to Rext.js , Next.js ,tailwindcss' ,
    can5:'Figma to Rext.js / Next.js/ BOOTSTRAP' , 
    can6:' And any kind of images to HTML'  ,
    // my service 
    myservice1:'Full Website Creation from Scratch',
    myservice2:'Pixel Perfect Conversion',
    myservice3:'figma to HTML, CSS',
    myservice4:'Integration E-commerce Functionality',
    myservice5:'CSS Animation Create',
    myservice5:'Fully Responsive',
    myservice6:'Supper first delivery',
    myservice7:'100% satisfaction guarantee',
    price: '$299'
  },
  {
    id: 4,
    icon: <FaLaptopCode />,
    title: ' business website',
    description: 'A business website is an online website where a business or organization displays its products, services, contact information, and branding..',
    description2:"Are You Looking For a Modern Responsive Professional Business Website to showcase your Products or Services in the online World?Then Welcome! As A Seasoned Front End Web Developer With Expertise In JavaScript, TypeScript, React JS, Next JS, Redux, Tailwind CSS, Material UI & More Modern Frontend Frameworks. I'm Here To Bring Your Web Development Ideas To Real Life..",
    // what i can do
    can1:'PSD to Rext.js, Tailwind, BOOTSTRAP'  ,
    can2:'Figma to Rext.js, Tailwind, BOOTSTRAP'  ,
    can3:'XD to Rext.js, Tailwind, BOOTSTRAP'  ,
    can4:'Figma to Rext.js , Next.js ,tailwindcss' ,
    can5:'Figma to Rext.js / Next.js/ BOOTSTRAP' , 
    can6:' And any kind of images to HTML'  ,
    // my service 
    myservice1:'I Can Build Any Type Of Business Website, including:',
    myservice2:'Educational (LMS) , E-commerce, Portfolio, Blog, Business, Corporate, Agency, Personal, Non-profit, and more.',
    myservice3:'Site Landing Page Design',
    myservice4:'News websites Entertainment',
    myservice5:'CSS/tailwindcss Animation Create',
    myservice5:'Fully Responsive',
    myservice6:'Supper first delivery',
    myservice7:'100% satisfaction guarantee',
    price: '$299'
  },
  
]

function Services() {
  return (
    <div className=' w-[100%]  2xl:w-screen bg-background 2xl:scale-105 2xl:h-[900px] 2xl:px-30 mb-9'>
      <h2 className='text-[30px] md:text-[40px] text-primarys font-bold'>Services</h2>

   <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-5 justify-items-center mt-7 lg:pl-12">
   {
          Service.map((itme)=>{
            return(
              <div id={itme.id} className=" w-[340px] md:w-[300px] 2xl:w-[500px] h-[315px] md:h-[300px] 2xl:h-[400px] bg-gray-500 rounded-lg flex flex-col  items-center space-y-2 cursor-pointer hover:animate-pulse " key={itme.id}>
        <h4 className=" mt-3 text-[35px] text-primarys"><FaLaptopCode /></h4>
        <h3 className=" text-[25px] font-bold 2xl:text-[40px]">{itme.title}</h3>
        <p className=" px-4 text-white text-[16px] leading-[26px] 2xl:text-[20px] 2xl:mb-[30px]"> {itme.description} </p>
        {/* modalcomponent */}
        <ModalService id={itme.id} title={itme.title} description={itme.description2}  can1={itme.can1} can2={itme.can2} can3={itme.can3} can4={itme.can4} can5={itme.can5} can6={itme.can6} myservice1={itme.myservice1}  myservice2={itme.myservice2}  myservice3={itme.myservice3}  myservice4={itme.myservice4}  myservice5={itme.myservice5} myservice6={itme.myservice6} myservice7={itme.myservice7} price={itme.price}/>
         </div>
            )
          })
      }
   </div>
   
    </div>
  )
}

export default Services