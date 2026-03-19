
import { useContext } from 'react'
import ListBill from '../listBill/listBill'
import './Bill.css'
import { CartContext } from '../../Context/CartContext'


export default function Bill(){
    const {totalBill, listBillReducer}=  useContext(CartContext)!;
    const listBill=listBillReducer.map((drink)=>(
        <div key={drink.id} >     
            <ListBill drink={drink} />
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