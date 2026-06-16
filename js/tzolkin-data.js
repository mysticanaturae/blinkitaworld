/* --- TZOLKIN DATA --- */

const anchorDate = new Date("1800-01-01");
const anchorTone = 10;
const anchorSignIdx = 13;

const tzolkinNumbers = ["1","2","3","4","5","6","7","8","9","10","11","12","13"];

const tzolkinSigns = [
  "Krokodil", "Veter", "Zora", "Kuščar", "Kača",
  "Smrt", "Jelen", "Zajec", "Voda", "Pes",
  "Opica", "Cesta", "Trsje", "Jaguar", "Orel",
  "Sova", "Zemlja", "Ogledalo", "Nevihta", "Sonce"
];

const tzolkinSignImages = [
  "https://static.wixstatic.com/media/7535eb_8b15827f3f0749f58b47edf2ec8ff34a~mv2.png",
  "https://static.wixstatic.com/media/7535eb_da5c22d0b20c4650ae78bd78d44bdf90~mv2.png",
  "https://static.wixstatic.com/media/7535eb_1431fb4ee97a418383209553a73974e5~mv2.png",
  "https://static.wixstatic.com/media/7535eb_63fa92348cef45778a33ea8df474f3b8~mv2.png",
  "https://static.wixstatic.com/media/7535eb_b144e80ceccc4304b10027e8d2f1e674~mv2.png",
  "https://static.wixstatic.com/media/7535eb_9eda107ea6ed46e8880d6cd3394b3eca~mv2.png",
  "https://static.wixstatic.com/media/7535eb_498008e2e9fb4c7ebc66e4a2cf25a1d4~mv2.png",
  "https://static.wixstatic.com/media/7535eb_a86c9fe89c5f4f4d8a810c284e40bf13~mv2.png",
  "https://static.wixstatic.com/media/7535eb_b1612f1d298245a483212ca3997b6872~mv2.png",
  "https://static.wixstatic.com/media/7535eb_fcf459036d31451fb913cd556bdf98b1~mv2.png",
  "https://static.wixstatic.com/media/7535eb_c5e4c01f59e74424806a8b82d55ea9c9~mv2.png",
  "https://static.wixstatic.com/media/7535eb_8b1bd5f0bebf4e9e84734d0dd7c18a55~mv2.png",
  "https://static.wixstatic.com/media/7535eb_5a43cbda692c4bff8790b8d4fe769ec5~mv2.png",
  "https://static.wixstatic.com/media/7535eb_891ac2c5109f44c8927f69170b93aa78~mv2.png",
  "https://static.wixstatic.com/media/7535eb_bcc1d28cea634696895554c9f25a2788~mv2.png",
  "https://static.wixstatic.com/media/7535eb_acd453dcd54e4ca29483cb610e3bab2e~mv2.png",
  "https://static.wixstatic.com/media/7535eb_d413aa3902864a09a3c2bb1ae2996b53~mv2.png",
  "https://static.wixstatic.com/media/7535eb_57d9eafe0dd249ddb5194e43a629e516~mv2.png",
  "https://static.wixstatic.com/media/7535eb_413ee006283f479dbb46cc737b796bb4~mv2.png",
  "https://static.wixstatic.com/media/7535eb_18fc81a965aa4e69974f11d5bb68dc60~mv2.png"
];

const tzolkinNumberImages = [
  "https://static.wixstatic.com/media/7535eb_8128aa403fb34a39a9abf4c539e07d4e~mv2.png",
  "https://static.wixstatic.com/media/7535eb_58d9713024fd44e3b574ed6e66319df3~mv2.png",
  "https://static.wixstatic.com/media/7535eb_fa772de6b389412a874060866aafe0d0~mv2.png",
  "https://static.wixstatic.com/media/7535eb_034123a9c80d497da70e29c529f761ab~mv2.png",
  "https://static.wixstatic.com/media/7535eb_0949be53659a4112b79aeaf88fba4182~mv2.png",
  "https://static.wixstatic.com/media/7535eb_31c0710a2c40451c8be0474fca598690~mv2.png",
  "https://static.wixstatic.com/media/7535eb_abc754938a3c47e5a3b497a802fbbc09~mv2.png",
  "https://static.wixstatic.com/media/7535eb_a195a39082484f0eafd271594204fd99~mv2.png",
  "https://static.wixstatic.com/media/7535eb_62f1b1f66190462faf5af9be6f04e3f3~mv2.png",
  "https://static.wixstatic.com/media/7535eb_630ea6308de14ff089b351e4f1967594~mv2.png",
  "https://static.wixstatic.com/media/7535eb_b098132554904e4d8d689176145249a0~mv2.png",
  "https://static.wixstatic.com/media/7535eb_6cf0d4b4439a46eb952d52e6cd02bb28~mv2.png",
  "https://static.wixstatic.com/media/7535eb_a5b6f5b75b254f1ca65fbe7cafb8086e~mv2.png"
];

const signOracle = {
  "Krokodil": {
    essence: "Prvotni začetek. Rojstvo toka.",
    keywords: "instinkt • materija • začetek življenja",
    medicine: "Vstopi v novo fazo brez mentalnega nadzora. Dovoli začetku, da te nosi."
  },

  "Veter": {
    essence: "Gibanje duha in komunikacije.",
    keywords: "dih • sporočila • invokacija",
    medicine: "Danes govori samo tisto, kar res želiš ustvariti v realnosti."
  },

  "Zora": {
    essence: "Prehod iz teme v zavest.",
    keywords: "prebujanje • svetloba • novi cikli",
    medicine: "Nekaj v tebi se prebuja. Ne sili procesa."
  },

  "Kuščar": {
    essence: "Preživetveni instinkt in prilagoditev.",
    keywords: "reakcija • instinkt • zaščita",
    medicine: "Opazuj, kje reagiraš avtomatsko. Tam je tvoja staro programiranje."
  },

  "Kača": {
    essence: "Telo, energija, transformacija.",
    keywords: "življenjska sila • seksualnost • sprememba",
    medicine: "Energija se danes premika skozi telo. Ne zadržuj je."
  },

  "Smrt": {
    essence: "Zaključek in prehod.",
    keywords: "konec • reset • transformacija",
    medicine: "Nekaj mora umreti, da lahko nekaj novega diha."
  },

  "Jelen": {
    essence: "Nežnost srca.",
    keywords: "srce • občutljivost • mir",
    medicine: "Nežnost je tvoja moč, ne slabost."
  },

  "Zajec": {
    essence: "Gibanje in hitrost.",
    keywords: "intuicija • hitrost • odziv",
    medicine: "Ne čakaj popolnega trenutka — premik je zdaj."
  },

  "Voda": {
    essence: "Čustveni tok.",
    keywords: "čustva • čiščenje • tok",
    medicine: "Pusti, da se čustva premaknejo skozi tebe."
  },

  "Pes": {
    essence: "Zvestoba in srčna povezanost.",
    keywords: "odnosi • zvestoba • srce",
    medicine: "Danes izberi odnose, ki hranijo tvoje srce."
  },

  "Opica": {
    essence: "Igra in ustvarjanje.",
    keywords: "humor • ustvarjalnost • lahkotnost",
    medicine: "Ne jemlji vsega tako resno — ustvarjanje potrebuje igro."
  },

  "Cesta": {
    essence: "Pot in smer življenja.",
    keywords: "pot • izbira • usoda",
    medicine: "Ne išči popolne poti. Hodi po tisti, ki se odpira."
  },

  "Trsje": {
    essence: "Struktura in stabilnost.",
    keywords: "red • disciplina • osnova",
    medicine: "Stabilnost nastaja iz ponavljanja majhnih dejanj."
  },

  "Jaguar": {
    essence: "Nočna moč in notranji svet.",
    keywords: "moč • noč • zaščita",
    medicine: "V temi vidiš tisto, kar drugi ne morejo."
  },

  "Orel": {
    essence: "Širina pogleda.",
    keywords: "vizija • perspektiva • svoboda",
    medicine: "Dvigni se nad zgodbo. Ni vse osebno."
  },

  "Sova": {
    essence: "Modrost noči.",
    keywords: "intuicija • vpogled • tišina",
    medicine: "Odgovori pridejo v tišini, ne v hrupu."
  },

  "Zemlja": {
    essence: "Utelešenje in ravnovesje.",
    keywords: "stabilnost • telo • narava",
    medicine: "Vrni se v telo. Tukaj je odgovor."
  },

  "Ogledalo": {
    essence: "Refleksija resnice.",
    keywords: "resnica • odsev • zavest",
    medicine: "Kar vidiš zunaj, je vedno del tebe."
  },

  "Nevihta": {
    essence: "Preboj energije.",
    keywords: "sprememba • reset • sila",
    medicine: "Ne boj se razpada — to je prestrukturiranje."
  },

  "Sonce": {
    essence: "Jasnost in življenje.",
    keywords: "svetloba • vitalnost • zavest",
    medicine: "Ne skrivaš se več. To je tvoj čas."
  }
};

const toneOracle = {
  "1": {
    essence: "Začetna iskra.",
    keywords: "namen • seme • impulz",
    medicine: "Danes se nekaj začne v tebi, še preden razumeš."
  },

  "2": {
    essence: "Polarnost.",
    keywords: "odnos • izbira • dualnost",
    medicine: "V tebi se oblikuje razmerje — ne izberi prehitro."
  },

  "3": {
    essence: "Gibanje.",
    keywords: "akcija • aktivacija • tok",
    medicine: "Premik ustvari razumevanje."
  },

  "4": {
    essence: "Struktura.",
    keywords: "red • stabilnost • okvir",
    medicine: "Postavi temelje, preden greš naprej."
  },

  "5": {
    essence: "Moč.",
    keywords: "fokus • energija • center",
    medicine: "Tvoja moč je v osredotočenosti."
  },

  "6": {
    essence: "Ravnovesje.",
    keywords: "harmonija • uravnoteženje • tok",
    medicine: "Uskladi tisto, kar je v konfliktu."
  },

  "7": {
    essence: "Center.",
    keywords: "duh • stik • prisotnost",
    medicine: "Ne išči zunaj — bodi v centru."
  },

  "8": {
    essence: "Harmonija.",
    keywords: "lepota • skladnost • red",
    medicine: "Danes stvari začnejo padati na svoje mesto."
  },

  "9": {
    essence: "Razširitev.",
    keywords: "rast • širina • vpliv",
    medicine: "Tvoja energija se širi bolj, kot misliš."
  },

  "10": {
    essence: "Manifestacija.",
    keywords: "utelešenje • realnost • rezultat",
    medicine: "Kar si nosila, postaja vidno."
  },

  "11": {
    essence: "Razpad starega.",
    keywords: "čiščenje • sprostitev • preboj",
    medicine: "Kar ne služi več, odpada."
  },

  "12": {
    essence: "Razumevanje.",
    keywords: "integracija • vpogled • jasnost",
    medicine: "Danes razumeš vzorce, ki so bili skriti."
  },

  "13": {
    essence: "Zaključek cikla.",
    keywords: "polnost • zaključek • prehod",
    medicine: "Cikel se zaključi — prostor za novo."
  }
};

const toneKey = {
  1: "SEME",
  2: "ODNOS",
  3: "GIBANJE",
  4: "TEMELJ",
  5: "MOČ",
  6: "TOK",
  7: "CENTER",
  8: "HARMONIJA",
  9: "RAZŠIRITEV",
  10: "MANIFESTACIJA",
  11: "PREBOJ",
  12: "RAZUMEVANJE",
  13: "PREHOD"
};

const signKey = {
  "Krokodil": "ROJSTVO",
  "Veter": "NAVDIH",
  "Zora": "PREBUDITEV",
  "Kuščar": "INSTINKT",
  "Kača": "ENERGIJA",
  "Smrt": "TRANSFORMACIJA",
  "Jelen": "SRCE",
  "Zajec": "GIBKOST",
  "Voda": "TOK",
  "Pes": "ZVESTOBA",
  "Opica": "IGRA",
  "Cesta": "POT",
  "Trsje": "STABILNOST",
  "Jaguar": "NOČNA MOČ",
  "Orel": "VIZIJA",
  "Sova": "MODROST",
  "Zemlja": "UTELJENJE",
  "Ogledalo": "RESNICA",
  "Nevihta": "PREBOJ",
  "Sonce": "SVETLOBA"
};

const toneMedicine = {
  "1": {
    medicine: "To je trenutek semena. Vse, kar danes misliš ali začutiš, nosi potencial začetka novega cikla. Ne išči popolnosti – išči smer.",
    affirmation: "Jaz sem začetek, ki se uteleša skozi mene.",
    question: "Kaj želi biti rojeno skozi mene?"
  },

  "2": {
    medicine: "V tebi se ustvarja polarnost. Ni napačne izbire – je samo zavedanje odnosa med dvema silama.",
    affirmation: "Dovoljujem si videti obe strani svoje poti.",
    question: "Kaj v meni išče ravnovesje?"
  },

  "3": {
    medicine: "Gibanje je že odločitev. Ko se premakneš, se razkrije smer, ki je prej ni bilo mogoče videti.",
    affirmation: "Gibanje me vodi v jasnost.",
    question: "Kje moram danes narediti prvi korak?"
  },

  "4": {
    medicine: "Stabilnost ni stagnacija. Je temelj, ki podpira tvojo širitev.",
    affirmation: "Postavljam temelje, ki me podpirajo.",
    question: "Kaj v meni potrebuje strukturo?"
  },

  "5": {
    medicine: "Tvoja moč se ne kaže v sili, ampak v fokusu. Ko si zbran, se realnost odzove.",
    affirmation: "Moja energija je usmerjena in močna.",
    question: "Kam usmerjam svojo moč?"
  },

  "6": {
    medicine: "Ravnovesje se ne zgodi samo od sebe – je zavestna izbira uskladitve.",
    affirmation: "V sebi ustvarjam harmonijo.",
    question: "Kaj v meni kliče po uskladitvi?"
  },

  "7": {
    medicine: "Center ni cilj. Je stanje prisotnosti, kjer vse postane jasno.",
    affirmation: "Sem v svojem centru.",
    question: "Kje izgubljam stik s sabo?"
  },

  "8": {
    medicine: "Harmonija je trenutek, ko se življenje začne zlagati samo od sebe.",
    affirmation: "Življenje se usklajuje zame.",
    question: "Kaj se danes postavlja na svoje mesto?"
  },

  "9": {
    medicine: "Širitev je naravna posledica notranje jasnosti.",
    affirmation: "Dovoljujem si širitev.",
    question: "Kje se moja energija odpira?"
  },

  "10": {
    medicine: "Manifestacija ni prihodnost – je rezultat tvoje notranje usmeritve.",
    affirmation: "Moje življenje odseva moje notranje stanje.",
    question: "Kaj se že kaže v moji realnosti?"
  },

  "11": {
    medicine: "Kar razpada, ni izguba – je sprostitev prostora za resnico.",
    affirmation: "Dovoljujem odhodu starega.",
    question: "Kaj ne služi več moji rasti?"
  },

  "12": {
    medicine: "Razumevanje pride kot tiha jasnost, ne kot mentalni napor.",
    affirmation: "Vidim vzorce svojega življenja.",
    question: "Kaj danes končno razumem?"
  },

  "13": {
    medicine: "Zaključek je prehod. Vsak konec je vrata v novo strukturo bivanja.",
    affirmation: "Zaupam zaključkom v svojem življenju.",
    question: "Kaj se v meni zaključuje?"
  }
};

const signMedicine = {
  "Krokodil": {
    medicine: "Začetna surovost življenja. Instinkt, ki ne potrebuje razlage – samo gibanje.",
    affirmation: "Zaupam svojemu instinktu začetka.",
    question: "Kaj se želi začeti skozi mene?"
  },

  "Veter": {
    medicine: "Dih zavesti. Besede ustvarjajo svetove – izberi jih zavestno.",
    affirmation: "Moje besede ustvarjajo mojo realnost.",
    question: "Kaj danes izgovarjam v obstoj?"
  },

  "Zora": {
    medicine: "Prehod iz nevidnega v vidno. Prebujanje novega pogleda.",
    affirmation: "Prebujam se v nov način videnja.",
    question: "Kaj se v meni šele odpira?"
  },

  "Kuščar": {
    medicine: "Avtomatski odzivi. Stari programi preživetja, ki čakajo na zavest.",
    affirmation: "Opazujem svoje reakcije brez strahu.",
    question: "Kje delujem iz navade, ne iz zavesti?"
  },

  "Kača": {
    medicine: "Življenjska energija, ki se premika skozi telo in transformira identiteto.",
    affirmation: "Moja energija teče svobodno skozi mene.",
    question: "Kje zadržujem svojo energijo?"
  },

  "Smrt": {
    medicine: "Zaključek iluzije. Prehod iz stare identitete.",
    affirmation: "Dovoljujem transformaciji.",
    question: "Kaj v meni umira?"
  },

  "Jelen": {
    medicine: "Mehkoba srca kot moč. Občutljivost kot inteligenca.",
    affirmation: "Moje srce je moja moč.",
    question: "Kje potrebujem več nežnosti?"
  },

  "Zajec": {
    medicine: "Hitrost intuicije. Gibanje brez mentalnega oklevanja.",
    affirmation: "Sledim svojemu notranjemu gibanju.",
    question: "Kje čakam namesto da bi šla?"
  },

  "Voda": {
    medicine: "Čustveni tok, ki čisti stare strukture.",
    affirmation: "Dovoljujem čustvom, da me očistijo.",
    question: "Kaj želi skozi mene odteči?"
  },

  "Pes": {
    medicine: "Zvestoba srcu. Odnosi kot ogledalo zavesti.",
    affirmation: "Izbiram odnose, ki me podpirajo.",
    question: "Kje dajem svojo energijo?"
  },

  "Opica": {
    medicine: "Igra kot višja inteligenca ustvarjanja.",
    affirmation: "Ustvarjam skozi lahkotnost.",
    question: "Kje lahko življenje vzamem manj resno?"
  },

  "Cesta": {
    medicine: "Pot kot proces. Ni končnega cilja – je gibanje.",
    affirmation: "Zaupam svoji poti.",
    question: "Kateri korak me kliče?"
  },

  "Trsje": {
    medicine: "Struktura, disciplina, ponavljanje kot svetost.",
    affirmation: "Gradim stabilnost v svojem življenju.",
    question: "Kaj potrebuje red?"
  },

  "Jaguar": {
    medicine: "Moč noči, intuicija, zaščita duhovnega prostora.",
    affirmation: "Vidim tisto, kar je skrito.",
    question: "Kaj zaznavam v tišini?"
  },

  "Orel": {
    medicine: "Širina pogleda. Osvoboditev iz osebne zgodbe.",
    affirmation: "Vidim širšo sliko.",
    question: "Kaj presega mojo trenutno perspektivo?"
  },

  "Sova": {
    medicine: "Modrost tišine. Intuicija, ki ne potrebuje razlage.",
    affirmation: "Zaupam svoji notranji modrosti.",
    question: "Kaj vem brez dokazov?"
  },

  "Zemlja": {
    medicine: "Utelešenje. Povezanost z realnostjo in telesom.",
    affirmation: "Prisotna sem v svojem telesu.",
    question: "Kje sem odklopljena od sebe?"
  },

  "Ogledalo": {
    medicine: "Vse zunaj je odsev notranjega sveta.",
    affirmation: "Vidim sebe v vsem.",
    question: "Kaj mi svet kaže o meni?"
  },

  "Nevihta": {
    medicine: "Čiščenje skozi razpad stare strukture.",
    affirmation: "Zaupam procesu preobrazbe.",
    question: "Kaj se ruši z razlogom?"
  },

  "Sonce": {
    medicine: "Jasnost, vitalnost, popolna prisotnost v sebi.",
    affirmation: "Moja svetloba je moja narava.",
    question: "Kje lahko zasijem bolj resnično?"
  }
};


