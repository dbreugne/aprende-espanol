/* ============================================================
   XUÉ ZHŌNGWÉN — Lexique par thème (flashcards FR → chinois)
   [caractères, français, [variantes acceptées]]
   Réponse acceptée en caractères ou en pinyin (tons facultatifs).
   ============================================================ */

const LEXIQUE_RAW = [
  { id: "food", label: "Manger et boire", words: [
    ["咖啡", "le café"], ["茶", "le thé"], ["水", "l'eau"], ["牛奶", "le lait"],
    ["啤酒", "la bière"], ["葡萄酒", "le vin", ["红酒"]], ["果汁", "le jus de fruits"], ["米饭", "le riz (cuit)"],
    ["面条", "les nouilles"], ["面包", "le pain"], ["饺子", "les raviolis chinois"], ["鸡蛋", "l'œuf"],
    ["鸡肉", "le poulet (viande)"], ["牛肉", "le bœuf"], ["猪肉", "le porc"], ["鱼", "le poisson"],
    ["虾", "la crevette"], ["蔬菜", "les légumes"], ["水果", "les fruits"], ["苹果", "la pomme"],
    ["香蕉", "la banane"], ["西瓜", "la pastèque"], ["西红柿", "la tomate", ["番茄"]], ["土豆", "la pomme de terre"],
    ["糖", "le sucre"], ["盐", "le sel"], ["辣", "piquant"], ["好吃", "bon (à manger)"],
    ["饭馆", "le restaurant", ["餐厅"]], ["菜单", "le menu"], ["早饭", "le petit-déjeuner", ["早餐"]], ["晚饭", "le dîner", ["晚餐"]],
  ]},
  { id: "home", label: "Maison et logement", words: [
    ["家", "la maison (chez soi)"], ["房子", "le logement"], ["公寓", "l'appartement"], ["别墅", "la villa"],
    ["房间", "la chambre, la pièce"], ["厨房", "la cuisine (pièce)"], ["客厅", "le salon"], ["卫生间", "la salle de bain", ["洗手间"]],
    ["床", "le lit"], ["桌子", "la table"], ["椅子", "la chaise"], ["沙发", "le canapé"],
    ["门", "la porte"], ["窗户", "la fenêtre"], ["钥匙", "la clé"], ["房东", "le propriétaire"],
    ["房租", "le loyer"], ["租", "louer"], ["搬家", "déménager"], ["合租", "la colocation"],
    ["邻居", "le voisin"], ["楼", "l'étage, l'immeuble"], ["花园", "le jardin"], ["游泳池", "la piscine"],
  ]},
  { id: "time", label: "Temps, jours et mois", words: [
    ["今天", "aujourd'hui"], ["昨天", "hier"], ["明天", "demain"], ["后天", "après-demain"],
    ["现在", "maintenant"], ["早上", "le matin"], ["中午", "midi"], ["下午", "l'après-midi"],
    ["晚上", "le soir"], ["周末", "le week-end"], ["星期一", "lundi", ["周一"]], ["星期二", "mardi", ["周二"]],
    ["星期三", "mercredi", ["周三"]], ["星期四", "jeudi", ["周四"]], ["星期五", "vendredi", ["周五"]], ["星期六", "samedi", ["周六"]],
    ["星期天", "dimanche", ["星期日", "周日"]], ["一月", "janvier"], ["二月", "février"], ["三月", "mars"],
    ["四月", "avril"], ["五月", "mai"], ["六月", "juin"], ["七月", "juillet"],
    ["八月", "août"], ["九月", "septembre"], ["十月", "octobre"], ["十一月", "novembre"],
    ["十二月", "décembre"], ["去年", "l'année dernière"], ["今年", "cette année"], ["明年", "l'année prochaine"],
    ["小时", "l'heure (durée)"], ["分钟", "la minute"], ["以前", "avant, autrefois"], ["以后", "après, plus tard"],
  ]},
  { id: "people", label: "Famille et gens", words: [
    ["爸爸", "papa"], ["妈妈", "maman"], ["父母", "les parents"], ["哥哥", "le grand frère"],
    ["姐姐", "la grande sœur"], ["弟弟", "le petit frère"], ["妹妹", "la petite sœur"], ["儿子", "le fils"],
    ["女儿", "la fille (enfant)"], ["奶奶", "la grand-mère (paternelle)"], ["爷爷", "le grand-père (paternel)"], ["朋友", "l'ami"],
    ["男朋友", "le petit ami"], ["女朋友", "la petite amie"], ["老师", "le professeur"], ["学生", "l'élève, l'étudiant"],
    ["同事", "le collègue"], ["老板", "le patron"], ["医生", "le médecin"], ["律师", "l'avocat"],
    ["孩子", "l'enfant"], ["人", "la personne"], ["男人", "l'homme"], ["女人", "la femme"],
  ]},
  { id: "travel", label: "Transports et voyage", words: [
    ["飞机", "l'avion"], ["火车", "le train"], ["地铁", "le métro"], ["公交车", "le bus"],
    ["出租车", "le taxi"], ["船", "le bateau"], ["自行车", "le vélo"], ["车", "la voiture"],
    ["机场", "l'aéroport"], ["火车站", "la gare"], ["酒店", "l'hôtel"], ["护照", "le passeport"],
    ["行李", "les bagages"], ["票", "le billet"], ["地图", "la carte, le plan"], ["海边", "la plage, le bord de mer"],
    ["左边", "à gauche"], ["右边", "à droite"], ["前面", "devant"], ["后面", "derrière"],
    ["旁边", "à côté"], ["远", "loin"], ["近", "près"], ["旅行", "voyager, le voyage"],
    ["中国", "la Chine"], ["法国", "la France"], ["西班牙", "l'Espagne"], ["北京", "Pékin"],
  ]},
  { id: "body", label: "Corps, santé et sport", words: [
    ["头", "la tête"], ["眼睛", "les yeux"], ["手", "la main"], ["脚", "le pied"],
    ["腿", "la jambe"], ["膝盖", "le genou"], ["肚子", "le ventre"], ["身体", "le corps, la santé"],
    ["疼", "avoir mal"], ["生病", "tomber malade"], ["发烧", "avoir de la fièvre"], ["感冒", "le rhume"],
    ["药", "le médicament"], ["医院", "l'hôpital"], ["药店", "la pharmacie"], ["受伤", "se blesser"],
    ["运动", "le sport, faire du sport"], ["跑步", "courir"], ["游泳", "nager"], ["足球", "le football"],
    ["健身房", "la salle de sport"], ["比赛", "le match"], ["赢", "gagner"], ["累", "fatigué"],
  ]},
  { id: "work", label: "Travail et technologie", words: [
    ["工作", "le travail, travailler"], ["公司", "l'entreprise"], ["会议", "la réunion"], ["上班", "aller au travail"],
    ["下班", "finir le travail"], ["电脑", "l'ordinateur"], ["手机", "le téléphone portable"], ["应用", "l'application"],
    ["网站", "le site web"], ["密码", "le mot de passe"], ["链接", "le lien"], ["消息", "le message"],
    ["电话", "le téléphone (appel)"], ["邮件", "l'e-mail", ["电子邮件"]], ["充电", "recharger"], ["下载", "télécharger"],
    ["钱", "l'argent"], ["银行", "la banque"], ["快递", "le colis, la livraison"], ["地址", "l'adresse"],
    ["人工智能", "l'intelligence artificielle"], ["广告", "la publicité"], ["免费", "gratuit"], ["客户", "le client"],
  ]},
  { id: "weather", label: "Météo, saisons et adjectifs", words: [
    ["天气", "le temps (météo)"], ["下雨", "pleuvoir"], ["下雪", "neiger"], ["刮风", "y avoir du vent"],
    ["晴天", "le beau temps"], ["冷", "froid"], ["热", "chaud"], ["春天", "le printemps"],
    ["夏天", "l'été"], ["秋天", "l'automne"], ["冬天", "l'hiver"], ["太阳", "le soleil"],
    ["大", "grand"], ["小", "petit"], ["多", "beaucoup, nombreux"], ["少", "peu"],
    ["好", "bien, bon"], ["贵", "cher"], ["便宜", "bon marché"], ["快", "rapide"],
    ["慢", "lent"], ["新", "nouveau"], ["旧", "vieux (objet)"], ["漂亮", "joli, beau"],
    ["开心", "content, joyeux", ["高兴"]], ["难过", "triste"], ["容易", "facile"], ["难", "difficile"],
  ]},
];

const LEXIQUE = LEXIQUE_RAW.map(l => ({
  id: l.id, label: l.label,
  words: l.words.map(([zh, fr, alt]) => ({ zh, fr, alt: alt || [] })),
}));
