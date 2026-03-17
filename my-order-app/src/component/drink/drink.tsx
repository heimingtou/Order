import './drink.css'
type drink={
        id:string,
        name:string,
        price: number
    }
type drinkProp={
    addDrink:(value:drink)=>void,
    menu:drink
    //addPrice:(value:number)=>void
}

export default function Drink({menu, addDrink}:drinkProp){
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