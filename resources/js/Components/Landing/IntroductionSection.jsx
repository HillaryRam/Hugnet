import React from "react";
import geminiGeneratedImageOpcmtxopcmtxopcm11 from "./gemini-generated-image-opcmtxopcmtxopcm-1-1.png";
import image from "./image.svg";
import subtract from "./subtract.svg";

export const IntroductionSection = () => {
  const quoteData = {
    icon: image,
    text: "«Un refugio digital diseñado para la creatividad y la calma.»",
    author: "Hillary Ramirez",
  };

  return (
    <section
      className="absolute top-[calc(50.00%_-_2003px)] left-[calc(50.00%_-_527px)] w-[1029px] h-[771px]"
      aria-labelledby="hugnet-title"
    >
      <img
        className="absolute top-[calc(50.00%_-_312px)] left-[calc(50.00%_-_486px)] w-[996px] h-[604px]"
        alt=""
        src={subtract}
        role="presentation"
      />

      <p className="absolute top-[calc(50.00%_-_166px)] left-[calc(50.00%_+_41px)] w-[428px] h-[120px] flex items-center justify-center [font-family:'Inter-Regular',Helvetica] font-normal text-black text-xl text-justify tracking-[0] leading-[24.0px]">
        Es una plataforma que recupera la magia de personalizar tu perfil, pero
        en un entorno 3D. Olvida los muros aburridos; aquí tu perfil es una
        habitación viva donde puedes mostrar quién eres realmente.
      </p>

      <h2
        id="hugnet-title"
        className="absolute top-[calc(50.00%_-_260px)] left-[calc(50.00%_+_56px)] w-[398px] h-[79px] flex items-center justify-center [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-5xl text-center tracking-[0] leading-[78.8px] whitespace-nowrap"
      >
        ¿qué Es Hugnet?
      </h2>

      <img
        className="absolute top-[calc(50.00%_-_385px)] left-[calc(50.00%_-_514px)] w-[545px] h-[771px] aspect-[0.71]"
        alt="Ilustración 3D de Hugnet mostrando una habitación personalizable con elementos decorativos"
        src={geminiGeneratedImageOpcmtxopcmtxopcm11}
      />

      <figure className="flex flex-col w-[335px] h-[157px] items-start gap-[15px] absolute top-[calc(50.00%_+_93px)] left-[calc(50.00%_+_72px)]">
        <img
          className="relative w-5 h-[17px]"
          alt="Icono de comillas"
          src={quoteData.icon}
          aria-hidden="true"
        />

        <blockquote className="relative flex items-center justify-center self-stretch [font-family:'Inter-MediumItalic',Helvetica] font-medium italic text-[#383838] text-xl text-justify tracking-[0] leading-[24.0px]">
          {quoteData.text}
        </blockquote>

        <figcaption className="inline-flex items-center justify-center gap-2.5 px-2.5 py-0.5 relative flex-[0_0_auto] bg-[#c8b6ff] rounded-[107px] shadow-[0px_1px_2px_#979db540,0px_4px_4px_#979db536,0px_10px_6px_#979db521,0px_18px_7px_#979db50a,0px_28px_8px_transparent]">
          <cite className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-xl text-center tracking-[0] leading-[normal] whitespace-nowrap not-italic">
            {quoteData.author}
          </cite>
        </figcaption>
      </figure>
    </section>
  );
};
