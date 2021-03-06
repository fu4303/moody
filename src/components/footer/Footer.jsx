import React from 'react';
//----------LOCAL FILES--------//
import logo from '../../assets/logo.png';

function Footer(props) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <footer role="contentinfo" className={`footer ${props.newColor}`} id="footer">
      <div className="wrapper">
        <div className="footerFlex">
          <div>
            <img className="footerLogo" src={logo} alt="logo" />
          </div>
          <ul className="socialIcons">
            <li>
              <label htmlFor="printButton">
                <button
                  id="printButton"
                  className="print"
                  onClick={handlePrint}
                  aria-label="Print the page"
                >
                  <i className="fas fa-print"></i>
                </button>
              </label>
            </li>
            <li>
              <a
                href="https://github.com/OksanaSam"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub account"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/oksana-samokhvalova-6b03521b0/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn account"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/oksanadev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter Account"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://open.spotify.com/playlist/2M9DHDbmG4bGKzeyL2auAq"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Spotify playlist"
              >
                <i className="fab fa-spotify"></i>
              </a>
            </li>
          </ul>
        </div>
        <p className="copyright">?? 2020 Oksana Samokhvalova</p>
      </div>
    </footer>
  );
}

export default Footer;
