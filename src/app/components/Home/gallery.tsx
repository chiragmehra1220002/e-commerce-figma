import Image from "next/image";
import Slider from "./Slider";

const gallery = () => {
  return (


    <div className=" md:top-[4300px] md:flex md:flex-col md:gap-[20px] ">
      <div className="volkhov-regular md:text-[46px] md:font-medium md:flex justify-center items-center mt-[20px] sm:text-[26px] sm:flex sm:font-medium sm:justify-center sm:items-center  sm:mt-[20px]">Follow Us On Instagram</div>
      <div className="md:poppins-thin md:text-[16px] text-[#8A8A8A] md:flex md:flex-wrap md:justify-center md:items-center md:w-[600px] md:ml-[400px] sm:w-[300px] sm:ml-[50px]">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin 

      </div>
      <div className="md:mt-[40px] md:w-full md:flex md:mr-[0px]  md:block sm:hidden ">
        <Image src="/gallery/manCoat.svg" height={308} width={210} alt="man coat" className="md:block sm:hidden" />
        <Image src="/gallery/girlSweater.svg" height={380} width={188} alt="girl sweater" className="md:block sm:hidden"  />
        <Image src="/gallery/girlCasual.svg" height={308} width={188} alt="girl casual" className="md:block sm:hidden"/>
        <Image src="/gallery/manShirt.svg" height={380} width={188} alt="man shirt" className="md:block sm:hidden" />
        <Image src="/gallery/girlBlueDress.svg" height={308} width={188} alt="girl blue dress" className="md:block sm:hidden" />
        <Image src="/gallery/manStylishCoat.svg"  height={380} width={188} alt="man shirt" className="md:block sm:hidden" />
        <Image src="/gallery/girlStylishDress.svg" height={308} width={198} alt="girl stylish dress" className="md:block sm:hidden" />


      </div>
      <div className="sm:mt-[20px] sm:w-[360px] sm:flex   md:mr-[0px]  sm:block md:hidden ">
        <Slider>
        <Image src="/gallery/manCoat.svg" height={400} width={300} alt="man coat" className="ml-[50px] md:hidden sm:block" />
        <Image src="/gallery/girlSweater.svg" height={270} width={300} alt="girl sweater" className="ml-[50px] md:hidden sm:block" />
        <Image src="/gallery/girlCasual.svg" height={360} width={300} alt="girl casual" className="ml-[50px] md:hidden sm:block" />
        <Image src="/gallery/manShirt.svg" height={360} width={300} alt="man shirt" className="ml-[50px] md:hidden sm:block" />
        <Image src="/gallery/girlBlueDress.svg" height={270} width={300} alt="girl blue dress" className="ml-[50px] md:hidden sm:block" />
        <Image src="/gallery/manStylishCoat.svg"  height={360} width={300} alt="man shirt" className="ml-[50px] md:hidden sm:block" />
        <Image src="/gallery/girlStylishDress.svg" height={270} width={300} alt="girl stylish dress" className="ml-[50px] md:hidden sm:block" />
        </Slider>


      </div>
    </div>
  )
}

export default gallery
