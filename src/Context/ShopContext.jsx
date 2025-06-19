import React , {createContext, useState} from 'react'
import all_product from '../Components/Assets/Frontend_Assets/all_product';

export const ShopContext = createContext(null);
const getOrDefaultCart = () => {
	let cart = {};
	all_product.forEach((product) => {
		cart[product.id] = 0;
	});
	return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems,setCartItems] = useState(getOrDefaultCart);

  const addToCart = (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
  }
  const removeFromCart = (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }

  const contextValue = {all_product,cartItems,addToCart,removeFromCart};
  console.log(cartItems)

  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;