<section class="relative w-full max-w-[1200px] mx-auto min-h-[770px] transition-colors duration-500 overflow-hidden px-4 flex flex-col justify-center">

    <x-layouts.background />

    <div class="relative z-10 flex flex-col md:flex-row justify-center items-center gap-12 p-8 mr-12">

        <div class="w-full md:w-1/2 flex justify-center md:justify-end">
            <img 
                class="w-[544.62px] h-[770.93px] object-cover rounded-lg transition-all duration-500 block dark:hidden" 
                src="{{ asset('images/landing/Llavero_Hugnet.png') }}" 
                alt="Hugnet Logo" 
            />
            <img 
                class="w-[544.62px] h-[770.93px] object-cover rounded-lg transition-all duration-500 hidden dark:block" 
                src="{{ asset('images/landing/Llavero_Hugnet_night.png') }}" 
                alt="Hugnet Logo Dark" 
            />
        </div>

        <div class="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            
            <div class="w-full max-w-md inline-flex flex-col justify-start items-center md:items-start gap-3.5 md:-mt-[70px]">
                <h2 class="text-4xl md:text-5xl font-semibold capitalize text-black dark:text-yellow-200 transition-colors duration-300 font-['Inter'] leading-tight">
                    ¿Qué es Hugnet?
                </h2>

                <p class="text-lg font-normal leading-relaxed text-black dark:text-yellow-200 transition-colors duration-300 font-['Inter']">
                    Es una plataforma que recupera la magia de personalizar tu perfil, pero en un entorno 3D. Olvida los muros aburridos; aquí tu perfil es una habitación viva donde puedes mostrar quién eres realmente.
                </p>
            </div>

            <div class="w-full max-w-sm inline-flex flex-col justify-start items-center md:items-start gap-3.5 mt-10 md:mt-[160px]">
                <x-icons.heart class="w-6 h-6" />
                
                <p class="text-lg font-medium text-neutral-700 dark:text-white transition-colors duration-300 font-['Inter'] leading-5">
                    «Un refugio digital diseñado para la creatividad y la calma.»
                </p>

                <x-ui.pill color="purple">
                    Hillary Ramirez
                </x-ui.pill>
            </div>

        </div>

    </div>
</section>