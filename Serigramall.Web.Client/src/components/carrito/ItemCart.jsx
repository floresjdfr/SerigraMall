import React, { useContext } from "react";
import CartContext from "./CartContext";

export const ItemCart = ({ item }) => {

  const { editItemToCart } = useContext(CartContext);
  const { amount } = item;

  return (
    <div className="cartItem">
      <img src="item.img" alt="item.name" />
      <div className="dataCon2tainer">
        <div className="left">
          <p>{item.name}</p>
          <div className="buttons">
            <button onClick={() => editItemToCart(item._id, "add", amount)}>
              AGREGAR
            </button>
            <button onClick={() => editItemToCart(item._id, "del", amount)}>
              SACAR
            </button>
          </div>
        </div>
        <div className="right">
          <div>{item.amount}</div>
          <p>Total: ${item.amount * item.price}</p>
        </div>
      </div>
    </div>
  );
};
