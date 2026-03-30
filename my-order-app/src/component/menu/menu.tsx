

import "./menu.css"
import coffee from "../../Data/coffee"
import juice from "../../Data/juice"
import milkTea from "../../Data/milkTea"
import special from "../../Data/special"
import esspresso from "../../Data/Esspresso"
import Drink from "../drink/drink"
import {  useState } from "react"
//import { CartContext } from "../../Context/CartContext"

export default function Menu(){
    const [text,setText]=useState('');
    //const {addDrink}= useContext(CartContext)!
    const categories=[
        {id: "coffee", title: "Coffe", data: coffee},
        {id: "juice", title: "Juice", data: juice},
        {id: "milk-tea", title: "Milk Tea", data: milkTea},
        {id: "special", title: "Special", data: special},
        {id: "esspresso", title: "Esspresso", data: esspresso},
    ]
    return (
        <>
        <input placeholder="search drink" type="text" onChange={(e)=>{setText(e.target.value)}}></input>
        {
            categories.map((cat)=>(
                <div id={cat.id} key={cat.id} >
                    <h1>{cat.title}</h1>
                    <div className="menuDrink" >
                        {
                            cat.data
                            .filter(item => item.name.toLowerCase().includes(text.toLowerCase()))
                            .map((myMenu, index) => (
                                <Drink key={index} menu={myMenu} />
                            ))
                        }
                    </div>
                </div>

            ))
        }
        </>
    )
}