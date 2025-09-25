import './App.css';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import ShopPage from './pages/ShopPage';
import TeamPage from './pages/TeamPage';
import AboutPage from './pages/AboutPage';
import { Route, Routes } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from './pages/LoginPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { verifyUser } from './redux/thunks/clientThunks';
import ShoppingCartPage from './pages/ShoppingCartPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verifyUser());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route
          path="/shop/:gender/:categoryName/:categoryId"
          element={<ShopPage />}
        />
        <Route path="/shop" element={<ShopPage />} />
        <Route
          path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId"
          element={<ProductDetailPage />}
        />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
