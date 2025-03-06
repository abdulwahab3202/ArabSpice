import React, { useContext } from 'react'
import './Cart.css'
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/assets'
const Cart = () => {
    const { cartItems, food_list, getTotalCartAmount, removeFromCart, addToCart } = useContext(StoreContext)
    const navigate = useNavigate()
    const deleteFromCart = (itemId) => {
        cartItems[itemId] = 0;
        removeFromCart(itemId);
    }
    return (
        <div className="cart">
            <h1>Your Cart</h1>
            <div className="cart-items">
                {(getTotalCartAmount() === 0) ? (<p className='cart-is-empty'>Your Cart is Empty!</p>) :
                    <>
                        <div className="cart-items-title">
                            <p>Food</p>
                            <p>Name</p>
                            <p>Quantity</p>
                            <p>Price</p>
                            <p>Total</p>
                            <p>Remove</p>
                        </div>
                    </>
                }
                {
                    food_list.map((item, index) => {
                        if (cartItems[item._id] > 0) {
                            return (
                                <div key={index}>
                                    <div className="cart-items-title cart-items-item">
                                        <img className='cart-image' src={item.image} alt="food image" />
                                        <p className='item-name'>{item.name}</p>
                                        <div className='quantity'>
                                            <img className='red' onClick={() => { removeFromCart(item._id) }} src={assets.remove_icon_red} alt="remove-icon-green" />
                                            <p>{cartItems[item._id]}</p>
                                            <img className='green' onClick={() => { addToCart(item._id) }} src={assets.add_icon_green} alt="add-icon-green" />
                                        </div>
                                        <p>₹{item.price}</p>
                                        <p>₹{cartItems[item._id] * item.price}</p>
                                        <img onClick={() => deleteFromCart(item._id)} src={assets.delete_icon} alt="delete-icon" className='cross' />
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
            <br />
            <br />
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div className='cart-total-container'>
                        <div className="cart-total-details">
                            <p>Food Total</p>
                            <p>₹{getTotalCartAmount()}</p>
                        </div>
                        <br />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>₹{getTotalCartAmount() == 0 ? 0 : 50}</p>
                        </div>
                        <br />
                        <div className="cart-total-details">
                            <b><p>Total</p></b>
                            <b><p>₹{getTotalCartAmount() == 0 ? 0 : getTotalCartAmount() + 50}</p></b>
                        </div>
                    </div>
                    <button className='button' onClick={() => {
                        navigate('/order');
                        window.scrollTo(0, 0);
                    }}>Proceed To Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cart