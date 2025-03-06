import React, { useContext, useState } from 'react'
import './CheckoutPage.css'
import { StoreContext } from '../../context/StoreContext'
const CheckoutPage = ({ setOrderPlaced }) => {
  const { food_list, cartItems, getTotalCartAmount, clearCartItems } = useContext(StoreContext)
  const handleOrder = () => {
    window.scrollTo(0,0);
    setOrderPlaced(true);
    clearCartItems();
  }

  return (
    <>
      <div className="check-out">
        <form className="check-out-left">
          <p className="title">Delivery Information</p>
          <div className="flex-field">
            <div className="name">
              <p className='p'>First Name</p>
              <input type="text" />
            </div>
            <div className="name">
              <p className='p'>Last Name</p>
              <input type="text" />
            </div>
          </div>
          <p className='p'>E-mail</p>
          <input type="email" />
          <p className='p'>Country</p>
          <input type="text" />
          <div className="flex-field">
            <div>
              <p className='p'>State</p>
              <input type="text" />
            </div>
            <div>
              <p className='p'>City</p>
              <input type="text" />
            </div>
          </div>
          <p className='p'>Land Mark</p>
          <input type="text" />
          <div className="flex-field">
            <div>
              <p className='p'>Phone</p>
              <input type="text" />
            </div>
            <div>
              <p className='p'>Zip Code</p>
              <input type="text" />
            </div>
          </div>
        </form>
        <div className="check-out-right">
          <p className='title'>Order Summary</p>
          <div className='check-out-right-container'>
            {getTotalCartAmount() === 0 ? <p>No items available in the cart!</p> : <></>}
            {
              food_list.map((item) => {
                if (cartItems[item._id] > 0) {
                  return (
                    <div key={item._id}>
                      <div className="summary-container">
                        <p>{item.name}</p>
                        <p>₹{cartItems[item._id] * item.price}</p>
                      </div>
                      <hr className='horizontal-line' />
                    </div>
                  );
                }
              })
            }
          </div>
        </div>
        <div className="check-out-bottom">
          <div className="check-out-total">
            <p className="title">Cart Totals</p>
            <div className='check-out-total-container'>
              <div className="check-out-total-details">
                <p>Food Total</p>
                <p>₹{getTotalCartAmount()}</p>
              </div>
              <hr className="horizontal-line" />
              <div className="check-out-total-details">
                <p>Delivery Fee</p>
                <p>₹{getTotalCartAmount() == 0 ? 0 : 50}</p>
              </div>
              <hr className="horizontal-line" />
              <div className="check-out-total-details">
                <b><p>Total</p></b>
                <b><p>₹{getTotalCartAmount() == 0 ? 0 : getTotalCartAmount() + 50}</p></b>
              </div>
            </div>
            <button className='check-out-button' onClick={() => {
              if(getTotalCartAmount() === 0){
                alert("Your cart is empty! Please add any items")
              }
              else{
                handleOrder();
              }
            }}>Place Order</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckoutPage