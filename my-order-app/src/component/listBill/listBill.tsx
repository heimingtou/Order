import { useState } from 'react'
import './listBill.css'
 type drink={
    
        id:string,
        name:string,
        price: number
    
        
    }
    type listBillProp={
        drink:drink
        removeDrink:(value:drink)=>void
        addPrice:(value:number)=>void
    }

export default function ListBill({drink,removeDrink, addPrice }:listBillProp){
   const [count,setCount]=useState(1)
    function addCount(){
        setCount(count+1);
        addPrice(drink.price)
    }
     function subCount(){
        let fakeCount=count;
        fakeCount--;
        setCount(fakeCount);
        addPrice(-1*drink.price)
        if(fakeCount<1)
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
            <span className='count'>{count}</span>
        </div>
    )
}