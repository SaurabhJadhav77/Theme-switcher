Multi-Theme Switcher App
A single-page application built with React and TypeScript, demonstrating a multi-theme functionality using the Context API. The application showcases a clean, modular structure and integrates with a public API to fetch and display dynamic content.

Features
Multi-Theme Support: Easily switch between three distinct themes (Minimalist Light, Dark Sidebar, Colorful Grid).

Persistent Theme: The user's theme preference is saved in local storage, so it persists across page reloads.

Responsive Design: The layout adapts seamlessly to different screen sizes, from mobile to desktop.

Client-Side Routing: Uses react-router-dom for smooth navigation between Home, About, and Contact pages without full page reloads.

External API Integration: Fetches product data from the Fake Store API for a dynamic content display.

Modular Component Structure: The codebase is organized into reusable components, improving maintainability and readability.

Tech Stack
React (with Hooks)

TypeScript

React Router DOM

Context API for global state management

CSS for styling

Prerequisites
Node.js (v14 or higher)

npm or yarn

Installation and Running Locally
Follow these steps to get the project up and running on your local machine.

Clone the repository:

git clone [https://github.com/SaurabhJadhav77/Theme-switcher.git]
cd [Theme-switcher]

Install dependencies:

npm install
# or
yarn install

Start the development server:

npm run dev
# or
yarn dev

Open your browser and navigate to http://localhost:5173 (or the port specified in your terminal).

Project Structure
The project follows a standard multi-folder structure to keep the codebase organized and easy to navigate.

src/
├── components/          # Reusable UI components (Header, ProductList, Pages)
├── context/             # React Context for theme management
│   ├── ThemeContext.tsx # The theme provider and hook
│   └── types.ts         # TypeScript types for the theme
├── App.tsx              # Main application component
├── index.tsx            # Entry point for the React application
└── App.css              # Global CSS styles

How the Theming Works
The theme logic is managed by ThemeContext in the src/context/ directory.

The ThemeProvider component wraps the entire application, making the current theme and the theme-setting function available to all child components.

Themes are defined as JavaScript objects with class names for primary, secondary, and background colors, as well as font styles.

Components use the useTheme hook to access the current theme object and apply the appropriate CSS classes. This approach allows the UI to update instantly when a new theme is selected.
