/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useReducer, type ReactNode } from "react";
//import ListBill from "../component/listBill/listBill";


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
type CartContextType ={
  listBillReducer: billProp[];
  totalBill: number;
  dispatch: React.Dispatch<Action>;
  addDrink: (drink: drink) => void;
  subDrink: (drink: billProp) => void;
}
type Action =
  | { type: "ADD"; payload:billProp }
  | {type:"SUB"; payload: billProp}
  | { type: "REMOVE"; payload: string }         // xóa theo name
  | { type: "CLEAR" };    

export const CartContext = createContext<CartContextType | undefined>(undefined)
const initializer = () => {
  const localData = localStorage.getItem("cart_data");
  return localData ? JSON.parse(localData) : []; // Nếu có dữ liệu cũ thì dùng, không thì rỗng
};
export function CartProvider({children}:{children:ReactNode}){
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
    const [listBillReducer,dispatch]=useReducer(reducer,[], initializer)
    useEffect(() => {
    // Chuyển mảng giỏ hàng thành chuỗi JSON và lưu vào LocalStorage
    localStorage.setItem("cart_data", JSON.stringify(listBillReducer));
    
    console.log("Đã cập nhật giỏ hàng vào bộ nhớ!");
  }, [listBillReducer]);
      const totalBill= listBillReducer.reduce((sum,item)=>sum=sum+item.price*item.quantity,0);
    return (
        <CartContext.Provider value={{listBillReducer,addDrink, subDrink,totalBill,dispatch}}>
            {children}
        </CartContext.Provider>
    )
    
}