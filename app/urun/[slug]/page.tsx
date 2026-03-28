import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategoryBySlug, getProductBySlug, products } from "@/lib/data";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Ürün Bulunamadı | Baltacı Gıda",
    };
  }

  const category = getCategoryBySlug(product.categorySlug);
  const title = category
    ? `${product.name} | ${category.name} | Baltacı Gıda`
    : `${product.name} | Baltacı Gıda`;

  return {
    title,
    description: product.descriptionParagraphs[0]?.slice(0, 160) ?? product.name,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const category = getCategoryBySlug(product.categorySlug);

  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <nav className="mb-8 text-center text-sm text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-primary">
            Ana Sayfa
          </Link>
          <span className="mx-2">/</span>
          {category ? (
            <>
              <Link
                href={`/kategori/${category.slug}`}
                className="transition-colors hover:text-primary"
              >
                {category.name}
              </Link>
              <span className="mx-2">/</span>
            </>
          ) : null}
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="overflow-hidden rounded-lg border border-border bg-card">
          <div className="relative aspect-square w-full bg-muted">
            <Image
              src={product.image}
              alt={product.name}
              width={800}
              height={800}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="p-6 sm:p-8">
            {category ? (
              <p className="text-sm font-medium text-primary">{category.name}</p>
            ) : null}
            <h1 className="mt-2 text-2xl font-bold text-card-foreground sm:text-3xl">
              {product.name}
            </h1>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              {product.descriptionParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          {category ? (
            <Link
              href={`/kategori/${category.slug}`}
              className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              &larr; {category.name} kategorisine dön
            </Link>
          ) : null}
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Ana sayfaya dön
          </Link>
        </div>
      </div>
    </div>
  );
}
