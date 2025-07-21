import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';
import { useTranslation } from 'react-i18next';

function Sidebar() {
  const location = useLocation();
  const { t, i18n } = useTranslation();


  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };


  return (
    <div className="sidebar d-flex flex-column p-3 bg-light " style={{ height: '100vh' }}>
      <h4 className="title">Aiana</h4>
      <Nav className="flex-column">
        <div className="links">
          <Nav.Link
  as={Link}
  to="/"
  className={location.pathname === '/' ? 'active' : ''}
>
  {t('home')}
</Nav.Link>

<Nav.Link
  as={Link}
  to="/elephant"
  className={location.pathname === '/elephant' ? 'active' : ''}
>
  {t('elephant')}
</Nav.Link>

<Nav.Link
  as={Link}
  to="/rhino"
  className={location.pathname === '/rhino' ? 'active' : ''}
>
  {t('rhino')}
</Nav.Link>

<Nav.Link
  as={Link}
  to="/tiger"
  className={location.pathname === '/tiger' ? 'active' : ''}
>
  {t('tiger')}
</Nav.Link>

        </div>
      </Nav>

      {/* Language Switcher Section */}
      <div className="language-switcher mt-5 ">
        <div class="row align-items-end">
        <div className="mb-2">
          <img
            src="https://img.icons8.com/ios-filled/24/globe--v1.png"
            alt="Language"
            width="20"
            className="me-2"
          />
          <span style={{ fontWeight: 'bold' }}>Language</span>
        </div>
        <div className="d-flex flex-column ms-4">
          <button className="lang-link" onClick={() => changeLanguage('en')}>English</button>
          <button className="lang-link" onClick={() => changeLanguage('fr')}>Français</button>
        </div>
      </div>
      </div>
    </div>
    
  );
}

export default Sidebar;
