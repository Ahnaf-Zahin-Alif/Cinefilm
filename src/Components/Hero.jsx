import heroBg from '../assets/hero.png';
import {Link} from 'react-router';

export default function Hero () {
  return (

    <section className="flex flex-col items-center justify-center relative min-h-screen px-4 text-center overflow-hidden">

      <img
      src={heroBg}
      alt="Backdrop"
      className="absolute inset-0 w-full h-full object-cover object-center opacity-50">

          
      
      </img>

   <div className="flex flex-col items-center text-center relative z-10 w-full ">

    <h1 className="text-5xl font-extrabold text-white">
      DISCOVER {' '}
    <span className=
    "bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">

      MOVIES
    </span>


    </h1>

    <p className="mt-5 text-gray-300/80 max-w-lg leading-relaxed">
      Explore and discover your favorite movies around the world
    </p>


    <Link to = "/movies" 
    className="font-semibold mt-8 px-6 py-3 bg-gradient-to-r from-bg-purple-500 to-cyan-500 rounded-full shadow-[0_0_25px_rgba(168,85,247,0.5)] text-white cursor-pointer hover:scale-105 transition-transform duration-300">

      Explore now →
    </Link>




   </div>


    </section>
  );
};
