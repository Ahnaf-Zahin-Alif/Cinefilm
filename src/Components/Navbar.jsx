import { Clapperboard } from "lucide-react";


export default function Navbar () {
  return (
    <header className="absolute top-0 left-0 right-0 w-full px-8 py-5 flex items-center justify-between z-50 backdrop-blur-md border-b border-white/10 bg-black/10">


    <div className="flex items-center gap-3 cursor-pointer">
      <div className="w-9 h-9 rounded-lg bg-gradient-to-tr 
      from-indigo-500 to-cyan-400 flex items-center justify-center">
        <Clapperboard className="w-5 h-5 text-white"/>
      </div>
    <span className="text-xl font-bold tracking-tight text-white">
      CineFilm
    </span>

    </div>

    <nav className="flex items-center gap-8 text-sm font-medium">
      <span className="text-xl text-gray-300 hover:text-white cursor-pointer transition">
          Home
      </span>

      <span className="text-xl text-gray-300 hover:text-white cursor-pointer transition">
          Genres

      </span>

      <span className="text-xl text-gray-300 hover:text-white cursor-pointer transition">
          Movies

      </span>

    </nav>




      
    </header>
  );
};