

const education =[
  {
    id:1,
    title:" Computer Science",
    school:"University of Ghana",
    date:"2018 - 2022",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel dapibus justo, et ullamcorper metus. Nullam varius, mauris ac dignissim feugiat, justo lectus sagittis velit."
  },
  {
    id:2,
    title:" Computer Science",
    school:"University of Ghana",
    date:"2018 - 2022",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel dapibus justo, et ullamcorper metus. Nullam varius, mauris ac dignissim feugiat, justo lectus sagittis velit."
  },
  {
    id:3,
    title:"Computer Science",
    school:"University of Ghana",
    date:"2018 - 2022",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel dapibus justo, et ullamcorper metus. Nullam varius, mauris ac dignissim feugiat, justo lectus sagittis velit."
  },

   
]
function Education() {
  return (
    <div className=" py-3 px-6 lg:px-7">

      <div className=" flex flex-col justify-center  items-center" >
      <h3 className='resume_title '> My Education</h3>
      <p className="resume_paragraph">
        dolor sit amet, consectetur adipiscing elit. Sed vel dapibus justo, et ullamcorper metus. Nullam varius, mauris ac dignissim feugiat, justo lectus sagittis velit.
      </p>
      </div>
      {/*  */}
      <div className=' flex gap-3 flex-wrap mt-6 2xl:mt-13 2xl:gap-10 '>

      {
          education.map((exp) => (
            <div key={exp.id} className="py-3 2xl:px-7  max-w-[300px] md:max-w-[220px] 2xl:max-w-[500px] 2xl:h-[300px] bg-gray-700 px-3 shadow-lgs cursor-pointer hover:scale-110 transition-all duration-200 ">
              <h4 className="text-lg text-[22px] font-semibold text-primarys 2xl:text-5xl">{exp.title}</h4>
              <p className="text-sm font-light">{exp.company}</p>
              <p className="text-sm text-[11px]  font-light">{exp.date}</p>
              <p className="text-sm text-gray-200 font-light 2xl:text-2xl 2xl:mt-5">{exp.description}</p>
            </div>
          ))
        }

        
      </div>
      
       
        
    </div>
  )
}

export default Education