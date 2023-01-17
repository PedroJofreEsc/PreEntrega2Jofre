
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemlistContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path='/' element={<ItemlistContainer greeting='Todas las figuras' />} />
          <Route path='/category/:categoryId' element={<ItemlistContainer greeting='Categoria:' />} />
          <Route path='/id/:productId' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
