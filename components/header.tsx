"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { categories } from "@/lib/data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isKategoriActive = pathname.startsWith("/kategori");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="relative flex h-9 shrink-0 items-center sm:h-10"
          aria-label="Baltacı Gıda — Ana sayfa"
        >
          <Image
            src="/logo.png"
            alt="Baltacı Gıda"
            width={200}
            height={48}
            className="h-9 w-auto max-h-9 max-w-[min(200px,55vw)] object-contain object-left sm:h-10 sm:max-h-10 sm:max-w-[240px]"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/" ? "text-primary" : "text-muted-foreground"
            )}
          >
            Ana Sayfa
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary",
                isKategoriActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              Kategoriler
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
              {categories.map((category) => (
                <DropdownMenuItem key={category.slug} asChild>
                  <Link href={`/kategori/${category.slug}`}>
                    {category.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/hakkimizda"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/hakkimizda"
                ? "text-primary"
                : "text-muted-foreground"
            )}
          >
            Hakkımızda
          </Link>

          <Link
            href="/iletisim"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/iletisim"
                ? "text-primary"
                : "text-muted-foreground"
            )}
          >
            İletişim
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="border-t border-border bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "text-base font-medium transition-colors hover:text-primary",
                pathname === "/" ? "text-primary" : "text-muted-foreground"
              )}
            >
              Ana Sayfa
            </Link>

            <div className="flex flex-col gap-2">
              <span className="text-base font-medium text-foreground">
                Kategoriler
              </span>
              <div className="flex flex-col gap-2 pl-4">
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/kategori/${category.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "text-sm transition-colors hover:text-primary",
                      pathname === `/kategori/${category.slug}`
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/hakkimizda"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "text-base font-medium transition-colors hover:text-primary",
                pathname === "/hakkimizda"
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              Hakkımızda
            </Link>

            <Link
              href="/iletisim"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "text-base font-medium transition-colors hover:text-primary",
                pathname === "/iletisim"
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              İletişim
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
