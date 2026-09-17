/* ============================================================
   XUÉ ZHŌNGWÉN — Grammaire (fiches + quiz) et caractères
   GRAMMAR : { id, title, rule, examples:[[zh, fr]], quiz:[{q, fr, options, answer, why}] }
     q contient « ＿ » à la place du mot à trouver.
   HANZI : [caractère, sens, exemple (mot), sens de l'exemple]
   ============================================================ */

const GRAMMAR = [
  {
    id: "le", title: "了 le · action accomplie / changement",
    rule: "了 après le verbe = l'action est terminée. 了 en fin de phrase = nouvelle situation (« maintenant, c'est comme ça »). Pas de 了 avec 没 (négation du passé).",
    examples: [["我吃了饭。", "J'ai mangé."], ["下雨了。", "Il s'est mis à pleuvoir."], ["我没去。", "Je n'y suis pas allé."]],
    quiz: [
      { q: "我昨天买＿一本书。", fr: "Hier, j'ai acheté un livre.", options: ["了", "过", "在"], answer: "了", why: "Action accomplie à un moment précis → 了." },
      { q: "我昨天没去＿。", fr: "Hier, je n'y suis pas allé.", options: ["（rien）", "了", "过"], answer: "（rien）", why: "Avec 没, jamais de 了." },
      { q: "我不累＿。", fr: "Je ne suis plus fatigué.", options: ["了", "过", "的"], answer: "了", why: "了 final = changement de situation (« plus »)." },
    ],
  },
  {
    id: "guo", title: "过 guo · expérience vécue",
    rule: "Verbe + 过 = avoir déjà fait (au moins une fois dans sa vie). Négation : 没 + verbe + 过 = n'avoir jamais fait.",
    examples: [["我去过中国。", "Je suis déjà allé en Chine."], ["你吃过饺子吗？", "Tu as déjà mangé des raviolis ?"], ["我没见过他。", "Je ne l'ai jamais vu."]],
    quiz: [
      { q: "你去＿北京吗？", fr: "Tu es déjà allé à Pékin ?", options: ["过", "了", "在"], answer: "过", why: "Expérience → 过." },
      { q: "我从来没吃＿烤鸭。", fr: "Je n'ai jamais mangé de canard laqué.", options: ["过", "了", "着"], answer: "过", why: "没…过 = jamais." },
      { q: "我看＿这部电影，很好看。", fr: "J'ai déjà vu ce film, il est très bien.", options: ["过", "在", "会"], answer: "过", why: "Expérience passée → 过." },
    ],
  },
  {
    id: "zai", title: "在 / 正在 · être en train de",
    rule: "在 ou 正在 + verbe = action en cours (souvent avec 呢 à la fin). Attention : 在 + lieu = « à / dans ».",
    examples: [["我在做饭。", "Je suis en train de cuisiner."], ["他正在开会呢。", "Il est en réunion."], ["我在家。", "Je suis à la maison."]],
    quiz: [
      { q: "别打电话，我＿开车。", fr: "N'appelle pas, je suis en train de conduire.", options: ["在", "了", "过"], answer: "在", why: "Action en cours → 在." },
      { q: "你＿做什么呢？", fr: "Qu'est-ce que tu es en train de faire ?", options: ["在", "会", "要"], answer: "在", why: "在…呢 = en train de." },
      { q: "我＿法国工作。", fr: "Je travaille en France.", options: ["在", "去", "过"], answer: "在", why: "在 + lieu = à / en." },
    ],
  },
  {
    id: "hui", title: "会 / 能 / 可以 · pouvoir et savoir",
    rule: "会 = savoir faire (appris) ou futur probable. 能 = être capable (physiquement, circonstances). 可以 = avoir la permission.",
    examples: [["我会说中文。", "Je sais parler chinois."], ["我今天不能来。", "Je ne peux pas venir aujourd'hui."], ["这里可以抽烟吗？", "On peut fumer ici ?"]],
    quiz: [
      { q: "我＿游泳。", fr: "Je sais nager.", options: ["会", "可以", "在"], answer: "会", why: "Compétence apprise → 会." },
      { q: "我可以＿你的手机吗？", fr: "Je peux utiliser ton téléphone ?", options: ["用", "会", "过"], answer: "用", why: "可以 + verbe = permission ; il manque le verbe « utiliser »." },
      { q: "明天＿下雨。", fr: "Demain, il va (sûrement) pleuvoir.", options: ["会", "能", "在"], answer: "会", why: "会 = futur probable." },
    ],
  },
  {
    id: "yao", title: "要 / 想 · vouloir, aller faire",
    rule: "想 + verbe = avoir envie de (doux). 要 + verbe = vouloir fermement / aller faire. 要 + nom = vouloir (commander). 不想 = ne pas avoir envie (不要 = « ne… pas ! »).",
    examples: [["我想喝咖啡。", "J'ai envie d'un café."], ["我要一杯茶。", "Je prends un thé."], ["我明天要上班。", "Demain, je vais travailler."]],
    quiz: [
      { q: "我＿一杯咖啡。", fr: "Je prends un café (je commande).", options: ["要", "会", "在"], answer: "要", why: "Commander → 要 + nom." },
      { q: "我不＿去。", fr: "Je n'ai pas envie d'y aller.", options: ["想", "要", "会"], answer: "想", why: "不想 = ne pas avoir envie. 不要去 = n'y va pas !" },
      { q: "快＿下雨了。", fr: "Il va bientôt pleuvoir.", options: ["要", "想", "过"], answer: "要", why: "(快)要…了 = ça va arriver bientôt." },
    ],
  },
  {
    id: "classif", title: "Classificateurs (个, 杯, 本, 张…)",
    rule: "Entre un nombre (ou 这/那) et un nom, il faut un classificateur. 个 marche presque partout. 2 se dit 两 devant un classificateur.",
    examples: [["一个人", "une personne"], ["两杯茶", "deux tasses de thé"], ["三本书", "trois livres"], ["一张桌子", "une table"]],
    quiz: [
      { q: "我要两＿咖啡。", fr: "Je veux deux cafés.", options: ["杯", "本", "张"], answer: "杯", why: "杯 = boissons (tasse, verre)." },
      { q: "我买了一＿书。", fr: "J'ai acheté un livre.", options: ["本", "杯", "条"], answer: "本", why: "本 = livres, cahiers." },
      { q: "我有＿个朋友在北京。", fr: "J'ai deux amis à Pékin.", options: ["两", "二", "双"], answer: "两", why: "Devant un classificateur : 两, pas 二." },
    ],
  },
  {
    id: "bu-mei", title: "不 ou 没 · la négation",
    rule: "不 = négation du présent, du futur et des habitudes (不去, 不喜欢). 没 = négation du passé et de 有 (没去, 没有). 不 devient bú devant un 4e ton : 不是 búshì.",
    examples: [["我不喝酒。", "Je ne bois pas d'alcool."], ["我昨天没喝酒。", "Hier, je n'ai pas bu."], ["我没有钱。", "Je n'ai pas d'argent."]],
    quiz: [
      { q: "我＿有时间。", fr: "Je n'ai pas le temps.", options: ["没", "不", "别"], answer: "没", why: "有 se nie toujours avec 没." },
      { q: "我明天＿去。", fr: "Demain, je n'y vais pas.", options: ["不", "没", "了"], answer: "不", why: "Futur → 不." },
      { q: "他昨天＿来。", fr: "Hier, il n'est pas venu.", options: ["没", "不", "别"], answer: "没", why: "Passé → 没." },
    ],
  },
  {
    id: "de", title: "的 / 得 / 地 · les trois « de »",
    rule: "的 = possession, relie un nom (我的书). 得 = après un verbe, introduit la manière (说得很好). 地 = avant un verbe, transforme en adverbe (慢慢地走). Tous se prononcent « de ».",
    examples: [["我的朋友", "mon ami"], ["他跑得很快。", "Il court vite."], ["她高兴地笑了。", "Elle a souri joyeusement."]],
    quiz: [
      { q: "这是我＿手机。", fr: "C'est mon téléphone.", options: ["的", "得", "地"], answer: "的", why: "Possession → 的." },
      { q: "你中文说＿很好。", fr: "Tu parles très bien chinois.", options: ["得", "的", "地"], answer: "得", why: "Verbe + 得 + manière." },
      { q: "他慢慢＿走过来。", fr: "Il s'approche lentement.", options: ["地", "的", "得"], answer: "地", why: "Adverbe + 地 + verbe." },
    ],
  },
  {
    id: "bi", title: "比 bǐ · comparer",
    rule: "A 比 B + adjectif = A est plus… que B. Jamais 很 dans la comparaison. Pour « beaucoup plus » : A 比 B + adjectif + 多了. « Pas aussi… que » : A 没有 B + adjectif.",
    examples: [["他比我高。", "Il est plus grand que moi."], ["今天比昨天冷多了。", "Aujourd'hui, il fait beaucoup plus froid qu'hier."], ["我没有他高。", "Je ne suis pas aussi grand que lui."]],
    quiz: [
      { q: "这个＿那个便宜。", fr: "Celui-ci est moins cher que celui-là.", options: ["比", "跟", "很"], answer: "比", why: "A 比 B + adjectif." },
      { q: "北京比上海冷＿。", fr: "Pékin est beaucoup plus froid que Shanghai.", options: ["多了", "很", "太"], answer: "多了", why: "比 + adjectif + 多了 (jamais 很)." },
      { q: "我＿他高。", fr: "Je ne suis pas aussi grand que lui.", options: ["没有", "不比", "不是"], answer: "没有", why: "A 没有 B + adjectif." },
    ],
  },
  {
    id: "ba", title: "把 bǎ · agir sur un objet",
    rule: "Sujet + 把 + objet + verbe + résultat : met l'objet en avant et insiste sur ce qu'on lui fait. Le verbe ne reste jamais seul (了, 完, 好, 给…).",
    examples: [["我把钥匙丢了。", "J'ai perdu mes clés."], ["请把门关上。", "Ferme la porte, s'il te plaît."], ["把链接发给我。", "Envoie-moi le lien."]],
    quiz: [
      { q: "我＿作业做完了。", fr: "J'ai fini mes devoirs.", options: ["把", "被", "给"], answer: "把", why: "把 + objet + verbe + résultat." },
      { q: "请把窗户打＿。", fr: "Ouvre la fenêtre, s'il te plaît.", options: ["开", "了", "过"], answer: "开", why: "打开 = ouvrir (verbe + résultat)." },
      { q: "他把我的咖啡喝＿了。", fr: "Il a bu tout mon café.", options: ["完", "过", "在"], answer: "完", why: "喝完 = boire jusqu'au bout." },
    ],
  },
  {
    id: "shide", title: "是…的 · insister sur un détail du passé",
    rule: "Pour une action passée déjà connue, 是…的 met en avant QUAND, OÙ, COMMENT ou AVEC QUI : 我是坐飞机来的 = je suis venu en avion.",
    examples: [["你是什么时候到的？", "Quand es-tu arrivé ?"], ["我是坐火车来的。", "Je suis venu en train."], ["这是在哪儿买的？", "Où as-tu acheté ça ?"]],
    quiz: [
      { q: "我是昨天到＿。", fr: "C'est hier que je suis arrivé.", options: ["的", "了", "过"], answer: "的", why: "是…的 encadre le détail." },
      { q: "你＿怎么来的？", fr: "Comment es-tu venu ?", options: ["是", "在", "会"], answer: "是", why: "是 avant le détail (怎么)." },
      { q: "我是跟朋友一起去＿。", fr: "J'y suis allé avec des amis.", options: ["的", "了", "吗"], answer: "的", why: "Structure 是…的." },
    ],
  },
  {
    id: "questions", title: "Poser des questions (吗, 呢, 什么…)",
    rule: "吗 en fin de phrase = question oui/non. Les mots interrogatifs restent à la place de la réponse : 你去哪儿 ? = tu vas où ? 呢 = « et… ? » : 我很好，你呢 ?",
    examples: [["你忙吗？", "Tu es occupé ?"], ["你叫什么名字？", "Comment tu t'appelles ?"], ["我喝茶，你呢？", "Je prends un thé, et toi ?"]],
    quiz: [
      { q: "你是法国人＿？", fr: "Tu es français ?", options: ["吗", "呢", "的"], answer: "吗", why: "Question oui/non → 吗." },
      { q: "我很好，你＿？", fr: "Je vais bien, et toi ?", options: ["呢", "吗", "了"], answer: "呢", why: "« Et toi ? » → 呢." },
      { q: "你去＿？", fr: "Où vas-tu ?", options: ["哪儿", "什么", "谁"], answer: "哪儿", why: "哪儿 = où (reste à la place du lieu)." },
    ],
  },
];

// Les 150 caractères les plus utiles
const HANZI_RAW = [
  ["我","je, moi","我们","nous"], ["你","tu, toi","你好","bonjour"], ["他","il, lui","他们","ils"], ["她","elle","她的","son, sa (à elle)"],
  ["是","être","不是","ne pas être"], ["不","ne… pas","不要","ne pas vouloir"], ["了","(accompli)","好了","c'est prêt"], ["的","(possession)","我的","mon, ma"],
  ["有","avoir, il y a","没有","ne pas avoir"], ["没","ne… pas (passé)","没事","ce n'est rien"], ["在","être à ; en train de","现在","maintenant"], ["这","ce, ceci","这个","celui-ci"],
  ["那","ce, cela","那个","celui-là"], ["什","(quoi)","什么","quoi"], ["么","(suffixe)","怎么","comment"], ["吗","(question)","好吗","d'accord ?"],
  ["呢","(et… ?)","你呢","et toi ?"], ["人","personne","中国人","Chinois"], ["大","grand","大学","université"], ["小","petit","小时","heure"],
  ["中","milieu","中文","langue chinoise"], ["国","pays","中国","Chine"], ["好","bien, bon","好吃","bon à manger"], ["一","un","一起","ensemble"],
  ["二","deux","二月","février"], ["三","trois","三月","mars"], ["四","quatre","四月","avril"], ["五","cinq","五月","mai"],
  ["六","six","六月","juin"], ["七","sept","七月","juillet"], ["八","huit","八月","août"], ["九","neuf","九月","septembre"],
  ["十","dix","十月","octobre"], ["百","cent","一百","cent"], ["千","mille","一千","mille"], ["两","deux (quantité)","两个","deux (objets)"],
  ["个","(classificateur)","一个","un"], ["上","dessus ; monter","上班","aller au travail"], ["下","dessous ; descendre","下雨","pleuvoir"], ["来","venir","回来","revenir"],
  ["去","aller","出去","sortir"], ["说","parler, dire","说话","parler"], ["看","regarder, lire","看见","voir"], ["听","écouter","听说","entendre dire"],
  ["吃","manger","吃饭","prendre un repas"], ["喝","boire","喝水","boire de l'eau"], ["做","faire","做饭","cuisiner"], ["想","penser ; vouloir","想家","avoir le mal du pays"],
  ["要","vouloir ; aller faire","需要","avoir besoin"], ["会","savoir faire ; réunion","会议","réunion"], ["能","pouvoir","可能","peut-être"], ["可","pouvoir","可以","pouvoir (permission)"],
  ["知","savoir","知道","savoir"], ["道","chemin","道路","route"], ["学","étudier","学生","élève"], ["生","naître ; vie","生日","anniversaire"],
  ["日","jour, soleil","日本","Japon"], ["月","mois, lune","月亮","la lune"], ["年","année","今年","cette année"], ["天","jour, ciel","今天","aujourd'hui"],
  ["今","maintenant","今晚","ce soir"], ["明","clair ; demain","明天","demain"], ["昨","hier","昨天","hier"], ["时","temps, heure","时间","le temps"],
  ["候","attendre ; moment","时候","moment"], ["点","point ; heure","一点","un peu / 1 h"], ["分","minute ; diviser","分钟","minute"], ["早","tôt, matin","早上","le matin"],
  ["晚","tard, soir","晚上","le soir"], ["家","maison, famille","回家","rentrer chez soi"], ["水","eau","水果","fruit"], ["火","feu","火车","train"],
  ["山","montagne","爬山","faire de la randonnée"], ["海","mer","海边","bord de mer"], ["车","véhicule","开车","conduire"], ["飞","voler","飞机","avion"],
  ["门","porte","出门","sortir de chez soi"], ["手","main","手机","téléphone portable"], ["口","bouche","出口","sortie"], ["心","cœur","开心","content"],
  ["爱","aimer","爱人","conjoint"], ["喜","joie","喜欢","aimer, apprécier"], ["欢","joyeux","欢迎","bienvenue"], ["谢","remercier","谢谢","merci"],
  ["对","correct ; envers","对不起","pardon"], ["起","se lever","起床","se lever (du lit)"], ["多","beaucoup","多少","combien"], ["少","peu","不少","pas mal de"],
  ["钱","argent","多少钱","combien ça coûte"], ["买","acheter","买单","payer l'addition"], ["卖","vendre","卖完","épuisé"], ["东","est","东西","chose, objet"],
  ["西","ouest","西班牙","Espagne"], ["南","sud","南方","le sud"], ["北","nord","北京","Pékin"], ["左","gauche","左边","à gauche"],
  ["右","droite","右边","à droite"], ["前","devant, avant","以前","autrefois"], ["后","derrière, après","以后","plus tard"], ["里","dedans","哪里","où"],
  ["哪","quel, où","哪儿","où"], ["谁","qui","谁的","à qui"], ["朋","ami","朋友","ami"], ["友","ami","好友","bon ami"],
  ["工","travail","工作","travail"], ["作","faire, œuvre","作业","devoirs"], ["开","ouvrir","开始","commencer"], ["关","fermer","关门","fermer la porte"],
  ["走","marcher, partir","走路","marcher"], ["跑","courir","跑步","faire du jogging"], ["坐","s'asseoir ; prendre","坐车","prendre la voiture"], ["住","habiter","住在","habiter à"],
  ["睡","dormir","睡觉","dormir"], ["觉","sommeil ; sentir","觉得","penser, trouver"], ["等","attendre","等一下","attends un peu"], ["找","chercher","找到","trouver"],
  ["给","donner ; pour","送给","offrir à"], ["用","utiliser","有用","utile"], ["太","trop","太太","épouse, madame"], ["很","très","很好","très bien"],
  ["也","aussi","也是","aussi"], ["都","tous","都是","tous sont"], ["还","encore","还是","ou bien (question)"], ["就","justement, alors","就是","c'est ça"],
  ["和","et, avec","和平","la paix"], ["跟","avec ; suivre","跟我来","suis-moi"], ["因","cause","因为","parce que"], ["为","pour","为什么","pourquoi"],
  ["所","lieu","所以","donc"], ["问","demander","问题","question, problème"], ["题","sujet","题目","sujet, énoncé"], ["字","caractère","名字","nom, prénom"],
  ["名","nom","有名","célèbre"], ["语","langue","英语","anglais"], ["文","écriture","文化","culture"], ["书","livre","书店","librairie"],
  ["电","électricité","电话","téléphone"], ["脑","cerveau","电脑","ordinateur"], ["视","voir","电视","télévision"], ["影","ombre, image","电影","film"],
  ["新","nouveau","新年","nouvel an"], ["老","vieux","老师","professeur"], ["男","homme","男人","homme"], ["女","femme","女儿","fille"],
  ["子","enfant, fils","孩子","enfant"], ["冷","froid","冷水","eau froide"], ["热","chaud","热水","eau chaude"], ["雨","pluie","下雨","pleuvoir"],
  ["风","vent","刮风","y avoir du vent"], ["快","rapide","快乐","joyeux"],
];
const HANZI = HANZI_RAW.map(([c, fr, w, wfr]) => ({ c, fr, w, wfr }));
