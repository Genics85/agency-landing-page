import { InlineIcon } from "@iconify/react/dist/iconify.js";

type cardProp = {
    img:string,
    name:string,
    position:string,
    icon:string,
    url:string
}

function TeamCard({img,name,position,icon,url}:cardProp) {
  return (
    <div className="flex flex-col gap-y-3 ">
            <div className="relative ">
                <img src={img} className="" alt="" />
                <a href={url} className="grid place-items-center absolute bottom-5 right-5 w-12 h-12 bg-white hover:bg-textGrey shadow rounded-md">
                    <InlineIcon className="text-3xl" icon={icon}/>
                </a>
            </div>
            <h3 className="text-1 font-bold">{name}</h3>
            <p className="text-textGrey">{position}</p>
        </div>
  )
}

export default TeamCard