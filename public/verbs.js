/* ============================================================
   APRENDE ESPAÑOL — Moteur de conjugaison
   5 temps · 6 pronoms · réguliers générés + irréguliers explicites
   ============================================================ */
const CONJ = (function () {
  const PRONOUNS = ["yo", "tú", "él / ella", "nosotros", "vosotros", "ellos / ellas"];
  const TENSES = [
    { key: "presente",    label: "Présent" },
    { key: "preterito",   label: "Passé simple" },
    { key: "perfecto",    label: "Passé composé" },
    { key: "imperfecto",  label: "Imparfait" },
    { key: "futuro",      label: "Futur" },
    { key: "condicional", label: "Conditionnel" },
    { key: "gerundio",    label: "Présent continu" },
  ];

  // Terminaisons régulières
  const END = {
    ar: {
      presente:   ["o", "as", "a", "amos", "áis", "an"],
      preterito:  ["é", "aste", "ó", "amos", "asteis", "aron"],
      imperfecto: ["aba", "abas", "aba", "ábamos", "abais", "aban"],
    },
    er: {
      presente:   ["o", "es", "e", "emos", "éis", "en"],
      preterito:  ["í", "iste", "ió", "imos", "isteis", "ieron"],
      imperfecto: ["ía", "ías", "ía", "íamos", "íais", "ían"],
    },
    ir: {
      presente:   ["o", "es", "e", "imos", "ís", "en"],
      preterito:  ["í", "iste", "ió", "imos", "isteis", "ieron"],
      imperfecto: ["ía", "ías", "ía", "íamos", "íais", "ían"],
    },
  };
  const FUT  = ["é", "ás", "á", "emos", "éis", "án"];        // sur l'infinitif
  const COND = ["ía", "ías", "ía", "íamos", "íais", "ían"];   // sur l'infinitif

  function regular(inf) {
    const type = inf.endsWith("ar") ? "ar" : inf.endsWith("er") ? "er" : "ir"; // gère aussi "oír"
    const stem = inf.slice(0, -2);
    const e = END[type];
    return {
      presente:   e.presente.map(x => stem + x),
      preterito:  e.preterito.map(x => stem + x),
      imperfecto: e.imperfecto.map(x => stem + x),
      futuro:     FUT.map(x => inf + x),
      condicional:COND.map(x => inf + x),
    };
  }

  // Irréguliers (tables complètes)
  const IRR = {
    ser: {
      presente: ["soy", "eres", "es", "somos", "sois", "son"],
      preterito: ["fui", "fuiste", "fue", "fuimos", "fuisteis", "fueron"],
      imperfecto: ["era", "eras", "era", "éramos", "erais", "eran"],
      futuro: ["seré", "serás", "será", "seremos", "seréis", "serán"],
      condicional: ["sería", "serías", "sería", "seríamos", "seríais", "serían"],
    },
    estar: {
      presente: ["estoy", "estás", "está", "estamos", "estáis", "están"],
      preterito: ["estuve", "estuviste", "estuvo", "estuvimos", "estuvisteis", "estuvieron"],
      imperfecto: ["estaba", "estabas", "estaba", "estábamos", "estabais", "estaban"],
      futuro: ["estaré", "estarás", "estará", "estaremos", "estaréis", "estarán"],
      condicional: ["estaría", "estarías", "estaría", "estaríamos", "estaríais", "estarían"],
    },
    ir: {
      presente: ["voy", "vas", "va", "vamos", "vais", "van"],
      preterito: ["fui", "fuiste", "fue", "fuimos", "fuisteis", "fueron"],
      imperfecto: ["iba", "ibas", "iba", "íbamos", "ibais", "iban"],
      futuro: ["iré", "irás", "irá", "iremos", "iréis", "irán"],
      condicional: ["iría", "irías", "iría", "iríamos", "iríais", "irían"],
    },
    tener: {
      presente: ["tengo", "tienes", "tiene", "tenemos", "tenéis", "tienen"],
      preterito: ["tuve", "tuviste", "tuvo", "tuvimos", "tuvisteis", "tuvieron"],
      imperfecto: ["tenía", "tenías", "tenía", "teníamos", "teníais", "tenían"],
      futuro: ["tendré", "tendrás", "tendrá", "tendremos", "tendréis", "tendrán"],
      condicional: ["tendría", "tendrías", "tendría", "tendríamos", "tendríais", "tendrían"],
    },
    hacer: {
      presente: ["hago", "haces", "hace", "hacemos", "hacéis", "hacen"],
      preterito: ["hice", "hiciste", "hizo", "hicimos", "hicisteis", "hicieron"],
      imperfecto: ["hacía", "hacías", "hacía", "hacíamos", "hacíais", "hacían"],
      futuro: ["haré", "harás", "hará", "haremos", "haréis", "harán"],
      condicional: ["haría", "harías", "haría", "haríamos", "haríais", "harían"],
    },
    poder: {
      presente: ["puedo", "puedes", "puede", "podemos", "podéis", "pueden"],
      preterito: ["pude", "pudiste", "pudo", "pudimos", "pudisteis", "pudieron"],
      imperfecto: ["podía", "podías", "podía", "podíamos", "podíais", "podían"],
      futuro: ["podré", "podrás", "podrá", "podremos", "podréis", "podrán"],
      condicional: ["podría", "podrías", "podría", "podríamos", "podríais", "podrían"],
    },
    querer: {
      presente: ["quiero", "quieres", "quiere", "queremos", "queréis", "quieren"],
      preterito: ["quise", "quisiste", "quiso", "quisimos", "quisisteis", "quisieron"],
      imperfecto: ["quería", "querías", "quería", "queríamos", "queríais", "querían"],
      futuro: ["querré", "querrás", "querrá", "querremos", "querréis", "querrán"],
      condicional: ["querría", "querrías", "querría", "querríamos", "querríais", "querrían"],
    },
    ver: {
      presente: ["veo", "ves", "ve", "vemos", "veis", "ven"],
      preterito: ["vi", "viste", "vio", "vimos", "visteis", "vieron"],
      imperfecto: ["veía", "veías", "veía", "veíamos", "veíais", "veían"],
      futuro: ["veré", "verás", "verá", "veremos", "veréis", "verán"],
      condicional: ["vería", "verías", "vería", "veríamos", "veríais", "verían"],
    },
    decir: {
      presente: ["digo", "dices", "dice", "decimos", "decís", "dicen"],
      preterito: ["dije", "dijiste", "dijo", "dijimos", "dijisteis", "dijeron"],
      imperfecto: ["decía", "decías", "decía", "decíamos", "decíais", "decían"],
      futuro: ["diré", "dirás", "dirá", "diremos", "diréis", "dirán"],
      condicional: ["diría", "dirías", "diría", "diríamos", "diríais", "dirían"],
    },
    venir: {
      presente: ["vengo", "vienes", "viene", "venimos", "venís", "vienen"],
      preterito: ["vine", "viniste", "vino", "vinimos", "vinisteis", "vinieron"],
      imperfecto: ["venía", "venías", "venía", "veníamos", "veníais", "venían"],
      futuro: ["vendré", "vendrás", "vendrá", "vendremos", "vendréis", "vendrán"],
      condicional: ["vendría", "vendrías", "vendría", "vendríamos", "vendríais", "vendrían"],
    },
    dar: {
      presente: ["doy", "das", "da", "damos", "dais", "dan"],
      preterito: ["di", "diste", "dio", "dimos", "disteis", "dieron"],
      imperfecto: ["daba", "dabas", "daba", "dábamos", "dabais", "daban"],
      futuro: ["daré", "darás", "dará", "daremos", "daréis", "darán"],
      condicional: ["daría", "darías", "daría", "daríamos", "daríais", "darían"],
    },
    saber: {
      presente: ["sé", "sabes", "sabe", "sabemos", "sabéis", "saben"],
      preterito: ["supe", "supiste", "supo", "supimos", "supisteis", "supieron"],
      imperfecto: ["sabía", "sabías", "sabía", "sabíamos", "sabíais", "sabían"],
      futuro: ["sabré", "sabrás", "sabrá", "sabremos", "sabréis", "sabrán"],
      condicional: ["sabría", "sabrías", "sabría", "sabríamos", "sabríais", "sabrían"],
    },
    poner: {
      presente: ["pongo", "pones", "pone", "ponemos", "ponéis", "ponen"],
      preterito: ["puse", "pusiste", "puso", "pusimos", "pusisteis", "pusieron"],
      imperfecto: ["ponía", "ponías", "ponía", "poníamos", "poníais", "ponían"],
      futuro: ["pondré", "pondrás", "pondrá", "pondremos", "pondréis", "pondrán"],
      condicional: ["pondría", "pondrías", "pondría", "pondríamos", "pondríais", "pondrían"],
    },
  };

  // Liste des verbes (fr = sens, irr = irrégulier)
  const LIST = [
    { inf: "ser",        fr: "être (permanent)", irr: true },
    { inf: "estar",      fr: "être (état/lieu)", irr: true },
    { inf: "tener",      fr: "avoir",            irr: true },
    { inf: "hacer",      fr: "faire",            irr: true },
    { inf: "ir",         fr: "aller",            irr: true },
    { inf: "poder",      fr: "pouvoir",          irr: true },
    { inf: "querer",     fr: "vouloir",          irr: true },
    { inf: "ver",        fr: "voir",             irr: true },
    { inf: "decir",      fr: "dire",             irr: true },
    { inf: "venir",      fr: "venir",            irr: true },
    { inf: "dar",        fr: "donner",           irr: true },
    { inf: "saber",      fr: "savoir",           irr: true },
    { inf: "poner",      fr: "mettre",           irr: true },
    { inf: "hablar",     fr: "parler",           irr: false },
    { inf: "comer",      fr: "manger",           irr: false },
    { inf: "vivir",      fr: "vivre",            irr: false },
    { inf: "trabajar",   fr: "travailler",       irr: false },
    { inf: "estudiar",   fr: "étudier",          irr: false },
    { inf: "comprar",    fr: "acheter",          irr: false },
    { inf: "beber",      fr: "boire",            irr: false },
    { inf: "aprender",   fr: "apprendre",        irr: false },
    { inf: "escribir",   fr: "écrire",           irr: false },
    { inf: "viajar",     fr: "voyager",          irr: false },
    { inf: "necesitar",  fr: "avoir besoin de",  irr: false },
    { inf: "tomar",      fr: "prendre",          irr: false },
    { inf: "comprender", fr: "comprendre",       irr: false },
    { inf: "deber",      fr: "devoir",           irr: false },
    { inf: "recibir",    fr: "recevoir",         irr: false },
    { inf: "cocinar",    fr: "cuisiner",         irr: false },
    { inf: "descansar",  fr: "se reposer",       irr: false },
    // --- 30 verbes plus durs (diphtongues, irréguliers, réfléchis) ---
    { inf: "pensar",      fr: "penser",           irr: true },
    { inf: "entender",    fr: "comprendre",       irr: true },
    { inf: "empezar",     fr: "commencer",        irr: true },
    { inf: "perder",      fr: "perdre",           irr: true },
    { inf: "volver",      fr: "revenir",          irr: true },
    { inf: "encontrar",   fr: "trouver",          irr: true },
    { inf: "probar",      fr: "goûter / essayer", irr: true },
    { inf: "dormir",      fr: "dormir",           irr: true },
    { inf: "pedir",       fr: "demander",         irr: true },
    { inf: "sentir",      fr: "sentir",           irr: true },
    { inf: "seguir",      fr: "suivre",           irr: true },
    { inf: "jugar",       fr: "jouer",            irr: true },
    { inf: "conocer",     fr: "connaître",        irr: true },
    { inf: "salir",       fr: "sortir",           irr: true },
    { inf: "traer",       fr: "apporter",         irr: true },
    { inf: "caer",        fr: "tomber",           irr: true },
    { inf: "oír",         fr: "entendre",         irr: true },
    { inf: "leer",        fr: "lire",             irr: true },
    { inf: "levantarse",  fr: "se lever",         irr: true },
    { inf: "acostarse",   fr: "se coucher",       irr: true },
    { inf: "despertarse", fr: "se réveiller",     irr: true },
    { inf: "ducharse",    fr: "se doucher",       irr: true },
    { inf: "vestirse",    fr: "s'habiller",       irr: true },
    { inf: "sentirse",    fr: "se sentir",        irr: true },
    { inf: "divertirse",  fr: "s'amuser",         irr: true },
    { inf: "acordarse",   fr: "se souvenir",      irr: true },
    { inf: "quedarse",    fr: "rester",           irr: true },
    { inf: "entrenarse",  fr: "s'entraîner",      irr: true },
    { inf: "irse",        fr: "s'en aller",       irr: true },
    { inf: "ponerse",     fr: "se mettre",        irr: true },
    // --- Verbes vus en cours (notes de la prof) ---
    { inf: "intentar",    fr: "essayer",          irr: false },
    { inf: "nadar",       fr: "nager",            irr: false },
    { inf: "cenar",       fr: "dîner",            irr: false },
    { inf: "preparar",    fr: "préparer",         irr: false },
    { inf: "limpiar",     fr: "nettoyer",         irr: false },
    { inf: "alquilar",    fr: "louer",            irr: false },
    { inf: "olvidar",     fr: "oublier",          irr: false },
    { inf: "enviar",      fr: "envoyer",          irr: true },
    { inf: "mudarse",     fr: "déménager",        irr: true },
    { inf: "abrigarse",   fr: "se couvrir",       irr: true },
    { inf: "lesionarse",  fr: "se blesser",       irr: true },
    { inf: "quemarse",    fr: "se brûler",        irr: true },
    { inf: "asustarse",   fr: "avoir peur",       irr: true },
    { inf: "caerse",      fr: "tomber",           irr: true },
  ];

  // Passé composé espagnol (pretérito perfecto) = haber (présent) + participe passé
  const HABER = ["he", "has", "ha", "hemos", "habéis", "han"];
  const PART_IRR = { hacer:"hecho", ver:"visto", decir:"dicho", poner:"puesto", escribir:"escrito",
    volver:"vuelto", traer:"traído", caer:"caído", "oír":"oído", leer:"leído" };
  function participio(inf){
    if (PART_IRR[inf]) return PART_IRR[inf];
    const stem = inf.slice(0, -2);
    return inf.slice(-2) === "ar" ? stem + "ado" : stem + "ido";
  }

  // Verbes "durs" : diphtongues (e→ie, o→ue…), irréguliers et réfléchis.
  // On ne surcharge que le présent (et le passé simple / futur si irréguliers) ;
  // imparfait/futur/conditionnel réguliers sont générés. Réfléchis = pronom + forme.
  const RP_ES = ["me", "te", "se", "nos", "os", "se"];
  const HARD = {
    pensar:{pres:["pienso","piensas","piensa","pensamos","pensáis","piensan"]},
    entender:{pres:["entiendo","entiendes","entiende","entendemos","entendéis","entienden"]},
    empezar:{pres:["empiezo","empiezas","empieza","empezamos","empezáis","empiezan"], pret:["empecé","empezaste","empezó","empezamos","empezasteis","empezaron"]},
    perder:{pres:["pierdo","pierdes","pierde","perdemos","perdéis","pierden"]},
    volver:{pres:["vuelvo","vuelves","vuelve","volvemos","volvéis","vuelven"]},
    encontrar:{pres:["encuentro","encuentras","encuentra","encontramos","encontráis","encuentran"]},
    probar:{pres:["pruebo","pruebas","prueba","probamos","probáis","prueban"]},
    dormir:{pres:["duermo","duermes","duerme","dormimos","dormís","duermen"], pret:["dormí","dormiste","durmió","dormimos","dormisteis","durmieron"]},
    pedir:{pres:["pido","pides","pide","pedimos","pedís","piden"], pret:["pedí","pediste","pidió","pedimos","pedisteis","pidieron"]},
    sentir:{pres:["siento","sientes","siente","sentimos","sentís","sienten"], pret:["sentí","sentiste","sintió","sentimos","sentisteis","sintieron"]},
    seguir:{pres:["sigo","sigues","sigue","seguimos","seguís","siguen"], pret:["seguí","seguiste","siguió","seguimos","seguisteis","siguieron"]},
    jugar:{pres:["juego","juegas","juega","jugamos","jugáis","juegan"], pret:["jugué","jugaste","jugó","jugamos","jugasteis","jugaron"]},
    conocer:{pres:["conozco","conoces","conoce","conocemos","conocéis","conocen"]},
    salir:{pres:["salgo","sales","sale","salimos","salís","salen"], futStem:"saldr"},
    traer:{pres:["traigo","traes","trae","traemos","traéis","traen"], pret:["traje","trajiste","trajo","trajimos","trajisteis","trajeron"]},
    caer:{pres:["caigo","caes","cae","caemos","caéis","caen"], pret:["caí","caíste","cayó","caímos","caísteis","cayeron"]},
    "oír":{pres:["oigo","oyes","oye","oímos","oís","oyen"], pret:["oí","oíste","oyó","oímos","oísteis","oyeron"], futStem:"oir"},
    leer:{pres:["leo","lees","lee","leemos","leéis","leen"], pret:["leí","leíste","leyó","leímos","leísteis","leyeron"]},
    // Réfléchis
    levantarse:{reflex:true, base:"levantar"},
    acostarse:{reflex:true, base:"acostar", pres:["acuesto","acuestas","acuesta","acostamos","acostáis","acuestan"]},
    despertarse:{reflex:true, base:"despertar", pres:["despierto","despiertas","despierta","despertamos","despertáis","despiertan"]},
    ducharse:{reflex:true, base:"duchar"},
    vestirse:{reflex:true, base:"vestir", pres:["visto","vistes","viste","vestimos","vestís","visten"], pret:["vestí","vestiste","vistió","vestimos","vestisteis","vistieron"]},
    sentirse:{reflex:true, base:"sentir", pres:["siento","sientes","siente","sentimos","sentís","sienten"], pret:["sentí","sentiste","sintió","sentimos","sentisteis","sintieron"]},
    divertirse:{reflex:true, base:"divertir", pres:["divierto","diviertes","divierte","divertimos","divertís","divierten"], pret:["divertí","divertiste","divirtió","divertimos","divertisteis","divirtieron"]},
    acordarse:{reflex:true, base:"acordar", pres:["acuerdo","acuerdas","acuerda","acordamos","acordáis","acuerdan"]},
    quedarse:{reflex:true, base:"quedar"},
    entrenarse:{reflex:true, base:"entrenar"},
    irse:{reflex:true, base:"ir"},
    ponerse:{reflex:true, base:"poner"},
    enviar:{pres:["envío","envías","envía","enviamos","enviáis","envían"]},
    mudarse:{reflex:true, base:"mudar"},
    abrigarse:{reflex:true, base:"abrigar", pret:["abrigué","abrigaste","abrigó","abrigamos","abrigasteis","abrigaron"]},
    lesionarse:{reflex:true, base:"lesionar"},
    quemarse:{reflex:true, base:"quemar"},
    asustarse:{reflex:true, base:"asustar"},
    caerse:{reflex:true, base:"caer", pres:["caigo","caes","cae","caemos","caéis","caen"], pret:["caí","caíste","cayó","caímos","caísteis","cayeron"]},
  };
  // Gérondif (estar + -ando / -iendo)
  const ESTAR_PRES = ["estoy", "estás", "está", "estamos", "estáis", "están"];
  const GER_IRR = { leer:"leyendo", caer:"cayendo", "oír":"oyendo", traer:"trayendo", ir:"yendo",
    dormir:"durmiendo", pedir:"pidiendo", sentir:"sintiendo", seguir:"siguiendo", decir:"diciendo",
    venir:"viniendo", poder:"pudiendo", vestir:"vistiendo", divertir:"divirtiendo" };
  function gerundio(inf){
    if (GER_IRR[inf]) return GER_IRR[inf];
    return inf.slice(0, -2) + (inf.slice(-2) === "ar" ? "ando" : "iendo");
  }
  function baseFormsOf(inf){ return IRR[inf] ? Object.assign({}, IRR[inf]) : regular(inf); }
  function buildHard(inf){
    const h = HARD[inf];
    const r = baseFormsOf(h.base || inf);
    const out = {
      presente:    h.pres || r.presente,
      preterito:   h.pret || r.preterito,
      imperfecto:  r.imperfecto,
      futuro:      h.futStem ? FUT.map(x => h.futStem + x) : r.futuro,
      condicional: h.futStem ? COND.map(x => h.futStem + x) : r.condicional,
    };
    if (h.reflex) { for (const k in out) out[k] = out[k].map((f, i) => RP_ES[i] + " " + f); }
    return out;
  }
  function forms(inf) {
    const h = HARD[inf];
    const base = h ? buildHard(inf) : (IRR[inf] || regular(inf));
    const pp = participio(h && h.base ? h.base : inf);
    const perfecto = (h && h.reflex)
      ? RP_ES.map((rp, i) => rp + " " + HABER[i] + " " + pp)
      : HABER.map(x => x + " " + pp);
    const ger = gerundio(h && h.base ? h.base : inf);
    const gerForms = ESTAR_PRES.map((e, i) => ((h && h.reflex) ? RP_ES[i] + " " : "") + e + " " + ger);
    return Object.assign({}, base, { perfecto, gerundio: gerForms });
  }

  /* ---------- Traductions françaises (par pronom / temps) ---------- */
  const FRP = ["je", "tu", "il/elle", "nous", "vous", "ils/elles"];
  function wp(i, f){ return (i===0 && /^[aeiouàâäéèêëîïôûüyh]/i.test(f)) ? "j'"+f : FRP[i]+" "+f; }
  const FUT_E = ["ai","as","a","ons","ez","ont"];
  const CND_E = ["ais","ais","ait","ions","iez","aient"];
  const IMP_E = ["ais","ais","ait","ions","iez","aient"];
  const AVOIR_PC = ["j'ai","tu as","il/elle a","nous avons","vous avez","ils/elles ont"];
  const ETRE_PC  = ["je suis","tu es","il/elle est","nous sommes","vous êtes","ils/elles sont"];
  const frFut = s => FUT_E.map((e,i)=>wp(i,s+e));
  const frCnd = s => CND_E.map((e,i)=>wp(i,s+e));
  const frImp = s => IMP_E.map((e,i)=>wp(i,s+e));
  const frPC  = (aux,pp) => (aux==="être"?ETRE_PC:AVOIR_PC).map((a,i)=> a+" "+pp+(aux==="être"&&i>=3?"s":""));

  const SER   = ["je suis","tu es","il/elle est","nous sommes","vous êtes","ils/elles sont"];
  const FR = {
    ser:{pres:SER, impStem:"ét", futStem:"ser", aux:"avoir", pp:"été"},
    estar:{pres:SER, impStem:"ét", futStem:"ser", aux:"avoir", pp:"été"},
    tener:{pres:["j'ai","tu as","il/elle a","nous avons","vous avez","ils/elles ont"], impStem:"av", futStem:"aur", aux:"avoir", pp:"eu"},
    hacer:{pres:["je fais","tu fais","il/elle fait","nous faisons","vous faites","ils/elles font"], impStem:"fais", futStem:"fer", aux:"avoir", pp:"fait"},
    ir:{pres:["je vais","tu vas","il/elle va","nous allons","vous allez","ils/elles vont"], impStem:"all", futStem:"ir", aux:"être", pp:"allé"},
    poder:{pres:["je peux","tu peux","il/elle peut","nous pouvons","vous pouvez","ils/elles peuvent"], impStem:"pouv", futStem:"pourr", aux:"avoir", pp:"pu"},
    querer:{pres:["je veux","tu veux","il/elle veut","nous voulons","vous voulez","ils/elles veulent"], impStem:"voul", futStem:"voudr", aux:"avoir", pp:"voulu"},
    ver:{pres:["je vois","tu vois","il/elle voit","nous voyons","vous voyez","ils/elles voient"], impStem:"voy", futStem:"verr", aux:"avoir", pp:"vu"},
    decir:{pres:["je dis","tu dis","il/elle dit","nous disons","vous dites","ils/elles disent"], impStem:"dis", futStem:"dir", aux:"avoir", pp:"dit"},
    venir:{pres:["je viens","tu viens","il/elle vient","nous venons","vous venez","ils/elles viennent"], impStem:"ven", futStem:"viendr", aux:"être", pp:"venu"},
    dar:{pres:["je donne","tu donnes","il/elle donne","nous donnons","vous donnez","ils/elles donnent"], impStem:"donn", futStem:"donner", aux:"avoir", pp:"donné"},
    saber:{pres:["je sais","tu sais","il/elle sait","nous savons","vous savez","ils/elles savent"], impStem:"sav", futStem:"saur", aux:"avoir", pp:"su"},
    poner:{pres:["je mets","tu mets","il/elle met","nous mettons","vous mettez","ils/elles mettent"], impStem:"mett", futStem:"mettr", aux:"avoir", pp:"mis"},
    hablar:{pres:["je parle","tu parles","il/elle parle","nous parlons","vous parlez","ils/elles parlent"], impStem:"parl", futStem:"parler", aux:"avoir", pp:"parlé"},
    comer:{pres:["je mange","tu manges","il/elle mange","nous mangeons","vous mangez","ils/elles mangent"], impBare:["mangeais","mangeais","mangeait","mangions","mangiez","mangeaient"], futStem:"manger", aux:"avoir", pp:"mangé"},
    vivir:{pres:["je vis","tu vis","il/elle vit","nous vivons","vous vivez","ils/elles vivent"], impStem:"viv", futStem:"vivr", aux:"avoir", pp:"vécu"},
    trabajar:{pres:["je travaille","tu travailles","il/elle travaille","nous travaillons","vous travaillez","ils/elles travaillent"], impStem:"travaill", futStem:"travailler", aux:"avoir", pp:"travaillé"},
    estudiar:{pres:["j'étudie","tu étudies","il/elle étudie","nous étudions","vous étudiez","ils/elles étudient"], impStem:"étudi", futStem:"étudier", aux:"avoir", pp:"étudié"},
    comprar:{pres:["j'achète","tu achètes","il/elle achète","nous achetons","vous achetez","ils/elles achètent"], impStem:"achet", futStem:"achèter", aux:"avoir", pp:"acheté"},
    beber:{pres:["je bois","tu bois","il/elle boit","nous buvons","vous buvez","ils/elles boivent"], impStem:"buv", futStem:"boir", aux:"avoir", pp:"bu"},
    aprender:{pres:["j'apprends","tu apprends","il/elle apprend","nous apprenons","vous apprenez","ils/elles apprennent"], impStem:"appren", futStem:"apprendr", aux:"avoir", pp:"appris"},
    escribir:{pres:["j'écris","tu écris","il/elle écrit","nous écrivons","vous écrivez","ils/elles écrivent"], impStem:"écriv", futStem:"écrir", aux:"avoir", pp:"écrit"},
    viajar:{pres:["je voyage","tu voyages","il/elle voyage","nous voyageons","vous voyagez","ils/elles voyagent"], impBare:["voyageais","voyageais","voyageait","voyagions","voyagiez","voyageaient"], futStem:"voyager", aux:"avoir", pp:"voyagé"},
    tomar:{pres:["je prends","tu prends","il/elle prend","nous prenons","vous prenez","ils/elles prennent"], impStem:"pren", futStem:"prendr", aux:"avoir", pp:"pris"},
    comprender:{pres:["je comprends","tu comprends","il/elle comprend","nous comprenons","vous comprenez","ils/elles comprennent"], impStem:"compren", futStem:"comprendr", aux:"avoir", pp:"compris"},
    deber:{pres:["je dois","tu dois","il/elle doit","nous devons","vous devez","ils/elles doivent"], impStem:"dev", futStem:"devr", aux:"avoir", pp:"dû"},
    recibir:{pres:["je reçois","tu reçois","il/elle reçoit","nous recevons","vous recevez","ils/elles reçoivent"], impStem:"recev", futStem:"recevr", aux:"avoir", pp:"reçu"},
    cocinar:{pres:["je cuisine","tu cuisines","il/elle cuisine","nous cuisinons","vous cuisinez","ils/elles cuisinent"], impStem:"cuisin", futStem:"cuisiner", aux:"avoir", pp:"cuisiné"},
    pensar:{pres:["je pense","tu penses","il/elle pense","nous pensons","vous pensez","ils/elles pensent"], impStem:"pens", futStem:"penser", aux:"avoir", pp:"pensé"},
    entender:{pres:["je comprends","tu comprends","il/elle comprend","nous comprenons","vous comprenez","ils/elles comprennent"], impStem:"compren", futStem:"comprendr", aux:"avoir", pp:"compris"},
    empezar:{pres:["je commence","tu commences","il/elle commence","nous commençons","vous commencez","ils/elles commencent"], impBare:["commençais","commençais","commençait","commencions","commenciez","commençaient"], futStem:"commencer", aux:"avoir", pp:"commencé"},
    perder:{pres:["je perds","tu perds","il/elle perd","nous perdons","vous perdez","ils/elles perdent"], impStem:"perd", futStem:"perdr", aux:"avoir", pp:"perdu"},
    volver:{pres:["je reviens","tu reviens","il/elle revient","nous revenons","vous revenez","ils/elles reviennent"], impStem:"reven", futStem:"reviendr", aux:"être", pp:"revenu"},
    encontrar:{pres:["je trouve","tu trouves","il/elle trouve","nous trouvons","vous trouvez","ils/elles trouvent"], impStem:"trouv", futStem:"trouver", aux:"avoir", pp:"trouvé"},
    probar:{pres:["je goûte","tu goûtes","il/elle goûte","nous goûtons","vous goûtez","ils/elles goûtent"], impStem:"goût", futStem:"goûter", aux:"avoir", pp:"goûté"},
    dormir:{pres:["je dors","tu dors","il/elle dort","nous dormons","vous dormez","ils/elles dorment"], impStem:"dorm", futStem:"dormir", aux:"avoir", pp:"dormi"},
    pedir:{pres:["je demande","tu demandes","il/elle demande","nous demandons","vous demandez","ils/elles demandent"], impStem:"demand", futStem:"demander", aux:"avoir", pp:"demandé"},
    sentir:{pres:["je sens","tu sens","il/elle sent","nous sentons","vous sentez","ils/elles sentent"], impStem:"sent", futStem:"sentir", aux:"avoir", pp:"senti"},
    seguir:{pres:["je suis","tu suis","il/elle suit","nous suivons","vous suivez","ils/elles suivent"], impStem:"suiv", futStem:"suivr", aux:"avoir", pp:"suivi"},
    jugar:{pres:["je joue","tu joues","il/elle joue","nous jouons","vous jouez","ils/elles jouent"], impStem:"jou", futStem:"jouer", aux:"avoir", pp:"joué"},
    conocer:{pres:["je connais","tu connais","il/elle connaît","nous connaissons","vous connaissez","ils/elles connaissent"], impStem:"connaiss", futStem:"connaîtr", aux:"avoir", pp:"connu"},
    salir:{pres:["je sors","tu sors","il/elle sort","nous sortons","vous sortez","ils/elles sortent"], impStem:"sort", futStem:"sortir", aux:"être", pp:"sorti"},
    traer:{pres:["j'apporte","tu apportes","il/elle apporte","nous apportons","vous apportez","ils/elles apportent"], impStem:"apport", futStem:"apporter", aux:"avoir", pp:"apporté"},
    caer:{pres:["je tombe","tu tombes","il/elle tombe","nous tombons","vous tombez","ils/elles tombent"], impStem:"tomb", futStem:"tomber", aux:"être", pp:"tombé"},
    "oír":{pres:["j'entends","tu entends","il/elle entend","nous entendons","vous entendez","ils/elles entendent"], impStem:"entend", futStem:"entendr", aux:"avoir", pp:"entendu"},
    intentar:{pres:["j'essaie","tu essaies","il/elle essaie","nous essayons","vous essayez","ils/elles essaient"], impStem:"essay", futStem:"essaier", aux:"avoir", pp:"essayé"},
    nadar:{pres:["je nage","tu nages","il/elle nage","nous nageons","vous nagez","ils/elles nagent"], impBare:["nageais","nageais","nageait","nagions","nagiez","nageaient"], futStem:"nager", aux:"avoir", pp:"nagé"},
    cenar:{pres:["je dîne","tu dînes","il/elle dîne","nous dînons","vous dînez","ils/elles dînent"], impStem:"dîn", futStem:"dîner", aux:"avoir", pp:"dîné"},
    preparar:{pres:["je prépare","tu prépares","il/elle prépare","nous préparons","vous préparez","ils/elles préparent"], impStem:"prépar", futStem:"préparer", aux:"avoir", pp:"préparé"},
    limpiar:{pres:["je nettoie","tu nettoies","il/elle nettoie","nous nettoyons","vous nettoyez","ils/elles nettoient"], impStem:"nettoy", futStem:"nettoier", aux:"avoir", pp:"nettoyé"},
    alquilar:{pres:["je loue","tu loues","il/elle loue","nous louons","vous louez","ils/elles louent"], impStem:"lou", futStem:"louer", aux:"avoir", pp:"loué"},
    olvidar:{pres:["j'oublie","tu oublies","il/elle oublie","nous oublions","vous oubliez","ils/elles oublient"], impStem:"oubli", futStem:"oublier", aux:"avoir", pp:"oublié"},
    enviar:{pres:["j'envoie","tu envoies","il/elle envoie","nous envoyons","vous envoyez","ils/elles envoient"], impStem:"envoy", futStem:"enverr", aux:"avoir", pp:"envoyé"},
    mudarse:{pres:["je déménage","tu déménages","il/elle déménage","nous déménageons","vous déménagez","ils/elles déménagent"], impBare:["déménageais","déménageais","déménageait","déménagions","déménagiez","déménageaient"], futStem:"déménager", aux:"avoir", pp:"déménagé"},
    caerse:{pres:["je tombe","tu tombes","il/elle tombe","nous tombons","vous tombez","ils/elles tombent"], impStem:"tomb", futStem:"tomber", aux:"être", pp:"tombé"},
    leer:{pres:["je lis","tu lis","il/elle lit","nous lisons","vous lisez","ils/elles lisent"], impStem:"lis", futStem:"lir", aux:"avoir", pp:"lu"},
  };
  const FR_SPECIAL = {
    necesitar:{
      presente:["j'ai besoin","tu as besoin","il/elle a besoin","nous avons besoin","vous avez besoin","ils/elles ont besoin"],
      preterito:["j'ai eu besoin","tu as eu besoin","il/elle a eu besoin","nous avons eu besoin","vous avez eu besoin","ils/elles ont eu besoin"],
      perfecto:["j'ai eu besoin","tu as eu besoin","il/elle a eu besoin","nous avons eu besoin","vous avez eu besoin","ils/elles ont eu besoin"],
      imperfecto:["j'avais besoin","tu avais besoin","il/elle avait besoin","nous avions besoin","vous aviez besoin","ils/elles avaient besoin"],
      futuro:["j'aurai besoin","tu auras besoin","il/elle aura besoin","nous aurons besoin","vous aurez besoin","ils/elles auront besoin"],
      condicional:["j'aurais besoin","tu aurais besoin","il/elle aurait besoin","nous aurions besoin","vous auriez besoin","ils/elles auraient besoin"],
    },
    descansar:{
      presente:["je me repose","tu te reposes","il/elle se repose","nous nous reposons","vous vous reposez","ils/elles se reposent"],
      preterito:["je me suis reposé","tu t'es reposé","il/elle s'est reposé","nous nous sommes reposés","vous vous êtes reposés","ils/elles se sont reposés"],
      perfecto:["je me suis reposé","tu t'es reposé","il/elle s'est reposé","nous nous sommes reposés","vous vous êtes reposés","ils/elles se sont reposés"],
      imperfecto:["je me reposais","tu te reposais","il/elle se reposait","nous nous reposions","vous vous reposiez","ils/elles se reposaient"],
      futuro:["je me reposerai","tu te reposeras","il/elle se reposera","nous nous reposerons","vous vous reposerez","ils/elles se reposeront"],
      condicional:["je me reposerais","tu te reposerais","il/elle se reposerait","nous nous reposerions","vous vous reposeriez","ils/elles se reposeraient"],
    },
    levantarse:{
      presente:["je me lève","tu te lèves","il/elle se lève","nous nous levons","vous vous levez","ils/elles se lèvent"],
      preterito:["je me suis levé","tu t'es levé","il/elle s'est levé","nous nous sommes levés","vous vous êtes levés","ils/elles se sont levés"],
      perfecto:["je me suis levé","tu t'es levé","il/elle s'est levé","nous nous sommes levés","vous vous êtes levés","ils/elles se sont levés"],
      imperfecto:["je me levais","tu te levais","il/elle se levait","nous nous levions","vous vous leviez","ils/elles se levaient"],
      futuro:["je me lèverai","tu te lèveras","il/elle se lèvera","nous nous lèverons","vous vous lèverez","ils/elles se lèveront"],
      condicional:["je me lèverais","tu te lèverais","il/elle se lèverait","nous nous lèverions","vous vous lèveriez","ils/elles se lèveraient"],
    },
    acostarse:{
      presente:["je me couche","tu te couches","il/elle se couche","nous nous couchons","vous vous couchez","ils/elles se couchent"],
      preterito:["je me suis couché","tu t'es couché","il/elle s'est couché","nous nous sommes couchés","vous vous êtes couchés","ils/elles se sont couchés"],
      perfecto:["je me suis couché","tu t'es couché","il/elle s'est couché","nous nous sommes couchés","vous vous êtes couchés","ils/elles se sont couchés"],
      imperfecto:["je me couchais","tu te couchais","il/elle se couchait","nous nous couchions","vous vous couchiez","ils/elles se couchaient"],
      futuro:["je me coucherai","tu te coucheras","il/elle se couchera","nous nous coucherons","vous vous coucherez","ils/elles se coucheront"],
      condicional:["je me coucherais","tu te coucherais","il/elle se coucherait","nous nous coucherions","vous vous coucheriez","ils/elles se coucheraient"],
    },
    despertarse:{
      presente:["je me réveille","tu te réveilles","il/elle se réveille","nous nous réveillons","vous vous réveillez","ils/elles se réveillent"],
      preterito:["je me suis réveillé","tu t'es réveillé","il/elle s'est réveillé","nous nous sommes réveillés","vous vous êtes réveillés","ils/elles se sont réveillés"],
      perfecto:["je me suis réveillé","tu t'es réveillé","il/elle s'est réveillé","nous nous sommes réveillés","vous vous êtes réveillés","ils/elles se sont réveillés"],
      imperfecto:["je me réveillais","tu te réveillais","il/elle se réveillait","nous nous réveillions","vous vous réveilliez","ils/elles se réveillaient"],
      futuro:["je me réveillerai","tu te réveilleras","il/elle se réveillera","nous nous réveillerons","vous vous réveillerez","ils/elles se réveilleront"],
      condicional:["je me réveillerais","tu te réveillerais","il/elle se réveillerait","nous nous réveillerions","vous vous réveilleriez","ils/elles se réveilleraient"],
    },
    ducharse:{
      presente:["je me douche","tu te douches","il/elle se douche","nous nous douchons","vous vous douchez","ils/elles se douchent"],
      preterito:["je me suis douché","tu t'es douché","il/elle s'est douché","nous nous sommes douchés","vous vous êtes douchés","ils/elles se sont douchés"],
      perfecto:["je me suis douché","tu t'es douché","il/elle s'est douché","nous nous sommes douchés","vous vous êtes douchés","ils/elles se sont douchés"],
      imperfecto:["je me douchais","tu te douchais","il/elle se douchait","nous nous douchions","vous vous douchiez","ils/elles se douchaient"],
      futuro:["je me doucherai","tu te doucheras","il/elle se douchera","nous nous doucherons","vous vous doucherez","ils/elles se doucheront"],
      condicional:["je me doucherais","tu te doucherais","il/elle se doucherait","nous nous doucherions","vous vous doucheriez","ils/elles se doucheraient"],
    },
    vestirse:{
      presente:["je m'habille","tu t'habilles","il/elle s'habille","nous nous habillons","vous vous habillez","ils/elles s'habillent"],
      preterito:["je me suis habillé","tu t'es habillé","il/elle s'est habillé","nous nous sommes habillés","vous vous êtes habillés","ils/elles se sont habillés"],
      perfecto:["je me suis habillé","tu t'es habillé","il/elle s'est habillé","nous nous sommes habillés","vous vous êtes habillés","ils/elles se sont habillés"],
      imperfecto:["je m'habillais","tu t'habillais","il/elle s'habillait","nous nous habillions","vous vous habilliez","ils/elles s'habillaient"],
      futuro:["je m'habillerai","tu t'habilleras","il/elle s'habillera","nous nous habillerons","vous vous habillerez","ils/elles s'habilleront"],
      condicional:["je m'habillerais","tu t'habillerais","il/elle s'habillerait","nous nous habillerions","vous vous habilleriez","ils/elles s'habilleraient"],
    },
    sentirse:{
      presente:["je me sens","tu te sens","il/elle se sent","nous nous sentons","vous vous sentez","ils/elles se sentent"],
      preterito:["je me suis senti","tu t'es senti","il/elle s'est senti","nous nous sommes sentis","vous vous êtes sentis","ils/elles se sont sentis"],
      perfecto:["je me suis senti","tu t'es senti","il/elle s'est senti","nous nous sommes sentis","vous vous êtes sentis","ils/elles se sont sentis"],
      imperfecto:["je me sentais","tu te sentais","il/elle se sentait","nous nous sentions","vous vous sentiez","ils/elles se sentaient"],
      futuro:["je me sentirai","tu te sentiras","il/elle se sentira","nous nous sentirons","vous vous sentirez","ils/elles se sentiront"],
      condicional:["je me sentirais","tu te sentirais","il/elle se sentirait","nous nous sentirions","vous vous sentiriez","ils/elles se sentiraient"],
    },
    divertirse:{
      presente:["je m'amuse","tu t'amuses","il/elle s'amuse","nous nous amusons","vous vous amusez","ils/elles s'amusent"],
      preterito:["je me suis amusé","tu t'es amusé","il/elle s'est amusé","nous nous sommes amusés","vous vous êtes amusés","ils/elles se sont amusés"],
      perfecto:["je me suis amusé","tu t'es amusé","il/elle s'est amusé","nous nous sommes amusés","vous vous êtes amusés","ils/elles se sont amusés"],
      imperfecto:["je m'amusais","tu t'amusais","il/elle s'amusait","nous nous amusions","vous vous amusiez","ils/elles s'amusaient"],
      futuro:["je m'amuserai","tu t'amuseras","il/elle s'amusera","nous nous amuserons","vous vous amuserez","ils/elles s'amuseront"],
      condicional:["je m'amuserais","tu t'amuserais","il/elle s'amuserait","nous nous amuserions","vous vous amuseriez","ils/elles s'amuseraient"],
    },
    acordarse:{
      presente:["je me souviens","tu te souviens","il/elle se souvient","nous nous souvenons","vous vous souvenez","ils/elles se souviennent"],
      preterito:["je me suis souvenu","tu t'es souvenu","il/elle s'est souvenu","nous nous sommes souvenus","vous vous êtes souvenus","ils/elles se sont souvenus"],
      perfecto:["je me suis souvenu","tu t'es souvenu","il/elle s'est souvenu","nous nous sommes souvenus","vous vous êtes souvenus","ils/elles se sont souvenus"],
      imperfecto:["je me souvenais","tu te souvenais","il/elle se souvenait","nous nous souvenions","vous vous souveniez","ils/elles se souvenaient"],
      futuro:["je me souviendrai","tu te souviendras","il/elle se souviendra","nous nous souviendrons","vous vous souviendrez","ils/elles se souviendront"],
      condicional:["je me souviendrais","tu te souviendrais","il/elle se souviendrait","nous nous souviendrions","vous vous souviendriez","ils/elles se souviendraient"],
    },
    quedarse:{
      presente:["je reste","tu restes","il/elle reste","nous restons","vous restez","ils/elles restent"],
      preterito:["je suis resté","tu es resté","il/elle est resté","nous sommes restés","vous êtes restés","ils/elles sont restés"],
      perfecto:["je suis resté","tu es resté","il/elle est resté","nous sommes restés","vous êtes restés","ils/elles sont restés"],
      imperfecto:["je restais","tu restais","il/elle restait","nous restions","vous restiez","ils/elles restaient"],
      futuro:["je resterai","tu resteras","il/elle restera","nous resterons","vous resterez","ils/elles resteront"],
      condicional:["je resterais","tu resterais","il/elle resterait","nous resterions","vous resteriez","ils/elles resteraient"],
    },
    entrenarse:{
      presente:["je m'entraîne","tu t'entraînes","il/elle s'entraîne","nous nous entraînons","vous vous entraînez","ils/elles s'entraînent"],
      preterito:["je me suis entraîné","tu t'es entraîné","il/elle s'est entraîné","nous nous sommes entraînés","vous vous êtes entraînés","ils/elles se sont entraînés"],
      perfecto:["je me suis entraîné","tu t'es entraîné","il/elle s'est entraîné","nous nous sommes entraînés","vous vous êtes entraînés","ils/elles se sont entraînés"],
      imperfecto:["je m'entraînais","tu t'entraînais","il/elle s'entraînait","nous nous entraînions","vous vous entraîniez","ils/elles s'entraînaient"],
      futuro:["je m'entraînerai","tu t'entraîneras","il/elle s'entraînera","nous nous entraînerons","vous vous entraînerez","ils/elles s'entraîneront"],
      condicional:["je m'entraînerais","tu t'entraînerais","il/elle s'entraînerait","nous nous entraînerions","vous vous entraîneriez","ils/elles s'entraîneraient"],
    },
    irse:{
      presente:["je m'en vais","tu t'en vas","il/elle s'en va","nous nous en allons","vous vous en allez","ils/elles s'en vont"],
      preterito:["je m'en suis allé","tu t'en es allé","il/elle s'en est allé","nous nous en sommes allés","vous vous en êtes allés","ils/elles s'en sont allés"],
      perfecto:["je m'en suis allé","tu t'en es allé","il/elle s'en est allé","nous nous en sommes allés","vous vous en êtes allés","ils/elles s'en sont allés"],
      imperfecto:["je m'en allais","tu t'en allais","il/elle s'en allait","nous nous en allions","vous vous en alliez","ils/elles s'en allaient"],
      futuro:["je m'en irai","tu t'en iras","il/elle s'en ira","nous nous en irons","vous vous en irez","ils/elles s'en iront"],
      condicional:["je m'en irais","tu t'en irais","il/elle s'en irait","nous nous en irions","vous vous en iriez","ils/elles s'en iraient"],
    },
    ponerse:{
      presente:["je me mets","tu te mets","il/elle se met","nous nous mettons","vous vous mettez","ils/elles se mettent"],
      preterito:["je me suis mis","tu t'es mis","il/elle s'est mis","nous nous sommes mis","vous vous êtes mis","ils/elles se sont mis"],
      perfecto:["je me suis mis","tu t'es mis","il/elle s'est mis","nous nous sommes mis","vous vous êtes mis","ils/elles se sont mis"],
      imperfecto:["je me mettais","tu te mettais","il/elle se mettait","nous nous mettions","vous vous mettiez","ils/elles se mettaient"],
      futuro:["je me mettrai","tu te mettras","il/elle se mettra","nous nous mettrons","vous vous mettrez","ils/elles se mettront"],
      condicional:["je me mettrais","tu te mettrais","il/elle se mettrait","nous nous mettrions","vous vous mettriez","ils/elles se mettraient"],
    },
  };
  // Réfléchis français générés : { verb (sans pronom), pres, impStem, futStem, pp }
  const FR_RP = ["me","te","se","nous","vous","se"];
  const el = (rp, f) => (/^[aeiouàâäéèêëîïôûüyh]/i.test(f) && rp.length===2 && rp!=="se" ? rp[0]+"'" : rp==="se" && /^[aeiouàâäéèêëîïôûüyh]/i.test(f) ? "s'" : rp+" ") + f;
  const FRS = ["je","tu","il/elle","nous","vous","ils/elles"];
  function frRefl(d){
    const mk = arr => arr.map((f,i)=> FRS[i]+" "+el(FR_RP[i], f));
    const pc = ["je me suis","tu t'es","il/elle s'est","nous nous sommes","vous vous êtes","ils/elles se sont"].map((a,i)=>a+" "+d.pp+(i>=3?"s":""));
    return {
      presente: mk(d.pres),
      preterito: pc, perfecto: pc.slice(),
      imperfecto: mk(IMP_E.map(e=>d.impStem+e)),
      futuro: mk(FUT_E.map(e=>d.futStem+e)),
      condicional: mk(CND_E.map(e=>d.futStem+e)),
    };
  }
  const FR_REFL = {
    abrigarse:{pres:["couvre","couvres","couvre","couvrons","couvrez","couvrent"], impStem:"couvr", futStem:"couvrir", pp:"couvert"},
    lesionarse:{pres:["blesse","blesses","blesse","blessons","blessez","blessent"], impStem:"bless", futStem:"blesser", pp:"blessé"},
    quemarse:{pres:["brûle","brûles","brûle","brûlons","brûlez","brûlent"], impStem:"brûl", futStem:"brûler", pp:"brûlé"},
  };
  // « avoir peur » = formes d'avoir + « peur »
  function frPeur(){
    const t = frFormsBase("tener"); const o = {};
    for (const k in t) o[k] = t[k].map(f => f + " peur");
    return o;
  }
  // Présent continu : « je suis en train de + infinitif »
  function frGer(inf){
    const v = LIST.find(x => x.inf === inf);
    if (!v) return null;
    let m = v.fr.split(" (")[0].split(" /")[0].trim();
    const refl = /^(se |s')/.test(m);
    if (refl) m = m.replace(/^se |^s'/, "");
    return SER.map((etre, i) => {
      const verb = refl ? el(FR_RP[i], m) : m;
      const de = /^[aeiouàâäéèêëîïôûüyh]/i.test(verb) ? "d'" : "de ";
      return etre + " en train " + de + verb;
    });
  }
  function frForms(inf){
    const out = frFormsBase(inf);
    if (!out) return null;
    return Object.assign({}, out, { gerundio: frGer(inf) || [] });
  }
  function frFormsBase(inf){
    if(FR_SPECIAL[inf]) return FR_SPECIAL[inf];
    if(FR_REFL[inf]) return frRefl(FR_REFL[inf]);
    if(inf === "asustarse") return frPeur();
    const d = FR[inf];
    if(!d) return null;
    const pc = frPC(d.aux, d.pp);
    return {
      presente: d.pres.slice(),
      preterito: pc,
      perfecto: pc.slice(),   // même traduction FR que le passé simple (j'ai mangé)
      imperfecto: d.impBare ? d.impBare.map((f,i)=>wp(i,f)) : frImp(d.impStem),
      futuro: frFut(d.futStem),
      condicional: frCnd(d.futStem),
    };
  }


  /* ---------- Exemples : même phrase à tous les temps (tableaux) ----------
     s = état / durée (l'an dernier, cette année…) · a = action (hier, aujourd'hui…) */
  const MARK = {
    a: { presente:["Todos los días","Tous les jours"], preterito:["Ayer","Hier"], perfecto:["Hoy","Aujourd'hui"],
         imperfecto:["De pequeño,","Quand j'étais petit,"], futuro:["Mañana","Demain"],
         condicional:["Si pudiera,","Si je pouvais,"], gerundio:["Ahora mismo","En ce moment"] },
    s: { presente:["Hoy en día","Aujourd'hui"], preterito:["El año pasado","L'an dernier"], perfecto:["Este año","Cette année"],
         imperfecto:["Antes","Avant"], futuro:["El año que viene","L'an prochain"],
         condicional:["En otra vida,","Dans une autre vie,"], gerundio:["Esta semana","Cette semaine"] },
  };
  const EX = {
    ser:["s","profesor de español","professeur d'espagnol"], estar:["s","en Ibiza","à Ibiza"],
    tener:["s","un perro","un chien"], hacer:["a","deporte","du sport"], ir:["a","a la playa","à la plage"],
    poder:["s","hablar con mi familia","parler avec ma famille"], querer:["s","vivir cerca del mar","vivre près de la mer"],
    ver:["a","una película","un film"], decir:["a","la verdad","la vérité"], venir:["a","a casa en bici","à la maison à vélo"],
    dar:["a","dinero a mi hermano","de l'argent à mon frère"], saber:["s","cocinar paella","cuisiner la paella"],
    poner:["a","la mesa","la table"], hablar:["a","con mis amigos","avec mes amis"], comer:["a","paella","de la paella"],
    vivir:["s","en Madrid","à Madrid"], trabajar:["a","desde casa","depuis la maison"], estudiar:["a","español","l'espagnol"],
    comprar:["a","pan en la panadería","du pain à la boulangerie"], beber:["a","un café con leche","un café au lait"],
    aprender:["a","palabras nuevas","de nouveaux mots"], escribir:["a","un mensaje a Rebecca","un message à Rebecca"],
    viajar:["s","a Japón","au Japon"], necesitar:["s","un coche nuevo","d'une nouvelle voiture"],
    tomar:["a","el autobús","le bus"], comprender:["s","las reglas","les règles"], deber:["s","estudiar más","étudier plus"],
    recibir:["a","un paquete","un colis"], cocinar:["a","la cena","le dîner"], descansar:["a","en el sofá","sur le canapé"],
    pensar:["a","en el viaje","au voyage"], entender:["s","la gramática","la grammaire"],
    empezar:["a","el trabajo a las nueve","le travail à neuf heures"], perder:["a","las llaves","les clés"],
    volver:["a","a casa tarde","à la maison tard"], encontrar:["a","las llaves","les clés"],
    probar:["a","un plato nuevo","un nouveau plat"], dormir:["a","ocho horas","huit heures"],
    pedir:["a","la cuenta","l'addition"], sentir:["a","el frío","le froid"], seguir:["a","el camino","le chemin"],
    jugar:["a","al fútbol","au foot"], conocer:["s","a mucha gente","beaucoup de monde"],
    salir:["a","con mis amigos","avec mes amis"], traer:["a","el postre","le dessert"],
    caer:["a","en la trampa","dans le piège"], "oír":["a","música","de la musique"], leer:["a","un libro","un livre"],
    levantarse:["a","temprano","tôt"], acostarse:["a","tarde","tard"], despertarse:["a","a las siete","à sept heures"],
    ducharse:["a","con agua fría","à l'eau froide"], vestirse:["a","rápido","vite"], sentirse:["s","muy bien","très bien"],
    divertirse:["a","con mis amigos","avec mes amis"], acordarse:["a","de mi abuela","de ma grand-mère"],
    quedarse:["a","en casa","à la maison"], entrenarse:["a","en el gimnasio","à la salle de sport"],
    irse:["a","de vacaciones","en vacances"], ponerse:["a","el abrigo","le manteau"],
    intentar:["a","hablar español","de parler espagnol"], nadar:["a","en el mar","dans la mer"],
    cenar:["a","pescado","du poisson"], preparar:["a","la maleta","la valise"], limpiar:["a","la cocina","la cuisine"],
    alquilar:["s","un piso","un appartement"], olvidar:["a","las llaves","les clés"], enviar:["a","un correo","un mail"],
    mudarse:["s","a Valencia","à Valence"], abrigarse:["a","bien","bien"],
    lesionarse:["a","jugando al fútbol","en jouant au foot"], quemarse:["a","con el sol","au soleil"],
    asustarse:["a","con las tormentas","des orages"], caerse:["a","en la calle","dans la rue"],
  };
  function example(inf, tenseKey){
    const e = EX[inf]; if(!e) return null;
    const [kind, esC, frC] = e;
    const [mEs, mFr] = MARK[kind][tenseKey];
    const es = forms(inf)[tenseKey][0];
    const frF = frForms(inf);
    let fr = frF && frF[tenseKey] && frF[tenseKey][0];
    if(fr && / de$/.test(fr) && /^(de |d')/.test(frC)) fr = fr.slice(0, -3);   // « besoin de » + « d'une… »
    return {
      es: `${mEs} ${es} ${esC}.`,
      fr: fr ? `${mFr}${mFr.endsWith(",") ? "" : ","} ${fr} ${frC}.` : "",
    };
  }

  return { PRONOUNS, TENSES, LIST, forms, frForms, example };
})();
