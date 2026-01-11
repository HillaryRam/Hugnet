@props(['type' => 'button'])

@php
    // 1. Clases base (estructura y animación)
    $base = "h-10 p-2.5 rounded-[63px] inline-flex flex-col justify-center items-center gap-3.5 cursor-pointer text-lg font-semibold font-['Inter'] transition-all duration-300 border border-transparent shadow-none";
    
    // 2. Modo Día (Negro)
    $dia = "bg-black text-white";
    
    // 3. Modo Noche (Verde y Borde)
    $noche_base = "dark:bg-green-300 dark:text-[#159813] dark:outline dark:outline-1 dark:outline-offset-[-1px] dark:outline-green-300";
    
    // 4. La sombra
    $noche_sombra = "dark:shadow-[0px_0px_0.89px_0px_rgba(149,245,148,1),0px_0px_1.79px_0px_rgba(149,245,148,1),0px_0px_6.25px_0px_rgba(149,245,148,1),0px_0px_12.51px_0px_rgba(149,245,148,1),0px_0px_21.45px_0px_rgba(149,245,148,1),0px_0px_37.54px_0px_rgba(149,245,148,1)]";
    
    // 5. Animación Hover Noche
    $noche_hover = "dark:hover:scale-105 dark:hover:brightness-110 dark:hover:shadow-[0px_0px_15px_rgba(149,245,148,0.8)] dark:hover:bg-green-300";

    // 6. Animación Hover Día
    $dia_hover = "hover:scale-105 hover:shadow-lg hover:bg-neutral-900";

    // Unimos todo
    $clases = "$base $dia $noche_base $noche_sombra $noche_hover $dia_hover";
@endphp

<button type="{{ $type }}" {{ $attributes->merge(['class' => $clases]) }}>
    {{ $slot }}
</button>