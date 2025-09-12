import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { GallerySection } from "@/components/gallery-section"
import { MenuSection } from "@/components/menu-section"
import { BookingSection } from "@/components/booking-section"
import { ReviewsSection } from "@/components/reviews-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function RestaurantPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <MenuSection />
      <BookingSection />
      <ReviewsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
