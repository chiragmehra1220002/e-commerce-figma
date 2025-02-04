import Image from "next/image"


const BestSellingProduct = () => {
  return (
    <div className="md:top-[3600px] md:mt-[100px]  md:flex md:flex-row sm:flex sm:flex-col">
     <Image src="/new_arrivals/WomenCollection.png" alt="" width={600} height={500} />
     <div className="w-[800px] h-[500px] bg-gray-300">
      <div className="w-[500px] h-[420px] mt-[40px] ml-[40px] flex flex-col gap-[15px]">
        <div className="poppins-thin text-[16px] font-light  text-white-200">
          Women's Collection

        </div>
        <div  className="volkhov-regular text-[40px]   font-medium">
          Peaky Blinder's
        </div>
        <div className="poppins-thin text-[16px] font-light underline decoration-solid  text-black">
          DESCRIPTION
        </div>
        <div className="poppins-thin text-[16px] text-gray-600 flex flex-wrap">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis.

        </div>
        <div className="flex gap-[15px]">
          <div className="poppins-thin text-[16px] text-gray-600 flex flex-wrap">Size:</div>
          <button type="button" className="poppins-thin text-[12px] text-white-600  rounded-xl bg-black   shadow-xl text-white shadow-lg hover:bg-gray-900 hover:text-white hover:shadow-xl focus:outline-none w-[50px] h-[28px] " >M</button>
         
        </div>
        <div className="poppins-regular text-[28px] font-bold">$100.00</div>
        <button type="button" className="poppins-thin text-xs md:rounded-lg bg-black  shadow-xl text-white shadow-lg hover:bg-gray-900 hover:text-white hover:shadow-xl focus:outline-none w-[207px] h-[45px] py-4 shadow-xl sm:rounded ">Buy Now</button>
      </div>

     </div>

      
     
    </div>
  )
}

export default BestSellingProduct;