import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx'; 
import News from './Pages/News.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Publish from './Pages/Publish.jsx';
import { ThirdwebProvider, ChainId } from '@thirdweb-dev/react';
import { Buffer } from 'buffer';


const desiredChainId = ChainId.Mumbai;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/publish",
        element: <Publish />
      },
      {
        path: "/news",
        element: <News />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/about",
        element: <About />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThirdwebProvider desiredChainId={desiredChainId}>
      <RouterProvider router={router} />
    </ThirdwebProvider>
  </React.StrictMode>,
);
