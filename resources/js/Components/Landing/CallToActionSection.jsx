import React from "react";
import logo from "./logo.png";
import vector from "./vector.svg";

export const CallToActionSection = () => {
  const navigationItems = [
    { id: 1, label: "Concepto" },
    { id: 2, label: "Funciones" },
    { id: 3, label: "Inspiración" },
    { id: 4, label: "Contacto" },
  ];

  return (
    <header className="flex max-w-[3340px] w-[3342px] h-24 items-center justify-center gap-[113px] px-[120px] py-0 fixed top-[calc(50.00%_-_2648px)] left-[calc(50.00%_-_1671px)] bg-[#ffffff80] border border-solid border-[#edeaea] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]">
      <img
        className="relative w-[180px] h-16 object-cover"
        alt="Logo"
        src={logo}
      />

      <nav
        className="inline-flex items-center gap-[60px] relative flex-[0_0_auto]"
        aria-label="Main navigation"
      >
        {navigationItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.label.toLowerCase()}`}
            className="relative flex items-center justify-center w-[100px] h-7 mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#999999] text-xl text-center tracking-[0] leading-[normal] hover:text-black transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex w-[206px] items-center gap-[15px] relative">
        <button
          className="flex w-[35px] h-[35px] items-center justify-center gap-[15px] relative bg-black rounded-[58px] rotate-[-13.00deg] aspect-[1] hover:bg-gray-800 transition-colors"
          aria-label="Search"
        >
          <img
            className="relative w-[15.04px] h-[15.99px] rotate-[13.00deg] aspect-[0.75]"
            alt=""
            src={vector}
          />
        </button>

        <button className="inline-flex flex-col items-center justify-center gap-[15px] p-2.5 relative flex-[0_0_auto] bg-black rounded-[63px] hover:bg-gray-800 transition-colors">
          <span className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-xl text-center tracking-[0] leading-[normal]">
            Crear Cuenta
          </span>
        </button>
      </div>
    </header>
  );
};
