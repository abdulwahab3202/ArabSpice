import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
const FoodItem = ({ id, name, price, description, image }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className='food-item-image' src={image} alt="food image" />
                <div className="food-item-name-description">
                    <p className='food-item-name'>{name}</p>
                    <p className="food-item-desc">{description}</p>
                </div>
            </div>
            <div className="food-item-info">
                <p className="food-item-price">₹{price}</p>
                {
                    !cartItems[id]
                    ?<img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="add-icon-white" />
                    : <div className="food-item-counter">
                        <img className='red' onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="add-icon-green" />
                        <p>{cartItems[id]}</p>
                        <img className='green' onClick={() => addToCart(id)} src={assets.add_icon_green} alt="remove-icon-red" />
                    </div>
                }
            </div>
        </div>
    )
}

export default FoodItem