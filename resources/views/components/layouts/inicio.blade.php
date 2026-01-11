<div {{ $attributes->merge(['class' => 'w-[792px] h-96 relative flex flex-col justify-center items-center mx-auto']) }}>


    <div class="absolute right-[70px] top-[210px] z-10">
        <x-icons.star4 />
    </div>


    <div class="absolute left-[160px] top-[35px] z-10">
        <x-icons.star5 />
    </div>

<!-- las pills-->
<div class="flex gap-4 items-center mb-[24px]">

    
    <x-ui.pill color="purple">
        Conexión real en tu espacio virtual
    </x-ui.pill>

    <x-ui.pill color="blue">
        v1.0 Beta
    </x-ui.pill>

</div>

    <h1 class="w-[792px] text-center justify-center text-black text-8xl font-black font-['Inter'] uppercase leading-[115.20px] tracking-[4.80px] cursor-default dark:text-white mb-[15px]">Habita<br/>tu identidad</h1>
    <p class="w-[557px] text-center justify-center text-neutral-700 text-lg font-normal font-['Inter'] leading-5 dark:text-white cursor-default mb-[24px]">Diseña tu habitación virtual 3D, personalízala a tu gusto y conecta con personas de forma auténtica. Tu espacio, tus reglas.</p>
    
    <x-buttons.boton-neon>
        <div class="flex items-center gap-2.5">
            
            <span>Empezar Ahora</span>

            <svg class="w-4 h-5 fill-current" viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.3 17.7655C7.11667 17.5466 7.02067 17.2679 7.012 16.9295C7.004 16.5911 7.09167 16.3124 7.275 16.0935L12.175 10.2413H1C0.716667 10.2413 0.479 10.1266 0.287 9.89734C0.0956668 9.66883 0 9.38537 0 9.04698C0 8.70859 0.0956668 8.42474 0.287 8.19543C0.479 7.96692 0.716667 7.85266 1 7.85266H12.175L7.275 2.00049C7.09167 1.78153 7.004 1.50285 7.012 1.16446C7.02067 0.826072 7.11667 0.547397 7.3 0.328438C7.48333 0.109479 7.71667 0 8 0C8.28333 0 8.51667 0.109479 8.7 0.328438L15.3 8.21096C15.4 8.31049 15.471 8.4347 15.513 8.58359C15.5543 8.73328 15.575 8.88774 15.575 9.04698C15.575 9.20623 15.5543 9.35552 15.513 9.49485C15.471 9.63419 15.4 9.76358 15.3 9.88301L8.7 17.7655C8.51667 17.9845 8.28333 18.094 8 18.094C7.71667 18.094 7.48333 17.9845 7.3 17.7655Z"/>
            </svg>

        </div>
    </x-buttons.boton-neon>
</div>