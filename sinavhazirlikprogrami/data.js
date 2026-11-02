/* 10. Sınıf Biyoloji — 1. Dönem 1. Ortak Yazılı — Senaryo 4
   Tema: ENERJİ
   BİY.10.1.1 Canlıların yaşamına devam edebilmesi için enerjinin gerekliliğini sorgulayabilme (3 soru)
   BİY.10.1.3 Fotosentezde kullanılan ve üretilen maddelerle ilgili deney yapabilme (2 soru)

   Soru tipleri:
   mc   = çoktan seçmeli  {t,q,o:[...],a:doğruIndex,e:açıklama}
   tf   = doğru / yanlış  {t,q,a:true|false,e}
   open = yazılı (açık uçlu) {t,q,a:örnekCevap,k:[anahtar kelimeler]}
*/
window.SINAV = {
  sinif: "10. Sınıf Biyoloji",
  sinav: "1. Dönem 1. Ortak Yazılı",
  senaryo: "Senaryo 4",
  dagilim: [
    { kod: "BİY.10.1.1", konu: "Canlılık için enerjinin önemi, ATP'nin yapısı ve enerji aktarımındaki rolü", soru: 3 },
    { kod: "BİY.10.1.3", konu: "Fotosentez: ışığa bağımlı / bağımsız tepkimeler, hızı etkileyen faktörler, deneyler", soru: 2 }
  ],
  units: [
    /* ─────────── 0: SINAVIN KENDİ SENARYOLARI (önce bunu çalış) ─────────── */
    {
      id: "senaryo",
      title: "Sınav senaryoları: ateş böceği ve su bitkisi",
      kod: "SENARYO",
      cards: [
        { h: "Senaryo: Ateş böceğinin ışığı (ATP)",
          b: "Ateş böceğinin ışık organından <b>hücresiz özüt</b> hazırlanır. Özütte <b>lusiferin</b> (ışık veren madde) ve <b>lusiferaz</b> (enzim) vardır. Özüt önce bir süre ışık verir, sonra <b>söner</b>, çünkü içindeki <b>ATP tükenmiştir</b>.<br>Sönmüş özüt 3 tüpe bölünür ve karanlıkta gözlenir:<div class='tbl-wrap'><table class='tbl'><tr><th>Tüp</th><th>Eklenen</th><th>Sonuç</th></tr><tr><td>1</td><td>Saf su</td><td>Işık yok (kontrol)</td></tr><tr><td>2</td><td>Glikoz</td><td>Işık yok</td></tr><tr><td>3</td><td><b>ATP</b></td><td><b>Işık var</b></td></tr></table></div>" },
        { h: "Ateş böceği deneyinin yorumu (tam puan cümleleri)",
          b: "• Işık için gereken enerji <b>doğrudan ATP'den</b> sağlanır.<br>• ATP tükenince ışık <b>söner</b>; ATP eklenince enerji yeniden sağlanır ve ışık <b>yeniden yanar</b>.<br>• <b>Glikoz doğrudan kullanılamaz.</b> Hücresiz özütte hücresel solunum yapılamadığı için glikozdaki enerji ATP'ye aktarılamaz.<br>• Bağımsız değişken: <b>eklenen madde</b>. Bağımlı değişken: <b>ışık oluşması</b>. Kontrol: <b>saf su tüpü</b>. Sabit: özüt miktarı, sıcaklık, karanlık ortam.<br>• Enerji dönüşümü: <b>kimyasal enerji → ışık enerjisi</b> (biyolüminesans)." },
        { h: "Canlı ateş böceği neden sönmez?",
          b: "Canlı böceğin ışık organı hücreleri, besinlerdeki (glikoz) enerjiyi <b>hücresel solunumla</b> kullanarak <b>sürekli yeni ATP</b> üretir.<br><b>ATP döngüsü:</b><br>ATP → ADP + P + enerji (ışık için harcanır)<br>ADP + P + besin enerjisi → ATP (yeniden yapılır)<br>ATP <b>depolanmadığı</b> için bu döngü durmadan dönmelidir." },
        { h: "Hücrede ATP tükenirse ne olur?",
          b: "<b>Durur:</b> aktif taşıma (Na⁺-K⁺ pompası), kas kasılması, protein/glikojen sentezi, hücre bölünmesi, sinir iletimi, endositoz/ekzositoz, biyolüminesans.<br><b>Devam eder:</b> difüzyon, osmoz, kolaylaştırılmış difüzyon.<br>Sonuçta yaşamsal olaylar sürdürülemez ve <b>hücre ölür</b>. (Örnek: siyanür zehirlenmesinde ATP üretimi durur.)" },
        { h: "Senaryo: Su bitkisi ışıkta ve karanlıkta",
          b: "Bir su bitkisi (ör. Elodea) su dolu beherde, ters çevrilmiş <b>huni ve deney tüpü</b> altına konur.<br>• <b>Işıkta</b>: kabarcıklar çıkar, tüpte gaz birikir.<br>• <b>Karanlıkta</b>: kabarcık çıkmaz.<br><b>Gaz testi:</b> Tüpteki gaza <b>közlenmiş (alevi söndürülmüş) tahta kıymık</b> yaklaştırılır, kıymık <b>alevlenir</b> → gaz <b>oksijendir</b>.<br><b>Sonuç:</b> Fotosentez için <b>ışık gereklidir</b> ve fotosentezde <b>O₂ üretilir</b>. O₂'nin kaynağı <b>sudur</b>." },
        { h: "Senaryo: Biyoloji kulübü testleri",
          b: "<div class='tbl-wrap'><table class='tbl'><tr><th>Ne test edilir?</th><th>Nasıl?</th></tr><tr><td><b>O₂</b> üretildi mi?</td><td>Közlenmiş kıymık <b>alevlenir</b></td></tr><tr><td><b>CO₂</b> var mı?</td><td>Kireç suyu <b>bulanır</b>; bromtimol mavisi <b>sarıya</b> döner</td></tr><tr><td>CO₂ <b>tüketildi</b> mi?</td><td>Sarı bromtimol, ışıktaki bitkiyle <b>maviye</b> döner</td></tr><tr><td><b>Nişasta</b> üretildi mi?</td><td>Yaprağa iyot damlatılır, <b>mavi-mor</b> renk</td></tr></table></div><b>CO₂ miktarının hıza etkisi:</b> Aynı bitkiler farklı miktarda <b>karbonat (NaHCO₃)</b> içeren sulara konur.<br>Bağımsız: <b>CO₂ miktarı</b>. Bağımlı: <b>birim zamanda çıkan kabarcık sayısı</b>. Sabit: ışık şiddeti, sıcaklık, bitki türü ve büyüklüğü, su miktarı, süre.<br>Sonuç: CO₂ arttıkça hız <b>belirli bir noktaya kadar artar</b>, sonra sabit kalır." },
        { h: "Tam puan için yazma taktiği",
          b: "1. <b>Kavramın adını</b> yaz (ATP, fotoliz, bağımsız değişken...).<br>2. <b>'Çünkü'</b> ile gerekçe ver. Sadece sonucu yazma.<br>3. Deney sorusunda <b>bağımsız, bağımlı, kontrol edilen değişken</b> ve <b>kontrol grubunu</b> ayrı satırlarda yaz.<br>4. 'Ne olur?' sorusunda hem <b>ne olduğunu</b> hem <b>neden olduğunu</b> yaz.<br>5. Fotosentez denklemini ve ATP'nin yapısını (adenin + riboz + 3 fosfat) <b>ezbere</b> yaz." }
      ],
      qs: [
        { t: "mc", q: "Ateş böceği özütü söndükten sonra 3 tüpe ayrılıyor: 1. tüpe saf su, 2. tüpe glikoz, 3. tüpe ATP ekleniyor. Hangi tüpte ışık oluşur?", o: ["Yalnız 3. tüpte", "Yalnız 2. tüpte", "2. ve 3. tüplerde", "Üç tüpte de"], a: 0, e: "Işık için enerji doğrudan ATP'den gelir. Hücresiz özütte glikoz ATP'ye çevrilemez." },
        { t: "mc", q: "Aynı deneyde glikoz eklenen tüpte ışık oluşmamasının nedeni nedir?", o: ["Hücresiz özütte hücresel solunum olmadığı için glikozdaki enerji ATP'ye aktarılamaz", "Glikozda hiç enerji yoktur", "Glikoz lusiferaz enzimini bozar", "Glikoz ışığı soğurur"], a: 0, e: "Glikozun enerjisi ancak hücresel solunumla ATP'ye aktarılınca kullanılabilir." },
        { t: "mc", q: "Ateş böceği deneyinde saf su eklenen tüpün görevi nedir?", o: ["Kontrol grubu olması", "Bağımlı değişken olması", "Enerji kaynağı olması", "Işığı artırması"], a: 0, e: "Saf su tüpü, sonucu karşılaştırmak için kullanılan kontrol düzeneğidir." },
        { t: "mc", q: "Ateş böceği deneyinde bağımlı değişken hangisidir?", o: ["Işık oluşup oluşmaması", "Eklenen madde (su, glikoz, ATP)", "Özüt miktarı", "Ortam sıcaklığı"], a: 0, e: "Ölçülen/gözlenen sonuç bağımlı değişkendir. Eklenen madde bağımsız değişkendir." },
        { t: "tf", q: "Hücresiz ateş böceği özütünün bir süre sonra sönmesinin nedeni, içindeki ATP'nin tükenmesidir.", a: true, e: "ATP depolanmaz; yeniden üretilemeyince ışık söner." },
        { t: "tf", q: "Canlı bir ateş böceğinin ışığı sönmez, çünkü hücreleri besinlerden sürekli yeni ATP üretir.", a: true, e: "ADP + P, hücresel solunumdan gelen enerjiyle tekrar ATP'ye dönüştürülür (ATP döngüsü)." },
        { t: "mc", q: "Ateş böceğinin ışık saçmasında gerçekleşen enerji dönüşümü hangisidir?", o: ["Kimyasal enerji → ışık enerjisi", "Işık enerjisi → kimyasal enerji", "Isı enerjisi → ışık enerjisi", "Işık enerjisi → ısı enerjisi"], a: 0, e: "ATP'deki kimyasal enerji ışığa dönüşür: biyolüminesans." },
        { t: "mc", q: "Işıkta bekletilen su bitkisinden çıkan gaz tüpte toplanıyor. Bu gazın oksijen olduğu nasıl kanıtlanır?", o: ["Közlenmiş tahta kıymık yaklaştırılınca alevlenir", "Kireç suyunu bulandırır", "İyotla mavi-mor renk verir", "Bromtimol mavisini sarıya çevirir"], a: 0, e: "Oksijen yanmayı destekler; közlenmiş kıymık alevlenir. Kireç suyu ise CO₂ testidir." },
        { t: "mc", q: "Su bitkisi karanlığa alındığında kabarcık çıkışının durması neyi gösterir?", o: ["Fotosentez için ışığın gerekli olduğunu", "Fotosentez için CO₂'nin gerekli olduğunu", "Bitkinin solunumu durdurduğunu", "Suyun bittiğini"], a: 0, e: "Işık yoksa ışığa bağımlı tepkimeler ve O₂ üretimi durur." },
        { t: "tf", q: "Karanlıkta bekletilen bir bitki solunum yapmaya devam eder ve ortama CO₂ verir.", a: true, e: "Solunum gece-gündüz sürer; karanlıkta sadece fotosentez durur. Bu yüzden ortamdaki kireç suyu bulanır." },
        { t: "mc", q: "Farklı miktarda karbonat (NaHCO₃) eklenen sulara aynı su bitkisi konuyor ve kabarcıklar sayılıyor. Bu deneyde hangisi SABİT tutulmalıdır?", o: ["Işık şiddeti ve sıcaklık", "CO₂ miktarı", "Kabarcık sayısı", "Karbonat miktarı"], a: 0, e: "CO₂ (karbonat) miktarı bağımsız, kabarcık sayısı bağımlı değişkendir. Işık ve sıcaklık sabit tutulur." },
        { t: "mc", q: "Bir hücrede ATP üretimi tamamen durursa aşağıdakilerden hangisi DEVAM EDER?", o: ["Oksijenin difüzyonla hücreye girmesi", "Kas kasılması", "Protein sentezi", "Na⁺-K⁺ pompasının çalışması"], a: 0, e: "Difüzyon ATP gerektirmez. Diğerleri ATP olmadan durur." }
      ]
    },

    /* ───────────────────────── 1 ───────────────────────── */
    {
      id: "enerji",
      title: "Canlılık için enerji",
      kod: "BİY.10.1.1",
      cards: [
        { h: "Canlılar neden enerjiye ihtiyaç duyar?",
          b: "Canlılığın her belirtisi enerji ister: <b>büyüme ve gelişme</b>, <b>hücre bölünmesi</b>, <b>onarım</b>, <b>hareket</b> (kas kasılması, sil-kamçı), <b>aktif taşıma</b>, <b>sentez</b> (protein, glikojen, DNA), <b>sinir iletimi</b>, <b>vücut sıcaklığının korunması</b> ve <b>üreme</b>. Enerji alınamazsa metabolizma durur ve canlı ölür." },
        { h: "Enerjinin kaynağı ve akışı",
          b: "Dünyadaki enerjinin temel kaynağı <b>Güneş</b>tir. <b>Ototroflar</b> (bitki, alg, siyanobakteri) ışık enerjisini fotosentezle <b>besinlerin kimyasal bağ enerjisine</b> çevirir. Bazı bakteriler bunu kimyasal enerjiyle yapar: <b>kemosentez</b>.<br><b>Heterotroflar</b> besinini dışarıdan hazır alır.<br>Enerji besin zincirinde <b>tek yönlü</b> akar; her basamakta bir kısmı <b>ısı</b> olarak kaybolur, geri dönüşmez." },
        { h: "Besindeki enerji doğrudan kullanılamaz",
          b: "Glikozdaki enerji hücre işlerinde <b>doğrudan</b> kullanılamaz. Önce <b>hücresel solunumla</b> parçalanır ve enerji <b>ATP</b>ye aktarılır. Hücre işlerinde ATP harcar.<br>Bu yüzden ATP'ye hücrenin <b>enerji para birimi</b> denir." },
        { h: "Metabolizma: yapım + yıkım",
          b: "<b>Anabolizma (yapım)</b>: küçük moleküllerden büyük molekül sentezi, <b>enerji harcar</b> (ör. protein sentezi, fotosentez).<br><b>Katabolizma (yıkım)</b>: büyük moleküllerin parçalanması, <b>enerji açığa çıkar</b> (ör. hücresel solunum).<br>Metabolizma = anabolizma + katabolizma." }
      ],
      qs: [
        { t: "mc", q: "Aşağıdakilerden hangisi Dünya'daki canlıların kullandığı enerjinin temel kaynağıdır?", o: ["Güneş", "Toprak", "Su", "Oksijen"], a: 0, e: "Ototroflar güneş enerjisini besinlerdeki kimyasal enerjiye çevirir; diğer canlılar da bu besinlerle beslenir." },
        { t: "tf", q: "Glikozdaki kimyasal enerji, kas kasılmasında doğrudan kullanılabilir.", a: false, e: "Glikozdaki enerji önce hücresel solunumla ATP'ye aktarılır. Kas kasılmasında ATP kullanılır." },
        { t: "mc", q: "Aşağıdakilerden hangisi enerjinin besin zincirindeki akışı için doğrudur?", o: ["Tek yönlüdür ve her basamakta bir kısmı ısı olarak kaybolur", "Döngüseldir, enerji tekrar üreticilere döner", "Her basamakta enerji artar", "Ayrıştırıcılar enerjiyi Güneş'e geri verir"], a: 0, e: "Madde döngüseldir, enerji ise tek yönlü akar ve her basamakta ısı olarak azalır." },
        { t: "mc", q: "Ototrof canlılar için hangisi söylenemez?", o: ["Besinlerini hazır olarak dışarıdan alırlar", "Işık ya da kimyasal enerji kullanabilirler", "İnorganik maddelerden organik madde üretirler", "Besin zincirinin ilk halkasını oluştururlar"], a: 0, e: "Besinini hazır alan canlılar heterotroftur." },
        { t: "mc", q: "Hangisi enerji gerektiren bir canlılık olayı <u>değildir</u>?", o: ["Oksijenin hücre zarından difüzyonla geçmesi", "Hücre bölünmesi", "Kas kasılması", "Protein sentezi"], a: 0, e: "Difüzyon, çok yoğun ortamdan az yoğun ortama kendiliğinden gerçekleşir; enerji harcanmaz." },
        { t: "tf", q: "Kemosentez yapan bakteriler, besin üretmek için ışık yerine inorganik maddelerin oksitlenmesinden açığa çıkan kimyasal enerjiyi kullanır.", a: true, e: "Örneğin nitrit ve nitrat bakterileri ile demir bakterileri." },
        { t: "mc", q: "Büyük moleküllerin küçük birimlerden enerji harcanarak sentezlenmesine ne ad verilir?", o: ["Anabolizma", "Katabolizma", "Hidroliz", "Difüzyon"], a: 0, e: "Yapım tepkimeleri anabolizmadır ve enerji harcar." },
        { t: "tf", q: "Besin zincirinde bir sonraki basamağa aktarılan enerji, bir önceki basamaktaki enerjiden fazladır.", a: false, e: "Her basamakta enerjinin bir bölümü solunumda ısı olarak kaybolur. Bu yüzden üst basamaklara giden enerji azalır." },
        { t: "mc", q: "Hücrede 'enerji para birimi' olarak adlandırılan molekül hangisidir?", o: ["ATP", "Glikoz", "Nişasta", "DNA"], a: 0, e: "Hücre işlerinde doğrudan kullanılan enerji molekülü ATP'dir." }
      ]
    },

    /* ───────────────────────── 2 ───────────────────────── */
    {
      id: "atp-yapi",
      title: "ATP'nin yapısı",
      kod: "BİY.10.1.1",
      cards: [
        { h: "ATP = Adenozin TriFosfat",
          b: "<div class='atp'><span class='atp-a'>Adenin</span><span class='atp-r'>Riboz</span><span class='atp-p'>P</span><i>~</i><span class='atp-p'>P</span><i>~</i><span class='atp-p'>P</span></div><b>Adenin</b> (azotlu organik baz) + <b>Riboz</b> (5 karbonlu şeker) + <b>3 fosfat</b>.<br>Adenin + riboz = <b>adenozin</b>.<br>'~' işaretleri <b>yüksek enerjili fosfat bağları</b>dır: ATP'de <b>2 tane</b> bulunur." },
        { h: "AMP → ADP → ATP",
          b: "Adenozin + 1 fosfat = <b>AMP</b> (monofosfat)<br>Adenozin + 2 fosfat = <b>ADP</b> (difosfat)<br>Adenozin + 3 fosfat = <b>ATP</b> (trifosfat)<br><br>AMP, RNA'nın yapısındaki <b>adenin nükleotidi</b>yle aynıdır. ATP aslında değiştirilmiş bir nükleotiddir." },
        { h: "ATP'nin sentezi ve yıkımı",
          b: "<b>Sentez (fosforilasyon)</b>: ADP + P + enerji → ATP + <b>H₂O</b>. Bu bir <b>dehidrasyon sentezi</b>dir, su açığa çıkar.<br><b>Yıkım (hidroliz)</b>: ATP + <b>H₂O</b> → ADP + P + enerji. Su harcanır.<br>Son fosfat bağının kopmasıyla yaklaşık <b>7,3 kcal/mol</b> enerji açığa çıkar.<br>Her iki tepkime de <b>enzimle</b> gerçekleşir." },
        { h: "ATP'nin özellikleri (yazılıda sorulur)",
          b: "• Bütün canlılarda bulunur, <b>evrenseldir</b>.<br>• Hücrede <b>depolanmaz</b>; ihtiyaç olduğunda üretilip hemen kullanılır. Hücre enerjiyi glikojen, nişasta, yağ olarak depolar.<br>• Hücreler arasında <b>taşınmaz</b>; her hücre kendi ATP'sini üretir.<br>• <b>Virüsler</b> ATP üretemez, konak hücrenin ATP'sini kullanır.<br>• Enerji küçük paketler halinde verildiği için hücre <b>enerji israf etmez</b> ve ısıdan zarar görmez." }
      ],
      qs: [
        { t: "mc", q: "ATP molekülünün yapısında aşağıdakilerden hangisi bulunmaz?", o: ["Deoksiriboz", "Adenin", "Riboz", "Fosfat"], a: 0, e: "ATP'deki şeker ribozdur. Deoksiriboz DNA'da bulunur." },
        { t: "mc", q: "Adenin bazı ile riboz şekerinin birleşmesiyle oluşan yapıya ne ad verilir?", o: ["Adenozin", "Adenozin monofosfat", "Nükleik asit", "Fosfolipit"], a: 0, e: "Adenin + riboz = adenozin. Buna fosfat eklenince AMP, ADP, ATP oluşur." },
        { t: "mc", q: "Bir ATP molekülünde kaç tane yüksek enerjili fosfat bağı vardır?", o: ["2", "1", "3", "4"], a: 0, e: "3 fosfat arasında 2 yüksek enerjili bağ bulunur: P~P~P." },
        { t: "tf", q: "ADP'ye fosfat eklenerek ATP sentezlenirken su açığa çıkar.", a: true, e: "Fosforilasyon bir dehidrasyon sentezidir: ADP + P → ATP + H₂O." },
        { t: "tf", q: "ATP hücrede uzun süre depolanabilir.", a: false, e: "ATP kararsızdır, depolanmaz. Hücre enerjiyi nişasta, glikojen, yağ gibi moleküllerde depolar." },
        { t: "mc", q: "ATP'nin hidrolizi ile ilgili hangisi doğrudur?", o: ["Su harcanır, ADP + fosfat oluşur ve enerji açığa çıkar", "Su açığa çıkar ve enerji harcanır", "Enzim gerekmez", "Sadece bitki hücrelerinde gerçekleşir"], a: 0, e: "ATP + H₂O → ADP + P + enerji (yaklaşık 7,3 kcal/mol)." },
        { t: "tf", q: "Kas hücresinde üretilen ATP kan yoluyla sinir hücresine taşınarak kullanılabilir.", a: false, e: "ATP hücreler arasında taşınmaz. Her hücre kendi ATP'sini üretip kullanır." },
        { t: "mc", q: "AMP molekülü yapı olarak aşağıdakilerden hangisine benzer?", o: ["RNA'daki adenin nükleotidine", "Glikoza", "Aminoaside", "Yağ asidine"], a: 0, e: "AMP = adenin + riboz + 1 fosfat. Bu, RNA'daki adenin nükleotididir." },
        { t: "tf", q: "Virüsler kendi ATP'lerini üretebilir.", a: false, e: "Virüslerin metabolizması yoktur. Konak hücrenin ATP'sini ve enzimlerini kullanırlar." },
        { t: "mc", q: "ATP'nin bütün canlılarda ortak enerji molekülü olması neyi gösterir?", o: ["Canlıların ortak bir kökenden geldiğini / evrensel olduğunu", "Tüm canlıların fotosentez yaptığını", "ATP'nin hücreler arasında taşındığını", "ATP'nin depolanabildiğini"], a: 0, e: "ATP'nin evrensel olması, canlılardaki temel enerji mekanizmasının ortak olduğunu gösterir." }
      ]
    },

    /* ───────────────────────── 3 ───────────────────────── */
    {
      id: "atp-rol",
      title: "ATP üretimi ve kullanımı",
      kod: "BİY.10.1.1",
      cards: [
        { h: "ATP üretiminin 3 yolu",
          b: "<table class='tbl'><tr><th>Yol</th><th>Nerede?</th></tr><tr><td><b>Substrat düzeyinde fosforilasyon</b></td><td>Sitoplazma (glikoliz, fermantasyon) ve mitokondri matriksi. <b>Bütün canlılarda</b> görülür.</td></tr><tr><td><b>Oksidatif fosforilasyon</b></td><td>Mitokondri iç zarı (krista), elektron taşıma sistemi. Prokaryotlarda hücre zarında.</td></tr><tr><td><b>Fotofosforilasyon</b></td><td>Kloroplastın <b>tilakoid zarı</b>, ışık enerjisiyle. Fotosentez yapan prokaryotlarda zar kıvrımlarında.</td></tr></table>" },
        { h: "ATP HARCANAN olaylar",
          b: "• <b>Aktif taşıma</b> (Na⁺-K⁺ pompası)<br>• <b>Endositoz</b> (fagositoz, pinositoz) ve <b>ekzositoz</b><br>• <b>Kas kasılması</b>, sil ve kamçı hareketi<br>• <b>Dehidrasyon sentezi</b>: protein, glikojen, nişasta, yağ, DNA sentezi<br>• <b>Hücre bölünmesi</b>, DNA eşlenmesi<br>• <b>Sinir impulsunun iletimi</b><br>• <b>Biyolüminesans</b> (ateş böceğinin ışık saçması)<br>• Fotosentezin <b>ışıktan bağımsız evresi</b>" },
        { h: "ATP HARCANMAYAN olaylar",
          b: "• <b>Difüzyon</b> ve <b>kolaylaştırılmış difüzyon</b><br>• <b>Osmoz</b>, plazmoliz, deplazmoliz<br>• <b>Hidroliz</b> tepkimeleri (ör. hücre dışı sindirim)<br>• Gaz değişimi (akciğerde O₂ - CO₂ difüzyonu)<br><br>Kısa kural: madde <b>yoğunluk farkına göre kendiliğinden</b> hareket ediyorsa ATP gerekmez. <b>Yoğunluğa karşı</b> ya da <b>sentez/hareket</b> varsa ATP gerekir." },
        { h: "ATP döngüsü",
          b: "Enerji veren tepkimeler (hücresel solunum, fotosentezin ışık evresi) → ADP + P'den <b>ATP</b> yapılır.<br>Enerji isteyen tepkimeler (sentez, taşıma, hareket) → ATP <b>ADP + P</b>'ye yıkılır.<br>Bu döngü sürekli döner: Bir hücre saniyede milyonlarca ATP üretip harcayabilir." }
      ],
      qs: [
        { t: "mc", q: "Aşağıdaki olaylardan hangisinde ATP harcanır?", o: ["Na⁺-K⁺ pompasının çalışması", "Osmoz", "Difüzyon", "Kolaylaştırılmış difüzyon"], a: 0, e: "Na⁺-K⁺ pompası, iyonları yoğunluk farkına karşı taşır: aktif taşıma." },
        { t: "mc", q: "Aşağıdakilerden hangisinde ATP harcanmaz?", o: ["Bitki hücresinin hipertonik ortamda plazmoliz olması", "Akyuvarın bakteriyi fagositozla alması", "Ateş böceğinin ışık saçması", "Glikozlardan glikojen sentezlenmesi"], a: 0, e: "Plazmoliz osmozla su kaybıdır. Osmoz pasif taşımadır." },
        { t: "mc", q: "Bütün canlılarda görülen ATP üretim şekli hangisidir?", o: ["Substrat düzeyinde fosforilasyon", "Fotofosforilasyon", "Oksidatif fosforilasyon", "Kemosentez"], a: 0, e: "Glikoliz bütün canlılarda gerçekleşir ve burada substrat düzeyinde ATP üretilir." },
        { t: "mc", q: "Fotofosforilasyon kloroplastın hangi kısmında gerçekleşir?", o: ["Tilakoid zarında", "Stromada", "Dış zarında", "Ribozomunda"], a: 0, e: "Işık enerjisi tilakoid zarındaki pigmentlerce soğurulur ve burada ATP üretilir." },
        { t: "tf", q: "Oksidatif fosforilasyon ökaryot hücrelerde mitokondrinin iç zarında (kristalarda) gerçekleşir.", a: true, e: "Elektron taşıma sistemi mitokondri iç zarında bulunur." },
        { t: "tf", q: "Ekzositoz ile hücre dışına madde salgılanması ATP harcanmadan gerçekleşir.", a: false, e: "Endositoz ve ekzositoz, zar hareketi gerektirdiği için ATP harcar." },
        { t: "mc", q: "Bir hücrede siyanür nedeniyle ATP üretimi durursa aşağıdakilerden hangisi ilk etkilenir?", o: ["Aktif taşıma", "Oksijenin difüzyonu", "Suyun osmozla girişi", "Glikozun kolaylaştırılmış difüzyonla girişi"], a: 0, e: "ATP'ye bağımlı olan olay aktif taşımadır. Pasif taşıma ATP'den etkilenmez." },
        { t: "tf", q: "Prokaryot hücrelerde mitokondri olmadığı için oksidatif fosforilasyon hiç görülmez.", a: false, e: "Oksijenli solunum yapan prokaryotlarda elektron taşıma sistemi hücre zarında bulunur ve oksidatif fosforilasyon gerçekleşir." },
        { t: "mc", q: "Aşağıdaki eşleştirmelerden hangisi <u>yanlıştır</u>?", o: ["Osmoz — ATP harcanır", "Protein sentezi — ATP harcanır", "Difüzyon — ATP harcanmaz", "Kas kasılması — ATP harcanır"], a: 0, e: "Osmoz suyun pasif hareketidir; ATP harcanmaz." },
        { t: "mc", q: "ATP'nin sürekli üretilip yıkılmasını sağlayan döngüde, ATP sentezi için gereken enerji hangi olaydan sağlanabilir?", o: ["Hücresel solunum", "Protein sentezi", "Aktif taşıma", "Kas kasılması"], a: 0, e: "Besinlerin hücresel solunumla yıkılması ATP üretir. Diğer seçenekler ATP harcayan olaylardır." }
      ]
    },

    /* ───────────────────────── 4 ───────────────────────── */
    {
      id: "fs-genel",
      title: "Fotosentez: genel bakış",
      kod: "BİY.10.1.3",
      cards: [
        { h: "Fotosentez denklemi",
          b: "<div class='eq'>6CO₂ + 12H₂O <span>—ışık, klorofil, enzim→</span> C₆H₁₂O₆ + 6O₂ + 6H₂O</div><b>Kullanılanlar:</b> karbondioksit, su, ışık enerjisi.<br><b>Üretilenler:</b> glikoz, oksijen, su.<br>Işık enerjisi → <b>kimyasal bağ enerjisi</b>ne dönüşür." },
        { h: "Kloroplastın yapısı",
          b: "• <b>Çift zar</b> (dış zar + iç zar)<br>• <b>Tilakoid</b>: üst üste dizilince <b>granum</b> oluşur. Klorofil buradadır → <b>ışığa bağımlı</b> tepkimeler.<br>• <b>Stroma</b>: sıvı kısım; enzimler, kendi <b>DNA</b>, <b>RNA</b> ve <b>ribozomu</b> bulunur → <b>ışıktan bağımsız</b> tepkimeler.<br>Prokaryot fotosentetiklerde (siyanobakteri) kloroplast yoktur; klorofil <b>hücre zarı kıvrımlarında</b> bulunur." },
        { h: "Pigmentler",
          b: "<b>Klorofil a ve b</b>: mor-mavi ve kırmızı ışığı soğurur, <b>yeşili yansıtır</b>. Bu yüzden yaprak yeşil görünür.<br>Klorofilin merkezinde <b>magnezyum (Mg)</b>, yapısında <b>azot (N)</b> bulunur. Klorofil sentezi için <b>demir (Fe)</b> gerekir.<br><b>Karotenoitler</b> (sarı-turuncu): ışığı soğurup klorofile aktarır, klorofili korur. Sonbaharda klorofil yıkılınca görünür hale gelir." },
        { h: "Glikoz ne olur?",
          b: "Üretilen glikoz:<br>• Hücresel solunumda <b>ATP</b> üretmek için kullanılır<br>• <b>Nişasta</b> olarak depolanır (iyot ile mavi-mor renk)<br>• <b>Sakkaroz</b>a çevrilip floemle taşınır<br>• <b>Selüloz</b> (hücre çeperi) yapılır<br>• Azot eklenerek <b>aminoasit</b>, ayrıca <b>yağ</b> sentezlenir." }
      ],
      qs: [
        { t: "mc", q: "Fotosentezde kullanılan inorganik maddeler hangileridir?", o: ["CO₂ ve H₂O", "Glikoz ve O₂", "O₂ ve H₂O", "Glikoz ve CO₂"], a: 0, e: "Fotosentezin girdileri CO₂, H₂O ve ışıktır." },
        { t: "mc", q: "Fotosentezde gerçekleşen enerji dönüşümü hangisidir?", o: ["Işık enerjisi → kimyasal enerji", "Kimyasal enerji → ışık enerjisi", "Isı enerjisi → kimyasal enerji", "Kimyasal enerji → hareket enerjisi"], a: 0, e: "Işık enerjisi glikozun kimyasal bağlarında depolanır." },
        { t: "tf", q: "Yapraklar yeşil görünür çünkü klorofil yeşil ışığı en fazla soğurur.", a: false, e: "Klorofil yeşil ışığı en az soğurur, yansıtır. Bu yüzden yeşil görünür." },
        { t: "mc", q: "Klorofil molekülünün merkezinde hangi element bulunur?", o: ["Magnezyum", "Demir", "Kalsiyum", "Potasyum"], a: 0, e: "Klorofilin merkez atomu Mg'dir. Fe, klorofil sentezinde gereklidir ama yapısında yoktur." },
        { t: "tf", q: "Siyanobakteriler kloroplastları olmadığı halde fotosentez yapabilir.", a: true, e: "Klorofilleri hücre zarı kıvrımlarındadır." },
        { t: "mc", q: "Kloroplastta klorofil pigmentleri nerede bulunur?", o: ["Tilakoid zarında", "Stromada", "Dış zarda", "Çekirdekte"], a: 0, e: "Pigmentler tilakoid zarına gömülüdür." },
        { t: "mc", q: "Fotosentezle üretilen glikozun bitkide depolanmış hali hangisidir?", o: ["Nişasta", "Glikojen", "Selüloz", "Kitin"], a: 0, e: "Bitkiler glikozu nişasta olarak depolar. Glikojen hayvan ve mantarlarda bulunur." },
        { t: "tf", q: "Kloroplastın kendine ait DNA'sı ve ribozomu vardır.", a: true, e: "Bu yüzden kloroplast kendi bazı proteinlerini sentezleyebilir ve kendini eşleyebilir." },
        { t: "mc", q: "Sonbaharda yaprakların sararmasının nedeni nedir?", o: ["Klorofilin yıkılması ve karotenoitlerin görünür hale gelmesi", "Karotenoitlerin yıkılması", "Klorofilin artması", "Glikoz üretiminin artması"], a: 0, e: "Klorofil yıkılınca, önceden de var olan sarı-turuncu karotenoitler görünür." },
        { t: "mc", q: "Fotosentez tepkimesinde üretilen maddeler hangileridir?", o: ["Glikoz, O₂ ve H₂O", "CO₂ ve H₂O", "Glikoz ve CO₂", "Sadece O₂"], a: 0, e: "C₆H₁₂O₆ + 6O₂ + 6H₂O." }
      ]
    },

    /* ───────────────────────── 5 ───────────────────────── */
    {
      id: "fs-isik",
      title: "Işığa bağımlı tepkimeler",
      kod: "BİY.10.1.3",
      cards: [
        { h: "Nerede, ne olur?",
          b: "<b>Yer:</b> tilakoid zarı (granum).<br>1. Klorofil <b>ışığı soğurur</b>, elektronları uyarılır.<br>2. <b>Suyun fotolizi</b>: su ışık etkisiyle parçalanır.<br><div class='eq'>2H₂O → 4H⁺ + 4e⁻ + <b>O₂</b></div>3. Elektronlar taşıma sisteminden geçerken <b>ATP</b> üretilir (fotofosforilasyon).<br>4. H⁺ ve elektronlar <b>NADP⁺</b>'ya aktarılır → <b>NADPH</b> oluşur." },
        { h: "Oksijen nereden gelir?",
          b: "Fotosentezde açığa çıkan <b>O₂'nin kaynağı SUDUR</b>, CO₂ değildir.<br>Kanıt: İşaretli oksijen (¹⁸O) içeren <b>su</b> verilen bitkide açığa çıkan O₂ işaretli çıkar. İşaretli <b>CO₂</b> verilince O₂ işaretli çıkmaz; işaret glikoz ve suda görülür." },
        { h: "Girdiler ve çıktılar",
          b: "<table class='tbl'><tr><th>Kullanılan</th><th>Üretilen</th></tr><tr><td>Işık, H₂O, ADP + P, NADP⁺</td><td><b>ATP, NADPH, O₂</b></td></tr></table>ATP ve NADPH <b>stromaya</b> geçer ve ışıktan bağımsız tepkimelerde kullanılır.<br>Bu evrede <b>CO₂ kullanılmaz</b>, glikoz üretilmez." }
      ],
      qs: [
        { t: "mc", q: "Işığa bağımlı tepkimeler kloroplastın neresinde gerçekleşir?", o: ["Tilakoid zarında", "Stromada", "Dış zar ile iç zar arasında", "Sitoplazmada"], a: 0, e: "Pigmentler ve elektron taşıma sistemi tilakoid zarındadır." },
        { t: "mc", q: "Fotosentezde açığa çıkan oksijenin kaynağı hangisidir?", o: ["Su", "Karbondioksit", "Glikoz", "Klorofil"], a: 0, e: "Suyun fotolizi sonucunda O₂ açığa çıkar." },
        { t: "mc", q: "Işığa bağımlı tepkimelerin ürünleri hangileridir?", o: ["ATP, NADPH ve O₂", "Glikoz ve O₂", "CO₂ ve H₂O", "ADP ve NADP⁺"], a: 0, e: "ATP ve NADPH stromaya geçer, O₂ dışarı verilir." },
        { t: "tf", q: "Işığa bağımlı tepkimelerde CO₂ kullanılarak glikoz üretilir.", a: false, e: "CO₂ ışıktan bağımsız tepkimelerde (stromada) kullanılır." },
        { t: "tf", q: "Suyun ışık enerjisiyle parçalanmasına fotoliz denir.", a: true, e: "2H₂O → 4H⁺ + 4e⁻ + O₂" },
        { t: "mc", q: "Bir bitkiye oksijeni işaretli (¹⁸O) su verilirse işaretli oksijen ilk olarak hangi üründe görülür?", o: ["Atmosfere verilen O₂'de", "Glikozda", "CO₂'de", "Nişastada"], a: 0, e: "Su fotolizle parçalanır ve oksijeni O₂ gazı olarak açığa çıkar." },
        { t: "mc", q: "Işığa bağımlı tepkimelerde ATP üretim şekli hangisidir?", o: ["Fotofosforilasyon", "Oksidatif fosforilasyon", "Substrat düzeyinde fosforilasyon", "Hidroliz"], a: 0, e: "Işık enerjisiyle ATP üretilmesine fotofosforilasyon denir." },
        { t: "tf", q: "Işığa bağımlı tepkimelerde üretilen NADPH, ışıktan bağımsız tepkimelerde hidrojen kaynağı olarak kullanılır.", a: true, e: "NADPH, CO₂'nin glikoza indirgenmesi için gereken hidrojen ve elektronu taşır." },
        { t: "mc", q: "Bir bitki karanlığa alındığında ilk olarak hangisinin üretimi durur?", o: ["O₂ ve ATP (ışık evresi)", "Glikoz", "CO₂", "Selüloz"], a: 0, e: "Işık olmayınca önce ışık evresi durur. ATP ve NADPH bitince glikoz üretimi de durur." }
      ]
    },

    /* ───────────────────────── 6 ───────────────────────── */
    {
      id: "fs-calvin",
      title: "Işıktan bağımsız tepkimeler",
      kod: "BİY.10.1.3",
      cards: [
        { h: "Calvin döngüsü",
          b: "<b>Yer:</b> stroma.<br>1. <b>CO₂ tutulur</b> (karbon fiksasyonu): atmosferden alınan CO₂, 5 karbonlu bir bileşiğe (RuBP) bağlanır.<br>2. Işık evresinden gelen <b>ATP</b> ve <b>NADPH</b> kullanılarak bileşikler indirgenir.<br>3. <b>Glikoz</b> (ve diğer organik maddeler) oluşur.<br>4. Başlangıç bileşiği yeniden yapılır; döngü sürer." },
        { h: "Neden 'ışıktan bağımsız'?",
          b: "Bu tepkimeler ışığı <b>doğrudan</b> kullanmaz; karanlıkta da birkaç saniye devam edebilir.<br>Ama ışık evresinin ürünleri olan <b>ATP ve NADPH</b>'ye bağımlıdır. Bu yüzden <b>dolaylı olarak ışığa bağlıdır</b>: uzun süre karanlıkta durur.<br>Enzimlerle yürüdüğü için <b>sıcaklıktan</b> çok etkilenir." },
        { h: "İki evreyi karşılaştır",
          b: "<table class='tbl'><tr><th></th><th>Işığa bağımlı</th><th>Işıktan bağımsız</th></tr><tr><td>Yer</td><td>Tilakoid</td><td>Stroma</td></tr><tr><td>Kullanılan</td><td>Işık, H₂O, ADP, NADP⁺</td><td>CO₂, ATP, NADPH</td></tr><tr><td>Üretilen</td><td>O₂, ATP, NADPH</td><td>Glikoz, ADP, NADP⁺</td></tr><tr><td>ATP</td><td>Üretilir</td><td>Harcanır</td></tr><tr><td>Etkili faktör</td><td>Işık</td><td>Sıcaklık, CO₂</td></tr></table>" }
      ],
      qs: [
        { t: "mc", q: "Işıktan bağımsız tepkimeler kloroplastın neresinde gerçekleşir?", o: ["Stromada", "Tilakoid zarında", "Granumda", "Dış zarda"], a: 0, e: "Calvin döngüsünün enzimleri stromadadır." },
        { t: "mc", q: "Işıktan bağımsız tepkimelerde aşağıdakilerden hangisi kullanılmaz?", o: ["O₂", "CO₂", "ATP", "NADPH"], a: 0, e: "O₂ ışık evresinin ürünüdür; Calvin döngüsünde kullanılmaz." },
        { t: "tf", q: "Işıktan bağımsız tepkimelerde ATP üretilir.", a: false, e: "Bu evrede ATP harcanır. ATP ışık evresinde üretilir." },
        { t: "mc", q: "CO₂'nin organik moleküle bağlanmasına ne ad verilir?", o: ["Karbon fiksasyonu (CO₂ tutulması)", "Fotoliz", "Fotofosforilasyon", "Hidroliz"], a: 0, e: "Atmosferdeki inorganik karbon organik bileşiğe bağlanır." },
        { t: "tf", q: "Işıktan bağımsız tepkimeler ışığı doğrudan kullanmaz ama ışık evresinin ürünlerine ihtiyaç duyduğu için uzun süre karanlıkta devam edemez.", a: true, e: "ATP ve NADPH tükenince Calvin döngüsü durur." },
        { t: "mc", q: "Sıcaklık değişiminden en çok etkilenen fotosentez evresi hangisidir?", o: ["Işıktan bağımsız tepkimeler", "Işığın soğurulması", "Suyun fotolizi", "Hepsi eşit etkilenir"], a: 0, e: "Calvin döngüsü tamamen enzimatiktir; enzimler sıcaklığa duyarlıdır." },
        { t: "mc", q: "Işıktan bağımsız tepkimelerin ürünleri hangileridir?", o: ["Glikoz, ADP + P ve NADP⁺", "ATP ve NADPH", "O₂ ve ATP", "CO₂ ve H₂O"], a: 0, e: "ADP ve NADP⁺ tekrar ışık evresine döner." },
        { t: "mc", q: "Işıkta fotosentez yapan bir bitkinin ortamındaki CO₂ aniden kesilirse önce ne olur?", o: ["Glikoz üretimi durur, ATP ve NADPH stromada birikir", "O₂ üretimi artar", "Suyun fotolizi hızlanır", "Klorofil yıkılır"], a: 0, e: "CO₂ yoksa Calvin döngüsü çalışmaz. ATP ve NADPH harcanamaz, birikir. Bir süre sonra ışık evresi de yavaşlar." }
      ]
    },

    /* ───────────────────────── 7 ───────────────────────── */
    {
      id: "fs-faktor",
      title: "Fotosentez hızını etkileyen faktörler",
      kod: "BİY.10.1.3",
      cards: [
        { h: "Dış (çevresel) faktörler",
          b: "• <b>Işık şiddeti</b><br>• <b>Işığın dalga boyu</b> (rengi)<br>• <b>CO₂ miktarı</b><br>• <b>Sıcaklık</b><br>• <b>Su</b><br>• <b>Mineraller</b> (Mg, N, Fe)<br>• <b>pH</b><br><br><b>İç faktörler:</b> klorofil miktarı, kloroplast sayısı, enzim miktarı, stoma sayısı ve dağılımı, yaprak yüzeyi, kütikula kalınlığı." },
        { h: "Işık şiddeti ve CO₂: doyma eğrisi",
          b: "<svg class='graph' viewBox='0 0 260 150' role='img' aria-label='Işık şiddeti arttıkça fotosentez hızı artar, sonra sabitlenir'><line x1='30' y1='120' x2='250' y2='120' class='ax'/><line x1='30' y1='120' x2='30' y2='10' class='ax'/><polyline points='30,118 70,80 110,48 150,36 190,34 245,34' class='ln'/><text x='140' y='140' class='lb' text-anchor='middle'>Işık şiddeti / CO₂</text><text x='14' y='70' class='lb' transform='rotate(-90 14 70)' text-anchor='middle'>Fotosentez hızı</text><text x='200' y='26' class='lb'>doyma</text></svg>Işık şiddeti (veya CO₂) arttıkça hız <b>belirli bir noktaya kadar artar</b>, sonra <b>sabit kalır</b>. Çünkü artık başka bir faktör (enzim, klorofil, CO₂) <b>sınırlayıcı</b> olmuştur." },
        { h: "Sıcaklık: optimum eğrisi",
          b: "<svg class='graph' viewBox='0 0 260 150' role='img' aria-label='Sıcaklık arttıkça hız optimuma kadar artar sonra hızla düşer'><line x1='30' y1='120' x2='250' y2='120' class='ax'/><line x1='30' y1='120' x2='30' y2='10' class='ax'/><polyline points='30,118 80,95 130,55 160,30 185,45 205,90 225,118' class='ln'/><text x='140' y='140' class='lb' text-anchor='middle'>Sıcaklık</text><text x='14' y='70' class='lb' transform='rotate(-90 14 70)' text-anchor='middle'>Fotosentez hızı</text><text x='146' y='22' class='lb'>optimum</text></svg>Sıcaklık <b>optimuma kadar</b> hızı artırır. Daha yüksek sıcaklıkta <b>enzimlerin yapısı bozulur</b> (denatürasyon), hız hızla düşer." },
        { h: "Işığın rengi",
          b: "<div class='spec'><span style='background:#7b4bd1'>mor</span><span style='background:#2f6fe0'>mavi</span><span style='background:#2fa84f'>yeşil</span><span style='background:#e5c12f;color:#222'>sarı</span><span style='background:#e88a2a'>turuncu</span><span style='background:#d93a3a'>kırmızı</span></div>Hız <b>mor-mavi</b> ve <b>kırmızı</b> ışıkta en <b>yüksek</b>, <b>yeşil</b> ışıkta en <b>düşük</b>tür.<br>Beyaz ışık tüm dalga boylarını içerdiği için en verimlidir." },
        { h: "Su, mineral ve sınırlayıcı faktör",
          b: "<b>Su azalırsa</b> stomalar kapanır → CO₂ girişi azalır → fotosentez yavaşlar.<br><b>Mg veya N eksikliği</b> → klorofil yapılamaz → yapraklar sararır (kloroz).<br><b>Sınırlayıcı faktör ilkesi:</b> Fotosentez hızı, <b>en az bulunan</b> faktör tarafından belirlenir. Diğer faktörleri artırmak hızı değiştirmez." },
        { h: "Fotosentez hızı nasıl ölçülür?",
          b: "Birim zamanda:<br>• Çıkan <b>O₂ miktarı</b> (su bitkisinde kabarcık sayısı)<br>• Tüketilen <b>CO₂ miktarı</b><br>• Üretilen <b>glikoz / nişasta</b> miktarı<br>• Bitkinin <b>kuru ağırlık artışı</b>" }
      ],
      qs: [
        { t: "mc", q: "Fotosentez hızı en düşük hangi renk ışıkta gerçekleşir?", o: ["Yeşil", "Kırmızı", "Mavi", "Mor"], a: 0, e: "Klorofil yeşil ışığı soğurmaz, yansıtır." },
        { t: "mc", q: "Işık şiddeti arttıkça fotosentez hızının belirli bir noktadan sonra sabit kalmasının nedeni nedir?", o: ["Başka bir faktörün (CO₂, enzim, klorofil) sınırlayıcı olması", "Klorofilin yıkılması", "Suyun bitmesi", "Glikozun ışığı soğurması"], a: 0, e: "Sınırlayıcı faktör ilkesi: en az bulunan faktör hızı belirler." },
        { t: "mc", q: "Optimum sıcaklığın üzerine çıkıldığında fotosentez hızının azalmasının nedeni nedir?", o: ["Enzimlerin yapısının bozulması", "CO₂'nin artması", "Işık şiddetinin azalması", "Klorofilin artması"], a: 0, e: "Yüksek sıcaklık enzimleri denatüre eder." },
        { t: "tf", q: "Toprakta magnezyum eksikliği olan bir bitkinin yapraklarında sararma görülür ve fotosentez hızı düşer.", a: true, e: "Mg klorofilin yapısındadır. Klorofil üretilemezse yaprak sararır (kloroz)." },
        { t: "mc", q: "Kurak bir günde bitkinin fotosentez hızının düşmesinin temel nedeni hangisidir?", o: ["Stomaların kapanması ile CO₂ girişinin azalması", "Işık şiddetinin artması", "Klorofilin artması", "O₂'nin azalması"], a: 0, e: "Su kaybını önlemek için stomalar kapanır, CO₂ alınamaz." },
        { t: "tf", q: "CO₂ miktarı sınırsız artırılırsa fotosentez hızı da sınırsız artar.", a: false, e: "Belirli bir noktadan sonra hız sabit kalır (doyma). Çok yüksek CO₂ stomaları kapatıp zarar da verebilir." },
        { t: "mc", q: "Aşağıdakilerden hangisi fotosentez hızını etkileyen <u>iç</u> faktördür?", o: ["Klorofil miktarı", "Işık şiddeti", "Ortam sıcaklığı", "Havadaki CO₂ oranı"], a: 0, e: "Klorofil, stoma sayısı, enzim miktarı, yaprak yüzeyi iç faktörlerdir." },
        { t: "mc", q: "Bir su bitkisinin fotosentez hızını ölçmek için en pratik yöntem hangisidir?", o: ["Birim zamanda çıkan O₂ kabarcıklarını saymak", "Bitkinin boyunu ölçmek", "Yaprak sayısını saymak", "Suyun rengine bakmak"], a: 0, e: "Elodea deneylerinde birim zamanda çıkan kabarcık sayısı fotosentez hızını gösterir." },
        { t: "mc", q: "Işık şiddeti yüksek, sıcaklık optimum ama CO₂ çok az olan bir ortamda fotosentez hızını artırmak için ne yapılmalıdır?", o: ["CO₂ miktarı artırılmalıdır", "Işık şiddeti artırılmalıdır", "Sıcaklık artırılmalıdır", "Yeşil ışık verilmelidir"], a: 0, e: "Sınırlayıcı faktör CO₂'dir; sadece onu artırmak hızı artırır." },
        { t: "tf", q: "Seralarda kırmızı ve mavi ışık veren lambaların kullanılması fotosentez verimini artırmak içindir.", a: true, e: "Klorofil en çok mor-mavi ve kırmızı ışığı soğurur." }
      ]
    },

    /* ───────────────────────── 8 ───────────────────────── */
    {
      id: "fs-deney",
      title: "Fotosentez deneyleri",
      kod: "BİY.10.1.3",
      cards: [
        { h: "Deney dili: değişkenler",
          b: "<b>Bağımsız değişken</b>: deneyi yapanın <b>değiştirdiği</b> faktör (ör. ışığın rengi).<br><b>Bağımlı değişken</b>: değişime bağlı olarak <b>ölçülen</b> sonuç (ör. kabarcık sayısı).<br><b>Kontrol edilen (sabit) değişkenler</b>: tüm düzeneklerde <b>aynı tutulanlar</b> (bitki türü, sıcaklık, su miktarı, süre).<br><b>Kontrol grubu</b>: sonucu karşılaştırmak için faktörün uygulanmadığı/normal düzenek.<br><b>Hipotez</b>: test edilebilir tahmin. Örnek: 'Işık şiddeti arttıkça fotosentez hızı artar.'" },
        { h: "Nişasta (iyot) testi — adımlar",
          b: "1. Bitki <b>48 saat karanlıkta</b> bekletilir → yapraktaki nişasta tükenir (nişastasızlaştırma).<br>2. Deney uygulanır (ışık, örtme vb.), bitki birkaç saat ışıkta tutulur.<br>3. Yaprak <b>kaynar suda</b> haşlanır → hücreler ölür, zar geçirgen olur.<br>4. <b>Sıcak alkolde</b> bekletilir → <b>klorofil çözülür</b>, yaprak beyazlar.<br>5. Suda yıkanır, <b>iyot</b> damlatılır.<br>6. <b>Mavi-mor renk = nişasta var = fotosentez yapılmış.</b>" },
        { h: "Klasik deney düzenekleri",
          b: "• <b>Yaprağın bir kısmını folyoyla örtme</b>: örtülen kısımda nişasta yok → <b>ışık gerekli</b>.<br>• <b>Alacalı (yeşil-beyaz) yaprak</b>: sadece yeşil kısımda nişasta → <b>klorofil gerekli</b>.<br>• Yaprağı <b>KOH / NaOH</b> bulunan kapalı kaba koyma: KOH CO₂'yi tutar → nişasta yok → <b>CO₂ gerekli</b>.<br>• <b>Elodea (su veba otu)</b>: lambanın uzaklığı/rengi değiştirilir, <b>kabarcıklar</b> sayılır. Kabarcık = O₂. Suya karbonat (NaHCO₃) eklenirse CO₂ artar, kabarcık artar.<br>• <b>Kireç suyu</b> CO₂ ile bulanır; <b>bromtimol mavisi</b> CO₂ artınca sarıya döner." },
        { h: "Bilim tarihinden deneyler",
          b: "• <b>Van Helmont</b>: Söğüt 5 yılda ~74 kg arttı, toprak sadece ~60 g azaldı → kütle topraktan değil <b>sudan</b> geldi dedi (CO₂'yi bilmiyordu).<br>• <b>Priestley</b>: Kapalı fanusta mum söner, fare ölür. <b>Nane</b> konunca mum yanar, fare yaşar → bitki havayı 'onarır' (O₂ üretir).<br>• <b>Ingenhousz</b>: Bitki bu işi sadece <b>ışıkta</b> ve <b>yeşil kısımlarıyla</b> yapar.<br>• <b>Engelmann</b>: İpliksi alge prizmayla ışık verdi. Oksijen seven (aerobik) bakteriler <b>mor-mavi ve kırmızı</b> bölgelerde toplandı → bu ışıklarda O₂ üretimi en fazla." }
      ],
      qs: [
        { t: "mc", q: "Bir öğrenci aynı tür Elodea bitkisini farklı uzaklıklara konan lambalarla aydınlatıyor ve 5 dakikada çıkan kabarcık sayısını sayıyor. Bu deneyde bağımsız değişken hangisidir?", o: ["Işık şiddeti (lambanın uzaklığı)", "Kabarcık sayısı", "Bitki türü", "Süre"], a: 0, e: "Deneyi yapanın değiştirdiği faktör bağımsız değişkendir." },
        { t: "mc", q: "Aynı deneyde bağımlı değişken hangisidir?", o: ["Birim zamanda çıkan kabarcık (O₂) sayısı", "Lambanın uzaklığı", "Suyun sıcaklığı", "Bitkinin türü"], a: 0, e: "Ölçülen sonuç bağımlı değişkendir." },
        { t: "mc", q: "Nişasta testinde yaprağın sıcak alkolde bekletilmesinin amacı nedir?", o: ["Klorofili çözüp yaprağın rengini açmak", "Nişastayı çözmek", "Yaprağı canlı tutmak", "İyodu etkisiz hale getirmek"], a: 0, e: "Klorofil yeşil rengi maskeler. Alkolde çözülünce iyot ile oluşan mavi-mor renk net görülür." },
        { t: "mc", q: "Deneyden önce bitkinin 48 saat karanlıkta tutulmasının amacı nedir?", o: ["Yapraktaki mevcut nişastanın tüketilmesi", "Klorofilin artması", "Stomaların açılması", "Bitkinin daha çok su alması"], a: 0, e: "Böylece deney sonunda bulunan nişastanın deney sırasında üretildiği kesinleşir." },
        { t: "tf", q: "Alacalı yaprak deneyinde iyot testi sonucunda sadece yeşil bölgelerin mavi-mor renk alması, fotosentez için klorofilin gerekli olduğunu gösterir.", a: true, e: "Beyaz bölgelerde klorofil olmadığı için nişasta üretilmez." },
        { t: "mc", q: "Engelmann deneyinde aerobik bakterilerin en çok mor-mavi ve kırmızı ışık bölgelerinde toplanmasının nedeni nedir?", o: ["Bu bölgelerde algin daha çok O₂ üretmesi", "Bu bölgelerin daha sıcak olması", "Bakterilerin bu renkleri görmesi", "Bu bölgelerde CO₂'nin fazla olması"], a: 0, e: "Fotosentez bu dalga boylarında en hızlıdır, en çok O₂ burada açığa çıkar." },
        { t: "mc", q: "KOH konulmuş kapalı bir kaba yerleştirilen yaprakta iyot testi sonucu nişasta bulunmaması neyi kanıtlar?", o: ["Fotosentez için CO₂'nin gerekli olduğunu", "Işığın gerekli olduğunu", "Suyun gerekli olduğunu", "Klorofilin gerekli olduğunu"], a: 0, e: "KOH ortamdaki CO₂'yi tutar." },
        { t: "tf", q: "Priestley'in deneyinde nane bitkisi, mumun yanması ve farenin yaşaması için gereken oksijeni sağlamıştır.", a: true, e: "Bitki fotosentezle O₂ üretmiştir (Priestley bunu 'havayı onarma' olarak açıklamıştı)." },
        { t: "mc", q: "Van Helmont'un deneyinde söğüt ağacının kütle artışının kaynağı olarak gözden kaçırdığı madde hangisidir?", o: ["Havadaki CO₂", "Topraktaki mineraller", "Su", "Güneş ışığı"], a: 0, e: "Van Helmont kütle artışını sadece suya bağladı. Organik maddenin karbonu havadaki CO₂'den gelir." },
        { t: "mc", q: "Ingenhousz'un deneylerinden hangi sonuç çıkarılmıştır?", o: ["Bitkiler havayı yalnızca ışıkta ve yeşil kısımlarıyla temizler", "Bitkiler topraktan beslenir", "Bitkiler karanlıkta daha çok O₂ üretir", "Kökler fotosentez yapar"], a: 0, e: "Işık ve klorofilin önemini gösterdi." },
        { t: "tf", q: "Bir deneyde birden fazla bağımsız değişken aynı anda değiştirilirse, sonucun hangi faktöre bağlı olduğu kesin olarak söylenemez.", a: true, e: "Güvenilir bir deneyde tek bir faktör değiştirilir, diğerleri sabit tutulur." },
        { t: "mc", q: "Bromtimol mavisi çözeltisinde bulunan su bitkisi ışıkta bekletiliyor. Çözeltinin rengi sarıdan maviye dönüyor. Bunun nedeni nedir?", o: ["Bitkinin fotosentezle CO₂ tüketmesi", "Bitkinin solunumla CO₂ üretmesi", "Suyun ısınması", "Bitkinin O₂ tüketmesi"], a: 0, e: "CO₂ azalınca ortam asitliği düşer ve bromtimol mavisi tekrar maviye döner." }
      ]
    }
  ],

  /* ───────────────────── YAZILI PROVASI (açık uçlu) ───────────────────── */
  yazili: [
    { t: "open", kod: "BİY.10.1.1", q: "SENARYO: Ateş böceğinin ışık organından hazırlanan hücresiz özüt bir süre ışık verip sönüyor. Sönen özüt üç tüpe ayrılıyor; 1. tüpe saf su, 2. tüpe glikoz, 3. tüpe ATP ekleniyor ve tüpler karanlıkta gözleniyor. Yalnızca 3. tüpte ışık oluşuyor.\na) Özütün bir süre sonra sönmesinin nedeni nedir?\nb) Yalnız 3. tüpte ışık oluşmasını açıklayınız.\nc) Glikoz eklenen tüpte neden ışık oluşmamıştır?",
      a: "a) Özütteki ATP ışık üretiminde harcanmış ve tükenmiştir. Hücresiz özütte yeni ATP üretilemediği için ışık söner.\nb) Işık oluşumu (biyolüminesans) için gereken enerji doğrudan ATP'den sağlanır. ATP eklenince enerji yeniden sağlanır, lusiferin-lusiferaz tepkimesi gerçekleşir ve ışık oluşur. Kimyasal enerji ışık enerjisine dönüşür.\nc) Glikozdaki enerji doğrudan kullanılamaz; önce hücresel solunumla ATP'ye aktarılması gerekir. Hücresiz özütte hücresel solunum yapılamadığı için glikozdan ATP üretilemez ve ışık oluşmaz.",
      k: ["ATP tükenir", "doğrudan ATP", "yeniden", "glikoz doğrudan kullanılamaz", "hücresel solunum", "ışık enerjisi"] },
    { t: "open", kod: "BİY.10.1.1", q: "SENARYO (devam): Ateş böceği deneyinde bağımsız değişken, bağımlı değişken, kontrol grubu ve sabit tutulması gereken değişkenleri yazınız. Canlı bir ateş böceğinin ışığının neden sönmediğini açıklayınız.",
      a: "Bağımsız değişken: Tüplere eklenen madde (saf su, glikoz, ATP).\nBağımlı değişken: Işık oluşup oluşmaması.\nKontrol grubu: Saf su eklenen 1. tüp.\nSabit değişkenler: Özüt miktarı, eklenen madde miktarı, sıcaklık, karanlık ortam, gözlem süresi.\nCanlı ateş böceğinde ışık organı hücreleri besinlerdeki enerjiyi hücresel solunumla kullanarak ADP ve fosfattan sürekli yeni ATP üretir (ATP döngüsü). ATP depolanmadığı için sürekli yenilenir ve ışık sönmez.",
      k: ["bağımsız", "eklenen madde", "bağımlı", "ışık", "kontrol", "saf su", "hücresel solunum", "sürekli"] },
    { t: "open", kod: "BİY.10.1.1", q: "Bir hücrede ATP üretimi tamamen durursa hangi yaşamsal olaylar durur, hangileri devam eder? En az üçer örnekle açıklayınız. Bu durum hücre için ne sonuç doğurur?",
      a: "Durur (ATP gerektirir): aktif taşıma (Na⁺-K⁺ pompası), kas kasılması, protein ve glikojen sentezi, hücre bölünmesi, sinir impulsu iletimi, endositoz ve ekzositoz.\nDevam eder (ATP gerektirmez): difüzyon, osmoz, kolaylaştırılmış difüzyon.\nSonuç: Hücre madde taşıyamaz, sentez ve onarım yapamaz, yaşamsal olaylar sürdürülemez ve hücre ölür.",
      k: ["aktif taşıma", "kas kasılması", "sentez", "difüzyon", "osmoz", "ölür"] },
    { t: "open", kod: "BİY.10.1.3", q: "SENARYO: Bir su bitkisi su dolu bir behere konup üzerine ters çevrilmiş huni ve su dolu deney tüpü yerleştiriliyor. Düzenek ışıkta bekletildiğinde tüpte gaz birikiyor, karanlıkta bekletildiğinde birikmiyor.\na) Tüpte biriken gaz hangisidir, nasıl kanıtlanır?\nb) Bu gaz hangi maddeden kaynaklanır?\nc) Deneyden çıkarılacak sonuç nedir?",
      a: "a) Biriken gaz oksijendir (O₂). Tüpteki gaza közlenmiş (alevi söndürülmüş) tahta kıymık yaklaştırıldığında kıymık alevlenir; bu, gazın oksijen olduğunu kanıtlar.\nb) Oksijenin kaynağı sudur. Işığa bağımlı tepkimelerde su ışık enerjisiyle parçalanır (fotoliz): 2H₂O → 4H⁺ + 4e⁻ + O₂.\nc) Fotosentez için ışık gereklidir ve fotosentezde oksijen üretilir. Karanlıkta fotosentez gerçekleşmediği için gaz birikmez.",
      k: ["oksijen", "közlenmiş", "alevlenir", "su", "fotoliz", "ışık gerekli"] },
    { t: "open", kod: "BİY.10.1.3", q: "SENARYO: Biyoloji kulübü, karbondioksit miktarının fotosentez hızına etkisini araştırıyor. Aynı tür ve büyüklükte su bitkilerini farklı miktarda karbonat (NaHCO₃) içeren sulara koyup lambayla aydınlatıyorlar.\na) Hipotez yazınız.\nb) Bağımsız, bağımlı ve kontrol edilen değişkenleri yazınız.\nc) Fotosentezde kullanılan ve üretilen maddeleri, bunları kanıtlamak için kullanılabilecek testlerle birlikte yazınız.",
      a: "a) Hipotez: Ortamdaki CO₂ miktarı arttıkça fotosentez hızı (belirli bir noktaya kadar) artar.\nb) Bağımsız değişken: CO₂ (karbonat) miktarı. Bağımlı değişken: Birim zamanda çıkan O₂ kabarcığı sayısı. Kontrol edilen değişkenler: Işık şiddeti (lamba uzaklığı), sıcaklık, bitki türü ve büyüklüğü, su miktarı, süre.\nc) Kullanılanlar: CO₂ ve su (ışık enerjisi ve klorofil gerekir). CO₂ tüketimi, sarı bromtimol mavisinin maviye dönmesiyle ya da kireç suyunun bulanmamasıyla gösterilir.\nÜretilenler: Glikoz ve O₂. O₂, közlenmiş kıymığın alevlenmesiyle; glikozun depo hali olan nişasta, yaprağa iyot damlatılınca oluşan mavi-mor renkle gösterilir.",
      k: ["hipotez", "CO₂ miktarı", "kabarcık", "ışık şiddeti", "sıcaklık", "bromtimol", "kıymık", "iyot", "nişasta"] },
    { t: "open", kod: "BİY.10.1.1", q: "ATP molekülünün yapısını oluşturan birimleri yazınız ve ATP'nin 'enerji para birimi' olarak adlandırılmasının nedenini açıklayınız.",
      a: "ATP; adenin (azotlu organik baz), riboz (5 karbonlu şeker) ve 3 fosfat grubundan oluşur. Adenin + riboz adenozini oluşturur; fosfatlar arasında 2 yüksek enerjili bağ vardır. Besinlerdeki enerji hücre işlerinde doğrudan kullanılamaz; önce ATP'ye aktarılır. Hücre aktif taşıma, kas kasılması, sentez gibi bütün işlerinde ATP harcadığı ve tüm canlılarda ortak olduğu için ATP'ye enerji para birimi denir.",
      k: ["adenin", "riboz", "3 fosfat", "yüksek enerjili bağ", "doğrudan kullanılamaz", "tüm canlılarda"] },
    { t: "open", kod: "BİY.10.1.1", q: "Aşağıdaki olayları ATP harcanan ve harcanmayan olarak sınıflandırınız: osmoz, kas kasılması, difüzyon, protein sentezi, fagositoz, kolaylaştırılmış difüzyon, sinir impulsu iletimi, plazmoliz.",
      a: "ATP HARCANAN: kas kasılması, protein sentezi, fagositoz, sinir impulsu iletimi (Na⁺-K⁺ pompası).\nATP HARCANMAYAN: osmoz, difüzyon, kolaylaştırılmış difüzyon, plazmoliz.\nGerekçe: Yoğunluk farkına göre kendiliğinden olan taşımalar pasiftir; sentez, hareket ve zar hareketi gerektiren olaylar ATP ister.",
      k: ["kas kasılması", "protein sentezi", "fagositoz", "sinir", "osmoz", "difüzyon", "plazmoliz"] },
    { t: "open", kod: "BİY.10.1.1", q: "ATP'nin sentezlenmesi ve hidrolizi tepkimelerini yazınız. Her tepkimede su ve enerji açısından ne olduğunu belirtiniz.",
      a: "Sentez (fosforilasyon): ADP + P + enerji → ATP + H₂O. Dehidrasyon sentezidir; enerji harcanır, su açığa çıkar.\nHidroliz: ATP + H₂O → ADP + P + enerji (yaklaşık 7,3 kcal/mol). Su harcanır, enerji açığa çıkar.\nİki tepkime de enzimlerle gerçekleşir.",
      k: ["ADP + P", "dehidrasyon", "su açığa çıkar", "hidroliz", "su harcanır", "7,3 kcal"] },
    { t: "open", kod: "BİY.10.1.1", q: "ATP üretim yollarını (fosforilasyon çeşitlerini) yazınız ve her birinin hücrenin neresinde gerçekleştiğini belirtiniz.",
      a: "1) Substrat düzeyinde fosforilasyon: sitoplazmada (glikoliz, fermantasyon) ve mitokondri matriksinde. Bütün canlılarda görülür.\n2) Oksidatif fosforilasyon: ökaryotlarda mitokondri iç zarında (krista), prokaryotlarda hücre zarında; elektron taşıma sistemi ile.\n3) Fotofosforilasyon: ışık enerjisi ile kloroplastın tilakoid zarında; prokaryot fotosentetiklerde zar kıvrımlarında.",
      k: ["substrat düzeyinde", "sitoplazma", "oksidatif", "mitokondri", "fotofosforilasyon", "tilakoid"] },
    { t: "open", kod: "BİY.10.1.1", q: "ATP'nin hücrede depolanmaması ve hücreler arasında taşınmaması canlılar için ne anlama gelir? Açıklayınız.",
      a: "ATP kararsız bir moleküldür; ihtiyaç anında üretilip hemen kullanılır. Bu yüzden her hücre kendi ATP'sini sürekli üretmek zorundadır. Hücre uzun süreli enerjiyi nişasta, glikojen ve yağ gibi depo moleküllerde saklar ve gerektiğinde bunları hücresel solunumla yıkarak ATP üretir. ATP hücreler arasında taşınmadığı için her hücrenin kendi enerji üretim mekanizması (glikoliz, solunum) vardır.",
      k: ["kararsız", "her hücre kendi", "nişasta", "glikojen", "yağ", "hücresel solunum"] },
    { t: "open", kod: "BİY.10.1.1", q: "Canlıların yaşamlarını sürdürebilmeleri için enerjiye neden ihtiyaç duyduklarını en az dört örnekle açıklayınız. Enerji alamayan bir canlıda ne olur?",
      a: "Canlılar büyüme ve gelişme, hücre bölünmesi, doku onarımı, hareket (kas kasılması), aktif taşıma, protein-DNA gibi moleküllerin sentezi, sinir iletimi, vücut sıcaklığının korunması ve üreme için enerjiye ihtiyaç duyar. Enerji alamayan canlıda ATP üretilemez; bu olaylar durur, metabolizma yavaşlar ve sonunda canlı ölür.",
      k: ["büyüme", "bölünme", "hareket", "aktif taşıma", "sentez", "ölür"] },
    { t: "open", kod: "BİY.10.1.3", q: "Fotosentezin genel denklemini yazınız. Kullanılan ve üretilen maddeleri ayrı ayrı belirtiniz.",
      a: "6CO₂ + 12H₂O → (ışık, klorofil, enzim) → C₆H₁₂O₆ + 6O₂ + 6H₂O\nKullanılan: karbondioksit, su (ve ışık enerjisi).\nÜretilen: glikoz, oksijen, su.\nIşık enerjisi, glikozun kimyasal bağ enerjisine dönüştürülür.",
      k: ["6CO₂", "12H₂O", "C₆H₁₂O₆", "6O₂", "ışık", "klorofil"] },
    { t: "open", kod: "BİY.10.1.3", q: "Fotosentezin ışığa bağımlı ve ışıktan bağımsız tepkimelerini; gerçekleştiği yer, kullanılan ve üretilen maddeler bakımından karşılaştırınız.",
      a: "Işığa bağımlı: Tilakoid zarında gerçekleşir. Işık, su, ADP + P ve NADP⁺ kullanılır. Suyun fotolizi olur; O₂, ATP ve NADPH üretilir.\nIşıktan bağımsız (Calvin döngüsü): Stromada gerçekleşir. CO₂, ATP ve NADPH kullanılır. Glikoz üretilir; ADP, P ve NADP⁺ tekrar ışık evresine döner. Enzimatik olduğu için sıcaklıktan çok etkilenir.",
      k: ["tilakoid", "stroma", "fotoliz", "O₂", "ATP", "NADPH", "CO₂", "glikoz"] },
    { t: "open", kod: "BİY.10.1.3", q: "Fotosentezde açığa çıkan oksijenin sudan mı karbondioksitten mi geldiğini gösteren bir deney tasarlayınız.",
      a: "Aynı tür iki bitki kullanılır. 1. bitkiye oksijeni işaretli (¹⁸O) su ve normal CO₂, 2. bitkiye normal su ve oksijeni işaretli CO₂ verilir. Diğer koşullar (ışık, sıcaklık, süre) sabit tutulur. Açığa çıkan O₂ incelenir. Sadece 1. bitkide işaretli O₂ görülür; 2. bitkide işaret glikozda ve suda görülür. Sonuç: Fotosentezde açığa çıkan O₂'nin kaynağı sudur (suyun fotolizi).",
      k: ["işaretli", "¹⁸O", "su", "CO₂", "sabit", "fotoliz"] },
    { t: "open", kod: "BİY.10.1.3", q: "Bir öğrenci ışığın renginin fotosentez hızına etkisini Elodea bitkisi ile araştırmak istiyor. Hipotez, bağımsız değişken, bağımlı değişken ve kontrol edilen değişkenleri yazarak deney düzeneğini açıklayınız.",
      a: "Hipotez: Işığın rengi (dalga boyu) fotosentez hızını etkiler; mavi ve kırmızı ışıkta hız en fazla, yeşilde en azdır.\nBağımsız değişken: Işığın rengi (mavi, kırmızı, yeşil filtreler).\nBağımlı değişken: Birim zamanda çıkan O₂ kabarcığı sayısı.\nKontrol edilen değişkenler: Bitki türü ve büyüklüğü, ışık şiddeti / lamba uzaklığı, su sıcaklığı, su miktarı, CO₂ (NaHCO₃) miktarı, süre.\nDüzenek: Eşit boyda Elodea dalları su dolu deney tüplerine konur, her birine farklı renkte filtreli aynı lamba aynı uzaklıktan tutulur, 5 dakikada çıkan kabarcıklar sayılır. Beklenen sonuç: kırmızı ve mavide fazla, yeşilde az kabarcık.",
      k: ["hipotez", "bağımsız", "ışığın rengi", "bağımlı", "kabarcık", "sabit", "sıcaklık", "süre"] },
    { t: "open", kod: "BİY.10.1.3", q: "Yapraklarda nişasta testinin (iyot testi) aşamalarını sırasıyla yazınız ve her aşamanın amacını belirtiniz.",
      a: "1) Bitki 48 saat karanlıkta tutulur: yapraktaki nişasta tükenir.\n2) Bitki deney koşulunda ışığa konur: fotosentez yapılır.\n3) Yaprak kaynar suda haşlanır: hücreler ölür, zarlar geçirgen olur, yaprak yumuşar.\n4) Sıcak alkole konur: klorofil çözülür, yaprak renksizleşir.\n5) Suyla yıkanır: alkol uzaklaşır, yaprak yumuşar.\n6) İyot damlatılır: nişasta varsa mavi-mor renk oluşur. Mavi-mor renk fotosentez yapıldığını gösterir.",
      k: ["karanlık", "nişasta tükenir", "kaynar su", "alkol", "klorofil çözülür", "iyot", "mavi-mor"] },
    { t: "open", kod: "BİY.10.1.3", q: "Işık şiddeti - fotosentez hızı grafiğinde hızın önce artıp sonra sabit kalmasını açıklayınız. Bu durumda fotosentez hızını artırmak için ne yapılabilir?",
      a: "Işık şiddeti arttıkça klorofilin soğurduğu ışık ve ışık evresinin ürünleri arttığı için hız artar. Belirli bir noktadan sonra (doyma noktası) hız sabit kalır, çünkü artık CO₂ miktarı, sıcaklık, enzim veya klorofil miktarı gibi başka bir faktör sınırlayıcıdır (sınırlayıcı faktör ilkesi). Hızı artırmak için sınırlayıcı olan faktör artırılmalıdır; örneğin ortamın CO₂ miktarı artırılabilir veya sıcaklık optimuma getirilebilir.",
      k: ["artar", "sabit", "doyma", "sınırlayıcı", "CO₂", "sıcaklık"] },
    { t: "open", kod: "BİY.10.1.3", q: "Engelmann deneyini kısaca anlatınız ve deneyin sonucunu yorumlayınız.",
      a: "Engelmann, ipliksi bir alge prizmadan geçirilmiş ışık verdi; böylece algin farklı bölgeleri farklı renkte ışık aldı. Ortama oksijen seven (aerobik) bakteriler ekledi. Bakteriler en çok mor-mavi ve kırmızı ışık alan bölgelerde, en az yeşil ışık alan bölgede toplandı. Yorum: Bu ışıklarda fotosentez hızı ve O₂ üretimi en fazladır; klorofil en çok mor-mavi ve kırmızı ışığı soğurur.",
      k: ["prizma", "alg", "aerobik bakteri", "mavi", "kırmızı", "yeşil", "O₂"] },
    { t: "open", kod: "BİY.10.1.3", q: "Toprağında magnezyum ve azot eksik olan bir bitkide görülecek değişiklikleri ve bunun fotosentez hızına etkisini açıklayınız.",
      a: "Magnezyum klorofilin merkez atomudur, azot da klorofilin yapısında bulunur. Bu mineraller eksik olursa klorofil sentezlenemez, yapraklar sararır (kloroz). Işığı soğuracak pigment azaldığı için ışığa bağımlı tepkimeler yavaşlar, ATP ve NADPH azalır ve fotosentez hızı düşer. Azot eksikliği ayrıca enzim (protein) sentezini de azaltır.",
      k: ["magnezyum", "azot", "klorofil", "sararır", "kloroz", "hız düşer"] }
  ]
};
