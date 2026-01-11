<section id="funciones" class="w-[1058px] h-[791.94px] relative mx-auto mb-[90px]">

  <img class="w-[466.91px] h-96 left-[591.49px] top-[360px] absolute origin-top-left rotate-[21.83deg]" src="{{ asset('images/landing/Funciones/Recurso.png') }}" />
  
  <!-- decoracion -->
  <div class="absolute left-[680px] top-[210px] z-10">
      <x-icons.star8 />
  </div>

  <div class="absolute right-[0px] top-[740px] z-10">
      <x-icons.star4 />
  </div>

  <div class="absolute left-[0px] top-[530px] z-10">
      <x-icons.circle />
  </div>

  <!-- bento + titulo -->
  <div class="w-[1002px] left-[28px] top-[123.97px] absolute flex flex-col gap-6 cursor-default">
    
    <h1 class="w-full text-center justify-center text-black text-5xl font-semibold font-['Inter'] capitalize leading-[78.78px] dark:text-white">Tu nuevo hogar digital</h1>

    <!-- Fila 1: Catálogo + Conexión -->
    <div class="w-full flex justify-between items-center">
        
        <!-- Catálogo Infinito -->    
        <div class="w-[690px] h-80 px-10 py-5 bg-stone-200 rounded-[10.14px] shadow-[0px_4.055690288543701px_6.184927463531494px_-1.0139225721359253px_rgba(151,157,181,0.35)] inline-flex flex-col justify-center items-center gap-12 dark:bg-[#132026] border border-transparent dark:border-[#406852]">
            <div class="self-stretch flex flex-col justify-center items-start gap-4">
                <div class="size- inline-flex justify-start items-center gap-2.5">
                    <img class="w-16 h-11" src="{{ asset('images/landing/Funciones/infinito_icono.png') }}" />
                    <h2 class="text-center justify-center text-black text-3xl font-semibold font-['Inter'] leading-[52.52px] dark:text-white">Catálogo Infinito</h2>
                </div>
                <p class="self-stretch justify-center text-black text-lg font-normal font-['Inter'] leading-5 dark:text-white">Elige entre cientos de muebles y decoraciones. Cambia colores, texturas y la iluminación según tu estado de ánimo.</p>
            </div>
            <div class="size- inline-flex justify-center items-center gap-16">
                <twig:Carpeta Cozy />
                <twig:Carpeta Hobbits />
                <twig:Carpeta Cozy />
                <twig:Carpeta Cozy />
            </div>
        </div>

        <!-- Conexión Instantánea -->
        <div class="w-72 p-5 bg-orange-100 rounded-[10px] shadow-[0px_4px_6.099999904632568px_-1px_rgba(151,157,181,0.35)] inline-flex flex-col justify-center items-center gap-3.5 overflow-hidden dark:bg-[#302226] dark:text-white border border-transparent dark:border-[#936F4A]">
            <div class="size- flex flex-col justify-center items-center gap-2.5">
                <h2 class="text-center justify-center text-black text-3xl font-semibold font-['Inter'] leading-10 dark:text-white">Conexión<br>Instantánea</h2>
                <img class="w-32 h-28" src="{{ asset('images/landing/Funciones/conexion_icono.png') }}" />
            </div>
            <p class="self-stretch justify-center text-black text-lg font-normal font-['Inter'] leading-5 dark:text-white">Chatea con amigos mientras visitan tu sala. Siente la presencia de los demás en tiempo real.</p>
        </div>

    </div>

    <!-- Fila 2: Enlaces + Privacidad -->
    <div class="w-full flex justify-between items-center">
        
        <!-- Enlaces Vivos -->
        <div class="w-96 h-48 p-5 bg-[#E2EAFC] rounded-[10px] shadow-[0px_4px_6.099999904632568px_-1px_rgba(151,157,181,0.35)] inline-flex flex-col justify-center items-start gap-3.5 dark:bg-[#222649] dark:text-white dark:stroke-[#555FB7] border border-transparent dark:border-[#555FB7]">
            <div class="size- inline-flex justify-start items-center gap-2.5">
                <img class="size-16" src="{{ asset('images/landing/Funciones/enlace_icono.png') }}" />
                <h2 class="justify-center text-black text-3xl font-semibold font-['Inter'] leading-7  dark:text-white">Enlaces Vivos</h2>
            </div>
            <p class="self-stretch justify-center text-black text-lg font-normal font-['Inter'] leading-5 dark:text-white">Convierte tu televisión virtual en tu playlist de Spotify o tu portafolio personal.</p>
        </div>

        <!-- Privacidad Total -->
        <x-ui.card-glass image="{{ asset('images/landing/Funciones/escudo_icon.png') }}">
            <x-slot:title>
                Privacidad Total    
            </x-slot:title>
            
            Tú decides quién tiene las llaves de tu habitación. Pública, privada o solo para amigos.
        </x-ui.card-glass>

    </div>

  </div>
  

</section>