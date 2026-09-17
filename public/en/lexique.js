/* ============================================================
   LEARN ENGLISH — Lexique par thème (flashcards FR → anglais)
   [anglais, français, [variantes acceptées (US / GB…)]]
   L'article (the, a, an) et le « to » des verbes sont facultatifs.
   ============================================================ */

const LEXIQUE_RAW = [
  { id: "food", label: "Manger et boire", words: [
    ["coffee", "le café"], ["tea", "le thé"], ["water", "l'eau"], ["milk", "le lait"],
    ["beer", "la bière"], ["wine", "le vin"], ["fruit juice", "le jus de fruits", ["juice"]], ["rice", "le riz"],
    ["bread", "le pain"], ["egg", "l'œuf"], ["chicken", "le poulet"], ["beef", "le bœuf"],
    ["fish", "le poisson"], ["prawns", "les crevettes", ["shrimp"]], ["vegetables", "les légumes"], ["apple", "la pomme"],
    ["banana", "la banane"], ["watermelon", "la pastèque"], ["strawberry", "la fraise"], ["peach", "la pêche (fruit)"],
    ["potato", "la pomme de terre"], ["tomato", "la tomate"], ["courgette", "la courgette", ["zucchini"]], ["pumpkin", "la citrouille"],
    ["sugar", "le sucre"], ["salt", "le sel"], ["spicy", "épicé"], ["tasty", "savoureux", ["delicious"]],
    ["the bill", "l'addition", ["the check"]], ["menu", "le menu"], ["breakfast", "le petit-déjeuner"], ["dinner", "le dîner"],
    ["dessert", "le dessert"], ["snails", "les escargots"], ["oven", "le four"], ["recipe", "la recette"],
  ]},
  { id: "home", label: "Maison et logement", words: [
    ["house", "la maison"], ["flat", "l'appartement", ["apartment"]], ["villa", "la villa"], ["bedroom", "la chambre"],
    ["kitchen", "la cuisine (pièce)"], ["living room", "le salon", ["lounge"]], ["bathroom", "la salle de bain"], ["bed", "le lit"],
    ["table", "la table"], ["chair", "la chaise"], ["sofa", "le canapé", ["couch"]], ["door", "la porte"],
    ["window", "la fenêtre"], ["key", "la clé"], ["landlord", "le propriétaire", ["owner"]], ["tenant", "le locataire"],
    ["rent", "le loyer"], ["deposit", "la caution"], ["to move", "déménager", ["to move house"]], ["flatmate", "le colocataire", ["roommate"]],
    ["neighbour", "le voisin", ["neighbor"]], ["floor", "l'étage"], ["garden", "le jardin", ["yard"]], ["swimming pool", "la piscine", ["pool"]],
    ["estate agent", "l'agent immobilier", ["real estate agent"]], ["mortgage", "le prêt immobilier"], ["fireplace", "la cheminée"], ["furniture", "les meubles"],
  ]},
  { id: "time", label: "Temps, jours et mois", words: [
    ["today", "aujourd'hui"], ["yesterday", "hier"], ["tomorrow", "demain"], ["the day after tomorrow", "après-demain"],
    ["now", "maintenant"], ["morning", "le matin"], ["noon", "midi", ["midday"]], ["afternoon", "l'après-midi"],
    ["evening", "le soir"], ["weekend", "le week-end"], ["Monday", "lundi"], ["Tuesday", "mardi"],
    ["Wednesday", "mercredi"], ["Thursday", "jeudi"], ["Friday", "vendredi"], ["Saturday", "samedi"],
    ["Sunday", "dimanche"], ["January", "janvier"], ["February", "février"], ["March", "mars"],
    ["April", "avril"], ["May", "mai"], ["June", "juin"], ["July", "juillet"],
    ["August", "août"], ["September", "septembre"], ["October", "octobre"], ["November", "novembre"],
    ["December", "décembre"], ["last year", "l'année dernière"], ["this year", "cette année"], ["next year", "l'année prochaine"],
    ["hour", "l'heure (durée)"], ["minute", "la minute"], ["first", "premier"], ["second", "deuxième"],
    ["third", "troisième"], ["fourth", "quatrième"], ["fifth", "cinquième"], ["last", "dernier"],
  ]},
  { id: "people", label: "Famille et gens", words: [
    ["father", "le père", ["dad"]], ["mother", "la mère", ["mum", "mom"]], ["parents", "les parents"], ["brother", "le frère"],
    ["sister", "la sœur"], ["son", "le fils"], ["daughter", "la fille (enfant)"], ["grandmother", "la grand-mère", ["grandma"]],
    ["grandfather", "le grand-père", ["grandpa"]], ["friend", "l'ami"], ["boyfriend", "le petit ami"], ["girlfriend", "la petite amie"],
    ["teacher", "le professeur"], ["student", "l'élève, l'étudiant", ["pupil"]], ["colleague", "le collègue", ["coworker"]], ["boss", "le patron"],
    ["doctor", "le médecin"], ["lawyer", "l'avocat"], ["child", "l'enfant", ["kid"]], ["children", "les enfants", ["kids"]],
    ["man", "l'homme"], ["woman", "la femme"], ["people", "les gens"], ["delivery driver", "le livreur", ["courier"]],
  ]},
  { id: "travel", label: "Transports et voyage", words: [
    ["plane", "l'avion", ["aeroplane", "airplane"]], ["train", "le train"], ["underground", "le métro", ["subway", "tube", "metro"]], ["bus", "le bus"],
    ["taxi", "le taxi", ["cab"]], ["boat", "le bateau"], ["bike", "le vélo", ["bicycle"]], ["car", "la voiture"],
    ["airport", "l'aéroport"], ["station", "la gare", ["train station"]], ["hotel", "l'hôtel"], ["passport", "le passeport"],
    ["luggage", "les bagages", ["baggage"]], ["suitcase", "la valise"], ["ticket", "le billet"], ["flight", "le vol"],
    ["map", "la carte, le plan"], ["beach", "la plage"], ["left", "à gauche"], ["right", "à droite"],
    ["straight on", "tout droit", ["straight ahead"]], ["far", "loin"], ["near", "près", ["close"]], ["trip", "le voyage (court)", ["journey"]],
    ["holiday", "les vacances", ["holidays", "vacation"]], ["abroad", "à l'étranger"], ["England", "l'Angleterre"], ["London", "Londres"],
  ]},
  { id: "body", label: "Corps, santé et sport", words: [
    ["head", "la tête"], ["eyes", "les yeux"], ["hand", "la main"], ["foot", "le pied"],
    ["feet", "les pieds"], ["leg", "la jambe"], ["knee", "le genou"], ["ankle", "la cheville"],
    ["skin", "la peau"], ["stomach", "le ventre", ["belly"]], ["headache", "le mal de tête"], ["fever", "la fièvre", ["temperature"]],
    ["a cold", "un rhume"], ["medicine", "le médicament", ["medication"]], ["hospital", "l'hôpital"], ["pharmacy", "la pharmacie", ["chemist"]],
    ["injury", "la blessure"], ["sprain", "l'entorse"], ["to get hurt", "se blesser", ["to hurt yourself"]], ["gym", "la salle de sport"],
    ["to run", "courir"], ["to swim", "nager"], ["football", "le football", ["soccer"]], ["match", "le match", ["game"]],
    ["to win", "gagner"], ["to lose", "perdre"], ["tired", "fatigué"], ["healthy", "en bonne santé"],
  ]},
  { id: "work", label: "Travail et technologie", words: [
    ["work", "le travail"], ["job", "l'emploi"], ["company", "l'entreprise"], ["meeting", "la réunion"],
    ["computer", "l'ordinateur"], ["mobile phone", "le téléphone portable", ["cell phone", "phone", "mobile"]], ["app", "l'application", ["application"]], ["website", "le site web"],
    ["password", "le mot de passe"], ["link", "le lien"], ["message", "le message"], ["email", "l'e-mail", ["e-mail"]],
    ["to charge", "recharger"], ["to download", "télécharger"], ["money", "l'argent"], ["bank", "la banque"],
    ["parcel", "le colis", ["package"]], ["address", "l'adresse"], ["artificial intelligence", "l'intelligence artificielle", ["AI"]], ["advertising", "la publicité", ["ads"]],
    ["free", "gratuit"], ["customer", "le client", ["client"]], ["salary", "le salaire"], ["to cheat", "tricher"],
  ]},
  { id: "weather", label: "Météo, saisons et adjectifs", words: [
    ["weather", "le temps (météo)"], ["to rain", "pleuvoir"], ["to snow", "neiger"], ["windy", "venteux"],
    ["sunny", "ensoleillé"], ["cloudy", "nuageux"], ["cold", "froid"], ["hot", "chaud"],
    ["spring", "le printemps"], ["summer", "l'été"], ["autumn", "l'automne", ["fall"]], ["winter", "l'hiver"],
    ["umbrella", "le parapluie"], ["scarf", "l'écharpe"], ["coat", "le manteau"], ["raincoat", "l'imperméable"],
    ["leaves", "les feuilles (arbre)"], ["storm", "l'orage"], ["fog", "le brouillard"], ["big", "grand", ["large"]],
    ["small", "petit", ["little"]], ["cheap", "bon marché"], ["expensive", "cher"], ["fast", "rapide", ["quick"]],
    ["slow", "lent"], ["new", "nouveau"], ["old", "vieux"], ["beautiful", "beau, belle", ["pretty"]],
    ["happy", "content, heureux", ["glad"]], ["sad", "triste"], ["easy", "facile"], ["difficult", "difficile", ["hard"]],
  ]},
];

// Le moteur de l'app lit { es, fr, alt } : « es » contient ici le mot anglais
const LEXIQUE = LEXIQUE_RAW.map(l => ({
  id: l.id, label: l.label,
  words: l.words.map(([en, fr, alt]) => ({ es: en, fr, alt: alt || [] })),
}));
