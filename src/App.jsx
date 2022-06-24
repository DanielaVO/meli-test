import React, { useState } from "react";
import GlobalStyles from "./styles/GlobalStyles"
import { Home } from "./containers/home/Home"
import { ItemDetails } from '@/components/item-details/ItemDetails';
import { Items } from '@/components/items/Items';
import { BrowserRouter as Router, Outlet, Route, Routes } from "react-router-dom";

/**
 * App router
 */
function App() {
  const [response, setResponse] = useState([]);
  const [categories, setCategories] = useState([]);
  const setItemsList = (itemsList) => {
    setResponse(itemsList)
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home setItemsList={setItemsList} categories={categories} setCategories={setCategories} />}>
          <Route path="items" element={<Outlet />} >
            <Route index element={<Items response={response} />} />
            <Route path=":id" element={<ItemDetails setCategories={setCategories} />} />
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <h2>404</h2>
            </main>
          }
        />
      </Routes>
      <GlobalStyles />
    </Router>
  )
}

export default App
