import React from "react";
import botones from "./botones.svg";
import fotoPerfil from "./foto-perfil.png";
import recurso23 from "./recurso-2-3.png";
import recurso32 from "./recurso-3-2.png";

export const FAQSection = () => {
  const creatorData = {
    badge: "Creadora de Hugnet",
    name: "Hillary Ramirez",
    bio: 'Apasionada por el diseño interactivo y las nuevas formas de conectar en la red. He creado Hugnet para devolverle la "chispa" a internet.',
    profileImage: fotoPerfil,
    socialButtons: botones,
  };

  return (
    <section
      className="absolute top-[calc(50.00%_+_1729px)] left-[calc(50.00%_-_391px)] w-[782px] h-[406px]"
      aria-label="Creator Information"
    >
      <img
        className="absolute top-[calc(50.00%_-_203px)] left-[calc(50.00%_-_391px)] w-[91px] h-[138px] aspect-[0.66]"
        alt=""
        src={recurso32}
        role="presentation"
      />

      <article className="flex w-[712px] items-center justify-center gap-5 p-5 absolute top-[calc(50.00%_-_148px)] left-[calc(50.00%_-_341px)] bg-[#ffffff80] rounded-[10px] shadow-[inset_0px_5px_10px_#d6ddf04a,inset_0px_19px_19px_#d6ddf042,inset_0px_42px_25px_#d6ddf026,inset_0px_75px_30px_#d6ddf00a,inset_0px_116px_33px_#d6ddf003,0px_4px_6px_-1px_#979db559] backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)]">
        <img
          className="relative w-[180px] h-[179px] ml-[-4.00px] aspect-[1]"
          alt={`${creatorData.name} profile photo`}
          src={creatorData.profileImage}
        />

        <div className="flex flex-col items-start justify-center gap-[15px] relative flex-1 grow">
          <div className="inline-flex items-center justify-center gap-2.5 px-2.5 py-0.5 relative flex-[0_0_auto] bg-[#cbdfbd] rounded-[107px] shadow-[0px_1px_2px_#979db540,0px_4px_4px_#979db536,0px_10px_6px_#979db521,0px_18px_7px_#979db50a,0px_28px_8px_transparent]">
            <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
              {creatorData.badge}
            </span>
          </div>

          <h2 className="relative flex items-center justify-center w-fit [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[32px] text-center tracking-[0] leading-[52.5px] whitespace-nowrap">
            {creatorData.name}
          </h2>

          <p className="relative flex items-center justify-center self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-black text-xl text-justify tracking-[-0.60px] leading-[24.0px]">
            {creatorData.bio}
          </p>

          <img
            className="relative flex-[0_0_auto] mb-[-5.00px] ml-[-5.00px]"
            alt="Social media links"
            src={creatorData.socialButtons}
          />
        </div>
      </article>

      <img
        className="top-[calc(50.00%_+_50px)] left-[calc(50.00%_+_272px)] w-[119px] h-[153px] aspect-[0.78] absolute object-cover"
        alt=""
        src={recurso23}
        role="presentation"
      />
    </section>
  );
};
