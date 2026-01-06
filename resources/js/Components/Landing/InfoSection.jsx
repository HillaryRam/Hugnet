import React from "react";

export const InfoSection = () => {
  const steps = [
    {
      number: "1",
      title: "Regístrate",
      description: "Crea tu usuario y recibe tu primera estancia vacía.",
      bgColor: "bg-[#ff7bc4]",
    },
    {
      number: "2",
      title: "Decora",
      description: "Añade muebles, cambia las paredes y hazla tuya.",
      bgColor: "bg-[#83c9f4]",
    },
    {
      number: "3",
      title: "Comparte",
      description: "Envía tu link a tus amigos y disfrutad del espacio juntos.",
      bgColor: "bg-[#96d289]",
    },
  ];

  return (
    <section className="inline-flex items-center justify-center gap-5 absolute top-[calc(50.00%_-_208px)] left-[calc(50.00%_-_497px)]">
      {steps.map((step, index) => (
        <article
          key={index}
          className="flex flex-col w-[318px] h-[278px] items-center justify-center gap-5 px-5 py-2.5 relative bg-white rounded-[10px] border border-solid border-[#999999]"
        >
          <div
            className={`relative w-[60px] h-[60px] ${step.bgColor} rounded-[91px] aspect-[1] flex items-center justify-center`}
          >
            <span className="[font-family:'Inter-Black',Helvetica] font-black text-white text-4xl text-center tracking-[0] leading-[59.1px] whitespace-nowrap">
              {step.number}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
            <h3 className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[32px] tracking-[0] leading-[52.5px] whitespace-nowrap">
              {step.title}
            </h3>

            <p className="relative flex items-center justify-center self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-black text-xl text-center tracking-[0] leading-[24.0px]">
              {step.description}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
};
