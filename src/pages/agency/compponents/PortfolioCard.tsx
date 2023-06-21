
type cardProps = {
    img:string
}

function PortfolioCard({img}:cardProps) {
  return (
    <div className="rounded-md h-76 hover:scale-105 transition-transform duration-500">
    <img src={img} className='h-full' />
  </div>
  )
}

export default PortfolioCard