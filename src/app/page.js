import Contact from './(page)/contact/page';
import Home from './(page)/home/page';
import Services from './(page)/services/page';

export default function page() {
  return (

    <div className=" w-[90%] 2xl:w-[98%]  bg-background flex flex-col items-center justify-center min-h-screen 2xl:space-y-36 ">
       <Home/>
       <Services/>
        <Contact/>
    </div>
    
  );
}
