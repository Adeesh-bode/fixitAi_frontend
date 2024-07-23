import Image from "next/image";
import Link from "next/link";

import Logo from "../../../assets/logo.svg";



const Header = () => {
  return (
    <div className=" w-full h-16 flex justify-between items-center px-24 py-2 text-xl  ">
        <div className="text-2xl flex justify-between items-center gap-3" >
            <div>
              <Image src={Logo} alt="logo" width={25} height={25} />
            </div>
            <span>fiXit</span>
          </div>
        <nav className="flex justify-between items-center gap-7">
            <Link href="/aboutus">About Us</Link>
            <Link href="/callingaudit">Calling Audit</Link>
        </nav>
    </div>
  )
}

export default Header; 