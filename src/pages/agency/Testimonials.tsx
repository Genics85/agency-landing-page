import oval1 from "../../assets/agency/testimonialOvalS.png";
import oval2 from "../../assets/agency/testimonialOval.png";
import avartar1 from "../../assets/agency/avartar1.png";
import avartar2 from "../../assets/agency/avartar2.png";
import avartar3 from "../../assets/agency/avartar3.png";
import avartar4 from "../../assets/agency/avartar4.png";
import TestimonialAvartar from "./compponents/TestimonialAvartar";
import atlasian from "../../assets/agency/atlasian.png";
import slack from "../../assets/agency/slack.png";
import dropbox from "../../assets/agency/dropbox.png";
import shopify from "../../assets/agency/shopify.png";
import google from "../../assets/agency/google.png";

function Testimonials() {
  return (
    <div className="relative m-5 p-8 flex flex-col items-center gap-12 md:m-20 md:p-16 lg:m-24 min-h-screen bg-[#2f3a62] rounded-md overflow-hidden">
      <div className="w-2/3 -mr-28 md:-mr-0 md:w-full absolute top-0 right-0 flex items-center justify-end">
        <img src={oval1} alt="" />
      </div>
      <div className="absolute w-full bottom-0 left-0  md:flex items-center justify-start">
        <img src={oval2} alt="" />
      </div>
      <div className="flex flex-col items-center gap-4">
        <h4 className="text-4xl md:text-5xl font-bold text-white font-serif">
          Testimonials
        </h4>
        <p className="text-textGrey md:w-8/12 text-center">
          Deserunt consectetur nisi adipisicing excepteur nisi consequat.
          Nostrud ipsum laborum consectetur sint elit dolor fugiat qui aliquip.
          Nulla in elit pariatur amet aute excepteur reprehenderit. Ipsum
          laboris cillum velit esse sit Lorem. Ut ipsum non nostrud tempor
          fugiat. Ipsum irure mollit incididunt magna eiusmod elit elit occaecat
          labore excepteur et eu id.
        </p>
      </div>
      <hr className=" w-7/12 border-textGrey" />
      <p className="text-white text-center md:w-10/12">
        "What looked like a small patch of purple grass, above five feet square,
        was moving across the sand in their direction. When it came near enough
        he perceived that it was not grass there were no blades, but only purple
        roots. The roots were revolving, like the spokes of a rimless wheel."
      </p>
      <div className="flex flex-col gap-4 items-center">
        <h3 className="text-2xl font-bold text-white font-serif">Alicia Puma</h3>
        <p className="text-textGrey">Digital Director,Microsoft</p>
      </div>
      <div className="flex gap-4">
        <TestimonialAvartar img={avartar1}/>
        <TestimonialAvartar img={avartar2}/>
        <TestimonialAvartar img={avartar3}/>
        <TestimonialAvartar img={avartar4}/>
      </div>
      <div className="grid w-full grid-cols-1 place-items-center md:grid-cols-5 gap-12">
        <img src={atlasian} alt="" />
        <img src={slack} alt="" />
        <img src={dropbox} alt="" />
        <img src={shopify} alt="" />
        <img src={google} alt="" />
      </div>
    </div>
  );
}

export default Testimonials;
