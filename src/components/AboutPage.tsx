import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const { theme } = useTheme();
  return (
    <div className="page-layout">
      <h2 className={`home-heading ${theme.font}`}>About Us</h2>
      <p className={`home-intro ${theme.font}`}>
        This is a generic about page. The layout, colors, and fonts seamlessly adapt to your selected theme. We believe in providing a personalized and intuitive user experience.
      </p>
      <ul className="about-list">
        <li>Our mission is to build beautiful and functional web applications.</li>
        <li>We prioritize user experience and accessibility.</li>
        <li>This app is a demonstration of our multi-theme capabilities.</li>
      </ul>
      <Link to="/" className={`action-button ${theme.colors.secondary}`}>
        Learn More
      </Link>
    </div>
  );
};

export default AboutPage;