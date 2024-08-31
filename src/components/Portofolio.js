import React from 'react';
import portfolioImage from '../assets/R.jpg'; // Remplace par le chemin de ta photo

function Portfolio() {
  return (
    <section id="portfolio" className="p-10 bg-white flex flex-col md:flex-row">
      {/* Partie Navigation et Description */}
      <div className="md:w-1/2 flex flex-col justify-between mb-6 md:mb-0">
        <nav className="mb-6">
          <ul className="space-y-2">
            <li><a href="#mobile" className="text-blue-500 hover:underline">Application Mobile</a></li>
            <li><a href="#websites" className="text-blue-500 hover:underline">Sites Web</a></li>
            <li><a href="#applications" className="text-blue-500 hover:underline">Applications</a></li>
          </ul>
        </nav>
        <div>
          <h2 className="text-3xl font-bold mb-4">Projet</h2>
          <p className="text-lg mb-4">
            Découvrez mes projets récents, allant des applications mobiles aux sites web en passant par des solutions logicielles complètes. Chaque projet est conçu pour répondre aux besoins spécifiques de mes clients et offrir une expérience utilisateur exceptionnelle.
          </p>
          <a
            href="#more-projects"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Voir plus
          </a>
        </div>
      </div>

      {/* Partie Photo */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={portfolioImage}
          alt="Portfolio"
          className="w-full h-auto max-w-md object-cover rounded-lg border-4 border-gray-300"
        />
      </div>
    </section>
  );
}

export default Portfolio;
