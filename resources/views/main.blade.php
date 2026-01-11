<!DOCTYPE html>
<html lang="en" data-theme="light" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hugnet</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
    @vite(['resources/css/app.css']) <!-- sirve para compilar los archivos de css -->
</head>
<body class="font-sans antialiased dark:bg-[#020310] dark:text-white">

    <x-layouts.nav />   
    <x-layouts.inicio class="mt-[65px] mb-[90px]" />
    
    <x-layouts.hugnet />
  
    <x-layouts.funciones />
    <x-layouts.inspiracion />
    <x-layouts.contacto />

    <x-layouts.footer />

    <script>
        document.addEventListener('DOMContentLoaded', () => {
        const themeToggle = document.getElementById('theme-toggle');
        const html = document.documentElement;

        // Comprobación de seguridad: Si no encuentra el botón, no hace nada
        if (!themeToggle) return;

        // Función para cambiar todo a OSCURO
        const setDark = () => {
            html.classList.add('dark');              // Para Tailwind
            html.setAttribute('data-theme', 'dark'); // Para DaisyUI (o 'black', 'synthwave')
            localStorage.setItem('theme', 'dark');
            themeToggle.checked = true;
        };

        // Función para cambiar todo a CLARO
        const setLight = () => {
            html.classList.remove('dark');            // Para Tailwind
            html.setAttribute('data-theme', 'light'); // Para DaisyUI (o 'corporate', 'lofi')
            localStorage.setItem('theme', 'light');
            themeToggle.checked = false;
        };

        // 1. Cargar preferencia guardada
        const savedTheme = localStorage.getItem('theme');
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
            setDark();
        } else {
            setLight();
        }

        // 2. Escuchar el cambio del botón
        themeToggle.addEventListener('change', function() {
            if (this.checked) {
                setDark();
            } else {
                setLight();
            }
        });
        });
    </script>
</body>
</html>