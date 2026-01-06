import React from "react";
import image from "./image.png";
import rectangle662 from "./rectangle-66-2.png";
import rectangle66 from "./rectangle-66.png";

export const HeroSection = () => {
  const features = [
    {
      id: 1,
      image: rectangle66,
      title: "Para Ti",
      description:
        "Crea tu diario visual o muestra tus gustos\nde forma única.",
      alt: "Para Ti",
    },
    {
      id: 2,
      image: image,
      title: "Para Grupos",
      description:
        "Organiza salas de estudio o rincones de reunión para tu comunidad.",
      alt: "Para Grupos",
    },
    {
      id: 3,
      image: rectangle662,
      title: "Para Creadores",
      description: "Diseña showrooms interactivos para\ntus seguidores.",
      alt: "Para Creadores",
    },
  ];

  return (
    <section className="inline-flex items-center gap-5 absolute top-[calc(50.00%_+_90px)] left-[calc(50.00%_-_498px)]">
      {features.map((feature) => (
        <article
          key={feature.id}
          className="flex flex-col w-[318px] items-center justify-center gap-[15px] p-5 relative bg-[#ffffff80] rounded-[10px]"
        >
          <img
            className="relative w-[189px] h-[189px] aspect-[1]"
            alt={feature.alt}
            src={feature.image}
          />

          <div className="flex flex-col items-center justify-center gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
            <h2 className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[32px] text-center tracking-[0] leading-[52.5px]">
              {feature.title}
            </h2>

            <p className="relative flex items-center justify-center self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-black text-xl text-center tracking-[0] leading-[24.0px] whitespace-pre-line">
              {feature.description}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
};
