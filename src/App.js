import React from 'react';
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Success from "./pages/Success"
import Cart from "./pages/Cart"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux"

function App() {

	const user = useSelector(state => state.user.currentUser)

	return (
	<BrowserRouter>
	      <Routes>
	        <Route path="/" element={<Home />} />
	        <Route path="products" element={<ProductList />} />
	        <Route path="products/:category" element={<ProductList />} />
	        <Route path="product/:id" element={<Product />} />
	        <Route path="cart" element={<Cart />} />
	        <Route path="success" element={<Success />} />
	        <Route path="login" element={ user ? <Navigate to="/" replace={true} /> : <Login /> } />
	        <Route path="register" element={ user ? <Navigate to="/" replace={true} /> : <Register /> } />
	      </Routes>
    </BrowserRouter>
	)
}

export default App