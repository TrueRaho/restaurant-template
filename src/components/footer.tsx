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
              className="text-muted-foreground hover:text-[#0A84FF] transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#0A84FF] transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://tripadvisor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#0A84FF] transition-colors duration-300"
              aria-label="TripAdvisor"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353L1.85 4.135.006 5.478l2.24 2.562c-.406.652-.777 1.33-1.118 2.032L0 10.072l.928.371c.341.702.712 1.38 1.118 2.032L.006 14.937l1.844 1.343 2.511-2.513c2.307 1.569 4.975 2.353 7.645 2.353s5.338-.784 7.645-2.353l2.511 2.513 1.844-1.343-2.04-2.462c.406-.652.777-1.33 1.118-2.032L24 10.072l-1.128-.001c-.341-.702-.712-1.38-1.118-2.032l2.24-2.562L22.15 4.135l-2.511 2.513c-2.307-1.569-4.975-2.353-7.645-2.353h.012zm0 2.184c1.978 0 3.956.552 5.685 1.656l-1.177 1.177c-1.355-.817-2.934-1.252-4.508-1.252s-3.153.435-4.508 1.252L6.321 8.135c1.729-1.104 3.707-1.656 5.685-1.656zm-5.685 4.508c0-1.574.435-3.153 1.252-4.508L6.396 5.302c-1.104 1.729-1.656 3.707-1.656 5.685s.552 3.956 1.656 5.685l1.177-1.177c-.817-1.355-1.252-2.934-1.252-4.508zm5.685 5.685c-1.978 0-3.956-.552-5.685-1.656l1.177-1.177c1.355.817 2.934 1.252 4.508 1.252s3.153-.435 4.508-1.252l1.177 1.177c-1.729 1.104-3.707 1.656-5.685 1.656zm5.685-5.685c0 1.574-.435 3.153-1.252 4.508l1.177 1.177c1.104-1.729 1.656-3.707 1.656-5.685s-.552-3.956-1.656-5.685L16.434 6.479c.817 1.355 1.252 2.934 1.252 4.508z" />
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
