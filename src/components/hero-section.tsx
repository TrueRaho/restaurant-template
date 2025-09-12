"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/elegant-restaurant-interior-with-warm-lighting-and.jpg"
          alt="Restaurant interior"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in-up">
        <div className="mb-8">
          <img src="/elegant-restaurant-logo-minimalist-design.jpg" alt="Restaurant Logo" className="w-24 h-24 mx-auto mb-6 rounded-full" />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-balance leading-tight">Bella Vista</h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 text-pretty max-w-2xl mx-auto leading-relaxed">
          Изысканная кухня в сердце города. Где каждое блюдо — произведение искусства.
        </p>

        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105"
          onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
        >
          Забронировать стол
        </Button>
      </div>
    </section>
  )
}
