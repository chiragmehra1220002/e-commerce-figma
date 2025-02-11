import Image from "next/image";
import Slider from "./Slider"; // Ensure this is correctly implemented

const Testimonial = () => {
  return (
    <div className="md:top-[4540px] md:flex md:flex-col md:bg-[#FAFAFA] md:gap-[20px] md:mt-[40px] md:h-[700px] sm:flex sm:flex-col sm:gap-[10px]">
      <div className="volkhov-regular text-[46px] font-[400] mt-[40px] flex justify-center items-center text-[#484848">
        This is What Our Customers Say
      </div>
      <div className="md:w-[600px] md:h-[26px] md:poppins-light md:text-[16px] md:font-[400] md:flex md:justify-center md:ml-[400px] md:text-[#8A8A8A] sm:ml-[40px] sm:w-[360px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis
      </div>

      {/* Desktop Testimonials */}
      <div className="md:flex md:relative sm:hidden">
        <div className="md:w-[600px] md:h-[300px] md:flex md:gap-[20px] md:ml-[400px] md:bg-[#FFFFFF] md:rounded-lg md:absolute">
          <Image src="/testimonials/customer1.svg" width={220} height={220} alt="customer 1" />
          <div className="flex flex-col mt-[70px] gap-[5px]">
            <p className="poppins-light text-[16px] font-[400] text-[#484848] flex flex-wrap">
              "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!"
            </p>
            <Image src="/testimonials/stars.svg" width={80} height={15} alt="stars" />
            <div className="border border-gray-400 w-[200px] poppins-light"></div>
            <div className="volkhov-regular text-[#484848] text-[32px]">James K.</div>
            <div className="poppins-light text-[16px] font-[400] text-[#484848]">Traveler</div>
          </div>
        </div>

        <div className="w-[500px] h-[200px] flex gap-[20px] ml-[200px] bg-[#FFFFFF] rounded-lg mt-[40px]">
          <Image src="/testimonials/customer2.svg" width={180} height={180} alt="customer 2" />
          <div className="flex flex-col mt-[20px] gap-[5px]">
            <p className="poppins-light text-[16px] font-[400] text-[#484848] flex flex-wrap">
              “Just what I was looking for. Thank you for making it painless, pleasant and most of all hassle free! All products are great.”
            </p>
            <Image src="/testimonials/stars.svg" width={80} height={15} alt="stars" />
            <div className="border border-gray-400 w-[200px] poppins-light"></div>
            <div className="volkhov-regular text-[#484848] text-[25px]">Megan W.</div>
            <div className="poppins-light text-[16px] font-[400] text-[#484848]">Designer</div>
          </div>
        </div>

        <div className="w-[500px] h-[200px] flex gap-[20px] mr-[80px] bg-[#FFFFFF] rounded-lg mt-[40px]">
          <Image src="/testimonials/customer2.svg" width={180} height={180} alt="customer 2" />
          <div className="flex flex-col mt-[20px] gap-[3px]">
            <p className="poppins-light text-[16px] font-[400] text-[#484848] flex flex-wrap">
              “Just what I was looking for. Thank you for making it painless, pleasant and most of all hassle free! All products are great.”
            </p>
            <Image src="/testimonials/stars.svg" width={80} height={15} alt="stars" />
            <div className="border border-gray-400 w-[200px] poppins-light"></div>
            <div className="volkhov-regular text-[#484848] text-[25px]">Sarah W.</div>
            <div className="poppins-light text-[16px] font-[400] text-[#484848]">Designer</div>
          </div>
        </div>
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden sm:block">
        <Slider>
          <div className="sm:w-[360px] sm:h-[500px] sm:flex sm:gap-[20px] sm:ml-[40px] sm:bg-[#FFFFFF] sm:rounded-lg sm:flex-col">
            <Image src="/testimonials/customer1.svg" width={220} height={220} alt="customer 1" />
            <div className="flex flex-col mt-[70px] gap-[5px]">
              <p className="poppins-light text-[16px] font-[400] text-[#484848] flex flex-wrap">
                "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!"
              </p>
              <Image src="/testimonials/stars.svg" width={80} height={15} alt="stars" />
              <div className="border border-gray-400 w-[200px] poppins-light"></div>
              <div className="volkhov-regular text-[#484848] text-[32px]">James K.</div>
              <div className="poppins-light text-[16px] font-[400] text-[#484848]">Traveler</div>
            </div>
          </div>

          <div className="sm:w-[360px] sm:h-[500px] sm:flex sm:gap-[20px] sm:ml-[40px] sm:bg-[#FFFFFF] sm:rounded-lg sm:mt-[40px]">
            <Image src="/testimonials/customer2.svg" width={180} height={180} alt="customer 2" />
            <div className="flex flex-col mt-[20px] gap-[5px]">
              <p className="poppins-light text-[16px] font-[400] text-[#484848] flex flex-wrap">
                “Just what I was looking for. Thank you for making it painless, pleasant and most of all hassle free! All products are great.”
              </p>
              <Image src="/testimonials/stars.svg" width={80} height={15} alt="stars" />
              <div className="border border-gray-400 w-[200px] poppins-light"></div>
              <div className="volkhov-regular text-[#484848] text-[25px]">Megan W.</div>
              <div className="poppins-light text-[16px] font-[400] text-[#484848]">Designer</div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
