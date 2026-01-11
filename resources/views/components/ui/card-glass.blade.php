@props(['image', 'imageClasses' => 'size-36 object-cover rounded-md'])

@php
    // ... (El resto del código PHP con los estilos se queda IGUAL) ...
    $light_base = "bg-white/40 outline-stone-50 text-black backdrop-blur-[10px]";
    $light_shadow = "shadow-[0px_4px_6.1px_-1px_rgba(151,157,181,0.35),inset_0px_4px_9px_0px_rgba(214,221,240,0.29),inset_0px_16px_16px_0px_rgba(214,221,240,0.26),inset_0px_35px_21px_0px_rgba(214,221,240,0.15),inset_0px_62px_25px_0px_rgba(214,221,240,0.04),inset_0px_97px_27px_0px_rgba(214,221,240,0.01)]";
    $dark_base = "dark:bg-gray-950/50 dark:outline-indigo-400 dark:backdrop-blur-[10px] dark:text-white";
    $dark_shadow = "dark:shadow-[inset_0px_6px_13px_0px_rgba(135,147,226,0.29),inset_0px_25px_25px_0px_rgba(135,147,226,0.26),inset_0px_55px_33px_0px_rgba(135,147,226,0.15),inset_0px_98px_39px_0px_rgba(135,147,226,0.04),inset_0px_153px_43px_0px_rgba(135,147,226,0.01)]";

    $classes = "w-full max-w-[588px] px-6 py-5 rounded-[10px] 
                outline outline-1 outline-offset-[-1px] 
                inline-flex justify-center items-center 
                transition-all duration-300
                $light_base $light_shadow 
                $dark_base $dark_shadow";
@endphp

<div {{ $attributes->merge(['class' => $classes . ' gap-3.5']) }}>
    
    <img class="{{ $imageClasses }}" src="{{ $image }}" alt="Icon" />

    <div class="flex-1 inline-flex flex-col justify-center items-start gap-2">
        @isset($header)
            <div class="mb-1">
                {{ $header }}
            </div>
        @endisset

        <div class="text-3xl font-semibold font-['Inter'] leading-[52.52px]">
            {{ $title }}
        </div>

        <div class="self-stretch text-lg font-normal font-['Inter'] leading-5 opacity-90">
            {{ $text ?? $slot }}
        </div>

        @isset($actions)
            <div class="flex justify-center gap-4 mt-6">
                {{ $actions }}
            </div>
        @endisset

    </div>
</div>