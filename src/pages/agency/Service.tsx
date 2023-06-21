import atlasian from "../../assets/agency/atlasian.png";
import slack from "../../assets/agency/slack.png";
import dropbox from "../../assets/agency/dropbox.png";
import shopify from "../../assets/agency/shopify.png";
import google from "../../assets/agency/google.png";
import marketing from "../../assets/agency/marketing.png";
import design from "../../assets/agency/design.png";
import development from "../../assets/agency/development.png";
import ServiceCard from "./compponents/ServiceCard"
import service from "../../assets/agency/service.png";
import ServiceChecks from "./compponents/ServiceChecks";

function Service() {
  return (
    <div className="p-5 pt-12 flex flex-col gap-28 items-center md:p-20 lg:p-24 min-h-screen bg-white">
      <div className="grid place-items-center w-full grid-cols-1 md:grid-cols-5 gap-12">
        <img src={atlasian} alt="" />
        <img src={slack} alt="" />
        <img src={dropbox} alt="" />
        <img src={shopify} alt="" />
        <img src={google} alt="" />
      </div>
      <div className="flex flex-col md:flex-row md:justify-between gap-4">
        <h4 className="text-4xl md:text-5xl md:w-1/2 font-serif font-semibold">
          Our Best
          <br />
          Services
        </h4>
        <p className="md:w-1/2">
          Et commodo ex amet cillum dolor magna ex. Exercitation sint est Lorem
          occaecat aute qui consequat. Sit tempor id ea velit voluptate ipsum
          ullamco commodo. Incididunt consectetur anim do commodo.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between gap-4">
        <ServiceCard
          img={marketing}
          color="bg-[#212b60]"
          title="Marketing"
          description="Occaecat ut irure esse sunt proident sunt."
        />
        <ServiceCard
          img={design}
          color="bg-[#5d71e9]"
          title="Design"
          description="Culpa dolore sint enim exercitation minim do fugiat deserunt ullamco enim."
        />
        <ServiceCard
          img={development}
          color="bg-[#fbd3c9]"
          title="Development"
          description="Nostrud excepteur Lorem deserunt et sunt quis magna."
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:items-center">
        <div className="-ml-5  md:-ml-20 lg:-ml-24 ">
          <img src={service} className="md:w-4/5" />
        </div>
        <div className="flex flex-col gap-4 items-start md:w-1/2">
          <h4 className="font-bold text-4xl md:text-5xl font-serif">
            We had left the <br />
            ground
          </h4>
          <p>
            Est amet ut eu ex. Occaecat laboris mollit id enim et aliqua elit.
            Ipsum magna laborum do id aute consequat ipsum laboris dolore
            proident officia. Adipisicing commodo excepteur esse consectetur et
            nisi laborum. In adipisicing occaecat cupidatat nostrud anim aliquip
            proident aliquip sit quis deserunt.
          </p>
          <div className="flex flex-col gap-4">
            <ServiceChecks subject="Truly it was a great journey" />
            <ServiceChecks subject="Whom to know was to love" />
            <ServiceChecks subject="And in it i met with many" />
          </div>
          <button className="border border-agencyAccent text-agencyAccent font-bold py-1 px-6 hover:bg-agencyAccent hover:text-white rounded-md">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}

export default Service;
