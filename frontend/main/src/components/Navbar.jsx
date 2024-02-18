import { BsGithub, BsIncognito } from "react-icons/bs";
import { Link } from "react-router-dom";
import Dropdown from "./dropdown";
import { LuLogIn } from "react-icons/lu";
export default function Navbar() {
  const githubLink = () => {
    // this change later
    window.open("https://github.com/vishalpatil20/Web_tech", "_blank"); 
  };


  return (
    <nav className="fixed inset-x-0 w-screen md:w-1/2 mx-auto flex items-center justify-around md:mt-4 py-3 bg-[#f7f7f7] tracking-wide shadow-md z-50 md:rounded-full">
      <ul className="flex items-center mx-5">
        <li className="font-semibold text-[0.8rem] md:text-[1rem]">
          <Link>Manage Notes</Link>
        </li>
        <li className="ml-[20px] hover:text-black text-base hidden md:block ">
          <Link className="active:font-bold" to={"/"}>
            HOME
          </Link>
        </li>
        <li className="ml-2 hover:text-black cursor-pointer hidden md:block ">
          <Link className="active:font-bold" to={"labs/"}>
           NOTES
          </Link>
          </li>

          <li className="ml-2 hover:text-black cursor-pointer hidden md:block ">
          <Link className="active:font-bold" to={"play/"}>
            PLAY AREA
          </Link>
        </li>
        
      </ul>
      <div> </div>
      <div className="flex items-center">
        <BsGithub
          className="mx-2 cursor-pointer"
          style={{ fontSize: 20 }}
          onClick={githubLink}
        />
        <Link className="active:font-bold" to={"sign/"}> 
        <LuLogIn
          className="mx-2 cursor-pointer"
          style={{ fontSize: 20 }}
        />        
        </Link>
        <Dropdown />
      </div>
    </nav>
  );
}
