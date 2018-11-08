import React from 'react';

import './Footer.css';

const Footer = () => {
    return(
      <footer className="footer">
        <div className="footer_content">
          <div className="site_name">
              PdPortrait.hu
          </div>
          <p className="site_footer_copy">
              ©2019
          </p>
        </div>
      </footer>
    );
}

export default Footer;