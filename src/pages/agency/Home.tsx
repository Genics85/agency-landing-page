import home from "../../assets/agency/home.png"
function Home() {
  return (
    <div className='p-5 flex flex-col md:flex-row gap-4 md:justify-between items-center md:p-20 lg:p-24 h-[calc(100vh-3.5rem)] bg-gradient-to-t from-agencyPrimary to-agencySecondary overflow-hidden'>
        <div className="flex w-full flex-col gap-4 items-start md:w-2/3">
            <p className="text-agencyAccent font-bold">CREATIVE AGENCY</p>
            <h4 className="text-6xl font-serif font-semibold">
                We Make <br/> Websites.
            </h4>
            <p>Officia qui elit laboris laborum esse proident aliqua minim.</p>
            <button className="border rounded-md border-agencyAccent py-1 px-2 bg-agencyAccent text-white hover:bg-transparent hover:text-agencyAccent">
                Explore Our Work
            </button>
        </div>
        <div className=" -mx-8 md:-mr-20 lg:-mr-24 ">
            <img src={home} alt="" />
        </div>
    </div>
  )
}

export default Home