import React from "react";
import ellipse13 from "./ellipse-13.svg";
import path from "./path.svg";
import star112 from "./star-11-2.svg";
import star12 from "./star-12.svg";
import subtract2 from "./subtract-2.svg";
import union2 from "./union-2.svg";
import union3 from "./union-3.svg";
import union from "./union.svg";
import vector3 from "./vector-3.svg";
import vector4 from "./vector-4.svg";
import vector5 from "./vector-5.svg";
import vector6 from "./vector-6.svg";
import vector7 from "./vector-7.svg";
import vector8 from "./vector-8.svg";

export const ContactSection = () => {
  const faqData = [
    {
      question: "¿Es gratis?",
      answer:
        "¡Sí! Las funciones básicas y una gran selección de muebles son totalmente gratuitas.",
      position: { top: 0, left: 0 },
      questionWidth: "169px",
      answerWidth: "502px",
    },
    {
      question: "¿Necesito descargar algo?",
      answer:
        "No. Hugnet funciona directamente en tu navegador favorito, móvil o escritorio.",
      position: { top: 0, left: "697px" },
      questionWidth: "411px",
      answerWidth: "502px",
    },
    {
      question: "¿Puedo invitar a gente?",
      answer:
        "¡Claro! Cada habitación tiene un enlace único que puedes compartir con quien quieras.",
      position: { top: "174px", left: 0 },
      questionWidth: "363px",
      answerWidth: "502px",
    },
    {
      question: "¿Cómo se guardan mis datos?",
      answer:
        "Tus datos están seguros y cifrados. Respetamos tu privacidad por encima de todo.",
      position: { top: "174px", left: "697px" },
      questionWidth: "465px",
      answerWidth: "502px",
    },
  ];

  const hashtags = [
    {
      text: "#ConexiónReal",
      position: { top: "17px", left: "420px" },
      width: "220px",
      height: "70px",
      rotation: "",
      bgColor: "",
      textColor: "text-white",
      hasSubtract: true,
    },
    {
      text: "#CodeWithLove",
      position: { top: "117px", left: "488px" },
      width: "228px",
      height: "70px",
      rotation: "rotate-[3.57deg]",
      bgColor: "bg-[#5eaff2]",
      textColor: "text-white",
      hasSubtract: false,
    },
    {
      text: "#ChatEnVivo",
      position: { top: "197px", left: "647px" },
      width: "196px",
      height: "87px",
      rotation: "rotate-[-6.36deg]",
      bgColor: "",
      textColor: "text-black",
      hasUnion: true,
    },
    {
      text: "#TuEspacioTuReglas",
      position: { top: "197px", left: "293px" },
      width: "286px",
      height: "70px",
      rotation: "",
      bgColor: "bg-[#a480f299]",
      textColor: "text-white",
      hasShadow: true,
    },
  ];

  return (
    <section
      className="flex flex-col max-w-[1480px] w-[1480px] h-[854px] items-center justify-center gap-[70px] px-[120px] py-[25px] absolute top-[calc(50.00%_+_584px)] left-[calc(50.00%_-_740px)] bg-black rounded-[20px] overflow-hidden"
      aria-labelledby="faq-heading"
    >
      <h2
        id="faq-heading"
        className="relative flex items-center justify-center self-stretch mt-[-0.80px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-5xl text-center tracking-[0] leading-[78.8px]"
      >
        Preguntas Frecuentes
      </h2>

      <div className="flex flex-wrap items-start gap-[58px_186px] relative self-stretch w-full flex-[0_0_auto]">
        {faqData.map((faq, index) => (
          <article
            key={index}
            className="grid grid-cols-[repeat(1,fit-content(100%))] grid-rows-[repeat(2,fit-content(100%))] w-[511px] h-[116px] gap-[15px_0px] absolute"
            style={{ top: faq.position.top, left: faq.position.left }}
          >
            <h3
              className="relative flex items-center justify-center row-[1_/_2] col-[1_/_2] h-[53px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[32px] text-center tracking-[0] leading-[52.5px] whitespace-nowrap"
              style={{ width: faq.questionWidth }}
            >
              {faq.question}
            </h3>

            <p
              className="relative flex items-center justify-center row-[2_/_3] col-[1_/_2] h-12 [font-family:'Inter-Regular',Helvetica] font-normal text-white text-xl text-justify tracking-[0] leading-[24.0px]"
              style={{ width: faq.answerWidth }}
            >
              {faq.answer}
            </p>
          </article>
        ))}
      </div>

      <div className="relative w-[1006.2px] h-[294.6px]" aria-hidden="true">
        <div className="relative w-[1006px] h-[295px]">
          <div className="absolute w-[255px] h-[148px] top-[29px] left-[193px]">
            <img
              className="absolute top-[13px] left-px w-[242px] h-[135px]"
              alt=""
              src={union}
            />

            <img
              className="absolute top-[25px] left-2.5 w-[222px] h-[106px]"
              alt=""
              src={union2}
            />
          </div>

          <div className="absolute top-[121px] left-0 w-[286px] h-[174px]">
            <img
              className="absolute top-[15px] left-[13px] w-[260px] h-[143px]"
              alt=""
              src={star112}
            />

            <div className="absolute top-[19px] left-[51px] w-[186px] h-[129px]">
              <div className="absolute top-[11px] left-1.5 h-[105px] flex items-center justify-center rotate-[-8.59deg] [-webkit-text-stroke:1px_#ffffff] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[64px] text-center tracking-[0] leading-[105.0px] whitespace-nowrap">
                GooD
              </div>

              <img
                className="absolute top-[45px] left-[57px] w-[25px] h-[13px]"
                alt=""
                src={vector6}
              />

              <img
                className="absolute top-[38px] left-[97px] w-[25px] h-[13px]"
                alt=""
                src={vector7}
              />

              <img
                className="absolute top-[91px] left-[82px] w-[33px] h-[19px]"
                alt=""
                src={vector8}
              />
            </div>
          </div>

          {hashtags.map((tag, index) => (
            <div
              key={index}
              className={`absolute ${tag.rotation}`}
              style={{
                top: tag.position.top,
                left: tag.position.left,
                width: tag.width,
                height: tag.height,
              }}
            >
              {tag.hasSubtract && (
                <img
                  className="absolute top-[-250px] left-[-250px] w-[718px] h-[553px]"
                  alt=""
                  src={subtract2}
                />
              )}

              {tag.hasUnion && (
                <img
                  className="absolute top-[-7px] left-px w-[193px] h-[84px] rotate-[6.36deg]"
                  alt=""
                  src={union3}
                />
              )}

              {tag.bgColor && !tag.hasShadow && (
                <div
                  className={`absolute top-0 left-px w-[226px] h-[70px] ${tag.bgColor} rounded-[121px]`}
                />
              )}

              {tag.hasShadow && (
                <div
                  className={`absolute top-0 left-0 w-[284px] h-[70px] ${tag.bgColor} rounded-[121px] shadow-[0px_0px_17.04px_#a480f299,0px_0px_34.08px_#a480f299,0px_0px_119.28px_#a480f299,0px_0px_238.56px_#a480f299,0px_0px_250px_#a480f299,0px_0px_250px_#a480f299]`}
                />
              )}

              <div
                className={`absolute top-4 ${tag.hasUnion ? "left-[19px]" : tag.hasSubtract ? "left-[19px]" : "left-[18px]"} h-[39px] flex items-center justify-center [font-family:'Inter-Bold',Helvetica] font-bold ${tag.textColor} text-2xl text-center tracking-[0] leading-[39.4px] whitespace-nowrap`}
              >
                {tag.text}
              </div>
            </div>
          ))}

          <div className="absolute w-[266px] h-[123px] top-[25px] left-[699px]">
            <div className="absolute top-0 left-0 w-[268px] h-[123px]">
              <img
                className="absolute top-0 left-0 w-[266px] h-[123px]"
                alt=""
                src={ellipse13}
              />

              <div className="absolute top-[9px] left-[29px] w-[207px] h-[98px] flex items-center justify-center rotate-[-3.84deg] [-webkit-text-stroke:1px_#ffffff] [font-family:'Inter-Black',Helvetica] font-black text-white text-6xl text-center tracking-[0] leading-[98.5px]">
                ENJOY
              </div>
            </div>

            <div className="absolute w-[200px] h-[23px] top-[82px] left-[33px] flex">
              <div className="w-[200.12px] h-[22.55px] flex">
                <img
                  className="mt-[-0.6px] w-[202.52px] h-[21.69px] ml-[-1.2px]"
                  alt=""
                  src={path}
                />
              </div>
            </div>
          </div>

          <div className="absolute top-[159px] left-[894px] w-28 h-28">
            <div className="absolute top-0.5 left-0.5 w-[108px] h-[108px] bg-[#76ff61] rounded-[54px] shadow-[0px_0px_6.48px_#76ff61,0px_0px_12.96px_#76ff61,0px_0px_45.36px_#76ff61,0px_0px_90.72px_#76ff61,0px_0px_155.52px_#76ff61,0px_0px_250px_#76ff61]" />

            <div className="absolute top-2 left-2 w-24 h-24 overflow-hidden rotate-[10.89deg]">
              <img
                className="absolute w-full h-full top-[-3498.41%] left-[-3491.43%] rotate-[-10.89deg]"
                alt=""
                src={vector3}
              />

              <img
                className="absolute w-[83.33%] h-[83.33%] top-[8.32%] left-[8.32%] rotate-[-10.89deg]"
                alt=""
                src={vector4}
              />
            </div>
          </div>

          <div className="absolute top-0 left-[31px] w-[164px] h-[153px]">
            <img
              className="absolute -top-60 left-[-227px] w-[625px] h-[560px]"
              alt=""
              src={star12}
            />

            <img
              className="absolute top-[49px] left-[54px] w-[55px] h-12"
              alt=""
              src={vector5}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
