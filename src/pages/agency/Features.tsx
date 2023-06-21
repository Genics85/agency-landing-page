import featureOval from "../../assets/agency/featureOval.png";
import emailMarketing from "../../assets/agency/emailMarketing.png";
import userAnalytics from "../../assets/agency/userAnalytics.png";
import security from "../../assets/agency/security.png";
import integration from "../../assets/agency/integration.png";
import community from "../../assets/agency/community.png";
import support from "../../assets/agency/support.png";
import FeatureGridElement from "./compponents/FeatureGridElement";

function Features() {
  return (
    <div className="relative -z-10 p-5 flex flex-col gap-12 md:p-20 lg:p-24 min-h-screen bg-gradient-to-t from-agencyPrimary to-agencySecondary overflow-hidden">
      <div className="absolute -mr-36 md:-mr-0 right-0 top-0 flex items-end justify-end overflow-clip">
        <img src={featureOval} className="w-3/5" alt="" />
      </div>
      <div className="text-4xl md:text-5xl font-serif font-bold">Features</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        <FeatureGridElement
          img={emailMarketing}
          description="Sint laboris sint id dolor ex Lorem qui nostrud labore excepteur velit in Lorem nulla."
          title="Email Marketing"
          gradient="bg-gradient-to-t from-[#f8774f] to-[#8f5359]"
        />
        <FeatureGridElement
          img={userAnalytics}
          description="Qui aliquip elit ipsum incididunt ad voluptate id veniam tempor ea labore consequat qui amet."
          title="User Analytics"
          gradient="bg-gradient-to-t from-[#f99d84] to-[#6875de]"
        />
        <FeatureGridElement
          img={security}
          description="Sit ut aliquip elit do eu quis reprehenderit cillum."
          title="Security"
          gradient="bg-gradient-to-t from-[#6e7ee1] to-[#f5d0ca]"
        />
        <FeatureGridElement
          img={integration}
          description="Sunt amet enim aliqua proident nostrud dolore consequat."
          title="Integration"
          gradient="bg-gradient-to-r from-[#f99d84] to-[#6875de]"
        />
        <FeatureGridElement
          img={community}
          description="Velit cillum proident excepteur anim incididunt nulla ullamco duis est ex."
          title="Community"
          gradient="bg-gradient-to-r from-[#6e7ee1] to-[#f5d0ca]"
        />
        <FeatureGridElement
          img={support}
          description="Commodo irure tempor esse quis sint commodo."
          title="Support"
          gradient="bg-gradient-to-r from-[#f8774f] to-[#8f5359]"
        />
      </div>
    </div>
  );
}

export default Features;
