import React from 'react'
import './OrderPlaced.css'
import { useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'
const OrderPlaced = ({setOrderPlaced,setMenu}) => {
    const navigate = useNavigate()
  return (
    <div className='order-placed'>
        <div className="order-placed-container">
            <p>Order Placed</p>
            <img src={assets.green_tick_image} alt="gree-tick-image" />
            <button onClick={() => {
                setMenu("home");
                navigate('/');
                setOrderPlaced(false);
                }}>Back To Home</button>
        </div>
    </div>
  )
}

export default OrderPlaced