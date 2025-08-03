import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import HomePage from './components/HomePage';
const AppStyles = () => (
  <style>
    {`
      @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

      /* Base Styles & Animations */
    .app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw; /* ADD THIS */
  transition: background-color 0.5s ease, color 0.5s ease;
  background-color: inherit; /* ADD THIS */
  color: inherit; /* ADD THIS */
  overflow-x: hidden; /* Optional: to prevent horizontal scroll */
}


      .main-content {
        flex: 1;
        margin-top: 64px; /* Space for the fixed header */
      }

      /* Header */
      .header {
        padding: 1rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 10;
        color: white;
        transition: background-color 0.5s ease;
      }
      
      .header-nav {
        display: flex;
        align-items: center;
      }
      
.header-brand img {
  display: block;
  height: 100%;
  object-fit: contain;
}

      
      .nav-links {
        display: none;
        list-style: none;
        margin: 0;
        padding: 0;
      }

      @media (min-width: 640px) {
        .nav-links {
          display: flex;
          gap: 1rem;
        }
      }

      .nav-link-item {
        color: inherit;
        text-decoration: none;
        transition: text-decoration 0.3s ease;
      }

      .nav-link-item:hover {
        text-decoration: underline;
      }

      .theme-switcher {
        padding: 0.5rem;
        border-radius: 0.375rem;
        color: #1f2937;
        background-color: #ffffff;
      }

.product-grid {
  display: grid;
  gap: 2rem;
  justify-items: center;
  padding: 2rem 1rem;

  /* Mobile - 1 column by default */
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

@media (min-width: 640px) {
  /* Tablet - 2 columns */
  .product-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  /* Desktop - 3 columns */
  .product-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}


.product-card {
   width: 100%;
  max-width: 100%; /* Important: remove max-width: 300px if causing overflow */
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}


.product-card:hover {
  transform: scale(1.05);
}


      .product-card:hover {
        transform: scale(1.05);
      }

      .product-image {
        width: 100%;
        height: 12rem;
        object-fit: contain;
        border-top-left-radius: 0.75rem;
        border-top-right-radius: 0.75rem;
      }

      .product-title {
        font-size: 1.125rem;
        font-weight: bold;
        margin-top: 0.5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .product-category {
        font-size: 0.875rem;
        margin-top: 0.25rem;
        color: #4b5563;
      }

      .product-price {
        font-size: 1.25rem;
        font-weight: bold;
        margin-top: 0.5rem;
      }

      /* Layouts */
      .page-layout {
        width: 100%;
        max-width: 800px; /* A single max-width for all centered content */
        margin: 0 auto;
        padding: 1.5rem;
      }

      @media (min-width: 640px) {
        .page-layout {
          padding: 2.5rem;
        }
      }

      @media (min-width: 1024px) {
        .page-layout {
          padding: 4rem;
        }
      }

      .home-heading {
        font-size: 2.25rem;
        line-height: 2.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
      }

      @media (min-width: 640px) {
        .home-heading {
          font-size: 3rem;
          line-height: 1;
        }
      }

      .home-intro {
        margin-bottom: 1.5rem;
        font-size: 1.125rem;
        max-width: 42rem;
      }

      .action-button {
        color: white;
        padding: 0.75rem 1.5rem;
        border-radius: 9999px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        transition: opacity 0.3s ease;
      }

      .action-button:hover {
        opacity: 0.9;
      }

      .product-section {
        margin-top: 3rem;
      }

      .product-section h3 {
        font-size: 1.875rem;
        font-weight: 600;
        margin-bottom: 1rem;
      }

      .text-center {
        text-align: center;
      }

      .button-theme-3 {
        padding: 1rem 2rem;
        border-radius: 0.75rem;
        transform: rotate(0deg);
        transition: transform 0.3s ease;
      }

      .button-theme-3:hover {
        transform: rotate(2deg);
      }
      
      .form-group {
        margin-bottom: 1rem;
      }

      .form-group label {
        display: block;
        font-size: 1.125rem;
        font-weight: 500;
      }

      .form-group input, .form-group textarea {
        margin-top: 0.25rem;
        display: block;
        width: 100%;
        border-radius: 0.375rem;
        border: 1px solid #d1d5db;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        padding: 0.5rem;
      }

      /* Theme-specific styles */
      .theme-1-primary { background-color: #4f46e5; }
      .theme-1-secondary { background-color: #c7d2fe; }
      .theme-1-background { background-color: #f3f4f6; }
      .theme-1-text { color: #1f2937; }
      .font-sans { font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif; }

      .theme-2-primary { background-color: #374151; }
      .theme-2-secondary { background-color: #14b8a6; }
      .theme-2-background { background-color: #111827; }
      .theme-2-text { color: #e5e7eb; }
      .font-serif-bold { font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif; font-weight: bold; }

      .theme-3-primary { background-color: #9333ea; }
      .theme-3-secondary { background-color: #fcd34d; }
      .theme-3-background { background-color: #ccfbf1; }
      .theme-3-text { color: #111827; }
      .font-pacifico { font-family: 'Pacifico', cursive; }
    `}
  </style>
);

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <>
      <AppStyles />
      <div className={`app-container ${theme.layout} ${theme.colors.background} ${theme.colors.text}`}>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </>
  );
};

const App = () => (
  <ThemeProvider>
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  </ThemeProvider>
);

export default App;