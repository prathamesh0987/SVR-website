import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from './context/ThemeContext';  // Import ThemeProvider
import About from './pages/About.jsx';
import ProductPage from './pages/ProductPage.jsx';
import ResearchPage from './pages/ResearchPage.jsx';
import EventsPage from './pages/EventsPage.jsx';
import ContactUs from './pages/ContactUs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "home",
    element: <App/>,
  },
  {
    path: "about",
    element: <About/>,
  },
  {
    path: "product",
    element: <ProductPage/>,
  },
  {
    path: "research",
    element: <ResearchPage/>,
  },
  {
    path: "events",
    element: <EventsPage/>,
  },
  {
    path: "contact us",
    element: <ContactUs/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
