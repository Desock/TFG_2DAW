"use client";

import { useCartContext } from "@/context/CartContext";
import type { CartItem } from "@/context/CartContext";

export function useCart() {
  const { state, dispatch } = useCartContext();

  function addItem(item: CartItem) {
    dispatch({ type: "ADD_ITEM", payload: item });
  }

  function removeItem(id: number) {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  }

  function clearCart() {
    dispatch({ type: "CLEAR_CART" });
  }

  return {
    items: state.items,
    totalPrice: state.totalPrice,
    addItem,
    removeItem,
    clearCart,
  };
}
