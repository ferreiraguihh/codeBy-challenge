import { useState, useEffect } from "react";
import { useContext } from "react";
import CartContext from "../../context/cart/CartContext";

import { Container, AmountTruffle } from "./styles";
import { convertPriceBRL, notificationWarning, notificationSuccess } from '../../utils/index'

import { store } from "react-notifications-component"



export function Products({ prod }) {
    const { addToCart, updateToCart, cartItems } = useContext(CartContext);
    const [itemCartUp, setItemCartUp] = useState(cartItems)
    const price = (prod.listPrice / 100)


    const checkProductCart = () => {
        const filtProdctCart = cartItems.filter(el => el.id === prod.id)
        if (prod.quantity < 50) {
            if (filtProdctCart.length > 0) {
                filtProdctCart[0].quantity = filtProdctCart[0].quantity + 1
                filtProdctCart[0].price = (filtProdctCart[0].listPrice * filtProdctCart[0].quantity)
                setItemCartUp(...cartItems, filtProdctCart)
            } else {
                addToCart(prod)
            }
            notificationSuccess()
        } else {
            notificationWarning()
        }
    }
    return (
        <Container>
            <img src={prod.imageUrl} />
            <div>
                <h4>{prod.name}</h4>
                <p>{convertPriceBRL(price)}</p>
            </div>
            <AmountTruffle>
                <button onClick={() => checkProductCart()}>Adicionar ao carrinho</button>
            </AmountTruffle>
        </Container>
    );
}