import React, { useContext } from 'react'
import './CartItem.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/Frontend_Assets/cart_cross_icon.png';

const CartItem = () => {
    const { all_product, cartItems, removeFromCart } = useContext(ShopContext)
    return (
        <div className="cartItems">
            <div className="cartItems-format-title">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product
				.filter((e) => cartItems[e.id] > 0)
				.map((e) => (
					<div key={e.id}>
						<div className="cartItmes-format">
							<img src={e.image} className='carticon-product' alt="" />
							<p>{e.name}</p>
							<p>₹{e.new_price}</p>
							<button className='cartitems-quantity'>{cartItems[e.id]}</button>
							<p>₹{e.new_price * cartItems[e.id]}</p>
							<img src={remove_icon} onClick={() => removeFromCart(e.id)} alt="Remove" />
						</div>
					</div>
				))}

        </div>
    )
}

export default CartItem