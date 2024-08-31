import React from 'react';
import Profile from '../assets/profile.jpeg'; // Remplace par le chemin de ta photo

function About() {
  return (
    <section id="about" className="p-10 bg-gray-100 flex flex-col md:flex-row items-center">
      {/* Partie Photo */}
      <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img
          src={Profile}
          alt="Profil"
          className="w-64 h-64 object-cover rounded-full border-4 border-gray-300"
        />
      </div>
      
      {/* Partie Texte et Bouton */}
      <div className="md:w-1/2 md:pl-6">
        <h2 className="text-3xl font-bold mb-4">À Propos de Moi</h2>
        <p className="text-lg mb-4">
          Je suis ibrahima camara, un admin sys et reseaux  passionné par la securité des systémes et reseaux et aussi le full Stack. Avec deux ans années d'expérience dans le reseaux et systémes, je suis spécialisé dans le chargé de mission informatique. Mon objectif est de contribuer a la securité systematique du pays.
        </p>
        <a
          href="[URL_de_ton_CV]" // Remplace par le lien de ton CV
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          download // Assure que le lien est un fichier téléchargeable
        >
          Télécharger mon CV
        </a>
      </div>
    </section>
  );
}

export default About;
