//import { useState } from 'react'
import { useContext } from 'react'
import './listBill.css'
import { CartContext } from '../../Context/CartContext'
 type drink={
    
        id:string,
        name:string,
        price: number,
        quantity: number
    }
    type listBillProp={
        drink:drink
    }

export default function ListBill({drink }:listBillProp){
    const { addDrink, subDrink } = useContext(CartContext)!;
   //const [count,setCount]=useState(1)
    function addCount(){
        addDrink(drink);
        //addPrice(drink.price)
    }
     function subCount(){
       
        subDrink(drink)
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