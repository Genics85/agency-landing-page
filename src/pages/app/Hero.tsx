import herobg from "../../assets/app/herobg.png"
import phone from "../../assets/app/phone.png"


function Hero() {
  return (
    <section className="relative flex items-center  bg-transparent rounded-3xl max-h-screen overflow m-5 mt-10">
        <div className="absolute -z-10">
        <img src={herobg} className=" h-full" alt="" />
        </div>
        <div className=" flex flex-col gap-6 items-start w-1/2 m-20">
            <p className="text-textGrey">BEST APPLICATION</p>
            <h4 className="text-white font-bold text-6xl">Make It Easy <br/> With Our App</h4>
            <p className="text-white">Tempor tempor nisi Labore magna commodo eu officia sunt amet minim adipisicing irure non voluptate duis magna.velit aute.</p>
            <button className="rounded-sm bg-orange-300 text-white px-5 py-1 text-center">Explore</button>
        </div>
        <div className="">
            <img src={phone} alt="" />
        </div>
    </section>
  )
}

export default Hero