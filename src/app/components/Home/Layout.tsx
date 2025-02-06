import React from 'react'
import image1 from "../Images/picture1.png";
import image2 from "../Images/picture2.png";
import image3 from "../Images/picture3.png";
import image4 from "../Images/picture4.png";
import image5 from "../Images/picture5.png";
import logo1 from "../Images/logo1.png";
import logo2 from "../Images/logo2.png";
import logo3 from "../Images/logo3.png";
import logo4 from "../Images/logo4.png";
import logo5 from "../Images/logo5.png";
import Link from 'next/link';

// import { redirect } from 'next/navigation'


const Layout1 = () => {
   
  return (
    <div className="sm:w-[600px] sm:h-[750px] sm:flex sm:flex-col sm:gap-[12px] sm:justify-center  sm:py-[50px] sm:ml-[80px] md:mt-[380px] md:ml-[-10px] md:gap-[14px] md:w-screen md:h-[850px] md:flex md:flex-row lg:mt-[180px] xl:mt-[180px]">

         
        <div className="md:block md:w-[350px] md:h-[600px] md:bg-[#dcdcdc]  md:relative md:rounded-lg sm:w-[250px] sm:h-[400px] sm:bg-[#dcdcdc] sm:relative sm:rounded-lg sm:hidden xs:hidden"  >

            <img src={image1.src} alt=""  className="md:block md:w-[230px] md:h-[550px] md:object-contain md:absolute md:top-[120px] md:left-[60px] sm:w-[230px] sm:h-[550px] sm:hidden sm:w-0 sm:h-0 xs:hidden" />
            

        </div>
        <div>
            <div className='md:w-[398px] md:h-[600px] md:flex md:flex-col md:gap-[16px]   md:ml-[0px] sm:w-[300px] sm:h-[600px] sm:flex sm:flex-col sm:gap-[16px] sm :ml-[50px]  xs:w-[300px] xs:h-[600px] xs:flex xs:flex-col xs:gap-[12px] xs:ml-[-40px]  '>
                <div className='md:w-[398px] md:h-[120px] md:bg-[#dcdcdc] md:relative md:rounded-lg sm:w-[300px] sm:h-[120px] sm:bg-[#dcdcdc]  sm:relative sm:rounded-lg ] xs:w-[300px] xs:h-[110px] xs:bg-[#dcdcdc] xs:relative'>
                    <img src={image3.src} alt="" className="md:w-[300px] md:h-[120px]  md:object-contain md:absolute  md:left-[50px] sm:w-[250px] sm:h-[120px]  sm:object-contain sm:absolute sm:left-[40px] sm:z-2  xs:w-[250px]  xs:h-[110px] xs:object-contain xs:absolute xs:left-[20px]" />

                </div>
                <div className='w-[398px] h-[480px] bg-[#ffffff]  flex flex-col  md'>
                   <div className='md:poppins-light md:w-[396px] md:h-[91px] md:text-6xl font-[500] md:text-center md:ml-[0px] sm:poppins-light sm:w-[396px] sm:h-[91px] sm:text-6xl sm:text-center  xs:poppins-light xs:w-[300px] xs:h-[80px] xs:text-4xl xs:ml-[-40px]  '>ULTIMATE</div>
                    <div className='w-[390px] h-[120px] poppins-light1 md:text-8xl text-white outline-4 text-center md:ml-[40px] xs:w-[300px] xs:h-[120px] sm:text-8xl xs:ml-[-10px]   '>SALE</div>
                    <div className='md:w-[190px] md:h-[30px] poppins-thin text-[20px] md:text-center md:ml-[100px]  xs:w-[190px] xs:h-[30px] xs:text-[20px]  xs:ml-[60px] '>NEW COLLECTION</div>
                    <div className='md:w-[207px] md:h-[50px] md:text-center '>
                         {/* <button
                            type="button"
                            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none  focus:ring-4 focus:ring-gray-300 poppins-thin1 font-medium rounded-lg text-xs text-white   w-[207px] h-[45px] py-4  md:ml-[110px] mt-[10px] dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 xs:ml-[60px] xs:w-[170px]"
                            onClick={() => redirect('/shopNow')}
                            >
                        Shop Now
                        </button> */}
                        <Link href="/shopNow" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none  focus:ring-4 focus:ring-gray-300 poppins-thin1 font-medium rounded-lg text-xs text-white   w-[207px] h-[45px] py-4  md:ml-[110px] mt-[10px] dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 xs:ml-[60px] xs:w-[170px] sm:text-center block">
                        Shop Now
                        </Link>
                    </div>
                    <div className ='md:w-[390px] md:h-[150px] md:relative xs:w-[390px] xs:h-[150px] xs:relative'>
                        <img src={image4.src} alt="" className="  md:w-[350px] md:h-[150px] md:shrink-0 md:object-contain md:absolute md:left-[30px] md:top-[40px]  xs:w-[270px] xs:h-[150px] xs:object-contain xs:absolute xs:left-[20px] xs:top-[30px] " />
                    </div>
                </div>
                <div>
            
                  

                </div>

            </div>
        </div>
        <div className="  md:block md:w-[350px] md:h-[600px] md:bg-[#dcdcdc] md:relative md:rounded-lg sm:hidden xs:hidden">
            <img src={image2.src} alt=""  className="md:block md:w-[270px] md:h-[600px] md:object-contain md:absolute md:top-[100px] md:left-[70px] sm:hidden xs:hidden" />
        </div>
        <div>

        </div>
        <div className="w-[50px] h-[50px] bg-black rounded-lg text-center absolute top-[750px] left-[1220px] flex justify-center items-center md">
                    <img src={image5.src} alt="" className="w-[22px] h-[21px]"></img>

        </div>
        <div className=" md:w-full md:h-[150px] md:bg-white md:absolute md:top-[570px] md:left-[0px] md:flex md:justify-center md:items-center md:px-2 md:bg-white sm:w-fit sm:h-[50px] sm:absolute sm:top-[370px]  sm:mt-[320px] sm:left-[5px] sm:flex sm:justify-center sm:items-center  sm:gap-[12px] sm:bg-gray-300 sm:py-2 " >
            <div className="md:w-full md:h-[40px]  md:flex md:justify-between md:items-center sm:w-full sm:h-[40px] sm:flex sm:gap-[12px] animate-scroll-horizontal">
                <img src={logo1.src} alt="" className="md:w-[190px] md: h-[34px]   sm:w-[60px] sm:h-[24px] xs:w-[75px] xs:h-[24px]" />
                <img src={logo2.src} alt="" className="md:w-[190px] md:h-[34px]  sm:w-[60px] sm:h-[24px] "/>
                <img src={logo3.src} alt="" className="md:w-[190px] md:h-[34px]  sm:w-[60px] sm:h-[24px] "/>
                <img src={logo4.src} alt="" className="md:w-[190px] md:h-[34px]  sm:w-[60px] sm:h-[24px] "/>
                <img src={logo5.src} alt="" className="md:w-[190px] md:h-[34px]  sm:w-[60px] sm:h-[24px] "/>
                

            </div>

        </div>

    </div>
  )
}

export default Layout1;

