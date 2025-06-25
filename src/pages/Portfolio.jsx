import React from "react";
import { Helmet } from "react-helmet";
import freshFood from "../assets/images/fresh-food.jpg";
import restaurant from "../assets/images/restaurant-japonais.jpg";
import bienEtre from "../assets/images/espace-bien-etre.jpg";
import seo from "../assets/images/seo.jpg";
import coder from "../assets/images/coder.jpg";
import screens from "../assets/images/screens.jpg";
import banner from "../assets/images/banner.jpg";

export default function Portfolio() {
  const projets = [
    {
      image: freshFood,
      titre: "Fresh Food",
      description: "Site de vente de produits frais en ligne",
      techno: "PHP & MySQL",
      lien: "#"
    },
    {
      image: restaurant,
      titre: "Restaurant Akira",
      description: "Site vitrine d’un restaurant japonais",
      techno: "WordPress",
      lien: "#"
    },
    {
      image: bienEtre,
      titre: "Espace bien-être",
      description: "Site vitrine pour un institut de bien-être",
      techno: "Laravel",
      lien: "#"
    },
    {
      image: seo,
      titre: "SEO",
      description: "Amélioration du référencement d’un site e-commerce",
      techno: "Outils SEO",
      lien: "#"
    },
    {
      image: coder,
      titre: "Création d’une API",
      description: "Création d’une API RESTful publique",
      techno: "PHP - SYMFONY",
      lien: "#"
    },
    {
      image: screens,
      titre: "Maquette d’un site web",
      description: "Création de prototype d’un site",
      techno: "Figma",
      lien: "#"
    }
  ];

  return (
    <>
       <Helmet>
        <title>Portfolio - John Doe</title>
        <meta name="description" content="Découvrez les projets réalisés par John Doe." />
      </Helmet>
      
      {/* Bannière en haut */}
      <div
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "180px",
          width: "100%",
        }}
      ></div>

      {/* Contenu Portfolio */}
      <main className="portfolio container py-5">
        <h1 className="text-center mb-2">Portfolio</h1>
        <p className="text-center text-muted mb-4">
          Voici quelques-unes de mes réalisations.
        </p>

        <div className="row">
          {projets.map((projet, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow">
                <img
                  src={projet.image}
                  className="card-img-top"
                  alt={projet.titre}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{projet.titre}</h5>
                  <p className="card-text">{projet.description}</p>
                  <p className="text-muted">{projet.techno}</p>
                  <a href={projet.lien} className="btn btn-primary">
                    Voir le site
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

