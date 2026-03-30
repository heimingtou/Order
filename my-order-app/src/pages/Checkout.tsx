import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const { listHistoryBill } = useContext(CartContext)!;
  const navigate = useNavigate();
  const ListBill=listHistoryBill.map((bill)=>(
    <div>
       <h1>{bill.nameTable}</h1>
     <div style={{ background: '#333', padding: '20px', borderRadius: '10px' }}>
        {bill.listDrink.map(item => (
          <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #444' }}>
            <p>{item.name} x {item.quantity}</p>
            <p>{(item.price * item.quantity).toLocaleString()}đ</p>
          </div>
        ))}
        <h2 style={{ color: 'orange' }}>Tổng cộng: {listHistoryBill[0].totalBill}đ</h2>
      </div> 
    </div>
   
  )
  )
  return (
    <div style={{ padding: '40px', color: 'white', textAlign: 'center' }}>
       <button 
        onClick={() => navigate("/")} 
        style={{ marginBottom: '20px', cursor: 'pointer' }}
      >
        ⬅ Quay lại Menu
      </button>
      {ListBill}
      {/* <h1>{listHistoryBill[0].nameTable}</h1>
      <div style={{ background: '#333', padding: '20px', borderRadius: '10px' }}>
        {listHistoryBill[0].listDrink.map(item => (
          <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #444' }}>
            <p>{item.name} x {item.quantity}</p>
            <p>{(item.price * item.quantity).toLocaleString()}đ</p>
          </div>
        ))}
        <h2 style={{ color: 'orange' }}>Tổng cộng: {listHistoryBill[0].totalBill}đ</h2>
      </div>  */}
      {/* <h1>📝 Chi tiết đơn hàng</h1>
     

      <div style={{ background: '#333', padding: '20px', borderRadius: '10px' }}>
        {listBillReducer.map(item => (
          <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #444' }}>
            <p>{item.name} x {item.quantity}</p>
            <p>{(item.price * item.quantity).toLocaleString()}đ</p>
          </div>
        ))}
        <h2 style={{ color: 'orange' }}>Tổng cộng: {totalBill.toLocaleString()}đ</h2>
      </div> */}
    </div>
  );
}