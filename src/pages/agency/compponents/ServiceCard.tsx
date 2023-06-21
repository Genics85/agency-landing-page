
type cardProps = {
    title:string,
    img:string,
    description:string,
    color:string
}

function ServiceCard({title,img,description,color}:cardProps) {
  return (
    <div className="flex md:w-1/3 flex-col gap-3 items-start">
      <div className={` flex items-center justify-center h-32 w-32 ${color} rounded-md`}>
        <img src={img} className="w-3/5 hover:w-4/5 transition-transform duration-500 " alt="" />
      </div>
      <h4 className="text-2xl font-bold">{title}</h4>
      <p className="text-textGrey">
        {description}
      </p>
    </div>
  );
}

export default ServiceCard;
