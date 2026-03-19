import Navbar from './component/navbar/nav'
import Menu from './component/menu/menu'
import Bill from './component/bill/Bill'
import './App.css'
import { CartProvider } from './Context/CartContext'


function App() {

  return (
    <>
    <CartProvider>
       <section className='navv'>
      <Navbar/>
    </section>
     <section className='contain'>
      {/* <div><Menu addDrink={addDrink} /></div> */}
      <div><Menu  /></div>
       <div><Bill  /></div>
     </section>
    </CartProvider>
   
     
    </>
  )
}

export default App
