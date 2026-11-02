# sinavhazirlikprogrami — 10. Sınıf Biyoloji Yazılı Hazırlık

10. sınıf biyoloji **1. dönem 1. ortak yazılı, Senaryo 4** (Tema: ENERJİ) için hazırlık uygulaması.
Giriş gerektirmez, mobil uyumludur. İlerleme her kullanıcının kendi tarayıcısında saklanır.

| Kazanım | Konu | Sınavdaki soru |
|---|---|---|
| BİY.10.1.1 | Canlılık için enerji, ATP'nin yapısı ve rolü | 3 |
| BİY.10.1.3 | Fotosentez: ışığa bağımlı/bağımsız tepkimeler, faktörler, deneyler | 2 |

## İçerik
- 9 ders (ilki sınav senaryoları: ateş böceği ATP deneyi, su bitkisi O₂ deneyi, biyoloji kulübü testleri): önce bilgi kartları, sonra test soruları (çoktan seçmeli + doğru/yanlış, açıklamalı)
- 5 can, XP, günlük seri, yanlış soruların sona eklenmesi
- **Yazılı provası:** 19 açık uçlu soru, örnek tam puan cevabı ve anahtar kavram kontrolü
- **Deneme sınavı:** 15 test + 3 yazılı, puanlı
- **Hatalarım:** yanlış yapılan sorular
- **Özet:** sınav öncesi son tekrar için tüm kartlar tek sayfada

## Vercel'de yayınlama
Build adımı yoktur, düz statik sitedir (`index.html`, `style.css`, `data.js`, `app.js`).

1. Bu klasörü `sinavhazirlikprogrami` adlı (private) bir GitHub deposunun köküne koy.
2. vercel.com → **Add New → Project** → depoyu seç.
3. Framework Preset: **Other**. Build Command ve Output Directory boş. **Deploy**.

Ya da terminalden: `npx vercel --prod` (bu klasörün içinde).

Soruları değiştirmek/eklemek için sadece `data.js` dosyasını düzenle.
