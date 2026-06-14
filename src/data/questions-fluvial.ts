import type { Question } from "@/types";

export const QUESTIONS_FLUVIAL: Question[] = [
  // ───────────── NAVIGATION ─────────────
  {
    id: "FLU-NAV-001",
    licenseType: "fluvial",
    category: "navigation",
    difficulty: 1,
    question:
      "Sur une voie navigable, deux bateaux se croisent face à face. Quelle est la règle générale ?",
    options: [
      "Chaque bateau passe à droite (tribord)",
      "Le bateau le plus petit passe à gauche",
      "Le bateau descendant passe à droite",
      "Il n'y a pas de règle fixe",
    ],
    correctIndex: 0,
    explanation:
      "En navigation fluviale, la règle générale de croisement est de passer à droite (côté tribord). Chaque bateau doit donc laisser l'autre sur son côté gauche (bâbord).",
  },
  {
    id: "FLU-NAV-002",
    licenseType: "fluvial",
    category: "navigation",
    difficulty: 2,
    question:
      "Un bateau remontant croise un bateau descendant sur un chenal étroit. Qui doit s'écarter ?",
    options: [
      "Le bateau remontant doit s'écarter",
      "Le bateau descendant doit s'écarter",
      "Le plus petit bateau doit s'écarter",
      "Celui qui navigue le plus vite doit s'écarter",
    ],
    correctIndex: 0,
    explanation:
      "Sur les voies navigables intérieures, le bateau qui remonte le courant doit céder le passage au bateau qui descend. En cas de chenal étroit, le bâtiment remontant doit s'écarter.",
  },
  {
    id: "FLU-NAV-003",
    licenseType: "fluvial",
    category: "navigation",
    difficulty: 1,
    question: "Que signifie 'tribord' sur un bateau ?",
    options: [
      "Le côté droit quand on regarde vers l'avant",
      "Le côté gauche quand on regarde vers l'avant",
      "L'arrière du bateau",
      "L'avant du bateau",
    ],
    correctIndex: 0,
    explanation:
      "Tribord désigne le côté droit du bateau lorsqu'on regarde vers l'avant (la proue). Le côté gauche est appelé bâbord. Moyen mnémotechnique : tribord = droite (les deux mots ont 6 lettres).",
  },
  {
    id: "FLU-NAV-004",
    licenseType: "fluvial",
    category: "navigation",
    difficulty: 2,
    question:
      "Un voilier et un bateau à moteur se croisent. Dans la plupart des cas, qui doit céder le passage ?",
    options: [
      "Le bateau à moteur cède le passage au voilier",
      "Le voilier cède le passage au bateau à moteur",
      "Cela dépend de la taille des bateaux",
      "Cela dépend de la vitesse",
    ],
    correctIndex: 0,
    explanation:
      "En règle générale, les bateaux à propulsion mécanique doivent céder le passage aux voiliers. Cependant, un voilier qui double un autre bateau par derrière doit lui céder le passage.",
  },
  {
    id: "FLU-NAV-005",
    licenseType: "fluvial",
    category: "navigation",
    difficulty: 2,
    question:
      "Quelle est la distance de sécurité minimale à respecter lors d'un dépassement sur voie navigable ?",
    options: [
      "Suffisante pour éviter tout danger, adaptée aux conditions",
      "Exactement 5 mètres",
      "Exactement 10 mètres",
      "La moitié de la largeur du chenal",
    ],
    correctIndex: 0,
    explanation:
      "Il n'existe pas de distance fixe réglementaire. Le dépassement doit se faire à une distance suffisante pour éviter tout danger, en tenant compte de la vitesse, du sillage et des conditions de navigation.",
  },
  {
    id: "FLU-NAV-006",
    licenseType: "fluvial",
    category: "navigation",
    difficulty: 1,
    question: "Que signifie 'bâbord' sur un bateau ?",
    options: [
      "Le côté gauche quand on regarde vers l'avant",
      "Le côté droit quand on regarde vers l'avant",
      "L'arrière du bateau",
      "La partie inférieure de la coque",
    ],
    correctIndex: 0,
    explanation:
      "Bâbord désigne le côté gauche du bateau lorsqu'on regarde vers l'avant. Pour retenir : B comme Bâbord = G comme Gauche.",
  },
  {
    id: "FLU-NAV-007",
    licenseType: "fluvial",
    category: "navigation",
    difficulty: 3,
    question:
      "Qu'est-ce que le 'chenal navigable' sur une voie d'eau ?",
    options: [
      "La partie de la voie d'eau balisée et suffisamment profonde pour la navigation",
      "La rive droite de la rivière",
      "Toute la largeur de la rivière disponible",
      "Le couloir réservé aux bateaux professionnels",
    ],
    correctIndex: 0,
    explanation:
      "Le chenal navigable est la partie de la voie d'eau délimitée par le balisage qui présente un tirant d'eau suffisant et des dimensions adaptées à la navigation. Il faut rester dans ce chenal pour naviguer en sécurité.",
  },
  {
    id: "FLU-NAV-008",
    licenseType: "fluvial",
    category: "navigation",
    difficulty: 2,
    question:
      "Lors d'un dépassement, le bateau dépassant doit s'assurer :",
    options: [
      "Que l'espace est suffisant et que le bateau dépassé n'est pas gêné",
      "Qu'il navigue à plus de 10 nœuds",
      "Que sa proue est à bâbord du bateau dépassé",
      "Uniquement que sa vitesse est supérieure",
    ],
    correctIndex: 0,
    explanation:
      "Le bateau qui dépasse a la responsabilité de vérifier que le dépassement peut s'effectuer sans danger : espace suffisant, pas de risque de collision, sillage ne mettant pas en danger le bateau dépassé.",
  },

  // ───────────── SIGNALISATION ─────────────
  {
    id: "FLU-SIG-001",
    licenseType: "fluvial",
    category: "signalisation",
    difficulty: 1,
    question:
      "La nuit, un bateau à moteur en marche doit montrer quels feux minimum ?",
    options: [
      "Un feu de tête de mât blanc, un feu rouge à bâbord et un feu vert à tribord",
      "Uniquement un feu blanc à l'arrière",
      "Un feu rouge à l'avant et un feu blanc à l'arrière",
      "Deux feux blancs à l'avant et un rouge à l'arrière",
    ],
    correctIndex: 0,
    explanation:
      "Un bateau à moteur en marche doit montrer : un feu de tête de mât blanc visible de l'avant, un feu de côté rouge à bâbord (gauche) et vert à tribord (droite), et un feu de poupe (arrière) blanc.",
  },
  {
    id: "FLU-SIG-002",
    licenseType: "fluvial",
    category: "signalisation",
    difficulty: 2,
    question:
      "Une bouée de couleur rouge, de forme conique, indique :",
    options: [
      "La limite droite du chenal navigable (rive droite en montant)",
      "La limite gauche du chenal navigable",
      "Un danger isolé au milieu du chenal",
      "Une zone de baignade",
    ],
    correctIndex: 0,
    explanation:
      "En balisage fluvial français, les bouées rouges (coniques ou cylindriques) marquent la limite droite du chenal quand on remonte le courant (ou quand on va vers le port/l'amont).",
  },
  {
    id: "FLU-SIG-003",
    licenseType: "fluvial",
    category: "signalisation",
    difficulty: 2,
    question:
      "Que signifie un panneau de signalisation rond avec un fond blanc et une bordure rouge barré d'une barre oblique rouge ?",
    options: [
      "Fin d'interdiction ou de restriction",
      "Interdiction de navigation",
      "Obligation de s'arrêter",
      "Zone de vitesse réduite",
    ],
    correctIndex: 0,
    explanation:
      "En signalisation fluviale CEVNI (Code Européen des Voies de Navigation Intérieure), un panneau rond avec fond blanc, bordure rouge et barre oblique rouge signifie la fin d'une interdiction ou restriction préalablement signalée.",
  },
  {
    id: "FLU-SIG-004",
    licenseType: "fluvial",
    category: "signalisation",
    difficulty: 1,
    question:
      "Que signifie un signal sonore d'un coup long de corne de brume ?",
    options: [
      "Signal d'attention général ou passage d'un obstacle",
      "Demande de passage en écluse",
      "Appel au secours",
      "Bateau sur le point de reculer",
    ],
    correctIndex: 0,
    explanation:
      "Un coup long de corne de brume (4 à 6 secondes) est un signal d'attention. Il est utilisé pour signaler sa présence, notamment avant un virage ou un passage à visibilité réduite.",
  },
  {
    id: "FLU-SIG-005",
    licenseType: "fluvial",
    category: "signalisation",
    difficulty: 2,
    question:
      "Un signal carré blanc avec une croix bleue indique :",
    options: [
      "Il est autorisé de croiser ou de dépasser dans cette zone",
      "Zone d'amarrage autorisé",
      "Entrée d'écluse",
      "Station de carburant",
    ],
    correctIndex: 0,
    explanation:
      "Un panneau carré blanc avec une croix bleue (signal d'indication A.9 du CEVNI) signifie que le croisement et le dépassement sont autorisés dans ce secteur.",
  },
  {
    id: "FLU-SIG-006",
    licenseType: "fluvial",
    category: "signalisation",
    difficulty: 3,
    question:
      "Un bateau à l'ancre de nuit en zone fréquentée doit montrer :",
    options: [
      "Un feu blanc tout horizon visible de tous côtés",
      "Aucun feu n'est obligatoire à l'ancre",
      "Un feu rouge et un feu vert",
      "Deux feux blancs superposés",
    ],
    correctIndex: 0,
    explanation:
      "Un bateau à l'ancre doit montrer, de nuit, un feu blanc visible sur tout l'horizon (360°). Ce feu doit être placé à l'avant et être visible de tous les côtés pour signaler la présence du bateau.",
  },
  {
    id: "FLU-SIG-007",
    licenseType: "fluvial",
    category: "signalisation",
    difficulty: 2,
    question:
      "Que signifie une bouée verte en balisage fluvial ?",
    options: [
      "Limite gauche du chenal navigable (rive gauche en montant)",
      "Limite droite du chenal navigable",
      "Épave ou danger isolé",
      "Zone de pêche autorisée",
    ],
    correctIndex: 0,
    explanation:
      "Les bouées vertes marquent la limite gauche du chenal navigable quand on remonte le courant (côté bâbord). Règle mnémotechnique : vert = gauche (comme les feux de côté).",
  },
  {
    id: "FLU-SIG-008",
    licenseType: "fluvial",
    category: "signalisation",
    difficulty: 1,
    question:
      "Combien de coups de sifflet ou de corne représentent un signal de détresse ?",
    options: [
      "Séries répétées de coups brefs (signal de détresse sonore)",
      "Un seul coup long",
      "Deux coups brefs",
      "Trois coups longs espacés",
    ],
    correctIndex: 0,
    explanation:
      "Le signal de détresse sonore se compose de coups brefs répétés de manière continue. Sur les voies fluviales, il peut aussi être complété par le signal visuel SOS ou le pavillon N-C.",
  },

  // ───────────── MANŒUVRE ─────────────
  {
    id: "FLU-MAN-001",
    licenseType: "fluvial",
    category: "manoeuvre",
    difficulty: 1,
    question:
      "Lors d'un passage en écluse, dans quel ordre les bateaux sont-ils généralement prioritaires ?",
    options: [
      "Les bateaux professionnels (convois) passent avant les plaisanciers",
      "Les plaisanciers passent en premier car ils paient des taxes",
      "Ordre de passage aléatoire décidé par l'éclusier",
      "Le plus grand bateau passe toujours en premier",
    ],
    correctIndex: 0,
    explanation:
      "Les bateaux de commerce et les convois ont priorité sur la plaisance dans les écluses. Les plaisanciers doivent respecter cet ordre et attendre les instructions de l'éclusier.",
  },
  {
    id: "FLU-MAN-002",
    licenseType: "fluvial",
    category: "manoeuvre",
    difficulty: 2,
    question:
      "Comment doit-on amarrer son bateau en écluse ?",
    options: [
      "Avec des amarres avant et arrière, en laissant du jeu pour la variation du niveau d'eau",
      "Uniquement avec une amarre à l'avant",
      "Le bateau reste libre en moteur pour manœuvrer",
      "On s'amarre au bateau voisin uniquement",
    ],
    correctIndex: 0,
    explanation:
      "En écluse, il faut toujours amarrer avec des amarres avant et arrière. Il est impératif de laisser du jeu car le niveau d'eau va varier (montée ou descente). Les amarres doivent pouvoir coulisser librement.",
  },
  {
    id: "FLU-MAN-003",
    licenseType: "fluvial",
    category: "manoeuvre",
    difficulty: 2,
    question:
      "Qu'est-ce que le 'tirant d'eau' d'un bateau ?",
    options: [
      "La profondeur maximale que le bateau enfonce sous la surface de l'eau",
      "La hauteur totale du bateau au-dessus de l'eau",
      "La longueur de la quille",
      "Le poids maximum que le bateau peut transporter",
    ],
    correctIndex: 0,
    explanation:
      "Le tirant d'eau est la profondeur immergée du bateau, c'est-à-dire la distance entre la ligne de flottaison et le point le plus bas de la coque. Il est essentiel de le connaître pour ne pas s'échouer.",
  },
  {
    id: "FLU-MAN-004",
    licenseType: "fluvial",
    category: "manoeuvre",
    difficulty: 3,
    question:
      "Pour virer de bord dans un espace réduit, quelle technique est recommandée ?",
    options: [
      "Utiliser la marche arrière combinée à des coups de barre pour tourner sur place",
      "Accélérer au maximum pour un demi-tour rapide",
      "S'ancrer puis manœuvrer autour de l'ancre",
      "Attendre un courant favorable",
    ],
    correctIndex: 0,
    explanation:
      "Pour virer dans un espace réduit, on alterne marche avant avec barre à fond d'un côté et marche arrière avec barre à fond de l'autre côté. En marche arrière, la poupe se déplace du côté où la barre est mise.",
  },
  {
    id: "FLU-MAN-005",
    licenseType: "fluvial",
    category: "manoeuvre",
    difficulty: 2,
    question:
      "Qu'est-ce que le 'tirant d'air' d'un bateau ?",
    options: [
      "La hauteur maximale du bateau au-dessus de la ligne de flottaison (ponts, mâts)",
      "La profondeur sous la surface de l'eau",
      "La quantité d'air dans les flotteurs",
      "La distance entre la quille et le fond",
    ],
    correctIndex: 0,
    explanation:
      "Le tirant d'air est la hauteur totale du bateau au-dessus de la ligne de flottaison. Il est crucial pour passer sous les ponts. Il faut toujours vérifier la hauteur des ponts sur l'itinéraire prévu.",
  },

  // ───────────── SÉCURITÉ ─────────────
  {
    id: "FLU-SEC-001",
    licenseType: "fluvial",
    category: "securite",
    difficulty: 1,
    question:
      "Quel équipement de sécurité est obligatoire pour chaque personne à bord d'un bateau de plaisance ?",
    options: [
      "Un gilet de sauvetage ou une aide à la flottabilité adaptée",
      "Uniquement un masque de plongée",
      "Un harnais de sécurité uniquement",
      "Des brassards de natation",
    ],
    correctIndex: 0,
    explanation:
      "Chaque personne à bord doit disposer d'un gilet de sauvetage ou d'une aide à la flottabilité (brassard, combinaison) adaptée à son poids et à la navigation pratiquée. Il est fortement recommandé de le porter.",
  },
  {
    id: "FLU-SEC-002",
    licenseType: "fluvial",
    category: "securite",
    difficulty: 1,
    question:
      "Que faire en priorité si quelqu'un tombe à l'eau ?",
    options: [
      "Lancer un objet flottant, signaler la position, manœuvrer pour récupérer la personne",
      "Plonger immédiatement à sa suite",
      "Accélérer pour chercher de l'aide",
      "Jeter l'ancre et attendre les secours",
    ],
    correctIndex: 0,
    explanation:
      "En cas de personne à la mer (PAM) : 1) Lancer une bouée ou objet flottant, 2) Ne jamais perdre la personne des yeux, 3) Désigner un observateur, 4) Manœuvrer pour récupérer la personne, 5) Appeler les secours (VHF canal 16).",
  },
  {
    id: "FLU-SEC-003",
    licenseType: "fluvial",
    category: "securite",
    difficulty: 2,
    question:
      "Un extincteur à bord d'un bateau de plaisance doit être :",
    options: [
      "Facilement accessible, régulièrement contrôlé et adapté aux feux de carburant",
      "Stocké dans la cale fermée à clé",
      "Rempli d'eau uniquement",
      "Uniquement présent si le bateau fait plus de 10 mètres",
    ],
    correctIndex: 0,
    explanation:
      "L'extincteur doit être accessible rapidement en cas d'urgence, régulièrement vérifié (pression, plombage), et de type adapté aux feux de carburant (classe B) — extincteur à poudre ou CO2, jamais d'eau sur un feu de carburant.",
  },
  {
    id: "FLU-SEC-004",
    licenseType: "fluvial",
    category: "securite",
    difficulty: 2,
    question:
      "Quelle est la conduite à tenir lors d'une voie d'eau (entrée d'eau dans la coque) ?",
    options: [
      "Tenter d'obturer la voie d'eau, écoper, alerter les secours si nécessaire",
      "Accélérer pour rejoindre la rive le plus vite possible",
      "Jeter l'ancre immédiatement",
      "Transvaser le carburant pour alléger le bateau",
    ],
    correctIndex: 0,
    explanation:
      "Face à une voie d'eau : 1) Tenter de colmater (chiffons, cuneum), 2) Activer la pompe de cale, 3) Écoper si nécessaire, 4) Se diriger vers la rive, 5) Alerter les secours si la situation se dégrade.",
  },
  {
    id: "FLU-SEC-005",
    licenseType: "fluvial",
    category: "securite",
    difficulty: 1,
    question:
      "Que signifie l'acronyme VHF en navigation ?",
    options: [
      "Very High Frequency — radio marine utilisée pour les communications et les appels de détresse",
      "Vitesse Haute Fréquence — indicateur de vitesse",
      "Vessel Handling Factor — facteur de maniabilité",
      "Variable Hydro Flow — débit du moteur",
    ],
    correctIndex: 0,
    explanation:
      "VHF signifie Very High Frequency. La radio VHF marine est l'outil de communication principal en navigation. Le canal 16 est le canal de détresse et d'appel international, surveillé en permanence.",
  },
  {
    id: "FLU-SEC-006",
    licenseType: "fluvial",
    category: "securite",
    difficulty: 2,
    question:
      "Quel est le canal VHF international de détresse et d'appel ?",
    options: [
      "Canal 16",
      "Canal 9",
      "Canal 12",
      "Canal 72",
    ],
    correctIndex: 0,
    explanation:
      "Le canal 16 VHF est le canal de détresse, d'urgence et d'appel international. Tout bâtiment équipé d'une VHF doit maintenir une veille sur ce canal. On y émet le signal MAYDAY en cas de détresse.",
  },
  {
    id: "FLU-SEC-007",
    licenseType: "fluvial",
    category: "securite",
    difficulty: 3,
    question:
      "Quel équipement de sécurité est obligatoire pour les bateaux motorisés de plaisance sur les voies intérieures ?",
    options: [
      "Dispositif lumineux, moyen de propulsion de secours, ligne de mouillage et équipement de flottabilité",
      "Uniquement un gilet de sauvetage par personne",
      "Fusées de détresse uniquement",
      "Radio VHF et GPS obligatoires",
    ],
    correctIndex: 0,
    explanation:
      "La réglementation impose a minima : des équipements de flottabilité par personne, un dispositif d'éclairage, des moyens de signalisation sonore, une ligne de mouillage (ancre), et des équipements de lutte anti-incendie selon la taille.",
  },
  {
    id: "FLU-SEC-008",
    licenseType: "fluvial",
    category: "securite",
    difficulty: 2,
    question:
      "Qu'est-ce que l'effet de succion (bernoulli) entre deux bateaux qui se croisent à grande vitesse ?",
    options: [
      "Une attraction mutuelle qui peut provoquer une collision si la vitesse est trop élevée",
      "Un courant d'air favorable qui aide à la navigation",
      "Un effet qui repousse les bateaux l'un de l'autre",
      "Un phénomène uniquement visible en mer",
    ],
    correctIndex: 0,
    explanation:
      "Lorsque deux bateaux se croisent à faible distance et grande vitesse, l'effet Bernoulli crée une dépression qui peut attirer les coques l'une vers l'autre. C'est pourquoi il faut réduire la vitesse lors des croisements proches.",
  },

  // ───────────── MÉTÉO ─────────────
  {
    id: "FLU-MET-001",
    licenseType: "fluvial",
    category: "meteo",
    difficulty: 1,
    question:
      "Que doit faire un plaisancier si une tempête est annoncée sur son itinéraire ?",
    options: [
      "Rester au port ou chercher un abri sûr, reporter la navigation",
      "Naviguer rapidement pour éviter la tempête",
      "Naviguer uniquement si le bateau est suffisamment grand",
      "Naviguer tôt le matin avant la tempête",
    ],
    correctIndex: 0,
    explanation:
      "La prudence impose de ne pas appareiller si une tempête ou de mauvaises conditions météo sont prévues. Il vaut mieux rester au port ou s'abriter dans une marina en attendant que les conditions s'améliorent.",
  },
  {
    id: "FLU-MET-002",
    licenseType: "fluvial",
    category: "meteo",
    difficulty: 2,
    question:
      "Comment s'appelle la hausse brutale et intense du vent qui survient très rapidement ?",
    options: [
      "Grain",
      "Brise",
      "Sirocco",
      "Mousson",
    ],
    correctIndex: 0,
    explanation:
      "Un 'grain' est une hausse brutale du vent souvent accompagnée de pluie et d'orages. Il peut survenir très rapidement, ce qui le rend particulièrement dangereux. Il faut surveiller l'horizon et les nuages cumulonimbus.",
  },
  {
    id: "FLU-MET-003",
    licenseType: "fluvial",
    category: "meteo",
    difficulty: 2,
    question:
      "Qu'est-ce que le brouillard de radiation, fréquent sur les rivières ?",
    options: [
      "Brouillard se formant la nuit et tôt le matin par refroidissement des terres",
      "Brouillard uniquement présent en mer",
      "Phénomène causé par la pollution industrielle",
      "Brouillard de midi par forte chaleur",
    ],
    correctIndex: 0,
    explanation:
      "Le brouillard de radiation se forme la nuit quand les terres se refroidissent rapidement, condensant l'humidité au-dessus des cours d'eau. Il est fréquent l'été tôt le matin et se dissipe généralement avec le soleil.",
  },
  {
    id: "FLU-MET-004",
    licenseType: "fluvial",
    category: "meteo",
    difficulty: 1,
    question:
      "Où peut-on obtenir des prévisions météorologiques fiables avant de naviguer ?",
    options: [
      "Météo-France, VHF météo, applications marines certifiées",
      "Uniquement à la capitainerie du port",
      "En observant uniquement le ciel sans consultation",
      "Les prévisions ne sont pas nécessaires en rivière",
    ],
    correctIndex: 0,
    explanation:
      "Avant toute navigation, il est obligatoire de consulter les prévisions météo. Météo-France propose des bulletins côtiers et maritimes. La VHF (canal météo) diffuse des bulletins réguliers. Les applications marines sont également utiles.",
  },
  {
    id: "FLU-MET-005",
    licenseType: "fluvial",
    category: "meteo",
    difficulty: 3,
    question:
      "Que signifie l'échelle Beaufort 6 en termes de conditions de vent ?",
    options: [
      "Vent frais (39-49 km/h), navigation difficile pour les petites embarcations",
      "Vent faible, conditions idéales pour naviguer",
      "Tempête avec des vagues de 6 mètres",
      "Ouragan — navigation interdite",
    ],
    correctIndex: 0,
    explanation:
      "Force 6 Beaufort correspond à un vent frais de 39 à 49 km/h (22-27 nœuds). En mer, cela génère des vagues de 3 mètres. Pour les petites embarcations, c'est une limite à ne pas dépasser sans expérience.",
  },

  // ───────────── RÉGLEMENTATION ─────────────
  {
    id: "FLU-REG-001",
    licenseType: "fluvial",
    category: "reglementation",
    difficulty: 1,
    question:
      "Quel document de navigation est obligatoire pour un bateau de plaisance immatriculé ?",
    options: [
      "Le certificat d'immatriculation (anciennement carte de circulation)",
      "Uniquement le permis du conducteur",
      "Le carnet de bord obligatoirement rempli",
      "Un document uniquement requis pour les bateaux de plus de 10 m",
    ],
    correctIndex: 0,
    explanation:
      "Le certificat d'immatriculation (titre de navigation) doit être à bord à tout moment. En France, les bateaux de plaisance motorisés de plus de 6 CV doivent être immatriculés.",
  },
  {
    id: "FLU-REG-002",
    licenseType: "fluvial",
    category: "reglementation",
    difficulty: 1,
    question:
      "À partir de quelle puissance moteur le permis bateau est-il obligatoire sur les eaux intérieures françaises ?",
    options: [
      "À partir de 4,5 kW (6 CV) de puissance réelle",
      "À partir de 10 kW (14 CV)",
      "À partir de 50 kW (68 CV)",
      "Le permis n'est jamais obligatoire sur les rivières",
    ],
    correctIndex: 0,
    explanation:
      "En France, le permis de conduire des bateaux de plaisance (option eaux intérieures) est obligatoire pour les bateaux dont la puissance moteur dépasse 4,5 kW (6 CV). En dessous, aucun permis n'est requis.",
  },
  {
    id: "FLU-REG-003",
    licenseType: "fluvial",
    category: "reglementation",
    difficulty: 2,
    question:
      "Quelle est la vitesse maximale générale autorisée sur les voies navigables intérieures françaises ?",
    options: [
      "Elle varie selon les voies (15 à 30 km/h), fixée par arrêté préfectoral",
      "Exactement 30 km/h sur toutes les rivières",
      "50 km/h comme sur les routes",
      "Pas de limitation de vitesse sur les rivières",
    ],
    correctIndex: 0,
    explanation:
      "La vitesse maximale sur les voies navigables est fixée par arrêté préfectoral et varie selon les voies : généralement 15 km/h près des berges, 25-30 km/h dans le chenal. Il faut consulter les arrêtés locaux et les cartes de navigation.",
  },
  {
    id: "FLU-REG-004",
    licenseType: "fluvial",
    category: "reglementation",
    difficulty: 2,
    question:
      "Un bateau de plaisance en France doit obligatoirement avoir :",
    options: [
      "Un numéro d'immatriculation visible sur la coque",
      "Un nom peint en rouge obligatoirement",
      "Un pavillon français obligatoire",
      "Une plaque de numéro uniquement sur l'annexe",
    ],
    correctIndex: 0,
    explanation:
      "Tout bateau immatriculé en France doit afficher son numéro d'immatriculation (matricule) de manière lisible sur la coque. Ce numéro permet son identification par les autorités.",
  },
  {
    id: "FLU-REG-005",
    licenseType: "fluvial",
    category: "reglementation",
    difficulty: 2,
    question:
      "Qu'est-ce qu'une zone de 'mouillage interdit' et comment est-elle signalée ?",
    options: [
      "Zone où il est interdit de jeter l'ancre, signalée par un panneau spécifique (ancre barrée)",
      "Zone où la vitesse est réduite",
      "Zone réservée aux bateaux professionnels",
      "Zone de pêche interdite",
    ],
    correctIndex: 0,
    explanation:
      "Un mouillage interdit est une zone où il est formellement interdit de s'ancrer (câbles sous-marins, zones militaires, trafic intense). Cette interdiction est signalée par un panneau rond rouge avec une ancre barrée.",
  },
  {
    id: "FLU-REG-006",
    licenseType: "fluvial",
    category: "reglementation",
    difficulty: 3,
    question:
      "Quelle est la réglementation concernant la consommation d'alcool à bord d'un bateau en France ?",
    options: [
      "Taux d'alcoolémie limite de 0,5 g/L de sang (comme en voiture), 0,2 g/L pour les permis récents",
      "Aucune limitation, l'alcool est autorisé à bord",
      "Tolérance zéro, aucun alcool autorisé",
      "Limite uniquement en mer, pas sur les rivières",
    ],
    correctIndex: 0,
    explanation:
      "En France, la limite légale d'alcoolémie pour conduire un bateau est de 0,5 g/L de sang (ou 0,25 mg/L d'air expiré), identique à la route. Les sanctions sont également similaires (suspension de permis, amendes, prison).",
  },
  {
    id: "FLU-REG-007",
    licenseType: "fluvial",
    category: "reglementation",
    difficulty: 1,
    question:
      "Qu'est-ce que la 'vignette Voies Navigables de France' (VNF) ?",
    options: [
      "Une taxe annuelle permettant de naviguer sur les voies navigables gérées par VNF",
      "Un permis supplémentaire obligatoire",
      "Une assurance obligatoire pour naviguer",
      "Un contrôle technique des bateaux",
    ],
    correctIndex: 0,
    explanation:
      "La vignette VNF (droit de navigation) est une taxe annuelle à payer pour naviguer sur les voies navigables françaises gérées par Voies Navigables de France. Elle est obligatoire et varie selon la taille et la puissance du bateau.",
  },
  {
    id: "FLU-REG-008",
    licenseType: "fluvial",
    category: "reglementation",
    difficulty: 2,
    question:
      "L'assurance responsabilité civile est-elle obligatoire pour un bateau de plaisance en France ?",
    options: [
      "Oui, obligatoire pour tous les bateaux motorisés et les voiliers",
      "Non, elle est facultative",
      "Uniquement obligatoire pour les bateaux de plus de 7 mètres",
      "Obligatoire uniquement en mer, pas sur les rivières",
    ],
    correctIndex: 0,
    explanation:
      "L'assurance responsabilité civile est obligatoire pour tous les bateaux de plaisance à moteur (quelle que soit la puissance) et pour les voiliers de plus de 6 mètres de longueur hors tout, depuis la loi de 2011.",
  },

  // ───────────── MÉCANIQUE ─────────────
  {
    id: "FLU-MEC-001",
    licenseType: "fluvial",
    category: "mecanique",
    difficulty: 1,
    question:
      "Que faut-il vérifier avant de démarrer le moteur d'un bateau à essence ?",
    options: [
      "Ventiler la cale pendant au moins 4 minutes pour éviter les vapeurs de carburant",
      "Uniquement vérifier le niveau d'huile",
      "Démarrer le moteur directement, aucune vérification n'est nécessaire",
      "Remplir le réservoir à fond avant chaque départ",
    ],
    correctIndex: 0,
    explanation:
      "Avant de démarrer un moteur à essence, il est impératif de ventiler la cale moteur pendant 4 minutes minimum pour évacuer les vapeurs de carburant. Des vapeurs d'essence peuvent exploser au démarrage. Cette règle de sécurité est fondamentale.",
  },
  {
    id: "FLU-MEC-002",
    licenseType: "fluvial",
    category: "mecanique",
    difficulty: 2,
    question:
      "Que signifie la surchauffe du moteur hors-bord (témoin rouge allumé) ?",
    options: [
      "Le système de refroidissement est défaillant — couper le moteur immédiatement",
      "Le moteur est à régime optimal",
      "Il faut accélérer pour refroidir le moteur",
      "Le carburant est insuffisant",
    ],
    correctIndex: 0,
    explanation:
      "Un témoin de surchauffe indique une défaillance du circuit de refroidissement (eau de mer absente, hélice de pompe défectueuse, bouchon). Il faut couper le moteur immédiatement pour éviter une destruction du moteur.",
  },
  {
    id: "FLU-MEC-003",
    licenseType: "fluvial",
    category: "mecanique",
    difficulty: 1,
    question:
      "Quel type de carburant est généralement utilisé par les moteurs hors-bord classiques ?",
    options: [
      "Essence sans plomb (SP95 ou SP98), parfois mélangée à de l'huile 2 temps",
      "Gazole (diesel) uniquement",
      "GPL (gaz liquéfié)",
      "Kérosène",
    ],
    correctIndex: 0,
    explanation:
      "La plupart des moteurs hors-bord utilisent de l'essence sans plomb (SP95 ou SP98). Les moteurs 2 temps nécessitent un mélange huile/essence. Les moteurs 4 temps utilisent de l'essence pure. Certains moteurs diesel existent pour les grandes unités.",
  },
  {
    id: "FLU-MEC-004",
    licenseType: "fluvial",
    category: "mecanique",
    difficulty: 2,
    question:
      "Que faire si le moteur refuse de démarrer après plusieurs tentatives ?",
    options: [
      "Vérifier le carburant, les branchements électriques et le coupe-circuit d'urgence",
      "Continuer à solliciter le démarreur indéfiniment",
      "Ajouter de l'huile dans le réservoir d'essence",
      "Démonter le moteur immédiatement",
    ],
    correctIndex: 0,
    explanation:
      "En cas de non-démarrage : vérifier 1) le niveau de carburant et que le robinet est ouvert, 2) le coupe-circuit d'urgence (kill switch) bien enclenché, 3) les branchements de batterie, 4) le choix de carburant correct. Éviter d'user la batterie inutilement.",
  },
  {
    id: "FLU-MEC-005",
    licenseType: "fluvial",
    category: "mecanique",
    difficulty: 3,
    question:
      "Qu'est-ce que la 'cavitation' d'une hélice de bateau ?",
    options: [
      "Formation de bulles de vapeur autour de l'hélice qui réduit son efficacité et l'endommage",
      "Bruit normal de l'hélice en rotation rapide",
      "Phénomène de rouille de l'hélice",
      "Vibration due à un déséquilibre de l'hélice",
    ],
    correctIndex: 0,
    explanation:
      "La cavitation est la formation et l'implosion de bulles de vapeur d'eau autour des pales de l'hélice lorsque la pression locale chute. Elle réduit la poussée, crée des vibrations et endommage les pales sur le long terme.",
  },
  {
    id: "FLU-MEC-006",
    licenseType: "fluvial",
    category: "mecanique",
    difficulty: 2,
    question:
      "Pourquoi est-il recommandé de ne pas remplir le réservoir à ras bord par temps chaud ?",
    options: [
      "L'essence se dilate à la chaleur et peut déborder, créant un risque d'incendie",
      "Un réservoir trop plein ralentit le bateau",
      "Cela endommage la pompe à carburant",
      "Il n'y a aucun risque, le réservoir peut être rempli à fond",
    ],
    correctIndex: 0,
    explanation:
      "Par temps chaud, l'essence se dilate et peut déborder si le réservoir est trop plein. De l'essence répandue sur le pont ou dans la cale représente un risque grave d'incendie ou d'explosion. Laisser toujours 10% de marge.",
  },

  // ───────────── QUESTIONS SUPPLÉMENTAIRES NAVIGATION ─────────────
  {
    id: "FLU-NAV-009",
    licenseType: "fluvial",
    category: "navigation",
    difficulty: 3,
    question:
      "Qu'est-ce que la règle COLREG et s'applique-t-elle aux voies intérieures ?",
    options: [
      "Règlement international pour prévenir les abordages en mer — les voies intérieures ont leur propre réglementation (CEVNI en Europe)",
      "Règlement uniquement applicable aux voies intérieures françaises",
      "Code de navigation uniquement pour les bateaux professionnels",
      "Réglementation sur la pollution maritime",
    ],
    correctIndex: 0,
    explanation:
      "Le COLREG est le Règlement International pour Prévenir les Abordages en Mer (RIPAM). Il s'applique en mer. En Europe, les voies navigables intérieures sont régies par le CEVNI (Code Européen des Voies de Navigation Intérieure).",
  },
  {
    id: "FLU-NAV-010",
    licenseType: "fluvial",
    category: "navigation",
    difficulty: 2,
    question:
      "Quelle est la règle de priorité entre un bateau à voile et un bateau de pêche ?",
    options: [
      "Le bateau de pêche en train de pêcher est prioritaire sur le voilier",
      "Le voilier est toujours prioritaire",
      "Le plus grand des deux est prioritaire",
      "Celui qui va le plus vite est prioritaire",
    ],
    correctIndex: 0,
    explanation:
      "L'ordre de priorité général est : 1) Bateau peu manœuvrable (en difficulté), 2) Bateau à capacité de manœuvre restreinte, 3) Bateau en train de pêcher, 4) Voilier, 5) Bateau à moteur. Un bateau en train de pêcher est donc prioritaire sur un voilier.",
  },
  {
    id: "FLU-NAV-011",
    licenseType: "fluvial",
    category: "navigation",
    difficulty: 1,
    question:
      "Qu'est-ce que la 'proue' d'un bateau ?",
    options: [
      "L'avant du bateau",
      "L'arrière du bateau",
      "Le côté droit",
      "La partie la plus basse de la coque",
    ],
    correctIndex: 0,
    explanation:
      "La proue est l'avant du bateau, la partie qui fend l'eau. L'arrière s'appelle la poupe. La coque se compose de la proue, de la poupe, du bâbord (gauche) et du tribord (droite).",
  },
  {
    id: "FLU-NAV-012",
    licenseType: "fluvial",
    category: "navigation",
    difficulty: 2,
    question:
      "Comment appelle-t-on la vague créée par le déplacement d'un bateau ?",
    options: [
      "Le sillage ou vague de proue",
      "Le remous",
      "La houle",
      "Le mascaret",
    ],
    correctIndex: 0,
    explanation:
      "Le sillage est la perturbation de l'eau créée par le passage d'un bateau. Il peut être dangereux pour les petites embarcations, les nageurs et les berges. C'est pourquoi des zones de vitesse réduite existent près des berges et des ports.",
  },
  {
    id: "FLU-SIG-009",
    licenseType: "fluvial",
    category: "signalisation",
    difficulty: 2,
    question:
      "Que signifie un panneau rond rouge avec un 'X' blanc en signalisation fluviale ?",
    options: [
      "Entrée ou accès interdit",
      "Zone de croisement obligatoire",
      "Fin de navigation",
      "Danger particulier",
    ],
    correctIndex: 0,
    explanation:
      "Un panneau rond rouge avec un 'X' blanc (ou des barres croisées) signifie 'accès interdit' ou 'navigation interdite'. Ce type de signal peut délimiter une zone interdite à la navigation de plaisance.",
  },
  {
    id: "FLU-REG-009",
    licenseType: "fluvial",
    category: "reglementation",
    difficulty: 2,
    question:
      "La navigation de nuit est-elle autorisée pour les plaisanciers sur les voies intérieures ?",
    options: [
      "Oui, mais avec l'éclairage réglementaire obligatoire et dans les zones autorisées",
      "Non, totalement interdite pour les plaisanciers",
      "Oui, sans aucune contrainte ni équipement spécifique",
      "Uniquement pour les bateaux de plus de 12 mètres",
    ],
    correctIndex: 0,
    explanation:
      "La navigation nocturne est autorisée avec les feux de navigation réglementaires. Cependant, certaines voies peuvent avoir des restrictions locales et les écluses peuvent ne pas être en service la nuit. Il faut vérifier les règlements locaux.",
  },
  {
    id: "FLU-SEC-009",
    licenseType: "fluvial",
    category: "securite",
    difficulty: 3,
    question:
      "Comment procéder lors d'une évacuation d'urgence du bateau ?",
    options: [
      "Enfiler les gilets, emporter les signaux de détresse, rester groupé et signaler sa position",
      "Nager le plus vite possible vers la rive sans attendre",
      "Rester à bord jusqu'au dernier moment quelles que soient les circonstances",
      "Sauter à l'eau immédiatement pour alléger le bateau",
    ],
    correctIndex: 0,
    explanation:
      "Lors d'une évacuation : 1) Lancer un appel de détresse (VHF canal 16), 2) Enfiler les gilets de sauvetage, 3) Emporter les signaux pyrotechniques et la radio, 4) Rester groupé, 5) S'éloigner du bateau en sécurité. Ne quitter le bateau qu'en dernier recours.",
  },
];
