import React from 'react'

const PayBill = () => {
    return (
       <form action="">
        <label htmlFor="bill">Bill value:</label>
        <input type="number" id='bill'  placeholder='enter bill value...' />
        
        <br />
        <label htmlFor="Expense">your Expense: </label>
        <input type="number"id='Expense' placeholder='Enter your expense...' />
        
       </form>
    )
}

export default PayBill
