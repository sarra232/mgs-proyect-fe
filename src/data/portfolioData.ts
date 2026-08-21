import type { Category, ProjectItem, ServiceItem, CompanyInfo, TestimonialItem } from '../types/portfolio';

export const COMPANY_INFO: CompanyInfo = {
  name: 'Metálicas González Suárez',
  tagline: 'Maestría en Acero, Precisión Industrial y Diseño Estructural',
  phone: '+57 300 000 0000',
  whatsapp: '573000000000',
  whatsappMessage: 'Hola, me gustaría solicitar una cotización para un proyecto con Metálicas González Suárez.',
  email: 'contacto@metalicasgonzalezsuarez.com',
  address: 'Zona Industrial - Taller y Fábrica Principal',
  experienceYears: 15,
  completedProjects: 450,
  satisfactionRate: 99,
};

export const CATEGORIES: Category[] = [
  {
    id: 'all',
    name: 'Todos los Proyectos',
    description: 'Catálogo completo de obras y fabricaciones metálicas',
    iconName: 'LayoutGrid',
  },
  {
    id: 'estanterias',
    name: 'Estanterías & Racks',
    description: 'Sistemas de almacenamiento pesado, semipesado y comercial',
    iconName: 'Warehouse',
  },
  {
    id: 'muebles',
    name: 'Muebles Industriales',
    description: 'Diseño en vigas de acero, perfiles estructurales y madera',
    iconName: 'Armchair',
  },
  {
    id: 'cabanas',
    name: 'Cabañas & Casas Modulares',
    description: 'Estructuras habitacionales sismorresistentes y duraderas',
    iconName: 'Home',
  },
  {
    id: 'estructuras',
    name: 'Estructuras & Carpintería',
    description: 'Portones automáticos, pérgolas, cubiertas, barandas y domos',
    iconName: 'Shield',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'rack-industrial-heavy',
    title: 'Sistema de Racks Pesados para Centro Logístico',
    category: 'estanterias',
    tagline: 'Capacidad de carga de hasta 2.5 toneladas por nivel con pintura electrostática',
    description: 'Fabricación y montaje integral de estanterías industriales modulares de alta resistencia. Diseñado bajo normas sismorresistentes con anclaje de alta seguridad en losa de concreto.',
    features: [
      'Capacidad: 2,500 kg por nivel',
      'Vigas de encastre con pasador de seguridad',
      'Pintura electrostática al horno anticorrosiva',
      'Niveles ajustables cada 50 mm'
    ],
    materials: ['Acero Estructural ASTM A36', 'Pintura Epóxica Horno', 'Pernos Grado 5'],
    dimensions: '6.00m Alto x 2.70m Ancho x 1.10m Fondo',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    highlighted: true,
  },
  {
    id: 'mesa-industrial-viga-i',
    title: 'Mesa de Comedor / Juntas en Viga I-Beam & Roble',
    category: 'muebles',
    tagline: 'Fusión de ingeniería pesada y acabado artesanal para espacios premium',
    description: 'Mesa de alta gama fabricada con perfil I-Beam estructural en acabado negro mate forjado, complementada con superficie de madera maciza tratada y sellada.',
    features: [
      'Base en viga estructural de acero macizo',
      'Madera maciza de 2 pulgadas con sellado poliuretano',
      'Topes niveladores ocultos antideslizantes',
      'Diseño exclusivo personalizado'
    ],
    materials: ['Perfil Viga I Acero', 'Madera Maciza Tratada', 'Acabado Negro Mate Forja'],
    dimensions: '2.40m Largo x 1.00m Ancho x 0.78m Alto',
    imageUrl: 'https://images.unsplash.com/photo-1530629013299-6cb10d168419?auto=format&fit=crop&w=1200&q=80',
    highlighted: true,
  },
  {
    id: 'cabana-modular-black-steel',
    title: 'Cabaña Modular Estructural "Black Steel Alpine"',
    category: 'cabanas',
    tagline: 'Arquitectura moderna en perfiles tubulares de acero de rápido ensamblaje',
    description: 'Diseño y ensamblaje de estructura completa para cabaña campestre o glamping. Resistencia extrema a intemperie, vientos y sismos, con grandes ventanales panorámicos.',
    features: [
      'Chasis estructural de acero galvanizado y pintado',
      'Diseño termoacústico con panel sándwich o madera',
      'Tiempo de montaje 60% más rápido que obra tradicional',
      'Espacio diáfano tipo loft de 48 m²'
    ],
    materials: ['Tubo Estructural Cold Rolled', 'Vigas IPN', 'Cubierta Termoacústica'],
    dimensions: '8.00m x 6.00m (48 m² habitables)',
    imageUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80',
    highlighted: true,
  },
  {
    id: 'estanteria-comercial-modular',
    title: 'Estantería Comercial Exhibidora & Gondolas',
    category: 'estanterias',
    tagline: 'Solución estética y funcional para ferreterías, tiendas y almacenes',
    description: 'Módulos de exhibición autoportantes con bandejas perforadas para ganchos y divisiones metálicas removibles.',
    features: [
      'Bandejas reforzadas de 80 kg por nivel',
      'Ranuras laterales para regulación milimétrica',
      'Zócalos frontales de protección anti-impacto'
    ],
    materials: ['Lámina Cold Rolled Calibre 18/20', 'Pintura en Polvo'],
    dimensions: '2.00m Alto x 1.00m Ancho x 0.45m Fondo',
    imageUrl: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80',
    highlighted: false,
  },
  {
    id: 'estanteria-industrial-liviana',
    title: 'Mueble Estantería Etagere Metal & Roble',
    category: 'muebles',
    tagline: 'Líneas limpias y elegancia geométrica para interiores contemporáneos',
    description: 'Estantería decorativa y de almacenaje con estructura en perfil cuadrado soldada con técnica TIG de alta precisión y repisas flotantes.',
    features: [
      'Soldaduras pulidas a ras invisibles',
      'Repisas en madera o vidrio templado ahumado',
      'Protección anticorrosiva de larga duración'
    ],
    materials: ['Tubo Cuadrado 1" Calibre 16', 'Madera Melamínica / Pino', 'Laca Mate'],
    dimensions: '1.90m Alto x 1.20m Ancho x 0.35m Fondo',
    imageUrl: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1200&q=80',
    highlighted: false,
  },
  {
    id: 'casa-modular-metal-frame',
    title: 'Estructura para Casa Modular Residencial',
    category: 'cabanas',
    tagline: 'Ingeniería en Steel Frame para viviendas modernas sustentables',
    description: 'Esqueleto estructural de acero de dos niveles preparado para instalaciones eléctricas, hidráulicas y revestimiento seco.',
    features: [
      'Cálculo estructural firmado por ingenieros',
      'Alta precisión en cortes por plasma / láser',
      'Respetuoso con el medio ambiente y cero desperdicios'
    ],
    materials: ['Vigas IPE / HEB', 'Tubo Estructural Rectangular', 'Anclajes Hilti'],
    dimensions: '120 m² en 2 plantas',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    highlighted: false,
  },
  {
    id: 'porton-seguridad-laser',
    title: 'Portón Automatizado con Corte Láser & Bastidor Pesado',
    category: 'estructuras',
    tagline: 'Seguridad máxima, estética vanguardista y apertura silenciosa',
    description: 'Fabricación de portón vehicular corredizo o batiente con láminas decorativas caladas en láser CNC y marco perimetral reforzado.',
    features: [
      'Compatibilidad con motores de alta velocidad',
      'Pintura electrostática resistente a rayos UV y salinidad',
      'Cerradura de seguridad multipunto integrada'
    ],
    materials: ['Lámina HR Calibre 14', 'Perfil Tubo 100x50mm', 'Sistema de Rodamientos'],
    dimensions: '4.50m Ancho x 2.40m Alto',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    highlighted: true,
  },
  {
    id: 'pergola-domo-acero',
    title: 'Pérgola & Cubierta de Acero con Cristal Templado',
    category: 'estructuras',
    tagline: 'Elegancia para terrazas, jardines y zonas de recreo',
    description: 'Estructura aérea de alta resistencia para intemperie con vigas vistas y canaletas ocultas de desagüe pluvial.',
    features: [
      'Canal de desagüe pluvial interno integrado',
      'Soportes con placas base ancladas al suelo',
      'Vidrio laminado de 8mm o policarbonato alveolar'
    ],
    materials: ['Perfiles Tubulares Galvanizados', 'Vidrio Templado', 'Selladores Poliuretánicos'],
    dimensions: '6.00m x 4.00m',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    highlighted: false,
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'medida',
    title: 'Fabricación 100% a Medida',
    description: 'Desarrollamos cada estantería, mueble o estructura según las dimensiones y especificaciones exactas que requiera tu espacio.',
    icon: 'Ruler',
    benefits: ['Planos y renderizado previo', 'Ajuste milimétrico', 'Materiales certificados'],
  },
  {
    id: 'soldadura',
    title: 'Soldadura y Acabados de Alta Precisión',
    description: 'Procesos de soldadura MIG/MAG y TIG certificados, con pulido artesanal y acabados electrostáticos de máxima duración.',
    icon: 'Flame',
    benefits: ['Cero rebabas o imperfecciones', 'Pintura al horno anticorrosiva', 'Tratamientos para intemperie'],
  },
  {
    id: 'montaje',
    title: 'Transporte e Instalación en Sitio',
    description: 'Equipo especializado para el montaje seguro de estructuras pesadas, bodegas, cabañas modulares y carpintería metálica.',
    icon: 'Truck',
    benefits: ['Personal con curso de alturas', 'Fijaciones de alta resistencia', 'Entrega llave en mano'],
  },
  {
    id: 'asesoria',
    title: 'Asesoría y Cálculo Estructural',
    description: 'Orientamos tu proyecto para optimizar costes, resistencia y estética, garantizando la máxima seguridad estructural.',
    icon: 'Compass',
    benefits: ['Optimización de perfiles', 'Cumplimiento normativo', 'Garantía extendida en obra'],
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    clientName: 'Ing. Carlos Mendoza',
    projectType: 'Racks para Bodega Logística',
    comment: 'Instalaron 120 metros de estantería pesada en tiempo récord. La resistencia y el acabado de la pintura electrostática son impecables.',
    rating: 5,
    location: 'Bogotá D.C.',
  },
  {
    id: 'test-2',
    clientName: 'Arq. Mariana Restrepo',
    projectType: 'Estructura Cabaña Panorámica',
    comment: 'La precisión en los ensambles de la cabaña modular facilitó todo el proceso de acabados. Son verdaderos maestros del acero.',
    rating: 5,
    location: 'Cundinamarca',
  },
  {
    id: 'test-3',
    clientName: 'Restaurante & Bar El Forjador',
    projectType: 'Mobiliario Industrial Completo',
    comment: 'Las mesas en viga I y las barras metálicas le dieron la personalidad exacta que buscábamos a nuestro local. 100% recomendados.',
    rating: 5,
    location: 'Chía',
  }
];
