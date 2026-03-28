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
 *        │   ├── peynir.jpg
 *        │   ├── bal.jpg
 *        │   ├── recel.jpg
 *        │   ├── tereyagi.jpg
 *        │   ├── pekmez.jpg
 *        │   └── cay.jpg
 *        └── products
 *            ├── rize-tam-yagli-taze-kasar-peyniri.jpg
 *            ├── rize-tam-yagli-kolot-peyniri.jpg
 *            ├── rize-tam-yagli-tel-peynir.jpg
 *            ├── tam-yagli-kars-eski-kasar-peyniri.jpg
 *            ├── erzincan-tulum-peyniri.jpg
 *            ├── ezine-peyniri.jpg
 *            ├── rize-yayla-tereyagi.jpg
 *            ├── rize-yemeklik-yayik-tereyagi.jpg
 *            ├── ucel-recel.jpg
 *            ├── rize-cicek-bali.jpg
 *            ├── rize-hakiki-dut-pekmezi.jpg
 *            └── caykur-cay.jpg
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
}

export const categories: Category[] = [
  {
    id: "peynir",
    name: "Peynir",
    slug: "peynir",
    image: "/images/categories/peynir.jpg",
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
    id: "tereyagi",
    name: "Tereyağı",
    slug: "tereyagi",
    image: "/images/categories/tereyagi.jpg",
  },
  {
    id: "pekmez",
    name: "Pekmez",
    slug: "pekmez",
    image: "/images/categories/pekmez.jpg",
  },
  {
    id: "cay",
    name: "Çay",
    slug: "cay",
    image: "/images/categories/cay.jpg",
  },
];

export const products: Product[] = [
  // Peynir
  {
    id: 1,
    name: "Rize Tam Yağlı Taze Kaşar Peyniri",
    slug: "rize-tam-yagli-taze-kasar-peyniri",
    image: "/images/products/rize-tam-yagli-taze-kasar-peyniri.jpg",
    categorySlug: "peynir",
  },
  {
    id: 2,
    name: "Rize Tam Yağlı Kolot Peyniri",
    slug: "rize-tam-yagli-kolot-peyniri",
    image: "/images/products/rize-tam-yagli-kolot-peyniri.jpg",
    categorySlug: "peynir",
  },
  {
    id: 3,
    name: "Rize Tam Yağlı Tel Peynir",
    slug: "rize-tam-yagli-tel-peynir",
    image: "/images/products/rize-tam-yagli-tel-peynir.jpg",
    categorySlug: "peynir",
  },
  {
    id: 4,
    name: "Tam Yağlı Kars Eski Kaşar Peyniri",
    slug: "tam-yagli-kars-eski-kasar-peyniri",
    image: "/images/products/tam-yagli-kars-eski-kasar-peyniri.jpg",
    categorySlug: "peynir",
  },
  {
    id: 5,
    name: "Erzincan Tulum Peyniri",
    slug: "erzincan-tulum-peyniri",
    image: "/images/products/erzincan-tulum-peyniri.jpg",
    categorySlug: "peynir",
  },
  {
    id: 6,
    name: "Ezine Peyniri",
    slug: "ezine-peyniri",
    image: "/images/products/ezine-peyniri.jpg",
    categorySlug: "peynir",
  },
  // Tereyağı
  {
    id: 7,
    name: "Rize Yayla Tereyağı",
    slug: "rize-yayla-tereyagi",
    image: "/images/products/rize-yayla-tereyagi.jpg",
    categorySlug: "tereyagi",
  },
  {
    id: 8,
    name: "Rize Yemeklik Yayık Tereyağı",
    slug: "rize-yemeklik-yayik-tereyagi",
    image: "/images/products/rize-yemeklik-yayik-tereyagi.jpg",
    categorySlug: "tereyagi",
  },
  // Reçel
  {
    id: 9,
    name: "Üçel Reçel",
    slug: "ucel-recel",
    image: "/images/products/ucel-recel.jpg",
    categorySlug: "recel",
  },
  // Bal
  {
    id: 10,
    name: "Rize Çiçek Balı",
    slug: "rize-cicek-bali",
    image: "/images/products/rize-cicek-bali.jpg",
    categorySlug: "bal",
  },
  // Pekmez
  {
    id: 11,
    name: "Rize Hakiki Dut Pekmezi",
    slug: "rize-hakiki-dut-pekmezi",
    image: "/images/products/rize-hakiki-dut-pekmezi.jpg",
    categorySlug: "pekmez",
  },
  // Çay
  {
    id: 12,
    name: "Çaykur Çay",
    slug: "caykur-cay",
    image: "/images/products/caykur-cay.jpg",
    categorySlug: "cay",
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
