import React, { useContext } from 'react'
import star_icon from '../Assets/Frontend_Assets/star_icon.png';
import star_dull_icon from '../Assets/Frontend_Assets/star_dull_icon.png';
import './ProductDisplay.css';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const {addToCart} = useContext(ShopContext)
    return (
        <div className="product-display">
            <div className="product-display-left">
                <div className="product-display-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="product-display-main-img">
                    <img src={product.image} alt="" />
                </div>
            </div>
            <div className="product-display-right">
                <h1>{product.name}</h1>
                <div className="product-display-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <div>(122)</div>
                </div>
                <div className="product-display-right-prices">
                    <div className="product-display-right-old">₹{product.old_price} </div>
                    <div className="product-display-right-new">₹{product.new_price} </div>
                </div>
                <div className="product-display-right-desciption">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate harum quam qui nihil deserunt,
                    sit maxime laborum alias am id magnam molestiae.
                </div>
                <div className="product-display-right-sizes">
                    <h1>Select size</h1>
                    <div className="product-display-right-size">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=>{
                    addToCart(product.id)
                }}>
                    
                    ADD TO CART</button>
                <p className="product-display-right-category"><span>Category :</span>Women,T-shirt,crop top</p>
                <p className="product-display-right-tag"><span>Tags :</span>Modern,Latest</p>



            </div>

        </div>
    )
}

export default ProductDisplay