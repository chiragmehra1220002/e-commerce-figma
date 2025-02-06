import { FaRegStar } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import Image from "next/image";

const feature = () => {
  return (
    <div className="md:top-[4100px] md:bg-[#FFFFFF]">
        <div className="md:w-full md:h-[160px] md:flex md:flex-row md:justify-evenly md:items-center sm:flex  sm:flex-col sm:justify-center sm:items-center sm:gap-[8px] sm:h-[440px] ">
          <div  className=" md:flex md:ml-[2px]">
        
            <div className="flex flex-col items-center">
                <FaRegStar className="w-[25px] h-[23.5px] mt-[2px]" />
                <Image src="./new_arrivals/hand.svg" alt="hand" height={24} width={50} />
            </div>
            <div className="flex flex-col">
                <div className="poppins-regular font-[500] text-[20px]">
                    High Quality
                </div>
                <div className="poppins-thin text-[16px] text-[#484848] font-[400]">
                    crafted from top materials
                </div>

            </div>
            </div>
            <div className="md:flex  md:ml-[2px] md:mt-[0px] sm:mt-[2px]">
                    

                    <div className="flex flex-col items-center">
                         <Image src="/new_arrivals/Badge2.png" height={70} width={48} alt="" />
                    </div>
                     <div className="flex flex-col ml-[2px]">
                        <div className="poppins-regular font-[500] text-[20px]">
                            Warranty Protection
                        </div>
                        <div className="poppins-thin text-[16px] text-[#484848] font-[400]">
                            Over 2 years
                        </div>

                    </div>

                    
        

    
            </div>
            <div className="md:flex  md:ml-[2px] md:mt-[0px] sm:mt-[2px]">
                    

                    <div className="flex flex-col items-center">
                         <Image src="/new_arrivals/Box.svg" height={50} width={46} alt="" />
                    </div>
                     <div className="flex flex-col ml-[2px]">
                        <div className="poppins-regular font-[500] text-[20px]">
                            Free Shipping
                        </div>
                        <div className="poppins-thin text-[16px] text-[#484848] font-[400]">
                            Order over 150 $
                        </div>

                    </div>

                    
        

    
            </div>
            <div className="md:flex  md:ml-[2px]  md: mt-[0px] sm:mt-[2px]">
                    

                    <div className="flex flex-col items-center">
                         <Image src="/new_arrivals/phone.svg" height={50} width={46} alt="" />
                    </div>
                     <div className="flex flex-col ml-[2px]">
                        <div className="poppins-regular font-[500] text-[20px]">
                            24 / 7 Support
                        </div>
                        <div className="poppins-thin text-[16px] text-[#484848] font-[400]">
                            Dedicated support
                        </div>

                    </div>

                    
        

    
            </div>

        </div>
    </div>
  )
}

export default feature