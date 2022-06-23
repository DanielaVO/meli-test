import React from "react";
import GlobalStyles from "./styles/GlobalStyles"
import { Home } from "./containers/home/Home"
import { ItemDetails } from '@/components/Item-details/ItemDetails';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/**
 * App router
 */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items/:id" element={<ItemDetails />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>404</p>
            </main>
          }
        />
      </Routes>
      <GlobalStyles />
    </Router>
  )
}

export default App
