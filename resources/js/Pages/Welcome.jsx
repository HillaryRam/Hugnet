import React from 'react';
import { Head } from '@inertiajs/react';

// Importamos el componente maestro "Wireframe" desde el archivo index.jsx
// que guardaste en la carpeta Components/Landing
import { Wireframe } from '@/Components/Landing/index';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Hugnet - Habita tu Identidad" />

            {/* Renderizamos todo el diseño de Figma de una vez */}
            <Wireframe />
        </>
    );
}