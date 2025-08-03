import  { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { type Product } from '../context/types';

const ProductList = () => {
  const { theme } = useTheme();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=6');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <div className="page-layout">Loading products...</div>;
  if (error) return <div className="page-layout" style={{ color: 'red' }}>Error: {error}</div>;

  const getBackgroundColor = () => {
    switch (theme.colors.secondary) {
      case 'theme-1-secondary': return '#c7d2fe';
      case 'theme-2-secondary': return '#14b8a6';
      case 'theme-3-secondary': return '#fcd34d';
      default: return '#ffffff';
    }
  };

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card" style={{ backgroundColor: getBackgroundColor() }}>
          <img src={product.image} alt={product.title} className="product-image" />
          <h3 className={`product-title ${theme.font}`}>{product.title}</h3>
          <p className={`product-category ${theme.font}`}>
            {product.category}
          </p>
          <p className={`product-price ${theme.font}`}>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;