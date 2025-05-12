"use client"
import ModalProject from "@/component/portfolio/ModalProject"



const project = [
  {
    id: 1,
    title: 'E-commerce website',
    description: 'I create a modern and user-friendly e-commerce website with full features, where customers can easily browse products, order, and make payments.',
    description2:"An e-commerce website is a website where products or services are bought and sold online. It is a virtual store or marketplace where customers can place orders from the comfort of their homes and sellers can sell their products online.",
    image: 'protfolio/e-commerce.png',
    link: 'https://binkeyit-full-stack-ydrn.vercel.app/',
    repolink:"https://github.com/sbsakib8/Blinklt-ecommerce",
    technologies: "React-js + Tailwindcss",
    // why choose me ? 
    whychooseme1:'High-Quality design',
    whychooseme2:'24/7 Customer Services',
    whychooseme3:'Unlimited Revisions',
    whychooseme4:'45 days of Free Support',
    whychooseme5:'Integration E-commerce Functionality / SEO optimization',
    
  },
  {
    id: 2,
    title: 'burger website ',
    description: 'I create a modern, attractive, and mobile-friendly burger or fast food website — one that easy for customers an helps increase business sales.',
    description2:"To create a stylish and user-friendly food website that will help customers order easily and increase business sales..",
    image: 'protfolio/burger.png',
    link: 'https://sbsakib8.github.io/sb-burger-website/',
    repolink:"https://github.com/sbsakib8/sb-burger-website",
    technologies: "html + css + javascript + Tailwindcss",
    // why choose me ? 
    whychooseme1:'High-Quality design',
    whychooseme2:'Full HTML5 and tailwindcss markup',
    whychooseme3:'CSS3 style and animation',
    whychooseme4:'fully responsive',
    whychooseme5:'45 days of Free Support',
  },
  {
    id: 3,
    title: 'React.js many projects',
    description: 'React.js is a popular JavaScript library that allows you to create modern, dynamic, and fast-loading web applications. I have created a variety of projects using React that are user-friendly and of professional quality.',
    description2:"Building user-friendly and performance-optimized web apps with React, which will improve client and user experience. React projects I have done:1. Portfolio website 2. E-commerce website (Front-End) 3. Burger ordering website  4. Blog app.  5. Many hotel websites and business websites .... check my github for more.",
    image: 'protfolio/Rextjs.png',
    link: 'https://github.com/sbsakib8',
    repolink:"https://github.com/sbsakib8",
    technologies: "React-js + Next-js + Tailwindcss",
    // why choose me ? 
    whychooseme1:'High-Quality design',
    whychooseme2:'Full HTML5 and Bootstrap5 markup',
    whychooseme3:'CSS3 style and animation',
    whychooseme4:'SEO optimization',
    whychooseme5:'45 days of Free Support',
  },
  {
    id: 4,
    title: 'Project Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel dapibus justo, et ullamcorper metus.',
    description2:"Integrated a custom API hosted on GitHub using JSON Server (My JSON Server) to fetch product data.Integrated a custom API hosted on GitHub using JSON Server (My JSON Server) to fetch product data.Integrated a custom API hosted on GitHub using JSON Server (My JSON Server) to fetch product data.",
    image: 'mypic/undraw_hello_ccwj.png',
    link: 'https://www.example.com',
    repolink:"http://example.com",
    technologies: "React-js + Next-js + Tailwindcss",
    // why choose me ? 
    whychooseme1:'High-Quality design',
    whychooseme2:'Full HTML5 and Bootstrap5 markup',
    whychooseme3:'CSS3 style and animation',
    whychooseme4:'SEO optimization',
    whychooseme5:'SEO optimization',
  },
]


function Portfolio() {
  return (
    <div className="w-[100%] 2xl:w-screen 2xl:scale-105 2xl:mx-40 bg-background ">
      <h2 className="text-[30px] md:text-[40px] text-primarys font-bold 2xl:text-8xl ">Portfolio</h2>
     <div className="2xl:w-[90%] 2xl:px-[20px] 2xl:scale-105 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:gap-10 2xl:justify-items-center gap-3 mt-5 2xl:mt-20">
      {
        project.map((itme)=>{
           return(
            <div className="card 2xl:w-[88%] bg-base-100 w-96  shadow-sm" key={itme.id}>
            <figure>
              <img
                src={itme.image}
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {itme.title}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>{itme.description}</p>
              <div className="card-actions justify-end">
                <div >
                  <ModalProject className="badge badge-outline cursor-pointer border-1 border-white"  id={itme.id} title={itme.title} img={itme.image} description={itme.description2} technologies={itme.technologies} repolink={itme.repolink} weblink={itme.link} whychooseme1={itme.whychooseme1} whychooseme2={itme.whychooseme2} whychooseme3={itme.whychooseme3} whychooseme4={itme.whychooseme4} whychooseme5={itme.whychooseme5}/>
                </div>
                <div className="badge badge-outline cursor-pointer py-4"> <a href={itme.link} 	target="_blank">project link</a> </div>
              </div>
            </div>
          </div>
           )
        })
      }
     </div>
    </div>
  )
}

export default Portfolio