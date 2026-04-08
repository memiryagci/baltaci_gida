import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { categories, getProductsByCategory } from "@/lib/data";

export const metadata: Metadata = {
  title: "Ürünler | Baltacı Gıda",
  description:
    "Tüm ürünlerimizi kategorilere göre inceleyin. Tereyağı, peynir, zeytin, bal ve daha fazlası.",
};

export default function ProductsPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Ürünler
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Kategorilere göre tüm ürünlerimiz
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {categories.map((category) => {
            const categoryProducts = getProductsByCategory(category.slug);
            if (categoryProducts.length === 0) {
              return null;
            }

            return (
              <section key={category.slug} id={category.slug}>
                <div className="flex flex-col items-center justify-between gap-4 border-b border-border pb-4 sm:flex-row sm:items-end">
                  <h2 className="text-2xl font-bold text-foreground">
                    {category.name}
                  </h2>
                  <Link
                    href={`/kategori/${category.slug}`}
                    className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    Tümünü gör →
                  </Link>
                </div>

                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {categoryProducts.map((product) => (
                    <Link
                      key={product.id}
                      href={`/urun/${product.slug}`}
                      className="group block overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <div className="aspect-square overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={600}
                          height={600}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-center font-medium text-card-foreground group-hover:text-primary">
                          {product.name}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <div className="mt-16 text-center">
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
