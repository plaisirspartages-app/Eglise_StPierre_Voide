export interface Saint {
  slug: string;
  name: string;
  subtitle: string;
  feastDate: string;
  patronOf: string[];
  bio: string;
  funFacts: string[];
  symbol: string;
  prayer: string;
  color: string;
  emoji: string;
}

export const saints: Saint[] = [
  {
    slug: "jesus-christ",
    name: "Le Christ",
    subtitle: "Fils de Dieu, Sauveur du monde",
    feastDate: "25 décembre (Noël) • Pâques (résurrection)",
    patronOf: ["L'humanité entière", "L'Église universelle"],
    bio: "Jésus de Nazareth, né vers l'an 4 avant notre ère en Bethléem, est le centre de la foi chrétienne. Fils de Marie et fils de Dieu selon la foi, il a grandi à Nazareth auprès de Joseph. Il a prêché l'amour, le pardon et le Royaume de Dieu à travers la Galilée et la Judée, a accompli de nombreux miracles et guéri les malades. Crucifié sous Ponce Pilate, il est ressuscité le troisième jour — événement fondateur du christianisme. Ses disciples ont répandu sa Bonne Nouvelle dans le monde entier.",
    funFacts: [
      "Son nom 'Jésus' vient de l'hébreu Yeshua, qui signifie 'Dieu sauve'",
      "Il a baptisé dans le Jourdain par Jean le Baptiste, son cousin",
      "La dernière Cène, la veille de sa mort, est à l'origine de l'Eucharistie célébrée à chaque messe",
      "Sa résurrection est commémorée chaque dimanche : le jour du Seigneur"
    ],
    symbol: "Croix et poisson (ichthus)",
    prayer: "Seigneur Jésus, tu es le chemin, la vérité et la vie. Guide nos pas sur la route qui mène au Père. Amen.",
    color: "from-amber-700 to-amber-900",
    emoji: "✝️"
  },
  {
    slug: "vierge-marie",
    name: "Vierge à l'Enfant Jésus",
    subtitle: "Mère de Dieu, Reine du Ciel",
    feastDate: "15 août (Assomption) • 8 décembre (Immaculée Conception)",
    patronOf: ["La France", "Les mères", "L'Église catholique"],
    bio: "Marie de Nazareth, jeune femme juive de Galilée, a accepté d'être la mère du Fils de Dieu par son 'oui' à l'ange Gabriel — l'Annonciation. Épouse de Joseph, elle mit Jésus au monde à Bethléem. Elle l'accompagna tout au long de sa vie, assista à ses premiers miracles (noces de Cana), et se tint debout au pied de la croix lors de la crucifixion. Elle est vénérée comme Mère de Dieu (Theotokos) et modèle de foi dans toute l'Église catholique.",
    funFacts: [
      "Son 'oui' à Dieu s'appelle le 'fiat' — en latin 'qu'il me soit fait selon ta parole'",
      "Elle est apparue à Lourdes en 1858 à Bernadette Soubirous, 18 fois",
      "Le rosaire, la prière mariale la plus répandue, est structuré en mystères de la vie du Christ",
      "Des centaines de cathédrales lui sont dédiées dans le monde entier, dont Notre-Dame de Paris"
    ],
    symbol: "Lys blanc et étoile",
    prayer: "Je vous salue Marie, pleine de grâce, le Seigneur est avec vous. Vous êtes bénie entre toutes les femmes, et Jésus, le fruit de vos entrailles, est béni. Sainte Marie, Mère de Dieu, priez pour nous, pauvres pécheurs, maintenant et à l'heure de notre mort. Amen.",
    color: "from-blue-600 to-blue-900",
    emoji: "🌹"
  },
  {
    slug: "notre-dame-lourdes",
    name: "Notre-Dame de Lourdes",
    subtitle: "La Vierge des apparitions de Lourdes",
    feastDate: "11 février",
    patronOf: ["Les malades", "Les pèlerins", "Lourdes"],
    bio: "Le 11 février 1858, à la grotte de Massabielle à Lourdes (Hautes-Pyrénées), la Vierge Marie apparaît pour la première fois à Bernadette Soubirous, une jeune fille de 14 ans issue d'une famille pauvre. Il y eut en tout 18 apparitions entre le 11 février et le 16 juillet 1858. Marie se présenta comme 'l'Immaculée Conception' et indiqua à Bernadette l'emplacement d'une source aux vertus miraculeuses. Les apparitions furent officiellement reconnues par l'évêque de Tarbes le 18 janvier 1862. Lourdes est devenu l'un des plus grands lieux de pèlerinage du monde, attirant des millions de malades et pèlerins.",
    funFacts: [
      "Plus de 6 millions de pèlerins visitent Lourdes chaque année",
      "L'Église catholique a reconnu officiellement 70 miracles à Lourdes depuis 1858",
      "Bernadette Soubirous a été canonisée par Pie XI le 8 décembre 1933",
      "Lors des apparitions, Marie portait une robe blanche, un voile blanc et un ruban bleu"
    ],
    symbol: "Source miraculeuse et grotte",
    prayer: "Notre-Dame de Lourdes, toi qui t'es révélée comme l'Immaculée Conception, intercède pour nous auprès de ton Fils. Guéris nos corps et nos âmes, et donne-nous la foi de Bernadette. Amen.",
    color: "from-sky-500 to-sky-800",
    emoji: "💧"
  },
  {
    slug: "saint-antoine-padoue",
    name: "Saint Antoine de Padoue",
    subtitle: "Docteur de l'Église, patron des objets perdus",
    feastDate: "13 juin",
    patronOf: ["Les objets perdus", "Les pauvres", "Le Portugal", "Padoue", "Les naufragés"],
    bio: "Né à Lisbonne en 1195 sous le nom de Fernando Martins de Bulhões, dans une famille noble portugaise, il entra d'abord chez les chanoines réguliers de Saint-Augustin avant de rejoindre les Franciscains en 1220, inspiré par le martyre de cinq frères missionnaires au Maroc. Brillant théologien et prédicateur exceptionnel, il attira des foules immenses à travers l'Italie et la France du Sud. Il mourut d'épuisement à 36 ans près de Padoue le 13 juin 1231. Il fut canonisé par le pape Grégoire IX le 30 mai 1232, moins d'un an après sa mort, et proclamé Docteur de l'Église en 1946 par Pie XII.",
    funFacts: [
      "Il fut canonisé le 30 mai 1232, soit moins d'un an après sa mort — un record dans l'histoire de l'Église !",
      "La tradition de prier Antoine pour retrouver les objets perdus vient d'un novice qui lui avait volé son psautier annoté",
      "Il est représenté portant l'Enfant Jésus et un lys blanc ou un livre des Évangiles",
      "Son surnom 'de Padoue' vient de la ville où il mourut, bien qu'il soit né au Portugal"
    ],
    symbol: "Lys et Enfant Jésus",
    prayer: "Saint Antoine, toi qui es invoqué pour retrouver ce qui est perdu, aide-moi à ne jamais perdre la foi ni l'espérance. Intercède pour les pauvres et les oubliés. Amen.",
    color: "from-orange-600 to-orange-900",
    emoji: "📖"
  },
  {
    slug: "saint-christophe",
    name: "Saint Christophe",
    subtitle: "Martyr du IIIe siècle, patron des voyageurs",
    feastDate: "25 juillet",
    patronOf: ["Les voyageurs", "Les automobilistes", "Les routiers", "Les sportifs"],
    bio: "Saint Christophe est un martyr du IIIe siècle, décapité vers 251 en Lycie (actuelle Turquie) sous l'empereur Dèce. Son nom grec 'Christophoros' signifie 'celui qui porte le Christ'. La légende médiévale, très populaire, raconte qu'il était un géant de Canaan qui cherchait à servir le roi le plus puissant. Après avoir servi un roi puis le diable, il se convertit et se mit au service de Dieu en portant les voyageurs à travers un fleuve dangereux. Un jour, il porta un enfant si lourd qu'il faillit couler : c'était l'Enfant Jésus portant le poids du monde entier.",
    funFacts: [
      "Son nom grec 'Christophoros' signifie littéralement 'celui qui porte le Christ'",
      "La médaille de saint Christophe est encore aujourd'hui la plus répandue dans les voitures",
      "Il est l'un des 14 Saints Auxiliaires, invoqués pour des intercessions particulières",
      "Il fut converti, selon la tradition, en voyant un ermite se mortifier pour Dieu"
    ],
    symbol: "Bâton et fleuve",
    prayer: "Saint Christophe, toi qui portas le Christ sur tes épaules, garde-moi sur les routes et protège tous les voyageurs du monde. Amen.",
    color: "from-green-600 to-green-900",
    emoji: "🚗"
  },
  {
    slug: "saint-jean-baptiste",
    name: "Saint Jean le Baptiste",
    subtitle: "Précurseur du Messie, dernier prophète",
    feastDate: "24 juin (naissance) • 29 août (décollation)",
    patronOf: ["Les baptisés", "Les cordonniers", "Le Québec", "La Jordanie"],
    bio: "Jean le Baptiste (Yohanan en hébreu) est le fils du prêtre Zacharie et d'Élisabeth, cousine de la Vierge Marie. L'ange Gabriel annonça sa naissance à un Zacharie incrédule, le rendant muet jusqu'à la naissance de l'enfant. Jean grandit dans le désert et prêcha sur les bords du Jourdain, appelant le peuple à la conversion et baptisant les foules. Il reconnut en Jésus 'l'Agneau de Dieu'. Emprisonné dans la forteresse de Machéronte par Hérode Antipas pour avoir dénoncé son mariage illicite avec Hérodiade, il fut décapité sur la demande de la fille d'Hérodiade, Salomé.",
    funFacts: [
      "Sa naissance est célébrée le 24 juin, exactement six mois avant Noël — comme l'annonce l'Évangile de Luc",
      "Sa parole 'Il faut qu'il grandisse et que je diminue' est un sommet de l'humilité évangélique",
      "Il est le seul saint dont l'Église fête à la fois la naissance et la mort (décollation)",
      "Jésus a dit de lui : 'Parmi ceux qui sont nés d'une femme, il n'en a pas été soulevé de plus grand'"
    ],
    symbol: "Agneau de Dieu et bannière",
    prayer: "Saint Jean Baptiste, toi qui as crié dans le désert 'Préparez les chemins du Seigneur', aide-nous à nous convertir et à accueillir le Christ dans nos cœurs. Amen.",
    color: "from-yellow-600 to-yellow-900",
    emoji: "🐑"
  },
  {
    slug: "saint-pierre",
    name: "Saint Pierre",
    subtitle: "Prince des Apôtres, premier pape, patron de l'église du Voide",
    feastDate: "29 juin (avec saint Paul)",
    patronOf: ["Les papes", "Les pêcheurs", "Les serruriers", "Rome", "L'Église du Voide"],
    bio: "Simon, pêcheur de Galilée, reçut de Jésus le surnom de Pierre (Céphas en araméen, Petros en grec, qui signifie 'roc'). Il fut le premier des douze apôtres à professer que Jésus est le Messie, le Fils du Dieu vivant. Malgré ses trois reniements lors de la Passion, il fut le premier apôtre à voir le Ressuscité et devint le chef de la jeune Église de Jérusalem. Il accomplit des missions en Samarie, en Asie Mineure, puis à Rome où il mourut martyrisé, crucifié la tête en bas car il ne se jugeait pas digne de mourir comme son Seigneur. L'église de Voide lui est dédiée.",
    funFacts: [
      "Son vrai nom était Simon — Jésus lui donna le surnom de 'Pierre' lors de sa confession de foi à Césarée de Philippe",
      "Il a renié Jésus trois fois dans la nuit de la Passion, comme Jésus l'avait prédit",
      "La basilique Saint-Pierre du Vatican à Rome est construite sur son tombeau",
      "L'église du Voide (49310) porte son nom : Église Saint-Pierre du Voide"
    ],
    symbol: "Clés croisées et coq",
    prayer: "Saint Pierre, toi qui gardes les portes du Royaume et qui fus le roc de l'Église, affermis notre foi vacillante comme Jésus a affermi la tienne. Amen.",
    color: "from-slate-500 to-slate-800",
    emoji: "🗝️"
  },
  {
    slug: "saint-louis",
    name: "Saint Louis",
    subtitle: "Louis IX, roi de France, modèle de justice",
    feastDate: "25 août",
    patronOf: ["La France", "Les rois", "Les Franciscains séculiers", "Les coiffeurs"],
    bio: "Louis IX (1214–1270), roi de France à 12 ans sous la régence de sa mère Blanche de Castille, est considéré comme le modèle du roi chrétien médiéval. Il rendait la justice assis sous un chêne à Vincennes, accessible à tous. Il fit construire la Sainte-Chapelle à Paris pour abriter les reliques de la Passion (dont la Couronne d'Épines), participa à deux croisades et fonda le premier hôpital pour aveugles en France (les Quinze-Vingts). Il mourut de dysenterie à Tunis lors de la huitième croisade et fut canonisé par Boniface VIII en 1297.",
    funFacts: [
      "Il paya la Couronne d'Épines 135 000 livres, soit trois fois le revenu annuel de la France royale",
      "Il mangeait parfois les restes de ses convives par esprit de pénitence et d'humilité",
      "La Sainte-Chapelle de Paris, qu'il fit construire, fut érigée en seulement 7 ans (1242–1248)",
      "Louis IX est le seul roi de France à avoir été canonisé saint par l'Église"
    ],
    symbol: "Couronne et lys de France",
    prayer: "Saint Louis, roi de justice et de charité, toi qui as gouverné ton peuple avec sagesse et humilité, intercède pour nos gouvernants et pour la France. Amen.",
    color: "from-purple-600 to-purple-900",
    emoji: "👑"
  },
  {
    slug: "jeanne-arc",
    name: "Jeanne d'Arc",
    subtitle: "La Pucelle d'Orléans, sainte patronne de la France",
    feastDate: "30 mai",
    patronOf: ["La France", "Les soldats", "Les prisonniers", "Les femmes militaires"],
    bio: "Née vers 1412 à Domrémy (Lorraine), Jeanne entend dès l'âge de 13 ans des voix célestes — celles de saint Michel, sainte Catherine et sainte Marguerite — qui lui demandent de libérer la France envahie par les Anglais. Elle convainc le dauphin Charles VII à Chinon, lève le siège d'Orléans en mai 1429 et conduit le roi à Reims pour son sacre en juillet 1429. Capturée par les Bourguignons, vendue aux Anglais, elle est condamnée par un tribunal ecclésiastique politique et brûlée vive à Rouen le 30 mai 1431 à 19 ans. Réhabilitée en 1456, béatifiée en 1909 et canonisée en 1920.",
    funFacts: [
      "Elle ne savait ni lire ni écrire, mais dictait des lettres d'une étonnante précision théologique et juridique",
      "Elle fut brûlée trois fois par les Anglais pour s'assurer qu'il ne resterait aucune relique",
      "Son procès de réhabilitation fut instruit 25 ans après sa mort par le pape Calixte III",
      "Elle est la patronne secondaire de la France avec la Vierge Marie, depuis 1920"
    ],
    symbol: "Épée et étendard fleurdelisé",
    prayer: "Sainte Jeanne d'Arc, toi qui as tout donné par amour de ta foi et de ta patrie, donne-nous le courage de défendre la vérité face à l'injustice. Amen.",
    color: "from-red-600 to-red-900",
    emoji: "⚔️"
  },
  {
    slug: "saint-joseph",
    name: "Saint Joseph",
    subtitle: "Époux de Marie, père nourricier de Jésus",
    feastDate: "19 mars • 1er mai (saint Joseph travailleur)",
    patronOf: ["Les pères de famille", "Les travailleurs", "Les charpentiers", "L'Église universelle", "Les agonisants"],
    bio: "Charpentier à Nazareth et descendant du roi David, Joseph est le gardien et père nourricier de Jésus. Découvrant la grossesse mystérieuse de Marie, il voulut la répudier discrètement pour ne pas l'exposer à la loi, mais un ange lui révéla en songe que l'enfant était conçu de l'Esprit Saint. Il accueillit Marie et Jésus, les protégea lors de la fuite en Égypte pour échapper à Hérode, et éleva Jésus à Nazareth dans son métier de charpentier. Déclaré patron de l'Église universelle par Pie IX en 1870, son nom a été intégré au Canon romain par le pape François en 2013.",
    funFacts: [
      "Joseph n'a pas un seul mot rapporté dans les quatre Évangiles — il est 'le saint du silence'",
      "Il est traditionnellement représenté avec un lys blanc (symbole de pureté) et des outils de charpentier",
      "La tradition dit qu'il est mort avant la vie publique de Jésus, entouré de Marie et Jésus — mort du 'bien mourir'",
      "Le pape François lui a dédié une Année spéciale en 2020–2021, à l'occasion des 150 ans de son patronage sur l'Église"
    ],
    symbol: "Lys et équerre de charpentier",
    prayer: "Saint Joseph, gardien silencieux de Jésus et Marie, protège nos familles, soutiens les travailleurs et assiste-nous à l'heure de notre mort. Amen.",
    color: "from-stone-500 to-stone-800",
    emoji: "🔨"
  },
  {
    slug: "sainte-anne",
    name: "Sainte Anne",
    subtitle: "Mère de la Vierge Marie, grand-mère de Jésus",
    feastDate: "26 juillet (avec saint Joachim)",
    patronOf: ["Les grands-parents", "Les mères", "La Bretagne", "Les dentellières"],
    bio: "Sainte Anne est la mère de la Vierge Marie et donc la grand-mère de Jésus, surnommée parfois 'la grand-mère de Dieu'. Son nom ne figure pas dans la Bible canonique ; il nous vient des évangiles apocryphes, notamment le Protévangile de Jacques (IIe siècle). Selon la tradition, elle et son époux Joachim étaient stériles depuis de longues années, mais un ange leur annonça qu'ils auraient une fille. Cette fille, Marie, serait conçue sans péché originel — ce qui est le dogme de l'Immaculée Conception. Anne éleva Marie pour Dieu et la présenta au Temple de Jérusalem.",
    funFacts: [
      "Son nom n'apparaît dans aucun livre de la Bible canonique — il vient de traditions très anciennes",
      "Le sanctuaire de Sainte-Anne d'Auray en Bretagne, fondé en 1625, est l'un des lieux de pèlerinage les plus visités de France",
      "Elle est la patronne spéciale des grands-parents et des grands-mères",
      "Sa fête était célébrée à Constantinople dès le VIe siècle, preuve d'une vénération très ancienne"
    ],
    symbol: "Livre et enfant Marie",
    prayer: "Sainte Anne, toi qui as éduqué Marie avec tant d'amour et de foi, aide tous les parents et grands-parents à transmettre la foi à leurs enfants et petits-enfants. Amen.",
    color: "from-rose-600 to-rose-900",
    emoji: "📿"
  },
  {
    slug: "sainte-therese-lisieux",
    name: "Sainte Thérèse de Lisieux",
    subtitle: "La petite fleur du Carmel, Docteur de l'Église",
    feastDate: "1er octobre",
    patronOf: ["Les missions", "La France (copatronne)", "Les aviateurs", "Les fleuristes"],
    bio: "Thérèse Martin (2 janvier 1873 – 30 septembre 1897), née à Alençon dans une famille profondément croyante, perdit sa mère à 4 ans. Elle entra au Carmel de Lisieux à 15 ans et y vécut neuf années de vie contemplative, décédée de la tuberculose à 24 ans. Elle a laissé une autobiographie spirituelle dictée à sa mère prieure, 'Histoire d'une âme', traduite en plus de 60 langues. Sa 'petite voie' — faire les actes quotidiens avec un grand amour confiant en Dieu — a profondément influencé la spiritualité mondiale. Canonisée par Pie XI en 1925, déclarée Docteur de l'Église par Jean-Paul II en 1997.",
    funFacts: [
      "Avant de mourir, elle promit : 'Je passerai mon ciel à faire du bien sur la terre' — des millions de personnes témoignent de son intercession",
      "Elle est l'une des quatre femmes Docteurs de l'Église (avec Catherine de Sienne, Thérèse d'Ávila et Hildegarde de Bingen)",
      "'Histoire d'une âme' a été traduit en plus de 60 langues, l'un des livres religieux les plus diffusés au monde",
      "Elle rêvait de devenir missionnaire, prêtre et martyre — ses écrits reflètent cette soif universelle d'amour"
    ],
    symbol: "Rose et croix",
    prayer: "Sainte Thérèse de l'Enfant-Jésus, enseigne-nous ta petite voie de la confiance et de l'amour, et répands sur nous ta pluie de roses du ciel. Amen.",
    color: "from-pink-500 to-pink-800",
    emoji: "🌺"
  },
  {
    slug: "saint-benoit",
    name: "Saint Benoît",
    subtitle: "Père du monachisme occidental, patron de l'Europe",
    feastDate: "11 juillet",
    patronOf: ["L'Europe", "Les moines", "Les agriculteurs", "Les empoisonnés"],
    bio: "Né à Nursie (Ombrie, Italie) vers 480, Benoît fuit la vie dissolue de Rome pour vivre en ermite à Subiaco pendant trois ans. Des disciples vinrent s'agréger à lui ; il fonda alors douze petits monastères avant d'établir le monastère du Mont-Cassin vers 529, qui deviendra le foyer du monachisme occidental. Sa Règle bénédictine, résumée par 'Ora et Labora' (prie et travaille), organise équitablement la vie monastique entre prière, travail et lecture. Il mourut le 21 mars 547. Proclamé patron de l'Europe par Pie XII en 1958, son influence est considérable : plus de 20 000 fondations religieuses ont adopté sa Règle.",
    funFacts: [
      "Sa devise 'Ora et Labora' (prie et travaille) reste le principe fondateur de nombreux monastères aujourd'hui",
      "La médaille de saint Benoît, frappée de croix et de lettres mystérieuses (CSPB), est réputée pour protéger contre le mal",
      "Il était le jumeau de sa sœur sainte Scholastique, également vénérée dans l'Église",
      "Sa Règle de 73 chapitres est remarquable par sa sagesse pratique et sa douceur — elle fut copiée dans tous les monastères d'Europe pendant 15 siècles"
    ],
    symbol: "Règle et calice brisé",
    prayer: "Saint Benoît, toi qui as centré ta vie sur Dieu et organisé le monde autour de la prière et du travail, aide-nous à mettre Dieu au cœur de notre quotidien. Amen.",
    color: "from-gray-600 to-gray-900",
    emoji: "📜"
  }
];

export function getSaintBySlug(slug: string): Saint | undefined {
  return saints.find(s => s.slug === slug);
}
