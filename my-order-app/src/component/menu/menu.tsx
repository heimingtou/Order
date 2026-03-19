

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
    // const listCoffe=coffee.map((myMenu,index)=>{
    //      if(myMenu.name.toLowerCase().indexOf(text.toLowerCase())==-1)
    //         return;
    //     return <Drink key={index} menu={myMenu}   />
    // })
    // const listJuice=juice.map((myMenu,index)=>{
    //      if(myMenu.name.toLowerCase().indexOf(text.toLowerCase())==-1)
    //         return;
    //     return <Drink key={index} menu={myMenu} />
    // })
    // const listEsspresso=esspresso.map((myMenu,index)=>{
    //      if(myMenu.name.toLowerCase().indexOf(text.toLowerCase())==-1)
    //         return;
    //     return <Drink key={index} menu={myMenu}  />
    // })
    // const listMilktea=milkTea.map((myMenu,index)=>{
    //      if(myMenu.name.toLowerCase().indexOf(text.toLowerCase())==-1)
    //         return;
    //     return <Drink key={index} menu={myMenu}  />
    // })
    // const listSpecial=special.map((myMenu,index)=>{
    //      if(myMenu.name.toLowerCase().indexOf(text.toLowerCase())==-1)
    //         return;
    //     return <Drink key={index} menu={myMenu} />
    // })
    

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
        
        
        {/* < div id="coffee">
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
        </div> */}

        </>
    )
}