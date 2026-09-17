/* ============================================================
   APRENDE ESPAÑOL — Compléments de cours
   EXTRA : phrases + notes « à retenir » ajoutées aux jours existants
   (ajoutées À LA FIN de chaque jour pour ne pas casser la progression).
   LEXIQUE : vocabulaire par thème (flashcards FR → ES, onglet Vocabulaire).
   ============================================================ */

const EXTRA = {
  1: {
    notes: [
      "Aguda = accent tonique sur la dernière syllabe (sofá, ciudad) · llana = avant-dernière (lluvia, otoño) · esdrújula = antépénultième (último, toujours avec tilde).",
      "J + a, o, u · G + e, i se prononce comme J : ge, gi = je, ji.",
    ],
    sentences: [
      {"fr":"J'essaie de parler au passé, mais je suis très bloqué.","es":["Intento hablar en pasado, pero estoy muy bloqueado.","Yo intento hablar en pasado, pero estoy muy bloqueado.","Intento hablar en pasado, pero estoy muy bloqueada.","Yo intento hablar en pasado, pero estoy muy bloqueada."],"tense":"présent","tip":"« bloqueado » pour Dylan, « bloqueada » pour Rebecca."},
      {"fr":"Je ne comprends pas le sens complet de la phrase.","es":["No entiendo el significado completo de la frase."],"tense":"présent","tip":"« el significado » = le sens."},
      {"fr":"Avant d'être prof de Lagree, Rebecca était avocate.","es":["Antes de ser profesora de lagree, Rebecca fue abogada.","Antes de ser profesora de Lagree, Rebecca era abogada."],"tense":"passé","tip":"« abogada » = avocate."},
      {"fr":"J'avais vingt-cinq ans. Maintenant j'ai trente-deux ans.","es":["Tenía veinticinco años. Ahora tengo treinta y dos años.","Tenía veinticinco años. Ahora tengo treinta y dos."],"tense":"imparfait","tip":"25 = veinticinco (un seul mot)."},
    ],
  },
  2: {
    notes: [
      "QUIERO (direct) · QUISIERA (poli) : « Quisiera un café, por favor ».",
      "Yo también = moi aussi · yo tampoco = moi non plus.",
    ],
    sentences: [
      {"fr":"Je voudrais un café, s'il vous plaît.","es":["Quisiera un café, por favor."],"tense":"présent","tip":"QUISIERA = forme polie de querer."},
      {"fr":"Moi non plus.","es":["Yo tampoco."],"tense":"présent","tip":"« tampoco » pour une phrase négative."},
    ],
  },
  3: {
    notes: [
      "16–19 et 21–29 s'écrivent en un mot : dieciséis, veintidós… 30–99 : dizaine + y + unité.",
      "100 = cien, mais 101 = ciento uno. 500 = quinientos, 700 = setecientos, 900 = novecientos.",
      "Uno → un devant un nom masculin (treinta y un años), una devant un féminin (treinta y una personas).",
    ],
    sentences: [
      {"fr":"Nous avons mangé une salade avec de la laitue, des tomates et des carottes.","es":["Comimos una ensalada con lechuga, tomate y zanahoria.","Nosotros comimos una ensalada con lechuga, tomate y zanahoria.","Comimos una ensalada con lechuga, tomates y zanahorias."],"tense":"passé","tip":"« comimos » = nous avons mangé (passé simple)."},
      {"fr":"Poivrons de Padrón : les uns piquent, les autres non.","es":["Pimientos del padrón: unos pican, otros no.","Pimientos de Padrón: unos pican, otros no."],"tense":"présent","tip":"Dicton espagnol très connu 🌶️."},
    ],
  },
  4: {
    notes: [
      "Dar un paseo = se promener · dar una vuelta = faire un tour.",
    ],
    sentences: [
      {"fr":"On va faire un tour ?","es":["¿Vamos a dar una vuelta?","Vamos a dar una vuelta"],"tense":"présent","tip":"DAR una vuelta = faire un tour, DAR un paseo = se promener."},
      {"fr":"À quelle heure rentres-tu normalement à la maison après le travail ?","es":["¿A qué hora vuelves normalmente a casa después del trabajo?"],"tense":"présent","tip":"VOLVER : vuelvo, vuelves… (o → ue)."},
      {"fr":"Je vais au travail à 8 heures du matin.","es":["Voy al trabajo a las 8 de la mañana.","Voy al trabajo a las ocho de la mañana.","Yo voy al trabajo a las ocho de la mañana."],"tense":"présent","tip":"a + el = AL."},
    ],
  },
  5: {
    notes: [
      "TENER = posséder, états : « Tengo un problema ».",
      "HABER = auxiliaire des temps composés : « He comido ». HAY / HUBO = il y a / il y a eu.",
      "HACER = faire (actions, sport) : « Hago deporte todos los días ».",
      "Verbes en -AR : la forme « nosotros » est la même au présent et au passé simple (intentamos).",
      "Pretérito perfecto simple (tuvo) = action terminée · compuesto (ha tenido) = lien avec le présent.",
      "Estaba (imparfait, décor) · estuve (passé simple, fini) · he estado (passé composé).",
    ],
    sentences: [
      {"fr":"Il y a eu beaucoup de problèmes.","es":["Hubo muchos problemas."],"tense":"passé","tip":"HUBO = il y a eu (passé simple de « hay »)."},
      {"fr":"Ils ont mangé du gazpacho hier.","es":["Comieron gazpacho ayer.","Ellos comieron gazpacho ayer."],"tense":"passé","tip":"Passé simple de COMER, ellos : comieron."},
      {"fr":"Qu'as-tu fait hier après avoir cuisiné avec tes amis ?","es":["¿Qué hiciste ayer después de cocinar con tus amigos?"],"tense":"passé","tip":"DESPUÉS DE + infinitif (en français : après AVOIR cuisiné)."},
      {"fr":"J'ai fait quelques devoirs avant de dîner.","es":["Hice unos pocos deberes antes de cenar.","Yo hice unos pocos deberes antes de cenar.","Hice algunos deberes antes de cenar."],"tense":"passé","tip":"HACER au passé simple : hice (pas d'accent)."},
      {"fr":"Nous avons fait du sport hier.","es":["Hicimos ejercicio ayer.","Nosotras hicimos ejercicio ayer.","Nosotros hicimos ejercicio ayer.","Hicimos deporte ayer."],"tense":"passé","tip":"« hicimos » = nous avons fait (passé simple)."},
      {"fr":"Ils ont cuisiné le dîner.","es":["Cocinaron la cena.","Ellos cocinaron la cena.","Ellas cocinaron la cena."],"tense":"passé","tip":"COCINAR, ellos, passé simple : cocinaron."},
      {"fr":"Hier matin, Dylan a cherché une recette traditionnelle sur internet.","es":["Ayer por la mañana, Dylan buscó una receta tradicional en internet."],"tense":"passé","tip":"« buscó » : accent final. « la receta » = la recette."},
      {"fr":"Après avoir préparé les légumes, Rebecca a cuisiné un plat principal.","es":["Después de preparar las verduras, Rebecca cocinó un plato principal."],"tense":"passé","tip":"« el plato principal » = le plat principal."},
    ],
  },
  6: {
    sentences: [
      {"fr":"La semaine dernière je suis allé à la plage manger du poisson en face d'Es Vedrà.","es":["La semana pasada fui a la playa a comer pescado enfrente de Es Vedrá.","La semana pasada fui a la playa a comer pescado enfrente de Es Vedrà."],"tense":"passé","tip":"« enfrente de » = en face de."},
      {"fr":"Comment s'est passé le week-end ?","es":["¿Qué tal el fin de semana?"],"tense":"présent","tip":"« ¿Qué tal…? » = comment ça s'est passé ?"},
      {"fr":"Le week-end s'est très bien passé, j'ai joué au foot.","es":["El fin de semana fue muy bien, jugué al fútbol.","El fin de semana fue muy bueno, jugué al fútbol."],"tense":"passé","tip":"JUGAR AL fútbol. « jugué » : g → gu devant é."},
      {"fr":"Ce week-end nous sommes allés en bateau.","es":["Este fin de semana fuimos en barco."],"tense":"passé","tip":"« ir en barco » = aller en bateau."},
      {"fr":"Dylan a joué avec les daurades et leur a donné à manger.","es":["Dylan jugó con las doradas y les dio comida."],"tense":"passé","tip":"DAR, él, passé simple : dio (sans accent)."},
      {"fr":"Beaucoup de poissons sont venus et j'ai eu peur.","es":["Vinieron muchos peces y me asusté."],"tense":"passé","tip":"PEZ (vivant) → peces. ASUSTARSE = avoir peur."},
      {"fr":"Il y en avait des centaines.","es":["Eran cientos.","Había cientos."],"tense":"imparfait","tip":"« cientos de » = des centaines de."},
    ],
  },
  7: {
    notes: [
      "SOLER + infinitif = avoir l'habitude de : « suele decir » · « solía decir ».",
    ],
    sentences: [
      {"fr":"Pepita a eu des chiots.","es":["Pepita tuvo cachorros.","Pepita ha tenido cachorros."],"tense":"passé","tip":"« tuvo » = fini · « ha tenido » = encore lié au présent."},
      {"fr":"Il disait souvent ça.","es":["Él solía decir eso.","Solía decir eso."],"tense":"imparfait","tip":"SOLER à l'imparfait = avoir l'habitude de (passé)."},
      {"fr":"Quand j'étais petit, à l'école j'ai appris beaucoup d'espagnol.","es":["Cuando era pequeño, en el colegio aprendí mucho español.","Cuando era pequeño en la escuela aprendí mucho español.","Cuando era pequeña, en el colegio aprendí mucho español."],"tense":"passé","tip":"« era » (imparfait) pour le décor, « aprendí » (passé simple) pour l'action."},
      {"fr":"J'ai tout oublié.","es":["Olvidé todo.","Lo olvidé todo.","Se me olvidó todo."],"tense":"passé","tip":"OLVIDAR = oublier."},
      {"fr":"Mon père a été professeur d'histoire.","es":["Mi padre fue profesor de historia."],"tense":"passé","tip":"SER au passé simple : fue."},
    ],
  },
  8: {
    sentences: [
      {"fr":"Je pense qu'août n'est pas un bon moment pour commencer une activité à Ibiza.","es":["Creo que agosto no es un buen momento para empezar una actividad en Ibiza."],"tense":"présent","tip":"Les mois ne prennent pas de majuscule en espagnol."},
      {"fr":"Vendredi, nous déménageons.","es":["El viernes estamos de mudanza.","El viernes nos mudamos."],"tense":"présent","tip":"« estar de mudanza » = être en plein déménagement."},
      {"fr":"Je fais une application chaque semaine.","es":["Hago una aplicación cada semana.","Yo hago una aplicación cada semana."],"tense":"présent","tip":"« cada semana » = chaque semaine."},
      {"fr":"On se voit après-demain.","es":["Nos vemos pasado mañana."],"tense":"présent","tip":"« pasado mañana » = après-demain."},
      {"fr":"Il déménage à Ibiza.","es":["Se muda a Ibiza.","Él se muda a Ibiza."],"tense":"présent","tip":"Pronom réfléchi avant le verbe : SE muda."},
    ],
  },
  9: {
    notes: [
      "IR = aller (vers un lieu) · VENIR = venir (vers celui qui parle) · VOLVER = revenir.",
      "Passé simple de IR = celui de SER : fui, fuiste, fue…",
      "Pretérito perfecto (he ido) si la période n'est pas finie (este año) · indefinido (fui) si elle l'est (el año pasado).",
      "Primero → primer, tercero → tercer devant un nom masculin singulier : el primer día, el tercer piso.",
    ],
    sentences: [
      {"fr":"Ce mois-ci, j'ai voyagé à Rome.","es":["Este mes he viajado a Roma."],"tense":"passé composé","tip":"« este mes » → he viajado."},
      {"fr":"Vous êtes déjà venus à Madrid ?","es":["¿Habéis venido a Madrid alguna vez?"],"tense":"passé composé","tip":"« alguna vez » = déjà (une fois)."},
      {"fr":"Oui, nous sommes allés à Madrid trois fois cette année.","es":["Sí, hemos ido a Madrid tres veces este año.","Sí, nosotros hemos ido a Madrid tres veces este año."],"tense":"passé composé","tip":"« este año » → pretérito perfecto."},
      {"fr":"Nous sommes retournés en France cinq fois l'année dernière.","es":["Volvimos a Francia cinco veces el año pasado."],"tense":"passé","tip":"« el año pasado » (fini) → passé simple : volvimos."},
      {"fr":"Combien coûte ton hôtel ? Il coûte quatre-vingt-cinq euros par nuit.","es":["¿Cuánto cuesta tu hotel? Cuesta ochenta y cinco euros por noche."],"tense":"présent","tip":"85 = ochenta y cinco."},
      {"fr":"C'est mon troisième voyage à Madrid.","es":["Es mi tercer viaje a Madrid."],"tense":"présent","tip":"TERCERO → TERCER devant un nom masculin."},
      {"fr":"L'hôtel a trente-deux chambres.","es":["El hotel tiene treinta y dos habitaciones."],"tense":"présent","tip":"« la habitación » = la chambre."},
      {"fr":"Le premier jour, je veux visiter le centre.","es":["El primer día quiero visitar el centro."],"tense":"présent","tip":"el primer día ✅ · el primero día ❌"},
      {"fr":"Il y a trente et une personnes.","es":["Hay treinta y una personas."],"tense":"présent","tip":"« una » devant un nom féminin."},
    ],
  },
  10: {
    notes: [
      "Cocinar la cena = hacer la cena. ñ = virgulilla, ´ = tilde.",
      "Pez = poisson vivant · pescado = poisson à manger · pescar = pêcher.",
    ],
    sentences: [
      {"fr":"Tu essaies de cuisiner une tortilla chaque matin.","es":["Intentas cocinar tortilla cada mañana.","Tú intentas cocinar tortilla cada mañana.","Intentas cocinar una tortilla cada mañana.","Tú intentas cocinar una tortilla cada mañana."],"tense":"présent","tip":"« cada mañana » = chaque matin."},
      {"fr":"Vous avez essayé (vous les filles) de cuisiner une tortilla l'année dernière.","es":["Vosotras intentasteis cocinar tortilla el año pasado.","Intentasteis cocinar tortilla el año pasado.","Vosotras intentasteis cocinar una tortilla el año pasado."],"tense":"passé","tip":"Passé simple, vosotros : -ASTEIS. « el año pasado » = l'année dernière."},
      {"fr":"Ils mangent du gazpacho pour dîner tous les dimanches.","es":["Comen gazpacho para cenar cada domingo.","Ellos comen gazpacho para cenar cada domingo.","Ellos comen gazpacho para cenar todos los domingos.","Comen gazpacho para cenar todos los domingos."],"tense":"présent","tip":"« para cenar » = pour dîner."},
      {"fr":"J'ai essayé de goûter les escargots, mais j'ai préféré la tortilla de pommes de terre.","es":["Intenté probar los caracoles, pero preferí la tortilla de patatas.","Yo intenté probar los caracoles, pero preferí la tortilla de patatas."],"tense":"passé","tip":"PROBAR = goûter. « intenté » : accent sur le é final."},
      {"fr":"J'adore faire le dîner.","es":["Me encanta hacer la cena.","Me encanta cocinar la cena."],"tense":"présent","tip":"« me encanta » = j'adore."},
      {"fr":"Avant de cuisiner, je lave les légumes.","es":["Antes de cocinar, lavo las verduras."],"tense":"présent","tip":"« las verduras » = les légumes."},
      {"fr":"Après avoir mangé, je fais le dessert.","es":["Después de comer, hago el postre."],"tense":"présent","tip":"« el postre » = le dessert."},
      {"fr":"Le poulet est au four.","es":["El pollo está en el horno."],"tense":"présent","tip":"ESTAR pour la localisation. « el horno » = le four."},
      {"fr":"Il faut le goûter. Mais tu l'as goûté ?","es":["Hay que probarlo. ¿Pero lo has probado?"],"tense":"passé composé","tip":"« hay que » = il faut. PROBAR = goûter."},
      {"fr":"Quand ça n'a pas l'air bon, non.","es":["Cuando tiene mala pinta, no."],"tense":"présent","tip":"« tener mala pinta » = ne pas avoir l'air bon."},
    ],
  },
  11: {
    sentences: [
      {"fr":"Je me suis fait une petite blessure à la jambe.","es":["Me hice una pequeña lesión en la pierna.","Me hice una lesión pequeña en la pierna."],"tense":"passé","tip":"« hacerse una lesión » = se blesser."},
      {"fr":"Je suis tombé et je me suis brûlé la peau.","es":["Me caí y me quemé la piel."],"tense":"passé","tip":"CAERSE = tomber · QUEMARSE = se brûler."},
      {"fr":"Quand j'étais en train de jouer, j'ai sauté pour attraper le ballon.","es":["Cuando estaba jugando, salté para atrapar el balón."],"tense":"passé","tip":"« estaba jugando » (en cours) + « salté » (action ponctuelle)."},
    ],
  },
  12: {
    notes: [
      "ESTAR + gérondif = action en cours : « Ahora estoy estudiando español ».",
      "Gérondif : -AR → -ando (hablando) · -ER / -IR → -iendo (comiendo, viviendo).",
      "Ya = déjà / maintenant · todavía = encore / pas encore · por ahora = pour l'instant.",
    ],
    sentences: [
      {"fr":"Le livreur est perdu.","es":["El repartidor está perdido."],"tense":"présent","tip":"« el repartidor » = le livreur. ESTAR perdido."},
      {"fr":"Dylan a mal écrit l'adresse sur l'ordinateur.","es":["Dylan escribió mal la dirección en el ordenador."],"tense":"passé","tip":"« la dirección » = l'adresse · « el ordenador » = l'ordinateur."},
      {"fr":"Le colis n'est pas encore arrivé.","es":["El paquete todavía no ha llegado.","Todavía no ha llegado el paquete."],"tense":"passé composé","tip":"TODAVÍA NO = pas encore."},
      {"fr":"Pour l'instant, j'attends à la maison.","es":["Por ahora, espero en casa.","Por ahora estoy esperando en casa."],"tense":"présent","tip":"« por ahora » = pour l'instant."},
      {"fr":"Je t'envoie ma position par WhatsApp.","es":["Te envío mi ubicación por WhatsApp."],"tense":"présent","tip":"ENVIAR : envío (accent sur le í)."},
    ],
  },
  13: {
    notes: [
      "BIEN = adverbe, invariable (comment on fait / on va). BUENO/A/OS/AS = adjectif ; BUEN devant un nom masculin singulier.",
    ],
    sentences: [
      {"fr":"J'ai un problème.","es":["Tengo un problema."],"tense":"présent","tip":"TENER = posséder. « problema » est masculin : UN problema."},
      {"fr":"Il y a beaucoup de difficultés.","es":["Hay muchas dificultades."],"tense":"présent","tip":"HAY (de HABER) = il y a, invariable."},
      {"fr":"Je me sens très bien aujourd'hui.","es":["Me siento muy bien hoy.","Yo me siento muy bien hoy.","Hoy me siento muy bien."],"tense":"présent","tip":"BIEN (adverbe) avec un verbe."},
      {"fr":"Cette table est de très bonne qualité.","es":["Esta mesa tiene muy buena calidad."],"tense":"présent","tip":"BUENA (adjectif) s'accorde avec « calidad »."},
      {"fr":"Juan est un bon ami.","es":["Juan es un buen amigo."],"tense":"présent","tip":"BUENO → BUEN devant un nom masculin singulier."},
      {"fr":"Utiliser Claude impressionne un peu, mais c'est très facile.","es":["Utilizar Claude da un poco de respeto, pero es muy fácil."],"tense":"présent","tip":"« dar respeto » = intimider."},
    ],
  },
  14: {
    notes: [
      "ANTES DE + infinitif = avant de… · DESPUÉS DE + infinitif = après avoir…",
      "ANTES QUE + nom/pronom = avant (quelqu'un) : « Voy antes que ella ».",
      "ANTES DE QUE + subjonctif : « antes de que nosotros llegásemos ».",
    ],
    sentences: [
      {"fr":"Je nage dans la mer avant de dîner.","es":["Nado en el mar antes de cenar.","Yo nado en el mar antes de cenar."],"tense":"présent","tip":"ANTES DE + infinitif."},
      {"fr":"Chaque jour nous faisons des choses différentes.","es":["Cada día hacemos cosas diferentes."],"tense":"présent","tip":"« cada día » = chaque jour."},
      {"fr":"Je passe avant toi.","es":["Voy antes que tú.","Estoy antes que tú."],"tense":"présent","tip":"ANTES QUE + pronom."},
      {"fr":"Je suis de retour.","es":["Estoy de vuelta."],"tense":"présent","tip":"« estar de vuelta » = être de retour."},
    ],
  },
  15: {
    sentences: [
      {"fr":"Tu triches !","es":["¡Estás haciendo trampas!","¡Haces trampas!"],"tense":"présent","tip":"« hacer trampas » = tricher · « tramposo » = tricheur."},
      {"fr":"Je retrouve ma mère.","es":["Me encuentro con mi madre."],"tense":"présent","tip":"ENCONTRARSE CON = retrouver quelqu'un."},
      {"fr":"Je trouve mes clés.","es":["Encuentro mis llaves."],"tense":"présent","tip":"ENCONTRAR = trouver (o → ue)."},
    ],
  },
  17: {
    notes: [
      "Verbe réfléchi : le sujet fait l'action sur lui-même. Pronom AVANT le verbe conjugué : me, te, se, nos, os, se.",
      "Encontrar = trouver (Encuentro mis llaves) · encontrarse = retrouver quelqu'un (Me encuentro con mi madre).",
    ],
    sentences: [
      {"fr":"J'habite au premier étage.","es":["Vivo en el primer piso.","Vivo en la primera planta.","Vivo en el primero."],"tense":"présent","tip":"PRIMERO → PRIMER devant un nom masculin."},
      {"fr":"Moi aussi j'ai déménagé, j'habite dans une autre maison.","es":["Yo también me he mudado, vivo en otra casa.","Yo también me mudé, vivo en otra casa."],"tense":"passé composé","tip":"MUDARSE : me he mudado."},
      {"fr":"Je suis en colocation.","es":["Estoy compartiendo apartamento con otra persona.","Estoy compartiendo piso.","Comparto piso."],"tense":"présent","tip":"« compartir piso » = être en colocation."},
      {"fr":"J'aime ma nouvelle maison plus que la précédente.","es":["Me gusta mi nueva casa más que la casa anterior.","Me gusta mi nueva casa más que la anterior."],"tense":"présent","tip":"« más que » = plus que."},
      {"fr":"C'est le père du propriétaire.","es":["Es el padre del propietario."],"tense":"présent","tip":"de + el = DEL."},
      {"fr":"Les locataires précédents n'ont pas payé pendant deux ans.","es":["Los inquilinos anteriores no pagaron durante dos años."],"tense":"passé","tip":"« el inquilino » = le locataire."},
    ],
  },
  18: {
    notes: [
      "Dar respeto = impressionner, intimider · hacer trampas = tricher.",
    ],
    sentences: [
      {"fr":"Je suis jaloux !","es":["¡Me da envidia!"],"tense":"présent","tip":"« me da envidia » = ça me rend jaloux."},
      {"fr":"Il est de mauvaise humeur.","es":["Está de mala leche.","Él está de mala leche."],"tense":"présent","tip":"« estar de mala leche » (familier)."},
    ],
  },
  22: {
    sentences: [
      {"fr":"Je me sens très bien quand je fais du sport.","es":["Me siento muy bien cuando hago deporte.","Yo me siento muy bien cuando hago deporte."],"tense":"présent","tip":"HACER deporte (pas « jugar ») = faire du sport."},
      {"fr":"Je fais du sport tous les jours.","es":["Hago deporte todos los días.","Yo hago deporte todos los días."],"tense":"présent","tip":"« todos los días » = tous les jours."},
      {"fr":"Cette semaine, je suis allé à la salle de sport deux fois.","es":["Esta semana he ido al gimnasio dos veces.","Esta semana he ido al gimnasio 2 veces."],"tense":"passé composé","tip":"La semaine n'est pas finie → pretérito perfecto (he ido)."},
      {"fr":"Les premiers membres sont venus essayer les machines lundi dernier.","es":["Los primeros socios vinieron a probar las máquinas el lunes pasado.","El lunes pasado vinieron los primeros socios a probar las máquinas."],"tense":"passé","tip":"VENIR, ellos, passé simple : vinieron."},
    ],
  },
  24: {
    sentences: [
      {"fr":"La semaine dernière j'ai fait une nouvelle application pour apprendre l'économie.","es":["La semana pasada hice una nueva aplicación para aprender economía.","La semana pasada hice una aplicación nueva para aprender economía."],"tense":"passé","tip":"« hice » = j'ai fait."},
      {"fr":"Maintenant je suis en train d'étudier l'espagnol.","es":["Ahora estoy estudiando español.","Ahora yo estoy estudiando español."],"tense":"présent continu","tip":"ESTAR + gérondif (-ando)."},
    ],
  },
  29: {
    notes: [
      "Al mal tiempo, buena cara = faire contre mauvaise fortune bon cœur.",
    ],
    sentences: [
      {"fr":"Je me couvre bien avant de sortir.","es":["Me abrigo bien antes de salir.","Yo me abrigo bien antes de salir."],"tense":"présent","tip":"ABRIGARSE = se couvrir chaudement."},
      {"fr":"Il pleut des cordes.","es":["Llueve a cántaros.","Está lloviendo a cántaros."],"tense":"présent","tip":"« llover a cántaros » = pleuvoir énormément."},
      {"fr":"Il fait un froid de canard.","es":["Hace un frío que pela."],"tense":"présent","tip":"« hace un frío que pela » = il fait très froid."},
      {"fr":"Hier, mon frère s'est couvert avec un imperméable avant de sortir.","es":["Ayer mi hermano se abrigó con un impermeable antes de salir."],"tense":"passé","tip":"ABRIGARSE, él, passé simple : se abrigó."},
      {"fr":"Je mets mes bottes de pluie et mon imperméable.","es":["Me pongo las botas de agua y el chubasquero.","Me pongo las botas de agua y el impermeable."],"tense":"présent","tip":"PONERSE = mettre (un vêtement)."},
    ],
  },
  30: {
    sentences: [
      {"fr":"Juan est en train de manger un sandwich.","es":["Juan está comiendo un bocadillo."],"tense":"présent continu","tip":"-ER → -iendo. « el bocadillo » = le sandwich."},
    ],
  },
};

Object.entries(EXTRA).forEach(([d, x]) => {
  const day = CURRICULUM.find(c => c.day === Number(d));
  if (!day) throw new Error("EXTRA : jour inconnu " + d);
  if (x.notes) day.notes = (day.notes || []).concat(x.notes);
  if (x.sentences) day.sentences = day.sentences.concat(x.sentences);
});

// Lexique par thème : [es, fr, [variantes es acceptées]]
const LEXIQUE_RAW = [
  { id: "c31", label: "Cuisine et aliments", words: [
    ["la inauguración","l'inauguration"], ["la apertura","l'ouverture"], ["el albañil","le maçon"],
    ["los constructores","les constructeurs"], ["intentar","essayer"], ["las dudas","les doutes"],
    ["las preguntas","les questions"], ["la tortilla de patatas","l'omelette aux pommes de terre"], ["el pollo asado","le poulet rôti"],
    ["las gambas","les crevettes"], ["la carne de vaca","la viande de bœuf"], ["los caracoles","les escargots"],
    ["el calabacín","la courgette"], ["la calabaza","la citrouille"], ["el boniato","la patate douce",["la batata"]],
    ["el pimiento","le poivron"], ["la zanahoria","la carotte"], ["la lechuga","la laitue"],
    ["la patata","la pomme de terre"], ["el tomate","la tomate"], ["la sandía","la pastèque"],
    ["el plátano","la banane"], ["la pera","la poire"], ["el arándano","la myrtille"],
    ["la frambuesa","la framboise"], ["la cereza","la cerise"], ["el melón","le melon"],
    ["el melocotón","la pêche (fruit)"], ["el significado","le sens (d'un mot)"], ["dar un paseo","se promener"],
    ["dar una vuelta","faire un tour"], ["dar un abrazo","faire un câlin"], ["la tilde","l'accent écrit (´)"],
    ["nunca","jamais"],
  ] },
  { id: "c32", label: "Cuisiner · antes / después", words: [
    ["la receta","la recette"], ["los ingredientes","les ingrédients"], ["preparar","préparer"],
    ["la cocina","la cuisine"], ["el plato principal","le plat principal"], ["el horno","le four"],
    ["el postre","le dessert"], ["las verduras","les légumes"], ["la cena","le dîner"],
    ["cenar","dîner"], ["nadar","nager"], ["los deberes","les devoirs"],
    ["el abogado","l'avocat"], ["la abogada","l'avocate"], ["la camada","la portée (d'animaux)"],
    ["los cachorros","les chiots"], ["los perritos","les petits chiens"], ["vendidos","vendus"],
    ["es muy mona","elle est trop mignonne"], ["el salón","le salon"], ["hervir","bouillir"],
    ["limpiar","nettoyer"], ["la velada","la soirée"], ["el zumo","le jus",["el jugo"]],
    ["la virgulilla","le tilde du ñ"],
  ] },
  { id: "c33", label: "Aller, venir, revenir · sport", words: [
    ["ir","aller"], ["venir","venir"], ["volver","revenir / rentrer"],
    ["estar de vuelta","être de retour"], ["quisiera","je voudrais"], ["probar","goûter / essayer"],
    ["tener mala pinta","ne pas avoir l'air bon"], ["soler","avoir l'habitude de"], ["bien","bien"],
    ["bueno","bon"], ["un buen día","une bonne journée"], ["pasarlo bien","passer un bon moment"],
    ["el centro deportivo","le centre sportif"], ["el gimnasio","la salle de sport"], ["el entrenamiento","l'entraînement"],
    ["las instalaciones","les installations"], ["el socio","le membre (d'un club)"], ["la cuota mensual","la cotisation mensuelle"],
    ["el descuento","la réduction"], ["alguna vez","déjà (une fois)"], ["el año pasado","l'année dernière"],
    ["este año","cette année"], ["levantarse","se lever"], ["entrenar","s'entraîner"],
  ] },
  { id: "c34", label: "Logement, mois, jours, nombres", words: [
    ["el agente inmobiliario","l'agent immobilier"], ["la agencia inmobiliaria","l'agence immobilière"], ["la fianza","la caution"],
    ["la entrada de una hipoteca","l'apport d'un prêt immobilier"], ["alquilar","louer"], ["comprar","acheter"],
    ["mudarse","déménager"], ["la mudanza","le déménagement"], ["hacer trampas","tricher"],
    ["tramposo","tricheur"], ["infiel","infidèle"], ["dar respeto","intimider"],
    ["la planta","l'étage",["el piso"]], ["la fila","le rang / la file"], ["pasado mañana","après-demain"],
    ["quedar primero","finir premier"], ["último","dernier"], ["penúltimo","avant-dernier"],
    ["la publicidad","la publicité"], ["gratis","gratuit"], ["la lubina a la sal","le bar en croûte de sel"],
    ["la habitación","la chambre"], ["caber","tenir (dans un espace)"], ["enero","janvier"],
    ["febrero","février"], ["marzo","mars"], ["abril","avril"],
    ["mayo","mai"], ["junio","juin"], ["julio","juillet"],
    ["agosto","août"], ["septiembre","septembre"], ["octubre","octobre"],
    ["noviembre","novembre"], ["diciembre","décembre"], ["lunes","lundi"],
    ["martes","mardi"], ["miércoles","mercredi"], ["jueves","jeudi"],
    ["viernes","vendredi"], ["sábado","samedi"], ["domingo","dimanche"],
    ["primero","premier"], ["segundo","deuxième"], ["tercero","troisième"],
    ["cuarto","quatrième"], ["quinto","cinquième"], ["sexto","sixième"],
    ["séptimo","septième"], ["octavo","huitième"], ["noveno","neuvième"],
    ["décimo","dixième"], ["cien","cent"], ["ciento uno","cent un"],
    ["doscientos cincuenta","deux cent cinquante"], ["quinientos","cinq cents"], ["setecientos","sept cents"],
    ["novecientos","neuf cents"], ["mil","mille"], ["un millón","un million"],
  ] },
  { id: "c35", label: "Déménagement, famille, météo", words: [
    ["la mudanza","le déménagement"], ["mudarse","déménager"], ["compartir piso","être en colocation"],
    ["anterior","précédent"], ["el propietario","le propriétaire"], ["el inquilino","le locataire"],
    ["los okupas","les squatteurs"], ["papá","papa"], ["el padre","le père"],
    ["mamá","maman"], ["la madre","la mère"], ["los padres","les parents"],
    ["la maternidad","la maternité"], ["la paternidad","la paternité"], ["la experiencia","l'expérience"],
    ["el colegio","l'école"], ["el alumno","l'élève"], ["gustar","plaire"],
    ["encantar","adorer"], ["amar","aimer (d'amour)"], ["olvidar","oublier"],
    ["me da envidia","je suis jaloux"], ["abrigarse","se couvrir chaudement"], ["encontrar","trouver"],
    ["encontrarse con","retrouver (quelqu'un)"], ["las llaves","les clés"], ["llover","pleuvoir"],
    ["la lluvia","la pluie"], ["la ciudad","la ville"], ["el papel","le papier"],
    ["el reloj","la montre"], ["la pared","le mur"], ["la verdad","la vérité"],
    ["el calor","la chaleur"], ["el viento","le vent"], ["la nube","le nuage"],
    ["la hoja","la feuille"], ["el bosque","la forêt"], ["el campo","la campagne"],
    ["el invierno","l'hiver"], ["la ropa","les vêtements"], ["el pájaro","l'oiseau"],
    ["la bufanda gruesa","l'écharpe épaisse"], ["el abrigo de lana","le manteau en laine"], ["aunque","même si / bien que"],
    ["mientras","pendant que"], ["sin embargo","cependant"], ["el paraguas","le parapluie"],
    ["la tormenta","l'orage"], ["resfriarse","s'enrhumer"], ["hacer un frío que pela","faire un froid de canard"],
    ["llover a cántaros","pleuvoir des cordes"], ["caer chuzos de punta","tomber des hallebardes"], ["un día desapacible","une journée maussade"],
    ["nublado","nuageux"], ["hace buen tiempo","il fait beau"], ["al mal tiempo, buena cara","faire contre mauvaise fortune bon cœur"],
    ["estar de mala leche","être de mauvaise humeur"], ["la carne de gallina","la chair de poule"],
  ] },
  { id: "c36", label: "Week-end, livraison, automne", words: [
    ["la lesión","la blessure"], ["el esguince","l'entorse"], ["lesionarse","se blesser"],
    ["la pierna","la jambe"], ["caer","tomber"], ["quemarse","se brûler"],
    ["la piel","la peau"], ["atrapar","attraper"], ["el balón","le ballon"],
    ["saltar","sauter"], ["asustarse","avoir peur"], ["enviar","envoyer"],
    ["el pescado","le poisson (à manger)"], ["el pez","le poisson (vivant)"], ["los peces","les poissons (vivants)"],
    ["pescar","pêcher"], ["la dorada","la daurade"], ["el barco","le bateau"],
    ["el yate","le yacht"], ["el velero","le voilier"], ["cientos de","des centaines de"],
    ["el repartidor","le livreur"], ["el paquete","le colis"], ["el mueble","le meuble"],
    ["el sofá","le canapé"], ["la talla grande","la grande taille"], ["ya","déjà"],
    ["todavía","encore"], ["por ahora","pour l'instant"], ["la dirección","l'adresse"],
    ["el chalet","la maison individuelle"], ["el chalet adosado","la maison mitoyenne"], ["la urbanización","le lotissement"],
    ["la villa","la villa de luxe"], ["yo también","moi aussi"], ["yo tampoco","moi non plus"],
    ["el ordenador","l'ordinateur"], ["el abrigo","le manteau"], ["el arce","l'érable"],
    ["arroparse","se couvrir (d'une couverture)"], ["el atardecer dorado","le coucher de soleil doré"], ["la avellana","la noisette"],
    ["la bebida caliente","la boisson chaude"], ["el boniato","la patate douce"], ["las botas de agua","les bottes de pluie"],
    ["la brisa","la brise"], ["la bufanda","l'écharpe"], ["el caqui","le kaki"],
    ["la calabaza","la citrouille"], ["los calcetines de lana","les chaussettes en laine"], ["la calidez","la chaleur (douceur)"],
    ["el cambio de armario","le changement de garde-robe"], ["la canela","la cannelle"], ["las castañas asadas","les châtaignes grillées"],
    ["la cazadora","le blouson"], ["la chimenea","la cheminée"], ["el chocolate caliente","le chocolat chaud"],
    ["el chubasquero","le ciré"], ["el clavo de olor","le clou de girofle"], ["la crema de calabaza","le velouté de potiron"],
    ["el crujido de hojas","le craquement des feuilles"], ["los días más cortos","les jours plus courts"], ["la escarcha","le givre"],
    ["la estufa","le poêle"], ["la gabardina","l'imperméable (trench)"], ["el gorro de lana","le bonnet en laine"],
    ["la granada","la grenade (fruit)"], ["los guantes","les gants"], ["la hoja caduca","la feuille caduque"],
    ["la hoja seca","la feuille morte"], ["la hojarasca","le tapis de feuilles mortes"], ["los hongos","les champignons"],
    ["el impermeable","l'imperméable"], ["la infusión","l'infusion"], ["el jersey de punto","le pull en maille"],
    ["la manta","la couverture"], ["la manzana asada","la pomme au four"], ["la niebla","le brouillard"],
    ["la nuez","la noix"], ["el otoño","l'automne"], ["el paseo por el bosque","la balade en forêt"],
    ["la piña de pino","la pomme de pin"], ["la ropa de entretiempo","les vêtements de mi-saison"], ["las setas","les champignons (sauvages)"],
    ["la sidra","le cidre"], ["la sopa caliente","la soupe chaude"], ["la sudadera","le sweat"],
    ["la tarde lluviosa","l'après-midi pluvieux"], ["los tonos cobrizos","les tons cuivrés"], ["la vela aromática","la bougie parfumée"],
    ["la vendimia","les vendanges"], ["el viento fresco","le vent frais"],
  ] },
];
const LEXIQUE = LEXIQUE_RAW.map(l => ({
  id: l.id, label: l.label,
  words: l.words.map(([es, fr, alt]) => ({ es, fr, alt: alt || [] })),
}));
