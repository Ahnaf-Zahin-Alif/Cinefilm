import { X } from 'lucide-react';

export default function MoviesModal({ movie, onClose }) {
  if (!movie) return null;

  return (
    // 1. Dark background overlay
    <div 
      onClick={onClose}
      className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
    >
      {/* 2. Modal Box */}
      <div 
        onClick={(e) => e.stopPropagation()} 
        className="bg-gray-900 border border-gray-700 rounded-xl max-w-lg w-full p-6 text-white relative"
      >
        {/* Top-Right [ X ] */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Movie Backdrop / Poster */}
        <img 
          src={movie.image?.original || movie.image?.medium} 
          alt={movie.name}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />

        {/* Title */}
        <h2 className="text-2xl font-bold mb-2">{movie.name}</h2>

        {/* Rating & Release */}
        <div className="flex gap-4 text-sm text-gray-400 mb-4">
          <span>⭐ Rating: {movie.rating?.average || 'N/A'}</span>
          <span>📅 Release: {movie.premiered ? movie.premiered.slice(0, 4) : 'N/A'}</span>
        </div>

        {/* Overview */}
        <h3 className="font-semibold text-sm mb-1">Overview:</h3>
        <p className="text-gray-300 text-sm mb-6 max-h-32 overflow-y-auto">
          {movie.summary ? movie.summary.replace(/<[^>]+>/g, '') : 'No overview available.'}
        </p>

        {/* Bottom Close Button */}
        <div className="flex justify-end">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}