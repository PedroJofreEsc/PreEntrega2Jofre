
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemlistContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';
import { NotificationProvider } from './notification/NotificationService';
import Checkout from './components/Checkout/Checkout';

function App() {




  return (
    <div className="App">
      <NotificationProvider>
        <BrowserRouter>
          <CartProvider>
            <Navbar />
            <Routes>
              <Route path='/' element={<ItemlistContainer greeting='Todas las figuras' />} />
              <Route path='/category/:categoryId' element={<ItemlistContainer greeting='Categoria:' />} />
              <Route path='/id/:productId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='checkout' element={<Checkout />} />
            </Routes>
          </CartProvider>
        </BrowserRouter>
      </NotificationProvider>
    </div>
  );
}

export default App;
