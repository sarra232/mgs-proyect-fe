# Metálicas González Suárez (MGS) - Frontend Constitution

Constitución de principios y directrices técnicas no negociables para el desarrollo del frontend de **Metálicas González Suárez**.

## Core Principles

### I. Identidad Visual y Estética Premium Industrial
- **Paleta de Marca Oficial:** 
  - Fondo y Superficies: Negro Carbón / Grafito Industrial (`#0B0D11`, `#12151B`, `#1C212B`)
  - Acentos de Marca: Dorado / Ámbar Forjado (`#F59E0B`, `#D97706`, `#B45309`)
  - Metálicos y Textos: Acero Plata y Gris Neutro (`#F8FAFC`, `#E2E8F0`, `#94A3B8`)
- **Sensación de Marca:** Transmitir solidez, durabilidad, precisión arquitectónica y artesanía en metales pesados y livianos.
- **Tipografía:** Moderna, geométrica y de alta legibilidad (Sans-serif industrial como Inter / Outfit / Montserrat).
- **Prohibido:** Diseños genéricos o planos sin contraste, interfaces poco profesionales o tipografías por defecto del navegador.

### II. Stack Tecnológico y Arquitectura
- **Framework Principal:** React 19 con TypeScript y Vite.
- **Enfoque Modular:** Arquitectura basada en componentes reutilizables (`src/components/`), secciones semánticas (`src/sections/`), datos tipados (`src/data/`) y tipos globales (`src/types/`).
- **Estilos:** Sistema de diseño coherente con variables CSS centralizadas en `src/index.css` (tokens de color, espaciado, elevaciones y bordes).
- **Iconografía:** Lucide React para iconos consistentes y ligeros.

### III. Hoja de Ruta por Fases (Phased Evolution)
- **Fase 1 (Portafolio y Landing Web):**
  - Hero Section con llamado a la acción claro (CTA para cotizaciones).
  - Catálogo interactivo por categorías:
    1. *Estanterías Industriales y Comerciales*
    2. *Muebles de Diseño Industrial en Metal y Madera*
    3. *Cabañas y Casas Modulares en Estructura Metálica*
    4. *Carpintería Metálica y Estructuras a Medida (Portones, Rejas, Domos)*
  - Galería visual con vista previa / modal de detalles.
  - Sección "Sobre Nosotros" y propuesta de valor de la empresa.
  - Calculador / Solicitud de cotización con enlace directo a WhatsApp y formulario.
- **Fase 2 (Sistema de Gestión Interna / Admin Dashboard):**
  - La estructura de código debe estar preparada para incorporar autenticación, dashboard de pedidos, cotizaciones y catálogo administrable.

### IV. Rendimiento y Optimización de Medios
- Las fotografías de estructuras y metales deben cargarse optimizadas con lazy loading para garantizar carga instantánea.
- Diseño estrictamente Mobile-First y 100% responsivo en smartphones, tablets y pantallas de escritorio 4K.

### V. Calidad y Tipado Estricto
- TypeScript en modo estricto (`strict: true`).
- Prohibido el uso de `any` injustificado.
- Todo componente debe manejar estados vacíos, estados de carga y datos dinámicos mediante interfaces claras.

## Governance

- Esta constitución es la fuente de verdad que guía todas las especificaciones (`/speckit.specify`), planes técnicos (`/speckit.plan`) y tareas de implementación (`/speckit.tasks`).
- Ningún componente o vista debe crearse fuera de los estándares de marca y arquitectura establecidos en este documento.

**Version**: 1.0.0 | **Ratified**: 2026-08-21 | **Author**: Metálicas González Suárez Core Team
