import './ExpenseItem.css';


function ExpenseItem(){
    return( 
    <div className="expense-item">
       <div>01-03-2023</div>
       <div className="expense-item__description">
        <h2 className="expense-item h2">CAR INSURANCE</h2>
        <div className="expense-item__price ">1000</div>
        
       </div>
    </div>
    )
}

export default ExpenseItem;