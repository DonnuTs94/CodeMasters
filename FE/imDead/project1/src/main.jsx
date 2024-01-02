import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"

import { ChakraProvider } from "@chakra-ui/react"
import { RouterProvider } from "react-router-dom"
import { router } from "./routes.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </ChakraProvider>
  </React.StrictMode>
)
