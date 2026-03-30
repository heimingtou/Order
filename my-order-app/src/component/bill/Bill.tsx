
import { useContext } from 'react'
import ListBill from '../listBill/listBill'
import './Bill.css'
import { CartContext } from '../../Context/CartContext'
import { useNavigate } from 'react-router-dom'; // Thêm dòng này ở đầu file

// Trong function Bill():
type BillProp={
     name: string
}
   


export default function Bill({name}:BillProp){
    const {totalBill, listBillReducer, saveOrder}=  useContext(CartContext)!;
    const navigate = useNavigate();
    const listBill=listBillReducer.map((drink)=>(
        <div key={drink.id} >     
            <ListBill drink={drink} />
            <hr/>
        </div> 
    )
    )
    function ChangeScence(){
        if(listBill.length!=0)
      {  
        saveOrder(name)
        navigate("/checkout")
    }
    }
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
           <button 
                className='btn-checkout' 
                onClick={() => ChangeScence()}
                style={{
                        width: '50%', 
                        padding: '8px', 
                        backgroundColor: 'rgb(233, 148, 106)', 
                        color: 'white', 
                        border: 'none', 
                        marginTop: '10px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize:'10px'
    }}
>
    XÁC NHẬN ĐƠN HÀNG
</button>
        </div>
    )


}