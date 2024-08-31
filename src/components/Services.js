import React from 'react';

function Services() {
  const services = [
    {
      title: 'Développement d\'Applications',
      description: 'Création d\'applications mobiles et web sur mesure pour répondre à vos besoins spécifiques.',
      icon: '📱'
    },
    {
      title: 'Programmation',
      description: 'Développement de solutions logicielles robustes et performantes pour améliorer vos processus métier.',
      icon: '💻'
    },
    {
      title: 'Sécurité',
      description: 'Mise en place de solutions de sécurité pour protéger vos données et vos systèmes contre les menaces.',
      icon: '🔒'
    },
    {
      title: 'Système',
      description: 'Gestion et optimisation de systèmes informatiques pour garantir leur performance et leur fiabilité.',
      icon: '⚙️'
    }
  ];

  return (
    <section id="services" className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
