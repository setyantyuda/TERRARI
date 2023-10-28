import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

const initialState = {
    cart: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const itemToAdd = action.payload;
      const existingItemIndex = state.cart.findIndex(item => item.id === itemToAdd.id);

        if (existingItemIndex !== -1) {
            const updatedCart = state.cart.map((item, index) => {
                const newqty = item.quantity + 1
            if (index === existingItemIndex) {
                return {
                ...item,
                quantity: newqty,
                totalPrice: item.price * newqty,
                };
            }
            return item;
            });
            return { ...state, cart: updatedCart };
        } else {
            const newCartItem = {
            ...itemToAdd,
            quantity: 1,
            totalPrice: itemToAdd.price
            };
            return { ...state, cart: [...state.cart, newCartItem] };
        }
    case 'DECREASE_QUANTITY':
        const itemToDecrease = action.payload;
        const existingDecItemIndex = state.cart.findIndex(item => item.id === itemToDecrease.id);
    
        if (existingDecItemIndex !== -1) {
            const updatedCart = state.cart.map((item, index) => {
            if (index === existingDecItemIndex) {
                const newQuantity = Math.max(item.quantity - 1, 1);
                return {
                ...item,
                quantity: newQuantity,
                totalPrice: item.price * newQuantity
                };
            }
            return item;
            });
            return { ...state, cart: updatedCart };
        }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};