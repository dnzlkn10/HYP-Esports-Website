# HYP Esports

HYP Esports için Next.js App Router, TypeScript ve Tailwind CSS ile oluşturulan profesyonel organizasyon sitesi. Siyah/antrasit yüzeyler, HYP sarısı, tipografik wordmark ve özgün SVG illüstrasyonlarla responsive bir tasarım kullanır. Header ve hero alanında sponsor şeridi bulunmaz.

## Gereksinimler

- Node.js 20.9 veya üzeri; mevcut ortamda Node.js 24 ile doğrulandı.
- npm (kilit dosyası `package-lock.json` repository içindedir).
- Uygulama için veritabanı, API anahtarı veya harici görsel servisi gerekmez.

## Local development

```bash
npm ci
npm run dev
```

Geliştirme sunucusu varsayılan olarak 3000 portunda açılır. Başka port için `npm run dev -- --port 3001` kullanılabilir.

## Kontroller ve production build

```bash
npm run typecheck
npm run lint
npm run build
npm run start
```

`npm run start` önceden tamamlanmış bir production build gerektirir. Dağıtım için Node.js destekleyen bir Next.js hosting servisi kullanılabilir. Next.js statik sayfaları build sırasında önceden oluşturur; bu proje `output: export` moduna ayarlanmamıştır.

## Doğrulama

Çalışan sunucu üzerinde tüm sayfalar, dahili linkler, görseller ve bulunamayan sayfaların 404 cevabı:

```bash
npm run test:smoke
```

Gerçek tarayıcı kontrolleri için bir kere Chromium kurun:

```bash
npx playwright install chromium
npm run test:e2e
```

Sistem Chromium'u zaten varsa indirmek yerine:

```bash
CHROMIUM_PATH=/usr/bin/chromium npm run test:e2e
```

E2E testleri önceden `npm run build` çalıştırılmasını gerektirir. Sunucu açık değilse Playwright production sunucusunu başlatır. Testler 360, 768 ve 1440 pikselde route erişimini, yatay taşmayı ve konsol hatalarını; ayrıca mobil menüyü, maç/haber filtrelerini, medya dialogunu, kadroları, başvuru demosunu ve Coming Soon mağazasını doğrular. `TEST_BASE_URL` ile HTTP smoke testinin hedefi değiştirilebilir. Playwright'ın yönetilen sunucusu 3000 portunu kullanır.

## Sayfalar

| Route                 | İçerik                                                                      |
| --------------------- | --------------------------------------------------------------------------- |
| `/`                   | Hero, takımlar, maçlar, turnuvalar, haberler, iki kadro, mağaza ve Join CTA |
| `/news`               | Kategori filtreli haber gridi                                               |
| `/news/[slug]`        | Haber detayları ve ilgili haberler                                          |
| `/matches`            | ALL/CS2/VALORANT ve UPCOMING/RESULTS filtreleri                             |
| `/tournaments`        | Upcoming ve past turnuvalar                                                 |
| `/tournaments/[slug]` | Turnuva bilgileri ve ilişkili maçlar                                        |
| `/teams`              | CS2 / VALORANT seçimi                                                       |
| `/teams/cs2`          | JINAZEE, Salwo, Script, TBA, TBA                                            |
| `/teams/valorant`     | JINAZEE, VYNOX, PHYONK, VASHI, turta                                        |
| `/media`              | YouTube/highlights/photos/clips koleksiyonları ve dialog                    |
| `/shop`               | Gelecekteki merchandise vitrini                                             |
| `/shop/[slug]`        | Ürün konsepti detayları                                                     |
| `/about`              | Who We Are, Our Mission, Our Vision                                         |
| `/join`               | CS2 / VALORANT seçimi ve doğrulamalı frontend başvuru formu                 |

## Proje yapısı

```text
app/                    App Router sayfaları, layout, metadata, loading/error/404
components/
  layout/               Header, Footer, kolay değiştirilebilir Logo
  home/                 Join CTA
  teams/                Ortak takım detay sayfası
  cards.tsx             Takım, oyuncu, maç, haber, turnuva ve ürün kartları
  Filters.tsx           Maç ve haber filtreleri
  JoinForm.tsx          Frontend başvuru demosu
  MediaExplorer.tsx     Filtreli medya ve erişilebilir dialog
  ui.tsx                Ortak başlık, buton, empty state ve içerik notları
  Reveal.tsx            Hafif IntersectionObserver section reveal
 data/                  Takımlar, maçlar, turnuvalar, haberler, medya, ürünler, navigasyon
 types/                 İçerik modelleri
 public/                Yerel SVG illüstrasyonları ve oyuncu silüeti
 scripts/               HTTP smoke kontrolü
 tests/                 Playwright tarayıcı testleri
```

## İçerikleri güncelleme

- `data/teams.ts`: Kadrolar. `types/index.ts` oyuncu rolü, milliyet, görsel ve sosyal bağlantıları destekler. Açıklanmayan oyuncular `announced: false` ile gösterilir. Belirlenmemiş oyuncu rolleri veya milliyetleri uydurulmamıştır.
- `data/matches.ts`: ISO tarih/saat, rakip, turnuva, BO formatı, maç durumu ve skor. Arayüz saatleri TRT (UTC+3) olarak açıkça gösterir.
- `data/tournaments.ts`: Turnuvalar, tarihler, katılımcılar, organizatör ve slug. HYP'nin düzenleyeceği etkinlikler aynı yapıyla eklenebilir.
- `data/news.ts`: Kategoriler, tarih, kısa açıklama ve haber metni. Slug otomatik olarak detay sayfasını oluşturur.
- `data/media.ts`: Gelecekteki medya koleksiyonları. Şimdiki kartlar oynatılabilir video varmış gibi davranmaz; bilgi dialogu açar.
- `data/products.ts`: Ürün konseptleri. Vitrin hazırdır; checkout veya ödeme kodu yoktur.
- `data/site.ts`: Navigasyon ve sosyal medya adresleri. Doğrulanmış URL eklenene kadar sosyal hesaplar bağlantısız “Coming soon” metni olarak görünür.

Gerçek logo geldiğinde `components/layout/Logo.tsx` içindeki tipografik wordmark, `/public` altındaki doğrulanmış dosyayla değiştirilebilir. `app/icon.svg` geçici tipografik favicon'dur. Oyuncu fotoğrafları bulunmadığı için gerçek insan görselleri kullanılmamıştır. Yerel SVG'ler uygulamanın özgün konsept çizimleridir; ürünlerin son tasarımı değildir.

## Kapsam ve yayına hazırlık

İstenen frontend tamamlanmıştır. Maçlar, turnuvalar ve haber metinleri örnek içeriktir; site bunları açıkça belirtir. Kadrolar verilen isimlerle oluşturulmuştur. Başvuru formu tarayıcıda doğrulama yapar; verileri göndermez, kalıcı saklamaz veya organizasyona ulaştırmaz. Tercih edilen 14–19 yaş aralığı açıklanır; bu tercih zorunlu bir yaş sınırı olarak uygulanmaz. Mağaza yalnızca Coming Soon önizlemesidir; fiyat, ödeme veya sipariş kabul etmez.

Resmî yayından önce örnek etkinlik ve editoryal metinleri doğrulanmış içerikle değiştirin, gerçek sosyal adresleri/logoyu ekleyin ve organizasyon tanıtım metinlerini gözden geçirin. Başvuruların gerçekten toplanması ayrı bir backend, güvenli veri işleme ve uygun gizlilik metni gerektirir. Gelecekte ödeme eklenecekse ürün, stok ve ödeme entegrasyonu ayrıca yapılmalıdır.

Semantik HTML, klavye focus stilleri, skip link, erişilebilir form etiketleri, dialog, `prefers-reduced-motion`, basic SEO metadata, hata/yükleme/404 ve boş sonuç durumları mevcuttur. SVG ve sistem fontları sayesinde çalışma ve build sırasında harici font/görsel ağına bağımlılık yoktur.

## Doğrulanan sonuçlar ve bağımlılık notu

- Temiz `npm ci`, TypeScript, lint ve production build başarılıdır.
- Production sunucusunda 21 route, 26 dahili bağlantı, 4 geçersiz route'un 404 cevabı ve 6 SVG dosyası doğrulanmıştır.
- 10 Chromium testi başarıyla tamamlanmıştır; 360/768/1440 piksel kontrollerinde yatay taşma ve tarayıcı konsol hatası tespit edilmemiştir.
- `npm audit --omit=dev`: 0 güvenlik açığı.
- Tam `npm audit`, yalnızca geliştirme araçlarında `eslint-config-next → @next/eslint-plugin-next → fast-glob → micromatch → braces` zincirini etkileyen 5 high bulgu bildirir. Yüklü `braces` 3.0.3, registry'deki en güncel sürümdür; GHSA-vfj7-8cjw-p6xm için düzeltilmiş sürüm henüz bulunmamaktadır. Bu paket production uygulamasının runtime bağımlılığı değildir. Upstream düzeltme yayımlandığında geliştirme araçlarını güncelleyin. `npm audit fix --force` önerisi Next.js 14 lint yapılandırmasına geri dönüş yaptığı için uygulanmamıştır.
