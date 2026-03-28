import Link from "next/link";
import Image from "next/image";
import { categories } from "@/lib/data";
import { HeroCarousel } from "@/components/hero-carousel";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />

      {/* Categories Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Kategoriler
            </h2>
            <p className="mt-4 text-muted-foreground">
              Yöresel lezzetlerimizi keşfedin
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/kategori/${category.slug}`}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-foreground/40 transition-colors group-hover:bg-foreground/50">
                  <h3 className="text-2xl font-bold text-background sm:text-3xl">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
