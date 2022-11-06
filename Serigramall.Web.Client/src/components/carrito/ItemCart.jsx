import React, { useContext } from "react";
import CartContext from "./CartContext";
import '../../styles/cartStyle.css';
import { Container } from "react-bootstrap";

export const ItemCart = ({ item }) => {

  const { deleteItemToCart, addItemToCart, addItemToCartser } = useContext(CartContext);
  const { id } = item;

  return (
    <Container>
      <div className="cartItem">
        <div className="dataContainer">
          <img className="cartItemimg" src={`data:image/jpeg;base64,${item.image}`} />
          <div className="left">
            <p className="leftp">{item.productName}</p>
            <p className="leftp">Total: ₡{item.amount * item.basePrice}</p>
            {
              item.seri !== undefined ?
                <><div className="cartItem2">
                  <img className="cartItemimg2" src={`data:image/jpeg;base64,${item.seri.image}`} />
                  <div className="dataContainer2">
                    <div className="left2">
                      <p className="leftp2">{item.seri.productName}</p>
                      <p className="leftp2">Total: ₡{item.seri.basePrice}</p>
                    </div>
                  </div>
                </div></> :
                <>
                </>
            }
            <div className="leftbuttons">
              <button className="leftbutton" onClick={() => addItemToCart(item)}>Agregar</button>
              <button className="leftbutton" onClick={() => deleteItemToCart(item)}>Eliminar</button>
            </div>
          </div>
          <div className="right">
            <div className="rightdiv">{item.amount}</div>
          </div>
        </div>
      </div>
    </Container>
  );
};
/*
  


*/