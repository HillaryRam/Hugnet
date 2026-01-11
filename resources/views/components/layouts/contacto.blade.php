<section id="contacto" class="flex flex-col items-center gap-4 mb-[90px] scroll-mt-32 cursor-default">
    
    <div class="relative w-full max-w-[700px] mt-20 mb-20">
        
        <div class="absolute -left-10 -top-10 md:-left-[120px] md:-top-[120px] z-0 pointer-events-none">
            <img src="{{ asset('images/landing/Contacto/Estrella1.png') }}" alt="Estrella globo 1" class="w-32 md:w-auto" /> </div>

        <div class="absolute -right-10 -bottom-10 md:-right-[120px] md:-bottom-[120px] z-50 pointer-events-none">
            <img src="{{ asset('images/landing/Contacto/Estrella2.png') }}" alt="Estrella globo 2" class="w-32 md:w-auto" />
        </div>

        <x-ui.card-glass 
            class="gap-10 w-full z-10 relative"
            image="{{ asset('images/landing/Contacto/Hillary.png') }}"
            imageClasses="size-44 rounded-full shadow-[0px_4px_4px_0px_rgba(151,157,181,0.35)] border-4 border-pink-300 object-cover"
         >
            <x-slot:header>
                <x-ui.pill color="green" class="dark:bg-[#FF00C8] dark:text-white dark:shadow-[0px_4px_15px_rgba(255,0,200,0.6)] dark:border-none">
                    Creadora de Hugnet
                </x-ui.pill>
            </x-slot:header>

            <x-slot:title>
                Hillary Ramirez   
            </x-slot:title>
            
            <x-slot:text>
                Apasionada por el diseño interactivo y las nuevas formas de conectar en la red. He creado Hugnet para devolverle la "chispa" a internet.
            </x-slot:text>

            <x-slot:actions>
                <a href="https://github.com" target="_blank" class="bg-white p-3 rounded-[15px] shadow-md hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <img src="{{ asset('images/icons/github-icon.png') }}" alt="GitHub" class="w-6 h-6 object-contain" />
                </a>
                <a href="https://behance.net" target="_blank" class="bg-white p-3 rounded-[15px] shadow-md hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <img src="{{ asset('images/icons/behance-icon.png') }}" alt="Behance" class="w-6 h-6 object-contain" />
                </a>
                <a href="https://linkedin.com" target="_blank" class="bg-white p-3 rounded-[15px] shadow-md hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <img src="{{ asset('images/icons/linkedin-icon.png') }}" alt="LinkedIn" class="w-6 h-6 object-contain" />
                </a>
            </x-slot:actions>
        </x-ui.card-glass>
    </div>
</section>