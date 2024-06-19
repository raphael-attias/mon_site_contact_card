// pages/index.js

import Head from 'next/head';
import ParticlesComponent from '../app/components/Particles' ;

const Home = () => {
  return (
    <div>
      <Head>
        <title>Accueil - Votre Nom</title>
        <meta name="description" content="Description de votre page d'accueil" />
        {/* Ajoutez d'autres meta tags ici si nécessaire */}
      </Head>

      {/* Contenu de votre page d'accueil */}
      <div className="container">
        <h1>Bienvenue sur mon site</h1>
        <p>Contenu de votre page d'accueil...</p>
      </div>

      {/* Composant des particules en arrière-plan */}
      <ParticlesComponent />
    </div>
  );
};

export default Home;
