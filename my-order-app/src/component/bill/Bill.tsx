
import ListBill from '../listBill/listBill'
import './Bill.css'
type billProp={
    id:string
    name:string
    price:number
}
type listBillProp={
    listDrink: billProp[]
    removeDrink:(value:billProp)=>void
    addPrice:(value:number)=>void
    totalBill:number
}

export default function Bill({listDrink,removeDrink,addPrice, totalBill}:listBillProp){
    
    const listBill=listDrink.map((drink)=>(
        <div key={drink.id} >     
            <ListBill drink={drink} removeDrink={removeDrink} addPrice={addPrice}/>
            <hr/>
        </div> 
    )
    )
  
    return(
        <div className='contain-bill'>
            <h1> Bill</h1>
            {listBill}
            <div  style={
            {
                display:"flex",
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"space-between",
                padding:"0 15px"
            }
        } >
            <span>total</span>
            <span>{totalBill}</span>
            </div>
           
        </div>
    )


}