/* ============================================================
   LEARN ENGLISH — Parcours en 30 jours (FR → anglais)
   Chaque phrase : { fr, en:[réponses acceptées], tense, tip }
   La 1re entrée de "en" est la correction affichée.
   Contractions acceptées automatiquement (I'm = I am, don't = do not…).
   ============================================================ */

const CURRICULUM = [
  /* ---------- NIVEAU 1 — PRÉSENT, bases de tous les jours ---------- */
  {
    day: 1, level: 1, theme: "Se présenter", tense: "Présent",
    notes: [
      "TO BE : I am, you are, he/she/it is, we are, they are.",
      "L'âge se dit avec BE : I am 30 (years old). Jamais « I have 30 years ».",
      "Les nationalités prennent une majuscule : French, Spanish, English.",
    ],
    sentences: [
      { fr: "Bonjour, je m'appelle Dylan.", en: ["Hello, my name is Dylan.", "Hello, I am Dylan.", "Hi, my name is Dylan.", "Hi, I am Dylan."], tense: "présent", tip: "My name is… = je m'appelle (litt. « mon nom est »)." },
      { fr: "Comment tu t'appelles ?", en: ["What is your name?", "What's your name?"], tense: "présent", tip: "Question avec BE : le verbe passe devant le sujet." },
      { fr: "Je suis français.", en: ["I am French.", "I'm French."], tense: "présent", tip: "Majuscule obligatoire aux nationalités." },
      { fr: "J'ai trente ans.", en: ["I am thirty.", "I am thirty years old.", "I am 30.", "I am 30 years old."], tense: "présent", tip: "L'âge se dit avec BE, jamais avec HAVE." },
      { fr: "Enchanté de te rencontrer.", en: ["Nice to meet you.", "Pleased to meet you."], tense: "présent", tip: "Nice to meet you = formule standard." },
      { fr: "J'habite à Ibiza.", en: ["I live in Ibiza."], tense: "présent", tip: "IN pour une ville ou un pays." },
      { fr: "Tu parles anglais ?", en: ["Do you speak English?"], tense: "présent", tip: "Question au présent simple : DO + sujet + verbe." },
      { fr: "Je ne parle pas bien anglais.", en: ["I do not speak English well.", "I don't speak English very well.", "My English is not very good."], tense: "présent", tip: "Négation : DO NOT (don't) + verbe. WELL (adverbe) va à la fin." },
    ],
  },
  {
    day: 2, level: 1, theme: "Au café", tense: "Présent",
    notes: [
      "Pour commander poliment : I would like… (I'd like…) = je voudrais.",
      "Can I have…? = Est-ce que je peux avoir… ? (très courant à l'oral).",
      "How much is it? = Combien ça coûte ?",
    ],
    sentences: [
      { fr: "Je voudrais un café, s'il vous plaît.", en: ["I would like a coffee, please.", "Can I have a coffee, please?", "A coffee, please."], tense: "présent", tip: "I'd like = I would like, la forme polie." },
      { fr: "Combien ça coûte ?", en: ["How much is it?", "How much does it cost?"], tense: "présent", tip: "How much = combien (pour un prix, une quantité)." },
      { fr: "Vous avez du lait d'avoine ?", en: ["Do you have oat milk?", "Have you got oat milk?", "Do you have any oat milk?"], tense: "présent", tip: "Have you got…? = version britannique de Do you have…?" },
      { fr: "Sans sucre, merci.", en: ["No sugar, thanks.", "Without sugar, thank you.", "No sugar, thank you."], tense: "présent", tip: "No + nom = sans (plus naturel que « without »)." },
      { fr: "L'addition, s'il vous plaît.", en: ["Can I have the bill, please?", "The bill, please.", "Could we have the bill, please?", "The check, please."], tense: "présent", tip: "The bill (GB) = the check (US)." },
      { fr: "Merci beaucoup, à bientôt.", en: ["Thank you very much, see you soon.", "Thanks a lot, see you soon."], tense: "présent", tip: "See you soon = à bientôt." },
      { fr: "Moi aussi.", en: ["Me too.", "So do I."], tense: "présent", tip: "Me too (oral) ; So do I (plus soigné)." },
      { fr: "Pour emporter.", en: ["To take away.", "To go.", "Takeaway, please."], tense: "présent", tip: "To take away (GB) = to go (US)." },
    ],
  },
  {
    day: 3, level: 1, theme: "Faire les courses", tense: "Présent",
    notes: [
      "Présent simple : on ajoute -S à la 3e personne (he needs, she buys).",
      "Some (phrases affirmatives) / any (questions et négations).",
      "Dénombrable : many apples. Indénombrable : much bread, much milk.",
    ],
    sentences: [
      { fr: "J'ai besoin de pain et de lait.", en: ["I need bread and milk.", "I need some bread and some milk.", "I need some bread and milk."], tense: "présent", tip: "NEED est suivi directement du nom, sans « of »." },
      { fr: "Où sont les fruits ?", en: ["Where is the fruit?", "Where are the fruits?"], tense: "présent", tip: "Fruit est souvent indénombrable : the fruit is…" },
      { fr: "Est-ce que vous avez des œufs ?", en: ["Do you have any eggs?", "Have you got any eggs?", "Do you have eggs?"], tense: "présent", tip: "ANY dans les questions." },
      { fr: "Il n'y a plus de riz.", en: ["There is no more rice.", "There isn't any rice left.", "There is no rice left.", "We are out of rice."], tense: "présent", tip: "Left = qui reste ; to be out of = ne plus avoir." },
      { fr: "C'est trop cher.", en: ["It is too expensive.", "It's too expensive."], tense: "présent", tip: "Too + adjectif = trop." },
      { fr: "Elle achète deux bouteilles d'eau.", en: ["She buys two bottles of water.", "She is buying two bottles of water."], tense: "présent", tip: "3e personne : she buyS." },
      { fr: "Je paie par carte.", en: ["I pay by card.", "I will pay by card.", "I'll pay by card."], tense: "présent", tip: "BY card, BY phone : BY pour le moyen." },
      { fr: "Combien de pommes voulez-vous ?", en: ["How many apples do you want?", "How many apples would you like?"], tense: "présent", tip: "How many + pluriel dénombrable." },
    ],
  },
  {
    day: 4, level: 1, theme: "Demander son chemin", tense: "Présent",
    notes: [
      "L'impératif = le verbe seul : Turn left. Go straight on.",
      "There is / There are = il y a (singulier / pluriel).",
      "Excuse me = pour attirer l'attention ; Sorry = pour s'excuser.",
    ],
    sentences: [
      { fr: "Excusez-moi, où est la gare ?", en: ["Excuse me, where is the station?", "Excuse me, where is the train station?"], tense: "présent", tip: "Excuse me pour interpeller quelqu'un." },
      { fr: "C'est loin d'ici ?", en: ["Is it far from here?", "Is it far?"], tense: "présent", tip: "Far = loin ; near / close = près." },
      { fr: "Tournez à droite.", en: ["Turn right."], tense: "présent", tip: "Impératif : le verbe seul, sans sujet." },
      { fr: "Allez tout droit.", en: ["Go straight on.", "Go straight ahead.", "Keep going straight."], tense: "présent", tip: "Straight on (GB) / straight ahead (US)." },
      { fr: "Il y a une pharmacie près d'ici ?", en: ["Is there a pharmacy near here?", "Is there a chemist near here?", "Is there a pharmacy nearby?"], tense: "présent", tip: "Is there…? = y a-t-il… ? Chemist = pharmacie (GB)." },
      { fr: "Je suis perdu.", en: ["I am lost.", "I'm lost."], tense: "présent", tip: "To be lost = être perdu." },
      { fr: "Ça prend dix minutes à pied.", en: ["It takes ten minutes on foot.", "It's a ten-minute walk.", "It takes ten minutes to walk."], tense: "présent", tip: "It takes + durée = ça prend…" },
      { fr: "Merci, vous êtes très gentil.", en: ["Thank you, you are very kind.", "Thanks, that's very kind of you."], tense: "présent", tip: "Kind = gentil ; nice = sympa." },
    ],
  },

  /* ---------- NIVEAU 2 — LE PASSÉ ---------- */
  {
    day: 5, level: 2, theme: "Raconter sa journée d'hier", tense: "Prétérit",
    notes: [
      "Prétérit = action terminée à un moment précis (yesterday, last week, in 2019).",
      "Réguliers en -ED (worked) ; irréguliers à apprendre (went, ate, saw…).",
      "Négation et question avec DID + base verbale : I didn't go / Did you go?",
    ],
    sentences: [
      { fr: "Hier, j'ai mangé au restaurant.", en: ["Yesterday I ate at a restaurant.", "Yesterday, I had lunch at a restaurant.", "Yesterday I ate at the restaurant."], tense: "prétérit", tip: "EAT → ATE (irrégulier)." },
      { fr: "Je me suis levé tôt.", en: ["I got up early.", "I woke up early."], tense: "prétérit", tip: "GET UP → GOT UP." },
      { fr: "Nous avons vu un bon film.", en: ["We saw a good film.", "We saw a good movie.", "We watched a good film.", "We watched a good movie."], tense: "prétérit", tip: "SEE → SAW. Film (GB) = movie (US)." },
      { fr: "Elle est arrivée en retard.", en: ["She arrived late.", "She was late."], tense: "prétérit", tip: "Late = en retard (pas « in late »)." },
      { fr: "J'ai beaucoup travaillé.", en: ["I worked a lot.", "I worked hard."], tense: "prétérit", tip: "A lot = beaucoup, en fin de phrase." },
      { fr: "Je ne suis pas allé au travail.", en: ["I did not go to work.", "I didn't go to work."], tense: "prétérit", tip: "Négation au passé : DIDN'T + base (go, pas went)." },
      { fr: "Qu'est-ce que tu as fait hier ?", en: ["What did you do yesterday?"], tense: "prétérit", tip: "Question : WHAT + DID + sujet + base." },
      { fr: "Il y a eu beaucoup de problèmes.", en: ["There were a lot of problems.", "There were many problems.", "There were lots of problems."], tense: "prétérit", tip: "There was / there were = il y a eu, il y avait." },
    ],
  },
  {
    day: 6, level: 2, theme: "Le week-end dernier", tense: "Prétérit",
    notes: [
      "LAST = dernier : last weekend, last Monday, last year (sans « the »).",
      "AGO = il y a : two days ago (après la durée).",
      "Go + -ING pour les activités : go swimming, go shopping, go sailing.",
    ],
    sentences: [
      { fr: "Le week-end dernier, je suis allé à la plage.", en: ["Last weekend I went to the beach.", "I went to the beach last weekend."], tense: "prétérit", tip: "LAST weekend, sans article." },
      { fr: "Nous sommes allés faire du bateau.", en: ["We went sailing.", "We went on a boat trip.", "We went out on a boat."], tense: "prétérit", tip: "Go sailing = faire de la voile / du bateau." },
      { fr: "J'ai joué au foot avec des amis.", en: ["I played football with some friends.", "I played football with friends.", "I played soccer with friends."], tense: "prétérit", tip: "PLAY football, sans « the »." },
      { fr: "Je me suis blessé à la jambe.", en: ["I hurt my leg.", "I injured my leg."], tense: "prétérit", tip: "HURT → HURT (même forme). On dit « my leg », pas « the leg »." },
      { fr: "Mes amis sont venus me voir.", en: ["My friends came to see me.", "My friends came to visit me."], tense: "prétérit", tip: "COME → CAME." },
      { fr: "On s'est bien amusés.", en: ["We had a great time.", "We had fun.", "We had a lot of fun."], tense: "prétérit", tip: "To have a great time = bien s'amuser." },
      { fr: "J'ai nagé pendant une heure.", en: ["I swam for an hour.", "I swam for one hour."], tense: "prétérit", tip: "SWIM → SWAM. FOR + durée = pendant." },
      { fr: "C'était il y a deux jours.", en: ["It was two days ago."], tense: "prétérit", tip: "AGO se place après la durée." },
    ],
  },
  {
    day: 7, level: 2, theme: "Souvenirs d'enfance", tense: "Used to",
    notes: [
      "USED TO + verbe = habitude passée (je faisais…) : I used to play football.",
      "Pour décrire le décor : was / were + -ING (past continuous).",
      "When I was a child / When I was little = quand j'étais petit.",
    ],
    sentences: [
      { fr: "Quand j'étais petit, je jouais au foot.", en: ["When I was little, I used to play football.", "When I was a child, I used to play football.", "When I was little, I played football.", "When I was a kid, I used to play football."], tense: "used to", tip: "USED TO = habitude passée." },
      { fr: "Nous habitions près de la mer.", en: ["We used to live near the sea.", "We lived near the sea.", "We used to live by the sea."], tense: "used to", tip: "Near / by the sea = près de la mer." },
      { fr: "Ma grand-mère cuisinait très bien.", en: ["My grandmother used to cook very well.", "My grandmother cooked very well.", "My grandma used to cook really well."], tense: "used to", tip: "Grandma = mamie (familier)." },
      { fr: "Chaque été, on partait en Espagne.", en: ["Every summer we used to go to Spain.", "Every summer we went to Spain."], tense: "used to", tip: "Pas d'article devant les pays : to Spain." },
      { fr: "Je n'avais pas peur du noir.", en: ["I was not afraid of the dark.", "I wasn't afraid of the dark.", "I didn't use to be afraid of the dark."], tense: "prétérit", tip: "To be afraid of = avoir peur de." },
      { fr: "Il pleuvait quand je suis sorti.", en: ["It was raining when I went out.", "It was raining when I left."], tense: "past continuous", tip: "Décor (was raining) + action ponctuelle (went out)." },
      { fr: "Je regardais la télé quand tu as appelé.", en: ["I was watching TV when you called."], tense: "past continuous", tip: "WAS + -ING = action en cours dans le passé." },
      { fr: "À l'école, j'ai appris l'espagnol.", en: ["I learnt Spanish at school.", "I learned Spanish at school.", "At school I learned Spanish."], tense: "prétérit", tip: "Learnt (GB) = learned (US)." },
    ],
  },

  /* ---------- NIVEAU 3 — LE FUTUR ---------- */
  {
    day: 8, level: 3, theme: "Mes projets", tense: "Futur",
    notes: [
      "BE GOING TO = intention déjà décidée : I'm going to move.",
      "WILL = décision sur le moment, prédiction : I think it will work.",
      "Présent continu pour un rendez-vous prévu : I'm working tomorrow.",
    ],
    sentences: [
      { fr: "Demain, je vais travailler.", en: ["Tomorrow I am going to work.", "I am working tomorrow.", "I'm going to work tomorrow."], tense: "futur", tip: "Going to = intention ; présent continu = programme." },
      { fr: "L'année prochaine, j'apprendrai le chinois.", en: ["Next year I will learn Chinese.", "Next year I am going to learn Chinese.", "I will learn Chinese next year."], tense: "futur", tip: "NEXT year, sans « the »." },
      { fr: "Nous partirons en vacances en août.", en: ["We will go on holiday in August.", "We are going on holiday in August.", "We're going on vacation in August."], tense: "futur", tip: "On holiday (GB) = on vacation (US). Les mois prennent une majuscule." },
      { fr: "Je pense que ça va marcher.", en: ["I think it will work.", "I think it's going to work."], tense: "futur", tip: "Prédiction : WILL." },
      { fr: "Un jour, je serai bilingue.", en: ["One day I will be bilingual.", "Someday I will be bilingual."], tense: "futur", tip: "One day = un jour." },
      { fr: "Je vais déménager.", en: ["I am going to move.", "I'm moving.", "I am going to move house."], tense: "futur", tip: "To move (house) = déménager." },
      { fr: "Je vais faire une nouvelle application.", en: ["I am going to make a new app.", "I'm going to build a new app.", "I am going to create a new app."], tense: "futur", tip: "MAKE = fabriquer, créer (DO = faire une activité)." },
      { fr: "Il va pleuvoir.", en: ["It is going to rain.", "It's going to rain."], tense: "futur", tip: "Going to quand on voit les signes (nuages)." },
    ],
  },
  {
    day: 9, level: 3, theme: "Organiser un voyage", tense: "Futur",
    notes: [
      "Heures : at 8 (o'clock), at half past eight (8 h 30), at quarter to nine (8 h 45).",
      "Ordinaux : first, second, third, fourth… (the first day).",
      "Book = réserver : to book a hotel.",
    ],
    sentences: [
      { fr: "Je réserverai un hôtel ce soir.", en: ["I will book a hotel tonight.", "I'll book a hotel this evening.", "I am going to book a hotel tonight."], tense: "futur", tip: "To book = réserver." },
      { fr: "On prendra le train de huit heures.", en: ["We will take the eight o'clock train.", "We'll take the 8 o'clock train.", "We are taking the eight o'clock train."], tense: "futur", tip: "The eight o'clock train : l'heure devient un adjectif." },
      { fr: "Tu viendras avec moi ?", en: ["Will you come with me?", "Are you coming with me?"], tense: "futur", tip: "Question au futur : WILL + sujet + verbe." },
      { fr: "Nous visiterons le musée demain.", en: ["We will visit the museum tomorrow.", "We are going to visit the museum tomorrow."], tense: "futur", tip: "Museum = musée." },
      { fr: "Combien coûte ta chambre par nuit ?", en: ["How much is your room per night?", "How much does your room cost per night?", "How much is your room a night?"], tense: "présent", tip: "Per night / a night = par nuit." },
      { fr: "C'est mon troisième voyage à Londres.", en: ["It is my third trip to London.", "This is my third trip to London."], tense: "présent", tip: "Third = troisième. TRIP = voyage (court)." },
      { fr: "Le premier jour, je veux visiter le centre-ville.", en: ["On the first day, I want to visit the city centre.", "The first day I want to visit the city center.", "On the first day I want to visit the town centre."], tense: "présent", tip: "ON the first day. Centre (GB) = center (US)." },
      { fr: "Ça va être un super voyage.", en: ["It is going to be a great trip.", "It will be a great trip."], tense: "futur", tip: "Great = super." },
    ],
  },
  {
    day: 10, level: 3, theme: "Au restaurant", tense: "Mix",
    notes: [
      "I'll have… = je vais prendre… (pour commander).",
      "Could you…? = Pourriez-vous… ? (très poli).",
      "Delicious = délicieux ; tasty = savoureux ; spicy = épicé.",
    ],
    sentences: [
      { fr: "Une table pour deux, s'il vous plaît.", en: ["A table for two, please.", "Could we have a table for two, please?"], tense: "présent", tip: "A table FOR two." },
      { fr: "Qu'est-ce que vous me conseillez ?", en: ["What do you recommend?", "What would you recommend?"], tense: "présent", tip: "To recommend = conseiller." },
      { fr: "Je vais prendre le poisson.", en: ["I will have the fish.", "I'll have the fish.", "I'll take the fish."], tense: "futur", tip: "I'll have… = je vais prendre…" },
      { fr: "Pas trop épicé, s'il vous plaît.", en: ["Not too spicy, please."], tense: "présent", tip: "Spicy = épicé, piquant." },
      { fr: "C'était délicieux.", en: ["It was delicious.", "That was delicious."], tense: "prétérit", tip: "Pas de « very delicious » : delicious est déjà fort." },
      { fr: "J'ai goûté les escargots mais je n'ai pas aimé.", en: ["I tried the snails but I didn't like them.", "I tasted the snails but I did not like them."], tense: "prétérit", tip: "To try = essayer / goûter. LIKE THEM : le complément est obligatoire." },
      { fr: "Est-ce qu'on pourrait avoir de l'eau ?", en: ["Could we have some water?", "Could we have some water, please?", "Can we have some water?"], tense: "présent", tip: "SOME dans une demande polie." },
      { fr: "On peut payer séparément ?", en: ["Can we pay separately?", "Could we pay separately?"], tense: "présent", tip: "Separately = séparément." },
    ],
  },

  /* ---------- NIVEAU 4 — SITUATIONS PRATIQUES ---------- */
  {
    day: 11, level: 4, theme: "Chez le médecin", tense: "Mix",
    notes: [
      "Present perfect + FOR / SINCE = depuis : I have had a headache since yesterday.",
      "I have a headache / a stomachache / a sore throat = j'ai mal à la tête / au ventre / à la gorge.",
      "You should + verbe = tu devrais.",
    ],
    sentences: [
      { fr: "J'ai mal à la tête depuis hier.", en: ["I have had a headache since yesterday.", "I've had a headache since yesterday."], tense: "present perfect", tip: "Depuis + présent en français = present perfect + SINCE en anglais." },
      { fr: "Je suis tombé malade la semaine dernière.", en: ["I got sick last week.", "I fell ill last week.", "I got ill last week."], tense: "prétérit", tip: "Get sick (US) / fall ill (GB)." },
      { fr: "Tu devrais te reposer.", en: ["You should rest.", "You should get some rest."], tense: "conseil", tip: "SHOULD + base verbale." },
      { fr: "J'ai de la fièvre.", en: ["I have a fever.", "I have a temperature.", "I've got a temperature."], tense: "présent", tip: "A temperature (GB) = a fever." },
      { fr: "Je suis tombé et je me suis fait mal au genou.", en: ["I fell and hurt my knee.", "I fell over and hurt my knee.", "I fell and I hurt my knee."], tense: "prétérit", tip: "FALL → FELL. Le K de knee est muet." },
      { fr: "Prenez ce médicament deux fois par jour.", en: ["Take this medicine twice a day.", "Take this medication twice a day."], tense: "impératif", tip: "Twice a day = deux fois par jour." },
      { fr: "Tu te sens mieux ?", en: ["Are you feeling better?", "Do you feel better?"], tense: "présent continu", tip: "Better = mieux (comparatif de well)." },
      { fr: "J'espère guérir vite.", en: ["I hope I get better soon.", "I hope to recover quickly.", "I hope I'll get better soon."], tense: "futur", tip: "To get better = aller mieux." },
    ],
  },
  {
    day: 12, level: 4, theme: "Au téléphone / livraison", tense: "Présent continu",
    notes: [
      "Présent continu (BE + -ING) = ce qui se passe en ce moment : I'm driving.",
      "Present perfect avec YET / ALREADY / JUST : It hasn't arrived yet.",
      "Could you speak more slowly, please? = pourriez-vous parler plus lentement ?",
    ],
    sentences: [
      { fr: "Je t'appelle pour le rendez-vous de demain.", en: ["I am calling about tomorrow's appointment.", "I'm calling about the meeting tomorrow.", "I'm calling about tomorrow's meeting."], tense: "présent continu", tip: "Appointment = rendez-vous (médecin, pro)." },
      { fr: "Je suis en train de conduire.", en: ["I am driving.", "I'm driving."], tense: "présent continu", tip: "BE + -ING." },
      { fr: "Le livreur est perdu.", en: ["The delivery driver is lost.", "The delivery man is lost.", "The courier is lost."], tense: "présent", tip: "Delivery driver = livreur." },
      { fr: "Le colis n'est pas encore arrivé.", en: ["The parcel has not arrived yet.", "The package hasn't arrived yet."], tense: "present perfect", tip: "YET en fin de phrase négative = pas encore. Parcel (GB) = package (US)." },
      { fr: "J'ai mal écrit l'adresse.", en: ["I wrote the address wrong.", "I wrote down the wrong address.", "I spelled the address wrong."], tense: "prétérit", tip: "Address s'écrit avec deux D et deux S." },
      { fr: "Je t'envoie ma position sur WhatsApp.", en: ["I am sending you my location on WhatsApp.", "I'll send you my location on WhatsApp.", "I'm sending you my location on WhatsApp."], tense: "présent continu", tip: "Send SOMEONE something : pas de « to » après send." },
      { fr: "Je suis déjà arrivé.", en: ["I have already arrived.", "I'm already here.", "I've already arrived."], tense: "present perfect", tip: "ALREADY entre have et le participe." },
      { fr: "Pourriez-vous parler plus lentement ?", en: ["Could you speak more slowly?", "Could you speak more slowly, please?", "Can you speak more slowly?"], tense: "présent", tip: "Slowly = lentement (adverbe en -LY)." },
    ],
  },
  {
    day: 13, level: 4, theme: "Donner son avis", tense: "Mix",
    notes: [
      "I think so / I don't think so = je pense que oui / non.",
      "Comparatif court : bigger, cheaper. Long : more expensive, more interesting.",
      "Better (mieux / meilleur) · worse (pire).",
    ],
    sentences: [
      { fr: "Je pense que tu as raison.", en: ["I think you are right.", "I think you're right."], tense: "présent", tip: "Avoir raison = to be right (avec BE)." },
      { fr: "À mon avis, c'est une bonne idée.", en: ["In my opinion, it is a good idea.", "In my opinion, it's a good idea.", "I think it's a good idea."], tense: "présent", tip: "IN my opinion (pas « on »)." },
      { fr: "Je ne suis pas d'accord avec toi.", en: ["I do not agree with you.", "I don't agree with you.", "I disagree with you."], tense: "présent", tip: "AGREE est un verbe : I agree (jamais « I am agree »)." },
      { fr: "Ça dépend de la situation.", en: ["It depends on the situation."], tense: "présent", tip: "Depend ON (pas « of »)." },
      { fr: "Celui-ci est mieux que celui-là.", en: ["This one is better than that one."], tense: "comparatif", tip: "Better THAN = mieux que." },
      { fr: "C'est un peu cher.", en: ["It is a bit expensive.", "It's a little expensive.", "It's a bit pricey."], tense: "présent", tip: "A bit = un peu." },
      { fr: "Utiliser Claude paraît difficile, mais c'est très facile.", en: ["Using Claude seems difficult, but it is very easy.", "Using Claude looks hard, but it's very easy."], tense: "présent", tip: "Un verbe sujet prend -ING : Using Claude…" },
      { fr: "Je préfère rester à la maison.", en: ["I prefer to stay at home.", "I'd rather stay at home.", "I prefer staying at home."], tense: "présent", tip: "I'd rather + base = je préfère." },
    ],
  },
  {
    day: 14, level: 4, theme: "Faire des projets ensemble", tense: "Mix",
    notes: [
      "BEFORE / AFTER + -ING : before eating, after working.",
      "Let's + verbe = allons… ; How about + -ING? = et si on… ?",
      "IF + présent, WILL + verbe : If I have time, I will come.",
    ],
    sentences: [
      { fr: "Si j'ai le temps, je viendrai te voir.", en: ["If I have time, I will come and see you.", "If I have time, I'll come to see you.", "If I have time, I will visit you."], tense: "conditionnel", tip: "IF + présent → WILL (jamais will après if)." },
      { fr: "On pourrait se voir ce week-end.", en: ["We could meet this weekend.", "We could see each other this weekend.", "How about meeting this weekend?"], tense: "conditionnel", tip: "COULD = pourrait (suggestion)." },
      { fr: "Avant de dîner, je nage dans la mer.", en: ["Before dinner, I swim in the sea.", "Before having dinner, I swim in the sea."], tense: "présent", tip: "BEFORE + -ING ou + nom." },
      { fr: "Après le travail, allons boire un verre.", en: ["After work, let's go for a drink.", "Let's have a drink after work."], tense: "impératif", tip: "Let's = allons… (suggestion)." },
      { fr: "J'aimerais apprendre à cuisiner.", en: ["I would like to learn to cook.", "I'd like to learn how to cook."], tense: "conditionnel", tip: "Learn (how) to + verbe." },
      { fr: "Ça fait longtemps qu'on ne s'est pas vus.", en: ["Long time no see.", "It's been a long time since we last saw each other.", "We haven't seen each other for a long time."], tense: "present perfect", tip: "Long time no see = expression familière." },
      { fr: "J'ai hâte de te revoir.", en: ["I look forward to seeing you again.", "I can't wait to see you again.", "I'm looking forward to seeing you again."], tense: "présent", tip: "Look forward TO + -ING (le « to » est une préposition)." },
      { fr: "Et si on allait à la plage ?", en: ["How about going to the beach?", "What about going to the beach?", "Why don't we go to the beach?"], tense: "présent", tip: "How about + -ING ?" },
    ],
  },
  {
    day: 15, level: 4, theme: "Résoudre un imprévu", tense: "Present perfect",
    notes: [
      "Present perfect = conséquence dans le présent : I've lost my phone (je ne l'ai toujours pas).",
      "Prétérit = moment précis terminé : I lost it yesterday.",
      "Have to = devoir (obligation extérieure).",
    ],
    sentences: [
      { fr: "J'ai perdu mon téléphone dans le métro.", en: ["I have lost my phone on the underground.", "I lost my phone on the subway.", "I've lost my phone on the tube.", "I lost my phone on the metro."], tense: "present perfect", tip: "Underground / tube (Londres) = subway (US)." },
      { fr: "Est-ce que quelqu'un l'a trouvé ?", en: ["Has anyone found it?", "Did anyone find it?", "Has somebody found it?"], tense: "present perfect", tip: "ANYONE dans une question." },
      { fr: "Je ne sais pas quoi faire.", en: ["I do not know what to do.", "I don't know what to do."], tense: "présent", tip: "What to do = quoi faire." },
      { fr: "Je dois en acheter un nouveau.", en: ["I have to buy a new one.", "I need to buy a new one.", "I must buy a new one."], tense: "présent", tip: "A new ONE : ONE remplace le nom." },
      { fr: "J'ai trouvé mes clés !", en: ["I have found my keys!", "I found my keys!", "I've found my keys!"], tense: "present perfect", tip: "FIND → FOUND." },
      { fr: "Heureusement, tout va bien maintenant.", en: ["Fortunately, everything is fine now.", "Luckily, everything is OK now.", "Luckily everything's fine now."], tense: "présent", tip: "Everything est singulier : everything IS." },
      { fr: "Le wifi ne marche pas.", en: ["The wifi is not working.", "The wifi isn't working.", "The wifi doesn't work."], tense: "présent continu", tip: "To work = marcher, fonctionner." },
      { fr: "Pas de problème.", en: ["No problem.", "No worries."], tense: "présent", tip: "No worries = pas de souci (très courant)." },
    ],
  },

  /* ---------- NIVEAU 5 — VIE QUOTIDIENNE AVANCÉE ---------- */
  {
    day: 16, level: 5, theme: "Au marché / négocier", tense: "Mix",
    notes: [
      "Nombres : 13 thirteen / 30 thirty (attention à l'accent), 100 a hundred, 1,000 a thousand.",
      "En anglais britannique : one hundred AND five (105).",
      "Can you give me a discount? = vous pouvez me faire une réduction ?",
    ],
    sentences: [
      { fr: "Combien coûtent les tomates ?", en: ["How much are the tomatoes?", "How much do the tomatoes cost?"], tense: "présent", tip: "Tomato → tomatoES (pluriel en -es)." },
      { fr: "C'est trop cher pour moi.", en: ["It is too expensive for me.", "It's too expensive for me."], tense: "présent", tip: "Too expensive FOR me." },
      { fr: "Vous pouvez me faire une réduction ?", en: ["Can you give me a discount?", "Could you give me a discount?", "Can I get a discount?"], tense: "présent", tip: "Discount = réduction." },
      { fr: "Je vais en prendre un kilo.", en: ["I will take a kilo.", "I'll take a kilo.", "I'll have a kilo."], tense: "futur", tip: "I'll take… = je prends…" },
      { fr: "Ça fait quatre-vingt-cinq euros.", en: ["That is eighty-five euros.", "That's eighty-five euros.", "It's eighty-five euros.", "That comes to eighty-five euros."], tense: "présent", tip: "Eighty-five : trait d'union entre dizaines et unités." },
      { fr: "Gardez la monnaie.", en: ["Keep the change."], tense: "impératif", tip: "Change = monnaie." },
      { fr: "Il y a une promotion ?", en: ["Is there a special offer?", "Are there any deals?", "Is there a discount?"], tense: "présent", tip: "Special offer = promotion." },
      { fr: "J'ai déjà dépensé deux cent cinquante euros.", en: ["I have already spent two hundred and fifty euros.", "I've already spent two hundred fifty euros.", "I've already spent 250 euros."], tense: "present perfect", tip: "SPEND → SPENT. Hundred reste au singulier : two hundred." },
    ],
  },
  {
    day: 17, level: 5, theme: "Louer un appartement", tense: "Mix",
    notes: [
      "Flat (GB) = apartment (US) · landlord = propriétaire · tenant = locataire · rent = loyer.",
      "Étages : ground floor = rez-de-chaussée (GB) ; first floor = 1er étage.",
      "Flatmate (GB) / roommate (US) = colocataire.",
    ],
    sentences: [
      { fr: "Je cherche un appartement à louer.", en: ["I am looking for a flat to rent.", "I'm looking for an apartment to rent."], tense: "présent continu", tip: "Look FOR = chercher." },
      { fr: "Combien coûte le loyer par mois ?", en: ["How much is the rent per month?", "How much is the rent a month?"], tense: "présent", tip: "Rent = loyer ; to rent = louer." },
      { fr: "Les charges sont comprises ?", en: ["Are bills included?", "Are the bills included?", "Are utilities included?"], tense: "présent", tip: "Bills (GB) / utilities (US) = charges." },
      { fr: "J'aimerais le visiter demain.", en: ["I would like to see it tomorrow.", "I'd like to view it tomorrow.", "I'd like to visit it tomorrow."], tense: "conditionnel", tip: "To view a flat = visiter un appartement." },
      { fr: "Quand est-ce que je peux emménager ?", en: ["When can I move in?"], tense: "présent", tip: "Move in = emménager ; move out = déménager (partir)." },
      { fr: "Je suis en colocation.", en: ["I share a flat.", "I have a flatmate.", "I live with a roommate.", "I share an apartment."], tense: "présent", tip: "To share a flat = être en colocation." },
      { fr: "J'habite au premier étage.", en: ["I live on the first floor."], tense: "présent", tip: "ON the first floor." },
      { fr: "Les anciens locataires n'ont pas payé pendant deux ans.", en: ["The previous tenants did not pay for two years.", "The former tenants didn't pay for two years."], tense: "prétérit", tip: "Tenant = locataire ; previous = précédent." },
    ],
  },
  {
    day: 18, level: 5, theme: "Exprimer ses émotions", tense: "Mix",
    notes: [
      "-ED = ce qu'on ressent (I'm bored) · -ING = ce qui provoque (it's boring).",
      "Make + personne + adjectif = rendre : It made me sad.",
      "Don't worry = ne t'inquiète pas.",
    ],
    sentences: [
      { fr: "Je suis très content de te voir.", en: ["I am very happy to see you.", "I'm so happy to see you.", "I'm really glad to see you."], tense: "présent", tip: "Glad = content." },
      { fr: "Ça m'a rendu triste.", en: ["It made me sad.", "That made me sad."], tense: "prétérit", tip: "MAKE → MADE : make someone sad." },
      { fr: "J'ai peur de me tromper.", en: ["I am afraid of making a mistake.", "I'm scared of making mistakes.", "I'm afraid of being wrong."], tense: "présent", tip: "Afraid OF + -ING. Make a mistake = faire une erreur." },
      { fr: "Je suis fatigué aujourd'hui.", en: ["I am tired today.", "I'm tired today."], tense: "présent", tip: "Tired = fatigué ; tiring = fatigant." },
      { fr: "Ne t'inquiète pas, tout ira bien.", en: ["Don't worry, everything will be fine.", "Do not worry, everything will be OK.", "Don't worry, it'll be fine."], tense: "futur", tip: "Don't + verbe = impératif négatif." },
      { fr: "Je m'ennuie.", en: ["I am bored.", "I'm bored."], tense: "présent", tip: "I'm bored (je m'ennuie) ≠ I'm boring (je suis ennuyeux) !" },
      { fr: "Il est de mauvaise humeur.", en: ["He is in a bad mood.", "He's in a bad mood."], tense: "présent", tip: "IN a bad mood." },
      { fr: "J'ai eu très peur.", en: ["I was really scared.", "I got really scared.", "I was very frightened."], tense: "prétérit", tip: "Scared / frightened = effrayé." },
    ],
  },
  {
    day: 19, level: 5, theme: "Raconter une anecdote", tense: "Past continuous",
    notes: [
      "WHILE + past continuous = pendant que : While I was walking…",
      "WHEN + prétérit = quand (action ponctuelle) : when I saw him.",
      "Connecteurs : first, then, after that, in the end = d'abord, ensuite, après ça, finalement.",
    ],
    sentences: [
      { fr: "L'autre jour, il m'est arrivé un truc drôle.", en: ["The other day, something funny happened to me.", "Something funny happened to me the other day."], tense: "prétérit", tip: "Happen TO someone." },
      { fr: "Je marchais dans la rue quand je l'ai vu.", en: ["I was walking down the street when I saw him.", "I was walking in the street when I saw him."], tense: "past continuous", tip: "Décor (was walking) + action (saw)." },
      { fr: "Au début, je n'ai pas compris.", en: ["At first, I did not understand.", "At first I didn't understand."], tense: "prétérit", tip: "At first = au début." },
      { fr: "Ensuite, on a beaucoup ri.", en: ["Then we laughed a lot.", "After that, we laughed a lot."], tense: "prétérit", tip: "Laugh : le GH se prononce F." },
      { fr: "Je ne l'oublierai jamais.", en: ["I will never forget it.", "I'll never forget it."], tense: "futur", tip: "NEVER se place entre will et le verbe." },
      { fr: "Pendant que je jouais, je suis tombé.", en: ["While I was playing, I fell.", "I fell while I was playing.", "While I was playing, I fell over."], tense: "past continuous", tip: "WHILE + past continuous." },
      { fr: "Beaucoup de poissons sont venus et j'ai eu peur.", en: ["Lots of fish came and I got scared.", "A lot of fish came and I was scared.", "Many fish came and I got scared."], tense: "prétérit", tip: "FISH est invariable au pluriel." },
      { fr: "Finalement, tout s'est bien passé.", en: ["In the end, everything went well.", "In the end everything went fine.", "Finally, everything went well."], tense: "prétérit", tip: "Go well = bien se passer." },
    ],
  },
  {
    day: 20, level: 5, theme: "Donner des conseils", tense: "Conseils",
    notes: [
      "SHOULD = devrais · HAD BETTER = ferais mieux de.",
      "If I were you, I would… = à ta place, je…",
      "Why don't you…? = pourquoi tu ne… pas ?",
    ],
    sentences: [
      { fr: "Tu devrais te reposer un peu.", en: ["You should rest a bit.", "You should get some rest.", "You should rest a little."], tense: "conseil", tip: "SHOULD + base." },
      { fr: "À ta place, je l'appellerais.", en: ["If I were you, I would call him.", "If I were you, I'd call him.", "If I were you, I would call her."], tense: "conditionnel", tip: "If I WERE you (were pour toutes les personnes)." },
      { fr: "Il vaut mieux partir tôt.", en: ["It is better to leave early.", "It's better to leave early.", "You'd better leave early."], tense: "conseil", tip: "It's better to… = il vaut mieux…" },
      { fr: "Tu pourrais essayer autre chose.", en: ["You could try something else."], tense: "conseil", tip: "Something else = autre chose." },
      { fr: "Ne bois pas trop.", en: ["Don't drink too much.", "Do not drink too much."], tense: "impératif", tip: "Too much = trop (indénombrable)." },
      { fr: "Il faut boire beaucoup d'eau.", en: ["You should drink a lot of water.", "You need to drink plenty of water.", "You have to drink lots of water."], tense: "conseil", tip: "Plenty of = beaucoup de." },
      { fr: "Je te conseille d'en parler avec elle.", en: ["I advise you to talk to her about it.", "I suggest you talk to her about it.", "You should talk to her about it."], tense: "conseil", tip: "Advise (verbe) / advice (nom, indénombrable)." },
      { fr: "Couvre-toi bien, il fait froid.", en: ["Wrap up warm, it's cold.", "Dress warmly, it is cold.", "Wrap up warm, it is cold."], tense: "impératif", tip: "Wrap up warm = bien se couvrir." },
    ],
  },

  /* ---------- NIVEAU 6 — MONDE ET TRAVAIL ---------- */
  {
    day: 21, level: 6, theme: "À l'aéroport", tense: "Mix",
    notes: [
      "Check in = enregistrer · boarding gate = porte d'embarquement · luggage = bagages (indénombrable).",
      "Miss = rater (un vol, un train) ; lose = perdre.",
      "Delayed = retardé ; cancelled = annulé.",
    ],
    sentences: [
      { fr: "À quelle heure part mon vol ?", en: ["What time does my flight leave?", "What time is my flight?", "When does my flight leave?"], tense: "présent", tip: "WHAT TIME = à quelle heure." },
      { fr: "J'ai raté ma correspondance.", en: ["I missed my connection.", "I have missed my connecting flight.", "I missed my connecting flight."], tense: "prétérit", tip: "MISS = rater (pas lose)." },
      { fr: "Où est la porte d'embarquement ?", en: ["Where is the boarding gate?", "Where is the gate?"], tense: "présent", tip: "Gate = porte (à l'aéroport)." },
      { fr: "Ma valise n'est pas arrivée.", en: ["My suitcase has not arrived.", "My suitcase hasn't arrived.", "My luggage didn't arrive."], tense: "present perfect", tip: "Suitcase = valise." },
      { fr: "Voici mon passeport.", en: ["Here is my passport.", "Here's my passport."], tense: "présent", tip: "Here is = voici." },
      { fr: "Je dois enregistrer un bagage.", en: ["I need to check in a bag.", "I have to check in a suitcase.", "I need to check a bag."], tense: "présent", tip: "To check in = enregistrer." },
      { fr: "Le vol a une heure de retard.", en: ["The flight is delayed by one hour.", "The flight is an hour late.", "The flight is one hour late.", "The flight is delayed by an hour."], tense: "présent", tip: "Delayed BY + durée." },
      { fr: "Mon vol a été annulé.", en: ["My flight has been cancelled.", "My flight was cancelled.", "My flight was canceled."], tense: "passif", tip: "Passif : BE + participe passé." },
    ],
  },
  {
    day: 22, level: 6, theme: "Sport et santé", tense: "Mix",
    notes: [
      "PLAY (sports de ballon) · GO + -ING (swimming, running) · DO (yoga, pilates, karate).",
      "Fréquence : once / twice / three times a week.",
      "Adverbes de fréquence avant le verbe : I usually train in the morning.",
    ],
    sentences: [
      { fr: "Je vais à la salle trois fois par semaine.", en: ["I go to the gym three times a week.", "I go to the gym three times per week."], tense: "présent", tip: "Three times A week." },
      { fr: "Je fais du sport tous les jours.", en: ["I do sport every day.", "I exercise every day.", "I work out every day."], tense: "présent", tip: "Every day (2 mots) = tous les jours ; everyday = quotidien." },
      { fr: "Je me sens très bien quand je fais du sport.", en: ["I feel really good when I exercise.", "I feel very good when I do sport.", "I feel great when I work out."], tense: "présent", tip: "Feel GOOD (pas « well » quand on parle d'humeur)." },
      { fr: "Je veux me remettre en forme.", en: ["I want to get back in shape.", "I want to get fit again.", "I want to get in shape."], tense: "présent", tip: "Get in shape = se mettre en forme." },
      { fr: "D'habitude, je cours le matin.", en: ["I usually run in the morning.", "I usually go running in the morning."], tense: "présent", tip: "USUALLY avant le verbe." },
      { fr: "Je donne des cours de Lagree.", en: ["I teach Lagree classes.", "I give Lagree classes.", "I teach Lagree."], tense: "présent", tip: "Teach a class = donner un cours." },
      { fr: "Je me suis fait une entorse à la cheville.", en: ["I sprained my ankle.", "I have sprained my ankle.", "I twisted my ankle."], tense: "prétérit", tip: "Sprain = entorse ; ankle = cheville." },
      { fr: "Qui a gagné le match ?", en: ["Who won the match?", "Who won the game?"], tense: "prétérit", tip: "WIN → WON. Question sur le sujet : pas de DID." },
    ],
  },
  {
    day: 23, level: 6, theme: "Travail et carrière", tense: "Present perfect",
    notes: [
      "Depuis + durée qui continue : present perfect + FOR : I have worked here for two years.",
      "Job = un emploi ; work = le travail (indénombrable).",
      "Meeting = réunion ; colleague = collègue ; boss = patron.",
    ],
    sentences: [
      { fr: "Je travaille dans une startup depuis deux ans.", en: ["I have worked at a startup for two years.", "I've been working at a startup for two years.", "I have been working for a startup for two years."], tense: "present perfect", tip: "Depuis + durée = present perfect + FOR." },
      { fr: "J'aimerais changer de travail.", en: ["I would like to change jobs.", "I'd like to change my job.", "I'd like to find a new job."], tense: "conditionnel", tip: "Change jobs (au pluriel)." },
      { fr: "Nous avons une réunion importante demain.", en: ["We have an important meeting tomorrow.", "We've got an important meeting tomorrow."], tense: "présent", tip: "AN important : AN devant une voyelle." },
      { fr: "Mon patron m'a félicité.", en: ["My boss congratulated me.", "My boss praised me."], tense: "prétérit", tip: "Congratulate = féliciter." },
      { fr: "Je crée une application chaque semaine.", en: ["I make an app every week.", "I build an app every week.", "I create an app every week."], tense: "présent", tip: "Every week = chaque semaine." },
      { fr: "Mes collègues sont très sympas.", en: ["My colleagues are very nice.", "My coworkers are really nice."], tense: "présent", tip: "Colleague = collègue." },
      { fr: "Je suis en réunion, je te rappelle.", en: ["I'm in a meeting, I'll call you back.", "I am in a meeting, I will call you back."], tense: "futur", tip: "Call back = rappeler." },
      { fr: "On utilise l'IA au travail.", en: ["We use AI at work.", "We use artificial intelligence at work."], tense: "présent", tip: "AT work = au travail." },
    ],
  },
  {
    day: 24, level: 6, theme: "Technologie du quotidien", tense: "Mix",
    notes: [
      "Not… anymore = ne… plus : It doesn't work anymore.",
      "Charge = recharger · download = télécharger · password = mot de passe.",
      "Send me the link = envoie-moi le lien (pas de « to » quand la personne vient d'abord).",
    ],
    sentences: [
      { fr: "Mon téléphone ne marche plus.", en: ["My phone does not work anymore.", "My phone doesn't work any more.", "My phone isn't working anymore."], tense: "présent", tip: "ANYMORE en fin de phrase = ne… plus." },
      { fr: "Je dois recharger la batterie.", en: ["I need to charge the battery.", "I have to charge my phone.", "I need to charge my battery."], tense: "présent", tip: "Charge = recharger." },
      { fr: "Il y a du wifi ici ?", en: ["Is there wifi here?", "Is there any wifi here?", "Do you have wifi here?"], tense: "présent", tip: "Is there…? = y a-t-il… ?" },
      { fr: "J'ai oublié mon mot de passe.", en: ["I have forgotten my password.", "I forgot my password.", "I've forgotten my password."], tense: "present perfect", tip: "FORGET → FORGOT → FORGOTTEN." },
      { fr: "Envoie-moi le lien.", en: ["Send me the link."], tense: "impératif", tip: "Send ME the link." },
      { fr: "Je télécharge l'application.", en: ["I am downloading the app.", "I'm downloading the app."], tense: "présent continu", tip: "Download = télécharger." },
      { fr: "Cette application est très pratique.", en: ["This app is very useful.", "This app is really handy.", "This app is very practical."], tense: "présent", tip: "Handy / useful = pratique." },
      { fr: "Je t'ai envoyé un message.", en: ["I sent you a message.", "I have sent you a message.", "I texted you."], tense: "prétérit", tip: "SEND → SENT. To text = envoyer un SMS." },
    ],
  },
  {
    day: 25, level: 6, theme: "Culture et sorties", tense: "Mix",
    notes: [
      "Have you ever…? = est-ce que tu as déjà… ? (present perfect d'expérience).",
      "Never = jamais ; ever = déjà (dans une question).",
      "Do you fancy…? (GB) / Do you feel like…? = ça te dit de… ?",
    ],
    sentences: [
      { fr: "On pourrait aller au cinéma ce soir.", en: ["We could go to the cinema tonight.", "We could go to the movies tonight.", "We could go to the cinema this evening."], tense: "conditionnel", tip: "Cinema (GB) = movies (US)." },
      { fr: "Tu as déjà vu cette série ?", en: ["Have you ever seen this series?", "Have you seen this show?", "Have you ever watched this series?"], tense: "present perfect", tip: "EVER = déjà (dans une question)." },
      { fr: "Le concert commence à neuf heures.", en: ["The concert starts at nine.", "The concert begins at nine o'clock.", "The concert starts at 9."], tense: "présent", tip: "Programme fixe : présent simple." },
      { fr: "Tu es libre samedi ?", en: ["Are you free on Saturday?", "Are you free this Saturday?", "Are you free Saturday?"], tense: "présent", tip: "ON Saturday." },
      { fr: "Ça te dit de sortir avec nous ?", en: ["Do you want to go out with us?", "Do you fancy going out with us?", "Do you feel like going out with us?"], tense: "présent", tip: "Fancy + -ING (GB)." },
      { fr: "Je n'ai jamais essayé ce restaurant.", en: ["I have never tried this restaurant.", "I've never been to this restaurant.", "I've never tried this restaurant."], tense: "present perfect", tip: "NEVER + present perfect." },
      { fr: "Les billets sont épuisés.", en: ["The tickets are sold out.", "The tickets have sold out.", "It's sold out."], tense: "présent", tip: "Sold out = épuisé." },
      { fr: "C'était génial !", en: ["It was great!", "It was amazing!", "That was awesome!"], tense: "prétérit", tip: "Great / amazing / awesome = génial." },
    ],
  },

  /* ---------- NIVEAU 7 — NUANCES ---------- */
  {
    day: 26, level: 7, theme: "Se plaindre poliment", tense: "Mix",
    notes: [
      "I'm afraid… = je crains que… (pour annoncer un problème poliment).",
      "Present perfect continuous : I have been waiting for an hour = j'attends depuis une heure.",
      "Past perfect (had + participe) = plus-que-parfait : what I had ordered.",
    ],
    sentences: [
      { fr: "Excusez-moi, il y a une erreur sur l'addition.", en: ["Excuse me, there is a mistake on the bill.", "Excuse me, there's a mistake in the bill.", "Sorry, there's a mistake on the bill."], tense: "présent", tip: "Mistake = erreur." },
      { fr: "Ce n'est pas ce que j'avais commandé.", en: ["This is not what I had ordered.", "This isn't what I ordered.", "That's not what I ordered."], tense: "past perfect", tip: "WHAT = ce que." },
      { fr: "La chambre n'est pas propre.", en: ["The room is not clean.", "The room isn't clean."], tense: "présent", tip: "Clean = propre ; dirty = sale." },
      { fr: "Je voudrais parler au responsable.", en: ["I would like to speak to the manager.", "I'd like to speak to the manager.", "Can I speak to the manager?"], tense: "conditionnel", tip: "Speak TO someone." },
      { fr: "J'attends depuis une heure.", en: ["I have been waiting for an hour.", "I've been waiting for an hour.", "I have been waiting for one hour."], tense: "present perfect continu", tip: "Depuis (durée) + action en cours : HAVE BEEN + -ING." },
      { fr: "Je crains que ce soit un problème.", en: ["I'm afraid that's a problem.", "I am afraid it is a problem.", "I'm afraid it's a problem."], tense: "présent", tip: "I'm afraid… = je crains que…" },
      { fr: "Pouvez-vous me changer de chambre ?", en: ["Could you change my room?", "Could I change rooms?", "Can I have another room?"], tense: "conditionnel", tip: "Change rooms (au pluriel)." },
      { fr: "Ce n'est pas grave.", en: ["It doesn't matter.", "It's not a big deal.", "Never mind.", "That's OK."], tense: "présent", tip: "Never mind = laisse tomber, pas grave." },
    ],
  },
  {
    day: 27, level: 7, theme: "Faire des hypothèses", tense: "Conditionnel",
    notes: [
      "2e conditionnel : IF + prétérit, WOULD + verbe (irréel présent).",
      "3e conditionnel : IF + had + participe, WOULD HAVE + participe (irréel passé).",
      "Unless = à moins que ; even if = même si.",
    ],
    sentences: [
      { fr: "Si j'avais de l'argent, je voyagerais partout.", en: ["If I had money, I would travel everywhere.", "If I had money, I'd travel everywhere.", "If I had the money, I would travel all over the world."], tense: "conditionnel", tip: "IF + prétérit → WOULD." },
      { fr: "Si j'étais toi, je ne ferais pas ça.", en: ["If I were you, I would not do that.", "If I were you, I wouldn't do that."], tense: "conditionnel", tip: "If I WERE you." },
      { fr: "Qu'est-ce que tu ferais à ma place ?", en: ["What would you do if you were me?", "What would you do in my place?", "What would you do in my shoes?"], tense: "conditionnel", tip: "In my shoes = à ma place (image)." },
      { fr: "Si on avait plus de temps, on resterait.", en: ["If we had more time, we would stay.", "If we had more time, we'd stay."], tense: "conditionnel", tip: "More time = plus de temps." },
      { fr: "Si j'avais su, je ne serais pas venu.", en: ["If I had known, I would not have come.", "If I had known, I wouldn't have come.", "If I'd known, I wouldn't have come."], tense: "conditionnel passé", tip: "3e conditionnel : IF + HAD + participe, WOULD HAVE + participe." },
      { fr: "S'il pleut, on ne sort pas.", en: ["If it rains, we won't go out.", "If it rains, we will not go out.", "If it rains, we don't go out."], tense: "conditionnel", tip: "WON'T = will not." },
      { fr: "Même s'il fait froid, j'irai nager.", en: ["Even if it is cold, I will go swimming.", "Even if it's cold, I'll go swimming."], tense: "futur", tip: "Even if = même si." },
      { fr: "Je ne viendrai pas, à moins que tu m'invites.", en: ["I won't come unless you invite me.", "I will not come unless you invite me."], tense: "futur", tip: "UNLESS = à moins que (+ présent)." },
    ],
  },
  {
    day: 28, level: 7, theme: "Souhaits", tense: "Souhaits",
    notes: [
      "I hope + présent / futur = j'espère que.",
      "I wish + prétérit = j'aimerais que (regret sur le présent).",
      "Want someone to do something = vouloir que quelqu'un fasse quelque chose.",
    ],
    sentences: [
      { fr: "J'espère que tu vas bien.", en: ["I hope you are well.", "I hope you're doing well.", "I hope you are OK."], tense: "présent", tip: "I hope + présent." },
      { fr: "Je veux que tu viennes avec moi.", en: ["I want you to come with me."], tense: "présent", tip: "Want + personne + TO + verbe (jamais « I want that you »)." },
      { fr: "Pourvu qu'il fasse beau demain.", en: ["I hope the weather is nice tomorrow.", "Hopefully it will be sunny tomorrow.", "I hope it's sunny tomorrow."], tense: "souhait", tip: "Hopefully = avec un peu de chance." },
      { fr: "J'aimerais parler anglais couramment.", en: ["I wish I spoke English fluently.", "I wish I could speak English fluently.", "I would like to speak English fluently."], tense: "souhait", tip: "I wish + prétérit = regret." },
      { fr: "Bon voyage !", en: ["Have a good trip!", "Have a nice trip!", "Safe travels!"], tense: "souhait", tip: "Have a good…! = bon… !" },
      { fr: "Joyeux anniversaire !", en: ["Happy birthday!"], tense: "souhait", tip: "Birthday = anniversaire (de naissance)." },
      { fr: "Il faut que je parte maintenant.", en: ["I have to go now.", "I've got to go now.", "I need to leave now."], tense: "présent", tip: "I've got to go = je dois y aller." },
      { fr: "Bon appétit !", en: ["Enjoy your meal!", "Enjoy!"], tense: "souhait", tip: "« Bon appétit » se dit aussi en anglais, mais Enjoy your meal est plus naturel." },
    ],
  },
  {
    day: 29, level: 7, theme: "Probabilité et météo", tense: "Mix",
    notes: [
      "Must = doit (déduction sûre) · might / may = peut-être · can't = ne peut pas (impossible).",
      "Météo : It's raining, it's windy, it's sunny, it's freezing.",
      "It's raining cats and dogs = il pleut des cordes.",
    ],
    sentences: [
      { fr: "Il doit être chez lui en ce moment.", en: ["He must be at home right now.", "He must be at home now."], tense: "probabilité", tip: "MUST = déduction logique." },
      { fr: "Il pleuvra peut-être demain.", en: ["It might rain tomorrow.", "It may rain tomorrow.", "Maybe it will rain tomorrow."], tense: "probabilité", tip: "MIGHT + base = peut-être." },
      { fr: "Il pleut des cordes.", en: ["It's raining cats and dogs.", "It is pouring.", "It's pouring down."], tense: "présent continu", tip: "Raining cats and dogs = expression figée." },
      { fr: "Il fait très froid et il y a du vent.", en: ["It is very cold and windy.", "It's freezing and windy.", "It's really cold and windy."], tense: "présent", tip: "Windy = venteux." },
      { fr: "Je ne sais pas encore ce que je ferai.", en: ["I don't know what I will do yet.", "I do not know yet what I will do.", "I don't know what I'm going to do yet."], tense: "futur", tip: "YET en fin de phrase." },
      { fr: "Ça dépendra de la météo.", en: ["It will depend on the weather.", "It depends on the weather."], tense: "futur", tip: "Weather = météo (≠ whether = si)." },
      { fr: "En automne, les feuilles tombent.", en: ["In autumn, the leaves fall.", "In the fall, leaves fall.", "In autumn leaves fall."], tense: "présent", tip: "Autumn (GB) = fall (US). Leaf → leaves." },
      { fr: "Ça ne peut pas être vrai.", en: ["It can't be true.", "That can't be true.", "It cannot be true."], tense: "probabilité", tip: "CAN'T = impossible (déduction)." },
    ],
  },
  {
    day: 30, level: 8, theme: "Conversation libre", tense: "Mix",
    notes: [
      "The more…, the more… = plus…, plus… : The more I learn, the more I like it.",
      "Tous les temps ensemble : présent, prétérit, present perfect, futur, conditionnel.",
    ],
    sentences: [
      { fr: "Ça faisait longtemps qu'on ne s'était pas parlé.", en: ["We hadn't talked for a long time.", "It had been a long time since we last talked.", "We had not spoken for a long time."], tense: "past perfect", tip: "Past perfect : HAD + participe." },
      { fr: "Raconte-moi tout ce qui s'est passé.", en: ["Tell me everything that happened.", "Tell me everything."], tense: "impératif", tip: "Tell ME : tell prend toujours la personne." },
      { fr: "Je suis fier de tout ce que j'ai appris.", en: ["I am proud of everything I have learnt.", "I'm proud of everything I've learned.", "I am proud of all I have learned."], tense: "present perfect", tip: "Proud OF." },
      { fr: "Maintenant je peux parler sans problème.", en: ["Now I can speak without any problem.", "Now I can speak without problems.", "Now I can speak with no problem."], tense: "présent", tip: "Without ANY problem." },
      { fr: "Plus j'apprends, plus c'est intéressant.", en: ["The more I learn, the more interesting it is.", "The more I learn, the more interesting it gets."], tense: "comparatif", tip: "THE more…, THE more…" },
      { fr: "Juan est en train de manger un sandwich.", en: ["Juan is eating a sandwich."], tense: "présent continu", tip: "BE + -ING." },
      { fr: "Mon anglais est de mieux en mieux.", en: ["My English is getting better and better."], tense: "présent continu", tip: "Better and better = de mieux en mieux." },
      { fr: "Merci de m'avoir aidé à progresser.", en: ["Thank you for helping me improve.", "Thanks for helping me to improve.", "Thank you for helping me make progress."], tense: "présent", tip: "Thank you FOR + -ING." },
    ],
  },
];

// Le moteur de correction lit le champ « es » (réponses acceptées)
CURRICULUM.forEach(d => d.sentences.forEach(s => { s.es = s.en; }));
