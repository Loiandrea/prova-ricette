import React from 'react';
import './Footer.css'; // Importa il file CSS del footer
import instagramIcon from '../icons/instagram.svg'






function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <p>Andrea Loi</p>
                <p>Andrea.loi@hotmail.it</p>
                <div className="social-icons">
                <a href="https://www.instagram.com/loi_andrea_/"
                target='_blank'
                rel='noopener noreferrer'>
            <i className='bx bxl-instagram'></i>
          </a>
          <a href="link al tuo profilo Instagram"
          target='_blank'
          rel='noopener noreferrer'>
            <i class='bx bxl-linkedin' ></i>
          </a>
          <a href="https://github.com/Loiandrea"
          target='_blank'
          rel='noopener noreferrer'>
          <i class='bx bxl-github' ></i>
          </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
