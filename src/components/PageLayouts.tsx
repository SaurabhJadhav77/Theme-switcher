import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import ProductList from './ProductList';

export const Theme1Layout = () => {
  const { theme } = useTheme();

  return (
    <div className="page-layout">
      <h2 className={`home-heading ${theme.font}`}>Home Page</h2>
      <p className={`home-intro ${theme.font}`}>
        Welcome to the minimalist light theme! This is a simple and clean layout focusing on
        readability with a crisp sans-serif font.
      </p>
      <Link to="/" className={`action-button ${theme.colors.primary}`}>
        Explore Now
      </Link>
      <div className="product-section">
        <h3 className={`${theme.font}`}>Featured Products</h3>
        <ProductList />
      </div>
    </div>
  );
};

export const Theme2Layout = () => {
  const { theme } = useTheme();

  return (
    <div className="page-layout">
      <h2 className={`home-heading ${theme.font}`}>Home Page</h2>
      <p className={`home-intro ${theme.font}`}>
        This is the dark mode theme, featuring a sidebar layout for easy navigation and a sophisticated serif font.
      </p>
      <Link to="/" className={`action-button ${theme.colors.secondary}`}>
        View Details
      </Link>
      <div className="product-section">
        <h3 className={`${theme.font}`}>Trending Items</h3>
        <ProductList />
      </div>
    </div>
  );
};

export const Theme3Layout = () => {
  const { theme } = useTheme();

  return (
    <div className="page-layout text-center">
      <h2 className={`home-heading ${theme.font}`}>Welcome!</h2>
      <p className={`home-intro ${theme.font}`}>
        Explore our vibrant world with a colorful card-based grid layout and a fun, playful font.
      </p>
      <Link to="/" className={`action-button button-theme-3 ${theme.colors.primary}`}>
        Get Started
      </Link>
      <div className="product-section">
        <h3 className={`text-center ${theme.font}`}>Our Awesome Collection</h3>
        <ProductList />
      </div>
    </div>
  );
};