import Navbar from './component/navbar/nav'
import Menu from './component/menu/menu'
import Bill from './component/bill/Bill'
import './App.css'
import { useReducer, useState} from 'react'
type billProp={
    id:string
    name:string;
    price:number;
}

type Action =
  | { type: "ADD"; payload:billProp }
  | { type: "REMOVE"; payload: string }         // xóa theo name
  | { type: "CLEAR" };                           // xóa toàn bộ

function App() {
  const [totalBill,setTotalBill]=useState(0);
  //const[listBill,setBill]=useState<billProp[]>([]);
  function addDrink(drink: billProp) {
    dispatch({ type: "ADD", payload: drink });
  }
  function removeDrink(drink:billProp){
    dispatch({type:"REMOVE",payload:drink.id})
  }
  function reducer(listBillReducer: billProp[], action: Action): billProp[] {
  switch (action.type) {
    case "ADD":
      return [...listBillReducer, action.payload];

    case "REMOVE":
      return listBillReducer.filter(item => item.id !== action.payload);

    case "CLEAR":
      return [];

    default:
      return listBillReducer;
  }
}
  const [listBillReducer,dispatch]=useReducer(reducer,[])
  function total(price:number){
    setTotalBill(totalBill+price);
   }
  return (
    <>
    <section className='navv'>
      <Navbar/>
    </section>
     <section className='contain'>
      <div><Menu addDrink={addDrink} addPrice={total}/></div>
      <div><Bill listDrink={listBillReducer} removeDrink={removeDrink} addPrice={total} totalBill={totalBill}  /></div>
      
     </section>
     
    </>
  )
}

export default App
