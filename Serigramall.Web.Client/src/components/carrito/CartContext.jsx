import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        try {
            const productosEnLocalStorage = localStorage.getItem("cartProducts");
            return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];

        } catch (error) {
            return [];
        }
    });
    useEffect(() => {
        try {
            localStorage.setItem("cartProducts", JSON.stringify(cartItems));

        } catch (error) {
            console.log("error");
        }
        console.log(cartItems);
    }, [cartItems]);

    const addItemToCart = (product) => {
        console.log("agrgando producto sin seigrcia");
        const inCart = cartItems.find(
            (productInCart) => productInCart.id == product.id);
        if (product.seri !== undefined) {
            addItemToCartser(product, product.seri);
        } else {
            if (inCart) {
                setCartItems(
                    cartItems.map((productInCart) => {
                        if (productInCart.id == product.id) {
                            console.log("esta en el carro");
                            return { ...inCart, amount: inCart.amount + 1, seri: undefined };
                        } else {
                            console.log("no esta en el carro");
                            return productInCart;
                        }
                    })
                );
            } else {
                console.log(" sin seigrcia else");
                setCartItems([...cartItems, { ...product, amount: 1, seri: undefined }]);
            }
        }

    };
    const addItemToCartser = (product, serigraphy) => {
        console.log("producto con serigrafia");
        console.log(product);
        console.log(serigraphy);
        const inCart = cartItems.find(
            (productInCart) => productInCart.seri.id === serigraphy.id);

        const productInCart = cartItems.find(
            (productInCart) => {
                console.log("car");
                console.log(inCart);
                
                console.log(productInCart.seri.id);
                productInCart.seri.id == productInCart.seri.id === serigraphy.id
            });
        console.log("producto en el carrito");
        console.log(productInCart);

        if (inCart && productInCart.id == product.id && productInCart.seri.id != serigraphy.id) {
            console.log("difernte serigrafias");
            console.log(productInCart);
            console.log(productInCart.seri.id);
            console.log(serigraphy.id);
            console.log(productInCart.seri.id != serigraphy.id);

            setCartItems([...cartItems, { ...productInCart, amount: 1, seri: serigraphy }]);
        } else if (inCart && productInCart.id == product.id && productInCart.seri.id == serigraphy.id) {
            setCartItems(
                cartItems.map((productInCart) => {
                    console.log("dento del map")
                    if (productInCart.id == product.id && productInCart.seri.id == serigraphy.id) {
                        console.log("222productInCart" + productInCart);
                        return { ...productInCart, amount: inCart.amount + 1 };
                    } else {
                        console.log("no esta en el carro");
                        return productInCart;
                    }
                }))
        } else {
            console.log(" con seigrcia else");
            setCartItems([...cartItems, { ...product, amount: 1, seri: serigraphy }]);
        }
    };

    const deleteItemToCart = (product) => {
        const inCart = cartItems.find(
            (productInCart) => productInCart.id === product.id
        );
        if (inCart.amount === 1) {
            console.log("en el carro solo hay un producto");
            setCartItems(
                cartItems.filter(productInCart => productInCart.id !== product.id)
            );
        } else {
            setCartItems(
                cartItems.map((productInCart) => {
                    if (productInCart.id === product.id) {
                        console.log("producto esta en carro");
                        return { ...inCart, amount: inCart.amount - 1 };
                    }
                    else {
                        console.log("no existe producto");
                        return productInCart;
                    }

                }));
        }
        console.log("delete");
        console.log(cartItems);
    };

    return (
        /* Envolvemos el children con el provider y le pasamos un objeto con las propiedades que necesitamos por value */
        <CartContext.Provider
            value={{ cartItems, addItemToCart, addItemToCartser, deleteItemToCart }}
        >
            {children}
        </CartContext.Provider>
    );

};
export default CartContext;

/*


*/