//import { useState } from 'react'
import './listBill.css'
 type drink={
    
        id:string,
        name:string,
        price: number,
        quantity: number
    }
    type listBillProp={
        drink:drink
        removeDrink:(value:drink)=>void
        //addPrice:(value:number)=>void
        addDrink: (value: drink)=>void
    }

export default function ListBill({drink,removeDrink, addDrink }:listBillProp){
   //const [count,setCount]=useState(1)
    function addCount(){
        addDrink(drink);
        //addPrice(drink.price)
    }
     function subCount(){
        //drink.quantity--;
        
       // addPrice(-1*drink.price)
        //let fakeCount=drink.quantity;
        removeDrink(drink)
    }
    return (
        <div style={
            {
                display:"flex",
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"space-between",
                padding:"0 15px"
            }
        }>
            <div className='button-containt'>
                <button className='btn-a' onClick={addCount}>+</button>
                <button className='btn-d' onClick={subCount}>-</button>
            </div>
            <span>{drink.name}</span>
            <span>{drink.price}</span>
            <span className='count'>{drink.quantity}</span>
        </div>
    )
}