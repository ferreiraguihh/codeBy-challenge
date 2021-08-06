import { useContext } from "react";
import Modal from "react-modal";

import CartContext from "../../context/cart/CartContext";
import { HeaderCart, BodyCart, OverallCart, ButtonCart } from "./styles";

import { convertPriceBRL, notificationDefault } from '../../utils'

import { CartProducts } from './CartProducts'
import closeImg from '../assets/button-close.svg'

export function ShoppingCart({ isOpen, onRequestClose }) {
    const { cartItems } = useContext(CartContext);
    const limitPrice = (1000 / 100)

    const totalPrice = cartItems.reduce((prevVal, elem) => prevVal + elem.price, 0)

    function textFreeShipping() {
        if ((totalPrice/100) > limitPrice) {
            return (
                <h3>Parabéns, sua compra tem frete grátis</h3>
            )
        }
    }

    function finishPurchase() {
        cartItems.splice(0, cartItems.length)
        onRequestClose()
        notificationDefault()
    }

    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
                ariaHideApp={false}
            >
                <button
                    type="button"
                    onClick={onRequestClose}
                    className="react-modal-close"
                >
                    <img src={closeImg} alt="Fechar modal" />
                </button>

                <HeaderCart>Meu carrinho</HeaderCart>
                {cartItems.length > 0 ? (
                    <>
                        <BodyCart>
                            {cartItems?.map(items => (
                                <CartProducts prod={items} key={items.id} />
                            ))}
                        </BodyCart>
                        <OverallCart>
                            <div>
                                <h4>Total</h4>
                                <h4>{convertPriceBRL(totalPrice / 100)}</h4>
                            </div>
                            {textFreeShipping()}
                        </OverallCart>
                        <ButtonCart>
                            <button onClick={() => finishPurchase()}>Finalizar compra</button>
                        </ButtonCart>
                    </>) :
                    <h1>O carrinho está vazio </h1>}
            </Modal>

        </>
    )
}