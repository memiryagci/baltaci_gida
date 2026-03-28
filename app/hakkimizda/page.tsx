import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hakkımızda | Baltacı Gıda",
  description:
    "Baltacı Gıda hakkında: kalite, güven ve toptan gıda tedarikinde güçlü iş ortağınız.",
};

const paragraphs = [
  "Baltacı Gıda, gıda sektöründe kalite ve güveni ön planda tutarak faaliyet gösteren bir tedarik firmasıdır. Kurucumuz Emirhan Baltacı, girişimcilik vizyonu ve ticari disipliniyle sektöre güçlü bir adım atmıştır.",
  "Emirhan Baltacı, özellikle toptan gıda tedariki alanında işletmelerin ihtiyaçlarını yakından analiz ederek; hızlı, güvenilir ve sürdürülebilir bir tedarik sistemi oluşturmayı hedeflemiştir. Müşteri memnuniyetini esas alan yaklaşımı sayesinde Baltacı Gıda, kısa sürede restoranlar, kafeler ve çeşitli işletmeler için güvenilir bir iş ortağı haline gelmiştir.",
  "Başta tereyağı, peynir, bal, reçel, pekmez ve çay olmak üzere; kahvaltılık ürünler dahil geniş ürün yelpazemizle profesyonel mutfaklara hizmet sunuyoruz. Ürünlerimizin seçiminden teslimatına kadar her aşamada kalite standartlarına uygun hareket ediyoruz.",
  "Baltacı Gıda olarak amacımız; uygun fiyat, yüksek kalite ve hızlı hizmet anlayışıyla sektörde kalıcı ve güvenilir bir marka olmaktır.",
  "Emirhan Baltacı liderliğinde, her geçen gün büyüyen yapımızla müşterilerimize en iyi hizmeti sunmaya devam ediyoruz.",
];

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Hakkımızda
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Baltacı Gıda ve kurucumuz Emirhan Baltacı
          </p>
        </div>

        <div className="mt-12 space-y-6 text-lg leading-relaxed text-muted-foreground">
          {paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
          <p className="border-t border-border pt-6 font-semibold text-foreground">
            Baltacı Gıda — Profesyonel mutfakların güçlü tedarikçisi.
          </p>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            &larr; Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </div>
  );
}
