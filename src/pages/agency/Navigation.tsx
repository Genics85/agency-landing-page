import { InlineIcon } from "@iconify/react";
import { useState } from "react";

function Navigation() {
  const [mobileNavOpened, setMobielNavOpened] = useState(false);
  return (
    <div className="z-20 sticky top-0">
      <nav className="px-5 md:px-20 lg:px-24 relative p-3 bg-agencySecondary h-14 flex justify-between items-center">
        <h3 className="text-3xl font-bold">AGNC</h3>
        <ul className="gap-x-8 hidden md:flex">
          <li>
            <a href="#courses" className="hover:cursor-pointer hover:text-agencyAccent">
              {" "}
              About
            </a>
          </li>
          <li>
            <a href="#about" className="hover:cursor-pointer hover:text-agencyAccent">
              {" "}
              Services
            </a>
          </li>
          <li>
            <a href="#services" className="hover:cursor-pointer hover:text-agencyAccent">
              Cases{" "}
            </a>
          </li>
          <li>
            <a href="#events" className="hover:cursor-pointer hover:text-agencyAccent">
              Blog{" "}
            </a>
          </li>
          <li>
            <a href="#blog" className="hover:cursor-pointer hover:text-agencyAccent">
              {" "}
              Contact
            </a>
          </li>
        </ul>
        <button className="hidden border rounded-md border-agencyAccent text-agencyAccent px-3 py-1 text-sm hover:text-white hover:bg-agencyAccent md:block">
          CONTACT US
        </button>
        <button
          onClick={() => {
            setMobielNavOpened(!mobileNavOpened);
          }}
          className="h-10 flex justify-center items-center w-10 text-3xl text-agencyAccent rounded-md border-agencyAccent border-2 md:hidden"
        >
          <InlineIcon
            icon={mobileNavOpened ? "ep:close-bold" : "ci:hamburger-md"}
          />
        </button>
      </nav>
      <nav
        className={`bg-agencySecondary ${mobileNavOpened ? "" : "hidden"} md:hidden`}
      >
        <ul className="flex flex-col space-y-5 p-3 ">
          <li>
            <a href="#courses" className="hover:cursor-pointer hover:text-agencyAccent">

              {" "}
              Courses
            </a>
          </li>
          <li>
            <a href="#about" className="hover:cursor-pointer hover:text-agencyAccent">

              {" "}
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:cursor-pointer hover:text-agencyAccent">

              Services{" "}
            </a>
          </li>
          <li>
            <a href="#events" className="hover:cursor-pointer hover:text-agencyAccent">

              Events{" "}
            </a>
          </li>
          <li>

            <a href="#blog" className="hover:cursor-pointer hover:text-agencyAccent">

              {" "}
              Blog
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
