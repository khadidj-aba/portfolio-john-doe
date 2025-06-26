import './services.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import banner from '../assets/images/banner.jpg';
import { FaPencilRuler, FaCode, FaSearch } from 'react-icons/fa';

export default function Services() {
  return (
    <>
    <Helmet>
      <title>Services - John Doe</title>
      <meta
        name="description"
        content="Découvrez les services proposés par John Doe : développement web, responsive design, SEO et plus."
      />
    </Helmet>
    <main>
      {/* BANNIÈRE image */}
      <div
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px',
        }}
      ></div>

      {/* TITRE */}
      <section className="text-center bg-white py-5">
        <h1 className="fw-bold">Mon offre de services</h1>
        <p className="mt-3">Voici les prestations sur lesquelles je peux intervenir</p>
        <div style={{ width: '380px', height: '4px', backgroundColor: '#007bff', margin: '20px auto' }}></div>
      </section>

      {/* SERVICES */}
      <section className="container my-5">
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="border rounded p-4 h-100">
              <FaPencilRuler size={32} className="mb-3 text-primary" />
              <h5 className="fw-bold">UX Design</h5>
              <p>L’UX Design est une discipline qui consiste à concevoir des produits(sites web, applications mobiles, logiciels, objets connectés, etc) en placant l'utilisateur au centre des préoccupations. l'objectif est de rendre l'experience utilisateur la plus fluide et  agréable possible.</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="border rounded p-4 h-100">
              <FaCode size={32} className="mb-3 text-primary" />
              <h5 className="fw-bold">Développement web</h5>
              <p>Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript,PHP,etc) et des frameworks (Bootstrap, React, Angular, etc)</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="border rounded p-4 h-100">
              <FaSearch size={32} className="mb-3 text-primary" />
              <h5 className="fw-bold">Référencement</h5>
              <p>Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche(Google, Bing, Yahoo, etc.). l'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
