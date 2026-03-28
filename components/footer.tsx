import Link from "next/link";
import { Instagram, Mail, Phone } from "lucide-react";
import { contactInfo } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold">Baltacı Gıda</h3>
            <p className="mt-2 text-sm text-primary-foreground/80">
              Yöresel lezzetlerin adresi
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-semibold">İletişim</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href={contactInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-primary-foreground/80"
                >
                  <Instagram className="h-4 w-4" />
                  {contactInfo.instagram}
                </Link>
              </li>
              <li>
                <Link
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2 transition-colors hover:text-primary-foreground/80"
                >
                  <Mail className="h-4 w-4" />
                  {contactInfo.email}
                </Link>
              </li>
              <li>
                <Link
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 transition-colors hover:text-primary-foreground/80"
                >
                  <Phone className="h-4 w-4" />
                  {contactInfo.phone}
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold">Hızlı Bağlantılar</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-primary-foreground/80"
                >
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link
                  href="/urunler"
                  className="transition-colors hover:text-primary-foreground/80"
                >
                  Ürünler
                </Link>
              </li>
              <li>
                <Link
                  href="/hakkimizda"
                  className="transition-colors hover:text-primary-foreground/80"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  href="/iletisim"
                  className="transition-colors hover:text-primary-foreground/80"
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} Baltacı Gıda. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
