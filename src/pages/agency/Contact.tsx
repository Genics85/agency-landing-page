import oval1 from "../../assets/agency/contactOval.png"
import oval2 from "../../assets/agency/contactOval2.png"

function Contact() {
  return (
    <div className="relative m-5 p-8 flex flex-col items-center gap-12 md:m-20 md:p-16 lg:m-24 min-h-fit bg-[#2f3a62] rounded-md overflow-hidden">
        <div className=" absolute top-0 right-0">
            <img src={oval1} alt="" />
        </div>
        <div className=" absolute bottom-0 right-0">
            <img src={oval2} alt="" />
        </div>
      <div className="flex flex-col gap-4 md:items-center md:flex-row md:justify-between">
        <div className="flex flex-col gap-4 items-start">
          <h3 className="z-10 text-4xl md:text-5xl font-bold text-white font-serif">
            Just Connect <br /> With Us
          </h3>
          <p className="text-textGrey md:w-2/3">
            Distan orb has power to raise and purify our thoughts like a strain
            of sacred music or a noble picture
          </p>
        </div>
        <div className="z-10 p-6 bg-white flex flex-col gap-3 rounded-md">
            <input type="text" placeholder="Your Email" name="" id="" className="border border-textGrey rounded-md p-2" />
            <textarea placeholder="Message" rows={2} name="" id="" className="border border-textGrey rounded-md p-2" />
            <button className="bg-agencyAccent rounded-md text-white py-2 hover:bg-white border border-agencyAccent hover:text-agencyAccent">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
