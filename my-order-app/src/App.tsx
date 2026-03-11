import Navbar from './component/navbar/nav'
import Menu from './component/menu/menu'
import Bill from './component/bill/Bill'
import './App.css'
import { useReducer, useState} from 'react'
type drink={
    id:string
    name:string;
    price:number;
}

type billProp={
    id:string
    name:string;
    price:number;
    quantity: number;
}


type Action =
  | { type: "ADD"; payload:billProp }
  | {type:"SUB"; payload: billProp}
  | { type: "REMOVE"; payload: string }         // xóa theo name
  | { type: "CLEAR" };                           // xóa toàn bộ

function App() {
  const [totalBill,setTotalBill]=useState(0);
  //const[listBill,setBill]=useState<billProp[]>([]);
  function addDrink(drink: drink) {
    const billItem: billProp = { ...drink, quantity: 1 };
    dispatch({ type: "ADD", payload: billItem });
  }
  // function removeDrink(value: billProp){
  //   dispatch({type:"REMOVE",payload:value.id})
  // }
  function subDrink( drink: billProp){
    dispatch({type:"SUB", payload: drink})
  }
  function reducer(listBillReducer: billProp[], action: Action): billProp[] {
  switch (action.type) {
    case "ADD":{
      const existingItem = listBillReducer.find(item => item.id === action.payload.id);
      if(existingItem){
        return listBillReducer.map(item =>
          item.id === action.payload.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...listBillReducer, action.payload];
      }
    case "SUB":{
      //const existingItem = listBillReducer.find(item => item.id === action.payload.id);
      if(action.payload.quantity>1){
        return listBillReducer.map(item =>
          item.id === action.payload.id 
            ? { ...item, quantity: item.quantity - 1 } 
            : item
        );
      }
       return listBillReducer.filter(item => item.id !== action.payload.id);
    }
    // case "REMOVE":
    //   return listBillReducer.filter(item => item.id !== action.payload);

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
      <div><Bill listDrink={listBillReducer} removeDrink={subDrink} addPrice={total} totalBill={totalBill} addDrink={addDrink}   /></div>
      
     </section>
     
    </>
  )
}

export default App
