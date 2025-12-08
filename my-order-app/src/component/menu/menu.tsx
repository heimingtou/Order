

import "./menu.css"
import coffee from "../../Data/coffee"
import juice from "../../Data/juice"
import milkTea from "../../Data/milkTea"
import special from "../../Data/special"
import esspresso from "../../Data/Esspresso"
import Drink from "../drink/drink"
import { useState } from "react"
type drink={
        id:string
        name:string,
        price: number
    }

type menuProp={
    addDrink:(value:drink)=>void,
    addPrice:(value:number)=>void

}
export default function Menu({addDrink,addPrice}:menuProp){
    const [text,setText]=useState('');
    const listCoffe=coffee.map((myMenu,index)=>{
         if(myMenu.name.toLowerCase().indexOf(text.toLowerCase())==-1)
            return;
        return <Drink key={index} menu={myMenu} addDrink={addDrink} addPrice={addPrice} />
    })
    const listJuice=juice.map((myMenu,index)=>{
         if(myMenu.name.toLowerCase().indexOf(text.toLowerCase())==-1)
            return;
        return <Drink key={index} menu={myMenu} addDrink={addDrink} addPrice={addPrice}/>
    })
    const listEsspresso=esspresso.map((myMenu,index)=>{
         if(myMenu.name.toLowerCase().indexOf(text.toLowerCase())==-1)
            return;
        return <Drink key={index} menu={myMenu} addDrink={addDrink} addPrice={addPrice}/>
    })
    const listMilktea=milkTea.map((myMenu,index)=>{
         if(myMenu.name.toLowerCase().indexOf(text.toLowerCase())==-1)
            return;
        return <Drink key={index} menu={myMenu} addDrink={addDrink} addPrice={addPrice}/>
    })
    const listSpecial=special.map((myMenu,index)=>{
         if(myMenu.name.toLowerCase().indexOf(text.toLowerCase())==-1)
            return;
        return <Drink key={index} menu={myMenu} addDrink={addDrink} addPrice={addPrice}/>
    })
    

    return (
        <>
        <input type="text" onChange={(e)=>{setText(e.target.value)}}></input>
        < div id="coffee">
            <h1>Coffe</h1>
            <div className="coffee">
            {listCoffe}
            </div>
           
        </div>
         < div id="juice">
            <h1>Juice</h1>
            <div className="coffee">
            {listJuice}
            </div>
           
        </div>
         < div id="esspresso">
            <h1>Esspreso</h1>
            <div className="coffee">
           {listEsspresso}
            </div>
           
        </div>
         < div id="milk-tea">
            <h1>Milk tea</h1>
            <div className="coffee">
            {listMilktea}
            </div>
           
        </div>
        < div id="special">
            <h1>special</h1>
            <div className="coffee">
            {listSpecial}
            </div>
           
        </div>

        </>
    )
}