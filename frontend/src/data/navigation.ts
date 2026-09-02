import { SOCIAL_LINKS } from "../consts";

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavColumn {
  ariaLabel: string;
  title: string;
  links: NavItem[];
}

export const headerNav: NavItem[] = [
  { label: "Soluciones", href: "/soluciones" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Insights", href: "/insights" },
];

export const headerCta: NavItem = {
  label: "Cuéntanos tu proyecto",
  href: "/contacto",
};

export const footerColumns: NavColumn[] = [
  {
    ariaLabel: "Soluciones",
    title: "SOLUCIONES",
    links: [
      {
        label: "Desarrollo de software",
        href: "/soluciones/desarrollo-software",
      },
      {
        label: "CRM y automatización comercial",
        href: "/soluciones/crm-automatizacion-comercial",
      },
      {
        label: "Automatización e IA",
        href: "/soluciones/automatizacion-ia",
      },
      {
        label: "Integraciones y APIs",
        href: "/soluciones/integraciones-apis",
      },
      {
        label: "Soporte y gestión tecnológica",
        href: "/soluciones/soporte-gestion-tecnologica",
      },
      {
        label: "Infraestructura y redes",
        href: "/soluciones/infraestructura-redes",
      },
      {
        label: "Cloud, datos y continuidad",
        href: "/soluciones/cloud-datos-continuidad",
      },
      {
        label: "IoT y automatización industrial",
        href: "/soluciones/iot-automatizacion-industrial",
      },
      {
        label: "Integración OT / IT",
        href: "/soluciones/integracion-ot-it",
      },
    ],
  },
  {
    ariaLabel: "Empresa",
    title: "EMPRESA",
    links: [
      { label: "Nosotros", href: "/nosotros" },
      { label: "Proyectos", href: "/proyectos" },
      { label: "Cómo trabajamos", href: "/#como-trabajamos" },
      { label: "Contacto", href: "/#contacto" },
    ],
  },
];

export const footerSideColumns: NavColumn[] = [
  {
    ariaLabel: "Recursos",
    title: "RECURSOS",
    links: [
      { label: "Insights", href: "/insights" },
      { label: "Casos de éxito", href: "/proyectos" },
    ],
  },
  {
    ariaLabel: "Redes sociales",
    title: "SOCIAL",
    links: [
      { label: "LinkedIn", href: SOCIAL_LINKS.linkedin, external: true },
      { label: "Instagram", href: SOCIAL_LINKS.instagram, external: true },
    ],
  },
];

export const footerLegal: NavItem[] = [
  { label: "Privacidad", href: "/privacidad" },
  { label: "Términos", href: "/terminos" },
  { label: "Cookies", href: "/cookies" },
];
