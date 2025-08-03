import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import Icon from "../assets/Hipster.png" 
const pages = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value);
  };

  return (
    <header className={`header ${theme.colors.primary}`}>
      <div className="header-nav">
<Link to="/" className="header-brand">
  <img src={Icon} alt="Logo" style={{ height: '40px' }} />
</Link>
        <nav>
          <ul className="nav-links">
            {pages.map((page) => (
              <li key={page.name}>
                <Link to={page.path} className="nav-link-item">
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div  className="theme-switcher-container">
        <select
          onChange={handleThemeChange}
          style={{marginRight:'30px'}}
          value={theme.name === "Minimalist Light" ? "theme1" : theme.name === "Dark Sidebar" ? "theme2" : "theme3"}
          className="theme-switcher"
        >
          <option value="theme1">Minimalist Light</option>
          <option value="theme2">Dark Sidebar</option>
          <option value="theme3">Colorful Grid</option>
        </select>
      </div>
    </header>
  );
};

export default Header;