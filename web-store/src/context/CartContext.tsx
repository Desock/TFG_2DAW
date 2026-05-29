"use client";

import { createContext, useContext, useEffect, useReducer } from "react";

export interface CartItem {
  id: number;               // ID del setup
  title: string;
  price: number;
  thumbnail?: string;
  snapshot: JSON;            // JSON del setup
  quantity: number;         // siempre 1, pero escalable
}

export interface CartState {
  items: CartItem[];
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
};

type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: number } // id del setup
  | { type: "CLEAR_CART" }
  | { type: "LOAD_FROM_STORAGE"; payload: CartState };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "LOAD_FROM_STORAGE":
      return action.payload;

    case "ADD_ITEM": {
      const exists = state.items.find((i) => i.id === action.payload.id);
      if (exists) return state; // no duplicados

      const updatedItems = [...state.items, action.payload];
      const updatedTotal = updatedItems.reduce((acc, item) => acc + item.price, 0);

      return {
        items: updatedItems,
        totalPrice: updatedTotal,
      };
    }

    case "REMOVE_ITEM": {
      const updatedItems = state.items.filter((i) => i.id !== action.payload);
      const updatedTotal = updatedItems.reduce((acc, item) => acc + item.price, 0);

      return {
        items: updatedItems,
        totalPrice: updatedTotal,
      };
    }

    case "CLEAR_CART":
      return initialState;

    default:
      return state;
  }
}

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Cargar carrito desde localStorage
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      dispatch({
        type: "LOAD_FROM_STORAGE",
        payload: JSON.parse(stored),
      });
    }
  }, []);

  // Guardar carrito en localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCartContext must be used inside CartProvider");
  return ctx;
}
