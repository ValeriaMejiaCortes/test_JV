import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowPosts from "./components/ShowPosts";

import './App.css';

function App() {
  return (
    <div className="App">
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={<ShowPosts/>}
              />{/**
              <Route path="/category/:id" element={<ItemListContainer />} />
              <Route path="/product/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
               */}
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
