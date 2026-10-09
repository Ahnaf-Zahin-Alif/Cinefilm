import { Clapperboard} from "lucide-react";
import { FaGithub , FaFacebook} from "react-icons/fa";


export default function Footer () {
  return (
    <footer className="fixed bottom-0 left-0 right-0 mx-4 mb-3 rounded-2xl w-full px-8 py-5 flex items-center justify-between z-50 backdrop-blur-md border-b border-white/10 bg-black/10">

    <div className="flex items-center gap-3 cursor-pointer">
      <div className="w-9 h-9 rounded-lg bg-gradient-to-tr 
      from-indigo-500 to-cyan-400 flex items-center justify-center">
        <Clapperboard className="w-5 h-5 text-white"/>
      </div>
    <span className="text-xl font-bold tracking-tight text-white">
      CineFilm
    </span>

    </div>

      <p className="text-white">
        @2026 CineFilm
      </p>

    <div className=" flex items-center gap-4">

      <FaGithub className="w-5 h-5 text-gray-400 hover:text-white transition cursor-pointer" />

      <FaFacebook className="w-5 h-5 text-gray-400 hover:text-white transition cursor-pointer" />


    </div>
    


      
    </footer>
  );
};