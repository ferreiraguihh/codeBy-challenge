import { useState, useEffect } from "react";
import { Container, AmountTruffle, ButtonDelete } from "./styles";
import { convertPriceBRL, notificationInfo } from '../../utils'

import { useContext } from "react";
import CartContext from "../../context/cart/CartContext";

export function CartProducts({ prod }) {
    const { removeItem, cartItems, updateToCart, addToCart, total, totalPriceTruffle } = useContext(CartContext);
    const [itemCartUp, setItemCartUp] = useState(prod)
    const [inputAmount, setInputAmount] = useState(prod.quantity)
    const [priceTruffle, setPriceTruffle] = useState(prod.price)

    const filtProdctCart = cartItems.filter(el => el.id === prod.id)

    useEffect(() => {
        const totalPrice = cartItems.reduce((prevVal, elem) => prevVal + elem.price, 0)
        totalPriceTruffle(totalPrice)
    }, [filtProdctCart])

    useEffect(() => {
        setItemCartUp(prod)
        setInputAmount(prod.quantity)
        setPriceTruffle(prod.price)
    }, [itemCartUp])

    const plusTruffle = () => {
        if (prod.quantity < 50) {
            filtProdctCart[0].quantity = filtProdctCart[0].quantity + 1
            filtProdctCart[0].price = (filtProdctCart[0].price + filtProdctCart[0].listPrice)
            setItemCartUp(filtProdctCart)
        }
    }

    const lessTruffle = () => {
        if (prod.quantity > 1) {
            filtProdctCart[0].quantity = filtProdctCart[0].quantity - 1
            filtProdctCart[0].price = (filtProdctCart[0].price - filtProdctCart[0].listPrice)
            setItemCartUp(filtProdctCart)
        }
    }

    const removeTruffle = () => {
        if (filtProdctCart.length > 0) {
            filtProdctCart[0].quantity = 1;
            filtProdctCart[0].price = filtProdctCart[0].listPrice
            removeItem(prod.id)
            notificationInfo()
        }
    }
    return (
        <Container>
            <div className="container-img-amount">
                <img src={prod.imageUrl} />

                <AmountTruffle>
                    <h4>{prod.name}</h4>
                    <div className="container-price-amount">
                        <p>{convertPriceBRL(priceTruffle / 100)}</p>
                        <div className="container-amount">
                            <span onClick={() => lessTruffle()}>-</span>
                            <input type="number" value={prod.quantity} />
                            <span onClick={() => plusTruffle()}>+</span>
                        </div>
                    </div>
                    <p></p>
                </AmountTruffle>
            </div>
            <ButtonDelete onClick={() => removeTruffle()}>Remover</ButtonDelete>
        </Container>
    );
}