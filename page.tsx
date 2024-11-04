export default function Figmapixeled(){
  return(
    <div className="bg-[#252b42] h-[1000px]">
      {/* navbar */}
      <div className="w-[1332px] h-[91px]  m-auto flex items-center">
        <div className="text-white font-bold text-2xl leading-8 letter-spacing-01px">Brand Name</div>
        <div className="ml-20">
          <a href="#" className="text-white mr-6 text-[14px]">Home</a>
          <a href="#" className="text-white mr-6 text-[14px]">Product</a>
          <a href="#" className="text-white mr-6 text-[14px]">Pricing</a>
          <a href="#" className="text-white mr-6 text-[14px]">Contact</a>
        </div>
        <div className="ml-[620px]">
          <span className="text-[14px] text-white font-bold leading-5 mr-7">Login</span>
          <button className="bg-[#23A6F0] text-white rounded-[5px]  w-[110px] h-[48px] text-[14px] hover:bg-[#252b42] hover:border-2 border-white">JOIN US</button>
        </div>
        </div>
        {/* navbar */}

        {/* main */}
        <div>
          <h5 className="text-[#23A6F0] text-center text-[16px]  mt-14 ">Welcome</h5>
          <h1 className=" text-white text-[58px] font-bold text-center leading-[80px] mt-9">Selling on the Internet <br /> Like a Pro</h1>
          <p className="text-white text-[20px] font-normal text-center mt-6">We know how large objects will act,but things on a <br /> small scale just do not act the way </p>
        </div>
        <div className="flex justify-center mt-7">
        <button className="w-[193px] h-[52px] rounded-[5px] bg-[#23A6F0] text-white mr-2 hover:bg-[#252b42] hover:border-2 border-white">Get Quote Now</button>
        <button className="w-[162px] h-[52px] rounded-[5px] text-[#23A6F0] border-[1px] border-[#23A6F0]">Learn More</button>
        </div>

        {/* card */}
        <div className="flex justify-center w-[1046px] h-[292px] m-auto gap-[30px] mt-28">
          {/* card-1 */}
          <div className="w-[328px] h-[292px] border-[2px] bg-white rounded-[5px] pt-[35px] pr-[19px] pb-[22px] pl-[40px]">
            <div className="rounded-lg w-24 h-24 bg-[#FFDCD1]"></div>
            <h2 className=" font-bold text-[16px] text-[#252B42] mt-4">training Courses</h2>
            <div className="w-[50px] h-[2px] bg-[#E74040] mt-3"></div>
            <p className="mt-3 text-[#737373]">The gradual accumulation of information about atomic and small-behaviour...</p>
          </div>

          {/* card-2 */}
          <div className="w-[328px] h-[292px] border-[2px] bg-white rounded-[5px] pt-[35px] pr-[19px] pb-[22px] pl-[40px]">
            <div className="rounded-lg w-24 h-24 bg-[#B9EAA8]"></div>
            <h2 className=" font-bold text-[16px] text-[#252B42] mt-4">2,769 online courses</h2>
            <div className="w-[50px] h-[2px] bg-[#E74040] mt-3"></div>
            <p className="mt-3 text-[#737373]">The gradual accumulation of information about atomic and small-behaviour...</p>
          </div>

          {/* card-3 */}
          <div className="w-[328px] h-[292px] border-[0px] bg-[#23A6F0] rounded-[5px] pt-[35px] pr-[19px] pb-[22px] pl-[40px]">
            <div className="rounded-lg w-24 h-24 bg-[#ffffff]"></div>
            <h2 className=" font-bold text-[16px] text-[#ffffff] mt-4">training Courses</h2>
            <div className="w-[50px] h-[2px] bg-[#ffffff] mt-3"></div>
            <p className="mt-3 text-[#ffffff]">The gradual accumulation of information about atomic and small-behaviour...</p>
          </div>
        </div>
        {/* main */}
    </div>
  )
}