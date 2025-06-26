import React from 'react';
import { Helmet } from 'react-helmet';
import './Contact.css';

function Contact() {
  return (
    <>
    <Helmet>
      <title>Contact - John Doe</title>
      <meta name="description" content="Formulaire de contact pour échanger avec John Doe, développeur web full-stack basé à Lyon." />
    </Helmet>
    <section className="contact-section">
      <h2 className="contact-title">Contact</h2>
      <p className="contact-subtitle">Pour me contacter en vue d’un entretien ou d’une future collaboration, merci de remplir le formulaire de contact.</p>
      <div className="underline"></div>

      <div className="contact-content">
        {/* Formulaire de contact */}
        <div className="contact-form">
          <h3>Formulaire de contact</h3>
          <form method="post">
            <input type="text" name="nom" placeholder="Votre nom" required />
            <input type="email" name="email" placeholder="Votre adresse email" required />
            <input type="tel" name="tel" placeholder="Votre numéro de téléphone" />
            <input type="text" name="text" placeholder="Sujet" />
            <textarea name="message" placeholder="Votre message" required></textarea>
            <button type="submit">Envoyer</button>
          </form>
        </div>

        {/* Informations de contact */}
        <div className="contact-info">
          <h3>Mes coordonnées</h3>
          <p><strong>John Doe</strong></p>
          <p>📍 40 rue Laure Diebold<br />69009 Lyon, France</p>
          <p>📞 10 20 30 40 50</p>
          <p>📧 john.doe@gmail.com</p>
          <iframe
            title="Carte"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2665.236115014912!2d4.79561531564247!3d45.77869757910582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb54ffdf21b9%3A0x91d0c67ba61ae3b3!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1614348044100!5m2!1sfr!2sfr"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
    </>
  );
}

export default Contact;


  
  