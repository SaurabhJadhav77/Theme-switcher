import { useTheme } from '../context/ThemeContext';
import { Theme1Layout, Theme2Layout, Theme3Layout } from './PageLayouts';

const HomePage = () => {
  const { theme } = useTheme();
  
  if (theme.name === "Minimalist Light") return <Theme1Layout />;
  if (theme.name === "Dark Sidebar") return <Theme2Layout />;
  if (theme.name === "Colorful Grid") return <Theme3Layout />;

  return <Theme1Layout />;
};

export default HomePage;