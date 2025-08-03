export interface Theme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
  font: string;
  layout: string;
}

export interface ThemeContextType {
  theme: Theme;
  setTheme: (themeName: string) => void;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}
