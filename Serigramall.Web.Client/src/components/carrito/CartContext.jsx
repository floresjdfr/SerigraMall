import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children})=> {
    const [cartItems, setCartItems] = useState(()=>{
        try {
            const productosEnLocalStorage = localStorage.getItem("cartProducts");
            return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage):[];
          
        } catch (error) {
            return [];
        }
    });
    useEffect(() =>{
        try {
            console.log("¨ls A: ");
        console.log(cartItems);
        localStorage.setItem("cartProducts",JSON.stringify(cartItems));
            
        } catch (error) {
            console.log("¨ls A: ");
        }
    },[cartItems]);

    const addItemToCart = (product)=>{
        console.log("addItemToCart");
        console.log(product);
        const inCart = cartItems.find(
            (productInCart)=>productInCart.id==product.id); 
   
        if (inCart) {
            setCartItems(
                cartItems.map((productInCart)=>{
                    if (productInCart.id==product.id) {
                        return {...inCart,amount: inCart.amount+1};
                    } else {
                        return productInCart;
                    }
                })
            );
        }else {
            setCartItems([...cartItems,{...product,amount:1}]);
        } 
        
    };
    
    const deleteItemToCart = (product) => {
        const inCart =cartItems.find(
            (productInCart)=>productInCart.id===product.id
        );
        if(inCart.amount===1){
            setCartItems(
                cartItems.filter(productInCart =>productInCart.id !== product.id)
            );
        }else{
            setCartItems((productInCart) =>{
                if(productInCart.id === product.id){
                    return {...inCart,amount:inCart.amount-1};
                }
                else return productInCart;
        });
        }
    };

    return (
        /* Envolvemos el children con el provider y le pasamos un objeto con las propiedades que necesitamos por value */
        <CartContext.Provider
        value={{ cartItems,addItemToCart, deleteItemToCart }}
        >
        {children}
      </CartContext.Provider>
    );
        
};
export default CartContext;