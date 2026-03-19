import { useContext } from 'react'
import './drink.css'
import { CartContext } from '../../Context/CartContext'
type drink={
        id:string,
        name:string,
        price: number
    }
type drinkProp={
   // addDrink:(value:drink)=>void,
    menu:drink
    //addPrice:(value:number)=>void
}

export default function Drink({menu}:drinkProp){
    const {addDrink}= useContext(CartContext)!
    function add(){
        addDrink(menu)
        //addPrice(menu.price)
    }

    return(
        <div className="menuCoffee">
            <h2>{menu.name}</h2>
            <p>price: {menu.price}</p>
            <button className='btn-add' onClick={()=>add()} >+</button>
        </div>
    )
}