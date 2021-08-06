import { Container, CartIcon, ItemCount } from './styles'
import { useContext } from "react";
import CartContext from "../../context/cart/CartContext";

import trufa from '../assets/trufa.png'
export function Header({ onOpenCartModal }) {
    const { cartItems } = useContext(CartContext);

    return (
        <Container>
            <img src={trufa} />
            <CartIcon onClick={() => onOpenCartModal()}>
                <i
                    className='fa fa-shopping-cart'
                    aria-hidden='true'
                // onClick={showHideCart}
                />
                {cartItems.length > 0 && (
                    <ItemCount>
                        <span>{cartItems.length}</span>
                    </ItemCount>
                )}
            </CartIcon>
        </Container>
    )
}