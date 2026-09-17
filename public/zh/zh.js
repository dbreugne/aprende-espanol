/* ============================================================
   XUÉ ZHŌNGWÉN — Moteur chinois
   - pinyin (via pinyin-pro, hors-ligne), affichage ruby
   - correction : réponse en caractères OU en pinyin (tons facultatifs)
     · pinyin : ton faux = petite faute (orange), pas une erreur
     · caractères : homophone (même son) = petite faute (orange)
   - nombres en chinois, voix (speechSynthesis zh-CN)
   ============================================================ */
const ZH = (function(){
  const PP = window.pinyinPro;
  const SYL = new Set("a ai an ang ao ba bai ban bang bao bei ben beng bi bian biao bie bin bing bo bu ca cai can cang cao ce cen ceng cha chai chan chang chao che chen cheng chi chong chou chu chua chuai chuan chuang chui chun chuo ci cong cou cu cuan cui cun cuo da dai dan dang dao de dei den deng di dia dian diao die ding diu dong dou du duan dui dun duo e ei en eng er fa fan fang fei fen feng fo fou fu ga gai gan gang gao ge gei gen geng gong gou gu gua guai guan guang gui gun guo ha hai han hang hao he hei hen heng hong hou hu hua huai huan huang hui hun huo ji jia jian jiang jiao jie jin jing jiong jiu ju juan jue jun ka kai kan kang kao ke kei ken keng kong kou ku kua kuai kuan kuang kui kun kuo la lai lan lang lao le lei leng li lia lian liang liao lie lin ling liu lo long lou lu luan lun luo lv lve ma mai man mang mao me mei men meng mi mian miao mie min ming miu mo mou mu na nai nan nang nao ne nei nen neng ni nian niang niao nie nin ning niu nong nou nu nuan nuo nv nve o ou pa pai pan pang pao pei pen peng pi pian piao pie pin ping po pou pu qi qia qian qiang qiao qie qin qing qiong qiu qu quan que qun ran rang rao re ren reng ri rong rou ru rua ruan rui run ruo sa sai san sang sao se sen seng sha shai shan shang shao she shei shen sheng shi shou shu shua shuai shuan shuang shui shun shuo si song sou su suan sui sun suo ta tai tan tang tao te tei teng ti tian tiao tie ting tong tou tu tuan tui tun tuo wa wai wan wang wei wen weng wo wu xi xia xian xiang xiao xie xin xing xiong xiu xu xuan xue xun ya yan yang yao ye yi yin ying yo yong you yu yuan yue yun za zai zan zang zao ze zei zen zeng zha zhai zhan zhang zhao zhe zhei zhen zheng zhi zhong zhou zhu zhua zhuai zhuan zhuang zhui zhun zhuo zi zong zou zu zuan zui zun zuo".split(" "));
  const MAXSYL = 6;
  const isHan = ch => /[㐀-鿿豈-﫿]/.test(ch);
  const hasHan = s => /[㐀-鿿]/.test(s);
  const TONE_MARK = { "̄":1, "́":2, "̌":3, "̀":4 };
  const SANDHI = new Set(["一","不"]);   // ton variable selon le contexte : tout ton accepté
  // Corrections de lecture (caractères à plusieurs prononciations)
  PP.customPinyin({
    "得很": "de hěn", "说得对": "shuō de duì", "得好": "de hǎo", "得快": "de kuài", "得慢": "de màn",
    "我得": "wǒ děi", "你得": "nǐ děi", "他得": "tā děi", "我们得": "wǒ men děi",
    "有空": "yǒu kòng", "没空": "méi kòng", "我教": "wǒ jiāo", "教中文": "jiāo zhōng wén",
    "谁": "shéi", "谁的": "shéi de",
    "朋友": "péng you", "早上": "zǎo shang", "晚上": "wǎn shang", "窗户": "chuāng hu", "眼睛": "yǎn jing",
    "消息": "xiāo xi", "饺子": "jiǎo zi", "肚子": "dù zi", "时候": "shí hou", "多少": "duō shao",
    "东西": "dōng xi", "爷爷": "yé ye", "意思": "yì si", "衣服": "yī fu",
  });
  // 儿 de fin de mot (erhua) : 哪儿 = nǎr, 一点儿 = yìdiǎnr (mais 儿子, 女儿 gardent ér)
  const isErhua = (prev, next) => prev && !/[女婴幼孤健]/.test(prev) && !/[子童科歌]/.test(next||"");

  /* ---- pinyin d'une chaîne : [{h, s (sans ton, ü = v), t (0-4), py (avec ton)}] + tokens latins ---- */
  function tokensOf(text){
    const out = [];
    const re = /([㐀-鿿豈-﫿]+)|([A-Za-z0-9]+)/g;
    let m;
    while((m = re.exec(text))){
      if(m[1]){
        const run = m[1];
        const num = PP.pinyin(run, { toneType:"num", type:"array", v:true });
        const mark = PP.pinyin(run, { type:"array" });
        const chars = [...run];
        chars.forEach((h,i)=>{
          const n = num[i] || "";
          const t = /\d$/.test(n) ? Number(n.slice(-1)) : 0;
          if(h==="儿" && isErhua(chars[i-1], chars[i+1])){
            out.push({ h, s: "er", t: 0, py: "r", er: true });   // facultatif à l'écrit comme à l'oral
            return;
          }
          out.push({ h, s: n.replace(/\d$/,"").toLowerCase(), t, py: mark[i] || "" });
        });
      } else {
        out.push({ h: m[2], s: m[2].toLowerCase(), t: null, py: m[2], lat: true });
      }
    }
    return out;
  }
  function pinyinOf(text){ return tokensOf(text).map(t=>t.py).join(" "); }
  function numToMark(s, t){
    if(!t) return s.replace(/v/g,"ü");
    const marks = ["", "̄", "́", "̌", "̀"];
    let w = s.replace(/v/g,"ü");
    let idx = w.search(/[ae]/);
    if(idx<0) idx = w.indexOf("ou");
    if(idx<0){ const vs=[...w.matchAll(/[iouü]/g)]; idx = vs.length ? vs[vs.length-1].index : -1; }
    if(idx<0) return w;
    return (w.slice(0,idx+1) + marks[t] + w.slice(idx+1)).normalize("NFC");
  }

  /* ---- analyse d'une réponse en pinyin ---- */
  function segmentChunk(letters, prefer){
    const n = letters.length, best = new Array(n+1).fill(Infinity), prev = new Array(n+1).fill(-1);
    best[0] = 0;
    for(let i=0;i<n;i++){
      if(best[i]===Infinity) continue;
      for(let L=1; L<=MAXSYL && i+L<=n; L++){
        const s = letters.slice(i,i+L);
        if(!SYL.has(s)) continue;
        const c = best[i] + (prefer.has(s) ? 1 : 2.5);   // préfère les syllabes attendues (xi'an vs xian)
        if(c < best[i+L]){ best[i+L] = c; prev[i+L] = i; }
      }
    }
    if(best[n]===Infinity) return null;
    const cuts = []; let k = n;
    while(k>0){ cuts.unshift([prev[k], k]); k = prev[k]; }
    return cuts;
  }
  function parsePinyin(input, refToks){
    const prefer = new Set(refToks.map(t=>t.s));
    const latins = new Set(refToks.filter(t=>t.lat).map(t=>t.s));
    const chunks = [];            // {letters, tones:[par lettre], endTone}
    let cur = { letters:"", tones:[] };
    const flush = (endTone)=>{ if(cur.letters){ cur.endTone = endTone||null; chunks.push(cur); } cur = { letters:"", tones:[] }; };
    for(const ch of input.toLowerCase().normalize("NFD")){
      if(/[a-z]/.test(ch)){ cur.letters += ch; cur.tones.push(null); }
      else if(TONE_MARK[ch]){ if(cur.tones.length) cur.tones[cur.tones.length-1] = TONE_MARK[ch]; }
      else if(ch === "̈"){ if(cur.letters.endsWith("u")){ cur.letters = cur.letters.slice(0,-1)+"v"; } }
      else if(/[0-5]/.test(ch)){ flush(Number(ch)); }
      else flush(null);
    }
    flush(null);
    const toks = [];
    chunks.forEach(c=>{
      const L = c.letters;
      if(latins.has(L)){ toks.push({ s:L, t:null, disp:L, lat:true }); return; }
      let cuts = segmentChunk(L, prefer), erTail = false;
      if(!cuts && L.endsWith("r")){ cuts = segmentChunk(L.slice(0,-1), prefer); erTail = !!cuts; }
      if(!cuts){ toks.push({ s:L, t:null, disp:L, bad:true }); return; }
      cuts.forEach(([a,b], i)=>{
        let t = c.tones.slice(a,b).find(x=>x) || null;
        if(i===cuts.length-1 && c.endTone!==null && c.endTone!==undefined) t = c.endTone===5 ? 0 : c.endTone;
        const s = L.slice(a,b);
        toks.push({ s, t, disp: numToMark(s, t||0) });
      });
      if(erTail) toks.push({ s:"er", t:0, disp:"r" });
    });
    return toks;
  }

  /* ---- variantes : « 我昨天… » = « 昨天我… » ---- */
  const SUBJ = ["我们","你们","他们","她们","我","你","他","她"];
  const TIMEW = ["昨天","今天","明天","后天","现在","每天","晚上","早上","上午","下午","中午","周末","去年","今年","明年","刚才","以前","以后","小时候","上个周末","这个周末","下个周末","上个星期","今晚","最近"];
  function variants(refs){
    const out = refs.slice();
    refs.forEach(r=>{
      for(const s of SUBJ){
        for(const t of TIMEW){
          if(r.startsWith(s+t)) out.push(t+s+r.slice((s+t).length));
          if(r.startsWith(t+s)) out.push(s+t+r.slice((t+s).length));
          if(r.startsWith(t+"，"+s)) out.push(s+t+r.slice((t+"，"+s).length));
        }
      }
    });
    return [...new Set(out)];
  }

  /* ---- correction ---- */
  function evaluate(userText, accepted0){
    const accepted = variants(accepted0);
    const han = hasHan(userText);
    let best = null;
    accepted.forEach((ref, idx)=>{
      const refToks = tokensOf(ref);
      const userToks = han
        ? tokensOf(userText).map(t=>({ s:t.s, t:t.t, h:t.h, disp:t.h, lat:t.lat }))
        : parsePinyin(userText, refToks);
      const eq = userToks.map(u=>refToks.map(r=>{
        if(r.lat || u.lat) return (u.s===r.s) ? "exact" : "";
        if(han){
          if(u.h===r.h) return "exact";
          return (u.s===r.s) ? "typo" : "";             // homophone
        }
        const sameBase = u.s===r.s || u.s.replace(/v/g,"u")===r.s.replace(/v/g,"u");
        if(!sameBase) return "";
        if(u.s!==r.s) return "typo";                    // u / ü
        if(u.t===null || u.t===r.t || SANDHI.has(r.h) || (r.t===0 && u.t===0)) return "exact";
        if(r.t===0) return "exact";                     // ton neutre : tout ton toléré
        return "typo";                                  // mauvais ton
      }));
      const n=userToks.length, m=refToks.length;
      const dp = Array.from({length:n+1},()=>new Array(m+1).fill(0));
      for(let i=n-1;i>=0;i--) for(let j=m-1;j>=0;j--)
        dp[i][j] = eq[i][j] ? dp[i+1][j+1]+1 : Math.max(dp[i+1][j],dp[i][j+1]);
      const userMark=new Array(n).fill(false), userTypo=new Array(n).fill(-1), refMatched=new Array(m).fill(false);
      let i=0,j=0;
      while(i<n && j<m){
        if(eq[i][j] && dp[i][j]===dp[i+1][j+1]+1){ userMark[i]=true; refMatched[j]=true; if(eq[i][j]==="typo") userTypo[i]=j; i++; j++; }
        else if(dp[i+1][j] >= dp[i][j+1]) i++;
        else j++;
      }
      refToks.forEach((r,k)=>{ if(r.er && !refMatched[k]) refMatched[k] = true; });
      const good = refMatched.filter(Boolean).length;
      const extra = userMark.filter(x=>!x).length;
      const score = good - extra*0.5 - (m-good)*0.25 - userTypo.filter(x=>x>=0).length*0.1;
      if(!best || score>best.score) best = { score, userToks, refToks, userMark, userTypo, refMatched, good, total:m, refIndex: idx<accepted0.length?idx:0, ref, han };
    });
    const b = best;
    const refDisp = t => t.lat ? t.h : `${t.h}（${t.py}）`;
    return {
      han: b.han, ref: b.ref,
      userTok: b.userToks.map(u=>u.disp),
      userMark: b.userMark, userTypo: b.userTypo,
      refTok: b.refToks.map(t=>t.h), refMatched: b.refMatched,
      good: b.good, total: b.total, refIndex: b.refIndex,
      perfect: b.refMatched.every(Boolean) && b.userMark.every(Boolean),
      typos: b.userTypo.map((r,u)=> r>=0 ? { u: b.userToks[u].disp, r: b.han ? refDisp(b.refToks[r]) : b.refToks[r].py } : null).filter(Boolean),
      nearPairs: [],
      missing: b.refToks.filter((_,k)=>!b.refMatched[k]).map(refDisp),
    };
  }

  /* ---- affichage : caractères avec pinyin au-dessus ---- */
  const esc = s => String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  function ruby(text){
    const toks = tokensOf(text).filter(t=>!t.lat);
    let k = 0;
    return [...text].map(ch=> isHan(ch) ? `<ruby>${esc(ch)}<rt>${esc((toks[k++]||{}).py||"")}</rt></ruby>` : esc(ch)).join("");
  }

  /* ---- nombres ---- */
  const D = "零一二三四五六七八九";
  function numZh(n){
    if(n<10) return D[n];
    if(n<20) return "十" + (n%10 ? D[n%10] : "");
    if(n<100) return D[Math.floor(n/10)] + "十" + (n%10 ? D[n%10] : "");
    if(n<1000){
      const h=Math.floor(n/100), r=n%100, s=D[h]+"百";
      if(!r) return s;
      if(r<10) return s+"零"+D[r];
      return s + (r<20 ? "一"+numZh(r) : numZh(r));
    }
    const th=Math.floor(n/1000), r=n%1000, s=D[th]+"千";
    if(!r) return s;
    if(r<100) return s+"零"+(r>=10&&r<20 ? "一"+numZh(r) : numZh(r));
    return s+numZh(r);
  }
  function numAnswers(n){
    const main = numZh(n);
    return [...new Set([main.replace(/^二(百|千)/, "两$1"), main])];   // 两百 / 二百 acceptés
  }

  /* ---- voix ---- */
  let voice = null;
  function pickVoice(){
    if(!("speechSynthesis" in window)) return;
    const vs = speechSynthesis.getVoices();
    voice = vs.find(v=>/^zh[-_]CN/i.test(v.lang)) || vs.find(v=>/^zh/i.test(v.lang)) || null;
  }
  if("speechSynthesis" in window){ pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
  function canSpeak(){ return "speechSynthesis" in window; }
  function speak(text){
    if(!canSpeak()) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "zh-CN"; if(voice) u.voice = voice; u.rate = 0.85;
    speechSynthesis.speak(u);
  }

  return { tokensOf, pinyinOf, numToMark, parsePinyin, evaluate, ruby, numZh, numAnswers, speak, canSpeak, hasHan, isHan };
})();
