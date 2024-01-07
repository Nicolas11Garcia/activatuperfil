import React from "react";

export const ItemCarousel = ({ cantidad, tipo, precio }) => {
  return (
    <div
      style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.08)" }}
      className="border shadow-sm p-4 bg-white rounded-xl flex justify-center flex-col items-center "
    >
      <div className="border-b w-full max-w-[200px] text-center pb-4">
        <p className="text-negro font-bold text-[28px] sm:text-[40px] mb-1">
          {cantidad.toLocaleString("es-CL")}
        </p>
        <p className="text-base sm:text-xl text-parrafo">{tipo}</p>
      </div>
      <div className="flex justify-center w-full max-w-[200px] pt-4 items-center">
        <p className="text-primary font-extrabold text-xl sm:text-2xl">
          ${precio.toLocaleString("es-CL")}
        </p>
      </div>
    </div>
  );
};
