type elementProps = {
    img:string,
    title:string,
    description:string,
    gradient:string
}

function FeatureGridElement({img,title,description,gradient}:elementProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className={`w-16 h-16 flex items-center justify-center rounded-full ${gradient}`}>
        <img src={img} alt="" />
      </div>
      <h3 className="font-bold">{title}</h3>
      <p className="text-textGrey">
        {description}
      </p>
    </div>
  );
}

export default FeatureGridElement;
