/*
 * =============================================================================
 * GELİŞTİRİCİ KILAVUZU - ÜRÜN GÖRSELLERİ
 * =============================================================================
 * 
 * Bu dosya, Baltacı Gıda web sitesinin ürün verilerini içermektedir.
 * Aşağıda görsel dosyalarının nasıl düzenleneceği açıklanmıştır.
 * 
 * 1. KLASÖR YAPISI:
 *    /public klasörü içinde aşağıdaki yapıyı oluşturun:
 *    
 *    /public
 *    └── images
 *        ├── hero
 *        │   ├── hero-1.jpg
 *        │   ├── hero-2.jpg
 *        │   └── hero-3.jpg
 *        ├── categories
 *        │   ├── tereyagi.jpg, peynir.jpg, zeytin.jpg, bal.jpg, recel.jpg,
 *        │   ├── pekmez.jpg, tahin.jpg, helva.jpg, sucuk.jpg, cay.jpg
 *        └── products
 *            ├── ... (mevcut ürünler)
 *            ├── kahvaltilik-gemlik-siyah-zeytin.jpg
 *            └── gemlik-izgara-yesil-zeytin.jpg
 * 
 * 2. GÖRSEL URL'LERİNİ GÜNCELLEME:
 *    Unsplash URL'lerini yerel dosya yollarıyla değiştirin:
 *    
 *    ÖNCE:  image: "https://images.unsplash.com/..."
 *    SONRA: image: "/images/products/rize-yayla-tereyagi.jpg"
 *    
 *    Hero görselleri için:
 *    ÖNCE:  url: "https://images.unsplash.com/..."
 *    SONRA: url: "/images/hero/hero-1.jpg"
 *    
 *    Kategori görselleri için:
 *    ÖNCE:  image: "https://images.unsplash.com/..."
 *    SONRA: image: "/images/categories/peynir.jpg"
 * 
 * 3. GÖRSEL ÖNERİLERİ:
 *    - Ürün görselleri: 600x600 piksel, kare format
 *    - Hero görselleri: 1600x900 piksel, yatay format
 *    - Kategori görselleri: 800x600 piksel, yatay format
 *    - Format: JPG veya WebP (optimize edilmiş)
 * 
 * =============================================================================
 */

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  image: string;
  categorySlug: string;
  /** Ürün detay sayfasında gösterilen paragraflar */
  descriptionParagraphs: string[];
}

export const categories: Category[] = [
  {
    id: "tereyagi",
    name: "Tereyağı",
    slug: "tereyagi",
    image: "/images/categories/tereyagi.jpg",
  },
  {
    id: "peynir",
    name: "Peynir",
    slug: "peynir",
    image: "/images/categories/peynir.jpg",
  },
  {
    id: "zeytin",
    name: "Zeytin",
    slug: "zeytin",
    image: "/images/categories/zeytin.jpg",
  },
  {
    id: "bal",
    name: "Bal",
    slug: "bal",
    image: "/images/categories/bal.jpg",
  },
  {
    id: "recel",
    name: "Reçel",
    slug: "recel",
    image: "/images/categories/recel.jpg",
  },
  {
    id: "pekmez",
    name: "Pekmez",
    slug: "pekmez",
    image: "/images/categories/pekmez.jpg",
  },
  {
    id: "tahin",
    name: "Tahin",
    slug: "tahin",
    image: "/images/categories/tahin.jpg",
  },
  {
    id: "helva",
    name: "Helva",
    slug: "helva",
    image: "/images/categories/helva.jpg",
  },
  {
    id: "sucuk",
    name: "Sucuk",
    slug: "sucuk",
    image: "/images/categories/sucuk.jpg",
  },
  {
    id: "cay",
    name: "Çay",
    slug: "cay",
    image: "/images/categories/cay.jpg",
  },
];

export const products: Product[] = [
  // Tereyağı
  {
    id: 7,
    name: "Rize Yayla Tereyağı",
    slug: "rize-yayla-tereyagi",
    image: "/images/products/rize-yayla-tereyagi.jpg",
    categorySlug: "tereyagi",
    descriptionParagraphs: [
      "Rize’nin yaylalarında otlatılan hayvanlardan elde edilen sütlerle üretimini yaptığımız yayla tereyağı, Baltacı Gıda’nın doğallık ve şeffaflık ilkeleriyle sofralarınıza ulaşır.",
      "İmalatını gerçekleştirdiğimiz Rize yayla tereyağı, 1. sınıf kalite anlayışıyla; katkısız, geleneksel yöntemlerle işlenir. Kahvaltılardan tatlılara, yöresel tariflerden profesyonel mutfaklara kadar güvenle kullanılabilecek yoğun aroması ve kıvamıyla öne çıkar.",
    ],
  },
  {
    id: 8,
    name: "Rize Yemeklik Yayık Tereyağı",
    slug: "rize-yemeklik-yayik-tereyagi",
    image: "/images/products/rize-yemeklik-yayik-tereyagi.jpg",
    categorySlug: "tereyagi",
    descriptionParagraphs: [
      "Yöresel yayık tereyağı üretimi, sütün özenle işlenmesi ve geleneksel tekniklerle yoğunlaştırılmasıyla elde edilen, mutfakta çok yönlü kullanılan bir lezzettir.",
      "Rize yemeklik yayık tereyağımız; kızartmalardan pilavlara, hamur işlerinden soslara kadar geniş bir kullanım alanı sunar. Doğal süt kaynağı ve kontrollü üretim sayesinde aroması dengeli, yapısı homojen ürünler sunmayı hedefleriz.",
    ],
  },
  // Peynir
  {
    id: 1,
    name: "Rize Tam Yağlı Taze Kaşar Peyniri",
    slug: "rize-tam-yagli-taze-kasar-peyniri",
    image: "/images/products/rize-tam-yagli-taze-kasar-peyniri.jpg",
    categorySlug: "peynir",
    descriptionParagraphs: [
      "Rize’nin yaylalarında toplanan sütlerden üretimini yaptığımız peynir ürünlerimiz, Baltacı Gıda kalite ve hijyen standartlarıyla hazırlanır.",
      "İmalatını gerçekleştirdiğimiz Rize tam yağlı taze kaşar peyniri 1. sınıf, %100 doğal üretim ilkeleriyle olgunlaştırılır. Erimiş kıvamı ve dengeli tadıyla hem soğuk hem sıcak kullanımda sofralarınıza lezzet katar.",
    ],
  },
  {
    id: 2,
    name: "Rize Tam Yağlı Kolot Peyniri",
    slug: "rize-tam-yagli-kolot-peyniri",
    image: "/images/products/rize-tam-yagli-kolot-peyniri.jpg",
    categorySlug: "peynir",
    descriptionParagraphs: [
      "Yöresel kolot peyniri, Rize mutfağının sevilen lezzetlerinden biridir; sütün özenle işlenmesi ve geleneksel üretim adımlarıyla karakteristik dokusu oluşur.",
      "Tam yağlı kolot peynirimiz; dilimlenebilir yapısı ve aromasıyla kahvaltılardan atıştırmalıklara kadar geniş kullanım sunar. Doğal içerik ve kontrollü üretim anlayışıyla hazırlanır.",
    ],
  },
  {
    id: 3,
    name: "Rize Tam Yağlı Tel Peynir",
    slug: "rize-tam-yagli-tel-peynir",
    image: "/images/products/rize-tam-yagli-tel-peynir.jpg",
    categorySlug: "peynir",
    descriptionParagraphs: [
      "Tel peynir, lif lif yapısı ve esnek dokusuyla hem pratik hem de lezzetli bir peynir çeşididir; Rize’nin süt kalitesiyle birleşince sofralarda fark yaratır.",
      "Rize tam yağlı tel peynirimiz; omletlerden böreklere, salatalardan tostlara kadar birçok tarifte güvenle kullanılabilir. Katkısız üretim ve tazelik odaklı tedarik yaklaşımımızın bir parçasıdır.",
    ],
  },
  {
    id: 4,
    name: "Tam Yağlı Kars Eski Kaşar Peyniri",
    slug: "tam-yagli-kars-eski-kasar-peyniri",
    image: "/images/products/tam-yagli-kars-eski-kasar-peyniri.jpg",
    categorySlug: "peynir",
    descriptionParagraphs: [
      "Eski kaşar, uzun süreli olgunlaştırma ile derinleşen aroması ve sert-kırılgan dokusuyla peynir severlerin klasik tercihlerinden biridir.",
      "Tam yağlı Kars eski kaşar peynirimiz; kahvaltı sofralarından peynir tabaklarına, eritme ve ızgara kullanımlarına kadar güçlü bir tat profili sunar. Saklama koşullarına uygun şekilde tedarik edilerek lezzetini korumayı hedefleriz.",
    ],
  },
  {
    id: 5,
    name: "Erzincan Tulum Peyniri",
    slug: "erzincan-tulum-peyniri",
    image: "/images/products/erzincan-tulum-peyniri.jpg",
    categorySlug: "peynir",
    descriptionParagraphs: [
      "Tulum peyniri, geleneksel olgunlaştırma ve doğal ambalajlama kültürüyle üretilen, kokusu ve aromasıyla karakteristik bir üründür.",
      "Erzincan tulum peynirimiz; yöresel üretim geleneğinden ilham alan bir lezzet profili sunar. Dilimleme, rendeleme veya doğrudan tüketim için uygun yapısıyla profesyonel mutfakların da sık tercih ettiği ürünler arasındadır.",
    ],
  },
  {
    id: 6,
    name: "Ezine Peyniri",
    slug: "ezine-peyniri",
    image: "/images/products/ezine-peyniri.jpg",
    categorySlug: "peynir",
    descriptionParagraphs: [
      "Ezine peyniri, coğrafi işaret kültürüyle de öne çıkan, dengeli tuzluluğu ve kokusuyla tanınan bir peynir çeşididir.",
      "Sofralık kullanımda öne çıkan Ezine peynirimiz; kahvaltılardan peynir seçkilerine kadar geniş bir kullanım alanı sunar. Baltacı Gıda olarak ürün seçiminden paketlemeye kadar süreçlerde kalite kontrolünü ön planda tutarız.",
    ],
  },
  {
    id: 15,
    name: "Edirne Tam Yağlı Yumuşak Beyaz Peynir",
    slug: "edirne-tam-yagli-yumusak-beyaz-peynir",
    image: "/images/products/edirne-tam-yagli-yumusak-beyaz-peynir.jpg",
    categorySlug: "peynir",
    descriptionParagraphs: [
      "Edirne’nin yumuşak beyaz peynir geleneği, kahvaltı sofralarının ve profesyonel mutfakların sevilen lezzetlerinden biridir; tam yağlı içerik ve yumuşak doku dengesi öne çıkar.",
      "Edirne tam yağlı yumuşak beyaz peynirimiz; salatalardan böreklere, ızgara ve sıcak servislere kadar geniş kullanım sunar. Baltacı Gıda olarak toptan tedarikte süreklilik ve hijyen standartlarına uygun hareket ederiz.",
    ],
  },
  // Zeytin
  {
    id: 13,
    name: "Kahvaltılık Gemlik Siyah Zeytin",
    slug: "kahvaltilik-gemlik-siyah-zeytin",
    image: "/images/products/kahvaltilik-gemlik-siyah-zeytin.jpg",
    categorySlug: "zeytin",
    descriptionParagraphs: [
      "Gemlik bölgesinin karakteristik siyah zeytini, kahvaltı sofralarının ve profesyonel mutfakların vazgeçilmez lezzetlerinden biridir.",
      "Kahvaltılık Gemlik siyah zeytinimiz; olgunlaşmış meyve seçimi ve kontrollü işleme ile dengeli tuzluluk ve yumuşak doku sunmayı hedefler. İşletmelere toptan tedarikte istikrarlı kalite ve güvenilir stok anlayışıyla hizmet veririz.",
    ],
  },
  {
    id: 14,
    name: "Gemlik Izgara Yeşil Zeytin",
    slug: "gemlik-izgara-yesil-zeytin",
    image: "/images/products/gemlik-izgara-yesil-zeytin.jpg",
    categorySlug: "zeytin",
    descriptionParagraphs: [
      "Izgara yeşil zeytin, hafif duman aroması ve gevrek dokusuyla salatalardan tabak süslemelerine kadar geniş kullanım alanı sunar.",
      "Gemlik ızgara yeşil zeytin ürünümüz; kahvaltılık ve servis ürünleri için pratik ve lezzetli bir seçenektir. Doğal içerik ve profesyonel mutfak beklentilerine uygun tedarik için Baltacı Gıda güvencesiyle sunulur.",
    ],
  },
  // Bal
  {
    id: 20,
    name: "Rize Ovit Yaylası Çiçek Balı",
    slug: "rize-ovit-yaylasi-cicek-bali",
    image: "/images/products/rize-ovit-yaylasi-cicek-bali.jpg",
    categorySlug: "bal",
    descriptionParagraphs: [
      "Rize Ovit Yaylası’nın zengin florasında üretilen çiçek balı, yüksek rakım ve temiz hava koşullarının katkısıyla dengeli bir aroma profili sunar.",
      "Doğal süzüm ve kontrollü tedarik anlayışıyla işletmelere sunulan bu ürün; kahvaltılardan pastane ve mutfak kullanımlarına kadar güvenilir bir seçenektir.",
    ],
  },
  {
    id: 21,
    name: "Rize Ovit Yaylası Teneke Çiçek Balı",
    slug: "rize-ovit-yaylasi-teneke-cicek-bali",
    image: "/images/products/rize-ovit-yaylasi-teneke-cicek-bali.jpg",
    categorySlug: "bal",
    descriptionParagraphs: [
      "Ovit Yaylası çiçek balının teneke ambalajlı seçeneği, profesyonel mutfaklar ve yoğun tüketim yapan işletmeler için pratik saklama ve kullanım kolaylığı sunar.",
      "Aynı doğal içerik ve lezzet anlayışıyla; toptan tedarik, düzenli stok ve hijyen odaklı lojistik ile Baltacı Gıda güvencesiyle ulaştırılır.",
    ],
  },
  {
    id: 22,
    name: "Rize Kaçkar Yaylası Çiçek Balı",
    slug: "rize-kackar-yaylasi-cicek-bali",
    image: "/images/products/rize-kackar-yaylasi-cicek-bali.jpg",
    categorySlug: "bal",
    descriptionParagraphs: [
      "Kaçkar Yaylası’nın doğal bitki örtüsü ve iklimi, çiçek balına karakteristik bir tat ve koku kazandırır.",
      "Rize Kaçkar Yaylası çiçek balımız; doğallığı ön planda tutan işletmeler için güvenilir bir tercihtir. Katkısız üretim hedefi ve kalite kontrol süreçlerimizle desteklenir.",
    ],
  },
  // Reçel
  {
    id: 23,
    name: "Üçel Çilek Reçeli",
    slug: "ucel-cilek-receli",
    image: "/images/products/ucel-cilek-receli.jpg",
    categorySlug: "recel",
    descriptionParagraphs: [
      "Üçel Çilek Reçeli, taze çilek lezzetini kahvaltı ve tatlılara taşıyan, geleneksel reçel yapım teknikleriyle hazırlanan bir üründür.",
      "Yoğun meyve aroması ve doğal içerik anlayışıyla profesyonel mutfaklarda güvenle kullanılabilir. Baltacı Gıda olarak süreklilik ve standartlara uygun tedarik sunarız.",
    ],
  },
  {
    id: 24,
    name: "Üçel Çilek Reçeli 10 Kg Kova",
    slug: "ucel-cilek-receli-10-kg-kova",
    image: "/images/products/ucel-cilek-receli-10-kg-kova.jpg",
    categorySlug: "recel",
    descriptionParagraphs: [
      "10 kg kova ambalaj, oteller, catering ve büyük mutfaklar için ekonomik ve pratik kullanım sunar.",
      "Üçel çilek reçelinin aynı lezzet profili; endüstriyel ölçekte hijyenik koşullarda işletmenize ulaştırılmayı hedefler.",
    ],
  },
  {
    id: 25,
    name: "Üçel Vişne Reçeli",
    slug: "ucel-visne-receli",
    image: "/images/products/ucel-visne-receli.jpg",
    categorySlug: "recel",
    descriptionParagraphs: [
      "Üçel Vişne Reçeli, hafif ekşimsi tadı ve yoğun meyve dokusuyla kahvaltı ve pastacılık ürünlerinde öne çıkar.",
      "Doğal lezzet anlayışı ve güvenilir tedarik ile işletmelere yönelik çözümlerimizin parçasıdır.",
    ],
  },
  {
    id: 26,
    name: "Üçel Vişne Reçeli 10 Kg Kova",
    slug: "ucel-visne-receli-10-kg-kova",
    image: "/images/products/ucel-visne-receli-10-kg-kova.jpg",
    categorySlug: "recel",
    descriptionParagraphs: [
      "Vişne reçelinin 10 kg kova ambalajı, yüksek hacimli kullanım yapan işletmeler için uygundur.",
      "Standart lezzet ve kıvamın korunması; depolama ve servis süreçlerinde pratiklik sağlar.",
    ],
  },
  {
    id: 27,
    name: "Üçel Böğürtlen Reçeli",
    slug: "ucel-bogurtlen-receli",
    image: "/images/products/ucel-bogurtlen-receli.jpg",
    categorySlug: "recel",
    descriptionParagraphs: [
      "Üçel Böğürtlen Reçeli, aromatik tadı ve koyu rengiyle tatlı ve kahvaltılık kullanımlarda dikkat çeker.",
      "Profesyonel mutfakların doğal içerik beklentilerine uygun, güvenilir bir Üçel ürünüdür.",
    ],
  },
  {
    id: 28,
    name: "Üçel Böğürtlen Reçeli 10 Kg Kova",
    slug: "ucel-bogurtlen-receli-10-kg-kova",
    image: "/images/products/ucel-bogurtlen-receli-10-kg-kova.jpg",
    categorySlug: "recel",
    descriptionParagraphs: [
      "Böğürtlen reçelinin endüstriyel mutfaklar için 10 kg kova seçeneği, maliyet ve kullanım verimliliği sunar.",
      "Üçel kalite çizgisiyle; düzenli tedarik ve hijyen standartlarına uygun sunum hedeflenir.",
    ],
  },
  // Pekmez
  {
    id: 29,
    name: "Üçel Üzüm Pekmezi",
    slug: "ucel-uzum-pekmezi",
    image: "/images/products/ucel-uzum-pekmezi.jpg",
    categorySlug: "pekmez",
    descriptionParagraphs: [
      "Üçel Üzüm Pekmezi, geleneksel pişirme ve yoğunlaştırma ile elde edilen, kahvaltı ve tatlılarda kullanılan klasik bir lezzettir.",
      "Doğal üzüm kaynağı ve kontrollü üretim anlayışıyla işletmelere güvenilir pekmez tedariki sağlarız.",
    ],
  },
  {
    id: 30,
    name: "Üçel Üzüm Pekmezi 1300 Gr",
    slug: "ucel-uzum-pekmezi-1300-gr",
    image: "/images/products/ucel-uzum-pekmezi-1300-gr.jpg",
    categorySlug: "pekmez",
    descriptionParagraphs: [
      "1300 gr ambalaj, perakende ve orta ölçekli mutfaklar için kullanışlı bir seçenektir.",
      "Üçel üzüm pekmezinin aynı lezzet ve kıvamı; pratik saklama ile birlikte sunulur.",
    ],
  },
  {
    id: 31,
    name: "Üçel Üzüm Pekmezi 2500 Gr",
    slug: "ucel-uzum-pekmezi-2500-gr",
    image: "/images/products/ucel-uzum-pekmezi-2500-gr.jpg",
    categorySlug: "pekmez",
    descriptionParagraphs: [
      "2500 gr ambalaj, daha yüksek tüketim hacmine sahip işletmeler için ekonomik çözüm sunar.",
      "Kahvaltılık ve tatlı üretimlerinde süreklilik isteyen profesyonel mutfakların tercih edebileceği bir formattır.",
    ],
  },
  // Tahin
  {
    id: 32,
    name: "Üçel Tahin 1000 Gr",
    slug: "ucel-tahin-1000-gr",
    image: "/images/products/ucel-tahin-1000-gr.jpg",
    categorySlug: "tahin",
    descriptionParagraphs: [
      "Üçel tahin, susamın özenle işlenmesiyle elde edilen, kıvamlı ve aromatik bir üründür.",
      "1000 gr ambalaj; sos, humus ve kahvaltılık kullanımlar için pratik bir seçenektir.",
    ],
  },
  {
    id: 33,
    name: "Üçel Tahin 2000 Gr",
    slug: "ucel-tahin-2000-gr",
    image: "/images/products/ucel-tahin-2000-gr.jpg",
    categorySlug: "tahin",
    descriptionParagraphs: [
      "2000 gr tahin, orta ve büyük ölçekli mutfaklarda daha uzun süreli kullanım sunar.",
      "Üçel kalitesiyle; homojen doku ve dengeli tat profili hedeflenir.",
    ],
  },
  {
    id: 34,
    name: "Üçel Tahin 9 Kg Kova",
    slug: "ucel-tahin-9-kg-kova",
    image: "/images/products/ucel-tahin-9-kg-kova.jpg",
    categorySlug: "tahin",
    descriptionParagraphs: [
      "9 kg kova ambalaj, endüstriyel mutfaklar ve yoğun tahin kullanan işletmeler için uygundur.",
      "Toptan tedarikte süreklilik ve hijyen odaklı lojistik ile Baltacı Gıda güvencesiyle sunulur.",
    ],
  },
  // Helva
  {
    id: 35,
    name: "Üçel Kakaolu Helva",
    slug: "ucel-kakaolu-helva",
    image: "/images/products/ucel-kakaolu-helva.jpg",
    categorySlug: "helva",
    descriptionParagraphs: [
      "Üçel Kakaolu Helva, geleneksel helva lezzetini kakaolu profille birleştirir; atıştırmalık ve kahvaltılık kullanıma uygundur.",
      "Doğal içerik anlayışı ve güvenilir marka tedariki ile işletmelere sunulur.",
    ],
  },
  {
    id: 36,
    name: "Üçel Sade Tahin Helva",
    slug: "ucel-sade-tahin-helva",
    image: "/images/products/ucel-sade-tahin-helva.jpg",
    categorySlug: "helva",
    descriptionParagraphs: [
      "Sade tahin helva, tahinin yoğun aromasıyla öne çıkan klasik bir lezzettir.",
      "Perakende ve mutfak kullanımları için Üçel güvencesiyle tedarik edilir.",
    ],
  },
  // Sucuk
  {
    id: 37,
    name: "Kahvaltılık Dana Kangal Sucuk",
    slug: "kahvaltilik-dana-kangal-sucuk",
    image: "/images/products/kahvaltilik-dana-kangal-sucuk.jpg",
    categorySlug: "sucuk",
    descriptionParagraphs: [
      "Kangal formunda kahvaltılık dana sucuk, geleneksel baharat ve olgunlaştırma kültürüyle sofraların ve profesyonel mutfakların vazgeçilmezlerinden biridir.",
      "Soğuk zincir ve hijyen standartlarına uygun tedarik anlayışıyla işletmenize güvenilir sunum hedefleriz.",
    ],
  },
  {
    id: 38,
    name: "Dana Antrikot Sucuk",
    slug: "dana-antrikot-sucuk",
    image: "/images/products/dana-antrikot-sucuk.jpg",
    categorySlug: "sucuk",
    descriptionParagraphs: [
      "Dana antrikot sucuk, seçilmiş et kısmı ve dengeli baharat karışımıyla öne çıkar; ızgara ve sıcak servislerde güçlü bir lezzet sunar.",
      "Baltacı Gıda olarak toptan gıda tedarikinde kalite sürekliliği ve güvenilir stok yönetimiyle yanınızdayız.",
    ],
  },
  // Çay
  {
    id: 39,
    name: "Çaykur Tiryaki Çayı",
    slug: "caykur-tiryaki-cayi",
    image: "/images/products/caykur-tiryaki-cayi.jpg",
    categorySlug: "cay",
    descriptionParagraphs: [
      "Yavuzköy topraklarında özenle yetiştirilen çay yaprakları, doğanın sunduğu en saf haliyle toplanarak titizlikle işlenir. Karadeniz’in iklimi ve verimli topraklarının kazandırdığı aroma, Çaykur Tiryaki harmanıyla birleşerek yoğun dem ve karakteristik bir tat profili sunar.",
      "Üretimden tüketime kadar kalite, hijyen ve sürdürülebilirlik ilkelerini benimseyen anlayışımızla işletmelere güvenilir tedarik sağlarız. Her bardakta berrak renk ve güçlü aroma hedeflenir.",
    ],
  },
  {
    id: 40,
    name: "Çaykur Altınbaş Klasik",
    slug: "caykur-altinbas-klasik",
    image: "/images/products/caykur-altinbas-klasik.jpg",
    categorySlug: "cay",
    descriptionParagraphs: [
      "Çaykur Altınbaş Klasik, geleneksel siyah çay içimini seven işletmeler ve sofralar için dengeli dem, hoş aroma ve sakin bir içim sunmayı hedefleyen bir üründür.",
      "Karadeniz çay kültürüyle uyumlu bu harman; profesyonel mutfaklarda günlük demleme ihtiyaçlarında istikrarlı kalite ve Çaykur güvencesiyle Baltacı Gıda tedarik ağıyla ulaştırılır.",
    ],
  },
];

export const heroImages = [
  {
    url: "/images/hero/hero-1.jpg",
    alt: "Geleneksel yöresel lezzetler",
  },
  {
    url: "/images/hero/hero-2.jpg",
    alt: "Doğal peynir çeşitleri",
  },
  {
    url: "/images/hero/hero-3.jpg",
    alt: "Organik bal",
  },
];

export const contactInfo = {
  instagram: "@baltacigida",
  instagramUrl: "https://instagram.com/baltacigida",
  email: "baltacigida53@gmail.com",
  phone: "+90 531 872 34 53",
  whatsappUrl: "https://wa.me/905318723453",
};

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((product) => product.categorySlug === categorySlug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
