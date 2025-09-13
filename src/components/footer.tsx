import { Button } from "@/components/ui/button"
import { Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-4">
            <img
              src="/elegant-restaurant-logo-minimalist-design.jpg"
              alt="Bella Vista Logo"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-xl font-bold">Bella Vista</span>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[var(--color-instagram)] transition-colors duration-300 
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-instagram)]/60 rounded"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[var(--color-facebook)] transition-colors duration-300 
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-facebook)]/60 rounded"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>

            <a
              href="https://tripadvisor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[var(--color-tripadvisor)] transition-colors duration-300 
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-tripadvisor)]/60 rounded"
              aria-label="TripAdvisor"
            >
              <svg
                viewBox="0 -96 512.2 512.2"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M128.2 127.9C92.7 127.9 64 156.6 64 192c0 35.4 28.7 64.1 64.1 64.1 35.4 0 64.1-28.7 64.1-64.1.1-35.4-28.6-64.1-64-64.1zm0 110c-25.3 0-45.9-20.5-45.9-45.9s20.5-45.9 45.9-45.9S174 166.7 174 192s-20.5 45.9-45.8 45.9z"></path>
                <circle cx="128.4" cy="191.9" r="31.9"></circle>
                <path d="M384.2 127.9c-35.4 0-64.1 28.7-64.1 64.1 0 35.4 28.7 64.1 64.1 64.1 35.4 0 64.1-28.7 64.1-64.1 0-35.4-28.7-64.1-64.1-64.1zm0 110c-25.3 0-45.9-20.5-45.9-45.9s20.5-45.9 45.9-45.9S430 166.7 430 192s-20.5 45.9-45.8 45.9z"></path>
                <circle cx="384.4" cy="191.9" r="31.9"></circle>
                <path d="M474.4 101.2l37.7-37.4h-76.4C392.9 29 321.8 0 255.9 0c-66 0-136.5 29-179.3 63.8H0l37.7 37.4C14.4 124.4 0 156.5 0 192c0 70.8 57.4 128.2 128.2 128.2 32.5 0 62.2-12.1 84.8-32.1l43.4 31.9 42.9-31.2-.5-1.2c22.7 20.2 52.5 32.5 85.3 32.5 70.8 0 128.2-57.4 128.2-128.2-.1-35.4-14.6-67.5-37.9-90.7zM368 64.8c-60.7 7.6-108.3 57.6-111.9 119.5-3.7-62-51.4-112.1-112.3-119.5 30.6-22 69.6-32.8 112.1-32.8S337.4 42.8 368 64.8zM128.2 288.2C75 288.2 32 245.1 32 192s43.1-96.2 96.2-96.2 96.2 43.1 96.2 96.2c-.1 53.1-43.1 96.2-96.2 96.2zm256 0c-53.1 0-96.2-43.1-96.2-96.2s43.1-96.2 96.2-96.2 96.2 43.1 96.2 96.2c-.1 53.1-43.1 96.2-96.2 96.2z"></path>
              </svg>
            </a>
          </div>

          <div className="text-center md:text-right space-y-2">
            <p className="text-muted-foreground">© 2024 Bella Vista. Все права защищены.</p>
            <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground">
              Политика конфиденциальности
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
