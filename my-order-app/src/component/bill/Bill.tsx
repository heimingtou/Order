
import ListBill from '../listBill/listBill'
import './Bill.css'
type billProp={
    id:string
    name:string
    price:number,
    quantity: number
}
type listBillProp={
    listDrink: billProp[]
    removeDrink:(value:billProp)=>void
    addPrice:(value:number)=>void
    totalBill:number
    addDrink: (value: billProp)=>void
}

export default function Bill({listDrink,removeDrink,addPrice, totalBill, addDrink}:listBillProp){
    
    const listBill=listDrink.map((drink)=>(
        <div key={drink.id} >     
            <ListBill drink={drink} removeDrink={removeDrink} addPrice={addPrice} addDrink={addDrink}/>
            <hr/>
        </div> 
    )
    )
  
    return(
        <div className='contain-bill'>
            <h1 className='title-Bill'> Poem Coffee</h1>
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
            <span style={
            {
                color:"#a880d5ff"
            }} ><b>Total</b></span>
            <span
                style={{
                    color:"#ee5b12ff"
                }}
            >{totalBill}</span>
            </div>
           
        </div>
    )


}