import { Helmet } from "react-helmet";
import React from "react";
import "./Mentions.css";

const Mentions = () => {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
        <title>Mentions légales - John Doe</title>
      </Helmet>

      <section className="mentions">
        <h1>Mentions</h1>
        <hr className="underline" />

        {/* Éditeur du site */}
        <details className="legal-section">
          <summary>Éditeur du site</summary>
          <div>
            <p><strong>John Doe</strong></p>
            <p>
              <span role="img" aria-label="adresse">🏢</span> 40 rue Laure Diebold<br />
              69009 Lyon, France
            </p>
            <p>
              <span role="img" aria-label="téléphone">📞</span> 10 20 30 40 50
            </p>
            <p>
              <span role="img" aria-label="email">📧</span>{" "}
              <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
            </p>
          </div>
        </details>

        {/* Hébergeur */}
        <details className="legal-section">
          <summary>Hébergeur</summary>
          <div>
            <p><strong>Hostinger</strong></p>
            <p>
              <span role="img" aria-label="site web">🌐</span>{" "}
              <a href="https://www.hostinger.fr" target="_blank" rel="noopener noreferrer">
                www.hostinger.fr
              </a>
            </p>
          </div>
        </details>

        {/* Crédits */}
        <details className="legal-section">
          <summary>Crédits</summary>
          <div>
            <p>Site réalisé dans le cadre d’un projet de formation.</p>
            <p>
              Images libres de droit provenant de{" "}
              <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a>.
            </p>
          </div>
        </details>
      </section>
    </>
  );
};

export default Mentions;
