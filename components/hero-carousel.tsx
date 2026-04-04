"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { heroImages } from "@/lib/data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-[60vh] w-full overflow-hidden sm:h-[70vh] lg:h-[80vh]">
      {heroImages.map((image, index) => (
        <div
          key={image.url}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentIndex ? "opacity-100" : "opacity-0"
          )}
        >
          <Image
            src={image.url}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-balance text-4xl font-bold text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
            Yöresel Lezzetler
          </h1>
          <p className="mt-4 text-lg text-white/90 drop-shadow sm:text-xl">
            Doğal ve Geleneksel Ürünlerle İşletmenize Lezzet Katıyoruz
          </p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
        aria-label="Önceki görsel"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
        aria-label="Sonraki görsel"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "h-2.5 w-2.5 rounded-full transition-colors",
              index === currentIndex ? "bg-white" : "bg-white/50"
            )}
            aria-label={`${index + 1}. görsele git`}
          />
        ))}
      </div>
    </section>
  );
}
