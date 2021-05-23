import React from 'react';
import footerLogo from '../assets/images/logo-footer.svg';

import Container from 'components/Container';

const Footer = () => {
  return (
    <footer>
      <svg width="100%" viewBox="0 0 375 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0L21 3C42 7 83 15 125 15C167 15 208 7 250 7C292 7 333 15 354 18L375 22V56H354C333 56 292 56 250 56C208 56 167 56 125 56C83 56 42 56 21 56H0V0Z" fill="#0B232E"/>
</svg>
      <Container>
        <div className="contents">
        <img src={footerLogo} width="150px" alt="Squid & Ink" />
            <ul>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Squid & Ink</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;