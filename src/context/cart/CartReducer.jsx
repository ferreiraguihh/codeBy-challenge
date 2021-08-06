import { ADD_TO_CART, REMOVE_ITEM, TOTAL_PRICE_TRUFFLE } from "../Types";

const CartReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
            };
        }
        case REMOVE_ITEM: {
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (item) => item.id !== action.payload
                ),
            };
        }
        case TOTAL_PRICE_TRUFFLE: {
            return {
                ...state,
                total: action.payload / 100
            }
        }

        default:
            return state;
    }
};

export default CartReducer;
