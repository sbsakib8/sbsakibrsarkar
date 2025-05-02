import Routers from "@/component/Resume/Routers"


function Layout({children}) {
  return (
    <div className=" w-[100%] 2xl:w-screen 2xl:scale-105 h-full flex justify-center items-center">
    <Routers >
      {children}
     </Routers>
    </div>
  )
}

export default Layout