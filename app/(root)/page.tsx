import Image from "next/image";

import { MdKeyboardArrowRight } from "react-icons/md";


export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-center gap-12  font-medium pb-28 ">

      <div className="text-5xl blue-gradient leading-tight">
        Fix your sales
      </div>

      <div className="md:w-2/3 text-center text-5xl flex flex-col justify-between gap-4 ">
        <div className="blue-gradient leading-tight">
          Enabling Human Intelligence 
        </div>
        <div className="blue-gradient leading-tight" >
          with Artificial Intelligence
        </div>

      </div>
      
      <div className="w-fit text-orange-400 text-xl flex justify-between items-center gap-2 ">
          <span> Join the wishlist </span> 
          <MdKeyboardArrowRight size={30} />
      </div>

    </main>
  );
}
