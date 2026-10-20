# Planets Fact Site

An interactive React application that presents key facts about each planet in our solar system. The app includes a responsive navigation bar, dedicated pages for each planet, tabbed content for overview/internal/surface geology, and summary statistics such as rotation time, radius, and temperature.

Live demo: https://planets-fact-sites.vercel.app/

## Overview

This project is a space-themed information site inspired by the classic "Planets Fact Site" challenge. It provides a clean, educational UI where users can browse eight planets and switch between different views of each planet's information.

The app is built as a front-end React project with client-side routing and reusable UI components that keep the layout consistent across all planet pages.

## Features

- Planet navigation menu for all eight planets
- Dedicated route for each planet page
- Overview, internal structure, and surface geology tabs
- Animated and styled UI for a modern space-themed design
- Reusable data cards for key planetary statistics
- Responsive layout for desktop and smaller screens

## Tech Stack

- React
- JavaScript
- React Router
- CSS
- Vite/CRA-style front-end app structure

## Project Structure

- `src/App.js` – sets up the routing and page layout
- `src/components/` – reusable components such as navbar, planet cards, and info tabs
- `src/pages/` – page components for Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune
- `src/assets/` – images and SVG assets used throughout the site
- `src/App.css` and `src/components/styles.css` – styling for the application

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm start
   ```

3. Open the app in your browser:

   ```text
   http://localhost:3000
   ```

## Production Build

To generate a production build:

```bash
npm run build
```

This creates an optimized build directory for deployment.

## Notes

This project focuses on presenting astronomical information in a polished, user-friendly interface and is a good example of a React app using routing and reusable components to build a multi-page data site.
