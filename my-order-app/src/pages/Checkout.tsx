import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { useNavigate } from 'react-router-dom';
import './Checkout.css'
type billProp = { id: string; name: string; price: number; quantity: number };
export default function Checkout() {
  const { listHistoryBill, dispatch, dispatchHistory } = useContext(CartContext)!;
  const navigate = useNavigate();
  const ListBill=listHistoryBill.map((bill)=>(
     <div key={bill.id} style={{ background: '#333',display: 'flex', flexDirection: 'column', padding: '20px', borderRadius: '10px', width:'18rem' }}>
      <h1>Table {bill.nameTable}</h1>
        {bill.listDrink.map(item => (
          <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #444' }}>
            <p>{item.name} x {item.quantity}</p>
            <p>{(item.price * item.quantity).toLocaleString()}đ</p>
          </div>
        ))}
        
        <h2 style={{ color: 'orange', marginTop: 'auto' }}>Tổng cộng: {bill.totalBill}đ</h2>
        <button style={{width:'10rem',alignSelf: 'center',}} onClick={()=>FixDrink(bill.id, bill.listDrink)}>chinh sua </button>
        
      </div> 
  )
  )
  function FixDrink(id:string, bill:billProp[]){
    dispatchHistory({ type: "DeleteBill", payload: id })
    navigate("/")
    dispatch({type:"SET-CART", payload:bill})
   
    
  }
  return (
    <div style={{ padding: '40px', color: 'white', textAlign: 'center' }}>
       <button 
        onClick={() => navigate("/")} 
        style={{ marginBottom: '20px', cursor: 'pointer' }}
      >
        ⬅ Quay lại Menu
      </button>
      <div className='bill-Contain'> 
      {ListBill}
     </div>
    </div>
  );
}