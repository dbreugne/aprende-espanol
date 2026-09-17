/* ============================================================
   APRENDE ESPAÑOL — Curriculum
   Progression jour par jour, difficulté croissante.
   Chaque phrase : { fr, es:[réponses acceptées], tense, tip }
   La 1re entrée de "es" est la correction affichée.
   ============================================================ */

const CURRICULUM = [
  /* ---------- NIVEAU 1 — PRÉSENT, bases de tous les jours ---------- */
  {
    day: 1,
    level: 1,
    theme: "Se présenter",
    tense: "Présent",
    sentences: [
      { fr: "Bonjour, je m'appelle Dylan.", es: ["Hola, me llamo Dylan."], tense: "présent", tip: "« me llamo » = je m'appelle (littéralement : je m'appelle moi-même)." },
      { fr: "Comment tu t'appelles ?", es: ["¿Cómo te llamas?"], tense: "présent", tip: "Les questions ont un « ¿ » à l'envers au début." },
      { fr: "Je suis français.", es: ["Soy francés.", "Soy francesa."], tense: "présent", tip: "« soy » vient de SER (être, permanent)." },
      { fr: "J'ai vingt-cinq ans.", es: ["Tengo veinticinco años."], tense: "présent", tip: "En espagnol on « a » un âge : tengo ... años." },
      { fr: "Enchanté de te rencontrer.", es: ["Encantado de conocerte.", "Encantada de conocerte."], tense: "présent", tip: "Un homme dit « encantado », une femme « encantada »." },
    ],
  },
  {
    day: 2,
    level: 1,
    theme: "Au café",
    tense: "Présent",
    sentences: [
      { fr: "Je voudrais un café, s'il te plaît.", es: ["Quiero un café, por favor.", "Querría un café, por favor."], tense: "présent", tip: "« quiero » = je veux, très courant pour commander." },
      { fr: "Combien ça coûte ?", es: ["¿Cuánto cuesta?", "¿Cuánto es?"], tense: "présent", tip: "« cuesta » vient de COSTAR (coûter)." },
      { fr: "Tu as du lait ?", es: ["¿Tienes leche?"], tense: "présent", tip: "« tienes » = tu as (TENER)." },
      { fr: "L'addition, s'il te plaît.", es: ["La cuenta, por favor."], tense: "présent", tip: "« la cuenta » = l'addition." },
      { fr: "Merci beaucoup, à bientôt.", es: ["Muchas gracias, hasta pronto."], tense: "présent", tip: "« hasta pronto » = à bientôt." },
    ],
  },
  {
    day: 3,
    level: 1,
    theme: "Faire les courses",
    tense: "Présent",
    sentences: [
      { fr: "J'ai besoin de pain et de lait.", es: ["Necesito pan y leche."], tense: "présent", tip: "« necesito » = j'ai besoin de (pas de « de » après)." },
      { fr: "Où sont les fruits ?", es: ["¿Dónde están las frutas?"], tense: "présent", tip: "« están » = sont (localisation, ESTAR)." },
      { fr: "Je cherche du fromage.", es: ["Busco queso."], tense: "présent", tip: "« busco » = je cherche (pas de « pour » après)." },
      { fr: "Ça fait trop cher.", es: ["Es demasiado caro."], tense: "présent", tip: "« demasiado » = trop." },
      { fr: "Je paie par carte.", es: ["Pago con tarjeta."], tense: "présent", tip: "« con tarjeta » = par carte." },
    ],
  },
  {
    day: 4,
    level: 1,
    theme: "Demander son chemin",
    tense: "Présent",
    sentences: [
      { fr: "Excuse-moi, où est la gare ?", es: ["Perdona, ¿dónde está la estación?"], tense: "présent", tip: "« está » pour un lieu précis (ESTAR)." },
      { fr: "C'est loin d'ici ?", es: ["¿Está lejos de aquí?"], tense: "présent", tip: "« lejos » = loin, « cerca » = près." },
      { fr: "Tourne à droite.", es: ["Gira a la derecha."], tense: "présent", tip: "« a la derecha » = à droite." },
      { fr: "Va tout droit.", es: ["Sigue todo recto.", "Ve todo recto."], tense: "présent", tip: "« todo recto » = tout droit." },
      { fr: "Merci, tu es très gentil.", es: ["Gracias, eres muy amable."], tense: "présent", tip: "« eres » = tu es (SER)." },
    ],
  },

  /* ---------- NIVEAU 2 — PASSÉ ---------- */
  {
    day: 5,
    level: 2,
    theme: "Raconter sa journée d'hier",
    tense: "Passé",
    sentences: [
      { fr: "Hier, j'ai mangé au restaurant.", es: ["Ayer comí en el restaurante."], tense: "passé", tip: "« comí » = j'ai mangé (passé simple, prétérit)." },
      { fr: "Je me suis levé tôt.", es: ["Me levanté temprano."], tense: "passé", tip: "« me levanté » = je me suis levé." },
      { fr: "Nous avons vu un bon film.", es: ["Vimos una buena película."], tense: "passé", tip: "« vimos » = nous avons vu (VER)." },
      { fr: "Elle est arrivée en retard.", es: ["Llegó tarde."], tense: "passé", tip: "« llegó » = il/elle est arrivé(e)." },
      { fr: "J'ai beaucoup travaillé.", es: ["Trabajé mucho."], tense: "passé", tip: "« trabajé » = j'ai travaillé." },
    ],
  },
  {
    day: 6,
    level: 2,
    theme: "Le week-end dernier",
    tense: "Passé",
    sentences: [
      { fr: "Le week-end dernier, je suis allé à la plage.", es: ["El fin de semana pasado fui a la playa."], tense: "passé", tip: "« fui » = je suis allé (IR) et aussi j'ai été (SER)." },
      { fr: "On a fait une fête chez moi.", es: ["Hicimos una fiesta en mi casa."], tense: "passé", tip: "« hicimos » = nous avons fait (HACER)." },
      { fr: "J'ai bu un peu trop.", es: ["Bebí un poco demasiado."], tense: "passé", tip: "« bebí » = j'ai bu." },
      { fr: "Mes amis sont venus me voir.", es: ["Mis amigos vinieron a verme."], tense: "passé", tip: "« vinieron » = ils sont venus (VENIR)." },
      { fr: "On s'est bien amusés.", es: ["Nos divertimos mucho."], tense: "passé", tip: "« nos divertimos » = on s'est amusés." },
    ],
  },
  {
    day: 7,
    level: 2,
    theme: "Souvenirs d'enfance",
    tense: "Passé (imparfait)",
    sentences: [
      { fr: "Quand j'étais petit, je jouais au foot.", es: ["Cuando era pequeño, jugaba al fútbol."], tense: "imparfait", tip: "« era » et « jugaba » = imparfait (habitude passée)." },
      { fr: "On habitait près de la mer.", es: ["Vivíamos cerca del mar."], tense: "imparfait", tip: "« vivíamos » = nous habitions." },
      { fr: "Ma grand-mère cuisinait très bien.", es: ["Mi abuela cocinaba muy bien."], tense: "imparfait", tip: "« cocinaba » = elle cuisinait (habitude)." },
      { fr: "Tous les étés, on partait en Espagne.", es: ["Todos los veranos íbamos a España."], tense: "imparfait", tip: "« íbamos » = nous allions (imparfait de IR)." },
      { fr: "Je n'avais pas peur du noir.", es: ["No tenía miedo de la oscuridad."], tense: "imparfait", tip: "« tenía » = j'avais." },
    ],
  },

  /* ---------- NIVEAU 3 — FUTUR ---------- */
  {
    day: 8,
    level: 3,
    theme: "Mes projets",
    tense: "Futur",
    sentences: [
      { fr: "Demain, je vais travailler.", es: ["Mañana voy a trabajar."], tense: "futur", tip: "« voy a + infinitif » = futur proche (je vais...)." },
      { fr: "L'année prochaine, j'apprendrai l'espagnol.", es: ["El año que viene aprenderé español.", "El próximo año aprenderé español."], tense: "futur", tip: "« aprenderé » = j'apprendrai (futur simple)." },
      { fr: "Nous partirons en vacances en août.", es: ["Nos iremos de vacaciones en agosto.", "Iremos de vacaciones en agosto."], tense: "futur", tip: "« iremos » = nous irons/partirons." },
      { fr: "Je pense que ça va marcher.", es: ["Creo que va a funcionar."], tense: "futur", tip: "« va a funcionar » = ça va marcher." },
      { fr: "Un jour, je serai bilingue.", es: ["Algún día seré bilingüe."], tense: "futur", tip: "« seré » = je serai (SER au futur)." },
    ],
  },
  {
    day: 9,
    level: 3,
    theme: "Organiser un voyage",
    tense: "Futur",
    sentences: [
      { fr: "Je réserverai un hôtel ce soir.", es: ["Reservaré un hotel esta noche."], tense: "futur", tip: "« reservaré » = je réserverai." },
      { fr: "On prendra le train de huit heures.", es: ["Cogeremos el tren de las ocho.", "Tomaremos el tren de las ocho."], tense: "futur", tip: "En Espagne « coger » = prendre (attention en Amérique latine)." },
      { fr: "Est-ce que tu viendras avec moi ?", es: ["¿Vendrás conmigo?"], tense: "futur", tip: "« vendrás » = tu viendras, « conmigo » = avec moi." },
      { fr: "Nous visiterons le musée demain.", es: ["Visitaremos el museo mañana."], tense: "futur", tip: "« visitaremos » = nous visiterons." },
      { fr: "Ça va être un super voyage.", es: ["Va a ser un viaje genial."], tense: "futur", tip: "« va a ser » = ça va être." },
    ],
  },

  /* ---------- NIVEAU 4 — MIX de temps, situations réelles ---------- */
  {
    day: 10,
    level: 4,
    theme: "Au restaurant",
    tense: "Mix",
    sentences: [
      { fr: "On a réservé une table pour deux.", es: ["Hemos reservado una mesa para dos.", "Reservamos una mesa para dos."], tense: "passé", tip: "« hemos reservado » = nous avons réservé (passé composé)." },
      { fr: "Qu'est-ce que tu me conseilles ?", es: ["¿Qué me recomiendas?"], tense: "présent", tip: "« recomiendas » = tu recommandes/conseilles." },
      { fr: "Je prendrai le poisson.", es: ["Tomaré el pescado.", "Voy a tomar el pescado."], tense: "futur", tip: "« pescado » = poisson (dans l'assiette), « pez » = vivant." },
      { fr: "C'était délicieux.", es: ["Estaba delicioso.", "Estuvo delicioso."], tense: "passé", tip: "« estaba » = c'était (impression, imparfait)." },
      { fr: "On peut avoir l'addition ?", es: ["¿Nos puede traer la cuenta?", "¿Nos trae la cuenta?"], tense: "présent", tip: "« nos puede traer » = pouvez-vous nous apporter." },
    ],
  },
  {
    day: 11,
    level: 4,
    theme: "Chez le médecin",
    tense: "Mix",
    sentences: [
      { fr: "J'ai mal à la tête depuis hier.", es: ["Me duele la cabeza desde ayer."], tense: "présent", tip: "« me duele » = j'ai mal (DOLER, comme « ça me fait mal »)." },
      { fr: "Je suis tombé malade la semaine dernière.", es: ["Me puse enfermo la semana pasada.", "Me puse enferma la semana pasada."], tense: "passé", tip: "« me puse enfermo » = je suis tombé malade." },
      { fr: "Tu dois te reposer.", es: ["Tienes que descansar."], tense: "présent", tip: "« tienes que + infinitif » = tu dois." },
      { fr: "Je prendrai ce médicament deux fois par jour.", es: ["Tomaré este medicamento dos veces al día."], tense: "futur", tip: "« dos veces al día » = deux fois par jour." },
      { fr: "J'espère que je vais vite guérir.", es: ["Espero recuperarme pronto.", "Espero curarme pronto."], tense: "futur", tip: "« recuperarme » = me rétablir." },
    ],
  },
  {
    day: 12,
    level: 4,
    theme: "Au téléphone / au travail",
    tense: "Mix",
    sentences: [
      { fr: "Je t'appelle pour le rendez-vous de demain.", es: ["Te llamo por la cita de mañana."], tense: "présent", tip: "« la cita » = le rendez-vous (aussi amoureux)." },
      { fr: "J'ai envoyé le mail ce matin.", es: ["Envié el correo esta mañana.", "He enviado el correo esta mañana."], tense: "passé", tip: "« el correo » = le mail/courrier." },
      { fr: "Est-ce qu'on peut décaler à jeudi ?", es: ["¿Podemos cambiarlo al jueves?", "¿Podemos moverlo al jueves?"], tense: "présent", tip: "« cambiarlo » = le changer/décaler." },
      { fr: "Je te recontacterai plus tard.", es: ["Te volveré a contactar más tarde.", "Te contactaré más tarde."], tense: "futur", tip: "« volveré a + infinitif » = je referai (encore)." },
      { fr: "Désolé, je n'ai pas eu le temps.", es: ["Lo siento, no tuve tiempo.", "Perdona, no he tenido tiempo."], tense: "passé", tip: "« no tuve tiempo » = je n'ai pas eu le temps." },
    ],
  },

  /* ---------- NIVEAU 5 — Conversation, opinions, nuances ---------- */
  {
    day: 13,
    level: 5,
    theme: "Donner son avis",
    tense: "Mix",
    sentences: [
      { fr: "Je pense que tu as raison.", es: ["Creo que tienes razón."], tense: "présent", tip: "« tener razón » = avoir raison." },
      { fr: "À mon avis, c'est une bonne idée.", es: ["En mi opinión, es una buena idea."], tense: "présent", tip: "« en mi opinión » = à mon avis." },
      { fr: "Je ne suis pas d'accord avec toi.", es: ["No estoy de acuerdo contigo."], tense: "présent", tip: "« contigo » = avec toi." },
      { fr: "Ça dépend de la situation.", es: ["Depende de la situación."], tense: "présent", tip: "« depende de » = ça dépend de." },
      { fr: "Je préférerais rester à la maison.", es: ["Preferiría quedarme en casa."], tense: "conditionnel", tip: "« preferiría » = je préférerais (conditionnel)." },
    ],
  },
  {
    day: 14,
    level: 5,
    theme: "Faire des projets ensemble",
    tense: "Mix",
    sentences: [
      { fr: "Si j'ai le temps, je viendrai te voir.", es: ["Si tengo tiempo, iré a verte."], tense: "futur", tip: "Après « si » on garde le présent, puis futur." },
      { fr: "On pourrait se voir ce week-end.", es: ["Podríamos vernos este fin de semana."], tense: "conditionnel", tip: "« podríamos » = on pourrait." },
      { fr: "J'aimerais apprendre à cuisiner.", es: ["Me gustaría aprender a cocinar."], tense: "conditionnel", tip: "« me gustaría » = j'aimerais." },
      { fr: "Ça fait longtemps qu'on ne s'est pas vus.", es: ["Hace mucho que no nos vemos."], tense: "présent", tip: "« hace mucho que » = ça fait longtemps que." },
      { fr: "J'ai hâte de te revoir.", es: ["Tengo muchas ganas de verte.", "Tengo ganas de volver a verte."], tense: "présent", tip: "« tener ganas de » = avoir envie / hâte de." },
    ],
  },
  {
    day: 15,
    level: 5,
    theme: "Résoudre un imprévu",
    tense: "Mix",
    sentences: [
      { fr: "J'ai perdu mon téléphone dans le métro.", es: ["He perdido el móvil en el metro.", "Perdí el móvil en el metro."], tense: "passé", tip: "En Espagne « el móvil » = le téléphone portable." },
      { fr: "Est-ce que quelqu'un l'a trouvé ?", es: ["¿Alguien lo ha encontrado?", "¿Alguien lo encontró?"], tense: "passé", tip: "« alguien » = quelqu'un, « lo » = le (objet)." },
      { fr: "Je ne sais pas quoi faire.", es: ["No sé qué hacer."], tense: "présent", tip: "« no sé » = je ne sais pas." },
      { fr: "Il faudra que j'en achète un nouveau.", es: ["Tendré que comprar uno nuevo."], tense: "futur", tip: "« tendré que » = il faudra que je." },
      { fr: "Heureusement, tout va bien maintenant.", es: ["Por suerte, todo va bien ahora."], tense: "présent", tip: "« por suerte » = heureusement." },
    ],
  },

  /* ---------- NIVEAU 5 (suite) — vie quotidienne, débrouille ---------- */
  {
    day: 16,
    level: 5,
    theme: "Au marché / négocier",
    tense: "Mix",
    sentences: [
      { fr: "Combien coûtent les tomates ?", es: ["¿Cuánto cuestan los tomates?"], tense: "présent", tip: "« cuestan » = coûtent (pluriel de cuesta)." },
      { fr: "C'est trop cher pour moi.", es: ["Es demasiado caro para mí."], tense: "présent", tip: "« para mí » = pour moi (mí avec accent)." },
      { fr: "Vous pouvez me faire une remise ?", es: ["¿Me puede hacer un descuento?", "¿Me puede rebajar el precio?"], tense: "présent", tip: "« un descuento » = une réduction." },
      { fr: "Je vais en prendre un kilo.", es: ["Me llevo un kilo.", "Voy a llevar un kilo."], tense: "présent", tip: "« me llevo » = j'emporte / je prends." },
      { fr: "Gardez la monnaie.", es: ["Quédese con el cambio."], tense: "présent", tip: "« el cambio » = la monnaie rendue." },
    ],
  },
  {
    day: 17,
    level: 6,
    theme: "Louer un appartement",
    tense: "Mix",
    sentences: [
      { fr: "Je cherche un appartement à louer.", es: ["Busco un piso para alquilar.", "Busco un apartamento de alquiler."], tense: "présent", tip: "En Espagne « el piso » = l'appartement." },
      { fr: "Combien coûte le loyer par mois ?", es: ["¿Cuánto cuesta el alquiler al mes?"], tense: "présent", tip: "« el alquiler » = le loyer, « al mes » = par mois." },
      { fr: "Est-ce que les charges sont comprises ?", es: ["¿Los gastos están incluidos?"], tense: "présent", tip: "« los gastos » = les charges/frais." },
      { fr: "J'aimerais le visiter demain.", es: ["Me gustaría visitarlo mañana."], tense: "conditionnel", tip: "« visitarlo » = le visiter (lo = l'appart)." },
      { fr: "Quand est-ce que je peux emménager ?", es: ["¿Cuándo puedo mudarme?"], tense: "présent", tip: "« mudarme » = déménager/emménager." },
    ],
  },
  {
    day: 18,
    level: 6,
    theme: "Exprimer ses émotions",
    tense: "Mix",
    sentences: [
      { fr: "Je suis très content de te voir.", es: ["Estoy muy contento de verte.", "Estoy muy contenta de verte."], tense: "présent", tip: "« estoy contento » = état passager (ESTAR)." },
      { fr: "Ça m'a rendu triste.", es: ["Me puso triste.", "Me entristeció."], tense: "passé", tip: "« me puso triste » = ça m'a attristé." },
      { fr: "J'ai peur de me tromper.", es: ["Tengo miedo de equivocarme."], tense: "présent", tip: "« equivocarme » = me tromper." },
      { fr: "Je suis fatigué aujourd'hui.", es: ["Estoy cansado hoy.", "Estoy cansada hoy."], tense: "présent", tip: "« cansado/cansada » selon si homme/femme." },
      { fr: "Ne t'inquiète pas, tout ira bien.", es: ["No te preocupes, todo saldrá bien."], tense: "futur", tip: "« saldrá bien » = ça se passera bien (SALIR)." },
    ],
  },
  {
    day: 19,
    level: 6,
    theme: "Raconter une anecdote",
    tense: "Passé (mix)",
    sentences: [
      { fr: "L'autre jour, il m'est arrivé un truc drôle.", es: ["El otro día me pasó algo gracioso."], tense: "passé", tip: "« me pasó » = il m'est arrivé, « algo » = quelque chose." },
      { fr: "Je marchais dans la rue quand je l'ai vu.", es: ["Caminaba por la calle cuando lo vi."], tense: "mix", tip: "Imparfait (décor) + passé simple (action ponctuelle)." },
      { fr: "Au début, je n'ai pas compris.", es: ["Al principio no entendí."], tense: "passé", tip: "« al principio » = au début." },
      { fr: "On a beaucoup ri après.", es: ["Nos reímos mucho después."], tense: "passé", tip: "« nos reímos » = on a ri (REÍRSE)." },
      { fr: "Je ne l'oublierai jamais.", es: ["Nunca lo olvidaré.", "No lo olvidaré nunca."], tense: "futur", tip: "Double négation naturelle en espagnol : no... nunca." },
    ],
  },
  {
    day: 20,
    level: 6,
    theme: "Donner des conseils",
    tense: "Conditionnel",
    sentences: [
      { fr: "Tu devrais te reposer un peu.", es: ["Deberías descansar un poco."], tense: "conditionnel", tip: "« deberías » = tu devrais (conseil)." },
      { fr: "À ta place, je l'appellerais.", es: ["Yo que tú, lo llamaría.", "En tu lugar, lo llamaría."], tense: "conditionnel", tip: "« yo que tú » = à ta place (très courant)." },
      { fr: "Il vaut mieux partir tôt.", es: ["Es mejor salir temprano."], tense: "présent", tip: "« es mejor » = il vaut mieux." },
      { fr: "Tu pourrais essayer autre chose.", es: ["Podrías probar otra cosa."], tense: "conditionnel", tip: "« probar » = essayer/goûter." },
      { fr: "Je te conseille d'en parler avec elle.", es: ["Te aconsejo hablar con ella."], tense: "présent", tip: "« te aconsejo » = je te conseille." },
    ],
  },

  /* ---------- NIVEAU 7 — situations plus riches ---------- */
  {
    day: 21,
    level: 7,
    theme: "À l'aéroport",
    tense: "Mix",
    sentences: [
      { fr: "À quelle heure part mon vol ?", es: ["¿A qué hora sale mi vuelo?"], tense: "présent", tip: "« sale » = part (SALIR), « el vuelo » = le vol." },
      { fr: "J'ai raté ma correspondance.", es: ["He perdido la conexión.", "Perdí la conexión."], tense: "passé", tip: "« perder » sert aussi pour « rater » un transport." },
      { fr: "Où est la porte d'embarquement ?", es: ["¿Dónde está la puerta de embarque?"], tense: "présent", tip: "« la puerta de embarque » = la porte d'embarquement." },
      { fr: "Ma valise n'est pas arrivée.", es: ["Mi maleta no ha llegado.", "Mi maleta no llegó."], tense: "passé", tip: "« la maleta » = la valise." },
      { fr: "Je dois enregistrer un bagage.", es: ["Tengo que facturar una maleta."], tense: "présent", tip: "« facturar » = enregistrer un bagage." },
    ],
  },
  {
    day: 22,
    level: 7,
    theme: "Sport et santé",
    tense: "Mix",
    sentences: [
      { fr: "Je vais à la salle trois fois par semaine.", es: ["Voy al gimnasio tres veces por semana.", "Voy al gimnasio tres veces a la semana."], tense: "présent", tip: "« el gimnasio » = la salle de sport." },
      { fr: "Hier je me suis fait mal au genou.", es: ["Ayer me hice daño en la rodilla."], tense: "passé", tip: "« hacerse daño » = se faire mal, « la rodilla » = le genou." },
      { fr: "Je veux me remettre en forme.", es: ["Quiero ponerme en forma."], tense: "présent", tip: "« ponerse en forma » = se mettre en forme." },
      { fr: "Il faut boire beaucoup d'eau.", es: ["Hay que beber mucha agua."], tense: "présent", tip: "« hay que » = il faut (général, impersonnel)." },
      { fr: "Je cours tous les matins.", es: ["Corro todas las mañanas."], tense: "présent", tip: "« corro » = je cours (CORRER)." },
    ],
  },
  {
    day: 23,
    level: 7,
    theme: "Travail et carrière",
    tense: "Mix",
    sentences: [
      { fr: "Je travaille dans une startup depuis deux ans.", es: ["Trabajo en una startup desde hace dos años."], tense: "présent", tip: "« desde hace dos años » = depuis deux ans." },
      { fr: "J'aimerais changer de travail.", es: ["Me gustaría cambiar de trabajo."], tense: "conditionnel", tip: "« cambiar de trabajo » = changer de boulot." },
      { fr: "Nous avons une réunion importante demain.", es: ["Tenemos una reunión importante mañana."], tense: "présent", tip: "« la reunión » = la réunion." },
      { fr: "Mon patron m'a félicité.", es: ["Mi jefe me felicitó.", "Mi jefe me ha felicitado."], tense: "passé", tip: "« el jefe » = le patron, « felicitar » = féliciter." },
      { fr: "J'espère avoir une augmentation bientôt.", es: ["Espero tener un aumento pronto."], tense: "présent", tip: "« un aumento » = une augmentation." },
    ],
  },
  {
    day: 24,
    level: 7,
    theme: "Technologie du quotidien",
    tense: "Mix",
    sentences: [
      { fr: "Mon téléphone ne marche plus.", es: ["Mi móvil ya no funciona."], tense: "présent", tip: "« ya no » = ne... plus." },
      { fr: "Je dois recharger la batterie.", es: ["Tengo que cargar la batería."], tense: "présent", tip: "« cargar » = charger." },
      { fr: "Est-ce qu'il y a du wifi ici ?", es: ["¿Hay wifi aquí?"], tense: "présent", tip: "« hay » = il y a." },
      { fr: "J'ai oublié mon mot de passe.", es: ["He olvidado mi contraseña.", "Olvidé mi contraseña."], tense: "passé", tip: "« la contraseña » = le mot de passe." },
      { fr: "Envoie-moi le lien par message.", es: ["Mándame el enlace por mensaje.", "Envíame el enlace por mensaje."], tense: "présent", tip: "« mándame » = envoie-moi, « el enlace » = le lien." },
    ],
  },
  {
    day: 25,
    level: 7,
    theme: "Culture et sorties",
    tense: "Mix",
    sentences: [
      { fr: "On pourrait aller au cinéma ce soir.", es: ["Podríamos ir al cine esta noche."], tense: "conditionnel", tip: "« el cine » = le cinéma." },
      { fr: "Tu as déjà vu cette série ?", es: ["¿Ya has visto esta serie?"], tense: "passé", tip: "« has visto » = tu as vu (passé composé)." },
      { fr: "Le concert commence à neuf heures.", es: ["El concierto empieza a las nueve."], tense: "présent", tip: "« empieza » = commence (EMPEZAR)." },
      { fr: "Je n'ai jamais essayé ce restaurant.", es: ["Nunca he probado este restaurante."], tense: "passé", tip: "« he probado » = j'ai essayé/goûté." },
      { fr: "Ça te dit de sortir samedi ?", es: ["¿Te apetece salir el sábado?"], tense: "présent", tip: "« te apetece » = ça te dit / tu as envie." },
    ],
  },
  {
    day: 26,
    level: 7,
    theme: "Se plaindre poliment",
    tense: "Mix",
    sentences: [
      { fr: "Excusez-moi, il y a une erreur sur l'addition.", es: ["Perdone, hay un error en la cuenta."], tense: "présent", tip: "« perdone » = excusez-moi (vouvoiement)." },
      { fr: "Ce n'est pas ce que j'avais commandé.", es: ["Esto no es lo que había pedido.", "Esto no es lo que pedí."], tense: "passé", tip: "« había pedido » = j'avais commandé (plus-que-parfait)." },
      { fr: "La chambre n'est pas propre.", es: ["La habitación no está limpia."], tense: "présent", tip: "« la habitación » = la chambre, « limpia » = propre." },
      { fr: "Je voudrais parler au responsable.", es: ["Me gustaría hablar con el responsable."], tense: "conditionnel", tip: "« el responsable » = le responsable." },
      { fr: "J'attends depuis une heure.", es: ["Llevo una hora esperando.", "Espero desde hace una hora."], tense: "présent", tip: "« llevo una hora esperando » = ça fait une heure que j'attends." },
    ],
  },

  /* ---------- NIVEAU 8 — hypothèses, subjonctif, nuances ---------- */
  {
    day: 27,
    level: 8,
    theme: "Faire des hypothèses",
    tense: "Si + conditionnel",
    sentences: [
      { fr: "Si j'avais de l'argent, je voyagerais partout.", es: ["Si tuviera dinero, viajaría por todas partes."], tense: "conditionnel", tip: "« tuviera » = subjonctif imparfait, « viajaría » = conditionnel." },
      { fr: "Si j'étais toi, je ne ferais pas ça.", es: ["Si fuera tú, no haría eso.", "Yo que tú, no haría eso."], tense: "conditionnel", tip: "« si fuera tú » = si j'étais toi." },
      { fr: "Qu'est-ce que tu ferais à ma place ?", es: ["¿Qué harías en mi lugar?"], tense: "conditionnel", tip: "« harías » = tu ferais (HACER)." },
      { fr: "Si on avait plus de temps, on resterait.", es: ["Si tuviéramos más tiempo, nos quedaríamos."], tense: "conditionnel", tip: "« nos quedaríamos » = on resterait." },
      { fr: "J'aurais aimé venir, mais je ne pouvais pas.", es: ["Me habría gustado venir, pero no podía.", "Me habría gustado venir, pero no pude."], tense: "conditionnel", tip: "« me habría gustado » = j'aurais aimé." },
    ],
  },
  {
    day: 28,
    level: 8,
    theme: "Souhaits (subjonctif)",
    tense: "Subjonctif",
    sentences: [
      { fr: "J'espère que tu vas bien.", es: ["Espero que estés bien."], tense: "subjonctif", tip: "« espero que » déclenche le subjonctif : estés." },
      { fr: "Je veux que tu viennes avec moi.", es: ["Quiero que vengas conmigo."], tense: "subjonctif", tip: "« quiero que + subjonctif » : vengas." },
      { fr: "Pourvu qu'il fasse beau demain.", es: ["Ojalá haga buen tiempo mañana."], tense: "subjonctif", tip: "« ojalá » = pourvu que, toujours + subjonctif." },
      { fr: "Il faut que je parte maintenant.", es: ["Tengo que irme ahora.", "Es necesario que me vaya ahora."], tense: "subjonctif", tip: "« que me vaya » = que je parte (subjonctif de IR)." },
      { fr: "Je te souhaite un bon voyage.", es: ["Te deseo un buen viaje."], tense: "présent", tip: "« te deseo » = je te souhaite." },
    ],
  },
  {
    day: 29,
    level: 8,
    theme: "Probabilité et incertitude",
    tense: "Mix",
    sentences: [
      { fr: "Il doit être chez lui en ce moment.", es: ["Debe de estar en casa ahora mismo."], tense: "présent", tip: "« debe de estar » = il doit être (probabilité)." },
      { fr: "Il pleuvra peut-être demain.", es: ["Quizás llueva mañana.", "Tal vez llueva mañana."], tense: "subjonctif", tip: "« quizás + subjonctif » exprime le doute." },
      { fr: "Je ne sais pas encore ce que je ferai.", es: ["Todavía no sé qué haré."], tense: "futur", tip: "« todavía no » = pas encore." },
      { fr: "On verra bien ce qui se passera.", es: ["Ya veremos qué pasa.", "Ya veremos qué pasará."], tense: "futur", tip: "« ya veremos » = on verra bien." },
      { fr: "Ça dépendra de la météo.", es: ["Dependerá del tiempo."], tense: "futur", tip: "« el tiempo » = le temps qu'il fait (et le temps qui passe)." },
    ],
  },
  {
    day: 30,
    level: 8,
    theme: "Conversation libre",
    tense: "Mix",
    sentences: [
      { fr: "Ça faisait longtemps qu'on ne s'était pas parlé.", es: ["Hacía mucho que no hablábamos."], tense: "imparfait", tip: "« hacía mucho que » = ça faisait longtemps que." },
      { fr: "Raconte-moi tout ce qui s'est passé.", es: ["Cuéntame todo lo que pasó."], tense: "passé", tip: "« cuéntame » = raconte-moi, « lo que » = ce que." },
      { fr: "Je suis fier de tout ce que j'ai appris.", es: ["Estoy orgulloso de todo lo que he aprendido.", "Estoy orgullosa de todo lo que he aprendido."], tense: "passé", tip: "« orgulloso de » = fier de." },
      { fr: "Maintenant je peux parler sans problème.", es: ["Ahora puedo hablar sin problema."], tense: "présent", tip: "« sin problema » = sans problème." },
      { fr: "Merci de m'avoir aidé à progresser.", es: ["Gracias por ayudarme a mejorar.", "Gracias por ayudarme a progresar."], tense: "présent", tip: "« gracias por + infinitif » = merci de/pour." },
    ],
  },
];
