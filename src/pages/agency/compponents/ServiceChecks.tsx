import { InlineIcon } from "@iconify/react/dist/iconify.js";

type checkProps ={
    subject:string
}
function ServiceChecks({subject}:checkProps) {
  return (
    <div className="flex gap-4">
      <div className="w-6 h-6 flex items-center justify-center text-white bg-agencyAccent rounded-full">
        <InlineIcon icon="mingcute:check-2-fill"/>
      </div>
      <p className="text-textGrey">{subject}</p>
    </div>
  );
}

export default ServiceChecks;
