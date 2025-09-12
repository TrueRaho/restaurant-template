"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  { src: "/elegant-restaurant-dining-room-with-ambient-lighti.jpg", alt: "Dining room" },
  { src: "/gourmet-pasta-dish-beautifully-plated.jpg", alt: "Pasta dish" },
  { src: "/premium-wine-cellar.png", alt: "Wine cellar" },
  { src: "/chef-preparing-fresh-ingredients.jpg", alt: "Chef at work" },
  { src: "/elegant-dessert-presentation.jpg", alt: "Dessert" },
  { src: "/restaurant-terrace-with-city-view.jpg", alt: "Terrace view" },
  { src: "/cocktail-bar-with-premium-spirits.jpg", alt: "Bar area" },
  { src: "/private-dining-room-for-special-occasions.jpg", alt: "Private dining" },
]

export function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">Галерея</h2>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {galleryImages.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-96 md:h-[500px] object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border-border hover:bg-background/90"
            onClick={prevImage}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border-border hover:bg-background/90"
            onClick={nextImage}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="flex justify-center mt-6 gap-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary" : "bg-muted"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
