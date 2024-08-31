import React from 'react';
import logo from '../assets/OIP.jpg'; // Assurez-vous que le chemin du logo est correct

function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto p-5 flex justify-between items-center">
        <div>
          <img src={logo} alt="Logo" className="h-10 w-10" />
        </div>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:text-yellow-500">Accueil</a></li>
          <li><a href="#portfolio" className="hover:text-yellow-500">Portfolio</a></li>
          <li><a href="#experiences" className="hover:text-yellow-500">Expériences</a></li>
          <li><a href="#services" className="hover:text-yellow-500">Services</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
