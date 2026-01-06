import React from "react";
import { CallToActionSection } from "./CallToActionSection";
import { ContactSection } from "./ContactSection";
import { FAQSection } from "./FAQSection";
import { FeaturesSection } from "./FeaturesSection";
import { HeroSection } from "./HeroSection";
import { InfoSection } from "./InfoSection";
import { IntroductionSection } from "./IntroductionSection";
import { ResourcesSection } from "./ResourcesSection";
import { TestimonialsSection } from "./TestimonialsSection";
//import pulpoLlavero from "./pulpo-llavero.png";
//import rectangle53 from "./rectangle-53.png";
//import rectangle54 from "./rectangle-54.png";
//import recurso21 from "./recurso-2-1.png";
//import star6 from "./star-6.png";
//import star7 from "./star-7.svg";
//import star8 from "./star-8.svg";
//import star10 from "./star-10.svg";
//import star11 from "./star-11.svg";
//import vector2 from "./vector-2.svg";

export const Wireframe = () => {
  const badges = [
    {
      text: "Conexión real en tu espacio virtual",
      bgColor: "bg-[#c8b6ff]",
    },
    {
      text: "v1.0 Beta",
      bgColor: "bg-[#79a0e8]",
    },
  ];

  return (
    <div className="bg-white overflow-hidden w-full min-w-[1440px] min-h-[5294px] relative">
      <CallToActionSection />

      <header className="absolute top-[134px] left-0 right-0">
        <div className="inline-flex items-center gap-5 absolute top-0 left-[calc(50.00%_-_244px)]">
          {badges.map((badge, index) => (
            <div
              key={index}
              className={`inline-flex items-center justify-center gap-2.5 px-2.5 py-0.5 relative flex-[0_0_auto] ${badge.bgColor} rounded-[107px] shadow-[0px_1px_2px_#979db540,0px_4px_4px_#979db536,0px_10px_6px_#979db521,0px_18px_7px_#979db50a,0px_28px_8px_transparent]`}
            >
              <p className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
                {badge.text}
              </p>
            </div>
          ))}
        </div>

        <div className="absolute top-[51px] left-[calc(50.00%_-_396px)] w-[794px] h-[290px]">
          <h1 className="absolute top-[22px] left-[calc(50.00%_-_397px)] w-[792px] h-[230px] flex items-center justify-center [font-family:'Inter-Black',Helvetica] font-black text-black text-8xl text-center tracking-[4.80px] leading-[115.2px]">
            HABITA
            <br />
            TU IDENTIDAD
          </h1>

          <img
            className="absolute top-[15px] left-[calc(50.00%_-_242px)] w-[75px] h-[76px]"
            alt="Star decoration"
            src={star6}
          />

          <img
            className="absolute top-[183px] left-[calc(50.00%_+_256px)] w-[78px] h-[98px]"
            alt="Star decoration"
            src={star7}
          />
        </div>

        <p className="absolute top-[333px] left-[calc(50.00%_-_396px)] w-[792px] h-12 flex items-center justify-center [font-family:'Inter-Regular',Helvetica] font-normal text-[#383838] text-xl text-center tracking-[0] leading-[24.0px]">
          Diseña tu habitación virtual 3D, personalízala a tu gusto y<br />
          conecta con personas de forma auténtica. Tu espacio, tus reglas.
        </p>

        <button className="inline-flex flex-col items-start gap-2.5 p-2.5 absolute top-[417px] left-[calc(50.00%_-_88px)] bg-black rounded-[63px] cursor-pointer hover:bg-gray-900 transition-colors">
          <div className="relative w-[157.57px] h-6 mr-[-2.00px]">
            <span className="absolute top-0 left-0 h-6 flex items-center justify-center [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
              Empezar Ahora
            </span>

            <img
              className="absolute top-1 left-[140px] w-4 h-[18px]"
              alt="Arrow icon"
              src={vector2}
            />
          </div>
        </button>
      </header>

      <IntroductionSection />

      <section className="absolute top-[1142px] left-0 right-0">
        <h2 className="absolute top-0 left-[calc(50.00%_-_396px)] w-[792px] h-[79px] flex items-center justify-center [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-5xl text-center tracking-[0] leading-[78.8px]">
          Tu Nuevo Hogar Digital
        </h2>

        <img
          className="top-[608px] left-[calc(50.00%_-_88px)] w-[577px] h-[532px] aspect-[1.21] absolute object-cover"
          alt="Recurso 3D"
          src={recurso21}
        />

        <article className="flex flex-col w-[282px] items-center justify-center gap-[15px] p-5 absolute top-[472px] left-[calc(50.00%_+_216px)] bg-[#ffe9d3] rounded-[10px] overflow-hidden shadow-[0px_4px_6.1px_-1px_#979db559]">
          <div className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto]">
            <h3 className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[32px] text-center tracking-[0] leading-[38.4px]">
              Conexión
              <br />
              Instantánea
            </h3>

            <img
              className="relative w-[126px] h-[110px] aspect-[1.15]"
              alt="Conexión instantánea icon"
              src={rectangle53}
            />
          </div>

          <p className="relative flex items-center justify-center self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-black text-xl tracking-[0] leading-[24.0px]">
            Chatea con amigos mientras visitan tu sala. Siente la presencia de
            los demás en tiempo real.
          </p>
        </article>

        <img
          className="absolute top-[449px] left-[876px] w-24 h-24 bg-blend-multiply aspect-[1]"
          alt="Star decoration"
          src={star11}
        />

        <article className="flex flex-col w-96 h-48 items-start justify-center gap-[15px] p-5 absolute top-[839px] left-[calc(50.00%_-_498px)] bg-[#e2eafc] rounded-[10px] shadow-[0px_4px_6.1px_-1px_#979db559]">
          <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
            <img
              className="relative w-[70px] h-[61px] aspect-[1.14]"
              alt="Enlaces vivos icon"
              src={rectangle54}
            />

            <h3 className="relative flex items-center justify-center w-fit [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[32px] tracking-[0] leading-[28.0px] whitespace-nowrap">
              Enlaces Vivos
            </h3>
          </div>

          <p className="relative flex items-center justify-center self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-black text-xl tracking-[0] leading-[24.0px]">
            Convierte tu televisión virtual en tu playlist de Spotify o tu
            portafolio personal.
          </p>
        </article>

        <img
          className="absolute top-[993px] left-[1176px] w-[66px] h-[85px]"
          alt="Star decoration"
          src={star10}
        />

        <div className="absolute top-[782px] left-[184px] w-[83px] h-[83px] rounded-[41.5px] border border-solid border-white shadow-[0px_4px_4px_#979db580,inset_3px_3px_0px_-3px_#ff9c0080,inset_2px_2px_1px_-2px_#b3b3b3,inset_0px_0px_0px_1px_#999999,inset_0px_0px_22px_#f2f2f280] backdrop-blur-[2.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2.5px)_brightness(100%)] bg-blend-soft-light [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,0,200,0.5)_0%,rgba(255,156,0,0.5)_100%),linear-gradient(0deg,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_100%)]" />
      </section>

      <TestimonialsSection />

      <ResourcesSection />

      <section className="absolute top-[2340px] left-0 right-0">
        <div className="absolute top-0 left-[calc(50.00%_-_83px)] w-[171px] h-[53px]">
          <div className="absolute top-[calc(50.00%_-_12px)] left-[calc(50.00%_-_74px)] bg-[#fcae05] inline-flex items-center justify-center gap-2.5 px-2.5 py-0.5 rounded-[107px] shadow-[0px_1px_2px_#979db540,0px_4px_4px_#979db536,0px_10px_6px_#979db521,0px_18px_7px_#979db50a,0px_28px_8px_transparent]">
            <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
              Fácil y Rápido
            </span>
          </div>

          <img
            className="absolute top-[50.00%] left-[calc(50.00%_-_86px)] w-[27px] h-[27px]"
            alt="Star decoration"
            src={star8}
          />

          <div className="absolute top-[calc(50.00%_-_26px)] left-[calc(50.00%_+_60px)] w-[25px] h-[25px] bg-black rounded-[12.5px] shadow-[inset_3px_3px_0px_-3px_#ff9c0080,inset_-2px_-2px_1px_-2px_#b3b3b3,inset_2px_2px_1px_-2px_#b3b3b3,inset_0px_0px_0px_1px_#999999,inset_0px_0px_22px_#f2f2f280,0px_4px_4px_#979db540] backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)] bg-blend-soft-light" />
        </div>

        <h2 className="absolute top-[38px] left-[calc(50.00%_-_295px)] w-[588px] h-[79px] flex items-center justify-center [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-5xl text-center tracking-[0] leading-[78.8px]">
          Empieza En Minutos
        </h2>
      </section>

      <InfoSection />

      <HeroSection />

      <ContactSection />

      <img
        className="absolute top-[calc(50.00%_+_1398px)] left-[calc(50.00%_-_145px)] w-[393px] h-[366px]"
        alt="Pulpo llavero mascot"
        src={pulpoLlavero}
      />

      <FAQSection />

      <FeaturesSection />
    </div>
  );
};
