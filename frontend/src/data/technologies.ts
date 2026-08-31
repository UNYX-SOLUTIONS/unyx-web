export interface TechTool {
  name: string;
  logo: string;
  emphasis?: boolean;
  badge?: string;
}

export interface TechGroup {
  number: string;
  title: string;
  tools: TechTool[];
}

export const techGroups: TechGroup[] = [
  {
    number: "01",
    title: "NEGOCIO Y CRM",
    tools: [
      {
        name: "Kommo",
        logo: "/logos/tech/kommo.svg",
        emphasis: true,
        badge: "PARTNER",
      },
      {
        name: "Meta",
        logo: "/logos/tech/Meta.svg",
      },
      {
        name: "WhatsApp Business",
        logo: "/logos/tech/WhatsApp.svg",
      },
    ],
  },
  {
    number: "02",
    title: "CLOUD Y PRODUCTIVIDAD",
    tools: [
      {
        name: "Microsoft 365",
        logo: "/logos/tech/Microsoft 365.svg",
        emphasis: true,
      },
      {
        name: "Google Workspace",
        logo: "/logos/tech/Google.svg",
        emphasis: true,
      },
      {
        name: "Firebase",
        logo: "/logos/tech/Firebase.svg",
      },
    ],
  },
  {
    number: "03",
    title: "DESARROLLO E INTEGRACIÓN",
    tools: [
      {
        name: "Astro",
        logo: "/logos/tech/Astro.svg",
      },
      {
        name: "React",
        logo: "/logos/tech/React.svg",
      },
      {
        name: "Next.js",
        logo: "/logos/tech/Next.js.svg",
      },
      {
        name: "Node.js",
        logo: "/logos/tech/Node.js.svg",
      },
      {
        name: "Python",
        logo: "/logos/tech/Python.svg",
      },
      {
        name: "Flutter",
        logo: "/logos/tech/Flutter.svg",
      },
    ],
  },
  {
    number: "04",
    title: "AUTOMATIZACIÓN Y DATOS",
    tools: [
      {
        name: "n8n",
        logo: "/logos/tech/n8n.svg",
      },
      {
        name: "PostgreSQL",
        logo: "/logos/tech/PostgreSQL.svg",
      },
      {
        name: "Supabase",
        logo: "/logos/tech/supabase.svg",
      },
      {
        name: "OpenAI",
        logo: "/logos/tech/OpenAI.svg",
      },
    ],
  },
];
