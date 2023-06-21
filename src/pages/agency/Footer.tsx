import { InlineIcon } from "@iconify/react/dist/iconify.js";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="p-8 md:p-20 bg-white gap-y-12 md:gap-y-20 min-h-full flex flex-col justify-start items-start">
      <div className="flex flex-col w-full md:flex-row gap-4 justify-between items-center md:items-start">
        <h4 className="font-bold text-4xl font-serif">AGNC</h4>
        <div className="flex flex-col">
          <p className="text-agencyAccent mb-3 font-bold">FEATURES</p>
          <p>Design</p>
          <p>Branding</p>
          <p>Mobile</p>
          <p>Marketing</p>
          <p>Development</p>
        </div>
        <div className="flex flex-col">
          <p className="text-agencyAccent mb-3 font-bold">AGENCY</p>
          <p>About</p>
          <p>Services</p>
          <p>Cases</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <div className="flex-col gap-4">
        <p className="text-agencyAccent mb-3 font-bold">CONTACT</p>

          <div className="flex flex-row gap-3 ">
            <a href="facebook" className="flex items-center justify-center h-8 w-8 rounded-full ">
              <InlineIcon className="w-full h-full text-agencyAccent" icon="jam:facebook" />
            </a >
            <a href="twitter" className="flex items-center justify-center h-8 w-8 rounded-full ">
              <InlineIcon className="w-full h-full text-agencyAccent" icon="uil:twitter" />
            </a >
            <a href="instagram" className="flex items-center justify-center h-8 w-8 rounded-full ">
              <InlineIcon className="w-full h-full text-agencyAccent" icon="cib:instagram" />
            </a >
          </div>
        </div>
      </div>
      <hr className="border-2 w-full" />
      <div className="flex flex-col w-full items-center md:flex-row gap-4 justify-between">
        <div className="flex flex-col md:flex-row gap-2 items-center">
          <p className="text-textGrey">
            Copyright {`\u00A9` + currentYear} | Genics85
          </p>
          <p className="text-textGrey">All Rights Reserved</p>
        </div>
        <div className="flex justify-between md:justify-end gap-4 w-full md:w-1/2">
          <p className="font-bold">Term of Use</p>
          <p className="font-bold">Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
