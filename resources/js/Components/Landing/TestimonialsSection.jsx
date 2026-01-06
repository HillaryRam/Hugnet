import React from "react";


export const TestimonialsSection = () => {
  const catalogItems = [
    {
      id: 1,
      label: "Cozy",
      images: {
        rect67: rectangle67,
        rect68: rectangle68,
        rect69: rectangle69,
        rect70: rectangle70,
        rect71: rectangle71,
        rect72: rectangle72,
        rect73: rectangle73,
        rect74: rectangle74,
      },
      base: base,
      vector2: vector22,
      vector3: vector32,
    },
    {
      id: 2,
      label: "Hobbits",
      images: {
        rect67: rectangle672,
        rect68: rectangle682,
        rect69: rectangle692,
        rect70: rectangle702,
        rect71: rectangle712,
        rect72: rectangle722,
        rect73: rectangle732,
        rect74: rectangle742,
      },
      base: base2,
      vector2: vector23,
      vector3: vector33,
    },
    {
      id: 3,
      label: "Cozy",
      images: {
        rect67: rectangle673,
        rect68: rectangle683,
        rect69: rectangle693,
        rect70: rectangle703,
        rect71: rectangle713,
        rect72: rectangle723,
        rect73: rectangle733,
        rect74: rectangle743,
      },
      base: base3,
      vector2: vector24,
      vector3: vector34,
    },
    {
      id: 4,
      label: "Cozy",
      images: {
        rect67: rectangle674,
        rect68: rectangle684,
        rect69: rectangle694,
        rect70: rectangle704,
        rect71: rectangle714,
        rect72: rectangle724,
        rect73: rectangle734,
        rect74: rectangle744,
      },
      base: base4,
      vector2: vector25,
      vector3: vector35,
    },
  ];

  return (
    <section className="flex flex-col w-[690px] h-[347px] items-center justify-center gap-[48.67px] px-10 py-5 absolute top-[1614px] left-[calc(50.00%_-_498px)] bg-[#efede6] rounded-[10.14px] shadow-[0px_4.06px_6.18px_-1.01px_#979db559]">
      <header className="flex flex-col items-start justify-center gap-[15.21px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
          <img
            className="relative w-[71.99px] h-[44.61px]"
            alt="Catálogo Infinito icon"
            src={rectangle55}
          />

          <h2 className="relative flex items-center justify-center w-fit mt-[-1.01px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[32px] text-center tracking-[0] leading-[52.5px] whitespace-nowrap">
            Catálogo Infinito
          </h2>
        </div>

        <p className="relative flex items-center justify-center self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-black text-xl tracking-[0] leading-[24.0px]">
          Elige entre cientos de muebles y decoraciones. Cambia colores,
          texturas y la iluminación según tu estado de ánimo.
        </p>
      </header>

      <div className="inline-flex items-center justify-center gap-[71px] relative flex-[0_0_auto]">
        {catalogItems.map((item) => (
          <article key={item.id} className="relative w-[94.66px] h-[96.3px]">
            <img
              className="absolute top-[-19px] left-[-5px] w-[53px] h-[53px] aspect-[1]"
              alt=""
              src={item.images.rect67}
            />

            <img
              className="absolute top-5 left-px w-[54px] h-[54px] aspect-[1]"
              alt=""
              src={item.images.rect69}
            />

            <img
              className="absolute top-[17px] left-[33px] w-[66px] h-[62px] aspect-[1.13]"
              alt=""
              src={item.images.rect71}
            />

            <img
              className="absolute top-[-11px] left-7 w-[42px] h-[42px] aspect-[1]"
              alt=""
              src={item.images.rect70}
            />

            <img
              className="absolute -top-2 left-[57px] w-10 h-10 aspect-[1]"
              alt=""
              src={item.images.rect68}
            />

            <div className="absolute w-full h-[73.50%] top-0 left-0">
              <img
                className="absolute w-full h-full top-0 left-[-2.70%]"
                alt=""
                src={item.base}
              />

              <img
                className="absolute w-[74.78%] h-0 top-[81.98%] left-[10.70%]"
                alt=""
                src={item.vector2}
              />

              <img
                className="absolute w-[74.78%] h-0 top-[77.33%] left-[10.70%]"
                alt=""
                src={item.vector3}
              />
            </div>

            <div className="absolute w-[86.96%] h-[23.93%] top-[76.07%] left-[6.09%] flex items-center justify-center [font-family:'Inter-Regular',Helvetica] font-normal text-[#999999] text-[13.2px] text-center tracking-[0] leading-[normal]">
              {item.label}
            </div>

            <img
              className="absolute top-[34px] left-[58px] w-[27px] h-[21px]"
              alt=""
              src={item.images.rect72}
            />

            <img
              className="absolute top-[26px] left-[54px] w-[18px] h-3.5"
              alt=""
              src={item.images.rect73}
            />

            <img
              className="absolute top-[3px] left-0.5 w-9 h-[26px]"
              alt=""
              src={item.images.rect74}
            />
          </article>
        ))}
      </div>
    </section>
  );
};
