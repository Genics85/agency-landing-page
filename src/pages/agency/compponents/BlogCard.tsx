
type cardProp = {
    img:string,
    name:string,
    subject:string,
    title:string,
    date:string,
}

function BlogCard({img,name,subject,title,date}:cardProp) {
  return (
    <div className="flex flex-col gap-4 rounded-md">
    <div className="">
        <img src={img} className="rounded-md" />
    </div>
    <p className="text-agencyAccent font-semibold">{subject}</p>
    <p className="font-bold  w-10/12">{title}</p>
    <div className="flex gap-5">
        <p>{name}</p>
        <p className="text-textGrey">{date}</p>
    </div>
</div>
  )
}

export default BlogCard