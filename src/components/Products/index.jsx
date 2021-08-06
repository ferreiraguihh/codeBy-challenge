import { useContext } from "react";
import CartContext from "../../context/cart/CartContext";

import { Container, AmountTruffle } from "./styles";
import { convertPriceBRL, notificationWarning, notificationSuccess } from '../../utils/index'


export function Products({ prod }) {
    const { addToCart, cartItems } = useContext(CartContext);
    const price = (prod.listPrice / 100)


    const checkProductCart = () => {
        const filtProdctCart = cartItems.filter(el => el.id === prod.id)
        if (prod.quantity < 50) {
            if (filtProdctCart.length > 0) {
                filtProdctCart[0].quantity = filtProdctCart[0].quantity + 1
                filtProdctCart[0].price = (filtProdctCart[0].listPrice * filtProdctCart[0].quantity)
                cartItems.reduce((prevVal, elem) => prevVal + elem.price, 0)
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
            <img src={prod.imageUrl} alt="truffle" />
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