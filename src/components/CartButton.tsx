import React from "react";

import { useStore } from "@nanostores/react";
import { atom } from "nanostores";

export const isCartOpen = atom(false);

function CartButton() {
  const $isCartOpen = useStore(isCartOpen);

  return (
    <div>
      <button onClick={() => isCartOpen.set(!$isCartOpen)}>Cart</button>
    </div>
  );
}

export default CartButton;
