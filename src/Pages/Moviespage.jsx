import {Search} from 'lucide-react';
import { useEffect, useState } from 'react';
import { getMovies } from '../Hooks/getMovies';

export default function Moviespage () {

    const[query , setQuery] = useState("");
    const[movies , setMovies] = useState([]);

    useEffect(() =>{
        async function loadData() {
            const data = await getMovies("batman")
            setMovies(data);
        }
        
        loadData();
        } , [query])


  return (
    <div className="max-w-7xl mx-auto px-6 pt-28 pb-32">

        <h1 className="text-white font-bold text-3xl">
            Explore Movies
        </h1>
     
        <div className="relative mb-8">

    <Search className="text-white absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"/>
    <input
        type="text"
        value={query}
        onChange={(e) =>
            setQuery(e.target.value)
        }
        placeholder="Search for a Movie"
        className="w-full rounded-lg bg-gray-800 placeholder-white pl-12 pr-4 py-3
        border border-gray-500 text-white"/>


        </div>

        <div className= "grid grid-cols-2 gap-6">


        {movies.map((item) => {
  const movie = item.show; // Remember: TVMaze wraps the show in an item.show object

  return (
    <div 
      key={movie.id} 
      className="bg-gray-900 border border-gray-800 rounded-xl p-3 flex flex-col justify-between"
    >
      {/* 1. Poster Image */}
      <img
        src={movie.image?.medium || "https://placehold.co/210x295/111827/white?text=No+Poster"}
        alt={movie.name}
        className="w-full h-64 object-cover rounded-lg mb-3"
      />

      {/* 2. Movie Title */}
      <h3 className="text-white font-bold text-base truncate mb-1">
        {movie.name}
      </h3>

      {/* 3. Rating & Release Year */}
      <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
        <span>⭐ {movie.rating?.average || "N/A"}</span>
        <span>📅 {movie.premiered ? movie.premiered.slice(0, 4) : "N/A"}</span>
      </div>

      {/* 4. See Details Button */}
      <button className="w-full py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white text-xs font-semibold cursor-pointer transition">
        See Details
      </button>
    </div>
  );
})}







        </div>

    

    </div>
  );
};