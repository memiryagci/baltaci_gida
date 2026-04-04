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
 *        │   ├── pekmez.jpg, tahin.jpg, helva.jpg, cay.jpg
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
    id: 10,
    name: "Rize Çiçek Balı",
    slug: "rize-cicek-bali",
    image: "/images/products/rize-cicek-bali.jpg",
    categorySlug: "bal",
    descriptionParagraphs: [
      "Doğanın en saf armağanlarından biri olan çiçek balı, Rize’nin zengin bitki örtüsü ve yüksek rakımlı yaylalarında, arıların doğal polinasyon döngüsüyle üretilir.",
      "Rize çiçek balımız; bölgenin florasından gelen çiçek çeşitliliği sayesinde dengeli bir aroma profili sunmayı hedefler. Katkısız, doğal süzüm ve kontrollü tedarik anlayışıyla profesyonel mutfakların ve perakende tüketicinin güvenilir tercihlerinden biri olmayı amaçlar.",
    ],
  },
  // Reçel
  {
    id: 9,
    name: "Üçel Reçel",
    slug: "ucel-recel",
    image: "/images/products/ucel-recel.jpg",
    categorySlug: "recel",
    descriptionParagraphs: [
      "“Üçel Reçel”",
      "Üçel Reçel, lezzet tutkunlarının sofralarına doğal tatlar kazandırmak için özenle hazırlanmıştır. Yöresel lezzetleri koruyan bu reçelin her kavanozu, seçilmiş meyvelerden ve doğal içeriklerle, deneyimli üretim anlayışıyla hazırlanır.",
      "Çiftlikten sofraya yolculuğunda gereksiz katkı kullanılmadan üretilmeyi hedefleyen Üçel Reçel, kahvaltıların ve tatlıların vazgeçilmezlerinden biri olmaya adaydır. Yoğun meyve hissini hissettiğiniz her lokmada, geleneksel reçel yapımına olan bağlılığımızı hissetmenizi isteriz.",
    ],
  },
  // Pekmez
  {
    id: 11,
    name: "Rize Hakiki Dut Pekmezi",
    slug: "rize-hakiki-dut-pekmezi",
    image: "/images/products/rize-hakiki-dut-pekmezi.jpg",
    categorySlug: "pekmez",
    descriptionParagraphs: [
      "Hakiki dut pekmezi, geleneksel pişirme ve yoğunlaştırma yöntemleriyle elde edilen, koyu kıvamı ve karakteristik aromasıyla tanınan bir yöresel üründür.",
      "Rize hakiki dut pekmezi; kahvaltılardan tatlılara, sütlü tatlılardan soslara kadar geniş kullanım sunar. Doğal hammaddeler ve kontrollü üretim süreçleriyle, profesyonel mutfakların dengeli ve güvenilir bir bileşeni olmayı hedefler.",
    ],
  },
  // Çay
  {
    id: 12,
    name: "Çaykur Çay",
    slug: "caykur-cay",
    image: "/images/products/caykur-cay.jpg",
    categorySlug: "cay",
    descriptionParagraphs: [
      "Yavuzköy topraklarında özenle yetiştirdiğimiz çay yaprakları, doğanın sunduğu en saf haliyle toplanarak titizlikle işlenir. Karadeniz’in eşsiz iklimi ve verimli topraklarının kazandırdığı aroma ve kalite, Çaykur güvencesiyle buluşarak sizlere ulaştırılmaktadır.",
      "Üretimden tüketime kadar her aşamada kalite, hijyen ve sürdürülebilirlik ilkelerini benimseyen anlayışımızla, doğallığı koruyan ve lezzeti ön planda tutan bir hizmet sunuyoruz. Her bardakta hissedilen yoğun aroma, berrak renk ve eşsiz tat, yılların deneyimi ve emeğinin bir yansımasıdır.",
      "İşletmelere ve profesyonel mutfaklara özel çözümlerimizle, güvenilir tedarik, istikrarlı kalite ve hızlı teslimat avantajı sağlıyoruz. Doğallık, güven ve eşsiz lezzet, her yudumda kendini hissettirir.",
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
  phone: "+90 536 579 43 97",
  whatsappUrl: "https://wa.me/905365794397",
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
