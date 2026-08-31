export interface Service {
  number: string;
  icon: string;
  title: string;
  description: string;
  href: string;
}

export interface ServiceGroup {
  title: string;
  services: Service[];
}

export const serviceGroups: ServiceGroup[] = [
  {
    title: "DIGITAL",
    services: [
      {
        number: "01",
        icon: "code",
        title: "Desarrollo de software",
        description:
          "Aplicaciones, plataformas y soluciones digitales adaptadas a cada operación.",
        href: "/soluciones/desarrollo-software",
      },
      {
        number: "02",
        icon: "nodes",
        title: "CRM y automatización comercial",
        description:
          "Organizamos procesos comerciales, seguimiento y atención mediante plataformas conectadas.",
        href: "/soluciones/crm-automatizacion-comercial",
      },
      {
        number: "03",
        icon: "automation",
        title: "Automatización e IA",
        description:
          "Reducimos tareas manuales mediante flujos automatizados y soluciones inteligentes.",
        href: "/soluciones/automatizacion-ia",
      },
      {
        number: "04",
        icon: "integration",
        title: "Integraciones y APIs",
        description:
          "Conectamos sistemas y plataformas para que la información fluya automáticamente.",
        href: "/soluciones/integraciones-apis",
      },
    ],
  },
  {
    title: "INFRAESTRUCTURA",
    services: [
      {
        number: "05",
        icon: "support",
        title: "Soporte y gestión tecnológica",
        description:
          "Administración, mantenimiento y soporte de equipos, usuarios y entornos tecnológicos.",
        href: "/soluciones/soporte-gestion-tecnologica",
      },
      {
        number: "06",
        icon: "network",
        title: "Infraestructura y redes",
        description:
          "Diseñamos e implementamos conectividad e infraestructura para operaciones confiables.",
        href: "/soluciones/infraestructura-redes",
      },
      {
        number: "07",
        icon: "cloud",
        title: "Cloud, datos y continuidad",
        description:
          "Servicios cloud, almacenamiento, respaldo y administración de información empresarial.",
        href: "/soluciones/cloud-datos-continuidad",
      },
    ],
  },
  {
    title: "INDUSTRIA",
    services: [
      {
        number: "08",
        icon: "industry",
        title: "IoT y automatización industrial",
        description:
          "Conectamos sensores, dispositivos, equipos y datos para digitalizar procesos físicos.",
        href: "/soluciones/iot-automatizacion-industrial",
      },
      {
        number: "09",
        icon: "otit",
        title: "Integración OT / IT",
        description:
          "Integramos sistemas operacionales e industriales con plataformas digitales y datos empresariales.",
        href: "/soluciones/integracion-ot-it",
      },
    ],
  },
];
