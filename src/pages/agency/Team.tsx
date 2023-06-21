import blog1 from "../../assets/agency/blog1.png";
import blog2 from "../../assets/agency/blog2.png";
import blog3 from "../../assets/agency/blog3.png";
import team1 from "../../assets/agency/team1.png";
import team2 from "../../assets/agency/team2.png";
import team3 from "../../assets/agency/team3.png";
import BlogCard from "./compponents/BlogCard";
import TeamCard from "./compponents/TeamCard";
function Team() {
  return (
    <div className="p-5 flex flex-col items-center gap-12 md:p-20 lg:p-24 min-h-screen bg-white">
      <div className="flex flex-col gap-4 md:flex-row md:justify-between">
        <h3 className="text-4xl md:text-5xl font-bold md:w-1/2 font-serif">Our Team</h3>
        <p className="md:w-3/5">
          Apparently we had reached a great height in the atmosphere, for the
          sky was a dead black, and the stars had ceased to twinkle.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-4 md:mb-36">
        <TeamCard
          img={team1}
          name="Hugo Saavedra"
          position="Developer"
          url="www.facebook.com"
          icon="line-md:facebook"
        />
        <TeamCard
          img={team2}
          name="Angu Tamba"
          position="Manager"
          url="www.email.com"
          icon="entypo:email"
        />
        <TeamCard
          img={team3}
          name="Oka Tomoaki"
          position="Designer"
          url="www.twitter.com"
          icon="uil:twitter"
        />
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:justify-between">
        <h3 className="text-4xl md:text-5xl font-bold md:w-1/2 font-serif">Our Blog</h3>
        <p className="md:w-3/5">
          Apparently we had reached a great height in the atmosphere, for the
          sky was a dead black, and the stars had ceased to twinkle.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-4 mb-10">
        <BlogCard
          subject="Web Design"
          date="Feb 20,2020"
          img={blog1}
          name="Nicolina Lindholm"
          title="Almost before we knew it , we had left the ground"
        />
        <BlogCard
          subject="Trends"
          date="Dec 31,2018"
          img={blog2}
          name="Shen Zhi"
          title="Before we knew it, we had left the ground"
        />
        <BlogCard
          subject="Marketing"
          date="Nov 12,2022"
          img={blog3}
          name="Stephanie Bailey"
          title="We knew it , we had left the ground almost"
        />
      </div>
    </div>
  );
}

export default Team;
