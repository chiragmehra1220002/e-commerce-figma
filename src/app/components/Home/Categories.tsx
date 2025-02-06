import Image from "next/image";

const Categories = () => {
  return (
    <div  className="bg-white top-[1800px] flex flex-col  ">
        <div className="volkhov-regular font-[400] text-[40px] flex justify-center items-center top-[1840px]">
            New Arrivals
        </div>
        <div className="md:w-[600px] md:h-[100px] md:poppins-thin md:flex md:flex-wrap  md:items-center md:top-[84px] md:text-gray-600 md:text-[16px] md:mt-[30px] md:ml-[420px] sm:w-[340px] sm:h-[100px] sm:poppins-thin sm:flex sm:flex-wrap  sm:items-center sm:top-[184px] sm:text-gray-600 sm:text-[16px]  sm:ml-[50px] ">
        
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin 
        </div>
        <div className ="md:w-[1100px] md:h-[50px] md:flex md:top-[284px] md:gap-[40px] md:ml-[200px] md:mt-[0px] sm:w-[340px] sm:h-[100px] sm:poppins-thin sm:flex sm:flex-wrap  sm:items-center sm:top-[244px] sm:text-gray-600 sm:text-[16px]  sm:ml-[50px] sm:gap-[10px] sm:mt-[20px] ">
            <button type="button" className="md:poppins-thin text-xs md:rounded-lg bg-gray-300 text-black shadow-lg hover:bg-gray-900 hover:text-white hover:shadow-xl focus:outline-none md:w-[207px] md:h-[45px] py-4 sm:w-[127px] sm:h-[45px] sm:rounded-3xl">Men's Fashion</button>
            <button type="button" className="md:poppins-thin text-xs md:rounded-lg bg-gray-300 text-black shadow-lg hover:bg-gray-900 hover:text-white hover:shadow-xl focus:outline-none md:w-[207px] md:h-[45px] py-4 sm:w-[127px] sm:h-[45px] sm:rounded-3xl">Women's Fashion</button>
            <button type="button" className="md:poppins-thin text-xs md:rounded-lg bg-gray-300 text-black shadow-lg hover:bg-gray-900 hover:text-white hover:shadow-xl focus:outline-none md:w-[207px] md:h-[45px] py-4 sm:w-[127px] sm:h-[45px] sm:rounded-3xl">Men Accessories</button>
            <button type="button" className="md:poppins-thin text-xs md:rounded-lg bg-gray-300 text-black shadow-lg hover:bg-gray-900 hover:text-white hover:shadow-xl focus:outline-none md:w-[207px] md:h-[45px] py-4 sm:w-[127px] sm:h-[45px] sm:rounded-3xl">Discount Deals</button>
            



        </div>
        <div className="md:w-[1200px] md:h-[900px] md:ml-[40px]  md:flex md:flex-wrap md:gap-[30px] md:mt-[20px] md:justify-center">
            <div className="w-[280px] h-[330px] flex flex-col  shadow-2xl rounded-lg mt-[20px] md:ml-[20px] gap-[5px] sm:ml-[30px]">
                <Image src="/categories/dress1.png" alt=""  height={204} width={230} className="ml-[20px] mt-[20px]"/>
                <div className="flex gap-[70px] ml-[20px]">
                    <div className="poppins-light text-[14px] ml-[-2px] text-black">Shiny dress</div>
                    <div className="flex gap-[2px] ">
                        <Image src="/new_arrivals/star.png" alt=""  height={14} width={14}/>
                        <Image src="/new_arrivals/star.png" alt=""  height={14} width={14}/>
                        <Image src="/new_arrivals/star.png" alt=""  height={14} width={14}/>
                        <Image src="/new_arrivals/star.png" alt=""  height={14} width={14}/>
                        <Image src="/new_arrivals/star.png" alt=""  height={14} width={14}/>

                    </div>
                    
                </div>
                <div className="poppins-light text-[12px] text-gray-500  ml-[20px]">
                        AI KARAM
                </div>
                <div className="poppins-light text-[12px] text-black-500  ml-[20px]">
                (4.1k) Customer Reviews
                </div>
                <div className="flex gap-[70px] ml-[20px] mt-[30px]">
                    <div className="poppins-light text-[16px] text-black font-medium">$95.50</div>
                    <div className="poppins-light text-[12px] text-red-500 mt-[5px] mt- ">Almost Sold Out</div>
                </div>

            </div>
            <div className="w-[280px] h-[330px] flex flex-col  shadow-xl rounded-lg mt-[20px] md:ml-[20px] gap-[5px] sm:ml-[30px]">
                <Image src="/categories/dress2.png" alt=""  height={204} width={230} className="ml-[20px] mt-[20px]"/>
                <div className="flex gap-[70px] ml-[20px]">
                    <div className="poppins-light text-[14px] ml-[-2px] text-black">Long dress</div>
                    <div className="flex gap-[2px] ">
                        <Image src="/new_arrivals/star.png" alt=""  height={14} width={14}/>
                        <Image src="/new_arrivals/star.png" alt=""  height={14} width={14}/>
                        <Image src="/new_arrivals/star.png" alt=""  height={14} width={14}/>
                        <Image src="/new_arrivals/star.png" alt=""  height={14} width={14}/>
                        <Image src="/new_arrivals/star.png" alt=""  height={14} width={14}/>

                    </div>
                    
                </div>
                <div className="poppins-light text-[12px] text-gray-500  ml-[20px]">
                        AI KARAM
                </div>
                <div className="poppins-light text-[12px] text-black-500  ml-[20px]">
                (4.1k) Customer Reviews
                </div>
                <div className="flex gap-[70px] ml-[20px] mt-[30px]">
                    <div className="poppins-light text-[16px] text-black font-medium">$95.50</div>
                    <div className="poppins-light text-[12px] text-red-500 mt-[5px] mt- ">Almost Sold Out</div>
                </div>

            </div>
            <div className="w-[280px] h-[330px] flex flex-col  shadow-2xl rounded-lg mt-[20px] md:ml-[20px] gap-[5px] sm:ml-[30px]">
                <Image src="/categories/dress3.png" alt=""  height={204} width={230} className="ml-[20px] mt-[20px]"/>
                <div className="flex gap-[70px] ml-[20px]">
                    <div className="poppins-light text-[14px] ml-[-2px] text-black">Full Sweater</div>
                    <div className="flex gap-[2px] ">
                        <Image src="/new_arrivals/star.png" alt=""  height={14} width={14}/>
                        <Image src="/new_arrivals/star.png" alt=""  height={14} width={14}/>
                        <Image src="/new_arrivals/star.png" alt=""  height={14} width={14}/>
                        <Image src="/new_arrivals/star.png" alt=""  height={14} width={14}/>
                        <Image src="/new_arrivals/star.png" alt=""  height={14} width={14}/>

                    </div>
                    
                </div>
                <div className="poppins-light text-[12px] text-gray-500  ml-[20px]">
                        AI KARAM
                </div>
                <div className="poppins-light text-[12px] text-black-500  ml-[20px]">
                (4.1k) Customer Reviews
                </div>
                <div className="flex gap-[70px] ml-[20px] mt-[30px]">
                    <div className="poppins-light text-[16px] text-black font-medium">$95.50</div>
                    <div className="poppins-light text-[12px] text-red-500 mt-[5px] mt- ">Almost Sold Out</div>
                </div>

            </div>
            <div className="w-[280px] h-[330px] flex flex-col  shadow-2xl rounded-lg mt-[20px] md:ml-[20px] gap-[5px] sm:ml-[30px]">
                <Image src="/categories/dress4.png" alt=""  height={204} width={230} className="ml-[20px] mt-[20px]"/>
                <div className="flex gap-[70px] ml-[20px]">
                    <div className="poppins-light text-[14px] ml-[-2px] text-black">White dress</div>
                    <div className="flex gap-[2px] ">
                        <Image src="/new_arrivals/star.png" alt=""  height={14} width={14}/>
                        <Image src="/new_arrivals/star.png" alt=""  height={14} width={14}/>
                        <Image src="/new_arrivals/star.png" alt=""  height={14} width={14}/>
                        <Image src="/new_arrivals/star.png" alt=""  height={14} width={14}/>
                        <Image src="/new_arrivals/star.png" alt=""  height={14} width={14}/>

                    </div>
                    
                </div>
                <div className="poppins-light text-[12px] text-gray-500  ml-[20px]">
                        AI KARAM
                </div>
                <div className="poppins-light text-[12px] text-black-500  ml-[20px]">
                (4.1k) Customer Reviews
                </div>
                <div className="flex gap-[70px] ml-[20px] mt-[30px]">
                    <div className="poppins-light text-[16px] text-black font-medium">$95.50</div>
                    <div className="poppins-light text-[12px] text-red-500 mt-[5px] mt- ">Almost Sold Out</div>
                </div>

            </div>
            <div className="w-[280px] h-[330px] flex flex-col  shadow-2xl rounded-lg mt-[20px] md:ml-[20px] sm:ml-[30px] gap-[5px]">
                <Image src="/categories/dress5.png" alt=""  height={204} width={230} className="ml-[20px] mt-[20px]"/>
                <div className="flex gap-[70px] ml-[20px]">
                    <div className="poppins-light text-[14px] ml-[-2px] text-black">Colorful dress</div>
                    <div className="flex gap-[2px] ">
                        <Image src="/new_arrivals/star.png" alt=""  height={14} width={14}/>
                        <Image src="/new_arrivals/star.png" alt=""  height={14} width={14}/>
                        <Image src="/new_arrivals/star.png" alt=""  height={14} width={14}/>
                        <Image src="/new_arrivals/star.png" alt=""  height={14} width={14}/>
                        <Image src="/new_arrivals/star.png" alt=""  height={14} width={14}/>

                    </div>
                    
                </div>
                <div className="poppins-light text-[12px] text-gray-500  ml-[20px]">
                        AI KARAM
                </div>
                <div className="poppins-light text-[12px] text-black-500  ml-[20px]">
                (4.1k) Customer Reviews
                </div>
                <div className="flex gap-[70px] ml-[20px] mt-[30px]">
                    <div className="poppins-light text-[16px] text-black font-medium">$95.50</div>
                    <div className="poppins-light text-[12px] text-red-500 mt-[5px] mt- ">Almost Sold Out</div>
                </div>

            </div>
            <div className="w-[280px] h-[330px] flex flex-col  shadow-2xl rounded-lg mt-[20px] md:ml-[20px] sm:ml-[30px] gap-[5px]">
                <Image src="/categories/dress6.png" alt=""  height={204} width={230} className="ml-[20px] mt-[20px]"/>
                <div className="flex gap-[70px] ml-[20px]">
                    <div className="poppins-light text-[14px] ml-[-2px] text-black">White Shirt</div>
                    <div className="flex gap-[2px] ">
                        <Image src="/new_arrivals/star.png" alt=""  height={14} width={14}/>
                        <Image src="/new_arrivals/star.png" alt=""  height={14} width={14}/>
                        <Image src="/new_arrivals/star.png" alt=""  height={14} width={14}/>
                        <Image src="/new_arrivals/star.png" alt=""  height={14} width={14}/>
                        <Image src="/new_arrivals/star.png" alt=""  height={14} width={14}/>

                    </div>
                    
                </div>
                <div className="poppins-light text-[12px] text-gray-500  ml-[20px]">
                        AI KARAM
                </div>
                <div className="poppins-light text-[12px] text-black-500  ml-[20px]">
                (4.1k) Customer Reviews
                </div>
                <div className="flex gap-[70px] ml-[20px] mt-[30px]">
                    <div className="poppins-light text-[16px] text-black font-medium">$95.50</div>
                    <div className="poppins-light text-[12px] text-red-500 mt-[5px] mt- ">Almost Sold Out</div>
                </div>

            </div>
           

        </div>
        <button type="button" className="md:poppins-thin text-xs md:rounded-lg bg-black md:mt-[20px] md:ml-[550px]  md:shadow-xl md:text-white md:shadow-lg hover:bg-gray-900 hover:text-white hover:shadow-xl focus:outline-none md:w-[207px] md:h-[45px] py-4 sm:w-[197px] sm:h-[45px] sm:ml-[60px] sm:mt-[30px] sm:mb-[20px] sm:rounded-lg sm:shadow-lg sm:text-white sm:hover:bg-gray-900 sm:hover:text-white sm:hover:shadow-xl" >View More</button>
         
           
    
    </div>
  )
}

export default Categories