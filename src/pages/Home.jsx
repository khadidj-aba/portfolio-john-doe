import { Helmet } from "react-helmet";
import React from 'react';
import '../index.css';
import heroImage from '../assets/images/hero-bg.jpg';
import aboutImage from '../assets/images/john-doe-about.jpg';

export default function Home() {
  return (
    <>
    <Helmet>
  <title>Accueil - John Doe</title>
  <meta name="description" content="Bienvenue sur le portfolio de John Doe, développeur web." />
</Helmet>

    <main>
      <section
        className="hero d-flex justify-content-center align-items-center text-center text-white"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '80vh'
        }}
      >
        <div>
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur web full-stack</h2>
        </div>
      </section>

      <section className="container my-5 bg-white p-4 rounded shadow">
        <div className="row">
          <div className="col-md-6">
            <h5 className="border-bottom pb-2 text-primary">À propos</h5>
            <img
              src={aboutImage}
              alt="john doe"
              className="img-fluid rounded my-3"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus
              consectetur deserunt perspiciatis earum ut, delectus ratione impedit aut iure
              molestiae autem officiis. Saepe.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus
              consectetur deserunt perspiciatis earum ut, delectus ratione impedit aut iure
              molestiae autem officiis. Saepe.
            </p>
          </div>

          <div className="col-md-6">
            <h5 className="border-bottom pb-2 text-primary">Mes compétences</h5>
            <div className="mb-3">
              HTML5 <div className="progress"><div className="progress-bar bg-danger" style={{ width: '90%' }}></div></div>
            </div>
            <div className="mb-3">
              CSS3 <div className="progress"><div className="progress-bar bg-primary" style={{ width: '80%' }}></div></div>
            </div>
            <div className="mb-3">
              JAVASCRIPT <div className="progress"><div className="progress-bar bg-warning" style={{ width: '70%' }}></div></div>
            </div>
            <div className="mb-3">
              PHP <div className="progress"><div className="progress-bar bg-success" style={{ width: '60%' }}></div></div>
            </div>
            <div className="mb-3">
              REACT <div className="progress"><div className="progress-bar bg-primary" style={{ width: '50%' }}></div></div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
