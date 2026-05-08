export type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string; description?: string }[];
};

export const navItems: NavItem[] = [
  {
    label: "Tâmplărie Aluminiu",
    href: "/tamplarie-aluminiu",
    children: [
      { label: "Uși și Ferestre", href: "/tamplarie-aluminiu/usi-ferestre", description: "Profile Reynaers & Alumil, tripan 52mm" },
      { label: "Uși Glisante Aluminiu", href: "/tamplarie-aluminiu/usi-glisante", description: "Culisante cu ridicare, până la 12m" },
      { label: "Uși Armonice Aluminiu", href: "/tamplarie-aluminiu/usi-armonice", description: "Sisteme pliant-armonice spațioase" },
      { label: "Uși de Intrare", href: "/tamplarie-aluminiu/usi-intrare", description: "Pivot, batante, reprezentative" },
    ],
  },
  {
    label: "Pereți Cortină",
    href: "/pereti-cortina",
  },
  {
    label: "Fațade Ventilate",
    href: "/fatade-ventilate",
    children: [
      { label: "Bond", href: "/fatade-ventilate/bond", description: "Panouri compozite aluminiu" },
      { label: "Fibrociment", href: "/fatade-ventilate/fibrociment", description: "Durabilitate și textură naturală" },
      { label: "HPL", href: "/fatade-ventilate/hpl", description: "High Pressure Laminate" },
    ],
  },
  {
    label: "Tâmplărie PVC",
    href: "/tamplarie-pvc",
    children: [
      { label: "Tâmplărie Salamander", href: "/tamplarie-pvc/salamander", description: "Sistem bluEVOLUTION 92, 7 camere" },
      { label: "Rulouri Exterioare", href: "/tamplarie-pvc/rulouri-exterioare", description: "Protecție solară și termică" },
      { label: "Plase Insecte", href: "/tamplarie-pvc/plase-insecte", description: "Plase fixe, rulou și plisé" },
    ],
  },
  {
    label: "Sticlă Securizată",
    href: "/sticla-securizata",
    children: [
      { label: "Balcoane și Terase", href: "/sticla-securizata/balcoane-terase", description: "Sistem Valedo, fără profile verticale" },
      { label: "Uși Batante", href: "/sticla-securizata/usi-batante", description: "Sticlă securizată VSG 10mm" },
      { label: "Uși Glisante", href: "/sticla-securizata/usi-glisante", description: "Glisante fără profil vizibil" },
      { label: "Compartimentări Birouri", href: "/sticla-securizata/compartimentari-birouri", description: "Spații moderne și luminoase" },
      { label: "Copertine din Sticlă", href: "/sticla-securizata/copertine-sticla", description: "Protecție elegantă la intrări" },
      { label: "Fațade Magazin", href: "/sticla-securizata/fatade-magazin", description: "Vitrină comercială de impact" },
    ],
  },
  {
    label: "Balustrade",
    href: "/balustrade",
    children: [
      { label: "Balustrade Sticlă", href: "/balustrade/balustrade-sticla", description: "Certificate, modele S1–S6" },
    ],
  },
  {
    label: "Pergole & Terase",
    href: "/pergole",
    children: [
      { label: "Pergole Bioclimatice", href: "/pergole/bioclimatice", description: "Lamele rotative, control smartphone" },
      { label: "Pergole Retractabile", href: "/pergole/retractabile", description: "Acoperișuri pliante pentru terase" },
    ],
  },
];

export const utilityLinks = [
  { label: "Proiecte", href: "/proiecte" },
  { label: "Despre", href: "/despre" },
  { label: "Contact", href: "/contact" },
];
