import { useStore } from "@nanostores/react";
import React, { useState } from "react";
import { isCartOpen } from "./CartButton";

function Counter() {
  const [counter, setcounter] = useState(1);
  const $isCartOpen = useStore(isCartOpen);
  return (
    <div className="flex flex-col items-center">
      {$isCartOpen ? (
        <>
          <p className="font-bold text-xl">{counter}</p>
        </>
      ) : null}
      <button onClick={() => setcounter((prev) => prev + 1)}>Tambah</button>
    </div>
  );
}

export default Counter;
