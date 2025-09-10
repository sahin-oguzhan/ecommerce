import './App.css';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import ShopPage from './pages/ShopPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/detail" element={<ProductDetailPage />} />
    </Routes>
  );
}

export default App;
