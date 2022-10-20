import React, { useContext } from "react";
import CartContext from "./CartContext";
import '../../styles/cartStyle.css';

export const ItemCart = ({ item }) => {

   const { deleteItemToCart, addItemToCart } = useContext(CartContext);
   const { id } = item;

  return (
    <div className="cartItem">
      <img className="cartItemimg" src={`data:image/jpeg;base64,${item.image}`}/>
      <div className="dataContainer">
        <div className="left">
          <p className="leftp">{item.productName}</p>
          <div className="leftbuttons">
            <button className="leftbutton" onClick={() => addItemToCart(item)}>Agregar</button>
            <button className="leftbutton" onClick={() => deleteItemToCart(item)}>Eliminar</button>
          </div>
        </div>
        <div className="right">
          <div className="rightdiv">{item.amount}</div>
          <p className="rightp">Total: ${item.amount * item.basePrice}</p>
        </div>
      </div> 
    </div>
  );
};
