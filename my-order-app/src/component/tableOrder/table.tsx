
type TableOrderProps= {
    table: string;
    setTable: (val: string) => void;
}
export default function TableOrder({table, setTable}:TableOrderProps){
     
    return(
      
        <div className="table-picker">
    <h3>Bạn đang ngồi bàn số mấy?</h3>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
            <button 
                key={num}
                onClick={() => setTable(num.toString())}
                style={{
                    padding: '10px',
                    backgroundColor: table === num.toString() ? '#ee5b12ff' : '#444',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px'
                }}
            >
                Bàn {num}
            </button>
        ))}
    </div>
</div>
    )

}