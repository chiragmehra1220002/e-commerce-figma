import React from 'react'
import arrow1 from "../Images/arrow2.png";
import arrow2 from "../Images/arrow1.png";
import dress1 from "../Images/dress1.png";
import dress2 from "../Images/dress2.png";
import dress3 from "../Images/dress3.png";
const Banner = () => {
  return (
    <>
    <div className='md:top-[1300px] md:w-full md:h-[780px] md:bg-[#FCFCFC] md:flex md:box-content md:m-0 md:p-0 md:mr-[0px] sm:top-[900px] sm:w-full sm:h-[780px] sm:bg-[#FCFCFC] sm:flex sm:box-content sm:m-0 sm:p-0 xs:mr-[20px]' >
        <div className='md:w-[444px] md:h-[500px] flex flex-col md:ml-[80px] sm:w-[400px] sm:h-[450px] xs:w-[350px] xs:h-[400px] xs:ml[20px]  '>
            <div>
                <div className='md:w-[444px] md:h-[140px] md:flex md:flex-col md:left-[150px] md:gap-[16px] sm:w-[400px] sm:h-[100px] sm:flex sm:flex-col sm:left-[100px] sm:gap-[12px] xs:w-[300px] sm:h-[100px] xs:flex sm:flex-col xs:left-[50px] sm:gap-[8px]'>
                    <div className='md:w-[444px] md: h-[56px] md:text-[45px] volkhov-regular md:ml-[50px] md:mt-[50px] md:font-[400] sm:w-[400px] h-[56px] sm:text-[30px] xs:w-[300px] xs:h-[56px] sm:text-[20px] xs:ml-[20px] xs:text-[20px]'>
                        Deals Of The Month
                    </div> 
                    <div className="md:w-[420px] md:h-[75px] md:poppins-thin md:text-[16px] md:text-gray-500 md:ml-[50px] md:flex md:flex-wrap sm:w-[400px] sm:h-[75px] sm:poppins-thin sm:text-[16px] sm:ml-[40px] xs:w-[300px] xs:h-[75px] xs:poppins-thin xs:text-[9px] xs:left-[-10px] xs:flex xs:flex-wrap">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin 
                        
                    </div>
                    <button type="button" className="text-white absolute md:left-[40px] md:top-[1230px] bg-gray-800 hover:bg-gray-900 focus:outline-none  focus:ring-4 focus:ring-gray-300 poppins-thin1 font-medium rounded-lg text-xs text-white   w-[207px] h-[45px] py-4  ml-[90px] mt-[10px]  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 xs:top-[870px] xs:left-[-45px]">Buy Now</button>


                </div>

                <div className="w-[361px] h-[42px] poppins-regular ml-[40px] mt-[150px] text-[28px]">
                    Hurry,Before It's Too Late!

                </div>
                <div className="w-[374px] h-[120px] ml-[10px] flex gap-[6px] justify-center mt-[20px]">
                    <div className="w-[70px] h-[115px]  flex flex-col gap-[4px]">
                        <div className="w-[50px] h-[50px] bg-white text-[25px] digital rounded-lg drop-shadow-lg text-center flex justify-center align-center">02</div>
                        <div className='poppins-light text-[16px] ml-[10px] '>Days</div>
                    </div>
                    <div className="w-[70px] h-[115px]  flex flex-col gap-[4px]">
                        <div className="w-[50px] h-[50px] bg-white text-[25px] digital rounded-lg drop-shadow-lg text-center flex justify-center align-center">06</div>
                        <div className='poppins-light text-[16px] ml-[10px]'>Hr</div>
                    </div>
                    <div className="w-[70px] h-[115px] flex flex-col gap-[4px]">
                        <div className="w-[50px] h-[50px] bg-white  text-[25px] digital rounded-lg drop-shadow-lg text-center flex justify-center align-center">05</div>
                        <div className='poppins-light text-[16px] ml-[10px] '>Mins</div>
                    </div>
                    <div className="w-[70px] h-[115px] flex flex-col gap-[4px]">
                        <div className="w-[50px] h-[50px] bg-white  text-[25px] digital rounded-lg drop-shadow-lg text-center flex justify-center align-center">10</div>
                        <div className='poppins-light text-[16px] ml-[10px] '>Sec</div>
                    </div>
                   

                </div>
                
                 
                
                
            </div>
            <div></div>
        </div>
        <div className="w-[112px] h-[48px] mt-[430px] ml-[10px] xs:hidden sm:hidden md:block ">
                        <button className="w-[40px] h-[40px]  rounded-xl">
                            <img src={arrow1.src} alt="" className="object contain w-[40px] h-[40px] bg-[#FFFFFF]"/>
                        </button>
                        <button className="w-[40px] h-[40px]  rounded-xl">
                            <img src={arrow2.src} alt="" className='object contain w-[40px] h-[40px] bg-[#FFFFFF]' />
                        </button>
                        

        </div>
        <div className="md:w-7xl md:h-[582px]  md:flex mt-[30px] md:gap-[16px] xs:hidden sm:hidden md:block">
            <div className=' h-[450px]'>
                <img src={dress1.src} alt="" className='w-full h-[450px] object-cover' />
                <div className="w-[150px] h-[100px]  bg-white absolute top-[1390px] left-[650px] flex flex-col justify-center ">
                    <div className="w-[90px] h-[30px] poppins-regular text-[12px] text-center ml-[20px]">01 Spring Sale</div>
                    <div className="w-[90px] h-[30px] poppins-regular text-[20px] text-center ml-[20px]">30% OFF</div>

                </div>
            </div>
           
            <img src={dress2.src} alt="" className='w-[250px] h-[400px]' />
            <img src={dress3.src} alt="" className='w-[250px] h-[400px]' />

        </div>
    
    
    </div>
       <div className="xs:w-5xl xs:h-[582px]  xs:flex mt-[-180px] xs:gap-[0px] md:hidden position-relative ">
       <div className=' h-[450px]'>
           <img src={dress1.src} alt="" className='w-[210px] h-[400px] object-cover roundex-lg' />
           <div className="w-[80px] h-[80px]  bg-white absolute top-[1570px] left-[65px] flex flex-col justify-center items-center gap-[5px] ">
               <div className="w-[20px] h-[20px] poppins-regular text-[7px] text-center ml-[1px] ">01 Spring Sale</div>
               <div className="w-[20px] h-[20px] poppins-regular text-[7px] text-center ">30% OFF</div>

           </div>
       </div>
      
       <img src={dress2.src} alt="" className='w-[210px] h-[400px] rounded-lg' />
       {/* <img src={dress3.src} alt="" className='w-[150px] h-[400px]' /> */}

   </div>
   </>
  )
}

export default Banner;