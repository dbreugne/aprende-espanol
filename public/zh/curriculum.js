/* ============================================================
   XUÉ ZHŌNGWÉN — Parcours en 30 jours (FR → mandarin)
   Chaque phrase : { fr, zh:[réponses acceptées], tag, tip }
   La 1re entrée de "zh" est la correction affichée.
   Le pinyin est calculé automatiquement (pinyin-pro) ; on peut répondre
   en caractères OU en pinyin (tons facultatifs).
   ============================================================ */

const CURRICULUM = [
  /* ---------- NIVEAU 1 — bases de tous les jours ---------- */
  {
    day: 1, level: 1, theme: "Se présenter", tense: "Bases",
    notes: [
      "Ordre de base : sujet + verbe + complément, comme en français : 我喝茶 = je bois du thé.",
      "Les verbes ne se conjuguent jamais : 我是 / 你是 / 他是 (je suis / tu es / il est).",
      "Question oui/non : on ajoute 吗 (ma) à la fin d'une phrase affirmative.",
      "Tons : 1 ā (haut et plat) · 2 á (monte) · 3 ǎ (descend puis remonte) · 4 à (descend fort) · neutre (léger).",
    ],
    sentences: [
      { fr: "Bonjour !", zh: ["你好！"], tag: "base", tip: "你 (tu) + 好 (bien) : la salutation de base." },
      { fr: "Je m'appelle Dylan.", zh: ["我叫Dylan。", "我的名字是Dylan。"], tag: "base", tip: "叫 jiào = s'appeler. Les prénoms étrangers peuvent rester en lettres latines." },
      { fr: "Comment tu t'appelles ?", zh: ["你叫什么名字？", "你叫什么？"], tag: "question", tip: "什么 shénme = quoi. En chinois, le mot interrogatif reste à la place de la réponse." },
      { fr: "Je suis français.", zh: ["我是法国人。"], tag: "base", tip: "法国 (France) + 人 (personne) = Français." },
      { fr: "Tu es chinois ?", zh: ["你是中国人吗？"], tag: "question", tip: "吗 à la fin transforme la phrase en question oui/non." },
      { fr: "Enchanté de te rencontrer.", zh: ["很高兴认识你。", "认识你很高兴。"], tag: "base", tip: "认识 rènshi = connaître / faire la connaissance de." },
      { fr: "J'ai trente ans.", zh: ["我三十岁。", "我今年三十岁。"], tag: "base", tip: "Pour l'âge, pas besoin de verbe : 我 + nombre + 岁 (suì)." },
      { fr: "J'habite à Ibiza.", zh: ["我住在伊维萨。", "我在伊维萨住。"], tag: "base", tip: "住在 zhù zài = habiter à. Le lieu vient après 在." },
    ],
  },
  {
    day: 2, level: 1, theme: "Au café", tense: "Bases",
    notes: [
      "想 xiǎng + verbe = avoir envie de / vouloir (poli). 要 yào + nom = vouloir (direct, pour commander).",
      "Classificateur obligatoire entre nombre et nom : 一杯咖啡 (une tasse de café), 一个人 (une personne).",
      "多少钱 duōshao qián = combien ça coûte ?",
    ],
    sentences: [
      { fr: "Je voudrais un café.", zh: ["我要一杯咖啡。", "我想要一杯咖啡。", "我想喝一杯咖啡。"], tag: "base", tip: "杯 bēi = classificateur des boissons (une tasse, un verre)." },
      { fr: "Tu veux boire du thé ?", zh: ["你想喝茶吗？", "你要喝茶吗？"], tag: "question", tip: "想 + verbe = avoir envie de." },
      { fr: "Combien ça coûte ?", zh: ["多少钱？"], tag: "question", tip: "多少 = combien, 钱 = argent." },
      { fr: "Un café au lait, s'il vous plaît.", zh: ["请给我一杯拿铁。", "一杯拿铁，谢谢。"], tag: "base", tip: "请给我… = donnez-moi s'il vous plaît… 拿铁 = latte." },
      { fr: "Sans sucre.", zh: ["不要糖。", "不加糖。"], tag: "base", tip: "不要 = ne pas vouloir. 加 = ajouter." },
      { fr: "L'addition, s'il vous plaît.", zh: ["请买单。", "买单。", "服务员，买单。"], tag: "base", tip: "买单 mǎidān = payer l'addition." },
      { fr: "Merci beaucoup, au revoir.", zh: ["非常感谢，再见。", "谢谢，再见。", "非常谢谢，再见。"], tag: "base", tip: "再见 zàijiàn = au revoir (litt. « se revoir »)." },
      { fr: "Moi aussi.", zh: ["我也是。"], tag: "base", tip: "也 yě = aussi, toujours AVANT le verbe." },
    ],
  },
  {
    day: 3, level: 1, theme: "Faire les courses", tense: "Bases",
    notes: [
      "有 yǒu = avoir / il y a. Sa négation est toujours 没有 (jamais 不有).",
      "Les adjectifs s'utilisent comme des verbes, souvent avec 很 : 太贵了 = c'est trop cher.",
      "Classificateurs courants : 个 (général), 瓶 (bouteille), 斤 (demi-kilo), 块 (morceau / yuan).",
    ],
    sentences: [
      { fr: "J'ai besoin de pain et de lait.", zh: ["我需要面包和牛奶。"], tag: "base", tip: "和 hé = et (seulement entre deux noms)." },
      { fr: "Où sont les fruits ?", zh: ["水果在哪儿？", "水果在哪里？"], tag: "question", tip: "在哪儿 = où se trouve…" },
      { fr: "Est-ce que vous avez des œufs ?", zh: ["你们有鸡蛋吗？", "有鸡蛋吗？"], tag: "question", tip: "有 = avoir / il y a." },
      { fr: "Il n'y a plus de riz.", zh: ["没有米了。", "米没有了。"], tag: "base", tip: "没有 = ne pas avoir. 了 à la fin = changement de situation (« plus »)." },
      { fr: "C'est trop cher.", zh: ["太贵了。"], tag: "base", tip: "太…了 = trop… (exclamation)." },
      { fr: "Je prends deux bouteilles d'eau.", zh: ["我要两瓶水。", "我买两瓶水。"], tag: "base", tip: "Devant un classificateur, 2 se dit 两 liǎng (pas 二)." },
      { fr: "Je paie par téléphone.", zh: ["我用手机付钱。", "我用手机支付。"], tag: "base", tip: "用 = utiliser. En Chine, on paie presque tout avec WeChat ou Alipay." },
      { fr: "Ces pommes sont très fraîches.", zh: ["这些苹果很新鲜。"], tag: "base", tip: "这些 zhèxiē = ces (pluriel)." },
    ],
  },
  {
    day: 4, level: 1, theme: "Demander son chemin", tense: "Bases",
    notes: [
      "Le lieu se place AVANT le verbe : 我在家吃饭 = je mange à la maison.",
      "离 lí = distance par rapport à : 离这儿远吗 ? = c'est loin d'ici ?",
      "往 wǎng + direction = vers : 往前走 = allez tout droit.",
    ],
    sentences: [
      { fr: "Excusez-moi, où est la gare ?", zh: ["请问，火车站在哪儿？", "请问，火车站在哪里？"], tag: "question", tip: "请问 qǐngwèn = excusez-moi (pour poser une question)." },
      { fr: "C'est loin d'ici ?", zh: ["离这儿远吗？", "离这里远吗？"], tag: "question", tip: "离 = à distance de." },
      { fr: "Tournez à droite.", zh: ["往右拐。", "向右转。", "右转。"], tag: "base", tip: "右 yòu = droite, 左 zuǒ = gauche, 拐 guǎi = tourner." },
      { fr: "Allez tout droit.", zh: ["一直往前走。", "往前走。", "一直走。"], tag: "base", tip: "一直 = tout droit / sans arrêt." },
      { fr: "La pharmacie est à côté de la banque.", zh: ["药店在银行旁边。"], tag: "base", tip: "X 在 Y 旁边 = X est à côté de Y." },
      { fr: "Je me suis perdu.", zh: ["我迷路了。"], tag: "passé", tip: "迷路 mílù = se perdre ; 了 = c'est arrivé." },
      { fr: "Il faut combien de minutes à pied ?", zh: ["走路要几分钟？", "走路要多少分钟？"], tag: "question", tip: "要 = il faut (du temps). 几 = combien (petit nombre)." },
      { fr: "Merci, tu es très gentil.", zh: ["谢谢，你人真好。", "谢谢，你真好。"], tag: "base", tip: "你人真好 = tu es vraiment quelqu'un de bien." },
    ],
  },

  /* ---------- NIVEAU 2 — le passé ---------- */
  {
    day: 5, level: 2, theme: "Raconter sa journée d'hier", tense: "Passé (了)",
    notes: [
      "Pas de conjugaison : le moment est donné par un mot de temps (昨天 = hier) placé avant ou après le sujet.",
      "了 le après le verbe = l'action est accomplie : 我吃了饭.",
      "Négation du passé : 没(有) + verbe, SANS 了 : 我没去 = je n'y suis pas allé.",
      "昨天我… et 我昨天… sont tous les deux corrects.",
    ],
    sentences: [
      { fr: "Hier, j'ai mangé au restaurant.", zh: ["我昨天在饭馆吃饭了。", "昨天我在饭馆吃饭了。", "我昨天在餐厅吃饭了。"], tag: "passé", tip: "Le lieu (在饭馆) vient avant le verbe." },
      { fr: "Je me suis levé tôt.", zh: ["我起得很早。", "我很早就起床了。", "我起床起得很早。"], tag: "passé", tip: "起床 qǐchuáng = se lever. 得 introduit la manière." },
      { fr: "Nous avons vu un film.", zh: ["我们看了一部电影。", "我们看了电影。"], tag: "passé", tip: "部 bù = classificateur des films." },
      { fr: "Elle est arrivée en retard.", zh: ["她迟到了。"], tag: "passé", tip: "迟到 chídào = arriver en retard." },
      { fr: "J'ai beaucoup travaillé.", zh: ["我工作了很多。", "我做了很多工作。"], tag: "passé", tip: "很多 = beaucoup." },
      { fr: "Je ne suis pas allé au travail.", zh: ["我没去上班。", "我没有去上班。"], tag: "passé", tip: "Négation du passé : 没 + verbe, sans 了." },
      { fr: "Qu'est-ce que tu as fait hier ?", zh: ["你昨天做了什么？", "昨天你做了什么？", "你昨天干什么了？"], tag: "question", tip: "干 gàn = faire (oral)." },
      { fr: "Il y a eu beaucoup de problèmes.", zh: ["出了很多问题。", "有很多问题。"], tag: "passé", tip: "出问题 = il y a un problème (qui survient)." },
    ],
  },
  {
    day: 6, level: 2, theme: "Le week-end dernier", tense: "Passé (了)",
    notes: [
      "上 = dernier / précédent (上个周末), 下 = prochain (下个周末).",
      "Durée après le verbe : 我游了一个小时 = j'ai nagé une heure.",
      "跟 gēn + personne = avec : 跟朋友 = avec des amis.",
    ],
    sentences: [
      { fr: "Le week-end dernier, je suis allé à la plage.", zh: ["上个周末我去了海边。", "我上个周末去了海边。", "上个周末我去海边了。"], tag: "passé", tip: "海边 hǎibiān = bord de mer, plage." },
      { fr: "Nous sommes allés en bateau.", zh: ["我们坐船去了。", "我们去坐船了。"], tag: "passé", tip: "坐 zuò = prendre (un moyen de transport)." },
      { fr: "J'ai joué au foot avec des amis.", zh: ["我跟朋友踢了足球。", "我和朋友踢足球了。", "我跟朋友踢足球了。"], tag: "passé", tip: "踢 tī = taper du pied : 踢足球 = jouer au foot." },
      { fr: "Je me suis blessé à la jambe.", zh: ["我的腿受伤了。", "我腿受伤了。"], tag: "passé", tip: "受伤 shòushāng = se blesser." },
      { fr: "Mes amis sont venus me voir.", zh: ["我的朋友来看我了。", "朋友来看我了。"], tag: "passé", tip: "来看 = venir voir." },
      { fr: "On s'est bien amusés.", zh: ["我们玩得很开心。"], tag: "passé", tip: "玩得很开心 = s'amuser beaucoup (得 + manière)." },
      { fr: "J'ai nagé une heure.", zh: ["我游了一个小时。", "我游泳游了一个小时。"], tag: "passé", tip: "La durée se place après le verbe." },
      { fr: "Il y avait beaucoup de poissons.", zh: ["有很多鱼。", "那里有很多鱼。"], tag: "passé", tip: "鱼 yú = poisson (vivant ou à manger)." },
    ],
  },
  {
    day: 7, level: 2, theme: "Souvenirs d'enfance", tense: "Passé (habitude)",
    notes: [
      "小时候 = quand j'étais petit. Pour une habitude passée, pas de 了 : 我小时候常常踢足球.",
      "以前 = avant, autrefois. 常常 = souvent.",
      "过 guo après le verbe = avoir déjà fait (expérience) : 我去过中国.",
    ],
    sentences: [
      { fr: "Quand j'étais petit, je jouais au foot.", zh: ["我小时候踢足球。", "小时候我常常踢足球。", "我小时候常常踢足球。", "小时候我踢足球。"], tag: "habitude", tip: "Habitude passée : pas de 了." },
      { fr: "Nous habitions près de la mer.", zh: ["我们以前住在海边。", "以前我们住在海边。", "我们以前住在海附近。"], tag: "habitude", tip: "以前 = avant, autrefois." },
      { fr: "Ma grand-mère cuisinait très bien.", zh: ["我奶奶做饭做得很好。", "我奶奶做饭很好吃。", "我外婆做饭做得很好。"], tag: "habitude", tip: "奶奶 = grand-mère paternelle, 外婆 = maternelle." },
      { fr: "Chaque été, on partait en Espagne.", zh: ["每年夏天我们都去西班牙。", "每个夏天我们都去西班牙。"], tag: "habitude", tip: "每… 都… = chaque… (都 est obligatoire)." },
      { fr: "Je n'avais pas peur du noir.", zh: ["我以前不怕黑。", "我小时候不怕黑。"], tag: "habitude", tip: "怕 pà = avoir peur. Habitude passée : négation 不." },
      { fr: "Je suis déjà allé en Chine.", zh: ["我去过中国。"], tag: "expérience", tip: "过 = expérience vécue." },
      { fr: "Je n'ai jamais mangé de canard laqué.", zh: ["我没吃过北京烤鸭。", "我从来没吃过北京烤鸭。"], tag: "expérience", tip: "没 + verbe + 过 = n'avoir jamais fait." },
      { fr: "À l'école, j'ai appris l'espagnol.", zh: ["我在学校学了西班牙语。", "在学校我学了西班牙语。", "我在学校学过西班牙语。"], tag: "passé", tip: "学 xué = apprendre / étudier." },
    ],
  },

  /* ---------- NIVEAU 3 — le futur ---------- */
  {
    day: 8, level: 3, theme: "Mes projets", tense: "Futur",
    notes: [
      "要 yào + verbe = aller faire (futur proche / intention).",
      "会 huì + verbe = futur probable (« ça va arriver »).",
      "打算 dǎsuàn = avoir l'intention de. 明年 = l'année prochaine.",
    ],
    sentences: [
      { fr: "Demain, je vais travailler.", zh: ["我明天要上班。", "明天我要上班。", "我明天要工作。", "明天我要工作。"], tag: "futur", tip: "要 + verbe = futur proche." },
      { fr: "L'année prochaine, j'apprendrai le chinois.", zh: ["明年我要学中文。", "我明年要学中文。", "明年我会学中文。", "我明年会学中文。"], tag: "futur", tip: "中文 = langue chinoise." },
      { fr: "Nous partirons en vacances en août.", zh: ["我们八月去度假。", "我们八月要去度假。", "八月我们要去度假。"], tag: "futur", tip: "Les mois : 八月 = 8e mois = août." },
      { fr: "Je pense que ça va marcher.", zh: ["我觉得会成功的。", "我觉得会成功。", "我觉得能成功。"], tag: "futur", tip: "觉得 juéde = penser, trouver. 会…的 = sûrement." },
      { fr: "Un jour, je serai bilingue.", zh: ["总有一天我会说两种语言。", "有一天我会说两种语言。"], tag: "futur", tip: "总有一天 = un jour ou l'autre." },
      { fr: "J'ai l'intention de déménager.", zh: ["我打算搬家。"], tag: "futur", tip: "搬家 bānjiā = déménager." },
      { fr: "Je vais faire une nouvelle application.", zh: ["我要做一个新的应用。", "我要做一个新应用。", "我要做一个新的app。"], tag: "futur", tip: "应用 yìngyòng = application." },
      { fr: "Il va pleuvoir.", zh: ["要下雨了。", "快下雨了。"], tag: "futur", tip: "要…了 = ça va bientôt arriver." },
    ],
  },
  {
    day: 9, level: 3, theme: "Organiser un voyage", tense: "Futur",
    notes: [
      "坐 + transport = prendre : 坐飞机 (avion), 坐火车 (train), 坐船 (bateau).",
      "Heures : 八点 = 8 h, 八点半 = 8 h 30. L'heure se place avant le verbe.",
      "第一 = premier, 第二 = deuxième… (第 + nombre).",
    ],
    sentences: [
      { fr: "Je réserverai un hôtel ce soir.", zh: ["我今晚会订酒店。", "今晚我要订酒店。", "我今天晚上要订酒店。"], tag: "futur", tip: "订 dìng = réserver, 酒店 = hôtel." },
      { fr: "On prendra le train de huit heures.", zh: ["我们坐八点的火车。", "我们要坐八点的火车。"], tag: "futur", tip: "八点的火车 = le train de 8 h (的 relie)." },
      { fr: "Tu viendras avec moi ?", zh: ["你会跟我一起去吗？", "你跟我一起去吗？", "你要跟我一起去吗？"], tag: "question", tip: "跟我一起 = avec moi, ensemble." },
      { fr: "Nous visiterons le musée demain.", zh: ["我们明天去参观博物馆。", "明天我们去参观博物馆。", "我们明天要参观博物馆。"], tag: "futur", tip: "参观 cānguān = visiter (un lieu)." },
      { fr: "Combien coûte ta chambre par nuit ?", zh: ["你的房间一晚多少钱？", "你的房间一个晚上多少钱？"], tag: "question", tip: "一晚 = une nuit." },
      { fr: "C'est mon troisième voyage en Chine.", zh: ["这是我第三次来中国。", "这是我第三次去中国。"], tag: "base", tip: "第三次 = la troisième fois." },
      { fr: "Le premier jour, je veux visiter le centre-ville.", zh: ["第一天我想参观市中心。", "第一天我想去市中心。"], tag: "futur", tip: "第一天 = le premier jour." },
      { fr: "Ça va être un super voyage.", zh: ["这会是一次很棒的旅行。", "这次旅行会很棒。"], tag: "futur", tip: "棒 bàng = génial." },
    ],
  },
  {
    day: 10, level: 3, theme: "Au restaurant", tense: "Mix",
    notes: [
      "Commander : 我要… / 来一个… (oral : « amenez-moi un… »).",
      "辣 là = piquant. 不辣 = pas piquant, 微辣 = un peu piquant.",
      "好吃 = bon (à manger), 好喝 = bon (à boire).",
    ],
    sentences: [
      { fr: "Une table pour deux, s'il vous plaît.", zh: ["两个人，谢谢。", "请给我们一张两个人的桌子。", "我们两个人。"], tag: "base", tip: "À l'entrée, on annonce simplement le nombre : 两个人." },
      { fr: "Qu'est-ce que vous me conseillez ?", zh: ["你推荐什么？", "你有什么推荐？"], tag: "question", tip: "推荐 tuījiàn = recommander." },
      { fr: "Je prends le poisson.", zh: ["我要鱼。", "我要这个鱼。"], tag: "base", tip: "要 = je prends (pour commander)." },
      { fr: "Pas trop piquant, s'il vous plaît.", zh: ["不要太辣。", "请不要太辣。"], tag: "base", tip: "不要太… = pas trop…" },
      { fr: "C'était délicieux.", zh: ["很好吃。", "太好吃了。", "非常好吃。"], tag: "base", tip: "好吃 = bon à manger." },
      { fr: "J'ai essayé les escargots mais je n'ai pas aimé.", zh: ["我试了蜗牛，但是不喜欢。", "我尝了蜗牛，但是我不喜欢。", "我吃了蜗牛，但是不喜欢。"], tag: "passé", tip: "尝 cháng = goûter. 但是 = mais." },
      { fr: "Encore une bière, s'il vous plaît.", zh: ["再来一瓶啤酒。", "请再给我一瓶啤酒。", "再来一杯啤酒。"], tag: "base", tip: "再 zài = encore (une fois de plus)." },
      { fr: "Est-ce qu'on peut payer séparément ?", zh: ["可以分开付吗？", "我们可以分开付钱吗？"], tag: "question", tip: "可以 kěyǐ = pouvoir (avoir le droit)." },
    ],
  },

  /* ---------- NIVEAU 4 — situations pratiques ---------- */
  {
    day: 11, level: 4, theme: "Chez le médecin", tense: "Mix",
    notes: [
      "…疼 téng = avoir mal à… : 头疼 = mal à la tête.",
      "从…开始 = depuis… : 从昨天开始 = depuis hier.",
      "得 děi + verbe = devoir (obligation, oral).",
    ],
    sentences: [
      { fr: "J'ai mal à la tête depuis hier.", zh: ["我从昨天开始头疼。", "从昨天开始我头疼。", "我从昨天就头疼。"], tag: "base", tip: "头疼 tóuténg = mal à la tête." },
      { fr: "Je suis tombé malade la semaine dernière.", zh: ["我上个星期生病了。", "上个星期我生病了。", "我上周生病了。"], tag: "passé", tip: "生病 shēngbìng = tomber malade." },
      { fr: "Tu dois te reposer.", zh: ["你得好好休息。", "你要好好休息。", "你应该休息。"], tag: "base", tip: "好好 = bien, comme il faut." },
      { fr: "J'ai de la fièvre.", zh: ["我发烧了。"], tag: "base", tip: "发烧 fāshāo = avoir de la fièvre." },
      { fr: "Je suis tombé et je me suis fait mal au genou.", zh: ["我摔倒了，膝盖受伤了。", "我摔倒了，把膝盖摔伤了。"], tag: "passé", tip: "摔倒 shuāidǎo = tomber (chute)." },
      { fr: "Prends ce médicament deux fois par jour.", zh: ["这个药一天吃两次。", "这个药每天吃两次。"], tag: "base", tip: "En chinois on « mange » les médicaments : 吃药." },
      { fr: "Tu te sens mieux ?", zh: ["你好点了吗？", "你感觉好点了吗？"], tag: "question", tip: "好点了 = aller un peu mieux." },
      { fr: "J'espère guérir vite.", zh: ["我希望快点好起来。", "希望我快点好。"], tag: "souhait", tip: "希望 xīwàng = espérer." },
    ],
  },
  {
    day: 12, level: 4, theme: "Au téléphone / livraison", tense: "Progressif",
    notes: [
      "正在 / 在 + verbe (+ 呢) = être en train de : 我在开车呢.",
      "还没 + verbe = pas encore : 包裹还没到.",
      "已经…了 = déjà : 我已经到了.",
    ],
    sentences: [
      { fr: "Je t'appelle pour le rendez-vous de demain.", zh: ["我打电话是为了明天的约会。", "我给你打电话是因为明天的见面。"], tag: "base", tip: "打电话 = téléphoner. 约会 = rendez-vous." },
      { fr: "Je suis en train de conduire.", zh: ["我在开车。", "我正在开车。", "我在开车呢。"], tag: "progressif", tip: "在 / 正在 + verbe = en train de." },
      { fr: "Le livreur est perdu.", zh: ["快递员迷路了。", "送货的人迷路了。"], tag: "passé", tip: "快递员 kuàidìyuán = livreur." },
      { fr: "Le colis n'est pas encore arrivé.", zh: ["包裹还没到。", "包裹还没有到。"], tag: "passé", tip: "还没 = pas encore." },
      { fr: "J'ai mal écrit l'adresse.", zh: ["我把地址写错了。", "我写错地址了。"], tag: "passé", tip: "写错 = mal écrire (verbe + résultat)." },
      { fr: "Je t'envoie ma position sur WeChat.", zh: ["我在微信上给你发位置。", "我微信发你位置。", "我用微信给你发位置。"], tag: "base", tip: "微信 Wēixìn = WeChat. 发 = envoyer." },
      { fr: "Je suis déjà arrivé.", zh: ["我已经到了。"], tag: "passé", tip: "已经…了 = déjà." },
      { fr: "Tu peux parler plus lentement ?", zh: ["你可以说慢一点吗？", "请说慢一点。", "你能说慢一点吗？"], tag: "question", tip: "慢一点 = un peu plus lentement." },
    ],
  },
  {
    day: 13, level: 4, theme: "Donner son avis", tense: "Mix",
    notes: [
      "我觉得 = je trouve / je pense. 我同意 = je suis d'accord.",
      "Comparaison : A 比 B + adjectif : 这个比那个好.",
      "有点儿 + adjectif = un peu (négatif) : 有点儿贵.",
    ],
    sentences: [
      { fr: "Je pense que tu as raison.", zh: ["我觉得你说得对。", "我觉得你是对的。"], tag: "base", tip: "说得对 = dire juste." },
      { fr: "À mon avis, c'est une bonne idée.", zh: ["我觉得这是个好主意。", "我认为这是一个好主意。"], tag: "base", tip: "主意 zhǔyi = idée." },
      { fr: "Je ne suis pas d'accord avec toi.", zh: ["我不同意你的看法。", "我不同意你。"], tag: "base", tip: "同意 = être d'accord." },
      { fr: "Ça dépend de la situation.", zh: ["这要看情况。", "看情况。"], tag: "base", tip: "看情况 = ça dépend (litt. « regarder la situation »)." },
      { fr: "Celui-ci est mieux que celui-là.", zh: ["这个比那个好。"], tag: "comparaison", tip: "A 比 B 好 = A est mieux que B." },
      { fr: "C'est un peu cher.", zh: ["有点儿贵。", "有点贵。"], tag: "base", tip: "有点儿 + adjectif = un peu (souvent négatif)." },
      { fr: "Utiliser Claude paraît difficile, mais c'est très facile.", zh: ["用Claude看起来很难，但其实很容易。", "用Claude看起来很难，但是很容易。"], tag: "base", tip: "看起来 = avoir l'air. 其实 = en fait." },
      { fr: "Je préfère rester à la maison.", zh: ["我更想待在家里。", "我还是想待在家。", "我比较想在家。"], tag: "comparaison", tip: "待在家 dāi zài jiā = rester à la maison." },
    ],
  },
  {
    day: 14, level: 4, theme: "Faire des projets ensemble", tense: "Mix",
    notes: [
      "…以前 = avant de… (se place APRÈS l'action) : 吃饭以前 = avant de manger.",
      "…以后 = après… : 下班以后 = après le travail.",
      "吧 ba à la fin = suggestion : 我们走吧 = allons-y.",
    ],
    sentences: [
      { fr: "Si j'ai le temps, je viendrai te voir.", zh: ["如果我有时间，我就去看你。", "我有时间的话，就去看你。", "如果有时间，我就去看你。"], tag: "hypothèse", tip: "如果…就… = si… alors…" },
      { fr: "On pourrait se voir ce week-end.", zh: ["我们这个周末可以见面。", "这个周末我们见个面吧。", "我们这个周末见面吧。"], tag: "base", tip: "吧 = suggestion." },
      { fr: "Avant de dîner, je nage dans la mer.", zh: ["吃晚饭以前，我去海里游泳。", "晚饭前我在海里游泳。", "吃晚饭前，我在海里游泳。"], tag: "base", tip: "…以前 / …前 = avant de… (après l'action en chinois)." },
      { fr: "Après le travail, allons boire un verre.", zh: ["下班以后，我们去喝一杯吧。", "下班后我们去喝一杯吧。"], tag: "base", tip: "下班 = finir le travail." },
      { fr: "J'aimerais apprendre à cuisiner.", zh: ["我想学做饭。"], tag: "base", tip: "学 + verbe = apprendre à." },
      { fr: "Ça fait longtemps qu'on ne s'est pas vus.", zh: ["好久不见。", "我们好久没见了。"], tag: "base", tip: "好久不见 = expression figée, très courante." },
      { fr: "J'ai hâte de te revoir.", zh: ["我很期待再见到你。", "很想再见到你。"], tag: "base", tip: "期待 qīdài = attendre avec impatience." },
      { fr: "Allons-y !", zh: ["我们走吧！", "走吧！"], tag: "base", tip: "走 = partir, marcher." },
    ],
  },
  {
    day: 15, level: 4, theme: "Résoudre un imprévu", tense: "Mix",
    notes: [
      "Verbe + résultat : 找到 (chercher → trouver), 丢了 (perdu), 修好 (réparé).",
      "把 bǎ + objet + verbe + résultat : 我把钥匙丢了 = j'ai perdu mes clés (insiste sur l'objet).",
    ],
    sentences: [
      { fr: "J'ai perdu mon téléphone dans le métro.", zh: ["我的手机在地铁上丢了。", "我在地铁上把手机丢了。", "我在地铁丢了手机。"], tag: "passé", tip: "丢 diū = perdre." },
      { fr: "Quelqu'un l'a trouvé ?", zh: ["有人找到了吗？", "有人找到它了吗？"], tag: "question", tip: "找到 = trouver (chercher + atteindre)." },
      { fr: "Je ne sais pas quoi faire.", zh: ["我不知道怎么办。", "我不知道该怎么办。"], tag: "base", tip: "怎么办 = que faire ?" },
      { fr: "Je dois en acheter un nouveau.", zh: ["我得买一个新的。", "我要买个新的。"], tag: "base", tip: "新的 = un nouveau (le nom est sous-entendu)." },
      { fr: "J'ai trouvé mes clés.", zh: ["我找到钥匙了。", "我找到我的钥匙了。"], tag: "passé", tip: "钥匙 yàoshi = clé(s)." },
      { fr: "Heureusement, tout va bien maintenant.", zh: ["还好，现在一切都好。", "幸好现在都没事了。", "还好现在没事了。"], tag: "base", tip: "还好 = heureusement. 没事 = ça va, rien de grave." },
      { fr: "Le wifi ne marche pas.", zh: ["无线网不能用。", "WiFi用不了。", "wifi不能用。"], tag: "base", tip: "用不了 = impossible à utiliser." },
      { fr: "Pas de problème.", zh: ["没问题。"], tag: "base", tip: "L'expression passe-partout." },
    ],
  },

  /* ---------- NIVEAU 5 — vie quotidienne avancée ---------- */
  {
    day: 16, level: 5, theme: "Au marché / négocier", tense: "Mix",
    notes: [
      "Argent : 块 kuài (oral) = 元 yuán (écrit). 十块 = 10 yuans.",
      "便宜一点儿 = un peu moins cher. 打折 = faire une réduction.",
      "Nombres : 十一 (11), 二十 (20), 一百 (100), 一百零五 (105), 一千 (1000).",
    ],
    sentences: [
      { fr: "Combien coûtent les tomates ?", zh: ["西红柿多少钱？", "西红柿怎么卖？"], tag: "question", tip: "怎么卖 = comment ça se vend (au marché)." },
      { fr: "C'est trop cher pour moi.", zh: ["对我来说太贵了。"], tag: "base", tip: "对我来说 = pour moi." },
      { fr: "Vous pouvez faire un peu moins cher ?", zh: ["可以便宜一点儿吗？", "能便宜点吗？", "可以便宜一点吗？"], tag: "question", tip: "便宜 piányi = bon marché." },
      { fr: "Je prends un kilo.", zh: ["我要一公斤。", "我买一公斤。"], tag: "base", tip: "公斤 = kilo (斤 = demi-kilo, très utilisé)." },
      { fr: "Ça fait quatre-vingt-cinq yuans.", zh: ["一共八十五块。", "一共八十五元。"], tag: "base", tip: "一共 = au total. 85 = 八十五." },
      { fr: "Gardez la monnaie.", zh: ["不用找了。"], tag: "base", tip: "找钱 = rendre la monnaie ; 不用找了 = pas besoin de rendre." },
      { fr: "Il y a une réduction ?", zh: ["有折扣吗？", "打折吗？"], tag: "question", tip: "打折 dǎzhé = faire une remise." },
      { fr: "J'ai déjà dépensé deux cent cinquante yuans.", zh: ["我已经花了两百五十块。", "我已经花了二百五十块。"], tag: "passé", tip: "花 huā = dépenser. 250 = 两百五十 (二百五 est aussi une insulte, « idiot » !)." },
    ],
  },
  {
    day: 17, level: 5, theme: "Louer un appartement", tense: "Mix",
    notes: [
      "房子 = logement, 公寓 = appartement, 别墅 = villa, 房东 = propriétaire, 房租 = loyer.",
      "搬家 = déménager. 合租 = colocation.",
      "Étages : 一楼 = rez-de-chaussée (1er niveau), 二楼 = 1er étage.",
    ],
    sentences: [
      { fr: "Je cherche un appartement à louer.", zh: ["我在找房子租。", "我想租一套公寓。", "我在找公寓出租。"], tag: "progressif", tip: "租 zū = louer. 套 = classificateur des appartements." },
      { fr: "Combien coûte le loyer par mois ?", zh: ["房租一个月多少钱？", "一个月房租多少钱？"], tag: "question", tip: "房租 fángzū = loyer." },
      { fr: "Les charges sont comprises ?", zh: ["包括水电费吗？", "水电费包括在内吗？"], tag: "question", tip: "水电费 = eau et électricité." },
      { fr: "J'aimerais le visiter demain.", zh: ["我想明天去看看。", "我明天想去看房。"], tag: "base", tip: "看看 = jeter un œil (verbe redoublé = « un peu »)." },
      { fr: "Quand est-ce que je peux emménager ?", zh: ["我什么时候可以搬进来？", "什么时候能搬进去？"], tag: "question", tip: "搬进来 = emménager (ici)." },
      { fr: "Je suis en colocation.", zh: ["我跟别人合租。", "我和别人合租。"], tag: "base", tip: "合租 hézū = louer à plusieurs." },
      { fr: "J'habite au deuxième étage.", zh: ["我住在三楼。", "我住三楼。"], tag: "base", tip: "En Chine, le rez-de-chaussée est 一楼 : notre 2e étage = 三楼." },
      { fr: "Le propriétaire est très sympa.", zh: ["房东人很好。", "房东很好。"], tag: "base", tip: "房东 fángdōng = propriétaire." },
    ],
  },
  {
    day: 18, level: 5, theme: "Exprimer ses émotions", tense: "Mix",
    notes: [
      "Émotions + 很 : 很开心 (content), 很累 (fatigué), 很紧张 (stressé).",
      "让 ràng = rendre, faire que : 这让我很难过 = ça me rend triste.",
      "别 bié + verbe = ne… pas (impératif) : 别担心 = ne t'inquiète pas.",
    ],
    sentences: [
      { fr: "Je suis très content de te voir.", zh: ["见到你很高兴。", "看到你我很开心。", "我很高兴见到你。"], tag: "base", tip: "高兴 / 开心 = content." },
      { fr: "Ça m'a rendu triste.", zh: ["这让我很难过。", "这让我很伤心。"], tag: "passé", tip: "让 = rendre. 难过 = triste." },
      { fr: "J'ai peur de me tromper.", zh: ["我怕说错。", "我怕弄错。", "我害怕犯错。"], tag: "base", tip: "怕 = avoir peur de. 说错 = mal dire." },
      { fr: "Je suis fatigué aujourd'hui.", zh: ["我今天很累。", "今天我很累。"], tag: "base", tip: "累 lèi = fatigué." },
      { fr: "Ne t'inquiète pas, tout ira bien.", zh: ["别担心，一切都会好的。", "别担心，会好的。"], tag: "futur", tip: "别 + verbe = ne… pas (impératif)." },
      { fr: "Je suis jaloux !", zh: ["我好羡慕！", "我好羡慕你！", "真羡慕你！"], tag: "base", tip: "羡慕 xiànmù = envier (gentiment)." },
      { fr: "Il est de mauvaise humeur.", zh: ["他心情不好。"], tag: "base", tip: "心情 xīnqíng = humeur." },
      { fr: "J'ai eu très peur.", zh: ["我吓坏了。", "我很害怕。", "吓死我了。"], tag: "passé", tip: "吓死我了 = j'ai eu une peur bleue (litt. « ça m'a fait mourir de peur »)." },
    ],
  },
  {
    day: 19, level: 5, theme: "Raconter une anecdote", tense: "Passé (mix)",
    notes: [
      "…的时候 = quand… : 我踢球的时候 = quand je jouais au foot.",
      "正在…的时候 = pendant que (action en cours).",
      "然后 = ensuite, 后来 = plus tard, 结果 = résultat / finalement.",
    ],
    sentences: [
      { fr: "L'autre jour, il m'est arrivé un truc drôle.", zh: ["前几天我遇到了一件好笑的事。", "那天我遇到一件很好笑的事。"], tag: "passé", tip: "遇到 = rencontrer, tomber sur. 件 = classificateur des affaires." },
      { fr: "Quand je marchais dans la rue, je l'ai vu.", zh: ["我在街上走的时候，看见了他。", "我在路上走的时候看到了他。"], tag: "passé", tip: "…的时候 = quand…" },
      { fr: "Au début, je n'ai pas compris.", zh: ["一开始我没听懂。", "开始我没明白。", "一开始我没懂。"], tag: "passé", tip: "听懂 = comprendre (à l'écoute)." },
      { fr: "Ensuite, on a beaucoup ri.", zh: ["然后我们笑了很久。", "后来我们笑得很开心。", "然后我们笑了很多。"], tag: "passé", tip: "然后 = ensuite." },
      { fr: "Je ne l'oublierai jamais.", zh: ["我永远不会忘记。", "我永远不会忘。"], tag: "futur", tip: "永远 = pour toujours." },
      { fr: "Pendant que je jouais, j'ai sauté et je suis tombé.", zh: ["我在玩的时候，跳起来摔倒了。", "玩的时候我跳起来，结果摔倒了。"], tag: "passé", tip: "结果 = résultat, du coup." },
      { fr: "Beaucoup de poissons sont venus et j'ai eu peur.", zh: ["来了很多鱼，我吓了一跳。", "游过来很多鱼，我很害怕。"], tag: "passé", tip: "吓了一跳 = sursauter de peur." },
      { fr: "Finalement, tout s'est bien passé.", zh: ["最后一切都很顺利。", "最后都很好。"], tag: "passé", tip: "顺利 shùnlì = se dérouler sans accroc." },
    ],
  },
  {
    day: 20, level: 5, theme: "Donner des conseils", tense: "Conseils",
    notes: [
      "应该 yīnggāi = devoir (conseil). 最好 = il vaut mieux.",
      "要是我是你 = si j'étais toi.",
      "可以试试 = tu peux essayer (verbe redoublé = « un peu »).",
    ],
    sentences: [
      { fr: "Tu devrais te reposer un peu.", zh: ["你应该休息一下。", "你应该休息休息。"], tag: "conseil", tip: "一下 après le verbe = un peu, un moment." },
      { fr: "À ta place, je l'appellerais.", zh: ["要是我是你，我会给他打电话。", "如果我是你，我就给他打电话。"], tag: "hypothèse", tip: "要是 / 如果 = si." },
      { fr: "Il vaut mieux partir tôt.", zh: ["最好早点出发。", "最好早一点走。"], tag: "conseil", tip: "最好 = le mieux est de." },
      { fr: "Tu pourrais essayer autre chose.", zh: ["你可以试试别的。", "你可以试试别的方法。"], tag: "conseil", tip: "试试 = essayer un peu." },
      { fr: "Ne bois pas trop.", zh: ["别喝太多。", "不要喝太多。"], tag: "conseil", tip: "别 / 不要 = ne… pas (impératif)." },
      { fr: "Il faut boire beaucoup d'eau.", zh: ["要多喝水。", "应该多喝水。"], tag: "conseil", tip: "多 + verbe = faire davantage : 多喝水." },
      { fr: "Je te conseille d'en parler avec elle.", zh: ["我建议你跟她谈谈。", "我建议你和她聊聊。"], tag: "conseil", tip: "建议 jiànyì = conseiller, suggérer." },
      { fr: "Couvre-toi bien, il fait froid.", zh: ["多穿点衣服，天气很冷。", "多穿点，天冷了。"], tag: "conseil", tip: "多穿点 = mets plus de vêtements (conseil typiquement chinois !)." },
    ],
  },

  /* ---------- NIVEAU 6 — monde et travail ---------- */
  {
    day: 21, level: 6, theme: "À l'aéroport", tense: "Mix",
    notes: [
      "航班 = vol, 登机口 = porte d'embarquement, 行李 = bagages, 护照 = passeport.",
      "Verbe + 错 = se tromper en faisant : 走错 = se tromper de chemin.",
      "误机 / 没赶上 = rater (un avion, un train).",
    ],
    sentences: [
      { fr: "À quelle heure part mon vol ?", zh: ["我的航班几点起飞？", "我的飞机几点起飞？"], tag: "question", tip: "起飞 qǐfēi = décoller." },
      { fr: "J'ai raté ma correspondance.", zh: ["我没赶上转机。", "我错过了转机。"], tag: "passé", tip: "赶上 = attraper à temps. 转机 = correspondance." },
      { fr: "Où est la porte d'embarquement ?", zh: ["登机口在哪儿？", "登机口在哪里？"], tag: "question", tip: "登机 = embarquer." },
      { fr: "Ma valise n'est pas arrivée.", zh: ["我的行李箱没到。", "我的行李没有到。"], tag: "passé", tip: "行李箱 = valise." },
      { fr: "Voici mon passeport.", zh: ["这是我的护照。"], tag: "base", tip: "护照 hùzhào = passeport." },
      { fr: "Je dois enregistrer un bagage.", zh: ["我要托运一件行李。", "我需要托运一个行李箱。"], tag: "base", tip: "托运 tuōyùn = enregistrer (en soute)." },
      { fr: "Le vol a une heure de retard.", zh: ["航班晚点一个小时。", "飞机晚点了一个小时。"], tag: "base", tip: "晚点 = être en retard (transport)." },
      { fr: "Je suis en transit.", zh: ["我在转机。"], tag: "progressif", tip: "在 + verbe = en cours." },
    ],
  },
  {
    day: 22, level: 6, theme: "Sport et santé", tense: "Mix",
    notes: [
      "运动 = faire du sport. 健身房 = salle de sport. 跑步 = courir.",
      "Fréquence : 一个星期三次 = trois fois par semaine (après le verbe ou en tête).",
      "越来越 + adjectif = de plus en plus.",
    ],
    sentences: [
      { fr: "Je vais à la salle trois fois par semaine.", zh: ["我一个星期去三次健身房。", "我每个星期去三次健身房。", "我一周去三次健身房。"], tag: "base", tip: "次 cì = fois." },
      { fr: "Je fais du sport tous les jours.", zh: ["我每天运动。", "我每天都运动。", "我每天都锻炼。"], tag: "base", tip: "每天都 = tous les jours (都 insiste)." },
      { fr: "Je me sens très bien quand je fais du sport.", zh: ["我运动的时候感觉很好。", "运动的时候我感觉很好。"], tag: "base", tip: "感觉 gǎnjué = se sentir." },
      { fr: "Je veux me remettre en forme.", zh: ["我想恢复身材。", "我想把身体练好。"], tag: "base", tip: "身材 = silhouette, forme." },
      { fr: "Je cours tous les matins.", zh: ["我每天早上跑步。", "我每天早上都跑步。"], tag: "base", tip: "早上 = le matin." },
      { fr: "Je suis de plus en plus en forme.", zh: ["我的身体越来越好了。", "我越来越健康了。"], tag: "base", tip: "越来越 = de plus en plus." },
      { fr: "Je donne des cours de Lagree.", zh: ["我教Lagree课。", "我是Lagree老师。"], tag: "base", tip: "教 jiāo = enseigner. 课 = cours." },
      { fr: "Qui a gagné le match ?", zh: ["谁赢了比赛？", "比赛谁赢了？"], tag: "question", tip: "赢 yíng = gagner, 输 shū = perdre." },
    ],
  },
  {
    day: 23, level: 6, theme: "Travail et carrière", tense: "Mix",
    notes: [
      "在 + entreprise + 工作 = travailler dans… : 我在一家公司工作.",
      "Durée depuis : 我在这儿工作两年了 = je travaille ici depuis deux ans (了 final).",
      "开会 = être en réunion, 老板 = patron, 同事 = collègue.",
    ],
    sentences: [
      { fr: "Je travaille dans une startup depuis deux ans.", zh: ["我在一家创业公司工作两年了。", "我在创业公司工作了两年了。"], tag: "base", tip: "Durée + 了 final = « depuis… et ça continue »." },
      { fr: "J'aimerais changer de travail.", zh: ["我想换工作。", "我想换一份工作。"], tag: "base", tip: "换 huàn = changer. 份 = classificateur des emplois." },
      { fr: "Nous avons une réunion importante demain.", zh: ["我们明天有一个重要的会议。", "明天我们有个重要的会。", "我们明天有个很重要的会。"], tag: "base", tip: "会议 huìyì = réunion." },
      { fr: "Mon patron m'a félicité.", zh: ["老板表扬了我。", "我的老板夸我了。"], tag: "passé", tip: "表扬 = féliciter, 夸 = complimenter." },
      { fr: "Je crée une application chaque semaine.", zh: ["我每个星期做一个应用。", "我每周做一个应用。"], tag: "base", tip: "每个星期 = chaque semaine." },
      { fr: "Mes collègues sont très sympas.", zh: ["我的同事都很好。", "我的同事人都很好。"], tag: "base", tip: "同事 tóngshì = collègue." },
      { fr: "Je suis en réunion, je te rappelle.", zh: ["我在开会，等一下给你回电话。", "我在开会，一会儿给你打回去。"], tag: "progressif", tip: "回电话 = rappeler." },
      { fr: "On utilise l'IA au travail.", zh: ["我们在工作中用人工智能。", "我们工作的时候用AI。", "我们工作用AI。"], tag: "base", tip: "人工智能 = intelligence artificielle (AI est très courant à l'oral)." },
    ],
  },
  {
    day: 24, level: 6, theme: "Technologie du quotidien", tense: "Mix",
    notes: [
      "不…了 = ne… plus : 手机不能用了 = le téléphone ne marche plus.",
      "给 gěi + personne + verbe = faire quelque chose pour / à quelqu'un : 给我发 = envoie-moi.",
      "密码 = mot de passe, 充电 = recharger, 下载 = télécharger.",
    ],
    sentences: [
      { fr: "Mon téléphone ne marche plus.", zh: ["我的手机不能用了。", "我的手机坏了。"], tag: "base", tip: "坏了 = cassé, en panne." },
      { fr: "Je dois recharger la batterie.", zh: ["我得充电。", "我要给手机充电。"], tag: "base", tip: "充电 chōngdiàn = recharger." },
      { fr: "Il y a du wifi ici ?", zh: ["这里有无线网吗？", "这儿有WiFi吗？", "这里有wifi吗？"], tag: "question", tip: "无线网 = réseau sans fil." },
      { fr: "J'ai oublié mon mot de passe.", zh: ["我忘了密码。", "我忘记密码了。", "我把密码忘了。"], tag: "passé", tip: "忘 wàng = oublier." },
      { fr: "Envoie-moi le lien.", zh: ["把链接发给我。", "给我发一下链接。", "发链接给我。"], tag: "base", tip: "链接 liànjiē = lien." },
      { fr: "Je télécharge l'application.", zh: ["我在下载这个应用。", "我下载这个应用。"], tag: "progressif", tip: "下载 xiàzài = télécharger." },
      { fr: "Cette application est très pratique.", zh: ["这个应用很方便。", "这个app很方便。"], tag: "base", tip: "方便 = pratique." },
      { fr: "Je t'ai envoyé un message.", zh: ["我给你发了消息。", "我给你发了一条信息。", "我发给你一条消息了。"], tag: "passé", tip: "条 = classificateur des messages." },
    ],
  },
  {
    day: 25, level: 6, theme: "Culture et sorties", tense: "Mix",
    notes: [
      "有空 = être libre (avoir du temps). 一起 = ensemble.",
      "Verbe + 过 + 吗 = tu as déjà… ? : 你看过吗 ?",
      "要不要 = est-ce que tu veux… ? (question affirmatif-négatif).",
    ],
    sentences: [
      { fr: "On pourrait aller au cinéma ce soir.", zh: ["我们今晚可以去看电影。", "今天晚上我们去看电影吧。", "我们今晚去看电影吧。"], tag: "base", tip: "看电影 = aller voir un film." },
      { fr: "Tu as déjà vu cette série ?", zh: ["你看过这部电视剧吗？", "这部剧你看过吗？"], tag: "expérience", tip: "电视剧 = série télé." },
      { fr: "Le concert commence à neuf heures.", zh: ["音乐会九点开始。", "演唱会九点开始。"], tag: "base", tip: "演唱会 = concert (pop), 音乐会 = concert (classique)." },
      { fr: "Tu es libre samedi ?", zh: ["你星期六有空吗？", "你周六有空吗？"], tag: "question", tip: "有空 = être libre." },
      { fr: "Tu veux sortir avec nous ?", zh: ["你要不要跟我们一起出去？", "你想跟我们出去玩吗？"], tag: "question", tip: "要不要 = veux-tu ou pas ?" },
      { fr: "Je n'ai jamais essayé ce restaurant.", zh: ["我从来没去过这家餐厅。", "我没去过这家饭馆。", "我没吃过这家餐厅。"], tag: "expérience", tip: "家 = classificateur des commerces." },
      { fr: "Les billets sont épuisés.", zh: ["票卖完了。", "票已经卖完了。"], tag: "passé", tip: "卖完 = vendu jusqu'au bout." },
      { fr: "C'était super !", zh: ["太棒了！", "真好玩！", "太好玩了！"], tag: "base", tip: "好玩 = amusant." },
    ],
  },

  /* ---------- NIVEAU 7 — nuances ---------- */
  {
    day: 26, level: 7, theme: "Se plaindre poliment", tense: "Mix",
    notes: [
      "不好意思 = excusez-moi / désolé (léger). 对不起 = pardon (plus fort).",
      "是…的 met l'accent sur un détail d'une action passée : 我是昨天到的 = c'est hier que je suis arrivé.",
      "等了一个小时了 = ça fait une heure que j'attends.",
    ],
    sentences: [
      { fr: "Excusez-moi, il y a une erreur sur l'addition.", zh: ["不好意思，账单有错。", "不好意思，账单算错了。"], tag: "base", tip: "账单 = addition, facture." },
      { fr: "Ce n'est pas ce que j'avais commandé.", zh: ["这不是我点的。", "这不是我点的菜。"], tag: "passé", tip: "点菜 = commander (au restaurant)." },
      { fr: "La chambre n'est pas propre.", zh: ["房间不干净。"], tag: "base", tip: "干净 gānjìng = propre." },
      { fr: "Je voudrais parler au responsable.", zh: ["我想跟你们经理谈谈。", "我想找你们经理。"], tag: "base", tip: "经理 = responsable, manager." },
      { fr: "Ça fait une heure que j'attends.", zh: ["我等了一个小时了。", "我已经等了一个小时了。"], tag: "passé", tip: "Verbe + 了 + durée + 了 = ça dure depuis…" },
      { fr: "C'est hier que je suis arrivé.", zh: ["我是昨天到的。"], tag: "passé", tip: "是…的 = c'est… que (insiste sur quand/où/comment)." },
      { fr: "Pouvez-vous changer de chambre ?", zh: ["可以给我换个房间吗？", "能换一个房间吗？"], tag: "question", tip: "换 = changer." },
      { fr: "Ce n'est pas grave.", zh: ["没关系。"], tag: "base", tip: "Réponse classique à 对不起." },
    ],
  },
  {
    day: 27, level: 7, theme: "Faire des hypothèses", tense: "Hypothèse",
    notes: [
      "如果… (的话)，就… = si…, alors… Le chinois ne change pas le verbe : le contexte fait l'irréel.",
      "要是 = si (oral). 早知道 = si j'avais su.",
      "会 dans la 2e partie = conditionnel : 我会去 = j'irais.",
    ],
    sentences: [
      { fr: "Si j'avais de l'argent, je voyagerais partout.", zh: ["如果我有钱，我会去世界各地旅行。", "要是我有钱，我就到处旅行。", "如果我有钱，我就去到处旅行。"], tag: "hypothèse", tip: "到处 = partout." },
      { fr: "Si j'étais toi, je ne ferais pas ça.", zh: ["如果我是你，我不会这么做。", "要是我是你，我就不这样做。"], tag: "hypothèse", tip: "这么做 = faire ainsi." },
      { fr: "Qu'est-ce que tu ferais à ma place ?", zh: ["如果你是我，你会怎么做？", "你要是我，你会怎么办？"], tag: "hypothèse", tip: "怎么做 = comment faire." },
      { fr: "Si on avait plus de temps, on resterait.", zh: ["如果我们有更多时间，我们就会留下来。", "要是时间多一点，我们就留下来。"], tag: "hypothèse", tip: "留下来 = rester." },
      { fr: "Si j'avais su, je ne serais pas venu.", zh: ["早知道我就不来了。", "早知道的话，我就不来了。"], tag: "hypothèse", tip: "早知道 = si j'avais su (expression figée)." },
      { fr: "S'il pleut, on ne sort pas.", zh: ["如果下雨，我们就不出去。", "下雨的话，我们就不出去。"], tag: "hypothèse", tip: "…的话 = si… (à la fin de la condition)." },
      { fr: "Même s'il fait froid, j'irai nager.", zh: ["即使很冷，我也会去游泳。", "就算天气冷，我也要去游泳。"], tag: "hypothèse", tip: "即使 / 就算…也… = même si…" },
      { fr: "Tant que tu es content, ça me va.", zh: ["只要你开心就好。", "只要你高兴，我就没问题。"], tag: "hypothèse", tip: "只要…就… = du moment que…" },
    ],
  },
  {
    day: 28, level: 7, theme: "Souhaits", tense: "Souhait",
    notes: [
      "希望 = espérer (suivi d'une phrase complète) : 希望你好.",
      "祝 zhù + personne + souhait = je te souhaite… : 祝你生日快乐.",
      "想要 = vouloir, 让 = laisser / faire que (让你来 = que tu viennes).",
    ],
    sentences: [
      { fr: "J'espère que tu vas bien.", zh: ["希望你一切都好。", "我希望你很好。", "希望你一切安好。"], tag: "souhait", tip: "一切 = tout." },
      { fr: "Je veux que tu viennes avec moi.", zh: ["我想让你跟我一起去。", "我希望你跟我一起去。"], tag: "souhait", tip: "让 + personne + verbe = que quelqu'un fasse." },
      { fr: "Pourvu qu'il fasse beau demain.", zh: ["希望明天天气好。", "但愿明天是个好天气。"], tag: "souhait", tip: "但愿 dànyuàn = pourvu que." },
      { fr: "Je te souhaite un bon voyage.", zh: ["祝你旅途愉快。", "祝你一路顺风。"], tag: "souhait", tip: "一路顺风 = bon voyage (litt. « vent favorable tout le long »)." },
      { fr: "Joyeux anniversaire !", zh: ["生日快乐！", "祝你生日快乐！"], tag: "souhait", tip: "快乐 kuàilè = joyeux." },
      { fr: "Bonne année !", zh: ["新年快乐！"], tag: "souhait", tip: "Pour le Nouvel An chinois : 春节快乐." },
      { fr: "Il faut que je parte maintenant.", zh: ["我得走了。", "我现在得走了。"], tag: "base", tip: "我得走了 = je dois y aller." },
      { fr: "Bon appétit !", zh: ["慢慢吃！", "请慢用！"], tag: "souhait", tip: "慢慢吃 = mange tranquillement (formule chinoise)." },
    ],
  },
  {
    day: 29, level: 7, theme: "Probabilité et météo", tense: "Mix",
    notes: [
      "可能 = peut-être, 应该 = sûrement (probabilité), 大概 = à peu près.",
      "Météo : 下雨 (pleuvoir), 刮风 (y avoir du vent), 天气冷 (faire froid), 晴天 (beau temps).",
      "还不知道 = je ne sais pas encore.",
    ],
    sentences: [
      { fr: "Il doit être chez lui en ce moment.", zh: ["他现在应该在家。", "他现在应该在家里。"], tag: "probabilité", tip: "应该 = sûrement (probabilité)." },
      { fr: "Il pleuvra peut-être demain.", zh: ["明天可能会下雨。", "明天可能下雨。"], tag: "probabilité", tip: "可能 = peut-être." },
      { fr: "Il pleut des cordes.", zh: ["雨下得很大。", "下大雨了。", "外面下大雨。"], tag: "base", tip: "下大雨 = pleuvoir fort." },
      { fr: "Il fait très froid et il y a du vent.", zh: ["天气很冷，还刮风。", "很冷，风也很大。", "天很冷，还刮大风。"], tag: "base", tip: "刮风 guāfēng = y avoir du vent." },
      { fr: "Je ne sais pas encore ce que je ferai.", zh: ["我还不知道要做什么。", "我还不知道我会做什么。"], tag: "futur", tip: "还不知道 = pas encore savoir." },
      { fr: "Ça dépendra de la météo.", zh: ["要看天气。", "看天气怎么样。"], tag: "futur", tip: "要看 = ça dépendra de." },
      { fr: "En automne, les feuilles tombent.", zh: ["秋天树叶会掉下来。", "秋天叶子掉了。", "秋天树叶落下来。"], tag: "base", tip: "秋天 = automne, 树叶 = feuilles." },
      { fr: "Il fera sûrement beau ce week-end.", zh: ["这个周末天气应该会很好。", "这个周末应该是晴天。"], tag: "probabilité", tip: "晴天 qíngtiān = beau temps." },
    ],
  },
  {
    day: 30, level: 8, theme: "Conversation libre", tense: "Mix",
    notes: [
      "Tout ensemble : mots de temps + 了 / 过 / 在 / 会 suffisent pour tous les « temps ».",
      "越…越… = plus… plus… : 越学越有意思.",
    ],
    sentences: [
      { fr: "Ça faisait longtemps qu'on ne s'était pas parlé.", zh: ["我们好久没聊天了。", "我们很久没说话了。"], tag: "passé", tip: "好久没… = ça fait longtemps que… ne… pas." },
      { fr: "Raconte-moi tout ce qui s'est passé.", zh: ["跟我说说发生了什么。", "把发生的事都告诉我。"], tag: "passé", tip: "发生 fāshēng = se produire." },
      { fr: "Je suis fier de tout ce que j'ai appris.", zh: ["我为学到的一切感到骄傲。", "我对自己学到的东西很自豪。"], tag: "passé", tip: "为…骄傲 = être fier de…" },
      { fr: "Maintenant je peux parler sans problème.", zh: ["现在我说话没问题了。", "现在我能说中文了。"], tag: "base", tip: "了 final = nouvelle situation." },
      { fr: "Plus j'apprends, plus c'est intéressant.", zh: ["越学越有意思。", "我越学越觉得有意思。"], tag: "comparaison", tip: "越…越… = plus… plus…" },
      { fr: "Juan est en train de manger.", zh: ["Juan在吃饭。", "Juan正在吃饭。"], tag: "progressif", tip: "在 + verbe = en train de." },
      { fr: "Mon chinois est de mieux en mieux.", zh: ["我的中文越来越好了。"], tag: "comparaison", tip: "越来越 = de plus en plus." },
      { fr: "Merci de m'avoir aidé à progresser.", zh: ["谢谢你帮我进步。", "谢谢你帮助我进步。"], tag: "base", tip: "进步 jìnbù = progresser." },
    ],
  },
];
