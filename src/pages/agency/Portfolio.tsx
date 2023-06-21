import portfolio1 from "../../assets/agency/portfolio1.png";
import portfolio2 from "../../assets/agency/portfolio2.png";
import portfolio3 from "../../assets/agency/portfolio3.png";
import portfolio4 from "../../assets/agency/portfolio4.png";
import portfolio5 from "../../assets/agency/portfolio5.png";
import portfolio6 from "../../assets/agency/portfolio6.png";
import PortfolioCard from "./compponents/PortfolioCard";

function Portfolio() {
  return (
    <div className="p-5 flex flex-col items-center gap-12 md:p-20 lg:p-24 min-h-screen bg-white">
      <div className="flex  flex-col w-full gap-4 md:flex-row md:justify-between">
        <h3 className="md:w-1/2 text-4xl md:text-5xl font-bold font-serif">Portfolio</h3>
        <p className=""> sunt id officia cillum voluptate est ut consectetur tempor
        exercitation do aute mollit laboris veniam another for aesthetics.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <PortfolioCard img={portfolio1} />
        <PortfolioCard img={portfolio2} />
        <PortfolioCard img={portfolio3} />
        <PortfolioCard img={portfolio4} />
        <PortfolioCard img={portfolio5} />
        <PortfolioCard img={portfolio6} />
      </div>
      <button className="border border-agencyAccent text-agencyAccent hover:cursor-pointer hover:bg-agencyAccent hover:text-white rounded-md px-4 py-1">
        Explore All
      </button>
    </div>
  );
}

export default Portfolio;
