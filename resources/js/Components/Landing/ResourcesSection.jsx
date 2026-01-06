//import React from "react";
//import escudoIcon from "./escudo-icon.png";

export const ResourcesSection = () => {
  const resourceData = {
    icon: escudoIcon,
    iconAlt: "Escudo icon",
    title: "Privacidad Total",
    description:
      "Tú decides quién tiene las llaves de tu habitación. Pública, privada o solo para amigos.",
  };

  return (
    <section
      className="flex w-[588px] items-center justify-center gap-[15px] px-[25px] py-5 absolute top-[1981px] left-[calc(50.00%_-_90px)] bg-[#ffffff80] rounded-[10px] border border-solid border-[#f8f8f8] shadow-[inset_0px_4px_9px_#d6ddf04a,inset_0px_16px_16px_#d6ddf042,inset_0px_35px_21px_#d6ddf026,inset_0px_62px_25px_#d6ddf00a,inset_0px_97px_27px_#d6ddf003,0px_4px_6.1px_-1px_#979db559] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]"
      aria-labelledby="privacy-title"
    >
      <img
        className="relative w-[152px] h-[152px] aspect-[1]"
        alt={resourceData.iconAlt}
        src={resourceData.icon}
      />

      <div className="flex flex-col items-start justify-center gap-[15px] relative flex-1 grow">
        <h2
          id="privacy-title"
          className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[32px] text-center tracking-[0] leading-[52.5px] whitespace-nowrap"
        >
          {resourceData.title}
        </h2>

        <p className="relative flex items-center justify-center self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-black text-xl tracking-[0] leading-[24.0px]">
          {resourceData.description}
        </p>
      </div>
    </section>
  );
};
