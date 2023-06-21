
type prop = {
  img: string;
};

function TestimonialAvartar({ img }: prop) {
  return (
    <div className="w-20 hover:scale-105 z-20 h-20 flex items-center justify-center rounded-full hover:cursor-pointer ring hover:ring-offset-1  hover:ring-white">
      <img src={img} alt="" />
    </div>
  );
}

export default TestimonialAvartar;
