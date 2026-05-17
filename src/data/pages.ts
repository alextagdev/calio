export type Feature = { icon?: string; title: string; description: string };
export type Spec = { label: string; value: string };
export type GalleryImage = { src: string; alt: string };

export type PageData = {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  heroBadge?: string;
  intro: string;
  description: string;
  features: Feature[];
  specs: Spec[];
  gallery: GalleryImage[];
  ctaTitle?: string;
  ctaText?: string;
};

export type CategoryData = {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  intro: string;
  description: string;
  products: {
    title: string;
    href: string;
    image: string;
    short: string;
    tags: string[];
  }[];
};

// ─── Pages ────────────────────────────────────────────────────────────────────

export const pages: Record<string, PageData> = {

  // ── Tâmplărie Aluminiu ──────────────────────────────────────────────────────

  "tamplarie-aluminiu/usi-ferestre": {
    slug: "tamplarie-aluminiu/usi-ferestre",
    title: "Uși și Ferestre din Aluminiu",
    subtitle: "Design modern, performanță dovedită",
    heroImage: "/images/fatada-rezidentiala-balustrade-1.jpeg",
    heroBadge: "Tâmplărie Aluminiu",
    intro: "Ușile și ferestrele batante din aluminiu sunt mult mai eficiente decât soluțiile clasice.",
    description:
      "Se remarcă printr-un confort sporit dar și un design modern. Rezistente la fenomene meteorologice extreme, oferă etanșare perfectă care nu permite infiltrarea de apă sau vânt. Personalizabile în orice culoare RAL, reprezintă o investiție pe termen lung pentru locuința sau biroul dumneavoastră.",
    features: [
      { title: "Profile Reynaers & Alumil", description: "Profile de cea mai înaltă calitate europeană, testate și certificate pentru durabilitate extremă." },
      { title: "Geam tripan 52mm", description: "Sticlă tripan cu gaz argon și tratament Low-E pentru izolație termică superioară." },
      { title: "Etanșare perfectă", description: "Garnituri EPDM pe trei rânduri, care blochează complet infiltrarea apei și a vântului." },
      { title: "Design personalizabil", description: "Disponibile în toată paleta RAL, cu finisaje mat sau lucios, lemn sau beton imprimat." },
      { title: "Garanție 5 ani", description: "Garanție extinsă pe toată lucrarea, inclusiv materiale și manoperă de montaj." },
      { title: "Montaj profesional", description: "Echipă proprie certificată, termen de instalare 30 zile de la comandă." },
    ],
    specs: [
      { label: "Profile", value: "Reynaers / Alumil" },
      { label: "Tip deschidere", value: "Batant / Oscilant" },
      { label: "Geam", value: "Tripan 52mm Low-E" },
      { label: "Izolare termică", value: "Uf ≤ 1.0 W/m²K" },
      { label: "Clasă etanșeitate", value: "Clasa 9A" },
      { label: "Rezistență vânt", value: "Clasa C5" },
      { label: "Garanție", value: "5 ani" },
      { label: "Termen montaj", value: "30 zile" },
    ],
    gallery: [
      { src: "/images/fatada-rezidentiala-balustrade-1.jpeg", alt: "Ferestre aluminiu exterior" },
      { src: "/images/balustrada-sticla-scari-interior-3.jpeg", alt: "Ferestre interior modern" },
      { src: "/images/balustrada-sticla-scari-exterioare-1.jpeg", alt: "Detaliu profil aluminiu" },
      { src: "/images/fatada-rezidentiala-balustrade-2.jpeg", alt: "Ansamblu ferestre vilă" },
    ],
  },

  "tamplarie-aluminiu/usi-glisante": {
    slug: "tamplarie-aluminiu/usi-glisante",
    title: "Uși Glisante din Aluminiu",
    subtitle: "Deschidere totală, luminozitate maximă",
    heroImage: "/images/balustrada-sticla-balcon-1.jpeg",
    heroBadge: "Tâmplărie Aluminiu",
    intro: "O soluție elegantă și inovatoare pentru utilizarea unui spațiu mai mare.",
    description:
      "Ușile glisante și culisante cu ridicare din aluminiu sunt concepute pentru terase și încăperi unde se dorește luminozitate maximă și armonizare cu designul modern. Pot ajunge până la 12 metri lățime, cu manevrare extrem de ușoară și rapidă. Sticla tripan cu folie de protecție solară minimizează transferul de căldură.",
    features: [
      { title: "Deschidere până la 12m", description: "Sisteme multi-panou care permit deschideri panoramice de dimensiuni impresionante." },
      { title: "Culisare cu ridicare", description: "Mecanism lift-slide pentru o manevrare ușoară chiar și la panouri de mari dimensiuni." },
      { title: "Sticlă cu folie solară", description: "Pachet 8mm + folie 8.4.8 securizată laminată, cu protecție solară integrată." },
      { title: "Opțiune antiefracție", description: "Senzori de avertizare efracție integrați, pentru maximă siguranță a locuinței." },
      { title: "Personalizare RAL", description: "Disponibile în orice culoare din paleta RAL, mat sau lucios." },
      { title: "Fără prag opțional", description: "Variante cu prag minim sau complet integrat în pardoseală." },
    ],
    specs: [
      { label: "Profile", value: "Reynaers / Alumil" },
      { label: "Tip", value: "Lift-Slide / Culisant" },
      { label: "Geam", value: "Tripan 52mm securizat" },
      { label: "Lățime maximă", value: "până la 12m" },
      { label: "Înălțime maximă", value: "până la 3.5m" },
      { label: "Garanție", value: "5 ani" },
      { label: "Termen montaj", value: "30 zile" },
      { label: "Servicii", value: "Livrare + montaj" },
    ],
    gallery: [
      { src: "/images/balustrada-sticla-balcon-1.jpeg", alt: "Uși glisante terasa" },
      { src: "/images/fatada-rezidentiala-balustrade-1.jpeg", alt: "Interior cu uși glisante" },
      { src: "/images/balustrada-sticla-scari-exterioare-1.jpeg", alt: "Ușă glisantă panoramică" },
      { src: "/images/balustrada-sticla-scari-interior-3.jpeg", alt: "Sistem glisant modern" },
    ],
  },

  "tamplarie-aluminiu/usi-armonice": {
    slug: "tamplarie-aluminiu/usi-armonice",
    title: "Uși Armonice din Aluminiu",
    subtitle: "Flexibilitate maximă, soluție fără compromisuri",
    heroImage: "/images/balustrada-sticla-scari-plutitoare-1.jpeg",
    heroBadge: "Tâmplărie Aluminiu",
    intro: "Ușile armonice din aluminiu elimină barierele dintre interior și exterior.",
    description:
      "Sistemele pliant-armonice din aluminiu oferă deschideri complet libere, fără stâlpi sau profile intermediare deranjante. Ideale pentru restaurante, săli de evenimente, garaje și locuințe care doresc o conexiune totală cu exteriorul. Pot fi configurate atât ca sisteme de perete complet retractabil, cât și ca separatoare interioare.",
    features: [
      { title: "Deschidere completă", description: "Panelurile se pliează complet într-o parte, eliberând toată deschiderea." },
      { title: "Sisteme rezidențiale și comerciale", description: "Disponibile în versiuni pentru locuințe, restaurante și spații comerciale." },
      { title: "Etanșeitate superioară", description: "Garnituri multiple pentru etanșeitate la apă, vânt și zgomot." },
      { title: "Geam tripan opțional", description: "Sticlă simplă, dublă sau tripan cu Low-E, în funcție de necesitățile termice." },
      { title: "Ghidaj inferior și superior", description: "Sisteme cu ghidaj jos sau sus-jos pentru o manevrare fluidă și durabilă." },
      { title: "Personalizare completă", description: "Culori RAL, dimensiuni custom, accesorii și hardware personalizate." },
    ],
    specs: [
      { label: "Profile", value: "Alumil / Reynaers" },
      { label: "Tip", value: "Pliant-armonic" },
      { label: "Geam", value: "Simplu / Dublu / Tripan" },
      { label: "Lățime panou", value: "400–1200mm" },
      { label: "Înălțime maximă", value: "până la 3m" },
      { label: "Garanție", value: "5 ani" },
      { label: "Termen montaj", value: "30–45 zile" },
      { label: "Ghidaj", value: "Inferior / Superior" },
    ],
    gallery: [
      { src: "/images/balustrada-sticla-scari-plutitoare-1.jpeg", alt: "Uși armonice exterior" },
      { src: "/images/balustrada-sticla-balcon-1.jpeg", alt: "Sistem armonic deschis" },
      { src: "/images/fatada-rezidentiala-balustrade-1.jpeg", alt: "Interior cu armonic" },
      { src: "/images/balustrada-sticla-scari-exterioare-1.jpeg", alt: "Detaliu armonic aluminiu" },
    ],
  },

  "tamplarie-aluminiu/usi-intrare": {
    slug: "tamplarie-aluminiu/usi-intrare",
    title: "Uși de Intrare din Aluminiu",
    subtitle: "Prima impresie contează",
    heroImage: "/images/fatada-rezidentiala-balustrade-2.jpeg",
    heroBadge: "Tâmplărie Aluminiu",
    intro: "Ușile de intrare din aluminiu combină securitatea maximă cu un design impresionant.",
    description:
      "Proiectăm și montăm uși de intrare din aluminiu pentru locuințe private, clădiri de birouri și spații comerciale. De la sistemele clasice batante la ușile pivotante spectaculoase, fiecare produs este realizat din profile premium cu rupere de punte termică și feronerie de înaltă securitate.",
    features: [
      { title: "Sistem pivot disponibil", description: "Uși pivotante cu mecanism central, dimensiuni până la 1.2m x 3m, aspect monumental." },
      { title: "Securitate clasa RC3", description: "Feronerie certificată antiefracție, geam VSG laminat 8.8 sau 10.10." },
      { title: "Izolare termică", description: "Profile cu rupere de punte termică pentru eficiență energetică maximă la intrare." },
      { title: "Control acces integrat", description: "Opțiuni de interfon video, cititor de card/amprentă și electrozavor." },
      { title: "Dimensiuni XL", description: "Uși batante până la 1.4m lățime și 3m înălțime pentru intrări reprezentative." },
      { title: "Finisaje premium", description: "Vopsire electrostatică RAL, anodizare sau furnir de lemn termoimprimat." },
    ],
    specs: [
      { label: "Profile", value: "Reynaers / Alumil" },
      { label: "Tipuri", value: "Batant / Pivot / Batant dublu" },
      { label: "Geam", value: "VSG 8.8 – 10.10" },
      { label: "Securitate", value: "Clasa RC2–RC3" },
      { label: "Lățime max.", value: "1.4m (batant)" },
      { label: "Înălțime max.", value: "3m" },
      { label: "Garanție", value: "5 ani" },
      { label: "Termen montaj", value: "30 zile" },
    ],
    gallery: [
      { src: "/images/fatada-rezidentiala-balustrade-2.jpeg", alt: "Ușă de intrare modernă" },
      { src: "/images/fatada-rezidentiala-balustrade-1.jpeg", alt: "Ușă pivot" },
      { src: "/images/balustrada-sticla-scari-interior-3.jpeg", alt: "Detaliu mâner intrare" },
      { src: "/images/balustrada-sticla-scari-exterioare-1.jpeg", alt: "Intrare representativă" },
    ],
  },

  // ── Pereți Cortină ──────────────────────────────────────────────────────────

  "pereti-cortina": {
    slug: "pereti-cortina",
    title: "Pereți Cortină",
    subtitle: "Fațade contemporane, posibilități nelimitate",
    heroImage: "/images/balustrada-sticla-scari-plutitoare-1.jpeg",
    heroBadge: "Fațade",
    intro: "Pereții cortină sunt soluția ideală pentru a oferi unei clădiri un aspect unic și modern.",
    description:
      "Fațade contemporane fabricate din sticlă cu posibilități de design nelimitate, ideale pentru exterioare sau compartimentări interioare. Impermeabili și rezistenți la factori de mediu, protejează împotriva vântului puternic și rezistă la deformări cauzate de vibrații sau cutremure. Sistemele Reynaers CW50 și Alumil M50 sunt soluțiile noastre standard pentru clădiri comerciale și rezidențiale premium.",
    features: [
      { title: "Sisteme Reynaers & Alumil", description: "CW50 și M50 sunt sisteme de referință europeană pentru pereți cortină, testate exhaustiv." },
      { title: "Impermeabili și rezistenți", description: "Protecție completă împotriva ploii, vântului și agenților de mediu." },
      { title: "Rezistență seismică", description: "Sisteme proiectate să reziste la deformări cauzate de vibrații și cutremure moderate." },
      { title: "Izolare fonică și termică", description: "Panouri de sticlă high-performance cu valori Uf până la 0.7 W/m²K." },
      { title: "Design nelimitat", description: "Sticlă în diverse nuanțe, serigrafii, sisteme de umbrire exterioare sau interioare." },
      { title: "Proiectare inclusă", description: "Servicii complete: proiectare, avize, livrare, montaj și service." },
    ],
    specs: [
      { label: "Sisteme", value: "Reynaers CW50 / Alumil M50" },
      { label: "Material", value: "Aluminiu + Sticlă" },
      { label: "Geam", value: "Tripan / Double-skin" },
      { label: "Izolare termică", value: "Uf ≤ 0.8 W/m²K" },
      { label: "Rezistență vânt", value: "Clasa C5" },
      { label: "Garanție", value: "5 ani" },
      { label: "Termen montaj", value: "60 zile" },
      { label: "Servicii", value: "Proiectare + montaj" },
    ],
    gallery: [
      { src: "/images/balustrada-sticla-scari-plutitoare-1.jpeg", alt: "Perete cortină clădire birouri" },
      { src: "/images/balustrada-sticla-scari-interior-1.jpeg", alt: "Fațadă cortină modernă" },
      { src: "/images/balustrada-sticla-balcon-1.jpeg", alt: "Detaliu structural glazing" },
      { src: "/images/fatada-rezidentiala-balustrade-1.jpeg", alt: "Perete cortină interior" },
    ],
  },

  // ── Fațade Ventilate ────────────────────────────────────────────────────────

  "fatade-ventilate": {
    slug: "fatade-ventilate",
    title: "Fațade Ventilate",
    subtitle: "Protecție, estetică și eficiență energetică",
    heroImage: "/images/balustrada-sticla-scari-plutitoare-1.jpeg",
    heroBadge: "Fațade",
    intro: "Sisteme de fațade ventilate testate și certificate pentru clădiri moderne.",
    description:
      "Fațadele ventilate sunt pereți stratificați care permit ventilarea naturală a clădirilor, oferind protecție împotriva umidității și zgomotului. Vara mențin o temperatură mai scăzută în interior, iarna una mai ridicată — reducând semnificativ consumul energetic. Oferim trei tipuri: Bond (compozit aluminiu), Fibrociment și HPL.",
    features: [
      { title: "Eficiență energetică", description: "Stratul de aer ventilat reduce transferul termic cu până la 30% față de fațadele tradiționale." },
      { title: "Protecție umiditate", description: "Sistemul de ventilare elimină condensul și previne deteriorarea structurii clădirii." },
      { title: "Izolare fonică", description: "Reducere substanțială a zgomotului exterior, confort sporit la interior." },
      { title: "Estetică personalizată", description: "Panouri Bond, Fibrociment sau HPL în sute de finisaje și culori disponibile." },
      { title: "Durabilitate extremă", description: "Materiale rezistente la UV, umiditate, variații termice și impact mecanic." },
      { title: "Montaj rapid", description: "Sistem de prindere mecanică, fără lucrări umede, reducând durata șantierului." },
    ],
    specs: [
      { label: "Tipuri", value: "Bond / Fibrociment / HPL" },
      { label: "Structură portantă", value: "Aluminiu / Oțel zincat" },
      { label: "Strat ventilat", value: "25–50mm" },
      { label: "Izolare termică", value: "Vată minerală 100–200mm" },
      { label: "Reacție la foc", value: "A2 / B (în funcție de panou)" },
      { label: "Servicii", value: "Proiectare + montaj" },
      { label: "Garanție", value: "10 ani panouri" },
      { label: "Termen montaj", value: "La comandă" },
    ],
    gallery: [
      { src: "/images/balustrada-sticla-scari-plutitoare-1.jpeg", alt: "Fațadă ventilată clădire" },
      { src: "/images/balustrada-sticla-balcon-1.jpeg", alt: "Panouri HPL instalate" },
      { src: "/images/balustrada-sticla-scari-interior-3.jpeg", alt: "Detaliu fațadă Bond" },
      { src: "/images/balustrada-sticla-scari-exterioare-1.jpeg", alt: "Fațadă fibrociment" },
    ],
  },

  "fatade-ventilate/bond": {
    slug: "fatade-ventilate/bond",
    title: "Fațade Bond",
    subtitle: "Compozit aluminiu — eleganță și ușurință",
    heroImage: "/images/balustrada-sticla-scari-plutitoare-1.jpeg",
    heroBadge: "Fațade Ventilate",
    intro: "Panourile Bond (Alucobond / Reynobond) sunt soluția ideală pentru fațade contemporane ușoare.",
    description:
      "Panourile compozite din aluminiu Bond combină două foi de aluminiu cu un miez din polietilenă sau mineral, rezultând un material extrem de ușor (4kg/m²), rigid și rezistent la coroziune. Disponibile în finisaje metalice, oglindate, lemn sau mată, panourile Bond permit realizarea de forme curbe, frezări și reliefuri.",
    features: [
      { title: "Greutate redusă", description: "Doar 4–5 kg/m², reducând sarcina pe structura clădirii și costurile de montaj." },
      { title: "Forme complexe", description: "Panourile pot fi frezate, curbate și formate 3D pentru arhitectură expresivă." },
      { title: "Finisaje multiple", description: "Metalic, mat, oglindă, imitație lemn sau piatră — sute de opțiuni disponibile." },
      { title: "Reacție la foc A2", description: "Variante cu miez mineral, clasificare A2-s1,d0 pentru clădiri înalte și publice." },
      { title: "Durabilitate 30+ ani", description: "Stratul PVDF protejează față de UV, coroziune și poluare atmosferică." },
      { title: "Reciclabil 100%", description: "Aluminiul este integral reciclabil la finalul duratei de viață a panoului." },
    ],
    specs: [
      { label: "Grosime panou", value: "3mm / 4mm / 6mm" },
      { label: "Greutate", value: "4–8 kg/m²" },
      { label: "Miez", value: "PE / FR / Mineral" },
      { label: "Finisaj", value: "PVDF / Anodizat" },
      { label: "Reacție foc", value: "B / A2 (mineral)" },
      { label: "Format max.", value: "1500 × 7200mm" },
      { label: "Garanție", value: "10 ani" },
      { label: "Servicii", value: "Proiectare + montaj" },
    ],
    gallery: [
      { src: "/images/balustrada-sticla-scari-plutitoare-1.jpeg", alt: "Fațadă Bond" },
      { src: "/images/balustrada-sticla-scari-interior-1.jpeg", alt: "Panouri Bond instalate" },
      { src: "/images/balustrada-sticla-balcon-1.jpeg", alt: "Detaliu panou Bond" },
      { src: "/images/balustrada-sticla-scari-interior-3.jpeg", alt: "Fațadă Bond finisaj metalic" },
    ],
  },

  "fatade-ventilate/fibrociment": {
    slug: "fatade-ventilate/fibrociment",
    title: "Fațade Fibrociment",
    subtitle: "Textură naturală, durabilitate extremă",
    heroImage: "/images/balustrada-sticla-scari-interior-3.jpeg",
    heroBadge: "Fațade Ventilate",
    intro: "Fibrocimentul combină rezistența betonului cu versatilitatea estetică a materialelor naturale.",
    description:
      "Panourile din fibrociment (fibre de celuloză + ciment + agregate minerale) sunt soluția durabilă pentru fațade cu aspect natural sau industrial. Rezistente la umiditate, foc, mucegai și dăunători, sunt utilizate atât pentru clădiri rezidențiale cât și industriale sau publice. Finisajele disponibile imită lemnul, piatra, betonul sau sunt colorate în masă.",
    features: [
      { title: "Rezistent la umiditate", description: "Absorție minimă de apă, fără deformare sau degradare în condiții climatice extreme." },
      { title: "Clasă foc A2", description: "Materiale incombustibile, ideal pentru clădiri publice, spitale, școli." },
      { title: "Anti-mucegai", description: "Suprafața densă nu permite dezvoltarea ciupercilor sau bacteriilor." },
      { title: "Textură naturală", description: "Finisaje ce imită lemnul, piatra sau betonul aparent, la un cost redus." },
      { title: "Dimensiuni mari", description: "Formate de până la 1250 × 3100mm pentru o acoperire rapidă a suprafețelor." },
      { title: "Durabilitate 50+ ani", description: "Material inert, care nu putrezește, nu ruginește și nu necesită vopsire repetată." },
    ],
    specs: [
      { label: "Grosime", value: "8mm / 10mm / 12mm" },
      { label: "Format", value: "1250 × 3100mm" },
      { label: "Densitate", value: "1400 kg/m³" },
      { label: "Reacție foc", value: "A1 / A2" },
      { label: "Absorbție apă", value: "< 15%" },
      { label: "Finisaje", value: "Lemnos / Piatră / Beton / Uni" },
      { label: "Garanție", value: "15 ani" },
      { label: "Servicii", value: "Proiectare + montaj" },
    ],
    gallery: [
      { src: "/images/balustrada-sticla-scari-interior-3.jpeg", alt: "Fațadă fibrociment" },
      { src: "/images/balustrada-sticla-scari-plutitoare-1.jpeg", alt: "Clădire cu fibrociment" },
      { src: "/images/fatada-rezidentiala-balustrade-1.jpeg", alt: "Detaliu panou fibrociment" },
      { src: "/images/balustrada-sticla-scari-exterioare-1.jpeg", alt: "Finisaj lemn fibrociment" },
    ],
  },

  "fatade-ventilate/hpl": {
    slug: "fatade-ventilate/hpl",
    title: "Fațade HPL",
    subtitle: "High Pressure Laminate — estetic și performant",
    heroImage: "/images/balustrada-sticla-scari-exterioare-1.jpeg",
    heroBadge: "Fațade Ventilate",
    intro: "Panourile HPL sunt soluția de fațadă care combină estetica cu performanța superioară.",
    description:
      "HPL (High Pressure Laminate) este un material compozit din fibre de celuloză impregnate cu rășini termorezistente, presat la temperaturi ridicate. Panourile HPL exterioare sunt rezistente la UV, apă, zgârieturi și impact, menținându-și culoarea și aspectul pe toată durata de viață. Disponibile în finisaje solide, lemn, piatră sau metalice.",
    features: [
      { title: "Rezistență UV excepțională", description: "Culoarea nu se decolorează în timp, chiar și la expunere solară intensă pe sud." },
      { title: "Suprafață dură", description: "Rezistentă la zgârieturi, graffiti și vandalism — ușor de curățat." },
      { title: "Versatilitate estetică", description: "Sute de culori și texturi: lemn, piatră, solid, metalic." },
      { title: "Ușor de prelucrat", description: "Se taie, frezează și prinde cu ușurință — flexibilitate maximă la instalare." },
      { title: "Termorezistent", description: "Stabil la variații termice extreme, fără deformare sau delaminare." },
      { title: "Ecologic", description: "Fără emisii de formaldehidă, prietenos cu mediul pentru interioare și exterioare." },
    ],
    specs: [
      { label: "Grosime", value: "6mm / 8mm / 10mm / 12mm" },
      { label: "Format", value: "1300 × 3050mm" },
      { label: "Greutate", value: "8–14 kg/m²" },
      { label: "Reacție foc", value: "B-s2,d0" },
      { label: "Rezistență UV", value: "Clasa 7 (max.)" },
      { label: "Finisaje", value: "500+ opțiuni" },
      { label: "Garanție", value: "10 ani" },
      { label: "Servicii", value: "Proiectare + montaj" },
    ],
    gallery: [
      { src: "/images/balustrada-sticla-scari-exterioare-1.jpeg", alt: "Fațadă HPL" },
      { src: "/images/balustrada-sticla-scari-plutitoare-1.jpeg", alt: "Panouri HPL clădire" },
      { src: "/images/balustrada-sticla-balcon-1.jpeg", alt: "Detaliu HPL" },
      { src: "/images/fatada-rezidentiala-balustrade-2.jpeg", alt: "HPL finisaj lemn" },
    ],
  },

  // ── Tâmplărie PVC ───────────────────────────────────────────────────────────

  "tamplarie-pvc/salamander": {
    slug: "tamplarie-pvc/salamander",
    title: "Tâmplărie Salamander",
    subtitle: "Calitate germană pentru confortul tău",
    heroImage: "/images/balustrada-sticla-scari-interior-3.jpeg",
    heroBadge: "Tâmplărie PVC",
    intro: "Tâmplăria Salamander este soluția perfectă pentru cei care doresc personalizare și izolare de top.",
    description:
      "Sistemul bluEVOLUTION 92 de la Salamander reprezintă vârful de gamă în tâmplăria PVC. Cu 7 camere și ranforsare din oțel galvanizat, oferă valori termice de 0.79 W/m²K și izolare fonică de 45dB — performanțe echivalente cu certificarea Passive House. Potrivit atât pentru spații rezidențiale, cât și comerciale.",
    features: [
      { title: "7 camere de izolare", description: "Profilele cu 7 camere creează o barieră termică superioară față de sistemele standard cu 5 camere." },
      { title: "Uw = 0.79 W/m²K", description: "Valoarea termică certificată Passive House, reducând semnificativ facturile de energie." },
      { title: "Izolare fonică 45dB", description: "Confort acustic superior — blochează traficul urban, vecinii zgomotoși și alte surse de poluare sonoră." },
      { title: "Durată de viață 25 ani", description: "Material PVC stabil UV, care nu se deformează, nu se îngălbenește și nu necesită vopsire." },
      { title: "Forme neregulate posibile", description: "Profile care permit realizarea arcelor, trapezelor și altor forme arhitecturale speciale." },
      { title: "Paletă largă de culori", description: "Standard și premium: alb, mahon, stejar, antracit, aluminiu și 200+ laminări speciale." },
    ],
    specs: [
      { label: "Sistem profil", value: "bluEVOLUTION 92" },
      { label: "Camere", value: "7 camere" },
      { label: "Geam", value: "Tripan 52mm" },
      { label: "Izolare termică", value: "Uw 1.1 W/m²K" },
      { label: "Izolare fonică", value: "30–45 dB" },
      { label: "Durata viață", value: "25 ani" },
      { label: "Garanție", value: "5 ani" },
      { label: "Termen montaj", value: "30 zile" },
    ],
    gallery: [
      { src: "/images/balustrada-sticla-scari-interior-3.jpeg", alt: "Ferestre PVC Salamander" },
      { src: "/images/fatada-rezidentiala-balustrade-1.jpeg", alt: "Interior cu PVC Salamander" },
      { src: "/images/balustrada-sticla-scari-exterioare-1.jpeg", alt: "Detaliu profil PVC" },
      { src: "/images/fatada-rezidentiala-balustrade-2.jpeg", alt: "Vilă cu tâmplărie Salamander" },
    ],
  },

  "tamplarie-pvc/rulouri-exterioare": {
    slug: "tamplarie-pvc/rulouri-exterioare",
    title: "Rulouri Exterioare",
    subtitle: "Protecție solară, termică și de securitate",
    heroImage: "/images/fatada-rezidentiala-balustrade-2.jpeg",
    heroBadge: "Tâmplărie PVC",
    intro: "Rulourile exterioare oferă un nivel superior de control termic și protecție pentru locuința ta.",
    description:
      "Rulourile exterioare motorize sunt soluția completă pentru protecția ferestrei: blochează căldura solară vara înainte de a ajunge la geam, asigură intimitate fără a reduce complet lumina, și adaugă un nivel suplimentar de securitate. Disponibile în variante manuale, cu motor și cu acționare automată prin senzori meteo sau aplicație smartphone.",
    features: [
      { title: "Reducere căldură 75%", description: "Rulourile exterioare blochează căldura solară înainte de a penetra geamul, spre deosebire de jaluzelele interioare." },
      { title: "Acționare automată", description: "Motor tubular silențios cu comandă prin telecomandă, timer sau senzori de vânt și lumină." },
      { title: "Ghidaje laterale", description: "Sistemul de ghidaj lateral asigură stabilitate la vânt și o etanșare mai bună pe lateral." },
      { title: "Lame de 8mm", description: "Lamele din aluminiu extrudat, cu spumă poliuretanică în interior pentru izolație." },
      { title: "Integrare smart home", description: "Compatibil cu sisteme KNX, Somfy, Velux Integra și asistenți vocali." },
      { title: "Culori RAL", description: "Cutia și ghidajele pot fi vopsite în orice culoare RAL pentru a se potrivi fațadei." },
    ],
    specs: [
      { label: "Material lamă", value: "Aluminiu extrudat" },
      { label: "Grosime lamă", value: "8mm / 10mm" },
      { label: "Reducere solară", value: "până la 75%" },
      { label: "Motor", value: "Somfy / Nice" },
      { label: "Acționare", value: "Manual / Motor / Automat" },
      { label: "Lățime max.", value: "3000mm" },
      { label: "Garanție", value: "5 ani" },
      { label: "Termen montaj", value: "14–21 zile" },
    ],
    gallery: [
      { src: "/images/fatada-rezidentiala-balustrade-2.jpeg", alt: "Rulouri exterioare vilă" },
      { src: "/images/balustrada-sticla-scari-exterioare-1.jpeg", alt: "Detaliu rulou exterior" },
      { src: "/images/balustrada-sticla-scari-interior-3.jpeg", alt: "Rulouri pe bloc" },
      { src: "/images/fatada-rezidentiala-balustrade-1.jpeg", alt: "Interior cu rulouri" },
    ],
  },

  "tamplarie-pvc/plase-insecte": {
    slug: "tamplarie-pvc/plase-insecte",
    title: "Plase Insecte",
    subtitle: "Aer curat, fără insecte",
    heroImage: "/images/balustrada-sticla-scari-exterioare-1.jpeg",
    heroBadge: "Tâmplărie PVC",
    intro: "Plasele de insecte sunt soluția discretă și eficientă pentru un interior fără dăunători.",
    description:
      "Oferim o gamă completă de plase pentru insecte adaptate oricărui tip de fereastră sau ușă: fixe (cu ramă demontabilă), rulou (retractabile vertical), plisé (plisate orizontal) și pentru uși. Materialul plasei din fibră de sticlă sau poliester este rezistent la UV și nu blochează vizibilitatea sau ventilația.",
    features: [
      { title: "Tipuri multiple", description: "Fixe, rulou, plisé orizontal, plisé dublu pentru uși — soluție pentru orice deschidere." },
      { title: "Fibră de sticlă", description: "Plasa din fibră de sticlă este mai rezistentă și mai transparentă decât variantele din poliester." },
      { title: "Ramă din aluminiu", description: "Profil din aluminiu vopsit RAL, discret și rezistent la coroziune." },
      { title: "Montaj simplu", description: "Sistemele cu clips sau magnetice se montează în câteva minute, fără găuri în tâmplărie." },
      { title: "Variante cu pollenstopp", description: "Plase cu densitate ridicată care rețin și polenul, ideal pentru alergici." },
      { title: "Personalizare culoare", description: "Rama disponibilă în alb, antracit, maro și alte culori RAL la cerere." },
    ],
    specs: [
      { label: "Material plasă", value: "Fibră de sticlă / Poliester" },
      { label: "Ramă", value: "Aluminiu vopsit" },
      { label: "Tipuri", value: "Fix / Rulou / Plisé / Ușă" },
      { label: "Culori", value: "Alb / Antracit / RAL" },
      { label: "Dimensiuni", value: "La comandă" },
      { label: "Montaj", value: "Clips / Magnetic / Înfilet" },
      { label: "Garanție", value: "2 ani" },
      { label: "Termen livrare", value: "7–14 zile" },
    ],
    gallery: [
      { src: "/images/balustrada-sticla-scari-exterioare-1.jpeg", alt: "Plasă insecte fereastră" },
      { src: "/images/fatada-rezidentiala-balustrade-1.jpeg", alt: "Plasă rulou" },
      { src: "/images/balustrada-sticla-balcon-1.jpeg", alt: "Plasă plisé" },
      { src: "/images/balustrada-sticla-scari-interior-3.jpeg", alt: "Plasă ușă" },
    ],
  },

  // ── Sticlă Securizată ────────────────────────────────────────────────────────

  "sticla-securizata/balcoane-terase": {
    slug: "sticla-securizata/balcoane-terase",
    title: "Balcoane și Terase",
    subtitle: "Libertate vizuală, confort maxim",
    heroImage: "/images/balustrada-sticla-scari-exterioare-1.jpeg",
    heroBadge: "Sticlă Securizată",
    intro: "Sisteme unice de balcoane din sticlă securizată și laminată, fără profile verticale.",
    description:
      "Sistemul Valedo de închidere a balcoanelor folosește panouri glisante din sticlă securizată laminată de 10mm, fără profile verticale care să obstrucționeze vederea. Etanșarea se realizează prin benzi magnetice de 6mm, aproape invizibile. Panelurile se deschid în tip armonic, glisând ușor pe rulmenți din teflon, eliberând complet balconul.",
    features: [
      { title: "Sistem Valedo", description: "Panouri glisante cu etanșare magnetică pentru deschidere completă, fără profile verticale." },
      { title: "Sticlă 10mm VSG", description: "Sticlă securizată și laminată de 10mm — la spargere, cioburile rămân lipite de folia intermediară." },
      { title: "Deschidere armonică", description: "Panelurile se pliază complet într-o parte pentru acces total la spațiul balconului." },
      { title: "Rulmenți teflon", description: "Glisare ușoară și silențioasă, fără efort, chiar și pentru panouri mari și grele." },
      { title: "Etanșare magnetică", description: "Benzi magnetice de 6mm asigură etanșeitate la vânt și ploaie fără profile vizibile." },
      { title: "Canal de drenare", description: "Profil inferior de 2cm cu margini rotunjite și canal de scurgere pentru apă." },
    ],
    specs: [
      { label: "Sistem", value: "Valedo" },
      { label: "Sticlă", value: "VSG 10mm securizat" },
      { label: "Deschidere", value: "Armonic / Glisant" },
      { label: "Etanșare", value: "Magnetică 6mm" },
      { label: "Ghidaj", value: "Rulmenți teflon" },
      { label: "Profil inferior", value: "2cm cu drenare" },
      { label: "Garanție", value: "5 ani" },
      { label: "Termen montaj", value: "30 zile" },
    ],
    gallery: [
      { src: "/images/balustrada-sticla-scari-exterioare-1.jpeg", alt: "Balcon cu sticlă" },
      { src: "/images/balustrada-sticla-balcon-1.jpeg", alt: "Terasă închisă sticlă" },
      { src: "/images/fatada-rezidentiala-balustrade-1.jpeg", alt: "Detaliu sistem Valedo" },
      { src: "/images/balustrada-sticla-scari-interior-3.jpeg", alt: "Balcon modern" },
    ],
  },

  "sticla-securizata/usi-batante": {
    slug: "sticla-securizata/usi-batante",
    title: "Uși Batante din Sticlă",
    subtitle: "Design minimalist, impact maxim",
    heroImage: "/images/balustrada-sticla-balcon-1.jpeg",
    heroBadge: "Sticlă Securizată",
    intro: "Ușile batante din sticlă securizată aduc eleganță și luminozitate în orice spațiu.",
    description:
      "Ușile batante din sticlă securizată VSG sunt soluția perfectă pentru intrările reprezentative, comerciale și rezidențiale. Fără ramă sau cu ramă subțire din aluminiu sau inox, aceste uși creează un impact vizual puternic și permit trecerea luminii naturale în profunzimea spațiului. Disponibile cu balamale ascunse și sisteme de închidere automate.",
    features: [
      { title: "Frameless (fără ramă)", description: "Sisteme fără profil perimetral, fixare prin balamale și pivot din inox sau aluminiu." },
      { title: "Sticlă VSG 10mm", description: "Sticlă securizată laminată, la impact cioburile rămân suspendate în folia PVB." },
      { title: "Balamale ascunse", description: "Sisteme de pivotare integrate în pardoseală și tavan pentru un look complet curat." },
      { title: "Feronerie premium", description: "Mânere, broaște și șilduri din inox 316L sau aluminiu anodizat, rezistente la coroziune." },
      { title: "Sistem automat", description: "Opțiune cu actuator electromagnetic pentru deschidere automată la apropierea persoanelor." },
      { title: "Personalizare sticlă", description: "Satinat, fumuriu, bronz, verde, serigrafiat sau imprimat digital." },
    ],
    specs: [
      { label: "Sticlă", value: "VSG 10mm / 8.8mm" },
      { label: "Tip", value: "Frameless / Ramă" },
      { label: "Balamale", value: "Ascunse / Vizibile" },
      { label: "Feronerie", value: "Inox / Aluminiu" },
      { label: "Lățime max.", value: "1.2m" },
      { label: "Înălțime max.", value: "3m" },
      { label: "Garanție", value: "5 ani" },
      { label: "Termen montaj", value: "21–30 zile" },
    ],
    gallery: [
      { src: "/images/balustrada-sticla-balcon-1.jpeg", alt: "Ușă batantă sticlă" },
      { src: "/images/fatada-rezidentiala-balustrade-1.jpeg", alt: "Interior ușă sticlă" },
      { src: "/images/balustrada-sticla-scari-exterioare-1.jpeg", alt: "Feronerie inox" },
      { src: "/images/balustrada-sticla-scari-plutitoare-1.jpeg", alt: "Ușă frameless" },
    ],
  },

  "sticla-securizata/usi-glisante": {
    slug: "sticla-securizata/usi-glisante",
    title: "Uși Glisante din Sticlă",
    subtitle: "Spațiu eliberat, sticlă la vedere",
    heroImage: "/images/fatada-rezidentiala-balustrade-2.jpeg",
    heroBadge: "Sticlă Securizată",
    intro: "Ușile glisante din sticlă sunt soluția ideală pentru separatoare elegante și eficiente.",
    description:
      "Sistemele de uși glisante din sticlă securizată elimină nevoia de spațiu pentru deschidere, oferind în același timp separarea vizuală sau fonică a spațiilor. Disponibile în variante cu șină superioară (suspendate), profil inferior minim sau complet fără profil vizibil. Ideale pentru dormitoare, băi, dressing-uri și birouri.",
    features: [
      { title: "Suspendate sau pe șină", description: "Variante fără șină inferioară (suspendate) pentru o curățare mai ușoară a pardoselii." },
      { title: "Amortizare la închidere", description: "Sistem de amortizare soft-close care previne zgomotul la închidere." },
      { title: "Sticlă opțiuni multiple", description: "Transparentă, satinat, fumuriu, colorată sau cu imprimare digitală." },
      { title: "Profil minim", description: "Profile din aluminiu de doar 18mm pentru un aspect pur și modern." },
      { title: "Lățimi de panou", description: "Panouri individuale de până la 1.5m lățime, sisteme multi-panou disponibile." },
      { title: "Serigrafie și printare", description: "Personalizare completă prin serigrafie, sandblasting sau folie adezivă." },
    ],
    specs: [
      { label: "Sticlă", value: "VSG 8mm / 10mm" },
      { label: "Sistem", value: "Suspendat / Șină inferioară" },
      { label: "Profile", value: "Aluminiu 18mm" },
      { label: "Soft-close", value: "Standard" },
      { label: "Lățime panou", value: "până la 1.5m" },
      { label: "Înălțime", value: "până la 3m" },
      { label: "Garanție", value: "5 ani" },
      { label: "Termen montaj", value: "14–21 zile" },
    ],
    gallery: [
      { src: "/images/fatada-rezidentiala-balustrade-2.jpeg", alt: "Ușă glisantă sticlă" },
      { src: "/images/balustrada-sticla-balcon-1.jpeg", alt: "Sistem glisant interior" },
      { src: "/images/fatada-rezidentiala-balustrade-1.jpeg", alt: "Separator birou sticlă" },
      { src: "/images/balustrada-sticla-scari-exterioare-1.jpeg", alt: "Detaliu șină" },
    ],
  },

  "sticla-securizata/compartimentari-birouri": {
    slug: "sticla-securizata/compartimentari-birouri",
    title: "Compartimentări Birouri",
    subtitle: "Spații de lucru moderne și luminoase",
    heroImage: "/images/balustrada-sticla-scari-interior-1.jpeg",
    heroBadge: "Sticlă Securizată",
    intro: "Compartimentările din sticlă transformă birourile deschise în spații funcționale și elegante.",
    description:
      "Sistemele de compartimentare pentru birouri din sticlă securizată permit crearea de cabinete, săli de ședință și zone private fără a sacrifica lumina naturală sau senzația de spațiu. Disponibile în sisteme cu profil vizibil (aluminiu sau oțel) sau frameless, cu uși glisante sau batante integrate.",
    features: [
      { title: "Sisteme frameless", description: "Compartimentări fără profil perimetral vizibil pentru un aspect complet transparent." },
      { title: "Izolare fonică", description: "Sticlă laminată sau dublă cu cavitate de aer pentru intimitate acustică în birouri." },
      { title: "Integrare uși", description: "Uși batante sau glisante perfect aliniate cu sistemul de pereți din sticlă." },
      { title: "Electricitate integrată", description: "Cabluri și prize ascunse în profilele sistemului de perete." },
      { title: "Jaluzele interioare", description: "Sisteme de jaluzele venețiene sau verticale integrate în cavitatea peretelui." },
      { title: "Modular și reconfigurabil", description: "Sistemele modulare pot fi demontate și remontate în altă configurație." },
    ],
    specs: [
      { label: "Sticlă", value: "VSG 8mm / Dublu vitraj" },
      { label: "Sistem", value: "Frameless / Profil" },
      { label: "Profile", value: "Aluminiu / Oțel" },
      { label: "Izolare fonică", value: "35–45 dB" },
      { label: "Înălțime", value: "până la 4m" },
      { label: "Uși integrate", value: "Batantă / Glisantă" },
      { label: "Garanție", value: "5 ani" },
      { label: "Termen montaj", value: "21–45 zile" },
    ],
    gallery: [
      { src: "/images/balustrada-sticla-scari-interior-1.jpeg", alt: "Compartimentare birou" },
      { src: "/images/balustrada-sticla-scari-plutitoare-1.jpeg", alt: "Sală ședințe sticlă" },
      { src: "/images/balustrada-sticla-balcon-1.jpeg", alt: "Perete sticlă birou" },
      { src: "/images/fatada-rezidentiala-balustrade-1.jpeg", alt: "Open-space compartimentat" },
    ],
  },

  "sticla-securizata/copertine-sticla": {
    slug: "sticla-securizata/copertine-sticla",
    title: "Copertine din Sticlă",
    subtitle: "Protecție elegantă la intrări și terase",
    heroImage: "/images/balustrada-sticla-scari-plutitoare-1.jpeg",
    heroBadge: "Sticlă Securizată",
    intro: "Copertinele din sticlă securizată protejează intrările și terasele cu eleganță maximă.",
    description:
      "Copertinele din sticlă structurală securizată sunt concepute pentru a proteja intrările în clădiri, terasele și zonele pietonale de ploaie și soare, fără a bloca lumina naturală. Susținute prin cabluri din inox, console sau structuri de aluminiu, copertinele din sticlă au un aspect pur și minimalist.",
    features: [
      { title: "Sticlă structurală", description: "VSG cu folie SGP pentru rezistență superioară la impact și la sarcini de zăpadă." },
      { title: "Susținere prin cabluri", description: "Sisteme cu cabluri din inox 316L invizibile pentru un aspect aerian și modern." },
      { title: "Console din inox sau aluminiu", description: "Console ancorate în perete sau stâlpi, calculate structural pentru încărcările specifice." },
      { title: "Scurgere integrată", description: "Sisteme de colectare și scurgere a apei integrate discret în structura copertinei." },
      { title: "Anti-alunecare", description: "Sticlă cu imprimare ceramică anti-alunecare pentru copertinele practicabile." },
      { title: "Personalizare dimensiuni", description: "Orice formă și dimensiune, inclusiv variante curbate sau în unghi." },
    ],
    specs: [
      { label: "Sticlă", value: "VSG 8.8 / 10.10mm" },
      { label: "Folie", value: "PVB / SGP" },
      { label: "Susținere", value: "Cabluri / Console" },
      { label: "Material structură", value: "Inox 316L / Aluminiu" },
      { label: "Sarcină zăpadă", value: "Calculată structural" },
      { label: "Anti-alunecare", value: "Opțional ceramică" },
      { label: "Garanție", value: "5 ani" },
      { label: "Termen montaj", value: "21–30 zile" },
    ],
    gallery: [
      { src: "/images/balustrada-sticla-scari-plutitoare-1.jpeg", alt: "Copertină sticlă intrare" },
      { src: "/images/balustrada-sticla-balcon-1.jpeg", alt: "Copertină cu cabluri" },
      { src: "/images/fatada-rezidentiala-balustrade-1.jpeg", alt: "Copertină terasa" },
      { src: "/images/balustrada-sticla-scari-exterioare-1.jpeg", alt: "Detaliu prindere copertină" },
    ],
  },

  "sticla-securizata/fatade-magazin": {
    slug: "sticla-securizata/fatade-magazin",
    title: "Fațade Magazin",
    subtitle: "Vitrină comercială de impact",
    heroImage: "/images/balustrada-sticla-scari-plutitoare-1.jpeg",
    heroBadge: "Sticlă Securizată",
    intro: "Fațadele de magazin din sticlă maximizează vizibilitatea produselor și atractivitatea spațiului.",
    description:
      "Proiectăm și montăm fațade de magazine, showroom-uri și spații comerciale din sticlă securizată, cu sau fără profil structural. De la vitrine simple la sisteme complexe cu uși automate, panouri de control și iluminat integrat, fiecare fațadă este calculată structural și personalizată pentru identitatea brandului.",
    features: [
      { title: "Sisteme frameless", description: "Vitrine fără profil perimetral vizibil pentru maximă transparență și vizibilitate produs." },
      { title: "Geam securizat ESG", description: "Sticlă securizată termic sau chimic — la spargere se transformă în granule mici inofensive." },
      { title: "Uși automate integrate", description: "Uși glisante automate cu senzori de prezență sau cu cititor de card/cod." },
      { title: "Serigrafie și branding", description: "Logo-uri, texte și grafice aplicate direct pe sticlă prin serigrafie sau folie." },
      { title: "Iluminat integrat", description: "Sisteme de iluminat LED integrat în profilele fațadei pentru efect vizual nocturn." },
      { title: "Securitate antiefracție", description: "Sticlă antiglonț sau laminată special pentru spații care necesită securitate sporită." },
    ],
    specs: [
      { label: "Sticlă", value: "ESG 10mm / VSG laminat" },
      { label: "Sistem", value: "Frameless / Profil" },
      { label: "Uși", value: "Manuale / Automate" },
      { label: "Acoperire", value: "Serigrafie / Folie" },
      { label: "Securitate", value: "Standard / Antiefracție" },
      { label: "Garanție", value: "5 ani" },
      { label: "Termen montaj", value: "30–60 zile" },
      { label: "Servicii", value: "Proiectare + montaj" },
    ],
    gallery: [
      { src: "/images/balustrada-sticla-scari-plutitoare-1.jpeg", alt: "Fațadă magazin sticlă" },
      { src: "/images/balustrada-sticla-balcon-1.jpeg", alt: "Vitrină comercială" },
      { src: "/images/balustrada-sticla-scari-interior-1.jpeg", alt: "Showroom cu sticlă" },
      { src: "/images/fatada-rezidentiala-balustrade-2.jpeg", alt: "Intrare magazin" },
    ],
  },

  // ── Balustrade ──────────────────────────────────────────────────────────────

  "balustrade/balustrade-sticla": {
    slug: "balustrade/balustrade-sticla",
    title: "Balustrade din Sticlă",
    subtitle: "Certificate, sigure, spectaculoase",
    heroImage: "/images/balustrada-sticla-balcon-1.jpeg",
    heroBadge: "Balustrade",
    intro: "Sisteme de balustrade din sticlă testate și certificate pentru balcoane, scări și terase.",
    description:
      "Tendința modernă în construcții și amenajări folosește sticla pentru a păstra luminarea naturală și senzația de spațiu deschis. Oferim o gamă completă de sisteme de balustrade: de la modelele cu profil inferior minimal (S1) la sistemele fără niciun profil vizibil (S6 — tip point-fixed). Toate produsele sunt executate și în România și Europa.",
    features: [
      { title: "6 modele disponibile", description: "S1, S2, S3, S3B, S4, S5, S6 — de la sisteme cu profil la complet frameless point-fixed." },
      { title: "Sticlă VSG certificată", description: "Sticlă securizată și laminată conform EN 12600, EN 14179 și ETAG 002." },
      { title: "Prindere cu cleme inox", description: "Cleme și console din inox 316L rezistente la coroziune, în special pentru exterior." },
      { title: "Montaj în masă sau pe structură", description: "Adaptabil la beton, lemn, oțel și orice tip de structură portantă." },
      { title: "Mânere și profile personalizate", description: "Elemente din aluminiu, inox sau lemn în funcție de stilul arhitectural." },
      { title: "Execuție în România și UE", description: "14 ani experiență, lucrări finalizate în toată România și în Europa." },
    ],
    specs: [
      { label: "Sticlă", value: "VSG 8.8 / 10.10mm" },
      { label: "Modele", value: "S1 – S6" },
      { label: "Prindere", value: "Cleme / Profile / Point-fixed" },
      { label: "Material prindere", value: "Inox 316L / Aluminiu" },
      { label: "Înălțime balustradă", value: "100–120cm" },
      { label: "Certificare", value: "EN 12600 / ETAG 002" },
      { label: "Garanție", value: "5 ani" },
      { label: "Termen montaj", value: "21–30 zile" },
    ],
    gallery: [
      { src: "/images/balustrada-sticla-balcon-1.jpeg", alt: "Balustradă sticlă balcon exterior" },
      { src: "/images/balustrada-sticla-scari-exterioare-1.jpeg", alt: "Balustradă sticlă scări exterioare" },
      { src: "/images/balustrada-sticla-scari-interior-2.jpeg", alt: "Balustradă sticlă scări interior inox" },
      { src: "/images/balustrada-sticla-scari-granit-1.jpeg", alt: "Balustradă sticlă scări granit negru" },
      { src: "/images/balustrada-sticla-scari-plutitoare-1.jpeg", alt: "Balustradă sticlă scări plutitoare duplex" },
      { src: "/images/fatada-rezidentiala-balustrade-1.jpeg", alt: "Fațadă vilă cu balustrade sticlă" },
    ],
  },

  // ── Pergole ─────────────────────────────────────────────────────────────────

  "pergole/bioclimatice": {
    slug: "pergole/bioclimatice",
    title: "Pergole Bioclimatice",
    subtitle: "Confort în aer liber, în orice anotimp",
    heroImage: "/images/fatada-rezidentiala-balustrade-2.jpeg",
    heroBadge: "Pergole & Terase",
    intro: "Pergolele bioclimatice combină tehnologiile moderne cu un design distins.",
    description:
      "Potrivite pentru locuințe și spații comerciale (restaurante, terase), pergolele bioclimatice folosesc lamele de aluminiu controlate electric prin telecomandă sau smartphone. Lamele rotative permit adaptarea la condițiile meteo: închise complet pentru protecție la ploaie (etanșeitate 100%), deschise pentru circulație de aer, sau parțial rotite pentru filtrare solară.",
    features: [
      { title: "Lamele rotative motorize", description: "Control prin telecomandă, aplicație smartphone sau senzori meteo automați." },
      { title: "Etanșeitate 100%", description: "Când lamelele sunt închise, pergola este complet impermeabilă — nu picură picătură de ploaie." },
      { title: "Rezistență la zăpadă", description: "Lamele testate cu încărcări de 2 metri zăpadă (300 kg/mp) — construcție robustă." },
      { title: "Ventilație naturală", description: "Lamelele rotite parțial permit circulația aerului și răcorire naturală a spațiului." },
      { title: "Iluminare integrată LED", description: "Trei sisteme de iluminat disponibile: alb, relaxant și colorat — crează atmosfera dorită." },
      { title: "Opțiuni de închidere laterală", description: "Perdele zip, sticle glisante sau plase pentru protecție completă laterală." },
    ],
    specs: [
      { label: "Material", value: "Aluminiu extrudat" },
      { label: "Tip", value: "Bioclimatic — lamele rotative" },
      { label: "Etanșeitate", value: "100% la ploaie" },
      { label: "Rezistență zăpadă", value: "300 kg/mp" },
      { label: "Comandă", value: "Telecomandă / Smartphone" },
      { label: "Iluminare", value: "LED integrat (opțional)" },
      { label: "Garanție", value: "3 ani" },
      { label: "Termen montaj", value: "60 zile" },
    ],
    gallery: [
      { src: "/images/fatada-rezidentiala-balustrade-2.jpeg", alt: "Pergolă bioclimatică" },
      { src: "/images/balustrada-sticla-scari-exterioare-1.jpeg", alt: "Terasa cu pergolă" },
      { src: "/images/balustrada-sticla-scari-interior-3.jpeg", alt: "Lamele rotative" },
      { src: "/images/balustrada-sticla-balcon-1.jpeg", alt: "Pergolă cu iluminat" },
    ],
  },

  "pergole/retractabile": {
    slug: "pergole/retractabile",
    title: "Pergole Retractabile",
    subtitle: "Flexibilitate totală pentru terase",
    heroImage: "/images/balustrada-sticla-scari-interior-3.jpeg",
    heroBadge: "Pergole & Terase",
    intro: "Pergolele retractabile oferă protecție solară când ai nevoie și cer deschis când vrei.",
    description:
      "Sistemele de acoperire retractabilă pentru terase sunt ideale atunci când vrei flexibilitate maximă: protecție solară sau de ploaie la cerere, dar cu posibilitatea de a retrage complet structura pentru a te bucura de cerul liber. Disponibile cu pânză rezistentă la UV și intemperii, cu acționare manuală sau motorize.",
    features: [
      { title: "Acoperire completă sau parțială", description: "Sistemele zip permit reglarea gradului de acoperire cu precizie centimetru cu centimetru." },
      { title: "Pânza rezistentă la UV", description: "Material tehnic cu protecție 95%+ față de razele UV, care nu se decolorează în timp." },
      { title: "Motor Somfy sau Nice", description: "Acționare silențioasă, cu limitatoare de cursă și opțiuni de comandă radio." },
      { title: "Senzor de vânt și ploaie", description: "Retragere automată la detectarea vântului puternic, protejând structura și pânza." },
      { title: "Iluminat integrat în structură", description: "Bandă LED sau spoturi integrați în caseta de rulare sau pe brațe." },
      { title: "Colori și modele diverse", description: "Sute de variante de pânze și profile pentru a se potrivi oricărei arhitecturi." },
    ],
    specs: [
      { label: "Material pânza", value: "Acryl / Poliester / Fibra sticla" },
      { label: "Protecție UV", value: "95%+" },
      { label: "Acționare", value: "Manuală / Motor" },
      { label: "Motor", value: "Somfy / Nice" },
      { label: "Senzori", value: "Vânt / Ploaie / Lumina" },
      { label: "Deschidere max.", value: "8m lățime, 5m avansare" },
      { label: "Garanție", value: "3 ani" },
      { label: "Termen montaj", value: "30–45 zile" },
    ],
    gallery: [
      { src: "/images/balustrada-sticla-scari-interior-3.jpeg", alt: "Pergolă retractabilă" },
      { src: "/images/fatada-rezidentiala-balustrade-2.jpeg", alt: "Terasa cu pergolă retractabilă" },
      { src: "/images/balustrada-sticla-scari-exterioare-1.jpeg", alt: "Detaliu mecanism" },
      { src: "/images/balustrada-sticla-balcon-1.jpeg", alt: "Pergolă deschisă" },
    ],
  },
};

// ─── Category pages ───────────────────────────────────────────────────────────

export const categories: Record<string, CategoryData> = {
  "tamplarie-aluminiu": {
    slug: "tamplarie-aluminiu",
    title: "Tâmplărie din Aluminiu",
    subtitle: "Precizie și eleganță la orice scară",
    heroImage: "/images/fatada-rezidentiala-balustrade-1.jpeg",
    intro: "Profile europene de top, sisteme personalizate pentru orice proiect",
    description:
      "Gamele noastre de tâmplărie din aluminiu folosesc profile Reynaers și Alumil, recunoscute ca referințe în industria europeană. De la ferestre minimaliste la sisteme glisante panoramice și uși de intrare impresionante, soluțiile noastre din aluminiu se adaptează oricărui stil arhitectural.",
    products: [
      { title: "Uși și Ferestre", href: "/tamplarie-aluminiu/usi-ferestre", image: "/images/fatada-rezidentiala-balustrade-1.jpeg", short: "Profile Reynaers / Alumil, tripan 52mm, garanție 5 ani", tags: ["Batant", "Oscilant", "Tripan"] },
      { title: "Uși Glisante", href: "/tamplarie-aluminiu/usi-glisante", image: "/images/balustrada-sticla-balcon-1.jpeg", short: "Lift-slide până la 12m, protecție solară integrată", tags: ["Lift-Slide", "Panoramic", "Fără prag"] },
      { title: "Uși Armonice", href: "/tamplarie-aluminiu/usi-armonice", image: "/images/balustrada-sticla-scari-plutitoare-1.jpeg", short: "Pliant-armonic, deschidere completă, interior/exterior", tags: ["Armonic", "Commercial", "Rezidential"] },
      { title: "Uși de Intrare", href: "/tamplarie-aluminiu/usi-intrare", image: "/images/fatada-rezidentiala-balustrade-2.jpeg", short: "Pivot, batant, control acces, securitate RC3", tags: ["Pivot", "RC3", "Control acces"] },
    ],
  },

  "fatade-ventilate": {
    slug: "fatade-ventilate",
    title: "Fațade Ventilate",
    subtitle: "Eficiență energetică și estetică modernă",
    heroImage: "/images/balustrada-sticla-scari-plutitoare-1.jpeg",
    intro: "Sisteme de fațade ventilate certificate pentru orice clădire",
    description: "Oferim trei sisteme principale de fațade ventilate — Bond, Fibrociment și HPL — fiecare cu caracteristici estetice și tehnice distincte. Toate sistemele includ proiectare, avize, livrare și montaj.",
    products: [
      { title: "Bond", href: "/fatade-ventilate/bond", image: "/images/balustrada-sticla-scari-plutitoare-1.jpeg", short: "Compozit aluminiu, 4kg/m², forme complexe", tags: ["Compozit", "Ușor", "PVDF"] },
      { title: "Fibrociment", href: "/fatade-ventilate/fibrociment", image: "/images/balustrada-sticla-scari-interior-3.jpeg", short: "Durabilitate 50+ ani, incombustibil, textură naturală", tags: ["A2", "Natural", "Durabil"] },
      { title: "HPL", href: "/fatade-ventilate/hpl", image: "/images/balustrada-sticla-scari-exterioare-1.jpeg", short: "High Pressure Laminate, 500+ finisaje, rezistent UV", tags: ["HPL", "UV Stabil", "500+ culori"] },
    ],
  },

  "tamplarie-pvc": {
    slug: "tamplarie-pvc",
    title: "Tâmplărie PVC",
    subtitle: "Izolație superioară, confort garantat",
    heroImage: "/images/balustrada-sticla-scari-interior-3.jpeg",
    intro: "Profile PVC de calitate germană cu performanțe de top",
    description: "Sistemele noastre PVC includ profiluri Salamander bluEVOLUTION 92 cu 7 camere, rulouri exterioare motorize și plase pentru insecte — toate soluțiile necesare pentru o fereastră completă și eficientă.",
    products: [
      { title: "Tâmplărie Salamander", href: "/tamplarie-pvc/salamander", image: "/images/balustrada-sticla-scari-interior-3.jpeg", short: "bluEVOLUTION 92, 7 camere, Uw 0.79, Passive House", tags: ["7 camere", "Passive House", "German"] },
      { title: "Rulouri Exterioare", href: "/tamplarie-pvc/rulouri-exterioare", image: "/images/fatada-rezidentiala-balustrade-2.jpeg", short: "Motorize Somfy, reducere 75% căldură solară", tags: ["Motorizat", "Solar", "Smart"] },
      { title: "Plase Insecte", href: "/tamplarie-pvc/plase-insecte", image: "/images/balustrada-sticla-scari-exterioare-1.jpeg", short: "Fix, rulou, plisé — soluție pentru orice fereastră", tags: ["Fix", "Rulou", "Plisé"] },
    ],
  },

  "sticla-securizata": {
    slug: "sticla-securizata",
    title: "Sticlă Securizată",
    subtitle: "Siguranță și transparență fără compromis",
    heroImage: "/images/balustrada-sticla-balcon-1.jpeg",
    intro: "Sisteme din sticlă securizată pentru orice aplicație interioară și exterioară",
    description: "De la balcoane și terase la compartimentări de birouri și fațade de magazine, sistemele noastre din sticlă securizată sunt certificate și montate de echipe specializate cu 15 ani de experiență.",
    products: [
      { title: "Balcoane și Terase", href: "/sticla-securizata/balcoane-terase", image: "/images/balustrada-sticla-scari-exterioare-1.jpeg", short: "Sistem Valedo, fără profile verticale, 10mm VSG", tags: ["Valedo", "Fără profile", "10mm"] },
      { title: "Uși Batante", href: "/sticla-securizata/usi-batante", image: "/images/balustrada-sticla-balcon-1.jpeg", short: "Frameless, VSG 10mm, balamale ascunse", tags: ["Frameless", "VSG", "Premium"] },
      { title: "Uși Glisante", href: "/sticla-securizata/usi-glisante", image: "/images/fatada-rezidentiala-balustrade-2.jpeg", short: "Suspendate, soft-close, profil 18mm", tags: ["Suspendat", "Soft-close", "Minim"] },
      { title: "Compartimentări Birouri", href: "/sticla-securizata/compartimentari-birouri", image: "/images/balustrada-sticla-scari-interior-1.jpeg", short: "Frameless sau profil, 35–45dB izolare fonică", tags: ["Frameless", "Birou", "Fono"] },
      { title: "Copertine Sticlă", href: "/sticla-securizata/copertine-sticla", image: "/images/balustrada-sticla-scari-plutitoare-1.jpeg", short: "Cabluri inox, SGP, sarcini calculate structural", tags: ["Structural", "Cabluri", "Inox"] },
      { title: "Fațade Magazin", href: "/sticla-securizata/fatade-magazin", image: "/images/balustrada-sticla-balcon-1.jpeg", short: "Frameless, uși automate, serigrafie brand", tags: ["Comercial", "Automat", "Brand"] },
    ],
  },

  "balustrade": {
    slug: "balustrade",
    title: "Balustrade",
    subtitle: "Siguranță cu caracter",
    heroImage: "/images/balustrada-sticla-balcon-1.jpeg",
    intro: "Sisteme de balustrade certificate pentru balcoane, scări și terase",
    description: "Gamele noastre de balustrade din sticlă sunt testate și certificate conform standardelor europene. Executăm lucrări în toată România și în Europa, cu garanție 5 ani.",
    products: [
      { title: "Balustrade Sticlă", href: "/balustrade/balustrade-sticla", image: "/images/balustrada-sticla-balcon-1.jpeg", short: "6 modele S1–S6, VSG 8.8–10.10mm, inox 316L", tags: ["S1–S6", "Certificat", "Inox"] },
    ],
  },

  "pergole": {
    slug: "pergole",
    title: "Pergole & Terase",
    subtitle: "Extinde-ți spațiul în aer liber",
    heroImage: "/images/fatada-rezidentiala-balustrade-2.jpeg",
    intro: "Pergole bioclimatice și retractabile pentru locuințe și spații comerciale",
    description: "Sistemele noastre de pergole transformă terasele și grădinile în spații confortabile pentru tot sezonul, cu protecție completă la ploaie, soare și vânt.",
    products: [
      { title: "Pergole Bioclimatice", href: "/pergole/bioclimatice", image: "/images/fatada-rezidentiala-balustrade-2.jpeg", short: "Lamele rotative, etanșe 100%, rezistente 300kg/mp zăpadă", tags: ["Bioclimatic", "100% etanș", "Smart"] },
      { title: "Pergole Retractabile", href: "/pergole/retractabile", image: "/images/balustrada-sticla-scari-interior-3.jpeg", short: "Motor Somfy, pânza UV 95%, senzori vânt/ploaie", tags: ["Retractabil", "Somfy", "UV 95%"] },
    ],
  },
};
