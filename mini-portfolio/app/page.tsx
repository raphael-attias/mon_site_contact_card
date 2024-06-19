// pages/index.js
import Head from 'next/head';
import Particles from '../app/components/Particles' ;

export default function Home() {
  return (
    <div className="bg-black text-white overflow-hidden">
      <Head>
        <title>Raphaël ATTIAS - Administrateur Systèmes et Réseaux</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Raphaël ATTIAS, étudiant en administration systèmes et réseaux, passionné de cybersécurité, basé à Marseille-Paris-Toulon-Aix. Découvrez mon CV et mes projets." />
        <meta name="keywords" content="Raphaël ATTIAS, administration systèmes et réseaux, cybersécurité, CV, projets, étudiant, Marseille, Paris, Toulon, Aix" />
        <meta property="og:title" content="Raphaël ATTIAS - Administrateur Systèmes et Réseaux" />
        <meta property="og:description" content="Étudiant en administration systèmes et réseaux, passionné de cybersécurité, basé à Marseille-Paris-Toulon-Aix. Découvrez mon CV et mes projets." />
        {/* Ajoutez les autres meta tags ici */}
      </Head>
      <div className="container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl">ATTIAS Raphaël</h1>
        <h3 className="text-xl">Secteur : Marseille-Paris-Toulon-Aix</h3>
        <h5 className="text-lg text-left mx-auto max-w-[600px]">
          Étudiant de 19 ans en administration systèmes et réseaux Sportif, polyvalent, créatif et innovant. J'ai atteint un niveau national en voile militaire, démontrant mon engagement et ma détermination. Ma passion pour la cybersécurité se marie avec ma volonté d'être un atout pour toute entreprise qui valorise l'innovation, la polyvalence et la motivation. Prêt à contribuer à un monde numérique plus sûr et à exceller dans des projets stimulants. Ouvert aux opportunités et aux échanges constructifs.
        </h5>
        <a href="/CV Raphael-ATTIAS.pdf" download className="btn">Télécharger mon CV</a>
        <a href="mailto:raphael.attias@laplateforme.io" className="btn">Envoyer un mail</a>
        <a href="https://www.linkedin.com/in/raphael-attias-b3090b298/" className="btn">Mon LinkedIn</a>
        <a href="/ATTIAS Raphaël.vcf" download className="btn">Prenez ma fiche contact</a>
        <a href="https://github.com/raphael-attias" className="btn">Mon GitHub</a>
      </div>
      <Particles />
    </div>
  );
}
