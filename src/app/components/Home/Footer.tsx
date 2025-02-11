import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className="top-[5000px]">
        <div className='mt-[100px] flex gap-[40px] ml-[50px] mr-[50px]'>
            <Image src="/footer/boyImage.svg" alt="" height={600} width={300}/>
            <div className='flex flex-col mt-[200px]'>
                <div className='flex flex-col drop-shadow-xl w-[600px]'>
                    <div className="volkhov-regular text-[40px] font-[400]">
                        Subscribe To Our Newsletter
                    </div>
                    <div className="poppins-thin text-[14px] font-light text-[#8A8A8A]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin 

                    </div>
                    <div className="poppins-thin text-[18px] font-light mt-[20px] text-[#8A8A8A]">
                        michael@ymail.com
                    </div>
                    <button type="button" className="md:poppins-thin text-xs md:rounded-lg bg-black md:mt-[20px] md:ml-[150px]  md:shadow-xl md:text-white md:shadow-lg hover:bg-gray-900 hover:text-white hover:shadow-xl focus:outline-none md:w-[207px] md:h-[45px] py-4 sm:w-[197px] sm:h-[45px] sm:ml-[80px] sm:mt-[30px] sm:mb-[20px] sm:rounded-lg sm:shadow-lg sm:text-white sm:hover:bg-gray-900 sm:hover:text-white sm:hover:shadow-xl" >Subscribe Now</button>
                    


                </div>
               


            </div>
            <Image src="/footer/girlImage.svg" alt="" height={590} width={300}/>

        </div>
        <div className="w-full h-[130px] border border-[##DEDFE1]">
          <div className="flex gap-[300px]  ml-[200px] mr-[200px] h-[108px]">
                <div className="volkhov-regular text-[32px]  py-1">
                    FASCO
                </div>
                <div className="flex gap-[20px] poppins-thin text-[15px] text-[#484848] py-2">
                    <div>Support Center</div>
                    <div>Invoicing</div>
                    <div>Contract</div>
                    <div>Careers</div>
                    <div>Blog</div>
                    <div>FAQ,s</div>

                </div>
          </div>
          <div className='poppins-thin text-[14px] text-[#484848] flex justify-center'>
          Copyright © 2022 Xpro . All Rights Reseved.
          </div>
        
        </div>

    </div>
  )
}

export default Footer
