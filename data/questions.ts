export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
  category: "saint" | "eglise" | "bible" | "histoire";
  difficulty: 1 | 2 | 3;
}

export const questions: Question[] = [
  // ─── NIVEAU 1 - FACILE ───────────────────────────────────────────────────
  {
    id: 1,
    question: "À quel saint l'église de Voide (49310) est-elle dédiée ?",
    options: ["Saint Antoine", "Saint Pierre", "Saint Jean", "Saint Benoît"],
    answer: 1,
    explanation: "L'église du Voide est l'Église Saint-Pierre du Voide, dédiée au premier des apôtres.",
    category: "eglise",
    difficulty: 1
  },
  {
    id: 2,
    question: "Quel saint est le patron des objets perdus ?",
    options: ["Saint Christophe", "Saint Joseph", "Saint Antoine de Padoue", "Saint Benoît"],
    answer: 2,
    explanation: "Saint Antoine de Padoue est traditionnellement invoqué pour retrouver les objets perdus depuis le Moyen Âge.",
    category: "saint",
    difficulty: 1
  },
  {
    id: 3,
    question: "Dans quelle ville la Vierge Marie est-elle apparue à Bernadette Soubirous en 1858 ?",
    options: ["Fatima", "Lourdes", "Lisieux", "Chartres"],
    answer: 1,
    explanation: "Notre-Dame de Lourdes est apparue 18 fois à Bernadette Soubirous entre le 11 février et le 16 juillet 1858.",
    category: "saint",
    difficulty: 1
  },
  {
    id: 4,
    question: "Combien d'apôtres Jésus a-t-il choisis ?",
    options: ["7", "10", "12", "14"],
    answer: 2,
    explanation: "Jésus a choisi 12 apôtres, symbolisant les 12 tribus d'Israël.",
    category: "bible",
    difficulty: 1
  },
  {
    id: 5,
    question: "Qui est le père nourricier de Jésus ?",
    options: ["Jean le Baptiste", "Joseph", "Zacharie", "Simon"],
    answer: 1,
    explanation: "Saint Joseph, charpentier à Nazareth, a élevé Jésus comme son fils.",
    category: "saint",
    difficulty: 1
  },
  {
    id: 6,
    question: "Quel saint a pour devise 'Ora et Labora' (Prie et travaille) ?",
    options: ["Saint François d'Assise", "Saint Dominique", "Saint Benoît", "Saint Ignace"],
    answer: 2,
    explanation: "Saint Benoît a fondé le monachisme occidental sur ce principe d'équilibre entre prière, travail et lecture.",
    category: "saint",
    difficulty: 1
  },
  {
    id: 7,
    question: "Sainte Thérèse de Lisieux est-elle morte jeune ?",
    options: ["À 18 ans", "À 24 ans", "À 34 ans", "À 64 ans"],
    answer: 1,
    explanation: "Sainte Thérèse de Lisieux est morte le 30 septembre 1897 à l'âge de 24 ans, de la tuberculose.",
    category: "saint",
    difficulty: 1
  },
  {
    id: 8,
    question: "Quel est le prénom de la Pucelle d'Orléans canonisée en 1920 ?",
    options: ["Marie", "Jeanne", "Catherine", "Marguerite"],
    answer: 1,
    explanation: "Jeanne d'Arc, la Pucelle d'Orléans, a été canonisée par le pape Benoît XV en 1920.",
    category: "saint",
    difficulty: 1
  },
  {
    id: 9,
    question: "Quel est le symbole principal de saint Pierre ?",
    options: ["Une épée", "Un marteau", "Des clés", "Un livre"],
    answer: 2,
    explanation: "Les clés sont le symbole de saint Pierre, représentant les 'clés du Royaume des Cieux' remises par Jésus.",
    category: "saint",
    difficulty: 1
  },
  {
    id: 10,
    question: "Sainte Anne est la mère de qui ?",
    options: ["Jésus", "Marie", "Jean le Baptiste", "Marie-Madeleine"],
    answer: 1,
    explanation: "Sainte Anne est la mère de la Vierge Marie, et donc la grand-mère de Jésus.",
    category: "saint",
    difficulty: 1
  },
  {
    id: 11,
    question: "Quel saint est patron des voyageurs et automobilistes ?",
    options: ["Saint Joseph", "Saint Christophe", "Saint Jean", "Saint Louis"],
    answer: 1,
    explanation: "Saint Christophe est le patron des voyageurs. La médaille de saint Christophe est encore très répandue dans les voitures.",
    category: "saint",
    difficulty: 1
  },
  {
    id: 12,
    question: "Qui a baptisé Jésus dans le Jourdain ?",
    options: ["Saint Pierre", "Saint Jean le Baptiste", "Saint Paul", "Saint Joseph"],
    answer: 1,
    explanation: "Jean le Baptiste, précurseur du Messie, a baptisé Jésus dans le fleuve Jourdain.",
    category: "bible",
    difficulty: 1
  },
  // ─── NIVEAU 2 - MOYEN ────────────────────────────────────────────────────
  {
    id: 13,
    question: "Quel est le vrai prénom de saint Antoine de Padoue à sa naissance ?",
    options: ["António", "Fernando", "Francisco", "Benedetto"],
    answer: 1,
    explanation: "Saint Antoine de Padoue s'appelait Fernando Martins de Bulhões à sa naissance à Lisbonne en 1195.",
    category: "saint",
    difficulty: 2
  },
  {
    id: 14,
    question: "Combien d'apparitions a eu Bernadette Soubirous à Lourdes ?",
    options: ["8", "12", "18", "33"],
    answer: 2,
    explanation: "Bernadette Soubirous a eu 18 apparitions de la Vierge Marie entre le 11 février et le 16 juillet 1858.",
    category: "saint",
    difficulty: 2
  },
  {
    id: 15,
    question: "Sous quel nom saint Benoît est-il proclamé patron de l'Europe ?",
    options: ["Patron de l'Occident", "Père du monachisme", "Patron de l'Europe", "Docteur de l'Église"],
    answer: 2,
    explanation: "Saint Benoît a été proclamé patron de l'Europe par le pape Pie XII en 1958.",
    category: "saint",
    difficulty: 2
  },
  {
    id: 16,
    question: "Dans quelle ville Jeanne d'Arc a-t-elle été brûlée vive en 1431 ?",
    options: ["Paris", "Orléans", "Reims", "Rouen"],
    answer: 3,
    explanation: "Jeanne d'Arc a été brûlée vive sur la place du Vieux-Marché à Rouen le 30 mai 1431, à l'âge de 19 ans.",
    category: "saint",
    difficulty: 2
  },
  {
    id: 17,
    question: "Qui a renié Jésus trois fois lors de la Passion ?",
    options: ["Judas", "Thomas", "Pierre", "Jean"],
    answer: 2,
    explanation: "Simon-Pierre a renié Jésus trois fois dans la nuit de la Passion, comme Jésus l'avait prédit. Mais il fut pardonné et devint le chef de l'Église.",
    category: "bible",
    difficulty: 2
  },
  {
    id: 18,
    question: "Quelle relique saint Louis IX a-t-il achetée pour la Sainte-Chapelle ?",
    options: ["La Vraie Croix", "La Couronne d'Épines", "Le Saint Suaire", "Le Saint Graal"],
    answer: 1,
    explanation: "Saint Louis IX acheta la Couronne d'Épines pour 135 000 livres et fit construire la Sainte-Chapelle à Paris pour l'abriter.",
    category: "saint",
    difficulty: 2
  },
  {
    id: 19,
    question: "Comment s'appelait le père de Jean le Baptiste ?",
    options: ["Joseph", "Zacharie", "Siméon", "Joachim"],
    answer: 1,
    explanation: "Zacharie, prêtre du Temple, fut rendu muet par l'ange Gabriel pour avoir douté de l'annonce de la naissance de Jean.",
    category: "bible",
    difficulty: 2
  },
  {
    id: 20,
    question: "Quel titre honorifique Sainte Thérèse de Lisieux a-t-elle reçu en 1997 ?",
    options: ["Bienheureuse", "Docteur de l'Église", "Patronne des missions", "Reine du ciel"],
    answer: 1,
    explanation: "Jean-Paul II a déclaré Thérèse de Lisieux Docteur de l'Église le 19 octobre 1997, la troisième femme à recevoir ce titre.",
    category: "saint",
    difficulty: 2
  },
  {
    id: 21,
    question: "Quel est l'outil symbolique souvent représenté avec saint Joseph ?",
    options: ["Une hache", "Un marteau et une équerre", "Une faucille", "Un filet"],
    answer: 1,
    explanation: "Saint Joseph est représenté avec des outils de charpentier (marteau, équerre, rabot) car c'était son métier à Nazareth.",
    category: "saint",
    difficulty: 2
  },
  {
    id: 22,
    question: "Où Jean le Baptiste a-t-il été décapité ?",
    options: ["À Jérusalem", "À Capharnaüm", "Dans la forteresse de Machéronte", "À Rome"],
    answer: 2,
    explanation: "Jean le Baptiste fut emprisonné puis décapité dans la forteresse de Machéronte, au-delà du Jourdain, sur ordre d'Hérode Antipas.",
    category: "saint",
    difficulty: 2
  },
  {
    id: 23,
    question: "Quel est le vrai nom de saint Pierre avant que Jésus le rebaptise ?",
    options: ["André", "Simon", "Barthélemy", "Philippe"],
    answer: 1,
    explanation: "Simon, fils de Jonas, reçut de Jésus le surnom de 'Pierre' (Céphas en araméen) qui signifie 'roc'.",
    category: "bible",
    difficulty: 2
  },
  {
    id: 24,
    question: "À quel ordre religieux appartient sainte Thérèse de Lisieux ?",
    options: ["Les Dominicaines", "Les Carmélites", "Les Franciscaines", "Les Ursulines"],
    answer: 1,
    explanation: "Thérèse Martin entra au Carmel de Lisieux à 15 ans et y vécut jusqu'à sa mort à 24 ans.",
    category: "saint",
    difficulty: 2
  },
  // ─── NIVEAU 3 - DIFFICILE ─────────────────────────────────────────────────
  {
    id: 25,
    question: "En quelle année saint Antoine de Padoue a-t-il été déclaré Docteur de l'Église ?",
    options: ["1232", "1870", "1946", "1997"],
    answer: 2,
    explanation: "Saint Antoine de Padoue a été déclaré Docteur de l'Église par le pape Pie XII en 1946, plus de 700 ans après sa mort.",
    category: "saint",
    difficulty: 3
  },
  {
    id: 26,
    question: "Quel est le nom latin du livre spirituel de Sainte Thérèse de Lisieux ?",
    options: ["Historia Animae", "Histoire d'une âme", "Manuscrits autobiographiques", "La petite voie"],
    answer: 1,
    explanation: "L''Histoire d'une âme' est le titre sous lequel furent publiés ses manuscrits autobiographiques, traduit en plus de 60 langues.",
    category: "saint",
    difficulty: 3
  },
  {
    id: 27,
    question: "Quel pape a intégré le nom de saint Joseph au Canon romain de la messe ?",
    options: ["Jean-Paul II", "Benoît XVI", "François", "Jean XXIII"],
    answer: 2,
    explanation: "Le pape François a modifié le Canon romain en 2013 pour y intégrer le nom de saint Joseph aux côtés de la Vierge Marie.",
    category: "saint",
    difficulty: 3
  },
  {
    id: 28,
    question: "En quelle année saint Louis IX de France a-t-il été canonisé ?",
    options: ["1270", "1297", "1354", "1400"],
    answer: 1,
    explanation: "Saint Louis IX a été canonisé par le pape Boniface VIII en 1297, soit 27 ans après sa mort à Tunis.",
    category: "histoire",
    difficulty: 3
  },
  {
    id: 29,
    question: "Quel est le nom araméen que Jésus donna à Pierre, signifiant 'roc' ?",
    options: ["Petros", "Céphas", "Simon", "Yohannes"],
    answer: 1,
    explanation: "Jésus dit à Simon : 'Tu t'appelleras Céphas' (Κηφᾶς en araméen, Πέτρος en grec), ce qui signifie 'Pierre' ou 'roc'.",
    category: "bible",
    difficulty: 3
  },
  {
    id: 30,
    question: "Dans quel évangile apocryphe trouve-t-on le nom de sainte Anne, mère de Marie ?",
    options: ["Évangile de Thomas", "Protévangile de Jacques", "Évangile de Philippe", "Évangile de Barthélemy"],
    answer: 1,
    explanation: "Le Protévangile de Jacques (IIe siècle) est la source principale sur sainte Anne et saint Joachim, parents de la Vierge Marie.",
    category: "histoire",
    difficulty: 3
  },
  {
    id: 31,
    question: "En quelle année l'évêque de Tarbes a-t-il officiellement reconnu les apparitions de Lourdes ?",
    options: ["1858", "1860", "1862", "1871"],
    answer: 2,
    explanation: "L'évêque de Tarbes, Mgr Laurence, a officiellement reconnu les apparitions de Lourdes le 18 janvier 1862.",
    category: "histoire",
    difficulty: 3
  },
  {
    id: 32,
    question: "Combien de chapitres contient la Règle de saint Benoît ?",
    options: ["12", "37", "73", "100"],
    answer: 2,
    explanation: "La Règle de saint Benoît comprend 73 chapitres. Elle est remarquable par sa sagesse pratique et sa douceur.",
    category: "saint",
    difficulty: 3
  },
  {
    id: 33,
    question: "Quel pape a canonisé Jeanne d'Arc en 1920 ?",
    options: ["Pie X", "Benoît XV", "Pie XI", "Pie XII"],
    answer: 1,
    explanation: "Jeanne d'Arc a été canonisée par le pape Benoît XV le 16 mai 1920 à la basilique Saint-Pierre de Rome.",
    category: "saint",
    difficulty: 3
  },
  {
    id: 34,
    question: "Quelle est la signification du mot 'Eucharistie' en grec ?",
    options: ["Pain de vie", "Action de grâce", "Corps du Christ", "Sacrement"],
    answer: 1,
    explanation: "Le mot 'Eucharistie' vient du grec 'εὐχαριστία' (eucharistia) qui signifie 'action de grâce' ou 'remerciement'.",
    category: "eglise",
    difficulty: 3
  },
  {
    id: 35,
    question: "Saint Christophe est l'un des 14 Saints Auxiliaires. À quelle époque ce groupe a-t-il été constitué ?",
    options: ["Au IVe siècle", "Au XIVe siècle pendant la Peste Noire", "Au XVIe siècle", "Au XIXe siècle"],
    answer: 1,
    explanation: "Les 14 Saints Auxiliaires ont été constitués en groupe au XIVe siècle, pendant les épidémies de Peste Noire, comme intercesseurs particuliers.",
    category: "histoire",
    difficulty: 3
  },
  {
    id: 36,
    question: "Combien de miracles l'Église catholique a-t-elle officiellement reconnus à Lourdes ?",
    options: ["18", "33", "70", "120"],
    answer: 2,
    explanation: "L'Église catholique a officiellement reconnu 70 miracles à Lourdes depuis 1858, après un processus d'instruction très rigoureux.",
    category: "eglise",
    difficulty: 3
  }
];

export function getQuestionsByDifficulty(level: 1 | 2 | 3): Question[] {
  return questions.filter(q => q.difficulty === level);
}

export function getRandomQuestions(level: 1 | 2 | 3, count: number): Question[] {
  const pool = getQuestionsByDifficulty(level);
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

export function getAllQuestions(): Question[] {
  return [...questions].sort(() => Math.random() - 0.5);
}
