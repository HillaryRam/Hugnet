@props(['color' => 'purple'])

@php
    // Definimos los estilos para cada color (Fondo + Texto + Sombra Glow)
    $themes = [
        // 1. El Morado de tu imagen (Conexión real...)
        'purple' => 'bg-[#C8B6FF] text-white shadow-[0px_4px_15px_rgba(200,182,255,0.6)]',
        
        // 2. El Azul de tu imagen (v1.0 Beta)
        'blue'   => 'bg-[#79A0E8] text-white shadow-[0px_4px_15px_rgba(121,160,232,0.6)]',
        
        // Extras útiles
        'green'  => 'bg-[#BACEAC] text-white shadow-[0px_4px_15px_rgba(188,206,172,0.6)]',
        'pink'   => 'bg-[#FF00C8] text-white shadow-[0px_4px_15px_rgba(255,0,200,0.6)]',
        'orange' => 'bg-[#FCAE05] text-white shadow-[0px_4px_15px_rgba(255,174,5,0.6)]',
    ];

    // Seleccionamos el estilo, si no existe usa 'purple' por defecto
    $style = $themes[$color] ?? $themes['purple'];
@endphp

<span {{ $attributes->merge(['class' => "
    inline-flex items-center justify-center 
    px-5 py-1.5 
    rounded-full 
    text-sm font-bold font-['Inter'] tracking-wide
    transition-transform duration-300 hover:scale-105 cursor-default
    $style
"]) }}>
    {{ $slot }}
</span>