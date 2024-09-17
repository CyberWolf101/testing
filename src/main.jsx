import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/other.css'
import './styles/utility.css'
import './styles/app.css'
import { ChakraProvider } from "@chakra-ui/react";
import UserContextProvider from './userContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </ChakraProvider>
  </StrictMode>,
)
