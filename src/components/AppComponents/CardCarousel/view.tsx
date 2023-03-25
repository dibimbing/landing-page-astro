/* eslint-disable no-constant-condition */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Icon } from "@iconify/react";
import { useState } from "react";

const CardCarouel = ({
  itemsLength,
  children,
}: {
  itemsLength: number;
  children: any;
}) => {
  const [indexView, setIndexView] = useState(0);
  const maxIndexView = itemsLength - 3;
  const isPrevDisabled = indexView === 0;
  const isNextDisabled = indexView === maxIndexView;

  const handleChangeIndexView = (index: number) => {
    if (index === -1 || index === maxIndexView + 1) return;
    setIndexView(index);
  };

  return (
    <>
      <div className="relative group/edit" style={{ margin: "0 auto" }}>
        <div className="flex flex-row w-full" style={{ overflowX: "hidden" }}>
          <div
            className="flex flex-row items-start gap-4 w-full"
            style={{
              transform: `translateX(calc((((100% - 32px) * 1/3) + 16px) * -${indexView}))`,
              transition: "transform 0.3s",
            }}
          >
            {children}
          </div>
        </div>

        <div
          className="opacity-0 group-hover/edit:opacity-100"
          style={{ transition: "ease-out 0.3s" }}
        >
          <button
            className="absolute top-[calc(50%_-_25px)] bg-primary text-white p-2 rounded-full disabled:bg-grey200 disabled:cursor-not-allowed translate-x-[50%] group-hover/edit:translate-x-0"
            style={{
              left: -20,
              transition: "ease-out 0.3s",
              boxShadow:
                "0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05)",
            }}
            onClick={() => handleChangeIndexView(indexView - 1)}
            disabled={isPrevDisabled}
          >
            <Icon icon="bx:chevron-left" fontSize="24px" />
          </button>

          <button
            className="absolute top-[calc(50%_-_25px)] bg-primary text-white p-2 rounded-full disabled:bg-grey200 disabled:cursor-not-allowed translate-x-[-50%] group-hover/edit:translate-x-0"
            style={{
              right: -20,
              transition: "ease-out 0.3s",
              boxShadow:
                "0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05)",
            }}
            onClick={() => handleChangeIndexView(indexView + 1)}
            disabled={isNextDisabled}
          >
            <Icon icon="bx:chevron-right" fontSize="24px" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CardCarouel;
