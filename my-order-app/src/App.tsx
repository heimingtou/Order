import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar/nav';
import Menu from './component/menu/menu';
import Bill from './component/bill/Bill';
import TableOrder from './component/tableOrder/table';
import Checkout from './pages/Checkout'; // Import trang vừa tạo
import './App.css';
import { CartProvider } from './Context/CartContext';
import { useState } from 'react';

function App() {
   const [table, setTable] = useState(''); // Lưu số bàn
  return (
    <CartProvider>
      <Router>
       

        <Routes>
          {/* TRANG CHỦ */}
           {/* <section className='navv'>
          <Navbar />
        </section> */}
          <Route path="/" element={
            <section>
               <section className='navv'>
                <Navbar />
              </section>
              <section className='contain'>
              <div><TableOrder table={table} setTable= {setTable}  /></div>
              <div><Menu /></div>
              <div><Bill name={table} /></div>
            </section>
            </section> 
          }
                      
           />

          {/* TRANG THANH TOÁN */}
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;