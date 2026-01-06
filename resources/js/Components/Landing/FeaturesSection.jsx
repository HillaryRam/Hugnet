import React from "react";
import vector9 from "./vector-9.svg";
import vector10 from "./vector-10.svg";

export const FeaturesSection = () => {
  const footerSections = [
    {
      title: "EXPLORAR",
      links: ["Concepto", "Funcionalidades", "Comunidad"],
    },
    {
      title: "PLATAFORMA",
      links: ["Centro de Ayuda", "Soporte Técnico", "Feedback", "Beta v1.0"],
    },
    {
      title: "LEGAL",
      links: ["Privacidad", "Términos", "Cookies", "Licencia MIT"],
    },
    {
      title: "DESARROLLO",
      links: ["Hillary Ramirez", "GitHub Repo", "TFC DAW 2026"],
    },
  ];

  const socialIcons = [
    { src: vector9, alt: "Social media icon 1" },
    { src: vector10, alt: "Social media icon 2" },
  ];

  return (
    <footer className="flex flex-col max-w-[3440px] w-[3440px] h-[377px] items-center justify-center gap-[45px] px-[120px] py-0 absolute top-[calc(50.00%_+_2270px)] left-[calc(50.00%_-_1720px)] bg-[#c8b6ff]">
      <nav
        className="flex items-center justify-center gap-3.5 relative self-stretch w-full flex-[0_0_auto]"
        aria-label="Footer navigation"
      >
        {footerSections.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="flex flex-col items-start gap-[11px] relative"
            style={{
              width:
                sectionIndex === 0
                  ? "165.32px"
                  : sectionIndex === 1
                    ? "165.49px"
                    : sectionIndex === 2
                      ? "165.17px"
                      : "165px",
            }}
          >
            <h2 className="relative flex items-center justify-center self-stretch h-[20.98px] mt-[-1.00px] [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-white text-xs tracking-[0] leading-[normal]">
              {section.title}
            </h2>

            <ul
              className="flex flex-col items-start gap-[14.99px]"
              style={{
                height: section.links.length === 3 ? "75px" : "105px",
              }}
            >
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="relative self-stretch">
                  <a
                    href="#"
                    className="[font-family:'Inter-Regular',Helvetica] font-normal text-white text-xs tracking-[0.12px] leading-[normal]"
                  >
                    <span className="tracking-[0.01px]">{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <div
        className="inline-flex items-center gap-5 relative flex-[0_0_auto]"
        role="group"
        aria-label="Social media links"
      >
        {socialIcons.map((icon, index) => (
          <a
            key={index}
            href="#"
            className="relative w-[33px] h-[33px]"
            aria-label={icon.alt}
          >
            <img
              className="absolute w-[75.00%] h-[75.00%] top-[12.50%] left-[12.50%]"
              alt={icon.alt}
              src={icon.src}
            />
          </a>
        ))}
      </div>

      <p className="relative flex items-center justify-center self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-[normal]">
        © 2026 Hugnet. Todos los derechos reservados.
      </p>
    </footer>
  );
};
