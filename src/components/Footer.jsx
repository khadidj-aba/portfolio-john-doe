import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">

          {/* Coordonnées */}
          <div className="col-md-4 mb-3">
            <h5>John Doe</h5>
            <p>40 rue Laure Diebold<br />
              69009 Lyon, France<br />
              10 20 30 40 50<br />
              john.doe@gmail.com
            </p>
            <div className="d-flex gap-3 fs-4">
              <a href="#" className="footer-icon" aria-label="GitHub"><FaGithub /></a>
              <a href="#" className="footer-icon" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" className="footer-icon" aria-label="LinkedIn"><FaLinkedin /></a>
            </div>
          </div>

          {/* Liens utiles */}
          <div className="col-md-4 mb-3">
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="footer-link">Accueil</Link></li>
              <li><Link to="/services" className="footer-link">Services</Link></li>
              <li><Link to="/portfolio" className="footer-link">Portfolio</Link></li>
              <li><Link to="/contact" className="footer-link">Me contacter</Link></li>
              <li><Link to="/mentions" className="footer-link">Mentions légales</Link></li>
            </ul>
          </div>

          {/* Réalisations */}
          <div className="col-md-4 mb-3">
            <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li>Fresh Food</li>
              <li>Restaurant Akira</li>
              <li>Espace bien-être</li>
              <li>SEO</li>
              <li>Création d’une API</li>
              <li>Maquette d’un site</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

